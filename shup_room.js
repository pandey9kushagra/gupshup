
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
  apiKey: "AIzaSyAoh7gYxTIJItouwkszLXPNc1pM3yeVUgw",
  authDomain: "gupshup-cf9f9.firebaseapp.com",
  databaseURL: "https://gupshup-cf9f9-default-rtdb.firebaseio.com",
  projectId: "gupshup-cf9f9",
  storageBucket: "gupshup-cf9f9.appspot.com",
  messagingSenderId: "620891318661",
  appId: "1:620891318661:web:c0602eed9e896eec31fcec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

     username = localStorage.getItem("uname")
     console.log(username)
     document.getElementById("name").innerHTML = "Welcome " + username

     function addroom(){

       roomname = document.getElementById("roomname").value
       firebase.database().ref('/').child(roomname).update({
            purpose : " adding room "
       })
       localStorage.setItem("room", roomname)
       window.location = "shup_page.html"
     }

function getData()
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        row = "<div class='room_name' id=" +Room_names + " onclick='gochat(this.id)'>" + Room_names + " </div>"
        document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function gochat(h){

  localStorage.setItem("room", h)
  window.location = "shup_page.html"
}

function logout(){

  localStorage.removeItem("room")
  localStorage.removeItem("uname")
  window.location = "index.html"
}
