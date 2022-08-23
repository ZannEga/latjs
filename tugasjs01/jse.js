
a = window.prompt("Masukkan Nilai : ")

if (a <= 100 && a >= 93) {
    document.write("A")
}
else if (a <= 92 && a >= 83) {
    document.write("B")
}
else if (a <= 82 && a >= 75) {
    document.write("C")
}
else if (a <= 74 && a >= 50) {
    document.write("D")
}
else if (a <= 49 && a >= 0) {
    document.write("E")
}
else {
    document.write("Nilai salah")
}
