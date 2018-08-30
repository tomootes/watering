var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var humiditySensor = new Gpio(14, 'in');
var Pump = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

Pump.writeSync(1); //set pin state to 1 (turn LED on)

Pump.stop = function() {
    console.log('stoppen met pompen');
    Pump.writeSync(1);
}

setInterval(readSensor, 60000);

Pump.pump = () => {

    console.log('pomp gaat pompen');
    Pump.writeSync(0); //set pin state to 1 (turn LED on)
    setTimeout(Pump.stop, 3000)

    // if (Pump.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    //     Pump.writeSync(1); //set pin state to 1 (turn LED on)
    // } else {
    //     Pump.writeSync(0); //set pin state to 0 (turn LED off)
    // }
    
};

// Pump.unexport(); // Unexport GPIO to free resources


function readSensor() { //function to start blinking

    // Pump.pump()

    humiditySensor.read(function (err, humidity) {
        
        console.log(humidity);

        console.log(Pump);

        let state = Pump.readSync();
        console.log(state);
        

        // Bij humidity == 1 is hij te droog
        if (humidity == 1) {
            console.log('too dry');
            Pump.pump()
        } else {
            console.log('just fine');
            Pump.stop()
        }

    });

}

process.on('SIGINT', function() {

    console.log("Caught interrupt signal");
    Pump.unexport(); // Unexport GPIO to free resources
    process.exit();

});

// function pumpIT(pump) { //function to start blinking

//     if (Pump.readSync() === 0) { //check the pin state, if the state is 0 (or off)
//         Pump.writeSync(1); //set pin state to 1 (turn LED on)
//     } else {
//         Pump.writeSync(0); //set pin state to 0 (turn LED off)
//     }

//     setTimeout(stopPump, 1000)

// }
