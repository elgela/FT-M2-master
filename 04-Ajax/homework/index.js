function getFriends(){
    let lista = document.getElementById('lista');
    lista.innerHTML = '';

    let img = document.getElementsByTagName('img');
    if(img.length > 0){
        img[0].remove();
    }

    fetch('http://localhost:5000/amigos')
    .then(data => data.json())
    .then(data => {
        data.forEach(amigo => {
            let li = document.createElement('li');
            li.textContent = amigo.name;
            document.getElementById('lista').appendChild(li);
        });
    })
}

function search(){
    let lista = document.getElementById('lista');
    let input = getElementById('input');
    for (let i = 0; i < input.length; i++) {
        if(input[i]){
            return lista.amigo.name;
        }
    }
}


document.getElementById('boton').addEventListener('click', getFriends);
document.getElementById('search').addEventListener('click', search);