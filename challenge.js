function funcity(){
    var nammie=prompt('what is your name nigga?')
    var bed =document.createElement('h2');
    var con=document.getElementById('dom');
    con.appendChild(bed);
    var textin=document.createTextNode('you are welcome'+ " " + nammie);
    bed.appendChild(textin)
}
function myfunction(){
    var store=document.createElement('p');
    var main=document.getElementById('aim');
    main.appendChild(store);
    var text=document.createTextNode('Times like this give God all due praise');
    store.appendChild(text);
    document.getElementById('read').style.visibility='hidden';
}
function ready(){
    var element=document.createElement('li');
    var sauce=document.querySelector('ul');
    var input=document.getElementById('input');
           if(input.value.length>0){
        var items =document.createTextNode(input.value);
        sauce.appendChild(element);
        element.appendChild(items);
        input.value=''
    }
}

function changepic(){
    document.getElementById('pic').src='eagle.jpg';
}
function outchange(){
    document.getElementById('pic').src='car.jpg'
}