function Bai3() {
    const hoTen = document.getElementById("hoTen").value;
    const tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

        const thuNhapChiuThue = tongThuNhap - 4000000 - (soNguoiPhuThuoc * 1600000);
    let thuePhaiTra = 0;
    if(thuNhapChiuThue >= 10000000){
    if (thuNhapChiuThue <= 60000000) {
        thuePhaiTra = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120000000) {
        thuePhaiTra = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.10;
    } else if (thuNhapChiuThue <= 210000000) {
        thuePhaiTra = 60000000 * 0.05 + 60000000 * 0.10 + (thuNhapChiuThue - 120000000) * 0.15;
    } else if (thuNhapChiuThue <= 384000000) {
        thuePhaiTra = 60000000 * 0.05 + 60000000 * 0.10 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.20;
    } else if (thuNhapChiuThue <= 624000000) {
        thuePhaiTra = 60000000 * 0.05 + 60000000 * 0.10 + 90000000 * 0.15 + 174000000 * 0.20 + (thuNhapChiuThue - 384000000) * 0.25;
    } else if (thuNhapChiuThue <= 960000000) {
        thuePhaiTra = 60000000 * 0.05 + 60000000 * 0.10 + 90000000 * 0.15 + 174000000 * 0.20 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.30;
    } else {
        thuePhaiTra = 60000000 * 0.05 + 60000000 * 0.10 + 90000000 * 0.15 + 174000000 * 0.20 + 240000000 * 0.25 + 336000000 * 0.30 + (thuNhapChiuThue - 960000000) * 0.35;
    }
    const res_bai3 = document.getElementById("res_bai3");
    res_bai3.innerHTML = `<span>${hoTen}, thuế bạn phải trả là: ${thuePhaiTra} triệu</span>`;
    } else {
        const res_bai3 = document.getElementById("res_bai3");
    res_bai3.innerHTML = `<span> Yêu cầu nhập số tiền nhiều hơn 10 triệu</span>`;
    }
    }
