
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let bg_image = document.getElementById('source');
let rocket_image = document.getElementById('rocket_img');


// let button_start_pause = document.getElementById('play_pause_button');

 //when button image clicked, send an event to buttons();

// button_start_pause.addEventListener('click', buttons);

$.getJSON('https://api.spacexdata.com/v2/rockets', function(data){
    extractData(data);
});

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


// Draw Background
function updateBackground(){
    let bg = new DrawBGImg(canvas.width, canvas.height, bg_image);
    return bg.styleBackground();
    
}
//handle drawImage + onClick requests.
// function buttons(e){
//     let button = new Buttons(button_start_pause, e);
//     console.log(button);
//     return button.styleButtons();
    
// }

// Get JSON rocket data from url
function extractData(data){
    let rocket_data = new JsonRocketData(data);
    console.log(rocket_data);
    // updateRocket(rocket_data.extractData());
    
}



// Loop to update the Vector position of the rocket

function loop(){
    let rocket = new Rocket(rocket_image);
    clearCanvas();
    return rocket.animate();
}

//This will call first.
function update(){
    updateBackground();
    //extractData();
    loop();
    // checkStatus();
   
}
update();


