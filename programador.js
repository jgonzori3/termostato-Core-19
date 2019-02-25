// clase programador exporta un objeto progrmador.

const EventEmitter = require('./events');


// Importar modulo Later.js:
const later = require('later');
// Usar zona horaria local:




class Programador extends EventEmitter{

  constructor(programa){

    super();




    later.date.localTime();

    programa.forEach(({temperatura,hora})=>{
        const sched = later.parse.text('at '+ hora);
        later.setInterval(()=>{this.emit(ideal,temperatura)}, sched);
    })
  }
}
exports=module.exports=Programador;
