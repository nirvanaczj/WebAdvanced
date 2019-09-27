
setTimeout( function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend', '<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">5</div>')},1000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">4</div>'},2000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">3</div>'},3000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">2</div>'},4000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">1</div>'},5000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "moving"></div>'},5500);
setTimeout( function(){document.body.style.backgroundColor = "#B7EFFF";},5500);
setTimeout( function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend','<div class = "sliding"></div>')},5500);
setTimeout( function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend','<div class = "slidingUp"></div>')},5500);
setTimeout(function(){setInterval(function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend',`<div class = "sliding" style="top:20%"></div>`)},1000)},5500)
setTimeout(function(){setInterval(function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend',`<div class = "sliding" style="top:60%"></div>`)},1000)},5500)
