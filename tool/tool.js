function ipcon(){
    var ipv = document.getElementById("inp1").value;
    if(ipv == ''){
        document.getElementById("error1").innerHTML = '请输入有效IP地址。';
        return false;
    }else{
        var ar = ipv.split(".");
        var decm = parseInt(ar[0])*256*256*256+parseInt(ar[1])*256*256+parseInt(ar[2])*256+parseInt(ar[3]);
        var hex = parseInt(decm).toString(16).toUpperCase();
        var binary = parseInt(decm).toString(2).toUpperCase();
        //decm = parseInt(decm)+1;
        document.getElementById("res").innerHTML = '十六进制 = '+hex+'<br> 十进制 = '+decm+"<br> 二进制 = "+binary;
    }
}