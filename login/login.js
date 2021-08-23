function login() {

  var a = document.getElementById("emails").value;
  var b = document.getElementById("passw").value;
  var c = document.getElementById("usertype").value;
  if (c == "User") {
    firebase.auth().signInWithEmailAndPassword(a, b)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.href = "../dashboard/user.html";
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal("Error!", "There was a problem logging in.  Check your email and password or create an account.", "error");
      });


  }
  else {


    firebase.auth().signInWithEmailAndPassword(a, b)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.href = "../dashboard/index.html";
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal("Error!", "There was a problem logging in.  Check your email and password or create an account.", "error");
      });



  }
}
addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("logins").click();
  }
});