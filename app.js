class Player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if(screen.width<500){
            heightMain.style.width = screen.width + "px";
        }

        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-300 + "px";
    }
}
onload = new Player();

// class buttons
class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");
        this.isPlayed;

        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause();
        });
        

        this.names_radio =[];
        this.names_radio[0]="صدى";
        this.names_radio[1]="شام";
        this.names_radio[2]="موسيقى";
        this.names_radio[3]="نينار";
        this.names_radio[4]="القرآن الكريم 1";
        this.names_radio[5]="القرآن الكريم 2";
        this.names_radio[6]="القرآن الكريم 3";
        this.names_radio[7]="فيوز";
        this.names_radio[8]="إذاعة دمشق";
        this.names_radio[9]="قديم";
        this.names_radio[10]="راديو دهب";
        this.names_radio[11]="مونت كارلو";
        this.names_radio[12]="أم كلثوم";
        this.names_radio[13]="وتر";
        this.names_radio[14]="فرح";
        this.names_radio[15]="عربي - BBC";
        this.names_radio[16]="أرابيسك";
        /*
        this.names_radio[17]="";
        this.names_radio[18]="";
        this.names_radio[19]="";
        */

        this.source_audio=[];
        this.source_audio[0]="http://sc8new.shoutcaststreaming.us:8032/stream.mp3";
        this.source_audio[1]="http://66.248.205.204:8400/stream?_=1410355362";
        this.source_audio[2]="http://192.99.17.12:4978/;stream.mp3";
        this.source_audio[3]="http://ninarfm.grtvstream.com:8896/;stream.mp3";
        this.source_audio[4]="http://s2.voscast.com:12312/;";
        this.source_audio[5]="https://n0a.radiojar.com/0tpy1h0kxtzuv?rj-ttl=5&rj-tok=AAABgoSQXrIAfX7uXe6gue3pqQ";
        this.source_audio[6]="http://66.45.232.131:9994/;";
        this.source_audio[7]="http://192.99.17.12:4986/;stream.mp3";
        this.source_audio[8]="http://radioliveb.rtv.gov.sy:8002/RadioDimshq";
        this.source_audio[9]="https://usa19.fastcast4u.com/adeem";
        this.source_audio[10]="https://dahab.ice.infomaniak.ch/dahab-192.mp3";
        this.source_audio[11]="http://live02.mc-doualiya.com/mc-doualiya.mp3";
        this.source_audio[12]="http://livstream.xyz:8010/umm-kulthum.mp3";
        this.source_audio[13]="https://stream-15.zeno.fm/u5sq2cxp7s8uv?zs=Dr9T5IH4R0GxyQaFPzT_JA";
        this.source_audio[14]="http://radio.farah.fm:8000/;";
        this.source_audio[15]="https://stream.live.vc.bbcmedia.co.uk/bbc_arabic_radio";
        this.source_audio[16]="http://185.4.87.79:8000/stream.mp3";
        /*
        this.source_audio[17]="";
        this.source_audio[18]="";
        this.source_audio[19]="";
        */

        this.server = 0;

        this.setResource();

        document.getElementById("next").addEventListener("click",()=>{
             if(this.server<this.source_audio.length-1){
                ++this.server;
                this.isPlayed = false;
             }else{
                 this.server=0;
                 this.isPlayed = false;
             }
             localStorage.setItem("save",this.server);
             this.setResource();
        });

        document.getElementById("back").addEventListener("click",()=>{
             if(this.server>0){
                --this.server;
                this.isPlayed = false;
             }else{
                 this.server=this.source_audio.length-1;
                 this.isPlayed = false;
             }
             localStorage.setItem("save",this.server);
             this.setResource();
        });
    }

    setResource(){
        if(localStorage.getItem("save")!=null){
            this.server= localStorage.getItem("save");
        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.play_pause();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play_pause_button.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }else {
            this.play_pause_button.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }
}


class Timer{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.play_pause_button = document.getElementById("play_pause");


        document.getElementById("timer").innerHTML = Timer.getHTML();

        this.el = {
            minutes: document.getElementById("minutes"),
            seconds: document.getElementById("seconds"),
            reset: document.getElementById("reset")
        };
        this.interval = null;
        this.remainingSeconds = 0;

        this.el.reset.addEventListener("click",()=>{
            const inputMinutes = prompt("Enter number of minutes : ");

            if(inputMinutes < 60){
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.start();
                this.updateInterfaceTime();
            }
        });
    }

    updateInterfaceTime(){
        const minutes = Math.floor(this.remainingSeconds/60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2,"0");
        this.el.seconds.textContent = seconds.toString().padStart(2,"0");
    }


    start(){
        if(this.remainingSeconds === 0) return;

        this.interval = setInterval(()=>{
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if(this.remainingSeconds === 0){
                this.stop();
                this.audio_file.pause();
                this.play_pause_button.src = "./img/play.png";
            }
        },1000);

    }
    stop(){
        clearInterval(this.interval);
        this.interval = null;
        
    }

    static getHTML(){
        return `
        <span id="minutes">00</span>
        <span id="dot">:</span>
        <span id="seconds">00</span>
        <button type="button" id="reset">
            <span class="material-icons">timer</span>
        </button>
        `;
    }
}
onload = new Timer();
onload = new Audio_Player();