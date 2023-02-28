class DispositivoEletronico 
{
    constructor (nome)
    {
        this.nome = nome;
        this.ligado = false;
    }

    ligar ()
    {
        if (this.ligado)
        {
            console.log(this.nome + ' já ligado');
        }

        this.ligado = true;
    }

    desligar ()
    {
        if (!this.ligado)
        {
            console.log(this.nome + ' já desligado');
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo)
    {
        super(nome );
        this.cor = cor;
        this.modelo = modelo;
    }
}

const d1 = new Smartphone('iPhone 11', 'Azul', '512GB');
d1.ligar();
console.log(d1);