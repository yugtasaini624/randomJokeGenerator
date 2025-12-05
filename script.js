const btn = document.getElementById("btn");
const ques = document.getElementById("setUp");
const ans = document.getElementById("punchLine");
const container = document.querySelector(".container");
const div = document.getElementById("mainContent");

const url = "https://official-joke-api.appspot.com/random_joke";
let data;

async function getJoke(){
    try{
        console.log("loading");
        const response = await fetch(url);
        data = await response.json();
        console.log("done");
        div.style.display = 'block';
        ques.textContent = `${data.setup}`;
        ans.textContent = `${data.punchline}`;
        container.style.height = "400px";
    } 
    catch(err){
        console.log("error fetching:",err);
    }
}

btn.addEventListener("click", getJoke);