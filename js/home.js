(function(_0xf2d497,_0x490eab){var _0x3bc8f9=_0x5e79,_0x2f8ec1=_0xf2d497();while(!![]){try{var _0x2c10d6=parseInt(_0x3bc8f9(0x16d))/0x1+parseInt(_0x3bc8f9(0x1dd))/0x2*(parseInt(_0x3bc8f9(0x1a8))/0x3)+-parseInt(_0x3bc8f9(0x1be))/0x4*(parseInt(_0x3bc8f9(0x1d0))/0x5)+parseInt(_0x3bc8f9(0x1cf))/0x6+-parseInt(_0x3bc8f9(0x192))/0x7*(parseInt(_0x3bc8f9(0x16f))/0x8)+-parseInt(_0x3bc8f9(0x1a2))/0x9*(-parseInt(_0x3bc8f9(0x1bc))/0xa)+-parseInt(_0x3bc8f9(0x19e))/0xb*(-parseInt(_0x3bc8f9(0x18a))/0xc);if(_0x2c10d6===_0x490eab)break;else _0x2f8ec1['push'](_0x2f8ec1['shift']());}catch(_0x5272b2){_0x2f8ec1['push'](_0x2f8ec1['shift']());}}}(_0x4ff6,0x81efe));var xMemo='',SelectGroup='',GotoGroup=0x0,CountPeople='',dateString='',GetCustomerIDArr=[],GetCustomerDetailArr=[];$(document)['ready'](function(){var _0x4ae2e3=_0x5e79;sessionStorage[_0x4ae2e3(0x1db)](_0x4ae2e3(0x168))==null&&(location[_0x4ae2e3(0x194)]=_0x4ae2e3(0x1b9)),Connect_DB(),CheckPeople(),LoadMember();});function Connect_DB(){var _0xb29660=_0x5e79,_0x210044={'apiKey':'AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','authDomain':_0xb29660(0x177),'projectId':_0xb29660(0x187),'storageBucket':_0xb29660(0x1a5),'messagingSenderId':_0xb29660(0x1d7),'appId':_0xb29660(0x1ad),'measurementId':_0xb29660(0x190)};firebase['initializeApp'](_0x210044),dbttbreserve=firebase[_0xb29660(0x1d6)]()[_0xb29660(0x172)](_0xb29660(0x1a0)),dbttbreservemap=firebase[_0xb29660(0x1d6)]()[_0xb29660(0x172)](_0xb29660(0x1c7)),GetTableCustomer();}function GetTableCustomer(){var _0x3852d2=_0x5e79,_0x46ca17=0x0,_0x510b76='',_0xa5f680=0x0,_0x41f534='',_0xd034f3='',_0x36e61b='',_0x52e8fe='';dbttbreservemap[_0x3852d2(0x1c1)](_0x3852d2(0x173),'asc')['orderBy'](_0x3852d2(0x1ce),_0x3852d2(0x1c6))['get']()[_0x3852d2(0x181)](_0x3cda74=>{_0x3cda74['forEach'](_0x40c61d=>{var _0x30745a=_0x5e79;if(_0x40c61d['data']()['CustomerID']!=''){if(_0x41f534==_0x40c61d[_0x30745a(0x16a)]()[_0x30745a(0x173)])_0xa5f680=_0xa5f680+0x1;else{if(_0x41f534!=''){_0xa5f680=_0xa5f680+0x1;var _0xc3854b=_0xd034f3['substring'](0x0,_0xd034f3['length']-0x1);GetCustomerIDArr['push'](_0x41f534),GetCustomerDetailArr[_0x30745a(0x18d)]({'CustomerID':_0x41f534,'TableNo':_0xc3854b,'CustomerMember':_0xa5f680,'EmpRef':_0x40c61d['id']}),_0xa5f680=0x0,_0xd034f3='',_0x41f534='';}}_0x41f534=_0x40c61d[_0x30745a(0x16a)]()[_0x30745a(0x173)],_0xd034f3=_0x40c61d[_0x30745a(0x16a)]()[_0x30745a(0x1ac)]+'-'+_0xd034f3,_0x52e8fe=_0x40c61d['id'];}});});}function _0x5e79(_0x2a8113,_0x2af7f5){var _0x4ff635=_0x4ff6();return _0x5e79=function(_0x5e7930,_0x27bdc8){_0x5e7930=_0x5e7930-0x165;var _0x54a97b=_0x4ff635[_0x5e7930];return _0x54a97b;},_0x5e79(_0x2a8113,_0x2af7f5);}function LinkGroup(_0x21f627){SelectGroup=_0x21f627,LoadMember();}function CheckPeople(){var _0x7f7ddb=_0x5e79,_0x12323e=0x0,_0x525f5b=0x0,_0x24e48c=0x0;dbttbreserve[_0x7f7ddb(0x1b2)]('RegisterType','==','Registered')[_0x7f7ddb(0x1c1)](_0x7f7ddb(0x19a),_0x7f7ddb(0x1d9))[_0x7f7ddb(0x1c4)]()['then'](_0x469f12=>{var _0x46aa11=_0x7f7ddb;_0x469f12[_0x46aa11(0x1a9)](_0x3ba8f5=>{var _0xf5dbf0=_0x46aa11;if(_0x3ba8f5[_0xf5dbf0(0x16a)]()[_0xf5dbf0(0x19a)]=='A')_0x12323e=_0x12323e+_0x3ba8f5[_0xf5dbf0(0x16a)]()[_0xf5dbf0(0x1b4)];else{if(_0x3ba8f5['data']()[_0xf5dbf0(0x19a)]=='B')_0x525f5b=_0x525f5b+_0x3ba8f5[_0xf5dbf0(0x16a)]()[_0xf5dbf0(0x1b4)];else _0x3ba8f5[_0xf5dbf0(0x16a)]()[_0xf5dbf0(0x19a)]=='C'&&(_0x24e48c=_0x24e48c+_0x3ba8f5[_0xf5dbf0(0x16a)]()[_0xf5dbf0(0x1b4)]);}}),$(_0x46aa11(0x1b3))[_0x46aa11(0x1a4)]('<b>'+_0x12323e+'\x20ท่าน</b>'),$(_0x46aa11(0x17a))['html'](_0x46aa11(0x1d2)+_0x525f5b+'\x20ท่าน</b>'),$(_0x46aa11(0x197))['html'](_0x46aa11(0x1d2)+_0x24e48c+'\x20ท่าน</b>');});}function LoadMember(){var _0x2af100=_0x5e79,_0x251b41='',_0x3c595a='';SelectGroup==''&&(SelectGroup='A');if(SelectGroup=='A')_0x3c595a+='<div\x20class=\x22btn-t1\x22>ลูกค้าที่ได้รับเชิญร่วมงาน</div>';else{if(SelectGroup=='B')_0x3c595a+=_0x2af100(0x1da);else SelectGroup=='C'&&(_0x3c595a+='<div\x20class=\x22btn-t3\x22>พนักงานที่ต้อนรับลูกค้า</div>');}$('#DisplayHeader')['html'](_0x3c595a),dbttbreserve[_0x2af100(0x1b2)]('TableGroup','==',SelectGroup)[_0x2af100(0x1c1)]('CustomerName','asc')['get']()[_0x2af100(0x181)](_0x3fee65=>{var _0x16c80e=_0x2af100;_0x3fee65['forEach'](_0xfa282f=>{var _0x8b8069=_0x5e79;const _0x359e2d=GetCustomerDetailArr[_0x8b8069(0x19f)](_0x55d63b=>{var _0x990039=_0x8b8069;return _0x55d63b[_0x990039(0x173)]===_0xfa282f['data']()[_0x990039(0x173)];});console[_0x8b8069(0x1bf)](_0x359e2d[0x0]);var _0xc76849=_0xfa282f[_0x8b8069(0x16a)]()[_0x8b8069(0x195)][_0x8b8069(0x18e)]('\x20');for(var _0x21188a=0x0;_0x21188a<_0xc76849[_0x8b8069(0x18f)];_0x21188a++){}if(_0xfa282f['data']()['RegisterType']==_0x8b8069(0x193))_0x251b41+=_0x8b8069(0x176)+_0xfa282f['id']+_0x8b8069(0x186)+_0xfa282f[_0x8b8069(0x16a)]()[_0x8b8069(0x173)]+_0x8b8069(0x1d8),_0x359e2d[0x0]==undefined?_0x251b41+=_0x8b8069(0x171)+_0xc76849[0x0]+_0x8b8069(0x16e):_0x251b41+=_0x8b8069(0x171)+_0xc76849[0x0]+_0x8b8069(0x1c9)+_0x359e2d[0x0][_0x8b8069(0x167)]+_0x8b8069(0x1cb)+_0x359e2d[0x0][_0x8b8069(0x1ac)]+'</b></font></div>';else _0xfa282f[_0x8b8069(0x16a)]()[_0x8b8069(0x178)]==_0x8b8069(0x180)?(_0x251b41+=_0x8b8069(0x176)+_0xfa282f['id']+_0x8b8069(0x186)+_0xfa282f['data']()[_0x8b8069(0x173)]+_0x8b8069(0x1d8),_0x359e2d[0x0]==undefined?_0x251b41+=_0x8b8069(0x171)+_0xc76849[0x0]+_0x8b8069(0x16e):_0x251b41+='<div\x20class=\x22text-customer\x22><b>'+_0xc76849[0x0]+_0x8b8069(0x17c)+_0x359e2d[0x0][_0x8b8069(0x167)]+_0x8b8069(0x1d5)+_0x359e2d[0x0][_0x8b8069(0x1ac)]+'</b></font></div>'):(_0x251b41+=_0x8b8069(0x176)+_0xfa282f['id']+_0x8b8069(0x186)+_0xfa282f[_0x8b8069(0x16a)]()[_0x8b8069(0x173)]+_0x8b8069(0x1b7),_0x359e2d[0x0]==undefined?_0x251b41+=_0x8b8069(0x171)+_0xc76849[0x0]+_0x8b8069(0x16e):_0x251b41+=_0x8b8069(0x171)+_0xc76849[0x0]+_0x8b8069(0x196)+_0x359e2d[0x0][_0x8b8069(0x167)]+_0x8b8069(0x1d5)+_0x359e2d[0x0][_0x8b8069(0x1ac)]+'</b></font></div>');if(_0xfa282f[_0x8b8069(0x16a)]()[_0x8b8069(0x178)]=='Registered')_0x251b41+=_0x8b8069(0x1dc);else _0xfa282f['data']()[_0x8b8069(0x178)]==_0x8b8069(0x180)&&(_0x251b41+=_0x8b8069(0x191));_0x251b41+='</div>';}),$(_0x16c80e(0x1c0))[_0x16c80e(0x1a4)](_0x251b41);});}function imgError(_0x3b59a3){return _0x3b59a3['onerror']='',_0x3b59a3['src']='./customer/box.jpg',!![];}function ClickMember(_0x201514){var _0x1e0a04=_0x5e79,_0x5322ff='';dbttbreserve['where'](firebase[_0x1e0a04(0x1d6)]['FieldPath'][_0x1e0a04(0x18b)](),'==',_0x201514)['get']()[_0x1e0a04(0x181)](_0xfd91ee=>{var _0x19c6a4=_0x1e0a04;_0xfd91ee[_0x19c6a4(0x1a9)](_0x55afb1=>{var _0x332e97=_0x19c6a4;const _0x47b06e=GetCustomerDetailArr[_0x332e97(0x19f)](_0x1ed1ca=>{var _0xb5e198=_0x332e97;return _0x1ed1ca['CustomerID']===_0x55afb1['data']()[_0xb5e198(0x173)];});console[_0x332e97(0x1bf)](_0x47b06e[0x0]);if(_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x19a)]=='A'){xMemo=_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x166)];if(_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x178)]=='Registered')_0x47b06e[0x0]==undefined?_0x5322ff+='<div\x20class=\x22check-register\x22><font\x20color=\x22#ffff00\x22>ลงทะเบียนแล้ว</font>\x20(ID-'+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x173)]+')</div>':_0x5322ff+=_0x332e97(0x174)+_0x47b06e[0x0]['CustomerID']+')<br>จำนวน\x20'+_0x47b06e[0x0][_0x332e97(0x167)]+'\x20ท่าน\x20|\x20'+_0x47b06e[0x0][_0x332e97(0x1ac)]+_0x332e97(0x1b0);else _0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x178)]==_0x332e97(0x180)?_0x47b06e[0x0]==undefined?_0x5322ff+=_0x332e97(0x1df)+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x173)]+_0x332e97(0x1ab):_0x5322ff+=_0x332e97(0x1df)+_0x47b06e[0x0][_0x332e97(0x173)]+_0x332e97(0x1b1)+_0x47b06e[0x0][_0x332e97(0x167)]+_0x332e97(0x1af)+_0x47b06e[0x0][_0x332e97(0x1ac)]+_0x332e97(0x1ab):_0x47b06e[0x0]==undefined?_0x5322ff+='<div\x20class=\x22check-register\x22\x20style=\x22background:#fff;\x22><font\x20color=\x22#fff\x22>ยังไม่ได้ลงทะเบียน\x20(ID-'+_0x55afb1['data']()['CustomerID']+_0x332e97(0x169):_0x5322ff+=_0x332e97(0x175)+_0x47b06e[0x0][_0x332e97(0x173)]+_0x332e97(0x1b1)+_0x47b06e[0x0][_0x332e97(0x167)]+'\x20ท่าน\x20|\x20'+_0x47b06e[0x0][_0x332e97(0x1ac)]+_0x332e97(0x1ab);_0x5322ff+='<div><img\x20src=\x22./customer/'+_0x55afb1['data']()[_0x332e97(0x173)]+'.jpg\x22\x20style=\x22width:\x20120px;margin:10px\x20auto;border-radius:\x2050%;\x22\x20onerror=\x22javascript:imgError(this)\x22></div>',_0x5322ff+=_0x332e97(0x1c5)+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x195)],_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x1de)]!=''&&(_0x5322ff+='\x20('+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x1de)]+')\x20'),_0x55afb1['data']()[_0x332e97(0x1a1)]!=''&&(_0x5322ff+=_0x332e97(0x1c8)+_0x55afb1['data']()[_0x332e97(0x1a1)]),_0x5322ff+='</div>',_0x5322ff+=_0x332e97(0x16b)+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x19b)]+'<br>'+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x1b8)]+'<br>'+_0x55afb1['data']()[_0x332e97(0x17d)]+'</div>',_0x5322ff+=_0x332e97(0x17e)+_0x55afb1['data']()['Staff']+_0x332e97(0x1c8)+_0x55afb1[_0x332e97(0x16a)]()['Branch']+_0x332e97(0x1b0),_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x178)]==_0x332e97(0x193)&&(_0x5322ff+=_0x332e97(0x185),_0x5322ff+=_0x332e97(0x1b5)+_0x55afb1[_0x332e97(0x16a)]()['Memo']+_0x332e97(0x1b0),_0x5322ff+=_0x332e97(0x17b),_0x5322ff+=_0x332e97(0x1d3),_0x5322ff+=_0x332e97(0x1a6)+_0x55afb1['id']+_0x332e97(0x19d)+xMemo+'\x27)\x22>บันทึกรายการ</div>');}else{if(_0x55afb1['data']()[_0x332e97(0x178)]==_0x332e97(0x193))_0x47b06e[0x0]==undefined?_0x5322ff+=_0x332e97(0x174)+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x173)]+')</div>':_0x5322ff+=_0x332e97(0x174)+_0x47b06e[0x0][_0x332e97(0x173)]+_0x332e97(0x1b1)+_0x47b06e[0x0][_0x332e97(0x167)]+_0x332e97(0x1af)+_0x47b06e[0x0]['TableNo']+_0x332e97(0x1b0);else _0x55afb1[_0x332e97(0x16a)]()['RegisterType']==_0x332e97(0x180)?_0x47b06e[0x0]==undefined?_0x5322ff+=_0x332e97(0x184)+_0x55afb1['data']()['CustomerID']+_0x332e97(0x198):_0x5322ff+=_0x332e97(0x184)+_0x47b06e[0x0][_0x332e97(0x173)]+')<br>จำนวน\x20'+_0x47b06e[0x0]['CustomerMember']+_0x332e97(0x1af)+_0x47b06e[0x0][_0x332e97(0x1ac)]+_0x332e97(0x1b0):_0x47b06e[0x0]==undefined?_0x5322ff+='<div\x20class=\x22check-register\x22\x20style=\x22background:#fff;\x22><font\x20color=\x22#fff\x22>ยังไม่ได้ลงทะเบียน\x20(ID-'+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x173)]+_0x332e97(0x169):_0x5322ff+='<div\x20class=\x22check-register\x22\x20style=\x22background:#fff;\x22><font\x20color=\x22#fff\x22>ยังไม่ได้ลงทะเบียน\x20(ID-'+_0x47b06e[0x0][_0x332e97(0x173)]+_0x332e97(0x1b1)+_0x47b06e[0x0][_0x332e97(0x167)]+'\x20ท่าน\x20|\x20'+_0x47b06e[0x0][_0x332e97(0x1ac)]+'</font></div>';_0x5322ff+=_0x332e97(0x1cc)+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x173)]+'.jpg\x22\x20style=\x22width:\x20120px;margin:15px\x20auto;border-radius:\x2050%;\x22\x20onerror=\x22javascript:imgError(this)\x22></div>',_0x5322ff+=_0x332e97(0x1c5)+_0x55afb1[_0x332e97(0x16a)]()['CustomerName']+_0x332e97(0x1b0),_0x5322ff+=_0x332e97(0x16b)+_0x55afb1['data']()[_0x332e97(0x19b)]+_0x332e97(0x1c8)+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x1b8)]+_0x332e97(0x1b0);}sessionStorage[_0x332e97(0x1db)](_0x332e97(0x1aa))!=null&&(_0x5322ff+='<div\x20class=\x22clr\x22></div><hr>',_0x55afb1['data']()[_0x332e97(0x178)]==''?(_0x5322ff+=_0x332e97(0x1bb)+_0x55afb1['id']+_0x332e97(0x19d)+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x19a)]+_0x332e97(0x183),_0x5322ff+='<div\x20class=\x22btn-t4\x22\x20onclick=\x22SaveRegister(\x27'+_0x55afb1['id']+_0x332e97(0x19d)+_0x55afb1[_0x332e97(0x16a)]()[_0x332e97(0x19a)]+_0x332e97(0x179)):_0x5322ff+='<div\x20class=\x22btn-t4\x22\x20onclick=\x22SaveRegister(\x27'+_0x55afb1['id']+_0x332e97(0x19d)+_0x55afb1['data']()['TableGroup']+_0x332e97(0x1a3),_0x5322ff+='<div\x20class=\x22clr\x22\x20style=\x22height:\x205px;\x22></div><hr>'),_0x5322ff+='<div\x20class=\x22btn-t22\x22\x20onclick=\x22CloseAll()\x22>Close</div>',_0x5322ff+=_0x332e97(0x1bd);}),$('#DisplayProfile')[_0x19c6a4(0x1a4)](_0x5322ff);}),document[_0x1e0a04(0x1cd)](_0x1e0a04(0x1d1))[_0x1e0a04(0x18c)]['display']=_0x1e0a04(0x17f);}function SaveMemo(_0x116f18,_0x39dc90){var _0x2d0019=_0x5e79,_0x1498b1=document[_0x2d0019(0x1cd)](_0x2d0019(0x189))[_0x2d0019(0x165)];_0x1498b1!=''&&(xMemo+=_0x1498b1+_0x2d0019(0x19c)+sessionStorage[_0x2d0019(0x1db)](_0x2d0019(0x1c3))+_0x2d0019(0x170),dbttbreserve[_0x2d0019(0x1d4)](_0x116f18)[_0x2d0019(0x1ca)]({'Memo':xMemo})),idttbMemo['value']='',$(_0x2d0019(0x199))['html'](xMemo);}function CloseAll(){var _0x898e4a=_0x5e79,_0x55dbab='';$(_0x898e4a(0x1ae))[_0x898e4a(0x1a4)](_0x55dbab),document[_0x898e4a(0x1cd)]('id01')[_0x898e4a(0x18c)][_0x898e4a(0x182)]=_0x898e4a(0x16c);}function _0x4ff6(){var _0x23b78b=['955795MEgsWv','id01','<b>','<div><textarea\x20id=\x22idttbMemo\x22\x20style=\x22width:95%;margin:4px\x20auto;padding:5px;height:50px;background:#7f9dd8;\x22></textarea></div>','doc',')<br><b>','firestore','653667385625','.jpg\x22\x20onerror=\x22javascript:imgError(this)\x22\x20style=\x22width:70%;\x20border-radius:\x2050%;\x22>','asc','<div\x20class=\x22btn-t2\x22>ผู้บริหารธนาคาร</div>','getItem','<div\x20class=\x22check-customer\x22><img\x20src=\x22./img/true.png\x22></div>','42qTZAOR','Age','<div\x20class=\x22check-register\x22\x20style=\x22background:#ff0000;\x22><font\x20color=\x22#ffff00\x22>แจ้งไม่เข้าร่วมงาน\x20(ID-','value','Memo','CustomerMember','EmpID_Event',')</font></div>','data','<div\x20style=\x22color:#fff;font-size:\x2011px;\x22>','none','125206rMcuia','</b></div>','919608EOqqnW','</font><hr>','<div\x20class=\x22text-customer\x22><b>','collection','CustomerID','<div\x20class=\x22check-register\x22><font\x20color=\x22#ffff00\x22>ลงทะเบียนแล้ว</font>\x20(ID-','<div\x20class=\x22check-register\x22\x20style=\x22background:#fff;\x22><font\x20color=\x22#fff\x22>ยังไม่ได้ลงทะเบียน\x20(ID-','<div\x20class=\x22display-customer\x22\x20onclick=\x22ClickMember(\x27','retailproject-6f4fc.firebaseapp.com','RegisterType','\x27,2)\x22>ไม่เข้าร่วมงาน</div>','#RegExecutive','<div\x20style=\x22color:#888;margin-top:10px;font-size:11px;\x22><u>พิมพ์รายการความสนใจ\x20ที่นี่</u></div>','</b>\x20<font\x20color=\x22#ffff00\x22>(','Business','<div\x20style=\x22color:#fff;font-size:\x2011px;margin-top:15px;\x22><font\x20color=\x22#888\x22><u>พนักงานที่ดูแล</u></font><br>','block','Not\x20Registered','then','display','\x27,1)\x22>คลิกลงทะเบียนร่ามงาน</div>','<div\x20class=\x22check-register\x22\x20style=\x22background:#ff0000;\x22><font\x20color=\x22#ffff00\x22>แจ้งไม่เข้าร่วมงาน</font>\x20(ID-','<div\x20style=\x22color:#ffff00;font-size:\x2011px;margin-top:15px;\x22><font\x20color=\x22#888\x22><u>บันทึกความสนใจของลูกค้า</u></font></div>','\x27)\x22><img\x20src=\x22./customer/','retailproject-6f4fc','getDate','idttbMemo','734928oTagNQ','documentId','style','push','split','length','G-9SKTRHHSW9','<div\x20class=\x22check-customer\x22><img\x20src=\x22./img/false.png\x22></div>','49WzWghQ','Registered','href','CustomerName','</b>\x20<font\x20color=\x22#fff\x22>(','#RegStaff',')</div>','#DisplayMemo','TableGroup','Position','<br><font\x20color=#c5ac94>','\x27,\x27','11zhVpJI','filter','ttbreserve','MaritalStatus','3033kaikGx','\x27,0)\x22>ขอลงทะเบียนใหม่</div>','html','retailproject-6f4fc.appspot.com','<div\x20class=\x22btn-t1\x22\x20onclick=\x22SaveMemo(\x27','getMinutes','111219aRKXws','forEach','EmpID_Admin','</font></div>','TableNo','1:653667385625:web:a5aed08500de80839f0588','#DisplayProfile','\x20ท่าน\x20|\x20','</div>',')<br>จำนวน\x20','where','#RegCustomer','People','<div\x20id=\x22DisplayMemo\x22\x20style=\x22color:#f68b1f;font-size:11px;margin-top:10px;\x22>','RefID','.jpg\x22\x20class=\x22TableGroup_c\x22\x20onerror=\x22javascript:imgError(this)\x22\x20style=\x22width:70%;\x20border-radius:\x2050%;\x22>','NameCompany','index.html','getFullYear','<div\x20class=\x22btn-t1\x22\x20onclick=\x22SaveRegister(\x27','970toPbbH','<div\x20class=\x22clr\x22\x20style=\x22height:30px;\x22></div>','4QKDNAi','log','#DisplayMember','orderBy','getHours','EmpName_Event','get','<div\x20style=\x22color:#f68b1f;font-size:\x2012px;font-weight:\x20600;\x22>','desc','ttbreservemap','<br>','</b>\x20<font\x20color=\x22#f68b1f\x22>(','update',')</font><br><font\x20color=\x22#ffff00\x22><b>','<div><img\x20src=\x22./customer/','getElementById','CustomerNo','3182196ITQevz'];_0x4ff6=function(){return _0x23b78b;};return _0x4ff6();}function SaveRegister(_0x311102,_0x5574d9,_0x55710e){var _0x1434ed=_0x5e79;NewDate();var _0x1abdbc='',_0x1027b8='';if(_0x55710e==0x1)_0x1027b8=_0x1434ed(0x193);else _0x55710e==0x2?_0x1027b8='Not\x20Registered':(_0x1027b8='',dateString='');dbttbreserve[_0x1434ed(0x1d4)](_0x311102)['update']({'RegisterType':_0x1027b8,'RegisterDate':dateString,'RegisterBy':sessionStorage['getItem'](_0x1434ed(0x1c3))}),dbttbreservemap['where'](_0x1434ed(0x1b6),'==',_0x311102)[_0x1434ed(0x1c4)]()[_0x1434ed(0x181)](_0x3cc3b0=>{var _0x853526=_0x1434ed;_0x3cc3b0[_0x853526(0x1a9)](_0x56b2d1=>{var _0x48c2d6=_0x853526;dbttbreservemap['doc'](_0x56b2d1['id'])[_0x48c2d6(0x1ca)]({'RefID':_0x311102,'CustomerType':_0x5574d9,'RegisterType':_0x1027b8}),console[_0x48c2d6(0x1bf)](_0x1027b8);});}),document[_0x1434ed(0x1cd)](_0x1434ed(0x1d1))[_0x1434ed(0x18c)][_0x1434ed(0x182)]=_0x1434ed(0x16c),LoadMember(),CheckPeople();}function UpdateMap(_0x198f09,_0x4f115c){var _0x227b0f=_0x5e79;dbttbreservemap[_0x227b0f(0x1d4)](_0x198f09)['update']({'RegisterType':_0x4f115c});}function NewDate(){var _0x49a1d3=_0x5e79,_0x5712a4=new Date(),_0x2bfdab=_0x5712a4[_0x49a1d3(0x188)]()+'',_0x58deb7=_0x5712a4['getMonth']()+0x1+'',_0x413c87=_0x5712a4[_0x49a1d3(0x1ba)]()+'',_0x545726=_0x5712a4[_0x49a1d3(0x1c2)]()+'',_0xdc2087=_0x5712a4[_0x49a1d3(0x1a7)]()+'',_0x49f85c=_0x5712a4['getSeconds']()+'',_0x34960d=_0x545726>=0xc?'PM':'AM';_0x2bfdab=checkZero(_0x2bfdab),_0x58deb7=checkZero(_0x58deb7),_0x413c87=checkZero(_0x413c87),_0x545726=checkZero(_0x545726),_0xdc2087=checkZero(_0xdc2087),_0x49f85c=checkZero(_0x49f85c),dateString=_0x2bfdab+'/'+_0x58deb7+'/'+_0x413c87+'\x20'+_0x545726+':'+_0xdc2087+':'+_0x49f85c+'\x20'+_0x34960d;}function checkZero(_0x4ba239){var _0xce4b20=_0x5e79;return _0x4ba239[_0xce4b20(0x18f)]==0x1&&(_0x4ba239='0'+_0x4ba239),_0x4ba239;}
