const regexFindMetaTags = /<meta(.+?)\/?>/g

function parseMeta(html){
  let meta = {}

  let result;
  let head = html.substring(html.indexOf('<head'), html.indexOf('</head>'));
  while ((result = regexFindMetaTags.exec(head)) !== null) {
    let attributes = {}
    let metaTagText = result[1].trim();
    let key = '', value = '';
    let flagInKey = true, flagInSingleQuote = false, flagInDoubleQuote = false, flagEscapeNextCharacter = false;
    let char;
    for(let i=0, len=metaTagText.length; i<len; i++){
      char = metaTagText.charAt(i);
      if(flagInKey){
        if(char === '=') flagInKey = false;
        else if(char != ' ' || key != '') key += char;
      }
      else{
        if(!flagEscapeNextCharacter){ // escape all the special character things, m'kay?
          if((flagInSingleQuote || flagInDoubleQuote) && char === '\\') flagEscapeNextCharacter = true;
          else if(!flagInSingleQuote && char === '"') flagInDoubleQuote = !flagInDoubleQuote;
          else if(!flagInDoubleQuote && char === '\'') flagInSingleQuote = !flagInSingleQuote;
          else if(!flagInDoubleQuote && !flagInSingleQuote && char == ' '){
            attributes[key] = value;
            key = value = '';
            flagInKey = true;
          } else {
            value = value + char;
          }
        } else {
            value = value + char;
        }
      }
    }
    attributes[key] = value;

    if(attributes.name || attributes.property)
      meta[attributes.name || attributes.property] = attributes.content || '';

  }

  return meta;
}

function request(url){
  let requester = (/^https:/.test(url) ? require('https') : require('http'));
  return new Promise((resolve, reject) => {
    requester.get(url, (resp) => {
      if(resp.statusCode === 301) // follow redirects
        return resolve(request(resp.headers.location))
      else if(resp.statusCode !== 200)
        reject(new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`));
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(data)
      });

    }).on("error", reject);
  });
}

module.exports = {
  getMeta: async function(url){
    let html = await request(url)
    return parseMeta(html);
  }
};
