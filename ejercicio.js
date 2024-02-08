'use strict'

class Refrigerator {
    constructor(model, price, color) {
        // Initialize the meals array
        this.meals = [];
        this.model = model;
        this.price = price;
        this.color = color;
    }

    addMeal(meal) { // Method to add a meal to the refrigerator
        this.meals.push(meal); // Use the push method to add the meal to the meals array
    }

    showInfo() {
        alert(`Este refrigerador es: ${this.model}, su precio es: $${this.price} dólares, y viene en color: ${this.color}`);
    }
}

// Create a new refrigerator object
let refri = new Refrigerator('Samsung', 135, 'Gris Oscuro');
refri.showInfo();

// Add some meals to the refrigerator
refri.addMeal("carne");
refri.addMeal("queso");
refri.addMeal("leche");
refri.addMeal("ensalada");

// Log the current contents of the refrigerator
alert("Este Refrigerador contiene "+refri.meals); // ["carne", "queso", "leche", "ensalada"]