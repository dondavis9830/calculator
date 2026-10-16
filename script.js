
function number(num){
    console.log(num);
    document.getElementById('input').value += num
}
function clear1(){
    document.getElementById('input').value=""
}
function back(){
    input.value=input.value.slice(0,-1)
}
function calculate(){
    input.value=eval(input.value)
    console.log(input.value);
}
function modulus(){
    input.value=(input.value/100)
}
function zero(num){
    input.value+=`${num}${num}`
}
function neg(num){
    input.value=num
}
function root(){
    let value=input.value
    input.value=Math.sqrt(value)
}
function double(num){
    input.value+=num

}