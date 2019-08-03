# request-meta

> Gets html meta data from a URL. No dependencies, of course.
[![@latest](https://img.shields.io/npm/v/request-meta)](https://www.npmjs.com/package/request-meta)

## Installation
```shell
npm install @octokit/rest
```

## Usage

```js
(async function(){

  let meta = await require('request-meta')
          .getMeta('https://youtube-creators.googleblog.com/2013/08/so-long-video-responsesnext-up-better.html')

  console.log(meta)
})()
```
