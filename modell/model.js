import { kepLista } from "./adatok.js";


class Model {
    #adatok;
    #id;

    constructor() {
        this.#adatok = kepLista;
        this.#id = 0;
    }
    jobb(){
        this.#id = this.#id + 1;
        if(this.#id >this.#adatok.length-1)
        {
            this.#id = 0;
        }
    }

    bal() {
        this.#id = this.#id - 1;
        if(this.#id < 0)
        {
            this.#id = this.#adatok.length-1;
        }
    }
    getAdat() {
        return this.#adatok[this.#id];
    }
  

}
export default Model