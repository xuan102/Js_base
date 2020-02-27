let array = []
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

//1 Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 
console.log("les entrepreneurs qui sont nés dans les années 70:")
entrepreneurs.forEach((item, index) => {if (item.year < 1980 && item.year > 1969)
{
    console.log(item.first +" " + item.last + " "+"est ne en" +" "+ item.year)
}
});

//2 le prénom et le nom des entrepreneurs
console.log("le prénom et le nom des entrepreneurs")
entrepreneurs.forEach((item, index) => {
    output = item.first +" "+item.last;
    array.push(output);
});
console.log(array);

//3 Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.forEach((item, index) => {
    console.log(item.first + item.last + " "+"a"+" "+(2020-item.year)+"ans"); 
})

//4
console.log("Les entrepeneur ranger pars ordre alphabetique:");
console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));