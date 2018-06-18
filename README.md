# doc-appointments-rest-api
REST API for doctors appointments

# setup
npm install

# run server
npm run start

# APIs Samples
## Get all doctors and their appointments
curl -X GET 'http://localhost:3000/api/doctors'

## Get appintments for particular doctor and date
curl -X GET 'http://localhost:3000/api/doctors/doc-123/appointments?date=2018-05-09'

## Delete and appointment by id
curl -X DELETE 'http://localhost:3000/api/doctors/doc-123/appointments/appt-487'

## Add appointment for a doctor
curl -X POST http://localhost:3000/api/doctors/doc-456/appointments -d '{"patient":{"firstName":"Niki","lastName":"Khayyamian"},"startTime":"2018-05-10T09:45:00.000Z","kind":"FOLLOWUP"}' -H "Content-Type: application/json"
