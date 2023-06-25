function search1(){
    let value = document.getElementById("input1").value;
    let result = document.getElementById("result12").value;

    if (value == "male" || value == "Male"){
        result.innerHTML = `You are ${value}`;
    }
}