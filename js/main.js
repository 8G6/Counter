let v=0
let int;
$=(a)=>document.querySelector(a)
change = ()         => {$('#screen').innerHTML=v.toString()}
add    = ()         => { v+=1; change()}
sub    = ()         => { v-=1; change()}
reset  = ()         => { v=0;  change();clearInterval(int)}