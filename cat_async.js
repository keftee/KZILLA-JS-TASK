const url = "https://catfact.ninja/facty";
async function test() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Enjoy your cat fact!");
    }
}
test();