import styled from 'styled-components';

import { IoIosRadioButtonOff } from 'react-icons/io';
import { IoIosRadioButtonOn } from 'react-icons/io';

export const Container = styled.div<{toggle: boolean}>`
    transition: all 1s ease;
    width: ${props => props.toggle ? '18%' : '5%'};
    height: 100vh;
    padding: 5px;
    background: ${props => props.theme.colors.secondary};


    button {
        height: 15px;
        background: transparent;
        border: none;
    }
  
`;

export const ContentToggle = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 3rem;
`;

export const BtnOff = styled(IoIosRadioButtonOff)`
    font-size: 1.5rem;

    color: ${props => props.theme.colors.bar};
    cursor: pointer;
`;
export const BtnOn = styled(IoIosRadioButtonOn)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.bar};
    cursor: pointer;
`;

export const ContentNav = styled.div`
    width: 100%;
    height: 540px;
    margin-top: 1rem;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #FFF;
    }

    nav {

        ul {

            a {

                text-decoration: none;
                font-size: 1.5em;
                color: ${props => props.theme.colors.text};

                li {
                    margin: 5px 0;
                    padding: 5px 15px;

                    transition: all 1s ease;

                    &:hover {
                        background: #8888;
                    }
                }
            }
        }
    }
`;