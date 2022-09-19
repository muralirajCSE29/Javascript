let a = document.getElementById("bt1");
let b = document.getElementById("bt2");
let c = document.getElementById("hed");

function on()
{
    document.getElementById("im1").src="offbulb.jpg";
    document.getElementById("im2").src="oncat.jpg";
    b.style.backgroundColor="green";
    a.style.backgroundColor="white";
    c.textContent="Switched Off";



}


function off()
{
    document.getElementById("im1").src="lighton.jpg";
    document.getElementById("im2").src="catoff.jpg";
    a.style.backgroundColor="red";
    b.style.backgroundColor="white";
    c.textContent="Switched On";
    

}