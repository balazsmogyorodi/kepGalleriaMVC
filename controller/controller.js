import Model from "../modell/model.js";
import NagyKepView from "../view/nagyKepView.js";


class Controller {

    constructor() {
        const MODEL = new Model();
        const NAGYKEP = new NagyKepView($(".nagyKep"), MODEL.getAdat());
        $(window).on("bal", () => {
            MODEL.bal();
            let aktKep = MODEL.getAdat();
            NAGYKEP.nagyKepElemBeallitas(aktKep);
        })
        $(window).on("jobb", () => {
            MODEL.jobb();
            let aktKep = MODEL.getAdat();
            NAGYKEP.nagyKepElemBeallitas(aktKep);
        })
    


    }


}
export default Controller;