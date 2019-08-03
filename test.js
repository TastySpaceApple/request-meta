(async function(){

  let meta = await require('./index')
          .getMeta('http://youtube-creators.googleblog.com/2013/08/so-long-video-responsesnext-up-better.html')

  console.log(meta)
})()
