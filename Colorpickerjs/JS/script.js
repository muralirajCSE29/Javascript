let a = document.getElementById("div1");
let b = document.getElementById("spid");
let c = document.getElementById("p1");
let d = document.getElementById("bt1");
let e = document.getElementById("bt2");
let f = document.getElementById("bt3");
let g = document.getElementById("bt4");

function btn1()
{
    a.style.backgroundColor="RED";
    c.textContent="RED";
    d.style.color="red";
    d.style.backgroundColor="red";
    d.style.color="white";
    
}
function btn2()
{
    a.style.backgroundColor="yELLOW";
    c.textContent="YELLOW";
    e.style.color="yellow";
    e.style.backgroundColor="yellow"
    d.style.color="white";
    e.style.color="white";
    
}

function btn3()
{
    a.style.backgroundColor="GREEN";
    c.textContent="GREEN";
    f.style.color="green";
    f.style.backgroundColor="green";
    e.style.color="white";
    f.style.color="white";
}
function btn4()
{
    a.style.backgroundColor="gREY";
    c.textContent="GREY";
    g.style.color="grey";
    g.style.backgroundColor="grey";
    g.style.color="white";
}