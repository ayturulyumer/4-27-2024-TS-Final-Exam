"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        // if the capacity allows it
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        // try to find an element that matches
        const isFoundIndex = this.drinks.findIndex((drink) => drink.name === name);
        // if it's found remove it and return true
        if (isFoundIndex !== -1) {
            this.drinks.splice(isFoundIndex, 1);
            return true;
        }
        // else return false
        return false;
    }
    getLongest() {
        // assume biggest volume drink is the first one
        let biggestVolumeDrink = this.drinks[0];
        // iterate the array and check if the current drinks volume is bigger , if it's update the biggestVolumeDrink with current one
        for (let i = 0; i < this.drinks.length; i++) {
            if (this.drinks[i].volume > biggestVolumeDrink.volume) {
                biggestVolumeDrink = this.drinks[i];
            }
        }
        return biggestVolumeDrink.toString();
    }
    // same logic as above
    getCheapest() {
        let cheapestDrink = this.drinks[0];
        for (let i = 0; i < this.drinks.length; i++) {
            if (this.drinks[i].price < cheapestDrink.price) {
                cheapestDrink = this.drinks[i];
            }
        }
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find((drink) => drink.name === name);
        if (drink) {
            return drink.toString();
        }
        return `${drink} not found`;
    }
    // make this as getter function because of the given inputs allowing it to be accessed as property
    get getCount() {
        return this.drinks.length;
    }
    report() {
        return `Drinks available: \n ${this.drinks.join("\n")}`;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map