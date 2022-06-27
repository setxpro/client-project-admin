import { Dispatch, ReactNode, SetStateAction } from "react"

export type ChildrenProps = {
    children: ReactNode;
}

export type SidebarProps = {
    openSidebar: boolean;
    open: () => void;
}

export type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export type ToggleThemeProps = {
    toggleTheme: () => void;
}

export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
}