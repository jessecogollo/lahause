'use strict';

const {
  send
} = require('micro')
const {
  upload
} = require('micro-upload')
const {
  moveAndUploadImage
} = require('./lib/util')

module.exports = upload(async (req, res) => {
  try {
    if (!req.files) {
      return send(res, 400, 'no file uploaded...')
    }
    const images = Object.values(req.files)
    Promise.all(images.map(moveAndUploadImage))
    .then(result => send(res, 200, result))
    .catch(err => send(res, 500, err.message))
  }catch (error) {
    return send(res, 500, error.message)
  }
})
