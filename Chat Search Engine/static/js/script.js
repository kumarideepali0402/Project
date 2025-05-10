async function search() {
    const query = document.querySelector("#queryInput").value.trim()
    const resultDiv = document.querySelector("#result")

    if(!query) {
        resultDiv.innerHTML="<div class ='text-danger'>Please enter a query</div>";
        return;

    }

    const response = await fetch('/search', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({query})
    })

    const data = await response.json();

    if(data.results.length == 0){
        resultDiv.innerHTML="<div class ='text-danger'>No result found.</div>"
    }
    else{
        resultDiv.innerHTML = data.results.map(msg => `<div class="mb-2">${msg} </div>`).join("")
    }


}