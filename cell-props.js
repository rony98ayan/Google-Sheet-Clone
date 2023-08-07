//storage
let sheetDB=[];

for(let i=0;i<100;i++)
{
    let sheetRow=[];
    for(let j=0;j<26;j++)
    {
       
       let cellprops= {
          bold: false,
          italics: false,
          underline: false,
          alignment: "left" ,
          fontfamily: "monospace",
          fontsize: "14",
          colortext:"#ffffff",

       }
       sheetRow.push(cellprops);
     
     
    }
    sheetDB.push(sheetRow);
}

//selectors for cell properties

 let bold= document.querySelector(".fifth-one");
 let italics= document.querySelector(".sixth-one");
 let underline= document.querySelector(".seventh-one");
 let leftalignment= document.querySelector(".eighth-alignment");
 let middlealignment= document.querySelector(".ninth-alignment");
 let rightalignment= document.querySelector(".tenth-alignment");
 let colortext= document.querySelector(".color-props");
 let bgcolor= document.querySelector(".bg-color-props");
let fontsize= document.querySelector(".drop-down2");
 let fontfamily= document.querySelector(".drop-down1");
//attach listener property
//Application of two-way-binding


   bold.addEventListener('click', (e)=>
   {
      let address=calAdd.value;
      
      let [cell,cellprops]= activecell(address);
      
       cellprops.bold= !cellprops.bold;
       
       
    cell.style.fontWeight= cellprops.bold? "bold":"normal";
    
    bold.style.backgroundColor=cellprops.bold? "#286151" : "#ecf0f1";
       
       

   })

   italics.addEventListener('click', (e)=>
   {
    let address= calAdd.value;
       let [cell, cellprops]= activecell(address);
      cellprops.italics= !cellprops.italics;
      cell.style.fontStyle= cellprops.italics? 'italic': "normal";
      
      italics.style.backgroundColor=cellprops.italics? "#286151" : "#ecf0f1";

   })

   underline.addEventListener('click', (e)=>
   {
    let address= calAdd.value;
       let [cell, cellprops]= activecell(address);
      cellprops.underline= !cellprops.underline;
      cell.style.textDecoration= cellprops.underline? 'underline': "none";
      
      underline.style.backgroundColor=cellprops.underline? "#286151" : "#ecf0f1";

   })

    fontsize.addEventListener('change' , (e)=>
    {
         let address= calAdd.value;
         let [cell, cellprops] = activecell(address);
         cellprops.fontsize= fontsize.value;
         
         cell.style.fontSize= cellprops.fontsize+"px";
         
         fontsize.value= cellprops.fontsize;
         
    })

     fontfamily.addEventListener('change', (e)=>
     {
         let address= calAdd.value;
         let [cell, cellprops]= activecell(address);
         cellprops.fontfamily=fontfamily.value;// data change
         cell.style.fontFamily=cellprops.fontfamily; //UI change
         fontfamily.value=cellprops.fontfamily; //UI change
         

    })

    colortext.addEventListener('change', (e)=>
     {
         let address= calAdd.value;
         let [cell, cellprops]= activecell(address);
         cellprops.colortext=colortext.value;// data change
         cell.style.color=cellprops.colortext; //UI change
         colortext.value=cellprops.colortext; //UI change
         console.log(colortext.value);

    })

    bgcolor.addEventListener('change', (e)=>
     {
         let address= calAdd.value;
         let [cell, cellprops]= activecell(address);
         cellprops.bgcolor=bgcolor.value;// data change
         cell.style.backgroundColor=cellprops.bgcolor; //UI change
         bgcolor.value=cellprops.bgcolor; //UI change
         console.log(bgcolor.value);

    })

     function activecell(address)
     {
         let [rID, cid]=decodeRIDCID(address);

         let cell=document.querySelector(`.col-cont[rid="${rID}"][cid="${cid}"]`);
         let cellprops=sheetDB[rID][cid];
         
         return [cell, cellprops];
    }
     function decodeRIDCID(address)
     {
         let rID= Number(address.slice(1));
        
         let cid= Number(address.charCodeAt(0))-65;
        
         return [rID, cid];
     }
 


