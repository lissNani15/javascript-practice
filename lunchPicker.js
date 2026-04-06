let lunches=[];
function addLunchToEnd(arrayl, variable){
    arrayl.push(variable);
    console.log(`${variable} added to the end of the lunch menu.`);
    return arrayl;
}
function addLunchToStart(arry, variable){
    arry.unshift(variable);
    console.log(`${variable} added to the start of the lunch menu.`);
    return arry;
}
function removeLastLunch(arry){
    if (arry.length==0){
        console.log("No lunches to remove.");
    }else{
        let variable=arry.pop();
        console.log(`${variable} removed from the end of the lunch menu.`);
    }
    return arry;
}
function removeFirstLunch(arry){
    if(arry.length==0){
        console.log("No lunches to remove.");
    }else{
        let variable=arry.shift();
        console.log(`${variable} removed from the start of the lunch menu.`);
    }
    return arry;
}
function getRandomLunch(arry){
    if(arry.length==0){
        console.log("No lunches available.");
    }else{
        const rdm=Math.floor(Math.random()*(arry.length));
        const variable=arry[rdm];
        console.log(`Randomly selected lunch: ${variable}`);
    }
    return arry;
}
function showLunchMenu(arry){
    if(arry.length==0){
        console.log("The menu is empty.");
    }else{
        console.log(`Menu items: ${arry.join(", ")}`);
    }
    return arry;
}
addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");
addLunchToStart(lunches, "Sushi")
addLunchToStart(["Burger", "Sushi"], "Pizza")
removeLastLunch(["Stew", "Soup", "Toast"]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
removeFirstLunch(["Sushi", "Pizza", "Burger"]);
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);