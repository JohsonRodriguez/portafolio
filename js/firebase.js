const db = firebase.firestore();
db.collection('contactos');

db.collection('contactos').get()
    .then(snapshot => {
        // to do when data is recieved
        console.log(snapshot);
    })
    .catch(err => console.log(err));


var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

function alertFunction() {
    var txt,fname,lname,email,sub,msgbdy;
    

    if (confirm("Are you sure?")) {

    txt = "You pressed OK!";
    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    email=document.getElementById("email").value;
    sub=document.getElementById("subject").value;
    msgbdy=document.getElementById("message").value;
        
    if(fname && lname && email && sub && msgbdy  != ""){
        writeUserData(fname+" "+lname,email,sub,msgbdy);
        alert("Message sent successfully!")
    }else{
        alert("Fields cannot be empty!")
    }
    

  } else {

    txt = "You pressed Cancel!";
    alert(txt);

  }
  }

  function writeUserData(name, email, subj, msgbody) {
    firebase.database().ref().child("contactos/"+name).set({
      username: name,
      email: email,
      subject : subj,
      message: msgbody,
      date: firebase.database.ServerValue.TIMESTAMP,
      isread: false
    });
  }