var timer = document.getElementById("timer");

function time(){
    let sec ;
  if(sessionStorage.getItem("tim")== null){
     sec = 0;
  }else{
   sec = sessionStorage.getItem("tim")
   sec = parseInt(sec)//parse converte la var in numero
  }
    setInterval(function(){
       
        sec +=1;
        sessionStorage.setItem("tim", sec);
        timer.innerHTML = `Tempo: ${sec}`
    },1000)
}
time();