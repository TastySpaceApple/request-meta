# request-meta

Gets html meta data from a URL. No dependencies, of course.

Example:

```js
(async function(){

  let meta = await require('request-meta')
          .getMeta('https://youtube-creators.googleblog.com/2013/08/so-long-video-responsesnext-up-better.html')

  console.log(meta)
})()
```
