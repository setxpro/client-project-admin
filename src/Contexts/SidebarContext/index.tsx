import React, { createContext, useState } from 'react';
import { ChildrenProps, SidebarProps } from '../../Types';

export const SidebarContext = createContext({} as SidebarProps);

export const SidebarProvider = ({children}: ChildrenProps) => {

    const [openSidebar, setOpenSidebar] = useState(false);

    const open = () => setOpenSidebar(!openSidebar);

    return (
        <SidebarContext.Provider value={{ openSidebar, open }}>
            {children}
        </SidebarContext.Provider>
    );
}