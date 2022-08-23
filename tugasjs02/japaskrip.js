function plus(){
    a=document.kalkulator.n1.value
    b=document.kalkulator.n2.value
    document.kalkulator.h.value=parseInt(a) + parseInt(b)
}
function minus(){
    a=document.kalkulator.n1.value
    b=document.kalkulator.n2.value
    document.kalkulator.h.value=(a-b)
}
function divide(){
    a=document.kalkulator.n1.value
    b=document.kalkulator.n2.value
    document.kalkulator.h.value=(a/b)
}
function time(){
    a=document.kalkulator.n1.value
    b=document.kalkulator.n2.value
    document.kalkulator.h.value=(a*b)
}
