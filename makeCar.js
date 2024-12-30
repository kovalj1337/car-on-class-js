export default MakeCar 
class MakeCar {
    static marks = ["Audi", "BMW", "Renault", "Chevrolet", "Mercedes"]
    static typeOfFuel = ["Gas","Electro","Gasoline"]
    constructor(){
        this.typeOfFuel = Car.typeOfFuel[Math.floor(Math.random() * Car.typeOfFuel.length) + 0];
        this.acum = Math.floor(Math.random() * 10) + 0;
        this.mark = Car.marks[Math.floor(Math.random() * Car.marks.length) + 0];
        this.way = 0;
    }
}