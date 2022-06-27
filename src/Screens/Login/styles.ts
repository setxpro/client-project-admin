import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: #253237;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 999;
`;
export const CardAreaLogin = styled.div`
    width: 35%;
    height: 500px;
    
    box-shadow: 1px 2px 15px #E0FBFC;
    border-radius: 1rem;

    background: #1111;

    form {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;

        .input-area {
            display: flex;
            flex-direction: column;

            position: relative;

            input {
                width: 400px;
                padding:  0 8px;
                outline: none;
                border: 0;
                border-bottom: 2px solid #E0FBFC;
                background: transparent;
                font-size: 1rem;
                color: #E0FBFC;

                &:focus ~ label,
                &:valid ~ label {
                    top: -15px;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all .5s ease;
                    color: lightblue;
                }
            }

            label {
                font-size: 1.3em;
                position: absolute;
                top: 8px;
                font-weight: bold;
                color: #E0FBFC;

                pointer-events: none;
                transition: .5s;
            }
        }

        button {
            padding: 10px 25px;
            cursor: pointer;
            font-weight: bold;
            border: 3px solid #E0FBFC;
            border-radius: 4px;
            background: transparent;
            color: #E0FBFC;
            margin-top: 2rem;

            transition: all .5s ease;
            &:hover {
                background: #E0FBFC;
                color: #333;
            }
        }
    }
`;
