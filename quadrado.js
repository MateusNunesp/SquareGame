export class Quadrado {

    constructor(areaSVG, velocidade = 0.5, tamanho = 12){

        this.area = areaSVG;

        this.velocidade = velocidade + Math.random();

        this.elemento = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        this.tamanho = tamanho;
        this.elemento.setAttribute('width', this.tamanho);
        this.elemento.setAttribute('height', this.tamanho);

        let minX = 15;
        let maxX = 185 - (this.tamanho / 2) ;
        this.x = Math.random() * (maxX - minX) + minX;
        this.y = -60;
        this.elemento.setAttribute('x', this.x);
        this.elemento.setAttribute('y', this.y);


        this.elemento.setAttribute('fill', 'red');

        this.area.appendChild(this.elemento);
    }

    cair(){

        this.y += this.velocidade;
        this.elemento.setAttribute('y', this.y);
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
            let testX = Bola.posX;
            let testY = Bola.posY;

            if(Bola.posX < this.x) testX = this.x;
            else if(Bola.posX > this.x + this.tamanho) testX = this.x + this.tamanho;

            if(Bola.posY < this.y) testY = this.y;
            else if(Bola.posY > this.y + this.tamanho) testY = this.y + this.tamanho;

            let distX = Bola.posX - testX;
            let distY = Bola.posY - testY;
            let distancia = Math.sqrt((distX * distX) + (distY * distY));

            return distancia <= Bola.elemento.getAttribute("r");
        }
}