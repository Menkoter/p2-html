function changeTrafficLight(){
// Hier haal ik een HTML-element met de id "traffic-light" op
    let trafficlight= document.getElementById("traffic-light");
    if(trafficlight.src.match("trafficLightRed")) {
    trafficlight.src = "trafficLightGreen.png";
      
    }else if(trafficlight.src.match("trafficLightGreen") ){ 
        trafficlight.src = "trafficLightYellow.png"; 

    } else{
        trafficlight.src = "trafficLightRed.png"; 
    }
}

