const fetchJoke = async () => {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const jokeData = await response.json();
        document.querySelector("#setup").innerHTML = jokeData.setup;
        document.querySelector("#punchline").innerHTML = jokeData.punchline;

    } catch (error) {
        console.log(error);
    }
};


window.addEventListener("load", () => {
    document.querySelector('#refreshJokeBtn').addEventListener('click', fetchJoke);
    fetchJoke();
});

