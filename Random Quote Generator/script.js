let general = ()=>{
    let quotes = {
        "junor":"what is junor",
        "senior": "what is senior"
    }

    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)]
    let quote = quotes[author]
    document.querySelector(".quote").innerHTML = quote;
    document.querySelector("h3").innerHTML = author;
}