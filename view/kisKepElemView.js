class KisKepElemView {
    #kep;
    #divElem;
    #id;

  constructor(kep, szuloElem, id) {
    this.#kep = kep;
    this.#id = id;
    szuloElem.append(`<div class="kep"> </div>`);
    this.#divElem = szuloElem.children(".kep:last-child");
    this.#kepKiiras();
    this.#divElem.on("click", ()=>{
      this.#esemenyTrigger();
    });
  }

  #kepKiiras() {
    let kiiras = `<img src="${this.#kep}" alt="${this.#kep}">`;
    this.#divElem.append(kiiras);
  }

  #esemenyTrigger(){
    window.dispatchEvent(new CustomEvent("kepKivalasztas", {detail: this.#id}));
  }

 

}
export default KisKepElemView;
