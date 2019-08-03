(async function(){
  const request_meta = require('./index')
  
  let meta = await request_meta ('https://youtube-creators.googleblog.com/2013/08/so-long-video-responsesnext-up-better.html')

  console.log(meta)
})()
