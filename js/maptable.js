var xMemo = "";
var SelectGroup = "";
var GotoGroup = 0;
var CountPeople = "";
var dateString = "";


$(document).ready(function () {
  Connect_DB();
  MapTable();
});



function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbttbreserve = firebase.firestore().collection("ttbreserve");
  dbttbreservemap = firebase.firestore().collection("ttbreservemap");
}


function MapTable() {
  dbttbreserve
  .orderBy('CustomerID','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      MapGroup(doc.data().CustomerID,doc.id,doc.data().CustomerName,doc.data().Profileimg,doc.data().RegisterType,doc.data().TableGroup);
      //console.log(doc.data().CustomerID , doc.id , doc.data().Profileimg);
    });
  });
}



function MapGroup(x,id,n,p,t,g) {
  //console.log(x,id,p);

  dbttbreservemap.where('CustomerID','==',x)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      UpdateTable(doc.id,id,n,p,t,g);
      //var xCustomerName = doc.data().CustomerName;
      console.log(doc.data().TableNo);
    });
  });
}


function UpdateTable(id,ref,n,p,t,g) {
  console.log(id+"==="+n);
  dbttbreservemap.doc(id).update({
    CustomerName : n,
    Profileimg : p,
    RegisterType : t,
    CustomerType : g,
    RefID : ref
  });    
}


