class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = 'up';
    
  }

  start() {
    let interval = setInterval(() =>{
    //Compara la planta con la maxima posible.
    if(this.floor < this.MAXFLOOR && this.direction=="up"){
      this.floorUp();
      this.update();
    }else{
      this.floorDown();
      this.update();
    }
  },1000)
  }
  stop() { 
    clearInterval(this.interval);
  }
  update() { 
    this.log();

  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if(this.floor < this.MAXFLOOR){
      this.floor++;
      this.direction = "up";
    } else {
      this.direction = "down";
    }
   }
  floorDown() {
    if(this.floor>0){
      this.floor--;
      this.direction ="down";
    }else{
      this.direction= "up";
    }
  }
  call() { 
    
  }
  log() {
    console.log(`direction : ${this.direction}`);
    console.log(`floor : ${this.floor}`);
   }
}

module.exports = Elevator;
