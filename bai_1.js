function check_in() {
  const diemChuan = document.getElementById("diemChuan").value;
  const vung = document.getElementById("category").value;
  const doiTuong = document.getElementById("category_1").value;
  const diem_1 = document.getElementById("diem_1").value;
  const diem_2 = document.getElementById("diem_2").value;
  const diem_3 = document.getElementById("diem_3").value;

  if (
    diemChuan === "" ||
    vung === "" ||
    doiTuong === "" ||
    diem_1 === "" ||
    diem_2 === "" ||
    diem_3 === "" ||
    diemChuan === undefined ||
    vung === undefined ||
    doiTuong === undefined ||
    diem_1 === undefined ||
    diem_2 === undefined ||
    diem_3 === undefined
  ) {
    return false;
  }
  return true;
}

  function diemChuan() {
    const diemChuan = document.getElementById("diemChuan").value;
    if (diemChuan < 0) {
      alert("Không được nhập số âm");
    }
    return diemChuan;
  }

  function vung() {
    const vung = document.getElementById("category").value;
    if (vung == "A") {
      return 2.0;
    } else if (vung == "B") {
      return 1.0;
    } else if (vung == "C") {
      return 0.5;
    } else {
      return 0;
    }
  }

  function doiTuong() {
    const doiTuong = document.getElementById("category_1").value;
    if (doiTuong == "1") {
      return 2.5;
    } else if (doiTuong == "2") {
      return 1.5;
    } else if (doiTuong == "3") {
      return 1.0;
    } else {
      return 0;
    }
  }

  function d1() {
    const diem_1 = document.getElementById("diem_1").value;
    return diem_1;
  }

  function d2() {
    const diem_2 = document.getElementById("diem_2").value;
    return diem_2;
  }

  function d3() {
    const diem_3 = document.getElementById("diem_3").value;
    return diem_3;
  }

  function checkin(d_1, d_2, d_3) {
    if (d_1 == 0 || d_2 == 0 || d_3 == 0) {
      return false;
    }
    return true;
  }

  function diemSo() {
    const diem_1 = d1() * 1;
    const diem_2 = d2() * 1;
    const diem_3 = d3() * 1;

    if (diem_1 < 0 || diem_2 < 0 || diem_3 < 0) {
      alert("Vui lòng nhập điểm lớn hơn 0");
    }

    let sum = diem_1 + diem_2 + diem_3;
    return sum;
  }

  function Bai1() {
    const diemChuan_1 = diemChuan() * 1;
    const vung_1 = vung() * 1;
    const doiTuong_1 = doiTuong();
    const diem_1 = d1() * 1;
    const diem_2 = d2() * 1;
    const diem_3 = d3() * 1;

    const sum = diemSo();
    let check = "";

    if (check_in() === false) {
      check = `<span> Vui lòng nhập vào còn thiếu </span>`;
    } else {
      if (checkin(diem_1, diem_2, diem_3) === false || sum + vung_1 + doiTuong_1 < diemChuan_1) {
        check = `<span> Bạn đã rớt </span>`;
      } else {
        check = `<span> Bạn đã đậu </span>`;
      }
    }

    const res_bai1 = document.getElementById("res_bai1");
    res_bai1.innerHTML = check;
  }