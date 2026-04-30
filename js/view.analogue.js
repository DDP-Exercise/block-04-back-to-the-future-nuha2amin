// Analogue View (simple version)

export const ANALOGUE = {

    element: null,

    init() {
        this.element = document.getElementById("analogue");
    },

    update(time) {

        // simple representation (no complex drawing)
        this.element.innerHTML =
            "H: " + time.hours + " | " +
            "M: " + time.minutes + " | " +
            "S: " + time.seconds;
    }

};