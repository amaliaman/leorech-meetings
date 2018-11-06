const meetingModel = require('../models/MeetingModel');
const attendeeModel = require('../models/AttendeeModel');
const departmentModel = require('../models/DepartmentModel');

const initTables = async (populate) => {
    try {
        await attendeeModel.Attendee.sync({ force: true });
        await departmentModel.Department.sync({ force: true });
        await meetingModel.Meeting.sync({ force: true });

        await addDepartments();
        await addAttendees();

        if (populate) {
            await addMeetings();
        }
    }
    catch (error) { throw error; }
};

const addDepartments = async () => {
    try {
        await departmentModel.Department.bulkCreate([
            { name: 'משה' },
            { name: 'שיקום' },
            { name: 'שיקום קהילה' },
            { name: 'אוטיזם' },
            { name: 'קופת חולים' },
            { name: 'פרטי' },
            { name: 'אומנה' }
        ]);
    }
    catch (error) { throw error; }
};

const addAttendees = async () => {
    try {
        await attendeeModel.Attendee.bulkCreate([
            { name: 'מטופל' },
            { name: 'זוג' },
            { name: 'קבוצה' },
            { name: 'משפחה' },
            { name: 'עו"ס וצוות' },
            { name: 'אינטייק' },
            { name: 'אחר' }
        ]);
    }
    catch (error) { throw error; }
};

const addMeeting = async (patientName, therapistName, attendeeName, departmentName, reportDate) => {
    let attendee;
    let department;

    // Create attendee (if doesn't exist)
    try {
        attendee = await attendeeModel.Attendee
            .findOrCreate({ where: { name: attendeeName }, defaults: { name: attendeeName } })
            .spread((attendeeResult, created) => {
                return attendeeResult;
            });
    }
    catch (error) { throw error; }

    // Create department (if doesn't exist)
    try {
        department = await departmentModel.Department
            .findOrCreate({ where: { name: departmentName }, defaults: { name: departmentName } })
            .spread((departmentResult, created) => {
                return departmentResult;
            });
    }
    catch (error) { throw error; }

    // Create meeting and attach attendee and department
    try {
        let meeting = await meetingModel.Meeting
            .create({ patient: patientName, therapist: therapistName, reportDate: reportDate });
            await meeting.setAttendee(attendee)
            await meeting.setDepartment(department)
        // await attendee.addMeeting(meeting);
        // await department.addMeeting(meeting);
    }
    catch (error) { throw error; }
}

const addMeetings = async () => {
    try {
        await addMeeting('מיכל', 'עמי', 'קבוצה', 'שיקום', new Date());
        await addMeeting('ליביה', 'עמי', 'משפחה', 'משה', new Date());
        await addMeeting('רומן', 'אלינה', 'משפחה', 'שיקום קהילה', new Date());
    }
    catch (error) { throw error; }
};

module.exports = initTables;