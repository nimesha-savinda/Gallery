const gallery = document.querySelectorAll(".gallery .image");
const descriptions =document.getElementsByClassName(".description1",".description2")
previewbox = document.querySelector(".preview-container");
closeicon = document.querySelector(".cross");
preview_photo = previewbox.querySelector(".the");
previous_button =document.querySelector(".previous");
next_button=document.querySelector(".next");
let description01 = document.querySelector(".description1");
let description02 = document.querySelector(".description2");
let description03 = document.querySelector(".description3");
let description04 = document.querySelector(".description4");
let description05 = document.querySelector(".description5");
let description06 = document.querySelector(".description6");
let description07 = document.querySelector(".description7");
let description08 = document.querySelector(".description8");
let description09 = document.querySelector(".description9");
var number = document.getElementById("current-number"); 

window.onload = ()=>{
    for(let i = 0;i<gallery.length;i++){
        let newIndex = i;
        let clickedIndex;
        gallery[i].onclick = ()=>{
            clickedIndex=i;
            function description_visibility(){
                if(newIndex==0){
                    description01.style.display="inline";
                    description02.style.display="none";
                }
                else if(newIndex==1){
                    description02.style.display="inline";
                    description01.style.display="none";
                    description03.style.display="none";
                }
                else if(newIndex==2){
                    description03.style.display="inline";
                    description02.style.display="none";
                    description04.style.display="none";
                }
                else if(newIndex==3){
                    description04.style.display="inline";
                    description03.style.display="none";
                    description05.style.display="none";
                }
                else if(newIndex==4){
                    description05.style.display="inline";
                    description04.style.display="none";
                    description06.style.display="none";
                }
                else if(newIndex==5){
                    description06.style.display="inline";
                    description05.style.display="none";
                    description07.style.display="none";
                }
                else if(newIndex==6){
                    description07.style.display="inline";
                    description06.style.display="none";
                    description08.style.display="none";
                }
                else if(newIndex==7){
                    description08.style.display="inline";
                    description07.style.display="none";
                    description09.style.display="none";
                }
                else if(newIndex==8){
                    description09.style.display="inline";
                    description08.style.display="none";
                }
            }
            function preview() {
                description_visibility();
                next_button_visibility();
                prev_button_visibility();
                number.innerText = (newIndex+1);
                let selected_img = gallery[newIndex].src;
                preview_photo.src = selected_img;
            }
            preview();
            previewbox.classList.add("show");
            previous_button.onclick = ()=>{
                newIndex--;
                /*next_button_visibility();*/
                preview();
            }
            next_button.onclick=()=>{
                newIndex++;
                preview();
            }
            function next_button_visibility() {
                if(7<newIndex){
                    next_button.style.display = "none";
                }
                else{next_button.style.display = "inline";}
            }
            function prev_button_visibility() {
                if(1>newIndex){
                    previous_button.style.display = "none";
                }
                else{previous_button.style.display = "inline";}
            }
            preview();
            closeicon.onclick = function(){
                previewbox.classList.remove("show");
                console.log(i+1);
                if(newIndex==0){
                    description01.style.display="none";
                }
                else if(newIndex==1){
                    description02.style.display="none";
                }
                else if(newIndex==2){
                    description03.style.display="none";
                }
                else if(newIndex==3){
                    description04.style.display ="none";
                }
                else if(newIndex==4){
                    description05.style.display="none";
                }
                else if(newIndex==5){
                    description06.style.display="none";
                }
                else if(newIndex==6){
                    description07.style.display="none";
                }
                else if(newIndex==7){
                    description08.style.display="none";
                }
                else if(newIndex==8){
                    description09.style.display="none";
                }
                newIndex=clickedIndex;

            }

        }
    }
}