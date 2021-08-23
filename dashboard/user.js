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