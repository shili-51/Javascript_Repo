const clock = document.getElementById('clock')


// give this method an interval after which it needs to run that method continuosly
// setInterval(function, interval)
setInterval(()=>{
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()

},1000)