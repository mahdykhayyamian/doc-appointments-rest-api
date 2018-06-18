import { version } from '../../package.json';
import { Router } from 'express';
import doctors from './doctors';
import doctorAppointments from './doctor-appointments';

export default ({ config, db }) => {
    let api = Router();

    api.use('/doctors/:doctorId/appointments', function(req, res, next) {
        req.doctorId = req.params.doctorId;
        next();
    }, doctorAppointments);

    api.use('/doctors', doctors({ config, db }));

    return api;
}