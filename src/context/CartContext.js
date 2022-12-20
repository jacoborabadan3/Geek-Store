import { createContext, useState } from "react";


export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [contextValue, setContextValue] = useState([]);

    console.log(contextValue);

    const isInCart = (id) => {
        return contextValue.some(Object => Object.id === id);
    };

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

    return (
        <cartContext.Provider
            value={
                {
                    contextValue,
                    setContextValue,
                    addToCart,
                    isInCart, 
                    getQuantity
                }
            }>
            {children}
        </cartContext.Provider>
    );

};