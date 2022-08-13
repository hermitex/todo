/*
24 mod 12 = 12 the remainder
23 % 12 = 11 the remainder
22 % 12 = 10 the remainder
etc
*/
class DigitalClock {
    constructor(element) {
        this.element = element; //ensures the object we create has a reference to the div we create
        console.log(this.element);
    } //shows the element being used
    //every 500 milliseconds check the time and then update it
    //using the update function
    start() {
        this.update();
        
        setInterval(() => {
            this.update();
        }, 500);
       }

    update() {
        const parts = this.getTimeParts();
        //make sure that the minutes is always 2 decimal places and if not add a zero before the digit
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        //so "2".padStart(2, "0") = 02 for example
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";
        
        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }


    getTimeParts() { //get all the parts of the time from date function
        //provides information about the current time
        const now = new Date();
        //return a new object from this method
        return { //23 mod 12 = 11pm
            //in 24 hr time. if 0 or false go to 12
            hour: now.getHours() % 12 || 12, //get current hours
            minute: now.getMinutes(),
            isAm: now.getHours() < 12 //Boolean. if time less than 12 we are in the am
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();