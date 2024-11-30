// Soal 1
function hitungLingkaran(){
    var radius = document.getElementById("radius").Value;
    if (radius > 0){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("lingkaranOutput").
        innerText = "Luas : " + luas + "cm², Keliling : " + keliling + "cm²";

    }else {
        document.getElementById("lingkaranOutput").
        innerText = "Masukkan jari-jari yang valid";
    }
}

// Soal 2
function hitungDuit(){
    var rupiah = document.getElementById("rupiah").Value;
    if(rupiah > 0){
        var kurs = 15.870;
        var dollar = rupiah / kurs;
        document.getElementById("hasilDuit").innerText = "Nilai : $ " + dollar.toFixed(2);
    
    }else{
        document.getElementById("hasilDuit").innerText = "Masukkan Nilai yangValid !!";
    }
}