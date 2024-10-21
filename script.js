console.log(Hello_World); 

function appendResult(text) {
    const resultsDiv = document.getElementById('results');
    const h2 = document.createElement('h2');
    h2.textContent = text;
    resultsDiv.appendChild(h2);
}

appendResult(Hello_World); 
