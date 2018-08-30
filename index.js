var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var Pump = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output


setInterval(pumpIT, 5000); 

function pumpIT() { //function to start blinking

  if (Pump.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    Pump.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    Pump.writeSync(0); //set pin state to 0 (turn LED off)
  }

  setTimeout( stopPump , 1000 )

}

function stopPump() {
  Pump.writeSync(0); // Turn LED off
  // Pump.unexport(); // Unexport GPIO to free resources
}
