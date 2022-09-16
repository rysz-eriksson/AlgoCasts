const grid = require('./index');

test('function chunk exists', () => {
  expect(typeof grid).toEqual('function');
});

test('returns true for connected grid', () => {
  const connctedGrid1 = [
    ['O', 'X', 'X', 'X'],
    ['O', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'O'],
    ['O', 'O', 'X', 'O'],
    ['X', 'X', 'X', 'O'],
  ];

  const connctedGrid2 = [
      ['X', 'X', 'X'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
  ]
  const connected1 = grid(connctedGrid1);
  const connected2 = grid(connctedGrid2);


  expect(connected1).toEqual(true);
  expect(connected2).toEqual(true);

});

test('returns false for not connected grid', () => {
    const nconnctedGrid1 = [
      ['O', 'O', 'X', 'O', 'O'],
      ['X', 'X', 'X', 'O', 'O'],
      ['X', 'X', 'O', 'X', 'O'],
      ['O', 'O', 'O', 'X', 'X'],
    ];

    const nconnctedGrid2 = [
        ['X', 'O', 'O'],
        ['O', 'X', 'O'],
        ['O', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'O', 'O'],
    ]
    const nconnected1 = grid(nconnctedGrid1);
    const nconnected2 = grid(nconnctedGrid2);
  
  
    expect(nconnected1).toEqual(false);
    expect(nconnected2).toEqual(false);
  
  });