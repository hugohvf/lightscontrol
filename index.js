const ewelink = require("ewelink-api")
require("dotenv").config()

/* instantiate class */
const connection = new ewelink({
  email: process.env.EWELINK_EMAIL,
  password: process.env.EWELINK_PASSWORD,
  region: "us",
})

const toggleLight = async () => {
  await connection.toggleDevice(process.env.DEVICE)
}

toggleLight()
