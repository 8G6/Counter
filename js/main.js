let v=0
$=(a)=>document.querySelector(a)
change = () => {$('#screen').innerHTML=v.toString()}
add    = () => { v+=1; change()}
reset  = () => { v=0;  change()}