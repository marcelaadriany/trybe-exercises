/*
Exercicio de variáveis

- Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
- Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
- Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
- Utilize o console.log() para imprimir as constantes e variáveis que você criou.
- Altere o valor atribuído à variável birthYear para 2030. Faça um console.log (birthYear) novamente para ver o que acontece!
- Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
*/

const myName = "Marcela";
const birthCity = "Rio de Janeiro";
let birthYear = 1995;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);

birthCity = "São Paulo";
console.log(birthYear); // uma msg de erro aparece ("TypeError: Assignment to constant variable") porque eu tentei reatribuir um valor à uma variável constante, o que não é possível!