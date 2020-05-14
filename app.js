  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCTexNo6q9F5sKyr7bZkPS47biWnzq2UC4",
    authDomain: "webpush-bd803.firebaseapp.com",
    databaseURL: "https://webpush-bd803.firebaseio.com",
    projectId: "webpush-bd803",
    storageBucket: "webpush-bd803.appspot.com",
    messagingSenderId: "1084143071462",
    appId: "1:1084143071462:web:3f246ce5c17b8cec6f4b27",
    measurementId: "G-FRPP4JW6R0"
  };
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
    alert(token);
  console.log(token);
  })
.catch(function(err) {
  console.log('Permission denied', err);
});


messaging.onMessage(function(payload){
console.log('onMessage: ',payload);
});
