const express = require('express')

const app = express()

const { response } = require('../../helpers')
const { photoToAdd } = require('../../models/photoModel')

// app.post('/', (req, res) => {
//   const { title, image_url, description } = req.body
//   console.log(req.body)
//   // await photoToAdd({ title, image_url, description })
//   //   .then((photo) => { 
//   //     res.json(response('success', 200, photo))
//   //   })
//   //   .catch(({ errors }) => {
//   //     return res.json(response('error', 404, errors[0].message)) 
//   //   })
//   return res.json({success: 'Success'}) 
// })
// app.get('/:id', async (req, res) => { 
//   await photo({ id: req.params.id })
//     .then((photo) => { res.json(response('success', 200, photo))})
//     .catch(({ errors }) => {
//       return res.json(response('error', 404, errors[0].message)) })
//       })

app.get('/', (req, res) => {
  res.json({success: 'success'})
})

module.exports = app