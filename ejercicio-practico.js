// Social Media Profile.


// 1- User information

const username= 'Emanuelb';
const fullName= 'Emanuel Benitez Baez';
const age = '20';
const isStudent = true;

// 2- User Address (objeto)

const userAddress = {
     street: ' Chimondegui 1024',
     zipCode: 1842,
     country: 'Argentina',
     estate: 'Buenos Aires',
     }

//3- Hobbies

const userHobbies = ['Studying', 'Coding', 'Reading','Gaming'];

//4- Personalized Text Information

const informationProfile =`Information:\n 
Username:${username}\n
Full Name:${fullName}\n
Age:${age}\n
Student:${isStudent}\n

Location:\n
Address: ${userAddress.street}\n
Code:${userAddress.zipCode}\n
Country:${userAddress.country}\n
Estate:${userAddress.estate}\n

Hobbies:\n
${userHobbies.join(', ')}
\n

`

console.log(informationProfile);

