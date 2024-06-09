const recipelist= new Map();
recipelist.set("chicken",{recipe:"classic chicken club sandwitch",
ingredient:"Bacon,Bread,Chicken,tomato,lettuce,mayonnaise"})
recipelist.set("potato",{"recipe":"cheesy potato bake",
"ingredient":"potato,butter,onion,garlic,thyme"});
recipelist.set("mushroom",{"recipe":"Easy mushroom soup",
"ingredient":"vegetable stock,olive oil,onion,mushroom,garlic,milk"})

function searchItems(searchTerm) {
    const results = [];
    for (const [id, item] of inventory) {
        if (id.includes(searchTerm) || item.name.includes(searchTerm) || item.category.includes(searchTerm)) {
            results.push({ id, ...item });
        }
    }
    if (results.length > 0) {
        console.log('Search Results:', results);
    } else {
        console.log('No matching items found.');
    }
}

// function findrecipe(){
//     let core=document.getElementById("ingre").value ;
//     const result=[];
//     for(const[id,item] of recipelist){
//         if(id.includes(core)||)
//     }
// }