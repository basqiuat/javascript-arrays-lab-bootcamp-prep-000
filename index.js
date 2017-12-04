const app = "I don't do much."

var kittens = [
    'Milo',            
    'Otis', 
    'Garfield']


function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name){
    kittens.unshift(name)
    return kittens
}

function destructivelyRemoveLastKitten(name){
    kittens.pop(name)
    return kittens
}

function destructivelyRemoveFirstKitten(name){
    kittens.shift(name)
    return kittens
}

function appendKitten(name){
    var kittens 
    
    return [...kittens, name];
    
    
    //function outerFunction() {
    //var innerVariable = "I'm sort of a secret.";
 
    //return function innerScope() {
    //var inaccessible = "Nothing can touch me.";
 
    //return innerVariable;
  //}
//}
    
}

function prependKitten(name){
    kittens = [name, ...kittens]
    return kittens
}

function removeLastKitten(name){
    kittens.pop(name)
    return kittens
}

function removeFirstKitten(name){
    kittens.shift(name)
    return kittens
}
  




