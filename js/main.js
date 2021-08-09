let v=0
$=(a)=>document.querySelector(a)
change = () => {$('#screen').value=v}
add    = () => {v+=1;change()}
sub    = () => {v-=1;change()}
reset  = () => {v=0;change()}