import moment from 'moment';

export const doctorsMock = [
  {
    name: 'João Silva',
    doctorId: '123456',
    workDays: ['monday', 'wednesday', 'thursday', 'friday', 'saturday'],
    workSchedule: [
      {
        weekDay: 'default',
        timetable: {
          start: '7:30',
          end: '16:00',
        },
      },
      {
        weekDay: 'saturday',
        timetable: {
          start: '9:00',
          end: '12:00',
        },
      },
    ],
  },
  {
    name: 'Maria Souza',
    doctorId: '456789',
    workDays: ['wednesday', 'thursday', 'friday', 'sunday'],
    workSchedule: [
      {
        weekDay: 'default',
        timetable: {
          start: '7:30',
          end: '16:00',
        },
      },
      {
        weekDay: 'friday',
        timetable: {
          start: '9:30',
          end: '12:00',
        },
      },
      {
        weekDay: 'sunday',
        timetable: {
          start: '00:00',
          end: '6:00',
        },
      },
    ],
  },
];

export const consultationMock = [
  {
    id: '123',
    jitsiMeetUrl: 'http://localhost:8080/meet/1T52QP01B',
    doctorName: 'Maria Souza',
    consultationStartDate: moment(),
    consultationFinishDate: moment().add(1, 'hours'),
  },
  {
    id: '124',
    jitsiMeetUrl: 'http://localhost:8080/meet/1T52QP01B',
    doctorName: 'João Silva',
    consultationStartDate: moment().add(2, 'hours'),
    consultationFinishDate: moment().add(3, 'hours'),
  },
];
