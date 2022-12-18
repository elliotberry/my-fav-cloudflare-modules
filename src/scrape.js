
import { parse } from 'node-html-parser';

const fetchAndParse = async (argUrl, fetchOptions={}) => {
  let defaultFetchOptions =  {
    headers: {
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9',
      'accept-language': 'en-US,en;q=0.9',
      'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'document',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
    },
  };
  let fetchOptions = Object.assign(defaultFetchOptions, fetchOptions);
  try {
    const response = await fetch(argUrl, fetchOptions);
    if (response.status !== 200) {
      throw new Error(`error with url: ${response.status}`);
    } else if (!response.headers.get('content-type').includes('text/html')) {
      throw new Error(`no html to parse: content type is ${response.headers.get('content-type')}`);
    } else {
      const body = await response.text();
      const $ = parse(body);
      return $;
    }
  } catch (e) {
    throw new Error(`error grabbing html and parsing: ${e}`);
  }
};

export default fetchAndParse;
