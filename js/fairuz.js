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
        this.audio_file_f = document.getElementById("audio_file_f");
        this.title_audio_f = document.getElementById("title_radio_f");
        this.play_pause_button_f = document.getElementById("play_pause_f");
        this.isPlayed_f;

        this.play_pause_button_f.addEventListener("click",()=>{
            this.play_pause();
        });
        

        this.names_radio_f =[];
        this.names_radio_f[0]="على جسر اللوزية";
        this.names_radio_f[1]="نسم علينا الهوا";
        this.names_radio_f[2]="بعدك على بالي";
        this.names_radio_f[3]="يا طير";
        this.names_radio_f[4]="بكتب اسمك";
        this.names_radio_f[5]="كيفك أنت";
        this.names_radio_f[6]="يا مرسال المراسيل";
        this.names_radio_f[7]="حبيتك لنسيت النوم";
        this.names_radio_f[8]="قديش كان في ناس";
        this.names_radio_f[9]="أعطني الناي";
        this.names_radio_f[10]="حبيتك بالصيف";
        this.names_radio_f[11]="ليالي الشمال الحزينة";
        this.names_radio_f[12]="زوروني كل سنة مرة";
        this.names_radio_f[13]="يا أنا";
        this.names_radio_f[14]="شام يا ذا السيف";
        this.names_radio_f[15]="كتبنا و ما كتبنا";
        this.names_radio_f[16]="أهواك";
        this.names_radio_f[17]="لا أنت حبيبي";
        this.names_radio_f[18]="أنا عندي حنين";
        this.names_radio_f[19]="كان الزمان";



        this.source_audio_f=[];
        this.source_audio_f[0]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Ragaen%20Ya%20Hawa.mp3";
        this.source_audio_f[1]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Nasam%20Alaina%20El%20Hawa.mp3";
        this.source_audio_f[2]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Baadak%20Aala%20Bali.mp3";
        this.source_audio_f[3]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Ya%20Tair.mp3";
        this.source_audio_f[4]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Bektob%20Esmak.mp3";
        this.source_audio_f[5]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Kefak%20Enta.mp3";
        this.source_audio_f[6]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Ya%20Mersal%20Elmarasel.mp3";
        this.source_audio_f[7]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Habaitak%20Tanset%20Al%20Nom.mp3";
        this.source_audio_f[8]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Adesh%20Kan%20Fe%20Nas.mp3";
        this.source_audio_f[9]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Aaeteny%20Alnay.mp3";
        this.source_audio_f[10]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Habaitak%20Belsaif.mp3";
        this.source_audio_f[11]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Layali%20El%20Shamal%20El%20Hazenah.mp3";
        this.source_audio_f[12]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Zoroni%20Kol%20Sanah%20Marrah.mp3";
        this.source_audio_f[13]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Ya%20Ana.mp3";
        this.source_audio_f[14]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/qsa2ed/Alarab_Fairouz%20-%20Shamo%20Ya%20Za%20Alsaif.mp3";
        this.source_audio_f[15]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Katbana%20Wama%20Katabna.mp3";
        this.source_audio_f[16]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Ahwak.mp3";
        this.source_audio_f[17]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_La%20Enta%20Habebi.mp3";
        this.source_audio_f[18]="https://cdn.alarab.com/securetest/static/static/MMS_Files/MP3/mp3_files//F/Fayrouz/Alarab_Fayrouz_Ana%20Eendy%20Hanen.mp3";
        this.source_audio_f[19]="https://serv100.albumaty.com/dl/feh/fairouz/singels/Kan_El_Zaman.mp3";
        

        this.server_f = 0;

        this.setResource();

        document.getElementById("next_f").addEventListener("click",()=>{
             if(this.server_f<this.source_audio_f.length-1){
                ++this.server_f;
                this.isPlayed_f = false;
             }else{
                 this.server_f=0;
                 this.isPlayed_f = false;
             }
             localStorage.setItem("save_f",this.server_f);
             this.setResource();
        });

        document.getElementById("back_f").addEventListener("click",()=>{
             if(this.server_f>0){
                --this.server_f;
                this.isPlayed_f = false;
             }else{
                 this.server_f=this.source_audio_f.length-1;
                 this.isPlayed_f = false;
             }
             localStorage.setItem("save_f",this.server_f);
             this.setResource();
        });
        setInterval(()=> {
            if(this.audio_file_f.ended === true){
                if(this.server_f<this.source_audio_f.length-1){
                    ++this.server_f;
                    this.isPlayed_f = false;
                }else{
                    this.server_f = 0;
                    this.isPlayed_f = false;
                }
                localStorage.setItem("save",this.server_f);
                this.setResource();
            }
        },100)
    }



    setResource(){
        if(localStorage.getItem("save_f")!=null){
            this.server_f = localStorage.getItem("save_f");
        }
        this.audio_file_f.src = this.source_audio_f[this.server_f];
        this.title_audio_f.innerHTML = this.names_radio_f[this.server_f];
        this.play_pause();
    }
    play_pause(){
        if(this.isPlayed_f==false){
            this.play_pause_button_f.src = "./img/pause.png";
            this.audio_file_f.play();
            this.isPlayed_f=true;
        }else {
            this.play_pause_button_f.src = "./img/play.png";
            this.audio_file_f.pause();
            this.isPlayed_f=false;
        }
    }

}



class Timer{
    constructor(){
        this.audio_file_f = document.getElementById("audio_file");
        this.play_pause_button_f = document.getElementById("play_pause");


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