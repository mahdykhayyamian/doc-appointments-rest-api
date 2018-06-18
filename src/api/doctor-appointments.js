const doctorAppointments = require('express').Router();
import doctors from '../models/doctors';

doctorAppointments.get('/', function(req, res, next) {

    let doctorId = req.doctorId;

    const date = new Date(req.query.date).toISOString();

    const docApptsForDate = doctors[doctorId].appointments[date];

    res.json(docApptsForDate);
});

doctorAppointments.delete('/:appointmentId', function(req, res, next) {

    let doctorId = req.doctorId;

    let appointmentId = req.params.appointmentId;

    if (deleteAppointment(doctorId, appointmentId)) {
        res.send("appointment deleted successfully");
    } else {
        res.status(400).end();
    }
});

doctorAppointments.post('/', function(req, res, next) {
    let doctorId = req.doctorId;
    const appointment = req.body;

    if (new Date(appointment.startTime).getMinutes() % 15 !== 0) {
    	return res.status(400).send("Appointment start time should be on every 15 min marks");	    	
    }

    if (getAppointments(doctorId, appointment.startTime).length >= 3) {
    	return res.status(400).send("Cannot add more than three appointments with same start time");	
    }

    addAppointment(doctorId, appointment);

	res.send("successfully added appointment");	
});


function deleteAppointment(doctorId, appointmentId) {

    const doctorAppointments = doctors[doctorId].appointments;

    if (doctorAppointments) {
        for (let date in doctorAppointments) {
            const doctorDateAppointments = doctorAppointments[date];
            if (doctorDateAppointments[appointmentId]) {
                delete doctorDateAppointments[appointmentId];
                return true;
            }
        }
    }

    return false;
}

function addAppointment(doctorId, appointment) {

    const dateOfAppointment = new Date(appointment.startTime).setHours(0, 0, 0, 0);
    const dateStr = new Date(dateOfAppointment).toISOString();

    // TODO: change to uuid
    const id = "appt-" + Math.floor(Math.random() * 1000);

    if (doctors[doctorId].appointments[dateStr]) {
		doctors[doctorId].appointments[dateStr][id] = appointment;
    } else {
		doctors[doctorId].appointments[dateStr] = {};
		doctors[doctorId].appointments[dateStr][id] = appointment;
    }
}

function getAppointments(doctorId, startTime) {

	const appts = [];

    const doctorAppointments = doctors[doctorId].appointments;

    const dateOfAppointment = new Date(startTime).setHours(0, 0, 0, 0);
    const dateStr = new Date(dateOfAppointment).toISOString();

    const appointmentsForDate = doctorAppointments[dateStr];

    for (let apptId in appointmentsForDate) {
    	if (appointmentsForDate[apptId].startTime === startTime) {
    		appts.push(appointmentsForDate[apptId]);
    	}
    }

    return appts;
}

module.exports = doctorAppointments;