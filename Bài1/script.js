function findPerfectSquares() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    let result = "";

    for (let i = a; i <= b; i++) {
        if (isPerfectSquare(i)) {
            result += i + " ";
        }
    }
    document.getElementById("result").textContent = "Các số chính phương trong khoảng từ " + a + " đến " + b + ": " + result;
}
function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}