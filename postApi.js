const { response } = require("express");

const postData = {
    nim: '123459',
    nama: 'John Doe',
    gender: 'L',
    prodi: 'TI',
    alamat: '123 Main Street'
};

fetch('http://localhost:3000/mahasiswa', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));