import find from 'https://unpkg.com/lodash-es@4.17.4/find.js';

const users = [
  { name: 'Alice' },
  { name: 'Bob' }
];

const alice = find(users, u => u.name === 'Alice');
console.log(alice);
