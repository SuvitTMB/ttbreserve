
var DoneSurvey = 0;
var EidScore1 = "";
var EidScore2 = "";
var EidScore3 = "";
var EidScore4 = "";
var EidScore5 = "";
var EidScore6 = "";
var EidScore7 = "";
var EidScore8 = "";
var EidScore9 = "";
var EidScore10 = "";
var TableGroup = "A";
var GetCustomerIDArr = [];
var GetCustomerDetailArr = [];


$(document).ready(function() {
  Connect_DB();
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
  //SelectMeunu();
  loadfile(TableGroup);
}


function SelectMeunu() {
  xClickMenu = document.getElementById("ClickMenu").value;
  console.log(xClickMenu);
  //loadData();
  loadfile(xClickMenu);
}


function loadfile(x) {
  var i = 0;
  var str = "";
  str += '<table class="table" style="margin-top:15px;"><tbody>';
  dbttbreservemap.where('TableX','==',x)
  .orderBy('CustomerNo','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<tr><td class="td-padding" style="width:50%;background-color: #f1f1f1;">Table : '+ doc.data().TableNo +'</td>';
      str += '<td class="td-center td-padding" style="text-align:center;">';
      str += '<input name="'+i+'" id="'+i+'" value="'+ doc.data().CustomerID +'" onchange="CheckEid(\''+ i +'\',\''+ doc.id +'\')" class="loading">';
      str += '</td></tr>';
      i++;
    });    
    str += '</tbody></table>';
  $("#DisplayTable").html(str);  
  });
}



function GetTableCustomer() {
  var i = 0;
  var str = "";
  var sumCustomerID = 0;
  var xCustomerID = "";
  var gCustomerID = "";
  var xxx = "";
  var mID = "";
  dbttbreservemap
  .orderBy('CustomerID','asc')
  .orderBy('CustomerNo','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(doc.data().CustomerID!="") {
        if(xCustomerID==doc.data().CustomerID) {
          sumCustomerID = sumCustomerID+1;
        } else {
          if(xCustomerID!="") {
            sumCustomerID = sumCustomerID+1;
            //console.log(xCustomerID+"***"+sumCustomerID+"==="+gCustomerID);
            var x = gCustomerID.substring(0, gCustomerID.length - 1);
            GetCustomerIDArr.push(xCustomerID);
            GetCustomerDetailArr.push({ CustomerID: xCustomerID, TableNo: x, CustomerMember: sumCustomerID, EmpRef: xRefID });
            UpdateMember(xCustomerID,xRefID,sumCustomerID);
            sumCustomerID = 0;
            gCustomerID = "";
            xCustomerID = "";
            xRefID = "";
          }
        }
        xRefID = doc.data().RefID;
        xCustomerID = doc.data().CustomerID;
        gCustomerID = doc.data().TableNo+"-"+gCustomerID;  
        mID = doc.id    
      }
    });    
  });
}


function UpdateMember(xid,RefID,SumCustomer) {
  dbttbreserve.doc(RefID).update({
    People : SumCustomer
  });    

  console.log(xid+"==="+RefID+"==="+SumCustomer);
}


var EidSave = "";
var Evalues = "";

function CheckEid(x,eid) {
  var xSpace = "";
  Evalues = document.getElementById(x).value;
  //alert(eid+"==="+Evalues);
  var xxx = Evalues.substring(1, 0);
  if(Evalues=="del") {
    //alert(Evalues+"==="+eid);
    dbttbreservemap.doc(eid).update({
      CustomerID : xSpace,
      CustomerName : xSpace,
      CustomerType : xSpace,
      Profileimg : xSpace,
      RefID : xSpace,
      RegisterType : xSpace
    });
    Evalues = xSpace;
  } else {
    dbttbreservemap.doc(eid).update({
      CustomerID : Evalues,
      CustomerType : xxx
    });
  }
  //console.log(eid);
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
  //alert("Done");
}



function MapGroup(x,id,n,p,t,g) {
  //console.log(x,id,p);
  dbttbreservemap.where('CustomerID','==',x)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      UpdateTable(doc.id,id,n,p,t,g);
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



/*
  if(eid=="RSOC-1") { 
    EidSave = EidScore1;
    Evalues = document.getElementById("t1_pocet").value;
  } else if(eid=="RSOC-2") { 
    EidSave = EidScore2;
    Evalues = document.getElementById("t2_pocet").value;
  } else if(eid=="RSOC-3") { 
    EidSave = EidScore3;
    Evalues = document.getElementById("t3_pocet").value;
  } else if(eid=="RSOC-4") { 
    EidSave = EidScore4;
    Evalues = document.getElementById("t4_pocet").value;
  } else if(eid=="RSOC-5") { 
    EidSave = EidScore5;
    Evalues = document.getElementById("t5_pocet").value;
  } else if(eid=="RSOC-6") { 
    EidSave = EidScore6;
    Evalues = document.getElementById("t6_pocet").value;
  } else if(eid=="RSOC-7") { 
    EidSave = EidScore7;
    Evalues = document.getElementById("t7_pocet").value;
  } else if(eid=="RSOC-8") { 
    EidSave = EidScore8;
    Evalues = document.getElementById("t8_pocet").value;
  }


  if(xClickMenu=="Game1") { 
    dbttbreservemap.doc(EidSave).update({
      Game1 : parseFloat(Evalues)
    });
  }
  if(xClickMenu=="Game2") { 
    dbttbreservemap.doc(EidSave).update({
      Game2 : parseFloat(Evalues)
    });
  }
  if(xClickMenu=="Game3") { 
    dbttbreservemap.doc(EidSave).update({
      Game3 : parseFloat(Evalues)
    });
  }
  if(xClickMenu=="Game4") { 
    dbttbreservemap.doc(EidSave).update({
      Game4 : parseFloat(Evalues)
    });
  }
  if(xClickMenu=="Game5") { 
    dbttbreservemap.doc(EidSave).update({
      Game5 : parseFloat(Evalues)
    });
  }

  CalAllPoint();
*/

  /*
  if(eid=="RSOC-2") { 
    dbttbreservemap.doc(EidSave).update({
      Game1 : parseFloat(Evalues)
    });
  }
*/
//console.log(x+"==="+EidSave+"==="+Evalues);

/*
function CalAllPoint() {
  var sEid = "";
  var sCalAll = 0;
  dbttbreservemap.get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      sEid = doc.id;
      sCalAll = doc.data().Game1 + doc.data().Game2 + doc.data().Game3 + doc.data().Game4 + doc.data().Game5;
      console.log(doc.data().EmpTeam+"==="+sEid+"==="+sCalAll);
      SaveNewScore(sEid,sCalAll);
      sEid = "";
      sCalAll = 0;
    });
  });
}


function SaveNewScore(eid,score) {
  console.log(eid+"==="+score);
  dbttbreservemap.doc(eid).update({
    SumAll : parseFloat(score)
  });
}
*/


/*
calculate = function(object, action) {
  if (action === 'plus') {
    total += object.hodnota;
    if(object.pocet>=0 && object.pocet<=19) {
      sum_score = sum_score-object.pocet;
      object.pocet++;
      sum_score = sum_score+object.pocet;
      $("#DisplayRatio").html(sum_score);  
    }
  } else if ((action === 'minus') && (object.pocet > 0)) {
    total -= object.hodnota;
    if(object.hodnota>=0 && object.hodnota<=19) {
      sum_score = sum_score-object.pocet;
      object.pocet--;
      sum_score = sum_score+object.pocet;
      $("#DisplayRatio").html(sum_score);  
    }
  }
  render();
}

render = function() {
  //total_tickets = t1.pocet + t2.pocet + t3.pocet + t4.pocet + t5.pocet + t6.pocet + t7.pocet + t8.pocet;
  total_tickets = t1.pocet + t2.pocet + t3.pocet + t4.pocet + t5.pocet;
  SumRatio = (total_tickets/SumPoint)*5;
  $("#DisplayRatio").html("<div class='btn-score'>"+SumRatio.toFixed(2)+"</div>");  

  $('#amount').html(total.toFixed(0));
  $('#t1_pocet').html(t1.pocet); $('#t2_pocet').html(t2.pocet); $('#t3_pocet').html(t3.pocet);
  $('#t4_pocet').html(t4.pocet); $('#t5_pocet').html(t5.pocet); $('#t6_pocet').html(t6.pocet);
  $('#t7_pocet').html(t7.pocet); $('#t8_pocet').html(t8.pocet); 
  //document.getElementById("tt1_pocet").value=t1.pocet;
  document.getElementById('t1_pocet').value = '18';
  document.getElementById('t2_pocet').value = '17';

  //if(t1.pocet!=0 && t2.pocet!=0 && t3.pocet!=0 && t4.pocet!=0 && t5.pocet!=0) {
  //  $('#SubmitApp').removeClass('disabledbutton');
  //} else {
  //  var element = document.getElementById("SubmitApp");
  //  element.classList.add("disabledbutton");
  //}



  $('#total_amount').html(total.toFixed(0));
  $('#t1_amount').html(t1.pocet); $('#t2_amount').html(t2.pocet); $('#t3_amount').html(t3.pocet);
  $('#t4_amount').html(t4.pocet); $('#t5_amount').html(t5.pocet); $('#t6_amount').html(t6.pocet);
  $('#t7_amount').html(t7.pocet); $('#t8_amount').html(t8.pocet); 

  if (total_tickets > 0) {
    $('#continue').prop('disabled', false);
  } else {
    $('#continue').prop('disabled', true);
  }
}




function SavePollเ11111111111111111() {
  render();
  NewDate();
  var TimeStampDate = Math.round(Date.now() / 1000);
  dbRSOCPoll.add({
    LineID : sessionStorage.getItem("LineID"),
    LineName : sessionStorage.getItem("LineName"),
    EmpPicture : sessionStorage.getItem("LinePicture"),
    EmpID : sessionStorage.getItem("EmpID_RSOC"),
    EmpName : sessionStorage.getItem("EmpName_RSOC"),
    EmpBr : sessionStorage.getItem("EmpBR_RSOC"),
    Q1 : parseFloat(t1.pocet),
    Q1_memo : document.getElementById("feedback1").value,
    Q2 : parseFloat(t2.pocet),
    Q2_memo : document.getElementById("feedback2").value,
    Q3 : parseFloat(t3.pocet),
    Q3_memo : document.getElementById("feedback3").value,
    Q4 : parseFloat(t4.pocet),
    Q4_memo : document.getElementById("feedback4").value,
    Q5 : parseFloat(t5.pocet),
    Q5_memo : document.getElementById("feedback5").value,
    Q9_memo : document.getElementById("feedback9").value,
    AdvScore : SumRatio.toFixed(2),
    TimeStamp : TimeStampDate,
    DateSurvey : dateString
  });
  //document.getElementById('id01').style.display='block';
}
*/

/*
function CheckGroup() {
  //alert(sessionStorage.getItem("EmpBR_Survey"));
  //dbSurveyGroup.where('EmpGroup','==','RH1')
  dbSurveyGroup.where('EmpGroup','==',sessionStorage.getItem("EmpBR_Survey"))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidGroup = doc.id;
      sTotalSurvey = doc.data().TotalSurvey;
      sTotalQ1 = doc.data().TotalQ1;
      sTotalQ2 = doc.data().TotalQ2;
      sTotalQ3 = doc.data().TotalQ3;
      sTotalQ4 = doc.data().TotalQ4;
      sTotalQ5 = doc.data().TotalQ5;
      sTotalQ6 = doc.data().TotalQ6;
      sTotalQ7 = doc.data().TotalQ7;
      sTotalQ8 = doc.data().TotalQ8;
      sTargetSurvey = doc.data().TargetSurvey;
      sSumPoint = doc.data().SumPoint;
    });
  });
}

function SavePoll3333() {
  //parseFloat(t1.pocet)
  alert(parseFloat(t1.pocet)+"==="+document.getElementById("feedback1").value);
}

function GotoHome() {
  //location.href = 'home.html';
}
*/


function NewDate() {
  var months = new Array(12);
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";
  var today = new Date();
  var day = today.getDate() + "";
  var monthEN = (today.getMonth()) + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;

  xdateCheck = months[monthEN] + " " + day + ", " + year + " " + hour + ":" + minutes + ":" + seconds ;
  //var GetWatingTime = "april 25, 2022 12:30:00";
}

function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
}
