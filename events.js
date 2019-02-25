class EventEmitter{

    constructor(){
      this.eventos = {};
    }

    emit(eventName, ...args){
          if(this.eventos[eventName]) {
             console.log('Emitiendo ${eventName}');
             this.eventos[eventName].forEach(escucha => escucha(...args));
          }
    }

    on(eventName,escucha){
          this.eventos[eventName]=this.eventos[eventName]|| [];
          this.eventos[eventName].push(escucha);
    }
}

exports = module.exports = EventEmitter;
