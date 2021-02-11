/**
 * Membuat program generator password dengan masukan input panjang karakter password.
 */

//  mendeklarasikan variable
var acak = '';

// membuat fungsi untuk mengacak password berdasarkan var numb
var inpPanjPassNum = () => {
    var numb = '0123456789';
    var hasil = '';
    // mengambil value dari panjang password, tipe data dipaksa merubah ke integer
    var a = parseInt(document.getElementById('inpPanjPass').value);
    // perulangan untuk menambah tiap 1 karakter acak, ke var hasil yang nantinya akan di return
    for (var i = 0; i < a; i++) {
        acak = numb[Math.floor(Math.random() * numb.length)];
        hasil += acak;
    }
    return hasil;
}

// membuat fungsi untuk mengacak password berdasarkan var lower case
var inpPanjPassLowerCase = () => {
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var hasil = '';
    // mengambil value dari panjang password, tipe data dipaksa merubah ke integer
    var a = parseInt(document.getElementById('inpPanjPass').value);
    // perulangan untuk menambah tiap 1 karakter acak, ke var hasil yang nantinya akan di return
    for (var i = 0; i < a; i++) {
        acak = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        hasil += acak;
    }
    return hasil;
}

// membuat fungsi untuk mengacak password berdasarkan var upper case
var inpPanjPassUpperCase = () => {
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var hasil = '';
    // mengambil value dari panjang password, tipe data dipaksa merubah ke integer
    var a = parseInt(document.getElementById('inpPanjPass').value);
    // perulangan untuk menambah tiap 1 karakter acak, ke var hasil yang nantinya akan di return
    for (var i = 0; i < a; i++) {
        acak = upperCase[Math.floor(Math.random() * upperCase.length)];
        hasil += acak;
    }
    return hasil;
}

// membuat fungsi untuk mengacak password berdasarkan var upper&lower case
var inpPanjPassUpAndLowCase = () => {
    var upAndLowCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var hasil = '';
    // mengambil value dari panjang password, tipe data dipaksa merubah ke integer
    var a = parseInt(document.getElementById('inpPanjPass').value);
    // perulangan untuk menambah tiap 1 karakter acak, ke var hasil yang nantinya akan di return
    for (var i = 0; i < a; i++) {
        acak = upAndLowCase[Math.floor(Math.random() * upAndLowCase.length)];
        hasil += acak;
    }
    return hasil;
}

// membuat fungsi untuk mengacak password berdasarkan var upper&lower case
var inpPanjPassUpAndNumbCase = () => {
    var upAndNumbCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var hasil = '';
    // mengambil value dari panjang password, tipe data dipaksa merubah ke integer
    var a = parseInt(document.getElementById('inpPanjPass').value);
    // perulangan untuk menambah tiap 1 karakter acak, ke var hasil yang nantinya akan di return
    for (var i = 0; i < a; i++) {
        acak = upAndNumbCase[Math.floor(Math.random() * upAndNumbCase.length)];
        hasil += acak;
    }
    return hasil;
}

// membuat fungsi untuk mengacak password berdasarkan var upper&lower case
var inpPanjPassLowAndNumbCase = () => {
    var lowAndNumbCase = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var hasil = '';
    // mengambil value dari panjang password, tipe data dipaksa merubah ke integer
    var a = parseInt(document.getElementById('inpPanjPass').value);
    // perulangan untuk menambah tiap 1 karakter acak, ke var hasil yang nantinya akan di return
    for (var i = 0; i < a; i++) {
        acak = lowAndNumbCase[Math.floor(Math.random() * lowAndNumbCase.length)];
        hasil += acak;
    }
    return hasil;
}

// membuat fungsi untuk mengacak password berdasarkan var alfabetNumb
var inpPanjPassAll = () => {
    var alfabetNumb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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

var checkbox = () => {
    var checkbox = document.getElementsByName("pilihan");
    var pilihan = "";
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            pilihan += checkbox[i].value;
        }
    }

    return pilihan;
}

// membuat fungsi onclick reset untuk menghapus nilai yang ada menjadi null
function reset() {
    return document.getElementById('inpPanjPass').value = null, document.getElementById('outPass').innerHTML = null;
}

// membuat fungsi onclick main untuk menampilkan hasil ke document object model
function main() {
    if (document.getElementById('outPass') !== null && document.getElementById('outPass') !== '') {
        // return document.getElementById('outPass').innerHTML = inpPanjPassAll();
        if (checkbox() === 'angka') {
            return document.getElementById('outPass').innerHTML = inpPanjPassNum();
        } else if (checkbox() === 'lowcase'){
            return document.getElementById('outPass').innerHTML = inpPanjPassLowerCase();
        }  else if (checkbox() === 'uppercase'){
            return document.getElementById('outPass').innerHTML = inpPanjPassUpperCase();
        }   else if (checkbox() === 'angkalowcase'){
            return document.getElementById('outPass').innerHTML = inpPanjPassLowAndNumbCase();
        }    else if (checkbox() === 'angkauppercase'){
            return document.getElementById('outPass').innerHTML = inpPanjPassUpAndNumbCase();
        }    else if (checkbox() === 'lowcaseuppercase'){
            return document.getElementById('outPass').innerHTML = inpPanjPassUpAndLowCase();
        } else {
            return document.getElementById('outPass').innerHTML = inpPanjPassAll();
        }
    } else {
        return document.getElementById('outPass').innerHTML = null;
    }
}
