import styled from 'styled-components';

import { AiOutlineMail } from 'react-icons/ai';
import { RiTodoLine } from 'react-icons/ri';
import { AiOutlineCalendar } from 'react-icons/ai';

import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';

import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';

export const Container = styled.div`
    width: 98%;
    height: 60px;
    transition: all 1s ease;
    background: ${props => props.theme.colors.secondary}; 
    position: static;
    top: 0;
    margin: auto;

    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

export const ContentLeft = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    gap: 1rem;
`;
export const ContentRight = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ContentMail = styled.div`
    position: relative;
    > div {
        &::before {
            content: '55';
            width: 15px;
            height: 15px;
            background: #F00;

            position: absolute;
            top: -5px;
            right: -10px;
            
            border-radius: 50%;
            transition: all 1s ease;
            border: 3px solid ${props => props.theme.colors.secondary};

            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFFF;
            font-size: .8em;
            font-weight: bold;
        }
    }
`;

export const ContentBell = styled.div`
    position: relative;

    > div {

        &::after {
            content: '10';
            padding: 2px;
            height: 10px;
            width: 10px;
            background: #444DDD;
            position: absolute;
            top: -1px;
            right: -5px;
            border-radius: 50%;
            transition: all 1s ease;
            border: 2px solid ${props => props.theme.colors.secondary};

            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFFF;
            font-size: .8em;
            font-weight: bold;
        }
    }
`;

export const ContentSearch = styled.div<{mode:boolean}>`
    display: flex;
    align-items: center;

    input { 
        transition: all 1s ease;
        width: ${props => props.mode ? '200px' : '0px'};
        opacity: ${props => props.mode ? '1' : '0'};
        padding: 2px;
        font-size: 1rem;
        border: 0;
        border-bottom: 1px solid #FEFE;
        outline: none;
        
        color: #FFF;
        background: transparent;
    }
`;

export const ContentAvatar = styled.div`
    > div {
        position: relative;

        &::after {
            content: '';
            width: 15px;
            height: 15px;
            background: green;

            position: absolute;
            right: 0px;
            bottom: 5px;

            transition: all 1s ease;
            border: 3px solid  ${props => props.theme.colors.secondary};
            border-radius: 50%;
        }

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
`;


export const MailIcon = styled(AiOutlineMail)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const TodoIcon = styled(RiTodoLine)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const CalendarIcon = styled(AiOutlineCalendar)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.8rem;
    cursor: pointer;
`;

export const SearchIcon = styled(AiOutlineSearch)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const BellIcon = styled(AiOutlineBell)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.8rem;
    cursor: pointer;
`;

export const LightIcon = styled(MdOutlineLightMode)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const DarkIcon = styled(MdOutlineNightlight)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const LogoutIcon = styled(AiOutlineLogout)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.8rem;
    cursor: pointer;
`;