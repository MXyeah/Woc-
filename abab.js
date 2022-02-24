

function weather (data){
    var cityname = document.getElementById("city_name");
    var weatherdes0 = document.getElementById("des0");
    cityname.innerHTML = data.city;


    var weatherdes1 = document.getElementById("des1");
    var day1 =document.getElementById("day1");
    day1.innerHTML = data.weather[0].date;

    var weatherdes2 = document.getElementById("des2");
    var day2 =document.getElementById("day2");
    day2.innerHTML = data.weather[1].date;

    var day3 =document.getElementById("day3");
    day3.innerHTML = data.weather[2].date;
    var weatherdes3 = document.getElementById("des3");

    var day4 =document.getElementById("day4");
    day4.innerHTML = data.weather[3].date;
    var weatherdes4 = document.getElementById("des4");

    var day5 =document.getElementById("day5");
    day5.innerHTML = data.weather[4].date;
    var weatherdes5 = document.getElementById("des5");

    var day6 =document.getElementById("day6");
    day6.innerHTML = data.weather[5].date;
    var weatherdes6 = document.getElementById("des6");

    var day7 =document.getElementById("day7");
    day7.innerHTML = data.weather[6].date;
    var weatherdes7 = document.getElementById("des7");

    weatherdes0.innerHTML = data.weather[0].weather;
    weatherdes1.innerHTML = data.weather[0].weather;
    weatherdes2.innerHTML = data.weather[1].weather;
    weatherdes3.innerHTML = data.weather[2].weather;
    weatherdes4.innerHTML = data.weather[3].weather;
    weatherdes5.innerHTML = data.weather[4].weather;
    weatherdes6.innerHTML = data.weather[5].weather;
    weatherdes7.innerHTML = data.weather[6].weather;
    
    //温度
    var weathertemp = document.getElementById("temp");
    var w1 = document.getElementById("w1");
    var w2 = document.getElementById("w2");
    var w3 = document.getElementById("w3");
    var w4 = document.getElementById("w4");
    var w5 = document.getElementById("w5");
    var w6 = document.getElementById("w6");
    var w7 = document.getElementById("w7");

    weathertemp.innerHTML = data.weather[0].temp;
    w1.innerHTML = data.weather[0].temp;
    w2.innerHTML = data.weather[1].temp;
    w3.innerHTML = data.weather[2].temp;
    w4.innerHTML = data.weather[3].temp;
    w5.innerHTML = data.weather[4].temp;
    w6.innerHTML = data.weather[5].temp;
    w7.innerHTML = data.weather[6].temp;



    //图标判断 （下次一定
    /*function weatherIcon(t) {
        if(data.weather[0].icon1.search(yin)!=-1){
            return 
        }
    }*/
}

window.addEventListener('load', function(){
    //天气   
    var btn1= document.getElementById("weather-search");
    var city = document.getElementById("city");
    var btn2 = document.getElementById('fasong');


    btn1.onclick = function(){
        if(city.value){
            var script = document.createElement("script");
            script.src = `http://api.asilu.com/weather/?city=${city.value}&callback=weather`;
            document.body.appendChild(script);
        }else{
            alert("请输入城市名称")
        }
        btn2.onclick();
    }
 





        //获取button元素
        var btn2 = document.getElementById('fasong');
        const result = document.getElementById("result");
        var cityname = document.getElementById("city");
        //绑定事件
        btn2.onclick = function life () {

            //1.创建对象
            const xhr = new XMLHttpRequest();
            //2.初始化 设置请求方法和url
            xhr.open('GET', `http://wthrcdn.etouch.cn/WeatherApi?city=${city.value}`, true);
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
                        //处理结果 行 头 空行 体 
                        //1 响音行
                        console.log(xhr.status); //状态码
                        console.log(xhr.statusText);//响应状态字符串
                        console.log(xhr.getAllResponseHeaders());//所有响应头
                        console.log(xhr.response);//响应体
                        var resp = xhr.responseXML.querySelector('resp');


                        console.log(xhr.responseXML);
                        //设置result文本
                    
                        var fengxiang = resp.querySelector('fengxiang').innerHTML;
                        document.getElementById("fengxiang").innerHTML = fengxiang;

                        var ganmao = resp.querySelector("zhishus > zhishu:nth-child(5) > value").innerHTML;
                        document.getElementById("ganmao").innerHTML = ganmao;

                        var huwai = resp.querySelector("zhishus > zhishu:nth-child(7) > value").innerHTML;
                        document.getElementById("huwai").innerHTML = huwai;

                        var yu = resp.querySelector("zhishus > zhishu:nth-child(9) > value").innerHTML;
                        document.getElementById("yu").innerHTML = yu;

                        var ziwai = resp.querySelector("zhishus > zhishu:nth-child(2) > value").innerHTML;
                        document.getElementById("ziwai").innerHTML = ziwai;

                        var yifu = resp.querySelector("zhishus > zhishu:nth-child(1) > value").innerHTML;
                        document.getElementById("yifu").innerHTML = yifu;

                        var kongqi = resp.querySelector("zhishus > zhishu:nth-child(8) > value").innerHTML;
                        document.getElementById("kongqi").innerHTML = kongqi;

                        var shidu = resp.querySelector("shidu").innerHTML;
                        document.getElementById("shidu").innerHTML = shidu;
                    }
            }
        } 

    

//日期
    var date =new Date();
    var year =date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var arr =['周日','周一','周二','周三','周四','周五','周六'];
    var day = date.getDay();
    var citydates = document.getElementById('citydate');
    citydates.innerHTML = year + '-' + month + '-' + dates + ' ' + arr[day];
    


//tips
    var tips = new Array();
    var daily_tip = document.getElementById('daily_tip')
    var i = 0;
    tips[i++]='I want you to be the very best version of yourself that you can be.';
    tips[i++]='You decide what makes you happy.';
    tips[i++]='We are the composers of our own epic poem.';
    tips[i++]='There is always something more to learn.';
    tips[i++]='I hope you have the strength to start all over again.';
    tips[i++]='We must stay true to ourselves.';
    tips[i++]='Let us fly to the moon and play among the stars.';
    tips[i++]='Positive emotion trumps negative emotion every time.';
    tips[i++]='Good health is the most important thing.';
    tips[i++]='There is our only chance.';
    index = Math.floor(Math.random() * tips.length);
    daily_tip.innerText = (tips[index]);

    }
 
})
