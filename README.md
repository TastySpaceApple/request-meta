# request-meta

> Gets html meta data from a URL. No dependencies, of course.
[![@latest](https://img.shields.io/npm/v/request-meta)](https://www.npmjs.com/package/request-meta)

## Installation
```shell
npm install request-meta
```

## Usage

```js
(async function(){
  const request_meta = require('request-meta')
  let meta = await request_meta ('https://youtube-creators.googleblog.com/2013/08/so-long-video-responsesnext-up-better.html')

  console.log(meta)
})()
```
