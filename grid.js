
let col= document.querySelector(".left-col-cont");
let row=document.querySelector(".top-row-cont");
let calAdd=document.querySelector(".address-bar");

for(let i=0;i<100;i++)
{
    let element= document.createElement("div");
    element.setAttribute("class", "left-col");
    element.innerText=i+1;
    col.appendChild(element);
}

for(let i=0;i<26;i++)
{
    let element=document.createElement("div");
    element.setAttribute("class", "top-row");
    element.innerText=String.fromCharCode(i+65);
    row.appendChild(element);
}

  let grid=document.querySelector(".mid-grid-cont");
   for(let i=0;i<100;i++)
{
    let e1=document.createElement("div");
    e1.setAttribute("class", "row-cont");
    

    for(let j=0;j<26;j++)
    {
      let e2= document.createElement("div");
      e2.setAttribute("class", "col-cont");
      e2.setAttribute("contenteditable", "true");
      e2.setAttribute("spellCheck", "false");
      e2.setAttribute("rid", i+1);
      e2.setAttribute("cid", j)
      e1.appendChild(e2);
      //console.log(e2.contentEditable);
   addEventListeneraddress(e2, i,j);
    
  }
    grid.appendChild(e1);

}
 function addEventListeneraddress(e2, i, j)
 {
  e2.addEventListener("click", (e)=>
  {
     let rowID=i+1;
     let colID=String.fromCharCode(j+65);
     calAdd.value=`${colID}${rowID}`;
     
  })

 }
   
   document.querySelector(".col-cont").click();
   



 /*
   let k=document.querySelector(".box");
   k.setAttribute("contenteditable", "true");
   console.log(k.contentEditable);
   */