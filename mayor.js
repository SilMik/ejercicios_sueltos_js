

function mayor() {

    var num1 = parseInt(document.getElementById("text1").value);
    var num2 = parseInt(document.getElementById("text2").value);
    
    if(num1 > num2) {
        alert(`${num1} es mayor que  ${num2}`);
    }else {
        alert(`${num2} es mayor que  ${num1}`);
    }
}