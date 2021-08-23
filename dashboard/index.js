
var uid;
var fileName;

var firebaseConfig = {
    apiKey: "AIzaSyBh_HsehJSwxWU0zrmeEcYE3zvVbmqvdOw",
    authDomain: "fir-smitauth.firebaseapp.com",
    projectId: "fir-smitauth",
    storageBucket: "fir-smitauth.appspot.com",
    messagingSenderId: "217048901393",
    appId: "1:217048901393:web:549bd9603d81df684b4eb0",
    measurementId: "G-3VG3KWBBF7"
};
firebase.initializeApp(firebaseConfig);


// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();


// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 

function start() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            uid = user.uid;
            star(uid)


        }
        else {
            location.href = "../../index.html"

        }

    })

}

function star(uid) {

    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var cetegory = document.getElementById("cetegory").value;
    var delivery = document.getElementById("delivery").value;
    if (!name || !price || !cetegory || !delivery) {
        swal({
            title: "Field Empty",
            text: "Fill the input field",
            icon: "warning",
        })
    }
else{
    var dishobj = {
        name: name,
        price: price,
        cetegory: cetegory,
        delivery: delivery,
        resuid: uid,
        filename: fileName,
    }



    var db = firebase.firestore().collection(`dishes`);
    db.add(dishobj)

        .then(() => {
            document.getElementById("name").value = ""
            document.getElementById("price").value = ""
            document.getElementById("cetegory").value = ""
            document.getElementById("delivery").value = ""
           
            swal({
                title: "ADDED",
                text: "added seccussfully",
                icon: "success",
            })
        })
    }
       
}
function upload() {
    var img = document.getElementById("file").files[0];
    if (! img ){
        swal({
            title: "Field is Empty",
            text: "Fill the input field",
            icon: "warning",
        })
    }
    fileName = img.name;

    var storageref = firebase.storage().ref("dish/" + fileName)

    storageref.put(img);
    start()
}
function logout() {
    firebase.auth().signOut()
        .then(() => {
            location.href = "../login/login.html";
        })
        .catch((error) => {
            // An error happened.
        });
    return false

}

