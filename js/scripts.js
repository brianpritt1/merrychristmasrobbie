// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkAck4kZXRBfjJRI6aVNQeT8a8GyEhtXk",
  authDomain: "robbie-8ad65.firebaseapp.com",
  databaseURL: "https://robbie-8ad65.firebaseio.com",
  projectId: "robbie-8ad65",
  storageBucket: "robbie-8ad65.appspot.com",
  messagingSenderId: "261580967343"
};
firebase.initializeApp(config);
const dbRef = firebase.database().ref('statistics/0');

var update = function(n) {
  document.getElementById('agreed').innerHTML = n +' people agree!';
};

var getCount = function(){
  var a = dbRef.once('child_added')
  .then(snap => {
    var counted = snap.val();
    update(counted);
  });
};

var addCount = function(){
  dbRef.once('child_added')
  .then(snap => {
    var counted = snap.val()
    dbRef.update({'count': counted+1});
    update(counted);
  });
}
window.onload = function(){
  getCount();
};
