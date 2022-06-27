import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const Content = styled.div`
    width: 98%;
    height: calc(100vh - 80px);
    transition: all 1s ease;
    background: ${props => props.theme.colors.secondary};
    margin: auto;
    margin-top: 1rem;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #FFF;
    }
`;
export const ContentHeader = styled.div`
    display: flex;
`;
export const ContentAreaMain = styled.div`
    width: 100%;
`;
