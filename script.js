const operasi = prompt('Masukan kode ( +, -, *, / )');
const angka1 = parseFloat(prompt('KETIK LAGI ANKGA KE DUA YANG INGIN DIPILIH'));
const angka2 = parseFloat(prompt('KETIK ANGKA YANG INGIN ANDA PILIH'));

let hasil;
if (operasi == '+') {
    hasil = angka1 + angka2
}
if (operasi == '-') {
    hasil = angka1 - angka2
}
if (operasi == '*') {
    hasil = angka1 * angka2
}
if (operasi == '/') {
    hasil = angka1 / angka2
}

document.writeln(`${angka1} ${operasi} ${angka2} = ${hasil}`);
