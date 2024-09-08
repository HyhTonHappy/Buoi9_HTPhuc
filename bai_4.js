function toggleSoKetNoi(){
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    if(loaiKhachHang == "nhaDan"){
        soKetNoi.disabled = true;
        soKetNoi.value = ""; 
    } else {
        soKetNoi.disabled = false; 
      
    }
}


function Bai4() {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let soKetNoi = document.getElementById("soKetNoi").value * 1;
    const soKenh = document.getElementById("soKenh").value * 1;
    let phiXuLyHoaDon, phiCoBan, phiKenhCaoCap, tongTien = 0;

    if (loaiKhachHang === "nhaDan") {
        phiXuLyHoaDon = 4.5;
        phiCoBan = 20.5;
        phiKenhCaoCap = 7.5 * soKenh;
        tongTien = phiXuLyHoaDon + phiCoBan + phiKenhCaoCap;
    } else if (loaiKhachHang === "doanhNghiep") {
        phiXuLyHoaDon = 15;
        if (soKetNoi > 10) {
            phiCoBan = 75 + (soKetNoi - 10) * 5;
        } else {
            phiCoBan = 75;
        }
        phiKenhCaoCap = 50 * soKenh;
        tongTien = phiXuLyHoaDon + phiCoBan + phiKenhCaoCap;
    }

    const res_bai4 = document.getElementById("res_bai4");
    res_bai4.innerHTML = `<span>Tổng tiền cáp là: ${tongTien} USD</span>`;
}
