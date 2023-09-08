
//Key
const KEY = "AIzaSyBDpYJSqLhHnaBAigGWjUKXhyodcgAzd38";
// API URL
const API_URL = "https://www.googleapis.com/books/v1/volumes?country=TW";


/*
https://www.googleapis.com/books/v1/volumes?q=isbn:9786263051140&key=
isbn：放入書籍的isbn
key：金鑰
*/

function main() {
  var isbn = "9789865251949";
  var url = API_URL + "&q=isbn:"+isbn +"&key="+KEY;
  console.log(url);
  var response;
  try{
    response = UrlFetchApp.fetch(url);
    var results = JSON.parse(response);
    if(results.totalItems){
      var book = results.items[0];
      //console.log(book);
      var title = book.volumeInfo.title;
      var subtitle = book.volumeInfo.subtitle;
      console.log("title:"+title+"&subtitle:"+subtitle);

    }else{
      console.log("找不到這本書的相關資料");
    }
  }catch(e){
    console.log(e.message);
  }
}