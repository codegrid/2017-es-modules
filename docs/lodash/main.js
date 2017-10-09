import find from './lodash/find.js';

const users = [
  { name: 'Alice' },
  { name: 'Bob' }
];

const alice = find(users, u => u.name === 'Alice');
console.log(alice);
