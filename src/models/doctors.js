// our example model is just an Array
const doctors = {
    "doc-123": {
        firstName: "Algernop",
        lastName: "Krieger",
        appointments: {
            "2018-05-09T00:00:00.000Z": {
                "appt-487": {
                    patient: {
                        firstName: "Sterling",
                        lastName: "Archer"
                    },
                    startTime: "2018-05-09T07:08:00.000Z",
                    kind: "FOLLOWUP"
                },
                "appt-645": {
                    patient: {
                        firstName: "Cyril",
                        lastName: "Figis"
                    },
                    startTime: "2018-05-09T07:08:30.000Z",
                    kind: "NEW_PATIENT"
                }
            },
            "2018-05-10T07:00:00.000Z": {
                "appt-008": {
                    patient: {
                        firstName: "Mahdy",
                        lastName: "Khayyamian"
                    },

                    startTime: "2018-05-10T07:08:00.000Z",
                    kind: "NEW_PATIENT"
                }
            }
        }
    },
    "doc-456": {
        firstName: "Christen",
        lastName: "Oskouian",
        appointments: {}
    }
};
export default doctors;