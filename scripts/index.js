// Store the wallet amount to your local storage with key "amount"

document.getElementById("add_to_wallet").addEventListener("click", addtowallet);

let wallet1= JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText= wallet1;



function addtowallet(){

        let wallet= JSON.parse(localStorage.getItem("amount"));
        // console.log(wallet)


        let amount= document.getElementById("amount").value;

        let amt= Number(wallet)+ Number(amount)

        // console.log(amount);

        localStorage.setItem("amount", JSON.stringify(amt));

        alert("Money Added to the Wallet");

        let newWallet= JSON.parse(localStorage.getItem("amount"));
        document.getElementById("wallet").innerText= newWallet;

        document.getElementById("amount").value= null;

}


document.getElementById("book_movies").addEventListener("click", goToMovie);

function goToMovie(){

    window.location.href= "movies.html"
}