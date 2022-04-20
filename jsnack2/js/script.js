const gestName= ["Lorenzo" , "Olga" , "Carlo" , "Valerio" ,"Ciao" , "Hello" , "Nome"];
const gestLastname= ["Rossi" , "Bianchi" , "Verdi" , "Mondo" , "Gialli" , "World" , "Cognome"];
const list = [];
for (let i = 0; i < 3; i++) {
    list.push(gestName[Math.floor(Math.random()*gestName.length)] + " " + gestLastname[Math.floor(Math.random()*gestLastname.length)]); 
}
console.log(list);