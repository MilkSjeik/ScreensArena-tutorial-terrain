import { getObjectsByPrototype } from '/game/utils';
import { Creep, Flag } from '/game/prototypes';
// import { } from '/game/constants';
// import { } from '/arena';

export function loop() {
    const myCreeps = getObjectsByPrototype(Creep).filter(creep => creep.my);
    const flags = getObjectsByPrototype(Flag);

    myCreeps.forEach(myCreep => {
        const closestFlag = myCreep.findClosestByPath(flags);
        myCreep.moveTo(closestFlag);
    });
}
