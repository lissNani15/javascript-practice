function confirmEnding(arg1, arg2){
    if((arg1.slice(arg1.length-(arg2.length)))==(arg2)){
        return true;
    }else{
        return false;
    }
}
confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "sage");
confirmEnding("Open sesame", "game");
confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain");
confirmEnding("Abstraction", "action");