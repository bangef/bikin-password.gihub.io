/**
 * Membuat program generator password dengan masukan input panjang karakter password.
 */

//  mendeklarasikan variable
var alfabetNumb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var acak = '';

// membuat fungsi untuk mengacak password berdasarkan var alfabetNumb
var inpPanjPass = ()=> {
    var hasil = '';
    // mengambil value dari panjang password, tipe data dipaksa merubah ke integer
    var a = parseInt(document.getElementById('inpPanjPass').value);
    // perulangan untuk menambah tiap 1 karakter acak, ke var hasil yang nantinya akan di return
    for (var i = 0; i < a; i++) {
        acak = alfabetNumb[Math.floor(Math.random() * alfabetNumb.length)];
        hasil += acak;
    }
    return hasil;
}

// membuat fungsi onclick reset untuk menghapus nilai yang ada menjadi null
function reset() {
    return document.getElementById('inpPanjPass').value = null, document.getElementById('outPass').innerHTML = null;
}

// membuat fungsi onclick main untuk menampilkan hasil ke document object model
function main() {
    if (document.getElementById('outPass') !== null && document.getElementById('outPass') !== '') {
        return document.getElementById('outPass').innerHTML = inpPanjPass();
    } else {
        return document.getElementById('outPass').innerHTML = null;
    }
}
