let numerouno = prompt(parseInt("inserisci il numero1 da 1 a 100"));
let numerodue = prompt(parseInt("inserisci il numero2 da 1 a 100"));
// Utente inserisce due numeri

let nrCasuale=Math.floor(Math.random() * 100) + 1 ;
console.log(nrCasuale);
// Viene generato e mostrato numero casuale

let differenza1 = nrCasuale - numerouno;
let differenza2=  nrCasuale - numerodue;
// Calcolo differenza per verificare in caso il più vicino

if ( differenza1 < 0){
    differenza1= (differenza1 * (-1))
}
if (differenza2 < 0){
    differenza2= (differenza2 * (-1))
}
// Trasformo eventualmente la differenza negativa in positiva

if (numerouno == nrCasuale){
    console.log("numero uno ha vinto");
}
// se numero1 è uguale al numero generato casualmente quell'utente vince

else if (numerodue == nrCasuale){
    console.log("numero due ha vinto");
}
// se numero2 è uguale al numero generato casualmente quell'utente vince

else if(( numerouno == numerodue) || ( differenza1 == differenza2)) {
    console.log(`numeri uguali, partita pari`)
}
// Se i numeri sono uguali O la differenza è uguale allora la partita sarà pari

else if (differenza1 > differenza2){
    console.log(`l'utente due ha selezionato il numero ${numerodue} ed ha vinto perchè pi vicino. l'utente uno ha selezionato il numero ${numerouno}`);
}
// Se il numero due è più vicino allora l'utente due vince 

else 
console.log(`l'utente uno ha selezionato il numero ${numerouno} ed ha vinto perchè pi vicino. l'utente due ha selezionato il numero ${numerodue}`);
// altrimenti è l'utente 1 a vincere 
