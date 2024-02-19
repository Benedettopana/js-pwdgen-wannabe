const myName = prompt('Scrivi qui il tuo nome:');

const myLastname = prompt('Scrivi qui il tuo cognome:');

const myFavColor = prompt('Scrivi qui il tuo colore preferito:');

const passwordGen = myName + myLastname + myFavColor + '24';

console.log(myName, myLastname, myFavColor);
console.log(passwordGen);

document.getElementById('result').innerHTML =
`
<p>
La tua password(insicurissima) personalizzata é stata generata! <br><br>
<strong>${passwordGen}</strong>
</p>
`