// kono cart local e ache ki na check
const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

// add item
const addToLs = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLs(cart);
}

// save to local storage
const saveCartToLs = cart => {
    const cartSringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartSringified);
}

export {addToLs, getStoredCart}