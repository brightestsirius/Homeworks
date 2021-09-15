let result=0;

switch (+prompt('Сколько будет 2+2?')){
    case 4:result=result+10;break
    default:
        result;
}
console.log(result);
switch (confirm('Солнце встает на востоке?')){
    case true:result=result+10;break
        result;
}
console.log(result);
switch (+prompt ('Сколько будет 5 / 0?')){
    case 0 :result=result+10;break
    default:
        result;
}
console.log(result);
switch (prompt('Какого цвета небо?').toLowerCase()){
    case 'голубого':
    case 'синего' :
    case `голубое`:
    case `синего`:
    case `blue`:
        result=result+10;break
        result;
}
console.log(result);
switch (+prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.')){
    case 42 :result=result+10;break

        result;
}
// result=result;

if (result<=10){
    alert(`ой-ёй пора прочитать пару книг!
        твой результат ${result} баллов!`);
}
else if (result<=30){
    alert(`Сегодня просто не твой день))
         твой результат ${result} баллов!`);
}
else if (result<=40){
    alert(`Почти получилось, ты молодец!
         твой результат ${result} баллов!`);
}
else if (result==50){
    alert(`Ты супер детка)
         твой результат ${result} баллов!`);
}
//Мой второй ваиант

let score=0;
if (+prompt('Сколько будет 2+2?')===4) {
    score += 10;
}
console.log(score);
if (confirm('Солнце встает на востоке?')===true)
    {
        score+=10;
    }else  score=score;
console.log(score);
if (+prompt ('Сколько будет 5 / 0?')===0)
{
    score+=10;
}else score=score;
console.log(score);
let questuion = prompt('Какого цвета небо?').toLowerCase();
console.log(questuion);

if (questuion ==="голубого"|| questuion==="blue" || questuion=== "синего" )
{
    score+=10;

}else score=score;
console.log(score);

if (+prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.')=== 42)
{
    score+=10;
}else score;
alert(`Ваш результат ${score} баллов!`);

