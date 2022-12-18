const printAttr = (attribute, value) => {
  if (!attribute || !value) {
    return '';
  } else {
    attribute = attribute.trim().toLowerCase();
    return `<${attribute}>${value}</${attribute}>`;
  }
};


const printItems = items => {
  if (!items) {
    return '';
  } else {
    return items
      .map(item => {
        let ret = `<item>`;
        for (let key in item) {
          item[key] = item[key].trim();
          ret += printAttr(key, item[key]);
        }
        ret += `</item>`;
        return ret;
      })
      .join('')
      .trim();
  
  }
};

const JSON2RSS = ({title = '', description = '', link = '', generator = 'RSSMOBILE-840', items = []}) => {
  let metaAttr = printAttr('title', title) + printAttr('description', description) + printAttr('link', link) + printAttr('generator', generator);
  let rssString = `<?xml version="1.0" encoding="UTF-8" ?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0"><channel>${metaAttr}${printItems(items)}</channel></rss>`;
  return rssString;
};

export default JSON2RSS;
