//YOUR FIREBASE LINKS

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

    nameuser = localStorage.getItem("uname")
    nameroom = localStorage.getItem("room")

    function send(){

      mess = document.getElementById("mesput").value
      firebase.database().ref(nameroom).push({

            name : nameuser,
            message : mess,
            like : 0
      })
      document.getElementById("mesput").innerHTML = ""
    }


function getData() {
       firebase.database().ref("/"+nameroom).on('value', function(snapshot) {
             document.getElementById("output").innerHTML = ""; 
             snapshot.forEach(function(childSnapshot) {
                   childKey  = childSnapshot.key;
                  childData = childSnapshot.val(); 
                    if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 
      name = message_data['name']
      like = message_data['like']
      message = message_data['message']

      nametag = "<h3>" + name +  "<img class='user_tick' src='tick.png'> </h3> "
      mestag = "<h3 class ='message_h4' style='color: rgb(0, 0, 0);'>"+ message + "</h3>"
      liketag = "<button class = 'btn btn-success'id =" + firebase_message_id + " value="+ like + " onclick = 'updatelike(this.id)'>"
      likebtn = "<span class = 'glyphicon glyphicon-thumbs-up'> Like : " + like + "</span> </button> <hr>"

      row = nametag + mestag + liketag + likebtn
      document.getElementById("output").innerHTML += row

     
      //End code
      } });  }); }
getData();

function updatelike(myid){

      firebaseid = myid
      likes = document.getElementById(firebaseid).value
      updatedlike = Number(likes) +1

      firebase.database().ref(nameroom).child(firebaseid).update({
            like : updatedlike
      })

}

function logout(){

      localStorage.removeItem("uname")
      localStorage.removeItem("room")
      window.location = "index.html"

}
