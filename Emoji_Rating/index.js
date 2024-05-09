satrsE1=document.querySelectorAll(".fa-star");
const emojisE1=document.querySelectorAll(".fa-regular");
const colorsArray=["red","orange","blue","pink","green"];
updateRating(0);
satrsE1.forEach((satrsE1,index) => {
    satrsE1.addEventListener("click",()=>{
        updateRating(index);
    });
    
});
function updateRating(index)
{
    satrsE1.forEach((satrsE1,idx)=>{
        if(idx<index+1){
            satrsE1.classList.add("active");

        }
        else{
            satrsE1.classList.remove("active");
        }
        
    });

emojisE1.forEach((emojiE1)=>{
    emojiE1.style.transform=`translateX(-${index*50}px)`;
    emojiE1.style.color=colorsArray[index]

});
}