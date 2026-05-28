export class Mapa {

    constructor(areaSVG){

        this.elemento = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.area = areaSVG;


        this.elemento.setAttribute('cx', 100);
        this.elemento.setAttribute('cy', 100);
        this.elemento.setAttribute('r', 70);
        this.elemento.setAttribute('fill', 'black');
        this.elemento.setAttribute('stroke', 'lightgreen');
        this.elemento.setAttribute('stroke-width', 25);
        this.elemento.setAttribute('id', 'mapa');



        this.area.appendChild(this.elemento);
    }
}