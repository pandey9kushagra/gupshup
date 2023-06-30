function nextscreen(){

    username = document.getElementById("user").value

    localStorage.setItem("uname", username)

    window.location="shup_room.html"
}