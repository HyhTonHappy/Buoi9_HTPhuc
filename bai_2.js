function dien_1(){
const dien = document.getElementById("dien").value;
return dien;
}

function check_in(d1){
    if(d1 == null || d1 == undefined || d1 == ""){
        return false;
    } 
    return true;
}


function Bai2(){
const dienKW =  dien_1() * 1;
let check = "";
let sum = 0;
if(check_in(dienKW) === false){
    check = `<span> Vui lòng nhập vào còn thiếu </span>`;
} else {
    if(dienKW <= 50){
        sum += (dienKW * 500);
    } else if(dienKW <= 100 && dienKW > 50){
        sum = (dienKW - 50) * 650 + 50 * 500;
    } else if(dienKW > 100 && dienKW <= 200){
        sum = (dienKW - 100) * 850 + 50 * 650 + 50 * 500;
    } else if(dienKW >200 && dienKW <= 350 ){
        sum = (dienKW - 200) * 1100 + 100 * 850 + 50 * 1150;
    } else {
        sum = (dienKW - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 1150;
    }
    check = `<span> Tiền điện của bạn là: ${sum} </span>`;
}
const res_bai2 = document.getElementById("res_bai2");
    res_bai2.innerHTML = check;
}