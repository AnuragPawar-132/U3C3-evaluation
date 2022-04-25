// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wal= JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText= wal;

let item= JSON.parse(localStorage.getItem("movie"));

let img= document.createElement("img");
img.src= item[1];

let name1= document.createElement("h2");
name1.innerText= item[0];

document.getElementById("movie").append(name1, img);

document.getElementById("confirm").addEventListener("click", checkoutFun);


function checkoutFun(){

    let tickets= document.getElementById("number_of_seats").value;

    let totalAmt= 100* Number(tickets);

    let wallet= JSON.parse(localStorage.getItem("amount"))

    let walletAmt= Number(wallet);

    if(walletAmt >= totalAmt)
    {
       alert("Booking successful!")   
    }
    else
    {
        alert("Insufficient Balance!")
    }

    localStorage.setItem("amount", JSON.stringify(0));

    let newAmt= walletAmt- totalAmt;

    if(newAmt>= 0)
    {
        localStorage.setItem("amount", JSON.stringify(newAmt));
    }
    else{
        localStorage.setItem("amount", JSON.stringify(walletAmt));
    }


    let wal= JSON.parse(localStorage.getItem("amount"));
    document.getElementById("wallet").innerText= wal;

    document.getElementById("user_name").value= null;
    document.getElementById("number_of_seats").value= null;
}

