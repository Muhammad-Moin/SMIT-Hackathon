

function signup() {
  var a = document.getElementById("emails").value;

  var b = document.getElementById("pass").value;
  var c = document.getElementById("username").value;
  var d = document.getElementById("phone").value;
  var e = document.getElementById("country").value;
  var f = document.getElementById("city").value;
  var g = document.getElementById("usertype").value;
  if (g == "Restrurent") {
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "") || (f == "")) {
      swal("Error!", "Please fill all fields.", "error");
    }
    else {

      firebase.auth().createUserWithEmailAndPassword(a, b)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          firebase.firestore().collection("restrurent").doc(user.uid).set({
            a: a,
            b: b,
            c: c,
            d: d,
            e: e,
            f: f,
            g: g,
            uid: user.uid
          })
            .then(function () {
              console.log("Successful")
            }).catch(error => {
              console.log("error")
            })

          swal("Good job!", "You are successfully resgistered!", "success");


          setInterval(wait, 1000)
          function wait() {
            window.location.href = "../dashboard/index.html";
          }


        })

        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          swal("Error!", "There was a problem signup. Check your email and password length or maybe this email already exit.", "error");
          // ..

        });
      return false


    }

  }
  else {
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "") || (f == "")) {
      swal("Error!", "Please fill all fields.", "error");
    }
    else {
  
  
  
      firebase.auth().createUserWithEmailAndPassword(a, b)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          firebase.firestore().collection("users").doc(user.uid).set({
            a: a,
            b: b,
            c: c,
            d: d,
            e: e,
            f: f,
            g: g,
            uid: user.uid
          })
            .then(function () {
              console.log("Successful")
            }).catch(error => {
              console.log("error")
            })
  
          swal("Good job!", "You are successfully resgistered!", "success");
  
  
          setInterval(wait, 1000)
          function wait() {
            window.location.href = "../dashboard/user.html";
          }
  
  
        })
  
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          swal("Error!", "There was a problem signup. Check your email and password length or maybe this email already exit.", "error");
          // ..
  
        });
      return false
  
  
    }

  }





}  
  addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("signups").click();

    }

  });


