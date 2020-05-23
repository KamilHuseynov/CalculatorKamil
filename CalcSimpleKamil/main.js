    let num1;
    let num2;
    let result;
    function findResult() 
    {
    document.getElementById("resultShow").value=result;
    }
    
    document.getElementById("vurma").onclick = function () {
    num1 = Number(document.getElementById("eded1").value);
    num2 = Number(document.getElementById("eded2").value);
    result = num1 * num2;
}

    document.getElementById("bolme").onclick = function () {
    // document.getElementById("neticee").value = eded1 / eded2;
    num1 = Number(document.getElementById("eded1").value);
    num2 = Number(document.getElementById("eded2").value);
    result = num1 / num2;
}

    document.getElementById("toplama").onclick = function () {
    num1 = Number(document.getElementById("eded1").value);
    num2 = Number(document.getElementById("eded2").value);
    result = num1 + num2;
}

    document.getElementById("cixma").onclick = function () {
    num1 = Number(document.getElementById("eded1").value);
    num2 = Number(document.getElementById("eded2").value);
    result = num1 - num2;
}

