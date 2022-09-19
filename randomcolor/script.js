let a = document.getElementById("h1id");
a.textContent="Welcome Back!";



let b = document.getElementById("btn1");
b.textContent="Click Here to change the Color";
b.style.borderRadius="20px";




let c = document.getElementById("div");
c.style.backgroundColor="lightskyblue";
c.style.marginLeft="100px";
c.style.marginTop="30px";


let color = ["Blue","Black","Yellow","Red","Grey","Purple","Green"];

function changecolor()
{
    let random=Math.ceil(Math.random()*color.length);
    c.style.backgroundColor=color[random];
    c.textContent=color[random];
    c.style.textAlign="center";
    c.style.fontSize="30px";
    b.style.backgroundColor=color[random];
    a.style.Color=[random];
    a.style.backgroundColor=color[random];
    

}


