import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains product to add
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id == productToAdd.id);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    //if found, increment quantity
        if (existingCartItem) {
            return cartItems.map((cartItem) => 
            cartItem.id == productToAdd.id
             ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    //return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, productToRemove) => {
    //find if cartItems contains product to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id == productToRemove.id);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    //if found, decrement quantity
    if(existingCartItem.quantity == 1) {
        return cartItems.filter(cartItem => cartItem.id != productToRemove.id);
    }

    //return new array with modified cartItems/ new cart item
    return cartItems.map((cartItem) => 
            cartItem.id == productToRemove.id
             ? {...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
};

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id != productToClear.id);
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    total: 0
});


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [ cartItems, setCartItems ] = useState([]); 
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
             0
             );
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
             0
             );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }
    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart,clearItemFromCart, cartItems, cartCount, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};