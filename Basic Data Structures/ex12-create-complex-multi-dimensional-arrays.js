let myNestedArray = [

  [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method', 'deep'],
    [
      ['concat', false, true, 'spread', 'array', 'deeper'],
      [
        ['mutate', 1327.98, 'splice', 'slice', 'push', ],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'deepest']
      ]
    ]
  ]

];

console.log(myNestedArray)

/*
let myNestedArray = [
  'level 1',                   // myNestedArray[0]             
  ['level 2'],	               // myNestedArray[1][0]          
  [['level 3','deep']],	       // myNestedArray[2][0][0]       
  [[['level 4','deeper']]],    // myNestedArray[3][0][0][0]    
  [[[['level 5','deepest']]]]  // myNestedArray[4][0][0][0][0] 
];
*/