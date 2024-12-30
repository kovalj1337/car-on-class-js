function rand(min, max, round = 100) {
    return Math.ceil((Math.random() * (max - min + 1) + min) / round) * round;
}
import MakeCar from "./makeCar.js";
import CarDrivingElectro from "./carDrivingElectro.js";
import CarDrivingFuel from "./carDrivingFuel.js";
import CarDrivingGas from "./carDrivingGas.js";

let car = new MakeCar

if(car.typeOfFuel == "Gas"){
    new CarDrivingGas()
    CarDrivingGas.startEngine()
}else if(MakeCar.typeOfFuel == "Gasoline"){
    new CarDrivingFuel()
    CarDrivingFuel.startEngine()
}else if(MakeCar.typeOfFuel == "Electro"){
    new CarDrivingElectro()
    CarDrivingElectro.startEngine()
}