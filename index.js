//Part 1-1
console.log("Index.js linked successfully");

let showPunchlineButtonHTML = document.querySelector("#showPunchlineButton");
showPunchlineButtonHTML.addEventListener("click", function () {
    //Part 1-2
    let punchlineHTML = document.getElementById("jokePunchline");
    punchlineHTML.style.visibility = "visible";
    punchlineHTML.innerHTML = myvariable;

});

let myvarable;
let refreshJokeButtonHTML = document.querySelector("#refreshJokeButton");
refreshJokeButtonHTML.addEventListener("click", function () {
    //Part 1-3
    console.log("Refreshing joke...");
    let fetchPromise = fetch("https://official-joke-api.appspot.com/random_joke");
    fetchPromise.then ( (response) => {
        const jsonPromise = response.json();
        jsonPromise.then( (data) => {
            console.log(data);
            let jokeSetupHTML = document.getElementById("jokeSetup");
            jokeSetupHTML.innerHTML = data.setup
            let jokePunchlineHTML = document.getElementById("jokePunchline");
            jokePunchlineHTML.style.visibility = "hidden";
            myvariable = data.punchline;
        })

    })


});

