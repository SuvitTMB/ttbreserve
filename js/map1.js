var xMemo = "";
var SelectGroup = "";
var GotoGroup = 0;
var CountPeople = "";
var dateString = "";
var GetCustomerIDArr = [];
var GetCustomerDetailArr = [];


$(document).ready(function () {
  Connect_DB();
  CheckPeople();
  LoadMap();
  setInterval("LoadMap();",12000); 
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
      //console.log(doc.data().TableNo+"==="+doc.data().CustomerID);
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
  });
}


function CheckPeople() {
  var xRegCustomer = 0;
  var xRegExecutive = 0;
  var xRegStaff = 0;
  dbttbreserve.where('RegisterType','==','Registered')
  .orderBy('TableGroup','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
    //if(doc.data().RegisterType=="Registered") {
      if(doc.data().TableGroup=="A") {
        xRegCustomer = xRegCustomer+doc.data().People;
      } else if(doc.data().TableGroup=="B") {
        xRegExecutive = xRegExecutive+doc.data().People;
      } else if(doc.data().TableGroup=="C") {
        xRegStaff = xRegStaff+doc.data().People;
      }
    });
    $("#RegCustomer").html(xRegCustomer+" ท่าน");  
    $("#RegExecutive").html(xRegExecutive+" ท่าน");  
    $("#RegStaff").html(xRegStaff+" ท่าน");  
  });
}

var TableA,TableB,TableC,TableD,TableE,TableF,TableG,TableH,TableI,TableJ;

function LoadMap() {
  var str = "";
  var xTable = "";
  var xx = 1;
  var xxx = 1;
  //str += '<div style="margin:10px auto; width:100%; max-width: 400px;">';
  dbttbreservemap
  .orderBy('TableX','asc')
  .orderBy('CustomerNo','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {

      const results = GetCustomerDetailArr.filter(obj => {return obj.CustomerID === doc.data().CustomerID;});
      var xName = doc.data().CustomerName.split(' ');
      for( var i=0; i<xName.length; i++ ) {  }



      if(doc.data().TableX!=xTable) {
        xTable = doc.data().TableX;
        console.log(xTable);
        str += '</div>';
        if(xTable=="A") { $("#TableA").html(str); str = ""; }
        if(xTable=="B") { $("#TableB").html(str); str = ""; }
        if(xTable=="C") { $("#TableC").html(str); str = ""; }
        if(xTable=="D") { $("#TableD").html(str); str = ""; }
        if(xTable=="E") { $("#TableE").html(str); str = ""; }
        if(xTable=="F") { $("#TableF").html(str); str = ""; }
        if(xTable=="G") { $("#TableG").html(str); str = ""; }
        if(xTable=="H") { $("#TableH").html(str); str = ""; }
        if(xTable=="I") { $("#TableI").html(str); str = ""; }
        if(xTable=="J") { $("#TableJ").html(str); str = ""; }
        if(xTable=="K") { $("#TableK").html(str); str = ""; }
        xx = 1;
        if(xxx==1) {
          xxx = 0;
          str += '<div class="table-row" style="margin-right: 12px;"><div class="table-header">แถว '+ xTable +'</div>';
        } else {
          xxx = xxx+1;
          str += '<div class="table-row"><div class="table-header">แถว '+ xTable +'</div>';
        }


        if(doc.data().RegisterType=="Registered") { 
          str += '<div class="TableGroup_g" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
        } else if(doc.data().RegisterType=="Not Registered") { 
          str += '<div class="TableGroup_g" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
        } else { 
          str += '<div class="TableGroup_gg" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
        }
        if(doc.data().CustomerType=="A") { 
          if(doc.data().RegisterType=="Not Registered") { 
            str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_4" onerror="javascript:imgError(this)">';
          } else {
            str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable" onerror="javascript:imgError(this)">';
          }
        } else if(doc.data().CustomerType=="B") { 
          if(doc.data().RegisterType=="Not Registered") { 
            str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_4" onerror="javascript:imgError(this)">';
          } else {
            str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_1" onerror="javascript:imgError(this)">';
          }
        } else if(doc.data().CustomerType=="C") { 
          str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_2" onerror="javascript:imgError(this)">';
        } else {
          str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_3" onerror="javascript:imgError(this)">';
        }

        if(doc.data().RegisterType=="Registered") {
          if(results[0]!=undefined) {
            str += '<div class="check-customermap1">'+ results[0].TableNo +'</div>';
          }
        } else {
          if(results[0]!=undefined) {
            if(doc.data().RegisterType=="Not Registered") { 
              str += '<div class="check-customermap3">ยกเลิก</div>';
            } else {
              str += '<div class="check-customermap2">'+ results[0].TableNo +'</div>';
            }
          }
        }
        str += '</div>';
        str += '<div class="text-customer">'+xName[0]+'</div>';
      } else {
        if(doc.data().RegisterType=="Registered") { 
          str += '<div class="TableGroup_g" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
        } else if(doc.data().RegisterType=="Not Registered") { 
          str += '<div class="TableGroup_g" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
        } else { 
          str += '<div class="TableGroup_gg" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
        }
        if(doc.data().CustomerType=="A") { 
          if(doc.data().RegisterType=="Not Registered") { 
            str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_4" onerror="javascript:imgError(this)">';
          } else {
            str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable" onerror="javascript:imgError(this)">';
          }
        } else if(doc.data().CustomerType=="B") { 
          if(doc.data().RegisterType=="Not Registered") { 
            str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_4" onerror="javascript:imgError(this)">';
          } else {
            str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_1" onerror="javascript:imgError(this)">';
          }
        } else if(doc.data().CustomerType=="C") { 
          str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_2" onerror="javascript:imgError(this)">';
        } else {
          str += '<img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_3" onerror="javascript:imgError(this)">';
        }

        if(doc.data().RegisterType=="Registered") {
          if(results[0]!=undefined) {
            str += '<div class="check-customermap1">'+ results[0].TableNo +'</div>';
          }
        } else {
          if(results[0]!=undefined) {
            if(doc.data().RegisterType=="Not Registered") { 
              str += '<div class="check-customermap3">ยกเลิก</div>';
            } else {
              str += '<div class="check-customermap2">'+ results[0].TableNo +'</div>';
            }
          }
        }
        str += '</div>';
        str += '<div class="text-customer">'+xName[0]+'</div>';
      }




/*
      if(doc.data().TableX!=xTable) {
        xTable = doc.data().TableX;
        console.log(xTable);

        switch(xTable) {
          case "A":
            $("#TableA").html(str);  
            break;
          case "B":
            $("#TableB").html(str);  
            break;
          default:
        }
        str += '</div>';
        str = "";
        str += '<div class="clr"></div>';
        str += '<div class="table-row">';
        str += '<div class="table-header">แถว '+ doc.data().TableX +'</div>';
      }

      if(doc.data().RegisterType=="Registered") { 
        str += '<div class="TableGroup" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
      } else if(doc.data().RegisterType=="Not Registered") { 
        str += '<div class="TableGroup" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
      } else { 
        str += '<div class="TableGroup_b" onclick="ClickMember(\''+ doc.data().RefID +'\')">';
      }
      if(doc.data().CustomerType=="A") { 
        str += '<div><img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable" onerror="javascript:imgError(this)"></div>';
        if(results[0]==undefined) {
          str += '<div class="text-customer">'+xName[0]+'</div>';
        } else {
          //str += '<div class="text-customer">'+xName[0]+' <font color="#f68b1f">('+results[0].CustomerMember+')</font><br><font color="#ffff00">'+results[0].TableNo+'</font></div>';
          str += '<div class="text-customer" style="margin-top:5px;"><font color="#ffff00">'+results[0].TableNo+'</font></div>';
        }
      } else if(doc.data().CustomerType=="B") { 
        if(results[0]==undefined) {
          str += '<div class="text-customer">'+xName[0]+'</div>';
        } else {
          str += '<div><img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_1" onerror="javascript:imgError(this)"><br>'+results[0].TableNo+'</div>';
        }
      } else if(doc.data().CustomerType=="C") { 
        if(results[0]==undefined) {
          str += '<div class="text-customer">'+xName[0]+'</div>';
        } else {
          str += '<div><img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_2" onerror="javascript:imgError(this)"><br>'+results[0].TableNo+'</div>';        
        }
      } else {
          str += '<div><img src="./customer/'+doc.data().CustomerID+'.jpg" class="imgTable_2" onerror="javascript:imgError(this)"><br>'+doc.data().TableNo+'</div>';        
      }
      str += ''
      if(doc.data().RegisterType=="Registered") {
        str += '<div class="check-customermap"><img src="./img/true.png"></div>';
      } else if(doc.data().RegisterType=="Not Registered") { 
        str += '<div class="check-customermap"><img src="./img/false.png"></div>';
      }
      str += '</div>';
*/
    });
    str += '</div>';
    $("#DisplayMap").html(str);  
  });
  CheckPeople();
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
          //str += '<div class="check-register"><font color="#ffff00">'+ doc.data().RegisterType+'</font> | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+', '+ doc.data().TableNo2+'</div>';        
          if(results[0]==undefined) {
            str += '<div class="check-register"><font color="#ffff00">ลูกค้าลงทะเบียนแล้ว</font> (ID-'+ doc.data().CustomerID+')</div>';        
          } else {
            str += '<div class="check-register"><font color="#ffff00">ลูกค้าลงทะเบียนแล้ว</font> (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</div>';        
          }
        } else if(doc.data().RegisterType=="Not Registered") {
          //str += '<div class="check-register" style="background:#ff0000;"><font color="#ffff00">'+ doc.data().RegisterType+'</font> | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+', '+ doc.data().TableNo2+'</div>';        
          if(results[0]==undefined) { 
            str += '<div class="check-register" style="background:#ff0000;"><font color="#ffff00">ลูกค้าแจ้งไม่เข้าร่วมงาน (ID-'+ doc.data().CustomerID+'</font></div>';                    
          } else {
            str += '<div class="check-register" style="background:#ff0000;"><font color="#ffff00">ลูกค้าแจ้งไม่เข้าร่วมงาน (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</font></div>';                    
          }
        } else {
          //str += '<div class="check-register" style="background:#777;"><font color="#fff">ลูกค้ายังไม่ได้ลงทะเบียนเข้าร่วมงาน</font></div>';
          if(results[0]==undefined) {
            str += '<div class="check-register" style="background:#777;"><font color="#fff">ลูกค้ายังไม่ได้ลงทะเบียนเข้าร่วมงาน (ID-'+ doc.data().CustomerID+')</font></div>';
          } else {
            str += '<div class="check-register" style="background:#777;"><font color="#fff">ลูกค้ายังไม่ได้ลงทะเบียน (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</font></div>';
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
          //str += '<div style="color:#888;margin-top:10px;font-size:11px;"><u>พิมพ์รายการความสนใจ ที่นี่</u></div>';
          //str += '<div><textarea id="idttbMemo" style="width:95%;margin:4px auto;padding:5px;height:50px;background:#7f9dd8;"></textarea></div>';
          //str += '<div class="btn-t1" onclick="SaveMemo(\''+ doc.id +'\',\''+ xMemo +'\')">บันทึกรายการ</div>';
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
             str += '<div class="check-register" style="background:#777;"><font color="#fff">ยังไม่ได้ลงทะเบียนเข้าร่วมงาน</font></div>';
          } else {
            str += '<div class="check-register" style="background:#777;"><font color="#fff">ยังไม่ได้ลงทะเบียน (ID-'+ results[0].CustomerID+')<br>จำนวน '+ results[0].CustomerMember+' ท่าน | '+ results[0].TableNo +'</font></div>';        
          }
          //str += '<div class="check-register" style="background:#777;"><font color="#fff">ยังไม่ได้ลงทะเบียน</font> | '+ doc.data().People+' ท่าน | '+ doc.data().TableNo1+', '+ doc.data().TableNo2+'</div>';        
        }
        str += '<div><img src="./customer/'+doc.data().CustomerID+'.jpg" style="width: 120px;margin:15px auto;border-radius: 50%;" onerror="javascript:imgError(this)"></div>';
        str += '<div style="color:#f68b1f;font-size: 12px;font-weight: 600;">'+ doc.data().CustomerName+'</div>';
        str += '<div style="color:#fff;font-size: 11px;">'+doc.data().Position+'<br>'+doc.data().NameCompany+'</div>';
      }
      str += '<hr><div class="btn-t22" onclick="CloseAll()">Close</div>';
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
  document.getElementById('id01').style.display='none';
}


function imgError(image) {
    image.onerror = "";
    image.src = "./customer/box.jpg";
    return true;
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
