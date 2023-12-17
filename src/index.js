class heroi{
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    
      if(tipo =='mago'){
        this.ataque = 'magia'
      }else if(tipo == 'guerreiro'){
        this.ataque = 'espada'
      }else if(tipo == 'monge'){
        this.ataque = 'artes marcias'
      }else if(tipo == 'ninja'){
        this.ataque = 'shuruken'
      }else{
        this.ataque == undefined
      }
  }

  atacar(){
    if(!(this.ataque==undefined)){
      console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
    else{
      console.log('Error: Preencha com tipo de herói viável.')
    }
  }
}

const h1 = new heroi('gustavo',45,'mago')

h1.atacar()