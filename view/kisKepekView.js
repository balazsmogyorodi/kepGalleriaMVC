import KisKepElemView from "./kisKepElemView.js";

class KisKepekView{
    #adatok;
    #szuloElem;
    constructor(szuloElem, adatok) {
        this.#szuloElem = szuloElem;
        this.#adatok = adatok;
        this.#init();
    }

    #init() {
        this.#szuloElem.empty;
        for (let index = 0; index < this.#adatok.length; index++) {
            new KisKepElemView(this.#adatok[index], this.#szuloElem, index);
        }
    }
}

export default KisKepekView