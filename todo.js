const a=[];
let k='';
function f2(){
   for (let i = 0; i < a.length; i++) {
     
      
      k += a[i] + "<br>";
    }
    

}
function f1(){
   let v=document.querySelector('.todoval');
   let v2=v.value;
   a.push(v2);
   console.log(a);
   v.value='';
   f2();
   document.querySelector('.tododiv').innerHTML=k;
   
      
      
   }
   
