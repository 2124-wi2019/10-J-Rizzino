/*
Julie Rizzino
rizzino_a10.js
INFO 2124
Thoendel
2/18/20 */

document.getElementById('action').addEventListener('click', function(){
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT
    document = "index.html";
    //Declare variable document as the index.html 
    const img = document.getElementById("photo");
    //Declare constant img to equal the ID "photo" using the getElementById feature
    if(img.src != "02.jpg"){
        img.src = "02.jpg";}
    else{
        img.src = "01.jpg";}
    //If than else statement to switch from the "01.jpg" photo to the "02.jpg" photo

    //AND THIS COMMENT
});