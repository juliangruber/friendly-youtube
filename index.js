const ytdl = require('ytdl-core')

module.exports = (link, cb) => {
  ytdl.getInfo(link, (err, info) => {
    if (err) return cb(err)
    return cb(null, {
      name: `${info.title} (${info.author}).webm`,
      stream: ytdl.downloadFromInfo(info, { filter: 'audioonly' })
    })
  })
}
