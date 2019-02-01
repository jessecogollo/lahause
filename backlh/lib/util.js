'use strict';
const imgur = require('imgur')
const base64js = require('base64-js')
const {
  imgurClientId,
  imgurAPIUrl
} = require(`${__dirname}/../config`)
imgur.setClientId(imgurClientId)
imgur.setAPIUrl(imgurAPIUrl)

const moveAndUploadImage = async (image) => {
  try {
    const {
      data
    } = await imgur.uploadBase64(base64js.fromByteArray(image.data))
    return {
      id: data.id,
      link: data.link
    }
  }catch (error) {
    return error.message || error
  }
};

module.exports = {
  moveAndUploadImage
}
