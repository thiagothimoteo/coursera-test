(function() {
'use strict';

var app = angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var item = this;
    item.toBuyList = ShoppingListCheckOffService.toBuyListItems;

    item.addBoughtList = function(itemIndex) {
        ShoppingListCheckOffService.addBoughtList(itemIndex);
    }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var item = this;
    item.boughtList = ShoppingListCheckOffService.itemsBought;
}

function ShoppingListCheckOffService(){
    var service = this;

    service.toBuyListItems = [
        {
            name: "apples",
            quantity: 6
        },
        {
            name: "oranges",
            quantity: 12
        },
        {
            name: "grapes",
            quantity: 20
        },
        {
            name: "strawberries",
            quantity: 24
        },
        {
            name: "pineapples",
            quantity: 2
        },
    ]

    service.itemsBought = [];

    service.addBoughtList = function(itemIndex){
        service.itemsBought.push(service.toBuyListItems[itemIndex]);
        service.toBuyListItems.splice(itemIndex,1);
    }


}

})();