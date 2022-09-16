const livingPeople = require('./index');

const peopleList = [
    {name: "Alice", birth: 1907, death: 1999},
    {name: "Bob", birth: 1908, death: 1999},
    {name: "Charlie", birth: 1909, death: 1998},
    {name: "Alice", birth: 1920, death: 1997},
    {name: "Alice", birth: 1930, death: 1996},
    {name: "Alice", birth: 1940, death: 1995},
    {name: "Alice", birth: 1950, death: 1994},
    {name: "Alice", birth: 1993, death: 1993},
]

test('livingPeople function exists', () => {
  expect(typeof livingPeople).toEqual('function');
});

test('finds the year with highest number people living', () => {
  expect(livingPeople(peopleList)).toEqual(1993);
});