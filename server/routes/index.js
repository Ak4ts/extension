const express = require("express")
const ts = require("googletrans").default

const routes = express.Router()

routes.post("/translate", (req, res) => {
  const { text } = req.body
  ts(text, {
    to: "pt",
    from: "en"
  }).then((resp) => {
    res.json({resp})
  })
})

module.exports = routes