import express from 'express'
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js'

import Hotel from '../models/Hotel.js'

const router = express.Router()

//CREATE
router.post('/', createHotel)

//UPDATE
router.put('/:id', updateHotel)

//DELETE
router.delete('/:id', deleteHotel)
//GET

router.get('/:id', getHotel)

//GETALL

router.get('/', getHotels)

// router.get('/', getHotels)
// router.get('/countByCity', countByCity)
// router.get('/countByType', countByType)
// router.get('/room/:id', getHotelRooms)

export default router
