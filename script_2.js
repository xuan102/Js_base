
num1 = prompt('De quel nombre veux-tu calculer la factorielle ? ');
num2 = num1
while (num1 > 1) {
    num1--
    num2 =  num2 * num1
}
console.log(`Le resultat est : ${num2}`);
