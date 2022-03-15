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
    if (a === 'angka' && b.value !== '') arrWrapper = dataArr[0];
    else if (a === 'lowcase' && b.value !== '') arrWrapper = dataArr[1];
    else if (a === 'uppercase' && b.value !== '') arrWrapper = dataArr[2];
    else if (a === 'angkalowcase' && b.value !== '') arrWrapper = dataArr[0] + dataArr[1];
    else if (a === 'angkauppercase' && b.value !== '') arrWrapper = dataArr[0] + dataArr[2];
    else if (a === 'lowcaseuppercase' && b.value !== '') arrWrapper = dataArr[1] + dataArr[2];
    else if (a === 'angkalowcaseuppercase' && b.value !== '') arrWrapper = dataArr.join("");
    else arrWrapper = [''];

    for (let i = 0; i < b.value; i++) {
        result += arrWrapper[Math.floor(Math.random() * arrWrapper.length)];
    }
    // console.log(arrWrapper);
    // console.log(result);
    // console.log(b.value === '');
    return result;
};



$(document).ready(() => {
    $('#acakPass').click(() => {
        if (randPass() !== '') {
            $('#output').removeClass('hide').html(`<td colspan="2"><div class="parent">${randPass()}</div></td>`);
        } else {
            $('#output').addClass('hide')
        }
    });
    $('#reset').click(() => {
        checkbox(false);
        $('#inpPanjPass').val("");
        $('#output').addClass('hide')
    });
});