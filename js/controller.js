// Controller = connects everything

import { TIME } from "./model.time.js";
import { DIGITAL } from "./view.digital.js";
import { ANALOGUE } from "./view.analogue.js";

// init views
DIGITAL.init();
ANALOGUE.init();

// update function
function updateClock() {

    const time = TIME.getTime();

    DIGITAL.update(time);
    ANALOGUE.update(time);

}

// run every second
setInterval(updateClock, 1000);