var animalage =prompt('animal age');

var greeting;
if (animalage>3 && animalage<2){
    greeting ='cat';

}
else if(animalage>7){
    greeting = 'dog';

}
else if (animalage<10){
    greeting='fish';

}
document.write('<h3'+greeting+'</h3');