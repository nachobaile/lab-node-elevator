const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator1= new Elevator();
const Epi = new Person('epi', 1 , 4);
const Blas = new Person('Blas', 8 , 1);
const Coco = new Person('Coco', 3 , 6);
const Espinete= new Person('Espinete', 5 , 3);
const Tricky= new Person('Tricky', 7 , 2);
const Chema= new Person('Chema', 10 , 4);

elevator1.call(epi);
elevator1.call(Blas);
elevator1.call(Coco);
elevator1.call(Espinete);
elevator1.call(tricky);
elevator1.call(Chema);

elevator1.start();