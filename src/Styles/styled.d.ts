import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            text: string;
            bar: string;
            buttons: string;
        }
    }
}