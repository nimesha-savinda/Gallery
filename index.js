const gallery = document.querySelectorAll(".gallery .image");
previewbox = document.querySelector(".preview-container");
closeicon = document.querySelector(".cross");
preview_photo = previewbox.querySelector(".the");
previous_button =document.querySelector(".previous");
next_button=document.querySelector(".next");
var number = document.getElementById("current-number"); 

window.onload = ()=>{
    for(let i = 0;i<gallery.length;i++){
        gallery[i].onclick = ()=>{
            console.log(i+1);
            function preview() {
                next_button_visibility();
                prev_button_visibility();
                number.innerText = (i+1);
                let selected_img = gallery[i].src;
                preview_photo.src = selected_img;
            }
            preview();
            previewbox.classList.add("show");
            previous_button.onclick = ()=>{
                i--;
                /*next_button_visibility();*/
                preview();
            }
            next_button.onclick=()=>{
                i++;
                preview();
            }
            function next_button_visibility() {
                if(7<i){
                    next_button.style.display = "none";
                }
                else{next_button.style.display = "inline";}
            }
            function prev_button_visibility() {
                if(1>i){
                    previous_button.style.display = "none";
                }
                else{previous_button.style.display = "inline";}
            }

            closeicon.onclick = function(){
                previewbox.classList.remove("show");
            }
        }
    }
}