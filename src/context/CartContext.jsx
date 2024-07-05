import { createContext, useEffect, useState } from 'react';
import { getItemCart } from '../module';

const CartContext = createContext();

function CartProvider({ children }) {
    const [openCart, setOpenCart] = useState(false);
    const [items, setItems] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getItemCart()
            .then((res) => setItems(res.item))
            .then(() => setReload(false));
    }, [reload]);
    const handleDrawerOpen = () => {
        setOpenCart(true);
    };
    const handleDrawerClose = () => {
        setOpenCart(false);
    };

    const value = {
        openCart,
        items,
        setReload,
        handleDrawerOpen,
        handleDrawerClose,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
