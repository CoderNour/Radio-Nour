class theme{
    constructor(){
        this.theme1 = document.getElementById("theme1");
        this.theme1.addEventListener("click",()=>{
            this.select_theme("theme1");
        });
        this.theme2 = document.getElementById("theme2");
        this.theme2.addEventListener("click",()=>{
            this.select_theme("theme2");
        });
        this.theme3 = document.getElementById("theme3");
        this.theme3.addEventListener("click",()=>{
            this.select_theme("theme3");
        });
        this.theme4 = document.getElementById("theme4");
        this.theme4.addEventListener("click",()=>{
            this.select_theme("theme4");
        });
        if(localStorage.getItem("COLOR")==null){
            document.body.style.background = "linear-gradient(90deg,red,blue)";
        }else{
            this.select_theme(localStorage.getItem("COLOR"));
        }
    }
    select_theme(theme){
        if(theme=="theme1"){
            document.body.style.background = "linear-gradient(90deg,blue,red)";
        }else if(theme=="theme2"){
            document.body.style.background = "linear-gradient(90deg , blue,limegreen )";
        }else if(theme=="theme3"){
            document.body.style.background = "linear-gradient(90deg,purple,darkblue)";
        }else if(theme=="theme4"){
            document.body.style.background = "linear-gradient(90deg,red,gold)";
        }
        localStorage.setItem("COLOR",theme)
    }
}
onload = new theme();