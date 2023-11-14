const buscarGatinhos = (e) => {
    e.preventDefault()

    // document.write("Tome 10 Gatinhos")
    const xhr = new XMLHttpRequest()

    xhr.open( 'GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if (xhr.status === 200) {
                // let id, altura, largura
                const cats = JSON.parse(xhr.responseText)
                console.log(cats);
                cats.forEach(cat => {
                    const gato = document.createElement('gato')
                    const img = document.createElement('img')
                    let idImg = document.createElement('idImg')
                    
                    img.src = cat.url
                    img.id = cat.id
                    idImg.innerHTML = cat.id
                    
                    gato.appendChild(img)
                    gato.appendChild(idImg)

                    console.log(gato);
                    
                    document.querySelector('#gatinhos').appendChild(gato)
                });
            } else {
                alert('Erro na requisição')
            }
        }
    }
    xhr.send()
}

const getMarcas = () => {
    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')

    tarefas
        .then(resposta => resposta.json())
        .then(marcas => {
            const ul = document.createElement('ul')
            console.log(marcas);
            marcas.forEach(marca => {
                const li = document.createElement('li')
                const logo = document.createElement('img')
                logo.src = marca.image?.optimized
                li.appendChild(logo)
                ul.appendChild(li)
            })
            document.querySelector('#marc').appendChild(ul)
        })
        .catch(erro => {console.log(erro)})
}
const btnMostrar = document.querySelector('#mostrar-gatinhos')
btnMostrar.addEventListener("click", buscarGatinhos)

const btnMarcas = document.querySelector('#marcas')
btnMarcas.addEventListener("click", getMarcas)