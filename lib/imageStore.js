const fileStore = require('./imageStoreFile')
const S3Store = require('./imageStoreS3')
function save (name, base64String) {
  const imageData = base64String.split('data:image/png;base64,')[1]
  return S3Store.save(name, imageData)
}

module.exports = {
  save
}
