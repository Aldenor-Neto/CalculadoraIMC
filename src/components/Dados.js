class Dados {

    static peso;
    static altura;
    static resultado;

    static calcIMC(){
this.resultado = this.peso/(this.altura * this.altura);
    }

static setPeso(peso){
    this.peso = peso;
}

static setAltura(altura){
    this.altura = altura;
}

}

export default Dados;
