async function fetchData() {
    try {
        const respone = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await respone.json();
        console.log("The API got fetched.", data);
    } catch (err) {
        console.log("Error:", err)
    }
}

fetchData();