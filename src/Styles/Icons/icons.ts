import styled from 'styled-components';

import  { BsFillPieChartFill } from 'react-icons/bs'
import  { MdMobileFriendly } from 'react-icons/md'
import  { BsClockHistory } from 'react-icons/bs'
import  { BsTable } from 'react-icons/bs'
import  { RiCalendarTodoLine } from 'react-icons/ri'
import  { IoCalendarClearOutline } from 'react-icons/io5'

export const DashboardIcon = styled(BsFillPieChartFill)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.6rem;
`;
export const SalesIcon = styled(MdMobileFriendly)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.6rem;
`;
export const HistoricIcon = styled(BsClockHistory)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.6rem;
`;
export const TableIcon = styled(BsTable)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.6rem;
`;
export const TodoIcon = styled(RiCalendarTodoLine)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.6rem;
`;
export const CalendarIcon = styled(IoCalendarClearOutline)`
    color: ${props => props.theme.colors.buttons};
    font-size: 1.6rem;
`;

