
do {
    operation = prompt(`Choose one operation: (+ - / *):`);
}while ( operation!==`+` && operation!==`-` && operation !==`/` && operation !==`*`)
console.log(operation);

do {
    number=+prompt(`Enter count of operands, more than 1 and less then 7:`);
}  while (isNaN(number)|| number<=0 || number>7)
console.log(number);

item=1;
array = [];
for (x=0; x<number;x++){

   value= +prompt(`Enter operand # ${item}`);
   while (!value||isNaN(value)){
       value= +prompt(`Enter numer # ${item}`);
   }
    console.log(value);
    item++;
    array.push(value);
    console.log(array);
}
sum=array[0];
console.log(sum);
for (i=1;i<array.length;i++){
    if (operation==`+`){
        sum+=array[i];
    }else if(operation==`-`){
        sum-=array[i];
    }else if(operation==`*`) {
        sum *= array[i];
    }else if(operation==`/`) {
        sum /= array[i];
    }
    console.log(sum);
}
 alert(`Result=${sum}`);