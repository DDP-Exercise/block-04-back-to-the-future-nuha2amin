// Digital View

export const DIGITAL = {

    element: null,

    init() {
        this.element = document.getElementById("digital");
    },

    update(time) {
        this.element.innerHTML =
            time.hours + ":" +
            time.minutes + ":" +
            time.seconds;
    }

};