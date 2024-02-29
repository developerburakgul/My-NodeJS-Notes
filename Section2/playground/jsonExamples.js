const book = {
    title : "Burak's Title",
    author : "Burak Gül"
}
// ! Burada verimizi JSON String haline getirdik
const bookJSON = JSON.stringify(book) 
console.log("JSON String is : ",bookJSON);

// ! Şimdi bu JSON String halinde olan veriyden ana veriye erişmeye çalışalım
// console.log(bookJSON.title) // ! hata olacaktır

// * şimdi ise JSON String verisinden object elde edelim
// * yani parse etmeliyiz , ayrıştırmalıyız.
const parsedObject = JSON.parse(bookJSON)
console.log("Parsed JSON Object",parsedObject)
console.log(parsedObject.title)
console.log(parsedObject.author)
