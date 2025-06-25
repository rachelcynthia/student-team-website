const MEDIUM_URL = "https://medium.com/@studentteam/latest?format=json"
const xhttpr = new XMLHttpRequest();
console.log("Fetching Medium posts...");
function handleRequest() {
    axios.get(MEDIUM_URL).then(function (response) {
        console.log(response)
        // do whatever you want if console is [object object] then stringify the response
    })
}
handleRequest();