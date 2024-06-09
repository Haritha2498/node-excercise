
let x=1
let total=0;
var item=new Map();
let cart=[]

let prices={
    "Apple":"10",
    "Banana":"5",
    "Chocolate":"10",
    "Dates":"5",
    "Eggs":"5"
}
function addc(){
    // let y=localStorage.getItem("newmap");
    let product=document.getElementById("prod").value;

    let quantity=document.getElementById("quan").value;

    quantity=Number.parseInt(quantity);
    
    item.set(product,quantity);

    
    let k=prices[product]*quantity;
document.getElementById("pid1").innerHTML=("PRODUCT  &nbsp &nbsp &nbspQUANTITY &nbsp &nbsp &nbsp RATE &nbsp &nbsp &nbsp PRICE");
document.getElementById(x).innerHTML= product+" &nbsp&nbsp&nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp"+item.get(product)+"&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp&nbsp &nbsp"+prices[product]+" &nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+k;
x=x+1;
 
total=total+k;
    // c={name:product,item:quantity,rate:prices[product],price:k}
    // cart.push(c)
    // document.getElementById("pid7").innerHTML=cart;
}

function del(){

    let delp=document.getElementById("proddel").value;
    // item.forEach((x,y)=>{
    //     document.getElementById("pi8").innerHTML=item[y];
    // }

//)
document.getElementById("pid8").innerHTML=item.get("Apple")

}

function viewc(){

    document.getElementById("pid6").innerHTML="</br></br>TOTAL PRICE:"+total;

}

