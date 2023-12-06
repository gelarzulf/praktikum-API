const mahasiswa = '1102020';
const updetedData = {
    nama: 'Ronaldo',
    gender: 'L',
    prodi: 'TE',
    alamat: 'JL. Cibolang Kaler'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'applicaption/json'
    },
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));