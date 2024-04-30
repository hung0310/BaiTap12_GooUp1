var ten = document.getElementById('ten');
var chuyennganh = document.getElementById('chuyennganh');
var rdNam = document.getElementById('rd_nam');
var rdNu = document.getElementById('rd_nu');
var ns = document.getElementById('dtpk');

class SinhVien {
    constructor(t, gioitinh, ns, cn) {
        this.t = t;
        this.gioitinh = gioitinh;
        this.ns = ns;
        this.cn = cn;
    }

    printInfo() {
        console.log("Tên: " + this.t);
        console.log("Giới tính: " + this.gioitinh);
        console.log("Ngày sinh: " + this.ns);
        console.log("Chuyên ngành: " + this.cn);
    }
}

function ShowInfo() {
    selectedIndex = chuyennganh.selectedIndex;
    var textSelect = chuyennganh.options[selectedIndex].textContent;
    var gt;
    if(rdNam.checked) {
        gt = rdNam.nextElementSibling.textContent;
    }
    if(rdNu.checked) {
        gt = rdNu.nextElementSibling.textContent;
    }
    const sv = new SinhVien(ten.value, gt, ns.value, textSelect);
    sv.printInfo();
}