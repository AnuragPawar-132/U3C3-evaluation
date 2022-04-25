// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//https://www.omdbapi.com/?s=thor&apikey=c0a46dc1

let pk;

function debounceFun(fun, delay){

    if(pk){
        clearTimeout(pk);
    };

    pk= setTimeout(function(){

        fun();
    }, delay);

}

async function mainFun(){

    let data1= await searchMovie();

    if(data1===undefined){
        return false;
    }

    console.log(data1)
    appendMyMovie(data1)
}


async function searchMovie(){

    try{
    const que= document.getElementById("search").value;

    let url=  `https://www.omdbapi.com/?s=${que}&apikey=c0a46dc1`

    let res1= await fetch(url);

    let moviedata= await res1.json();
    let moviedata1= moviedata.Search;

    // console.log(moviedata1)
    return moviedata1;

    

    }
    catch(err){
        console.log("error", err)
    }


}

function appendMyMovie(data){
    document.getElementById("movies").innerHTML= null;

    data.forEach(function(el){

        

        let box= document.createElement("div");

        let poster= document.createElement("img");
        poster.src= el.Poster;

        let title= document.createElement("p");
        title.innerText= el.Title;

        let button= document.createElement("button");
        button.innerText= "Book Now";
        button.class= "book_now";

        button.addEventListener("click", function(){

            selectMovie(el);
        })

        box.append(poster, title, button);
        document.getElementById("movies").append(box);

    })

}

function selectMovie(el){

    let arr= [];
    let name= el.Title;
    let image= el.Poster;

    arr.push(name);
    arr.push(image);

    localStorage.setItem("movie", JSON.stringify(arr));

    window.location.href= "checkout.html";

}