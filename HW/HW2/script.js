
// Запрашиваем имя
userName=prompt(`Введите своё имя:`).trim();
firstSymbol=userName[0].toUpperCase();
allSymbols=userName.slice(1).toLowerCase();
userName=firstSymbol+allSymbols;

//Запрашиваем фамилию
userSecondname=prompt(`Введите свою фамилию:`).trim();
fSymbol=userSecondname[0].toUpperCase();
aSymbols=userSecondname.slice(1).toLowerCase();
userSecondname=fSymbol+aSymbols;

//Запрашиваем email
email=prompt(`Введите свой email:`).replaceAll(" ","").toLowerCase();
lastsAt=email.length-1;
symbolAt="@";
if (email.indexOf(symbolAt)=== -1)
{
    email=`not valid email <b>${email}</b> (symbol @ not exist)`;
}
if (email.indexOf(symbolAt) === 0)
{
    email=`not valid email <b>${email}</b> (symbol @ find in first place)`;
}
if (email.indexOf(symbolAt) === lastsAt)
{
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}

// if(email.includes("@") == false)
// {
//     email=`not valid email <b>${email}</b> (symbol @ not exist)`;
//     }
//
// if(email.charAt(0)===symbolAt)
// {
//     email=`not valid email <b>${email}</b> (symbol @ find in first place)`;
// }
// if (email.includes("@", lastsymbol) == true)
// {
//     email=`not valid email <b>${email}</b> (symbol @ find in last place)`;
// }

// document.write(email)

// Запрашиваем дату рождения:
userDayOfBirth=parseInt(prompt(`Введите дату своего рождения:`).replaceAll(" ",""));
let today = new Date();
let year = today.getFullYear();
userAge= year - userDayOfBirth;

//Вывод данных
document.write
(
    `<ul>
    <li>Full Name: <b>${userName} ${userSecondname}</b> </li>
    <li>Emal: ${email} </li>
    <li>Age: <b>${userAge}</b></li>
</ul>`
);