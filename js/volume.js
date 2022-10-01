class Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.Volume = 100/100;

        this.volume_range = document.getElementById("volume_range");
        this.volume_range.value = 100;
        this.volume_value = document.getElementById("volume_value");
        this.volume_range.addEventListener("change",()=>{
            this.audio_file.volume = this.volume_range.value/100;
            this.volume_value.innerHTML = this.volume_range.value;
        });
    }
}
class Volume_fairuz{
    constructor(){
        this.audio_file_f = document.getElementById("audio_file_f");
        this.audio_file_f.Volume = 100/100;

        this.volume_range = document.getElementById("volume_range");
        this.volume_range.value = 100;
        this.volume_value = document.getElementById("volume_value");
        this.volume_range.addEventListener("change",()=>{
            this.audio_file_f.volume = this.volume_range.value/100;
            this.volume_value.innerHTML = this.volume_range.value;
        });
    }
}
onload = new Volume();
onload = new Volume_fairuz();