function display(abc){
    document.getElementById("result").value += abc
    return abc
}
function equal(){
    let x = document.getElementById("result").value
    let y = eval(x);
    
    document.getElementById("result").value = y
    return y
}
function boxclear(){
    document.getElementById("result").value = ''
}