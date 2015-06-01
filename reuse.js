// example for code reuse using Object.create()
'use strict';

require('core-js');

let drawBlood = {
  access: 'waitingRoom',
  draw () {
    return `${this.name}, ${this.specialty}, draws blood.`;
  }
};

let doctor = Object.assign(Object.create(drawBlood), {
  name: 'josh',
  access: 'MedicalRecords',
  specialty: 'oncologist',

  prescribe (drug) {
    return `${this.name}, ${this.specialty}, prescribes ${drug}.`;
  }
});

var result = doctor.prescribe('tylenol');
console.log(result);
result = doctor.draw();
console.log(result);

// josh, oncologist, prescribes tylenol.
// josh, oncologist, draws blood.