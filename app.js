const buscarGatinhos = (e) => {
    e.preventDefault()

    const xhr = new XMLHttpRequest()

    xhr.open( 'GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        console.log("Aqui1");
        if(xhr.readyState === 4){
            console.log("Aqui2");
            if (xhr.status === 200) {
                console.log("Aqui3");
                const cats = JSON.parse(xhr.responseText)
                console.log(cats);
                cats.forEach(cat => {
                    console.log("Aqui4");
                    const img = document.createElement('img')
                    img.src = cat.url
                    document.querySelector('#gatinhos').appendChild(img)
                });
            } else {
                alert('Erro na requisição')
            }
        }
    }
    xhr.send()
}

const btnMostrar = document.querySelector('#mostrar-gatinhos')
btnMostrar.addEventListener("click", buscarGatinhos)