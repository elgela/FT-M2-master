// GET de Lista

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

document.getElementById('boton').addEventListener('click', getFriends);

// GET de Buscar

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

document.getElementById('search').addEventListener('click', searchFriend);

// GET de Borrar

function deleteFriends(){
    let id = document.getElementById('inputDelete').value;
    fetch(`http://localhost:5000/amigos/${id}`, { //tiene como 2º argumento el DELETE
        method: 'DELETE'
    })
    .then(() => {
        alert('El amigo fue borrado')
        getFriends()
    })
    document.getElementById('inputDelete').value = '';
}

document.getElementById('delete').addEventListener('click', deleteFriends);

// GET de Lista

// document.getElementById('boton').addEventListener('click', function getFriends(){
//     let lista = document.getElementById('lista');
//     lista.innerHTML = '';

//     let img = document.getElementsByTagName('img');
//     if(img.length > 0){
//         img[0].remove();
//     }
    
//     fetch('http://localhost:5000/amigos')
//     .then(data => data.json())
//     .then(data => {
//         data.forEach(amigo => {
//             let li = document.createElement('li');
//             li.textContent = amigo.name + ' X';
//             document.getElementById('lista').appendChild(li);
//         });
//     })
// });

// // GET de Buscar

// document.getElementById('search').addEventListener('click', function searchFriend(){
//     let id = document.getElementById('input').value;
//     fetch(`http://localhost:5000/amigos/${id}`) //cuando no tiene 2º argumento es un GET
//     .then(data => data.json())
//     .then(data => {
//         document.getElementById('amigo').textContent = data.name;
//     })
//     document.getElementById('input').value = '';
// });

// // GET de Borrar

// document.getElementById('inputDelete').addEventListener('click', function deleteFriend(){
//     let id = document.getElementById('delete').value;
//     fetch(`http://localhost:5000/amigos/${id}`, { //tiene como 2º argumento el DELETE
//         method: 'DELETE'
//     })
//     .then(() => {
//         alert('El amigo ha sido borrado');
//         getFriends();
//     })
//     document.getElementById('input').value = '';

// });
