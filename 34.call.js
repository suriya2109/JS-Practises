function cook(ing1, ing2, ing3) {
    console.log(`${this.name} is having a meal with ${ing1}, ${ing2}`);
}
const name = { name: "suriya" };

cook.call(name, "rice", "beans");
cook.apply(name, ["rice", "beans"]);

const cookAdam = cook.bind(name, "rice", "corets");

cookAdam();