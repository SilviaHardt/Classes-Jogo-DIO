class classeHeroi {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    } 

}

let heroWarrior = new classeHeroi ("James", 153, "guerreiro", "espada");
heroWarrior.atacar()

let heroWizard = new classeHeroi ("Arthur", 235, "mago", "magia");
heroWizard.atacar()

let heroMonk = new classeHeroi ("Lua", 193, "monge", "artes marciais")
heroMonk.atacar()

let heroNinja = new classeHeroi ("Thalia", 321, "ninja", "shuriken")
heroNinja.atacar()