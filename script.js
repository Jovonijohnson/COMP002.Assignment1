console.log("Hello World!");

function appendResult(text) {
    const resultsDiv = document.getElementById('results');
    const h2 = document.createElement('h2');
    h2.textContent = text;
    resultsDiv.appendChild(h2);
}

appendResult("Hello World!"); // Display "Hello World!" on the HTML page