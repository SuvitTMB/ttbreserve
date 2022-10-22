var xMemo = "";
var SelectGroup = "";
var GotoGroup = 0;
var CountPeople = "";
var dateString = "";
var GetCustomerIDArr = [];
var GetCustomerDetailArr = [];


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Event")==null) { location.href = "index.html"; }
  //if(SelectGroup==0) { SelectGroup = 1; }
  Connect_DB();
  CheckPeople();
  LoadMember();
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
  GetTableCustomer();
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
            GetCustomerDetailArr.push({ CustomerID: xCustomerID, TableNo: x, CustomerMember: sumCustomerID, EmpRef: doc.id });
            sumCustomerID = 0;
            gCustomerID = "";
            xCustomerID = "";
          }
        }
        xCustomerID = doc.data().CustomerID;
        gCustomerID = doc.data().TableNo+"-"+gCustomerID;  
        mID = doc.id    
      }
    });    

    //GetCustomerIDArr.push(xCustomerID);
    //GetCustomerDetailArr.push({ CustomerID: xCustomerID, TableNo: x, CustomerMember: sumCustomerID, EmpRef: mID });
  });
}




function LinkGroup(x) {
  SelectGroup = x;
  LoadMember();
}

function CheckPeople() {
  var xRegCustomer = 0;
  var xRegExecutive = 0;
  var xRegStaff = 0;
  dbttbreserve.where('RegisterType','==','Registered')
  .orderBy('TableGroup','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(doc.data().TableGroup=="A") {
        xRegCustomer = xRegCustomer+doc.data().People;
      } else if(doc.data().TableGroup=="B") {
        xRegExecutive = xRegExecutive+doc.data().People;
      } else if(doc.data().TableGroup=="C") {
        xRegStaff = xRegStaff+doc.data().People;
      }
    });
    $("#RegCustomer").html("<b>"+xRegCustomer+" ท่าน</b>");  
    $("#RegExecutive").html("<b>"+xRegExecutive+" ท่าน</b>");  
    $("#RegStaff").html("<b>"+xRegStaff+" ท่าน</b>");  
  });
}


function LoadMember() {
  var str = "";
  var str1 = "";
  if(SelectGroup=="") { SelectGroup="A"; }

  if(SelectGroup=="A") {
    str1 += '<div class="btn-t1">ลูกค้าที่ได้รับเชิญร่วมงาน</div>';
  } else if(SelectGroup=="B") {
    str1 += '<div class="btn-t2">ผู้บริหารธนาคาร</div>';
  } else if(SelectGroup=="C") {
    str1 += '<div class="btn-t3">พนักงานที่ต้อนรับลูกค้า</div>';
  }
  $("#DisplayHeader").html(str1);  
  dbttbreserve.where('TableGroup','==',SelectGroup)
  //.orderBy('Ranking','asc')
  .orderBy('CustomerName','asc')
  //.orderBy('CustomerID','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {

    const results = GetCustomerDetailArr.filter(obj => {return obj.CustomerID === doc.data().CustomerID;});
    console.log(results[0]);

    var xName = doc.data().CustomerName.split(' ');
    for( var i=0; i<xName.length; i++ ) {  }

    if(doc.data().RegisterType=="Registered") {   
      str += '<div class="display-customer" onclick="ClickMember(\''+ doc.id +'\')"><img src="./customer/'+doc.data().CustomerID+'.jpg" onerror="javascript:imgError(this)" style="width:70%; border-radius: 50%;">';
      if(results[0]==undefined) {
        str += '<div class="text-customer"><b>'+xName[0]+'</b></div>';
      } else {
        str += '<div class="text-customer"><b>'+xName[0]+'</b> <font color="#f68b1f">('+results[0].CustomerMember+')</font><br><font color="#ffff00"><b>'+results[0].TableNo+'</b></font></div>';
      }
    } else if(doc.data().RegisterType=="Not Registered") { 
      str += '<div class="display-customer" onclick="ClickMember(\''+ doc.id +'\')"><img src="./customer/'+doc.data().CustomerID+'.jpg" onerror="javascript:imgError(this)" style="width:70%; border-radius: 50%;">';
      if(results[0]==undefined) {
        str += '<div class="text-customer"><b>'+xName[0]+'</b></div>';
      } else {
        str += '<div class="text-customer"><b>'+xName[0]+'</b> <font color="#ffff00">('+results[0].CustomerMember+')<br><b>'+results[0].TableNo+'</b></font></div>';
      }
    } else {
      str += '<div class="display-customer" onclick="ClickMember(\''+ doc.id +'\')"><img src="./customer/'+doc.data().CustomerID+'.jpg" class="TableGroup_c" onerror="javascript:imgError(this)" style="width:70%; border-radius: 50%;">';
      if(results[0]==undefined) {
        str += '<div class="text-customer"><b>'+xName[0]+'</b></div>';
      } else {
        str += '<div class="text-customer"><b>'+xName[0]+'</b> <font color="#777">('+results[0].CustomerMember+')<br><b>'+results[0].TableNo+'</b></font></div>';
      }
    }

    if(doc.data().RegisterType=="Registered") {
      str += '<div class="check-customer"><img src="./img/true.png"></div>';
    } else if(doc.data().RegisterType=="Not Registered") { 
      str += '<div class="check-customer"><img src="./img/false.png"></div>';
    }
    str += '</div>';
    });
    $("#DisplayMember").html(str);  
  });
}



function imgError(image) {
    image.onerror = "";
    image.src = "./customer/box.jpg";
    return true;
}


function ClickMember(id) {

  var str = "";
  dbttbreserve.where(firebase.firestore.FieldPath.documentId(), "==", id)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {

      const results = GetCustomerDetailArr.filter(obj => {return obj.CustomerID === doc.data().CustomerID;});
      console.log(results[0]);


      if(doc.data().TableGroup=="A") {
        xMemo = doc.data().Memo;

        if(doc.data().RegisterType=="Registered") {
          if(results[0]==undefined) {
            str += '<div class="check-register"><font color="#ffff00">ลงทะเบียนแล้ว</font> (ID-'+ doc.data().CustomerID+')</div>';        
          } else {
            str += '<div class="check-register"><font color="#ffff00">ลงทะเบียนแล้ว</font> (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</div>';        
          }
        } else if(doc.data().RegisterType=="Not Registered") {
          if(results[0]==undefined) { 
            str += '<div class="check-register" style="background:#ff0000;"><font color="#ffff00">แจ้งไม่เข้าร่วมงาน (ID-'+ doc.data().CustomerID+'</font></div>';                    
          } else {
            str += '<div class="check-register" style="background:#ff0000;"><font color="#ffff00">แจ้งไม่เข้าร่วมงาน (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</font></div>';                    
          }
        } else {
          if(results[0]==undefined) {
            str += '<div class="check-register" style="background:#777;"><font color="#fff">ยังไม่ได้ลงทะเบียน (ID-'+ doc.data().CustomerID+')</font></div>';
          } else {
            str += '<div class="check-register" style="background:#777;"><font color="#fff">ยังไม่ได้ลงทะเบียน (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</font></div>';
          }
        }

        str += '<div><img src="./customer/'+doc.data().CustomerID+'.jpg" style="width: 120px;margin:10px auto;border-radius: 50%;" onerror="javascript:imgError(this)"></div>';
        str += '<div style="color:#f68b1f;font-size: 12px;font-weight: 600;">'+ doc.data().CustomerName;
        if(doc.data().Age != "" ) {
          str += ' ('+doc.data().Age+') ';
        } 
        if(doc.data().MaritalStatus != "" ) {
          str += '<br>'+doc.data().MaritalStatus;
        } 
        str += '</div>';
        str += '<div style="color:#fff;font-size: 11px;">'+doc.data().Position+'<br>'+doc.data().NameCompany+'<br>'+doc.data().Business+'</div>';
        //str += '<div style="color:#fff;font-size: 11px;margin-top:15px;"><font color="#888"><u>พอร์ตการลงทุนกับ ttb</u></font><br>'+doc.data().ttbPort+'</div>';
        //str += '<div style="color:#fff;font-size: 11px;margin-top:15px;"><font color="#888"><u>พอร์ตการลงทุนกับที่อื่น</u></font><br>'+doc.data().OthPort+'</div>';
        //str += '<div style="color:#fff;font-size: 11px;margin-top:15px;"><font color="#888"><u>สถานะบัตร ttb reserve</u></font><br>'+doc.data().CardReserve+'<br>'+doc.data().CardType+'</div>';
        str += '<div style="color:#fff;font-size: 11px;margin-top:15px;"><font color="#888"><u>พนักงานที่ดูแล</u></font><br>'+doc.data().Staff+'<br>'+doc.data().Branch+'</div>';
        if(doc.data().RegisterType=="Registered") {
          str += '<div style="color:#ffff00;font-size: 11px;margin-top:15px;"><font color="#888"><u>บันทึกความสนใจของลูกค้า</u></font></div>';
          str += '<div id="DisplayMemo" style="color:#f68b1f;font-size:11px;margin-top:10px;">'+doc.data().Memo+'</div>';
          str += '<div style="color:#888;margin-top:10px;font-size:11px;"><u>พิมพ์รายการความสนใจ ที่นี่</u></div>';
          str += '<div><textarea id="idttbMemo" style="width:95%;margin:4px auto;padding:5px;height:50px;background:#7f9dd8;"></textarea></div>';
          str += '<div class="btn-t1" onclick="SaveMemo(\''+ doc.id +'\',\''+ xMemo +'\')">บันทึกรายการ</div>';
        }
      } else {
        if(doc.data().RegisterType=="Registered") {
          if(results[0]==undefined) { 
            str += '<div class="check-register"><font color="#ffff00">ลงทะเบียนแล้ว</font> (ID-'+ doc.data().CustomerID+')</div>';        
          } else {
            str += '<div class="check-register"><font color="#ffff00">ลงทะเบียนแล้ว</font> (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</div>';           
          }
          //str += '<div class="check-register"><font color="#ffff00">'+ doc.data().RegisterType+'</font> | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+', '+ doc.data().TableNo2+'</div>';        
        } else if(doc.data().RegisterType=="Not Registered") {
          if(results[0]==undefined) { 
            str += '<div class="check-register" style="background:#ff0000;"><font color="#ffff00">แจ้งไม่เข้าร่วมงาน</font> (ID-'+ doc.data().CustomerID+')</div>';        
          } else {
            str += '<div class="check-register" style="background:#ff0000;"><font color="#ffff00">แจ้งไม่เข้าร่วมงาน</font> (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</div>';        
          }
          //str += '<div class="check-register" style="background:#ff0000;"><font color="#ffff00">'+ doc.data().RegisterType+'</font> | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+', '+ doc.data().TableNo2+'</div>';        
        } else {
          if(results[0]==undefined) { 
            str += '<div class="check-register" style="background:#777;"><font color="#fff">ยังไม่ได้ลงทะเบียน (ID-'+ doc.data().CustomerID+')</font></div>';
          } else {
            str += '<div class="check-register" style="background:#777;"><font color="#fff">ยังไม่ได้ลงทะเบียน (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</font></div>';        
          }
          //str += '<div class="check-register" style="background:#777;"><font color="#fff">ยังไม่ได้ลงทะเบียน</font> | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+', '+ doc.data().TableNo2+'</div>';        
        }
/*
        if(doc.data().RegisterType=="") {
          str += '<div class="check-register"><font color="#fff">ยังไม่ได้ลงทะเบียน</font> | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+'</div>';        
        } else {
          str += '<div class="check-register">'+ doc.data().RegisterType+' | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+'</div>';        
        }
*/
        //str += '<div class="check-register">'+ doc.data().RegisterType+' | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+'</div>';        
        str += '<div><img src="./customer/'+doc.data().CustomerID+'.jpg" style="width: 120px;margin:15px auto;border-radius: 50%;" onerror="javascript:imgError(this)"></div>';
        str += '<div style="color:#f68b1f;font-size: 12px;font-weight: 600;">'+ doc.data().CustomerName+'</div>';
        str += '<div style="color:#fff;font-size: 11px;">'+doc.data().Position+'<br>'+doc.data().NameCompany+'</div>';
      }

      if(sessionStorage.getItem("EmpID_Admin")!=null) {
        str += '<div class="clr"></div><hr>';
        if(doc.data().RegisterType=="") {
          str += '<div class="btn-t1" onclick="SaveRegister(\''+ doc.id +'\',\''+ doc.data().TableGroup +'\',1)">คลิกลงทะเบียนร่ามงาน</div>';
          str += '<div class="btn-t4" onclick="SaveRegister(\''+ doc.id +'\',\''+ doc.data().TableGroup +'\',2)">ไม่เข้าร่วมงาน</div>';
        } else {
          str += '<div class="btn-t4" onclick="SaveRegister(\''+ doc.id +'\',\''+ doc.data().TableGroup +'\',0)">ขอลงทะเบียนใหม่</div>';
        }
        str += '<div class="clr" style="height: 5px;"></div><hr>';
      }
      str += '<div class="btn-t22" onclick="CloseAll()">Close</div>';
      str += '<div class="clr" style="height:30px;"></div>';
    });
    $("#DisplayProfile").html(str);
  });
  document.getElementById('id01').style.display='block';
}


function SaveMemo(id,txt) {
  var sidttbMemo = document.getElementById("idttbMemo").value;
  if(sidttbMemo!="") {
    xMemo += sidttbMemo+"<br><font color=#c5ac94>"+sessionStorage.getItem("EmpName_Event")+"</font><hr>";
    dbttbreserve.doc(id).update({
      Memo : xMemo
    });    
  }
  idttbMemo.value = '';
  $("#DisplayMemo").html(xMemo);
}



function CloseAll() {
  var str = "";
  $("#DisplayProfile").html(str);  
  document.getElementById('id01').style.display='none';
}


function SaveRegister(id,g,x) {
  NewDate();
  var CountPeople = "";
  var TypeRegister = "";
  if(x==1) { TypeRegister="Registered"; }
  else if(x==2) { TypeRegister="Not Registered"; }
  else { 
    TypeRegister = ""; 
    dateString = "";
  }
  dbttbreserve.doc(id).update({
    RegisterType : TypeRegister,
    RegisterDate : dateString,
    RegisterBy : sessionStorage.getItem("EmpName_Event")
  });    

  dbttbreservemap.where('RefID','==',id)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      dbttbreservemap.doc(doc.id).update({
        RefID : id,
        CustomerType : g,
        RegisterType : TypeRegister
      });

      //UpdateMap(doc.id,TypeRegister);
      //var xCustomerName = doc.data().CustomerName;
      console.log(TypeRegister);
    });
  });

  document.getElementById('id01').style.display='none';
  LoadMember();
  CheckPeople();
}


function UpdateMap(id,t) {
  dbttbreservemap.doc(id).update({
    RegisterType : t
  });
}


function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
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
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}
