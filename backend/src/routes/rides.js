const express = require('express');
const {
  createRide,
  getRides,
  getRide,
  updateRide,
  deleteRide,
  bookRide,
  cancelBooking
} = require('../controllers/rideController');

const router = express.Router();

const { protect, authorize } = require('../middlewares/auth');

router
  .route('/')
  .get(getRides)
  .post(protect, authorize('driver', 'admin'), createRide);

router
  .route('/:id')
  .get(getRide)
  .put(protect, updateRide)
  .delete(protect, deleteRide);

router
  .route('/:id/book')
  .post(protect, bookRide)
  .delete(protect, cancelBooking);

module.exports = router;
