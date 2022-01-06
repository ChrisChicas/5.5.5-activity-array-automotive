//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");
const { Vehicle } = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class mSedan extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleServiceChecker = false;
    }

    loadPassenger(num){
        if(num <= this.maximumPassengers){
            this.passenger = num;
            return this.passenger;
        } else {
            console.log("There is no available room.")
        }
    }

    start(){
        if(this.fuel > 0){
            console.log("Engine has started!")
            return this.started = true;
        } else {
            console.log("Not enough fuel to start engine!")
            return this.started = false;
        }
    }

    scheduleService(mileage){
        this.mileage = mileage
        if(this.mileage > 30000){
            this.scheduleServiceChecker = true;
            console.log("Ready for service.")
            return this.scheduleServiceChecker;
        } else {
            this.scheduleServiceChecker = false;
            console.log("Not ready for service.")
            return this.scheduleServiceChecker;
        }
    }

}

class Truck extends mSedan {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 150;
        this.fuel = 100;
        this.scheduleServiceChecker = false;
    }

    fuelCheck(fuel) {
        this.fuel = fuel;
        if(this.fuel < 20) {
            console.log("Fuel is getting low.");
            return this.fuel;
        } else if(this.fuel === 0) {
            console.log("Out of fuel.");
            return this.fuel;
        } else {
            console.log("Fuel levels acceptible.");
            return this.fuel;
        }
    }

}