export class Loja {

    constructor(botaoHTML, controlesHTML, getMoedas, gastarMoedas){

        this.botao = botaoHTML;
        this.controles = controlesHTML;

        this.verificarSaldo = getMoedas;
        this.cobrar = gastarMoedas;


        this.hasStop = false;
        this.stopPrice = 2;
        this.botao.innerText = `🛒 Freio (${this.stopPrice})`;

        this.botao.addEventListener('click', () => {
            this.tentarComprarStop();
        });
    }


    tentarComprarStop(){

            if(!this.hasStop && this.verificarSaldo() >= this.stopPrice){

                this.cobrar(this.stopPrice);

                this.controles.style.display = 'block';
                this.hasStop = true;
                this.botao.style.display = 'none';
                return true;
            }

            return false;
        }



}