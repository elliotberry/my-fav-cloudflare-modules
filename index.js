import scrape from './src/scrape.js';
import JSON2RSS from './src/json2rss.js';
import genericCache from './src/genericCache.js';
import cheerioScrape from './src/cheerio-scrape.js';
/*

genericCache: a middleware-like function that takes event and next()
JSON2RSS: a function that takes an object and returns an RSS string. parameters: title, description, link, generator, items=[]
scrape: a function that takes a url and returns a node-parser object. parameters: url, fetchOptions={}


*/

export default {
  genericCache,
  JSON2RSS,
  scrape,
  cheerioScrape
};