import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to mongoDB.')
  } catch (error) {
    throw error
  }
}


mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!')
})

app.get("/",(req,res) => {
    res.send("hello first request")
})


//middlewares
app.use(express.json());

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.listen(8800, () => {
  connect()
  console.log('Connected to backend.')
})
