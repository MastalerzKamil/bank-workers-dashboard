import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    client: {
      firstName: 'Janusz',
      lastName: 'Kowalski',
    },
    reason: 'fałszywe dokumenty',
    organ: 'policja',
    clientType: 'person'
  },
  {
    id: uuid(),
    client: {
      firstName: 'Sierigej',
      lastName: 'Kovalov',
    },
    reason: 'Nielegalny pobyt',
    organ: 'policja',
    clientType: 'person'
  },
]