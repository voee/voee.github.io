var aa = [
    'http://nddx.orfnc.store/group.php/index/share/id/51/t/c603b77ac4b51e19e03da9bb978e1509/time/1685520005.html',
    'http://nddx.orfnc.store/group.php/index/share/id/42/t/9d773882909e8f88cefd9738c2dc146c/time/1685520046.html', 
    'http://nddx.orfnc.store/group.php/index/share/id/48/t/79a49f74e555db671de6ad2bd9d84a4a/time/1685520068.html', 
    'http://nddx.orfnc.store/group.php/index/share/id/49/t/82df4cfe0069e62118d1d684b35dbd7f/time/1685520100.html', 
    'http://nddx.orfnc.store/group.php/index/share/id/50/t/6973c74a534c739ef5108b50e2fbe297/time/1685520120.html',
    'http://nddx.orfnc.store/group.php/index/share/id/51/t/c603b77ac4b51e19e03da9bb978e1509/time/1685520005.html',
    'http://nddx.orfnc.store/group.php/index/share/id/42/t/9d773882909e8f88cefd9738c2dc146c/time/1685520046.html',
    'http://nddx.orfnc.store/group.php/index/share/id/48/t/79a49f74e555db671de6ad2bd9d84a4a/time/1685520068.html',
    'http://nddx.orfnc.store/group.php/index/share/id/49/t/82df4cfe0069e62118d1d684b35dbd7f/time/1685520100.html',
    'http://nddx.orfnc.store/group.php/index/share/id/50/t/6973c74a534c739ef5108b50e2fbe297/time/1685520120.html',
    ];
var sj = aa[Math.floor(Math.random()*aa.length)];

function setCookie(name,value){
  var Days = 350;
  var exp = new Date();
  exp.setTime(exp.getTime() + 10*400);
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
