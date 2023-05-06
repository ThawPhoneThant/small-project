


const clock = ()=>{
    let date = new Date()
    let day = date.getDay()
    const days = ['Mon' , 'Tus' , 'Wed' ,'Thus' ,'Fri','Sat' ,'Sun']
    let hour = date.getHours()
    let minute = date.getMinutes()
    let ampm = hour <= 12? "AM" : "PM";
    hour = hour % 12
    hour = hour? hour : 12
    hour = hour < 10? "0" + hour : hour;
    minute = hour < 10? "0" + minute : minute;
    document.querySelector(".day").innerHTML = days[--day]
    document.querySelector(".hour").innerHTML = hour
    document.querySelector(".minute").innerHTML = minute
    document.querySelector(".day-night").innerHTML = ampm

    console.log(day)

}

window.addEventListener('load' , clock)
setTimeout(clock , 2000)

