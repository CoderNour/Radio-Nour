class Timer{
    constructor(){
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