require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const apiRouter = require("./routes/apiRouter.js")
const mainRouter = require("./routes/mainRouter.js")

const port = process.env.PORT || 3000


app.use(cors({origin: "https://quick-chat-frontend-agen.vercel.app", credentials: true}))
app.use(cookieParser())
app.use(express.json())
app.use(helmet())

app.get("/", (req, res) => {
    console.log("test")
    return res.send("Recieved Request")
})
app.use("/api", apiRouter)
app.use("/", mainRouter)

app.listen(port, () => {
    console.log("Listening on port: " + String(port))
})
