// Ver Lista

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

// Buscar

function searchFriend(){
    let id = document.getElementById('input').value;
    fetch(`http://localhost:5000/amigos/${id}`)
    .then(data => data.json())
    .then(data => {
        document.getElementById('amigo').textContent = data.name;
    })
    document.getElementById('input').value = '';
    if(document.getElementById('input').value > 5){
        alert('No existe');
    }
}

//Borrar

function deleteFriend(){
    let id = document.getElementById('input').value;
    fetch(`http://localhost:5000/amigos/${id}`)
    .then(data => data.json())
    .then(data => {
        document.getElementById('amigo')
    })
}

document.getElementById('boton').addEventListener('click', getFriends);
document.getElementById('search').addEventListener('click', searchFriend);
document.getElementById('delete').addEventListener('click', deleteFriend)

