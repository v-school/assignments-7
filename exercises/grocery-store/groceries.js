
// Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:

// String
// Number
// Boolean
// Function (called a "method" when it's inside an object like this. Check out an example for help writing your own)
// In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.




var shopper = {
    name: 'Amy',
    age: 30,
    likesToShop: false,
    groceryCart: ['bananas', 'coffee', 'apples', 'oranges'],
    itemsInCart: function(){
        this.groceryCart.map(item => {
            console.log(item)
        })
    }
 }

 shopper.itemsInCart()