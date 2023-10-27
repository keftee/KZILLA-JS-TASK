const url = "https://catfact.ninja/fact";
let f = fetch(url);
f
    .then((response) => {
        return response.json();
    }).then((response => {
        console.log(response);
    }))
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Enjoy you cat fact!");
    })