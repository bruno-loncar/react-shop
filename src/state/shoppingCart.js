// @ts-nocheck
import { autorun, observable, makeObservable } from "mobx"
import { toJS, configure  } from 'mobx'

class ShoppingCart {

    items = [];
    total = 0;
    cartSize = 0;
    cartOpen = false;

    constructor(items = [], total = 0, cartSize = 0, cartOpen = false) {

        items = this.getItemsFromLocalStorage();

        makeObservable(this, {
            items: observable,
            total: observable,
            cartSize: observable,
            cartOpen: observable,
        })
        this.items = items;
        this.total = total;
        this.cartSize = cartSize;
        this.cartOpen = cartOpen;

        configure({
            enforceActions: "never",
        })

        this.calculateTotal();
    }

    getItemsFromLocalStorage() {
        var items = !!localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
        return items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        const _item = this.items.find(i => i.item.id === item.id);

        if(!!_item)
        {
            _item.amount += 1;
        }
        else {
            this.items.push({ item: item, amount: 1 });
        }
        this.updateItemsInLocalStorage();
        this.calculateTotal();
    }

    updateItemsInLocalStorage() {
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    increaseAmount(item) {
        this.items = this.items.map(i => {
            if (toJS(i).item.id === toJS(item).item.id) {
              return {...i, amount: i.amount + 1};
            } else {
              return i;
            }
        });

        this.updateItemsInLocalStorage();
        this.calculateTotal();
    }

    decreaseAmount(item) {
        this.items = this.items.map(i => {
            if (toJS(i).item.id === toJS(item).item.id) {
                if  (toJS(i).amount > 1) {
                    return {...i, amount: i.amount - 1};
                }
                else {
                    return null;
                }
            } else {
              return i;
            }
        }).filter(i => i != null);
        
        this.updateItemsInLocalStorage();
        this.calculateTotal();
    }

    removeItem(item) {
        this.items = this.items.filter(i => toJS(i).item.id !== toJS(item).item.id);
        this.updateItemsInLocalStorage();
        this.calculateTotal();
    }

    calculateTotal() {
        this.calculateCartSize();
        let total = 0;
        this.items.forEach(item => total += toJS(item).amount * toJS(item).item.price);
        this.total = total;
    }

    calculateCartSize() {
        let size = 0;
        this.items.forEach(item => size += toJS(item).amount * 1);
        this.cartSize = size;
    }

}

var store = window.store = new ShoppingCart();

export default store;

autorun(() => {
    // console.log(store.items);
});