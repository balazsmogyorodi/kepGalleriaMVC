import Model from "../modell/model.js";
import KisKepekView from "../view/kisKepekView.js";
import NagyKepView from "../view/nagyKepView.js";


class Controller {

    constructor() {
        const MODEL = new Model();
        const NAGYKEP = new NagyKepView($(".nagyKep"), MODEL.getAdat());
        const KISKEPEK = new KisKepekView($(".kisKep"), MODEL.getAdatok());

        $(window).on("kepKivalasztas", (event)=>{
            MODEL.setId(event.detail);
            let aktKep = MODEL.getAdat();
            NAGYKEP.nagyKepElemBeallitas(aktKep);
        });
        $(window).on("bal", () => {
            MODEL.bal();
            let aktKep = MODEL.getAdat();
            NAGYKEP.nagyKepElemBeallitas(aktKep);
        });
        $(window).on("jobb", () => {
            MODEL.jobb();
            let aktKep = MODEL.getAdat();
            NAGYKEP.nagyKepElemBeallitas(aktKep);
        });
    


    }


}
export default Controller;