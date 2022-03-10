const dataArr = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const checkbox = (a) => {
    let checkbox = document.getElementsByName("pilihan");
    let pilihan = "";

    if (a == true) {
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                pilihan += checkbox[i].value;
            }
        }
    } else {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }

    return pilihan;
};

const randPass = (a = checkbox(true), b = document.querySelector('#inpPanjPass')) => {
    let result = '';
    let arrWrapper = '';
    const validasi = a != null && a != undefined && b.value != null && b.value != undefined && isNaN(b.value) != true;
    if (a == 'angka' && validasi) arrWrapper = dataArr[0];
    else if (a == 'lowcase' && validasi) arrWrapper = dataArr[1];
    else if (a == 'uppercase' && validasi) arrWrapper = dataArr[2];
    else if (a == 'angkalowcase' && validasi) arrWrapper = dataArr[0] + dataArr[1];
    else if (a == 'angkauppercase' && validasi) arrWrapper = dataArr[0] + dataArr[2];
    else if (a == 'lowcaseuppercase' && validasi) arrWrapper = dataArr[1] + dataArr[2];
    else if (a == 'angkalowcaseuppercase' && validasi) arrWrapper = dataArr.join("");
    else arrWrapper = '';

    for (let i = 0; i < b.value; i++) {
        result += arrWrapper[Math.floor(Math.random() * arrWrapper.length)];
    }

    return result;
};


$(document).ready(() => {
    $('#acakPass').click(() => {
        $('#output').removeClass('hide').html(`<td colspan="2"><div class="parent">${randPass()}</div></td>`);
    });
    $('#reset').click(() => {
        checkbox(false);
        $('#inpPanjPass').val("");
        $('#output').addClass('hide')
    });
});