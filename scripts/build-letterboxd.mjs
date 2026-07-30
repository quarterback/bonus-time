// Regenerates data/letterboxd.json — the poster grid in the rail's "Watching"
// module. Letterboxd's RSS sends no CORS header, so the browser can't read it
// directly; a scheduled GitHub Action runs this and commits the JSON, which the
// page then fetches same-origin. Same arrangement 2026-site uses for
// data/stream.json.
//
// Note: this is recently-watched, not favourites. Letterboxd publishes no
// favourites feed (/favorites/rss/ and variants all 403), so "faves" isn't
// available at any price.
import { writeFile, mkdir } from "node:fs/promises";

const USER = "ronbronson";
const FEED = `https://letterboxd.com/${USER}/rss/`;
const LIMIT = 6;

function parse(xml) {
  const items = [];
  const re = /<item[^>]*>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml))) {
    const block = m[1];
    const pick = (tag) => {
      const r = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
      return r ? r[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim() : "";
    };
    // Only diary entries carry filmTitle; list/review-only items are skipped.
    const title = pick("letterboxd:filmTitle");
    if (!title) continue;
    // The poster lives in an <img> inside the description CDATA. Upgrade to
    // https and drop nothing else — the CDN path already encodes the size.
    const img = pick("description").match(/<img[^>]+src="([^"]+)"/);
    items.push({
      title,
      year: pick("letterboxd:filmYear"),
      url: pick("link"),
      poster: img ? img[1].replace(/^http:\/\//, "https://") : "",
    });
  }
  return items;
}

let out = [];
try {
  const res = await fetch(FEED, { headers: { "User-Agent": "ronbronson.com/letterboxd-builder" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  out = parse(await res.text()).slice(0, LIMIT);
} catch (err) {
  console.error(`[letterboxd] ${FEED} failed: ${err.message}`);
  process.exit(1); // leave the committed JSON alone rather than blanking it
}

if (!out.length) {
  console.error("[letterboxd] feed parsed but held no films; leaving existing JSON in place");
  process.exit(1);
}

await mkdir("data", { recursive: true });
await writeFile("data/letterboxd.json", JSON.stringify(out, null, 2) + "\n");
console.log(`[letterboxd] wrote data/letterboxd.json with ${out.length} films`);
