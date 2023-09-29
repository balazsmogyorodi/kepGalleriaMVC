class NagyKepView{
    #kep;
    #szuloElem
    constructor(szuloElem, kep){
        this.#kep = kep;
        this.#szuloElem = szuloElem;
        this.#htmlLetrehozasa();
        this.balGOmbElem = $("#balGomb");
        this.jobbGombElem = $("#jobbGomb");
        this.nagyIMGElem = $("#nagyIMG");
        this.nagyKepElemBeallitas(kep)
        this.balGOmbElem.on("click", () =>{
            this.#esemenyElem("bal");
        });
        this.jobbGombElem.on("click", () =>{
            this.#esemenyElem("jobb");
        })

       

    }
    #htmlLetrehozasa(){
        let txt = `<button id="balGomb"> Bal </button>`;
        txt += `<div class="fokepTarolo"><img id="nagyIMG" src="${this.#kep}" alt="${this.#kep}"></div>`;
        txt += `<button id="jobbGomb"> Jobb</button>`;
        this.#szuloElem.append(txt);
    }
    
     #esemenyElem(esemeny) {
        window.dispatchEvent(new CustomEvent(esemeny));
     }

     nagyKepElemBeallitas(kep){
        this.nagyIMGElem.attr({"src":kep, "alt":kep});
     }


}

export default NagyKepView;