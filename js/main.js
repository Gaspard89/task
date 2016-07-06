var dogs = [
  {
    image: 'images/dog5.png',
    status: 'COMMENTED'
  },
  {
    image: 'images/dog2.png',
    status: 'COMMENTED'
  },
  {
    image: 'images/dog3.png',
    status: 'COMMENTED'
  },
  {
    image: 'images/dog4.png',
    status: 'COMMENTED'
  },
  {
    image: 'images/dog6.png',
    status: 'ANSWERED'
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

var profileDetailsCollection = [
    {
    memberFor: "5 months",
    lastSeen: "Saturday afternoon",
    activityLevel: "test"
  }
];

var profileStatsCollection = [
  {
    peers: "46",
    discussions: "29",
    findings: "19",
    questions: "10"
  }
];

var joinedCollection = [
  {
    imageUri: "images/dog2.png",
    userName: "S.E.N. Waweru"
  },
  {
    imageUri: "images/dog3.png",
    userName: "Patricia"
  },
  {
    imageUri: "images/dog4.png",
    userName: "Joseph Aluoch"
  }
];

var hottestCollection = [
  {
    imageUri: "images/dog5.png",
    userName: "Andrew",
    topic: "<h2>Vegan diet to stop diabetes progreess<h2>",
    peersInvolved: "6",
    relatedDiscussions: "3",
    conversations: "3",
    upvotes: "19"
  }
];

var answersCollection = [
  {
    imageUri: "images/dog6.png",
    userName: "Patricia",
    active: "yesterday",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor velit leo, vel gravida nulla aliquet vitae. Aliquam non sodales risus, et egestas est. Fusce consequat porta nibh ac viverra.",
    upvotes: "8",
    button: ""
  },
  {
    imageUri: "images/dog5.png",
    userName: "David",
    active: "yesterday",
    answer: "Donec malesuada sed turpis quis vulputate. Curabitur volutpat lacus in mauris tincidunt, quis vestibulum ante pharetra. Ut quis posuere nisi. Nam quis tincidunt orci.",
    upvotes: "8",
    button: "CONTINUE discussion"
  },
  {
    imageUri: "images/dog4.png",
    userName: "Joseph's",
    active: "two days",
    answer: "Aenean ultricies augue odio, ut iaculis mi pretium dictum. Aenean faucibus gravida felis, at auctor risus vehicula in. Suspendisse ut ante erat. Donec venenatis fringilla tincidunt.",
    upvotes: "8",
    button: "COMMENT"
  }
];

ko.applyBindings({
        headersCollection: [
            {
              imageUri: '<img class="users" src="images/dog1.png" alt="Mops" height="100" width="100">',
              headerText: '<h2><a href="single-question-view.html">Will insulin make my patient gain weight?</a></h2>',
              authorName: 'Eva',
              trivia: stats,
              commentedUriCollection: dogs1
            },
            {
              imageUri: '<img class="users" src="images/dog2.png" alt="Mops" height="100" width="100">',
              headerText: '<h2><a href="single-question-view.html">Vegan diet in diabetes treatment?</a></h2>',
              authorName: 'Andrew',
              trivia: stats2,
              commentedUriCollection: dogs2
          },
          {
            imageUri: '<img class="users" src="images/dog5.png" alt="Mops" height="100" width="100">',
            headerText: '<h2><a href="single-question-view.html">Vegan diet to stop diabetes progress</a></h2>',
            authorName: 'Joseph',
            trivia: stats3,
            commentedUriCollection: dogs3
          }
        ],
        profileCollection: [
          {
            profileImage: 'images/dog1.png',
            userName: '<h2>Dr. Halima</h2>',
            profileDetails: profileDetailsCollection,
            profileStats: profileStatsCollection,
            joined: joinedCollection,
            hottest: hottestCollection
          }
        ],
        singleQuestionCollection: [
          {
            lastAction: "1",
            answers: "2",
            userAnswers: answersCollection
          }
        ]
    });
