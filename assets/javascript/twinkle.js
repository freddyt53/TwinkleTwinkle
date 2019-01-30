  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAICZS8zL-OQVDKUaWPIyMoCsG7MuMjnQE",
    authDomain: "twinkletwinkle-1b6ce.firebaseapp.com",
    databaseURL: "https://twinkletwinkle-1b6ce.firebaseio.com",
    projectId: "twinkletwinkle-1b6ce",
    storageBucket: "twinkletwinkle-1b6ce.appspot.com",
    messagingSenderId: "649357869437"
  };
  firebase.initializeApp(config);

  var giftData = firebase.database();

  //button function
$('#submitGift').on("click", function (event) {
  event.preventDefault();

  //user input
  var gift = $("#giftInput").val().trim();

  //local var to hold the user information
  var newGift = {
    giftName: gift,
  }

  //pushes data to database
  giftData.ref().push(newGift);

  //console log to test variables
  console.log(newGift.giftName);
  

  // Clears all of the text-boxes
  $("#giftInput").val("");

  // console.log($("#giftInput").val());
  return false;
});


// Create Firebase event for adding gifts to the database and a row in the html when a user adds an entry
giftData.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());

  var data = childSnapshot.val();
  name = data.giftName;
 

  //console logs info
  console.log(name);


  //calls the correct rows to display info in 
  var newRow = $("<tr>").append(
    $("<td>").text(name),
  );

  //appends text
  $("#gift-table > tbody").append(newRow);

});