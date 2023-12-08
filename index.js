// Definindo a classe Objeto para representar objetos no jogo
class Objeto {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}

// Atualizando a classe Heroi para incluir uma propriedade inventario
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.inventario = [];
    }

    adicionarObjetoAoInventario(objeto) {
        this.inventario.push(objeto);
        console.log(`${this.nome} adquiriu ${objeto.nome}: ${objeto.descricao}`);
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);

        if (this.inventario.length > 0) {
            console.log(`${this.nome}'s Inventário: ${this.inventario.map(objeto => objeto.nome).join(", ")}`);
        }
    }
}

// Exemplo de utilização das classes
const espada = new Objeto("Espada Mágica", "Uma espada afiada e poderosa");
const magiaNegra = new Objeto("Livro de Magia Negra", "Um antigo livro com feitiços poderosos");
const shuriken = new Objeto("Shuriken Venenosa", "Uma shuriken com veneno mortal");

const heroiMago = new Heroi("Merlin", 100, "mago");
heroiMago.adicionarObjetoAoInventario(magiaNegra);
heroiMago.atacar();

const heroiGuerreiro = new Heroi("Arthur", 30, "guerreiro");
heroiGuerreiro.adicionarObjetoAoInventario(espada);
heroiGuerreiro.atacar();

const heroiMonge = new Heroi("Li", 35, "monge");
heroiMonge.atacar();

const heroiNinja = new Heroi("Hanzo", 28, "ninja");
heroiNinja.adicionarObjetoAoInventario(shuriken);
heroiNinja.atacar();
