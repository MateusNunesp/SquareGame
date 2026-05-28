export class Bola {

    constructor(areaSVG, velocidade = 0.05, raio = 10) {
        
        this.area = areaSVG;

        this.elemento = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.area.appendChild(this.elemento);
        this.raio = raio;
        this.elemento.setAttribute('r', this.raio);

        this.velocidade = velocidade;
        this.angulo = Math.PI / 2;
        this.rodando = true;
        this.cxOrbita = 100;
        this.cyOrbita = 100;
        this.raioOrbita = 70;

        this.posX = 100;
        this.posY = 170;

        this.elemento.setAttribute('cx', this.posX);
        this.elemento.setAttribute('cy', this.posY);

        this.elemento.setAttribute('fill', 'blue');

        this.area.appendChild(this.elemento);

    }

    animar() {
        
            if (this.rodando) {
                this.angulo += this.velocidade;

                this.posX = this.cxOrbita + this.raioOrbita * Math.cos(this.angulo);
                this.posY = this.cyOrbita + this.raioOrbita * Math.sin(this.angulo);

                this.elemento.setAttribute('cx', this.posX);
                this.elemento.setAttribute('cy', this.posY);
            }
    }

    changeDirection(){

        this.velocidade *= -1;
        this.rodando = true;
        
    }

    togglePause(){

        this.rodando = !this.rodando;
    }


    resetar() {

        this.angulo = Math.PI / 2;
        this.rodando = true;
        this.velocidade = Math.abs(this.velocidade);

        this.posX = this.cxOrbita + this.raioOrbita * Math.cos(this.angulo);
        this.posY = this.cyOrbita + this.raioOrbita * Math.sin(this.angulo);

        this.elemento.setAttribute('cx', this.posX);
        this.elemento.setAttribute('cy', this.posY);
    }
}