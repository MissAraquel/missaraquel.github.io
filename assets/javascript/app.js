$(document).ready(function() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAe8XmL8OmOwNCoIX1uZGw0OYqiOYCfdg",
    authDomain: "missaraquel-91442.firebaseapp.com",
    databaseURL: "https://missaraquel-91442.firebaseio.com",
    projectId: "missaraquel-91442",
    storageBucket: "missaraquel-91442.appspot.com",
    messagingSenderId: "782055578013"
  };
  firebase.initializeApp(config);
  // global variables
var database = firebase.database();
// event handler for submit button
$(document).on("click", ".btn", function(event) {
    event.preventDefault();
    // set variables equal to values
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();
    // clear fields after values have been saved
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    var newMsg = {
        name: name,
        email: email,
        message: message
    };
    database.ref().push(newMsg);
});

});