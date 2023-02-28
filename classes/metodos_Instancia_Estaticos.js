class ControleRemoto 
{
    constructor(tv)
    {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume()
    {
        this.volume += 2;
    }

    /**
     * Método de instância
     * Utilização: 
     * objeto.diminuirVolume()
     */
    diminuirVolume()
    {
        this.volume -= 2;
    }

    /**
     * Método estático
     * Utilização: 
     * ControleRemoto.trocaPilha();
     */
    static trocaPilha()
    {
        console.log("Trocando a pilha");
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
ControleRemoto.trocaPilha();
console.log(controle1);