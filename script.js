let minuteTime = document.querySelector(".minuteTime")
let hours = document.querySelector(".hour")
let minute = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let date = document.querySelector(".date")
setInterval(()=>{
  
let dates = new Date()
let hour = dates.getHours()
let minutes = dates.getMinutes()
let second = dates.getSeconds()
date.innerHTML = dates.toLocaleDateString()
console.log(second)
if(second >= 59){
    console.log(true)
    minuteTime.classList.add("fade")
    setTimeout(()=>{
        minuteTime.classList.remove("fade")
    },500)
}

minuteTime.innerHTML = `${hour}:${minutes}:${second}`;
hours.style.background=`conic-gradient(rgb(228,164,208) 0deg ${hour * 30}deg,black ${hour * 30}deg 360deg)`
minute.style.background=`conic-gradient(#4bcffa 0deg ${minutes * 6}deg,black ${minutes * 6}deg 360deg)`
seconds.style.background=`conic-gradient(#ef5777 0deg ${second * 6}deg,black ${second * 6}deg 360deg)`

},1000)
