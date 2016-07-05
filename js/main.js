var dogs = [
  {
    image: 'images/dog5.png',
    status: 'COMMENTED',
    selected: "selected"
  },
  {
    image: 'images/dog2.png',
    status: 'COMMENTED',
    selected: null
  },
  {
    image: 'images/dog3.png',
    status: 'COMMENTED',
    selected: null
  },
  {
    image: 'images/dog4.png',
    status: 'COMMENTED',
    selected: null
  },
  {
    image: 'images/dog6.png',
    status: 'ANSWERED',
    selected: null
  }
];

var dogs1 = dogs.slice(0);
var dogs2 = dogs.slice(0);
var dogs3 = dogs.slice(0);


dogs1.pop();

dogs2.pop();
dogs2.reverse();

dogs3.shift();
dogs3.shift();

var stats = [
  {
    statsCounter: "1",
    trivia: 'related discussions'
  },
  {
    statsCounter: "6",
    trivia: 'peers involved'
  },
  {
    statsCounter: "3",
    trivia: 'conversations'
  },
];

var stats2 = [
  {
    statsCounter: "2",
    trivia: 'related discussions'
  },
  {
    statsCounter: "9",
    trivia: 'peers involved'
  },
  {
    statsCounter: "5",
    trivia: 'conversations'
  },
];

var stats3 = [
  {
    statsCounter: "5",
    trivia: 'related discussions'
  },
  {
    statsCounter: "4",
    trivia: 'peers involved'
  },
  {
    statsCounter: "0",
    trivia: 'conversations'
  },
];


ko.applyBindings({
        headersCollection: [
            {
              imageUri: '<img class="users" src="images/dog1.png" alt="Mops" height="100" width="100">',
              headerText: '<h2>Will insulin make my patient gain weight?</h2>',
              authorName: 'Eva',
              trivia: stats,
              commentedUriCollection: dogs1
            },
            {
              imageUri: '<img class="users" src="images/dog2.png" alt="Mops" height="100" width="100">',
              headerText: '<h2>Vegan diet in diabetes treatment?</h2>',
              authorName: 'Andrew',
              trivia: stats2,
              commentedUriCollection: dogs2
          },
          {
            imageUri: '<img class="users" src="images/dog5.png" alt="Mops" height="100" width="100">',
            headerText: '<h2>Vegan diet to stop diabetes progress</h2>',
            authorName: 'Joseph',
            trivia: stats3,
            commentedUriCollection: dogs3
          }
        ]
    });
