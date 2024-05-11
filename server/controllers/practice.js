// Reading User
const hi = (req, res) => {
  console.log("reading practice");
  res.json("hi")
}

const testing = (req, res) => {
  console.log("reading testing");
  res.json("hi")
}

module.exports = { hi, testing }