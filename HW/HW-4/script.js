total=0;
bulka=prompt(`Please enter Hamburger or Cheeseburger?:`);

if(bulka) {
    bulka = bulka.replaceAll(" ", "");
    firstSymbol = bulka[0].toUpperCase();
    allSymbols = bulka.slice(1).toLowerCase();
    bulka = firstSymbol + allSymbols;
    switch (bulka) {
        case "Hamburger":
            total += 10;
            break
        case 'Cheeseburger':
            total += 15
            cheese = confirm(`Would you like double cheese?`)
            if (cheese == true) {
                total += 5;
            }
    }
}
console.log(bulka);
console.log(total);

potato=confirm(`Would you like potato?`);
    if (potato) {
        potato = prompt(`Choose potato size: small/middle/big:`);
        if (!potato) {
            potato = `small`;
            total += 10;
        }else if(potato) {
            potato = potato.replaceAll(" ", "");

            switch (potato) {
                case `middle`:
                    total += 15;
                    break
                case `big`:
                    total += 20;
                    break
                default:
                    potato = `small`;
                    total += 10;
            }
        }
    }
// Катя, такой вопрос:
// я вижу что дублирую код, но чёт не могу понять как мне сделать replaceAll(" ", ""); не дублируя его(((

console.log(potato);
console.log(total);

sauce=confirm(`Would you like sauce?`);
if (sauce) {
    sauce = prompt(`ketchup/mayonnaise:`);
    if (!sauce) {
        sauce = `ketchup`;
        total += 10;
    } else if (sauce) {
        sauce = sauce.replaceAll(" ", "");
        switch (sauce) {
            case `mayonnaise`:
                total += 10;
                break;
            default:
                sauce = `ketchup`;
                total += 10;
        }

    }
}
console.log(sauce);
console.log(total);

document.write(`<h2>Your order:</h2>

        <ul>
            ${bulka ? `<li> Bulka 🍔: ${bulka}</li>` : ``}
            ${potato? `<li>Potato 🍟:${potato}</li>`  : ``}
            ${sauce? `	<li>Sauce 🧂: ${sauce} </li>`:``}
        </ul>

	<p>Price: ${total} $ </p>
`);
