

// API for project https://catfact.ninja/fact, https://dog.ceo/api/breeds/image/random

//function - DOM event btn
let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.addEventListener("click", async () => {
  p.style.opacity = "1";
  p.innerText = "Loading...";
  let finalFact = await ranFact();
  p.innerText = finalFact;
});

//function to call API
async function ranFact() {
  let url = "https://catfact.ninja/fact";

  try {
    let res = await axios.get(url);

    // let res = await fetch("https://catfact.ninja/fact");
    // let finalFact = await res.json();
    return res.data.fact;
  } catch (error) {
    return `Something went wrong!! ${error}`;
  }
}

