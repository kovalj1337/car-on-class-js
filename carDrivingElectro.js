export default CarDrivingElectro
class CarDrivingElectro extends CarMake {
    startEngine() {
        if (this.fuel <= 0) {
            alert("Авто розряжене.");
            return false;
        } else {
            alert("Авто готове!");
            return true;
        }
    }
    drive() {
        let azsAfter = this.way + rand(500, 1500);
        let mcDonaldsAfter = this.way + rand(1000, 3000);

        let driving = setInterval(() => {
            console.log(`Ви проїхали ${this.way}м. Палива: ${this.fuel.toFixed(2)}.`);
            this.way += 50;
            this.fuel -= 0.1;
            this.mana -= 0.5;
            if (this.fuel <= 0) {
                alert("Заряд закінчився! Ви зупинились.");
                clearInterval(driving);
                return;
            }

            if (this.way >= azsAfter) {
                if (confirm("Ви біля АЗС. Заправитись за 100 валют?")) {
                    if (this.money >= 100) {
                        this.money -= 100;
                        this.fuel = 100;
                        alert("Ви заправились.");
                    } else {
                        alert("У вас недостатньо грошей для заправки!");
                    }
                }
                azsAfter = this.way + rand(500, 1500);
            }

            if (this.way >= mcDonaldsAfter) {
                if (confirm("Ви біля McDonalds. Поїсти за 250 валют?")) {
                    if (this.money >= 250) {
                        this.money -= 250;
                        this.hunger = 100;
                        alert("Ви поїли.");
                    } else {
                        alert("У вас недостатньо грошей для їжі!");
                    }
                }
                mcDonaldsAfter = this.way + rand(1000, 3000);
            }
        }, 1000);
    }
    stopDriving (param = true) {
        if(param == true){
            clearInterval(this.driving)
            this.driving = null;
            let stopie = true
            while(stopie == true){
                if(confirm(`Ви зупинились, їхати далі?Чи ви можете відпочити. Енергії : ${this.mana}`)){
                    myCar.drive
                    stopie = false
                    break
                }else{
                    if(this.mana >= 100){
                        this.mana = 100
                    }else{
                        this.mana += 10
                    }
                }
            }
        }
    }
}

const myCar = new CarDriving();
myCar.startEngine();
