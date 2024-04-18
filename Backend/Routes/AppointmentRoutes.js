const express = require('express');
const app = express();
const AppointmentController = require('../Controllers/AppointmentController');

const router = express.Router(); //MiddleWare router

router
.route('/')
.get(AppointmentController.getAllAppointment)
.post(AppointmentController.createAppointment)
router
.route('/:id')
.get(AppointmentController.getAppointmentById)
.put(AppointmentController.updateAppointment)
.patch(AppointmentController.updateAppointment)
.delete(AppointmentController.deleteAppointment)

module.exports = router;