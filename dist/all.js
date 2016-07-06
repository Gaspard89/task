<script type="text/html" id="Template">

<div id="profile" class="modal">
  <div class="modal-content" data-bind="foreach: profileCollection">
    <span class="close">x</span>
    <div class="modal-container">
      <div class="profile-header">
        <img data-bind="attr:{src: profileImage}">
        <span class="user-name" data-bind="html: userName"></span>
        <div class="profile-details" data-bind="foreach: profileDetails">
          <span data-bind="text: memberFor"></span>
          <span data-bind="text: lastSeen"></span>
          <span>
            <i class="fa fa-trophy fa-2x" aria-hidden="true"></i>
            <i class="fa fa-trophy fa-2x" aria-hidden="true"></i>
            <i class="fa fa-trophy fa-2x" id="last-child" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <div class="profile-switch">
          <span class="arrows"><a href="#"><i class="fa fa-chevron-circle-left fa-3x" aria-hidden="true"></i></a></span>
          <h1 class="profile-main-header">How it all started</h1>
          <span class="arrows"><a href="#"><i class="fa fa-chevron-circle-right fa-3x" aria-hidden="true"></i></a></span>
      </div>
      <h3>THAT'S WHERE WE HAVE BEEN THESE 5 MONTHS AGO</h3>
      <div class="profile-stats" data-bind="foreach: profileStats">
        <div class="profile-stats-details profile-peers">
          <div class="cell">
            <span data-bind="text: peers"></span>
            <p>peers</p>
          </div>
        </div>
        <div class="profile-stats-details profile-discussions">
          <div class="cell">
          <span data-bind="text: discussions"></span>
          <p>discussions</p>
          </div>
        </div>
        <div class="profile-stats-details profile-findings">
          <div class="cell">
            <span data-bind="text: findings"></span>
            <p>findings</p>
          </div>
        </div>
        <div class="profile-stats-details profile-questions">
          <div class="cell">
            <span data-bind="text: questions"></span>
            <p>questions</p>
          </div>
        </div>
      </div>
      <h3>THAT'S WHERE WE HAVE BEEN THESE 5 MONTHS AGO</h3>
      <div class="joined-users" data-bind="foreach: joined">
        <div class="joined-profiles">
          <div class="joined-image">
            <img data-bind="attr:{src: imageUri}">
          </div>
          <span data-bind="text: userName"></span>
        </div>
      </div>
      <h3>THE HOTTEST DISCUSSION THESE DAYS</h3>
    </div>
    <div class="hottest" data-bind="foreach: hottest">
      <img class="hottest-image" data-bind="attr:{src: imageUri}">
      <div class="pusher">
        <span class="hottest-username" data-bind="text: userName"></span>
        <span class="hottest-topic" data-bind="html: topic"></span>
        <div class="topic-stats">
          <div class="stat-item">
            <p data-bind="text: peersInvolved"></p>
            <p>peers involved</p>
          </div>
          <div class="stat-item">
            <p data-bind="text: relatedDiscussions"></p>
            <p>related discussions</p>
          </div>
          <div class="stat-item">
            <p data-bind="text: conversations"></p>
            <p>conversations</p>
          </div>
          <div class="stat-item">
            <p data-bind="text: upvotes"></p>
            <p>upvotes</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</script>

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

$(function (){

  var modal = $('#profile');
  var btn = $('.profile-btn');
  var close = $('.close');

  btn.click(function (){
    modal.css("display", "block");
  });

  close.click(function (){
    modal.css("display", "none");
  });
  $(window).click(function (event){
    if (event.target == modal) {
        modal.css("display", "none");
    }
  });
  // window.click(function() {
  //     if (event.target == modal) {
  //         modal.css("display", "none");
  //     }
  // });
});

$(function(){
  var tab = [];

  $(".article-header").each(function( element ) {
    tab.push($( this ).text());
  });

    $(".search-square").autocomplete({source: tab});

    $("#searchButton").click(function (){
      var result = $(".search-square").val();
      console.log(result);
      if(result === "") {
        // $(".article").css("display","block");
      }
      else {
        $(".article").css("display","none");
        $('div.article:contains("' + result + '")').css("display","block");
      }
    });


});
