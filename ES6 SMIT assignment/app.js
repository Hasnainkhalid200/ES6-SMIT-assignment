// QUESTION #01

class Automobile {
    constructor(name, model, color, type){
        this.name = name;
        this.model=model;
        this.color=color;
        this.type=type;
    }
    drive() {
        return this.name + ' ' + this.model + ' is ready for drive..'
    }

    openDoor() {
        return 'Door is opened'
    }
}

const vehicle = new Automobile ("Carspeedo","2019" , "Blue", "auto")

class Car extends Automobile{
    constructor(name, model, color, type, door, maxSpeed){
        super(name, model, color, type)
        this.door = door;
        this.maxSpeed = maxSpeed;
        this.drive();
        this.openDoor();
    }
}

const Car1 = new Car("Ferari","2022" , "Blue", "manual","4 door" , "220 km/h")

class Truck extends Automobile{
    constructor(name, model, color, type, tyres, fuel){
        super(name, model, color, type)
        this.tyres= tyres;
        this.fuel = fuel;
        this.drive();
        this.openDoor();
    }
}

const Truck1 = new Truck("Bandito","2007" , "Orange", "manual","12 tyres" , "Diesel")

class Bus extends Automobile{
    constructor(name, model, color, type,busClass,fuel){
        super(name, model, color, type)
        this.busClass= busClass;
        this.fuel = fuel;
        this.drive();
        this.openDoor();
    }
}

const Bus1 = new Bus("daewoo","2022" , "Black", "manual","Business" , "Diesel")


console.log(vehicle)
console.log(vehicle.drive())
console.log(vehicle.openDoor())
console.log(Car1)
console.log(Car1.drive())
console.log(Truck1)
console.log(Truck1.openDoor())
console.log(Bus1)

// QUESTION #02
class PersonAccount {
    constructor(fname, lname,income=[TotalIncome,IncomeLeft],expenses=[TotalExpenses,WeeklyExpenses,MonthlyExpenses])
    
    {
        this.fname = fname;
        this.lname=lname;
        this.income = income;
        this.expenses=expenses;
    }

    addIncome(){
     return 'income after 1 year will be' + ' ' + (this.income[0] + 25000 );
    }

    addExpense(){
        return 'Monthly Expenses will be increased by ' + 26600 ;
       }

       AccountBalance() {
        return 'Total balance in accuont after every month will be ' + (this.income[0] - this.expenses[2])
       }


}

const Person1  = new PersonAccount("Hasnain" , "Khalid" , [250000, 1000], [170000,36795,200445])
console.log(Person1)
console.log(Person1.addIncome())
console.log(Person1.addExpense())
console.log(Person1.AccountBalance())


