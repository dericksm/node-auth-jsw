const express = require('express')
const authRoutes = require('./routes/auth')
const postsRoutes = require('./routes/posts')

const mongoose = require('mongoose')
require('dotenv/config')

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
    () => console.log("Connected to DB"))

//Initialize express
const app = express()


//Middlewares
app.use(express.json())

// Import routes
app.use('/api/user', authRoutes)
app.use('/api/posts', postsRoutes)


app.listen(3000, () => console.log("Server listening at port 3000"))