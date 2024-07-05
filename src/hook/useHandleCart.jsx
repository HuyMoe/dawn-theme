import { createContext, useState } from 'react';

export const ThemeContext = createContext(false);

function UseHandleCart({ Children }) {
    const [toggle, setToggle] = useState(ThemeContext);
    return <ThemeContext.Provider value={{ toggle, setToggle }}>{Children}</ThemeContext.Provider>;
}

export default UseHandleCart;
