import { createContext, useState } from "react";


export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [contextValue, setContextValue] = useState([]);

    const isInCart = (id) => contextValue.some(Object => Object.id === id);

    const addToCart = (item) => {
        if (!isInCart(item.id)) {
            setContextValue();
        };
    };

    const getQuantity = () => {
        let totalQuantity = 0;
        contextValue.forEach(Element => totalQuantity += Element.cantidad);
        return totalQuantity;
    };

    const finalPrice = () => contextValue.length !== 0 && contextValue.map(element => Number(element.precio * element.cantidad)).reduce((a, b) => a + b)

    const removeItem = (id) => {
        const updateItems = contextValue.filter(Element => Element.id !== id);
        setContextValue(updateItems);
    };

    const clearCart = () => {
        setContextValue([])
    };

    return (
        <cartContext.Provider
            value={
                {
                    contextValue,
                    setContextValue,
                    addToCart,
                    isInCart,
                    getQuantity,
                    removeItem,
                    finalPrice,
                    clearCart
                }
            }>
            {children}
        </cartContext.Provider>
    );

};