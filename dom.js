var plusbtn=document.getElementsByClassName('btn-info');
var minusbtn=document.getElementsByClassName('btn-warning');
var apanier=document.getElementsByClassName('btn-secondary btn-sm');
var totalprice=document.getElementById('total');
var price=document.getElementsByClassName('unitprice');
var quantity=document.getElementsByClassName('count');
var notific=document.getElementById('notif');
var heart=document.querySelectorAll('.fa-heart');
console.log(heart);


for(let i=0;i<plusbtn.length;i++){
  plusbtn[i].addEventListener("click",function(){
   quantity[i].innerText=Number(quantity[i].innerText)+1; 
  	total();
    notification();

  } 
  )
  apanier[i].addEventListener("click",function(){
	quantity[i].innerText=Number(quantity[i].innerText)+1;
	total();
  notification();


   })
  minusbtn[i].addEventListener("click",function(){
    if(quantity[i].innerText>0)
    quantity[i].innerText=Number(quantity[i].innerText)-1;
	total();
  notification();
  })
  

}
function total (){
let sum=0;
for (let i=0;i<quantity.length;i++){
sum=Number(quantity[i].innerText)*Number(price[i].innerText)+sum;

}
totalprice.innerText=sum;	
}
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  total();
}

function notification() {
  let tot=0;
  for (let i=0;i<quantity.length;i++){
  tot=(Number(quantity[i].innerText))+tot; 
  }
  notific.innerText=tot;
}  

  for (let i=0;i<heart.length;i++){
  
  heart[i].addEventListener("click",function(){
    if(heart[i].style.color!="red"){
    heart[i].style.color="red";
  }
  else{
    heart[i].style.color="black";
  }
  })}
