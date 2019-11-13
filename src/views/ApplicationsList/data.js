import uuid from 'uuid/v1';

export default [
  {
    id: uuid,
    applicantId: 1,
    client: {
      firstName: 'Carlo',
      lastName: 'Benitez',
    },
    data: '12.10.2019',
    type: 'Hipoteczny',
    amount: 50000,
  },
  {
    id: uuid,
    applicantId: 1,
    client: {
      firstName: 'Jan',
      lastName: 'Kowalski',
    },
    data: '2.11.2019',
    type: 'Studencki',
    amount: 10000
  },
]