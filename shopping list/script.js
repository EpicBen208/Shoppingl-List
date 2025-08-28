let textBox


function addItem(){
    const addButtonToList= document.createElement("button");
    const itemList=document.getElementById("itemList");
    const addToList = document.createElement("li");
    textBox = document.getElementById("text").value;
    addToList.textContent=(textBox+" ");
    addToList.classList="x-large white";
    addButtonToList.textContent=("Delete");    
    addButtonToList.onclick=this.del =()=>itemList.removeChild(addButtonToList.parentNode);
    addToList.appendChild(addButtonToList);
    itemList.appendChild(addToList);
    

}
