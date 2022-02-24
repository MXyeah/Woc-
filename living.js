
//1.创建对象
    var btn = document.querySelector("button");
    var txt = document.querySelector("input");

    btn.onclick = function(){
        var val = txt.value;
        const xhr = new XMLHttpRequest();
    //2.初始化 设置请求方法和url
    xhr.open('GET', 'http://wthrcdn.etouch.cn/WeatherApi?city='+ val);
    //3.发送
    xhr.send();

    //4.事件绑定 处理事件端返回的结果
    //on   当...时
    //readystate 是 xhr 对象中的属性，表示状态0，1，2，3，4
    //change 改变
    xhr.onreadystatechange = function () {
        //状态为4时 所有结果全部返还
        if (xhr.readyState === 4) {
            //判断响应状态码 200 404 403 500
            //2xx 成功
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.responseXML);
            }
        }

        }
}

