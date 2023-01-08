let number = [200,300,40,50,20];



for( let i = 0; i< number.length; i++){
    console.log(number[i],  i);
}

number.forEach(function(num , index , arr){
    console.table(num,index,arr );
})
 

// ===========================================================

const namme = {fname:"ravi ",lname:" senjaliya",age:" 20year"};
let xy = "";

for(let x in namme ){
   xy += namme[x] ;
}
document.getElementById("arr").innerHTML = xy;
// -----------------------
for(let x in namme){
    console.log(namme[x] + "=== " + x );
}