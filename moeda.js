export class Moeda {

    constructor(areaSVG, velocidade = 1, raio = 5, valor = 1){

        this.area = areaSVG;

        this.velocidade = velocidade + Math.random() ;

        this.elemento = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.raio = raio;
        this.elemento.setAttribute('r', this.raio);

        let minX = 15;
        let maxX = 185 - this.raio;
        this.x = Math.random() * (maxX - minX) + minX;
        this.y = -60;
        this.elemento.setAttribute('cx', this.x);
        this.elemento.setAttribute('cy', this.y);

        this.elemento.setAttribute('fill', 'yellow');

        this.valor = valor;

        this.area.appendChild(this.elemento);
    }

    cair(){

        this.y += this.velocidade;
        this.elemento.setAttribute('cy', this.y);
    }

    passouDoFundo() {
                
        return this.y > 240;
    }

    destruir() {

        if(this.elemento.parentNode) {
           this.area.removeChild(this.elemento);
        }
    }

    colisiontest(Bola){

        let distX = Bola.posX - this.x;
        let distY = Bola.posY - this.y;

        let distancia = Math.sqrt((distX * distX) + (distY * distY)); 

        return distancia <= this.raio + Number(Bola.elemento.getAttribute('r'));
    }
    
}