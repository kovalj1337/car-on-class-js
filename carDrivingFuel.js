export default CarDrivingFuel 
class CarDrivingFuel extends CarMake {
    startEngine() {
        if (this.fuel <= 0) {
            alert("Ви не завелись! Бензину нема.");
            return false;
        } else if (this.acum <= 0) {
            alert("Ви не завелись! Акум розряжений.");
            return false;
        } else {
            alert("Ви змогли завестись!");
            this.drive();
            return true;
        }
    }

    drive() {
        let azsAfter = this.way + rand(500, 1500);
        let mcDonaldsAfter = this.way + rand(1000, 3000);

        let driving = setInterval(() => {
            console.log(`Ви проїхали ${this.way}м. Палива: ${this.fuel.toFixed(2)}.`);
            this.way += 50;
            this.fuel -= 0.007;
            this.mana -= 0.5;
            if (this.fuel <= 0) {
                alert("Паливо закінчилось! Ви зупинились.");
                clearInterval(driving);
                return;
            }

            if (this.way >= azsAfter) {
                if (confirm("Ви біля АЗС. Заправитись за 300 валют?")) {
                    if (this.money >= 300) {
                        this.money -= 300;
                        this.fuel = 40;
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
                        this.acum -= 0.25
                    }else{
                        this.mana += 10
                        this.acum -= 0.25
                    }
                }
            }
        }
    }
}