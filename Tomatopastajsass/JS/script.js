let obj={
    title : "Tomato Pasta",
    img :"img2.jpg",
    title1 : "Ingredients",
    Rec    : ["Pasta","Oil","Onions","Salt","Tomato Pasta Sauce","Cheese"]

};

let receipeename = document.getElementById("h1d");
receipeename.textContent = obj.title;
receipeename.style.color="red";
receipeename.style.textAlign="center";
receipeename.style.fontFamily="Brush Script MT";
receipeename.style.fontSize="80px";

let rect = document.getElementById("h2id");
rect.textContent = obj.title1;
rect.style.color="white";
rect.style.textAlign="center";

rect.style.fontSize="50px";

let dis = obj.Rec;
let it = document.getElementById("items");
for (let ls of dis )
{
    let list = document.createElement("li");

    list.textContent=ls;
    
    list.style.fontSize="30px";
    list.style.color="white";
    it.appendChild(list);

    
    

}



