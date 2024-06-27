//THIS O COONTEXTO DE EJECUCION O EL DUEÑO DE LA FUNCION.

const house = {

    dogName: 'Doggy',
    dogGreetings : function () {
        console.log(`Hi, I'm ${this.dogName}`);
    }
}
house.dogGreetings();