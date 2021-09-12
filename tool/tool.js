function formatDate(datetime) {
    var date = new Date(datetime);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var year = date.getFullYear(),
        month = ("0" + (date.getMonth() + 1)).slice(-2),
        sdate = ("0" + date.getDate()).slice(-2),
        hour = ("0" + date.getHours()).slice(-2),
        minute = ("0" + date.getMinutes()).slice(-2),
        second = ("0" + date.getSeconds()).slice(-2);
    // 拼接
    var result = year + "-" + month + "-" + sdate + "T" + hour + ":" + minute + ":" + second;
    // 返回
    return result;
}

function ipcon() {
    var ipv = document.getElementById("inp1").value;
    if (ipv == '') {
        document.getElementById("error1").innerHTML = '请输入有效IP地址。';
        return false;
    } else {
        var ar = ipv.split(".");
        var decm = parseInt(ar[0]) * 256 * 256 * 256 + parseInt(ar[1]) * 256 * 256 + parseInt(ar[2]) * 256 + parseInt(ar[3]);
        var hex = parseInt(decm).toString(16).toUpperCase();
        var binary = parseInt(decm).toString(2).toUpperCase();
        //decm = parseInt(decm)+1;
        document.getElementById("res").innerHTML = '十六进制 = ' + hex + '<br> 十进制 = ' + decm + "<br> 二进制 = " + binary;
    }
}

function hugo_generation() {

    var slug = '';
    var date = '';
    var d = new Date();

    var date = formatDate(d) + "+08:00";

    var slug = parseInt(d.getTime() / 1000);

    var content = '---<br>title: ""<br>date: '
        + date + '<br>tags: []<br>categories: []<br>slug: '
        + slug + '<br>---';
    document.getElementById("hugo_res").innerHTML = content;
}