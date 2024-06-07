async function fetchJoke() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );
  const joke = await response.json();
  hideMeme();
  document.getElementById("jokeSetup").innerHTML = joke.setup;
  document.getElementById("jokePunchline").innerHTML = joke.punchline;
  document.getElementById("jokePunchline").style.display = "none";
  document.getElementById("eyeIcon").style.display = "inline-block";
}

function showPunchline() {
  document.getElementById("jokePunchline").style.display = "block";
  document.getElementById("eyeIcon").style.display = "none";
}

async function fetchChuckNorrisJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await response.json();
  hideMeme();
  document.getElementById("jokeSetup").innerHTML = joke.value;
  document.getElementById("jokePunchline").style.display = "none";
  document.getElementById("eyeIcon").style.display = "none";
}

async function fetchMeme() {
  try {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();
    hideJokes();
    const imageUrl = data.url;
    downloadImage(imageUrl);
    document.getElementById("memeImage").src = imageUrl; // Set the URL for display
    document.getElementById("memeImage").style.display = "block";
  } catch (error) {
    console.error("Failed to fetch meme:", error);
  }
}

async function downloadImage(url) {
  const imageResponse = await fetch(url);
  const imageBlob = await imageResponse.blob();
  const imageUrl = URL.createObjectURL(imageBlob);

  const memeLink = document.getElementById("memeLink");
  memeLink.href = imageUrl;
  memeLink.download = "meme"; // You can also use dynamic names based on the meme content
}

function hideMeme() {
  document.getElementById("memeImage").style.display = "none";
}

function hideJokes() {
  document.getElementById("jokeSetup").innerHTML = "";
  document.getElementById("jokePunchline").innerHTML = "";
  document.getElementById("jokePunchline").style.display = "none";
  document.getElementById("eyeIcon").style.display = "none";
}
