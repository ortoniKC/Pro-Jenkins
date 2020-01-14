class Tele {
    somePhon = "One plus"
    makeCall() {
        console.log("make call tele");
    }


}

class Mobile extends Tele {
    // constructor(name) {

    //     super()
    //     this.name = name;
    //     console.log("I m in mobile " + name);
    // }
    // constructor() {
    //     console.log("Another constr");

    // } // not posssible
    is5g = false;

    getMobileColor() {
        return "black"
    }
    // getMobileColor() {
    //     return "black"
    // }

    static makeCall() {
        // super.makeCall() this will call the parent function
        console.log("make call m in MObile");
    }


}
exports.Mobile = Mobile;

// let mob = new Mobile();
// console.log(mob.is5g);
// mob.is5g = true;
// console.log(mob.is5g);
// let color = mob.getMobileColor()
// console.log(color);
// mob.makeCall()


