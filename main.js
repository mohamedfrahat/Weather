const d =new Date();
let currentday =d.getDate();
let today =d.getDay();
let currentmonth =d.getMonth();
const weekdays=['Sunday','Monday','Tuesday','Wensday','Thurthday','Firday','Satarday'];
document.getElementById('day').innerHTML=weekdays[today];
document.getElementById('day2').innerHTML=weekdays[today+1];
document.getElementById('day3').innerHTML=weekdays[today+2];
const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
document.getElementById('day-month').innerHTML=currentday;
document.getElementById('month').innerHTML=monthNames[currentmonth];
let cityinput =document.getElementById('input-div');
weatherdata('cairo');
cityinput.addEventListener('input',function (eventInfo) {

weatherdata(cityinput.value);
    
})

async function weatherdata (x){

    let data =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c988c2f5d4ba4a9d80194910240101&q=${x}&days=3`)
    if(data.ok){
    let resuelt= await data.json();
     
  
    let icon1='https:'+resuelt.current.condition.icon;
    let icon2='https:'+resuelt.forecast.forecastday[1].day.condition.icon;
    let icon3='https:'+resuelt.forecast.forecastday[2].day.condition.icon;
    let cityname = resuelt.location.name;
    let temperatrue = resuelt.current.temp_c;
    let temperatruestaues = resuelt.current.condition.text;
    let date2max =resuelt.forecast.forecastday[1].day.maxtemp_c;
    let date2min =resuelt.forecast.forecastday[1].day.mintemp_c;
    let date2type =resuelt.forecast.forecastday[1].day.condition.text;
    let date3max =resuelt.forecast.forecastday[2].day.maxtemp_c;
    let date3min =resuelt.forecast.forecastday[2].day.mintemp_c;
    let date3type =resuelt.forecast.forecastday[2].day.condition.text;
    document.getElementById('city').innerHTML=cityname;
    document.getElementById('temp1').innerHTML=temperatrue;
    document.getElementById('temp2').innerHTML=temperatruestaues;
    document.getElementById('date2max').innerHTML=date2max;
    document.getElementById('date2min').innerHTML=date2min;
    document.getElementById('date2type').innerHTML=date2type;
    document.getElementById('date3max').innerHTML=date3max;
    document.getElementById('date3min').innerHTML=date3min;
    document.getElementById('date3type').innerHTML=date3type;
    document.getElementById('icon1').src=icon1;
    document.getElementById('icon2').src=icon2;
    document.getElementById('icon3').src=icon3;
    

}
}
