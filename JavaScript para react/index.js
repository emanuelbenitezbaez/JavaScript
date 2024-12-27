const user = {
    name: 'Diego',
    age: 23,
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    },
    active: true,
    showUser () {
        return `${this.name} tiene ${this.age} años y vive en ${this.address.city}/${this.address.state}`
    }
}




console.log(user)
console.log(user.showUser())

