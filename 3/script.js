let header =document.createElement("header");
header.innerHTML="AIR QUALITY"; 
document.body.append(header);

let div1 = document.createElement("div");
div1.setAttribute("class","image1");
let image = document.createElement("img");
image.setAttribute("class","img1");
image.setAttribute("src","Air.webp");
image.setAttribute("alt","No image");

div1.append(image);
document.body.append(div1);

let div2 = document.createElement("div");
div2.setAttribute("class","is");
let Input1 = document.createElement("input");
Input1.setAttribute("type","search1");
Input1.setAttribute("id","input1");
Input1.setAttribute("placeholder","Latitude");

let Input2 = document.createElement("input");
Input2.setAttribute("type","search2");
Input2.setAttribute("id","input2");
Input2.setAttribute("placeholder","Longitude");

let button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","b1");
button.addEventListener("click",click1)
button.innerHTML="Search";


div2.append(Input1,Input2,button);
document.body.append(div2);
let div3 = document.createElement("div");
div3.setAttribute("class","content");


async function click1(){

    let Search1 = document.getElementById("input1").value;
    let Search2 = document.getElementById("input2").value;
    let api = `http://api.airvisual.com/v2/nearest_city?lat=${Search1}&lon=${Search2}&key=fb6155f6-cfad-47ae-ac2f-d131846bc54e`;
    let url =await fetch(api);
    let res =await url.json();
    console.log(res.data.current.pollution);
    div3.innerHTML=`
    <div class="card">
    <div class="card-header">
    Air Quality
    </div>
    <div class="card-body">
      <p class=p1>City: ${res.data.city}</p>
      <p class=p2>State: ${res.data.state}</p>
      <p class=p3>Country: ${res.data.country}</p>
      <p class=p4>Pollution</p>
      <p class=p4>aqius: ${res.data.current.pollution.aqius}</p>
      <p class=p4>mainus: ${res.data.current.pollution.mainus}</p>
      <p class=p4>aqicn: ${res.data.current.pollution.aqicn}</p>
      <p class=p4>maincn: ${res.data.current.pollution.maincn}</p> 
    </div>
  </div> `;  

}

document.body.append(div3);




