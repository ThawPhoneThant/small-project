const groceryTag = document.querySelector(".grocery")
const inputTag = document.querySelector("#in")
const deleTag = document.querySelector(".dele")

const item = ()=>{
    const inputvalue = inputTag.value;
   const itemTag = document.createElement("h5")
   itemTag.classList.add("item")
   itemTag.innerHTML = "-"  + inputvalue;
   groceryTag.append(itemTag)
   itemTag.addEventListener("click" , ()=>{
    itemTag.style.textDecoration = "line-through"
   })
   deleTag.addEventListener("click" , ()=>{
    itemTag.innerHTML ="";
})
}

inputTag.addEventListener("keydown" , (event)=>{
    if(event.key === "Enter"){
        // console.log("it's working")
        
        item()
        inputTag.value =" "

    }
})
