
getQuote = () => {
const URL = "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en";
fetch(URL)
.then(function(resp) {
    return resp.json();
})
.then(function(data) {
    displayQuote(data);
});
}

displayQuote = data => {
    let quote = data.en;
    document.getElementById("quote").innerHTML =`"${quote}"`;
    document.getElementById("author").innerHTML = data.author;
    //const{author: author, en: quote} =data;
};
document.getElementById("btn").addEventListener("click", getQuote);