let recipelist=[
    {
        core:"chicken",
        recipe:"classic chicken club sandwitch",
        ingredient:"Bacon,Bread,Chicken,tomato,lettuce,mayonnaise"
    },
    {
        "core":"potato",
        "recipe":"cheesy potato bake",
        "ingredient":"potato,butter,onion,garlic,thyme"
    },
    {
        "core":"mushroom",
        "recipe":"Easy mushroom soup",
        "ingredient":"vegetable stock,olive oil,onion,mushroom,garlic,milk"
    }

];

function findrecipe(){
    let core=document.getElementById("ingre").value ;

    let res1=recipelist[0];
    let res2=recipelist[1];
    let res3=recipelist[2];

    if(res1.core==core)
    {
        document.getElementById("pid1").innerHTML="Recipe :"+res1.recipe+"<br>Ingredients :"+res1.ingredient;
    }
    else if(res2.core==core)
    {
        document.getElementById("pid1").innerHTML="Recipe :"+res2.recipe+"</br>Ingredient :"+res2.ingredient;
    }else if(res3.core==core)
    {
        document.getElementById("pid1").innerHTML="Recipe :"+res3.recipe+"</br>Ingredient :"+res3.ingredient;
    }
    else(
        doc
    )
    //document.getElementById("pid1").innerHTML=res1.core;
    
    

}

let fav=[];
let i=1;

let map=new Map();
function addfav(){
    let core=document.getElementById("ingre").value ;
    //document.getElementById("pid2").innerHTML=core;
    fav.push[core];
    //document.getElementById("pid3").innerHTML=""+fav;
    let res1=recipelist[0];
    let res2=recipelist[1];
    let res3=recipelist[2];

    if(res1.core==core){
        
        localStorage.setItem("Recipe",res1.recipe);
        localStorage.setItem("Ingredient",res1.ingredient);
        let x=localStorage.getItem("Recipe")
        document.getElementById("pid2").innerHTML="recipe 1 saved";
    } 
    else if(res2.core==core){
        localStorage.setItem("Recipe",res2.recipe);
        localStorage.setItem("Ingredient",res2.ingredient);
        document.getElementById("pid2").innerHTML=" recipe 2 saved";
    } else if(res3.core==core)
    {
        localStorage.setItem("Recipe",res3.recipe);
        localStorage.setItem("Ingredient",res3.ingredient);
        document.getElementById("pid2").innerHTML="recipe 3 saved";
    } 
    //document.getElementsByName("pid3").innerHTML=fav;
i++
}
const arr=new Map();

function viewfavfun(){
    let a=localStorage.getItem("Recipe");
    let b=localStorage.getItem("Ingredient");

    document.getElementById('pid3').innerHTML=a+""+b;
    arr.set(a,b);


//     arr.forEach((value,key)=>
// {
//     document.getElementById("pid3").innerHTML=key+""+value;  
// });
}

function clearfav(){
    localStorage.setItem("Recipe","");
    localStorage.setItem("Ingredient","");
    let a=localStorage.getItem("Recipe");
    let b=localStorage.getItem("Ingredient");
    document.getElementById('pid4').innerHTML=a+""+b;
}

function addrec(){


    let a=document.getElementById("addcore").value;
    let b=document.getElementById("addname").value;
    let c=document.getElementById("addres").value;
    let x={
        core:a,
        recipe:b,
        ingredient:c
    }
    recipelist.push(x);
    document.getElementById("pid5").innerHTML="recipe added";

}


function funcc(){
 
    let a=recipelist.length;
    let corearray=[];
    let y;
    for(j=0;j<a;j++){
        let x=recipelist[j];
        
        y=x.recipe;
        corearray.push(y);
    }
    document.getElementById("4").innerHTML=corearray;

}