//METODOS EN PROGRAMACION ORIENTADA A OBJETOS
//un método es una función asociada a un objeto o a una clase.

//METODOS DE OBJETOS:

/*
Son funciones definidas como propiedades de un objeto.

Permiten que los objetos realicen acciones específicas o calculen valores basados en sus propiedades.
*/

const car = {
    model: `Shelby Cobra`,
    color: `Blue`,
    creationYear: 1953,
    price: 1000,
    velocity: 200,
    showDatasCar: function () {
        console.log(`Model: ${this.model}, Color: ${this.color}, Creation Year: ${this.creationYear}, Price: ${this.price}, Velocity: ${this.velocity}, Country: ${this.country}`);
    }

};
car.country= `Argentina`;

car.showDatasCar();

const account = {
    number: 658435413,
    amount: 1000,
    deposit: function (quantity) {
        this.amount = this.amount + quantity;
    },
    withdraw: function (quantity) {
        this.amount = this.amount - quantity;
    }

}
account.deposit(100);
account.deposit(100);
account.deposit(100);
console.log(account.amount);

account.withdraw(1000);
console.log(account.amount)


//METODOS DE CLASES(ES6 Y POSTERIOR)
/*
Son funciones definidas dentro del cuerpo de una clase usando la sintaxis class.

Pueden ser métodos de instancia o métodos estáticos.
*/

