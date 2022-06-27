import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../Contexts/SidebarContext';
import { CalendarIcon, DashboardIcon, HistoricIcon, SalesIcon, TodoIcon } from '../../Styles/Icons/icons';

import * as C from './styles';

const Sidebar: React.FC = () => {
  const { open, openSidebar } = useContext(SidebarContext);

  return (
      <C.Container toggle={openSidebar}>
          <C.ContentToggle>
            {!openSidebar && <button onClick={open}><C.BtnOn/></button>}
            {openSidebar && <button onClick={open}><C.BtnOff/></button>}
          </C.ContentToggle>
          <C.ContentNav>
            <nav>
              <ul>
              <Link to="/">
                  <li>
                    {openSidebar ? 'Dashboard' : <DashboardIcon/>}
                  </li>
                </Link>
                <Link to="/sales">
                  <li>
                    {openSidebar ? 'Sales' : <SalesIcon/>}
                  </li>
                </Link>
                <Link to="/todo">
                  <li>
                    {openSidebar ? 'To-do' : <TodoIcon/>}
                  </li>
                </Link>
                <Link to="/calendar">
                  <li>
                    {openSidebar ? 'Calendar' : <CalendarIcon/>}
                  </li>
                </Link>
                <Link to="/historic">
                  <li>
                    {openSidebar ? 'Historic' : <HistoricIcon/>}
                  </li>
                </Link>
              </ul>
              <ul>
              <Link to="/">
                  <li>
                    {openSidebar ? 'Dashboard' : <DashboardIcon/>}
                  </li>
                </Link>
                <Link to="/sales">
                  <li>
                    {openSidebar ? 'Sales' : <SalesIcon/>}
                  </li>
                </Link>
                <Link to="/todo">
                  <li>
                    {openSidebar ? 'To-do' : <TodoIcon/>}
                  </li>
                </Link>
                <Link to="/calendar">
                  <li>
                    {openSidebar ? 'Calendar' : <CalendarIcon/>}
                  </li>
                </Link>
                <Link to="/historic">
                  <li>
                    {openSidebar ? 'Historic' : <HistoricIcon/>}
                  </li>
                </Link>
              </ul>
              <ul>
              <Link to="/">
                  <li>
                    {openSidebar ? 'Dashboard' : <DashboardIcon/>}
                  </li>
                </Link>
                <Link to="/sales">
                  <li>
                    {openSidebar ? 'Sales' : <SalesIcon/>}
                  </li>
                </Link>
                <Link to="/todo">
                  <li>
                    {openSidebar ? 'To-do' : <TodoIcon/>}
                  </li>
                </Link>
                <Link to="/calendar">
                  <li>
                    {openSidebar ? 'Calendar' : <CalendarIcon/>}
                  </li>
                </Link>
                <Link to="/historic">
                  <li>
                    {openSidebar ? 'Historic' : <HistoricIcon/>}
                  </li>
                </Link>
              </ul>
              <ul>
              <Link to="/">
                  <li>
                    {openSidebar ? 'Dashboard' : <DashboardIcon/>}
                  </li>
                </Link>
                <Link to="/sales">
                  <li>
                    {openSidebar ? 'Sales' : <SalesIcon/>}
                  </li>
                </Link>
                <Link to="/todo">
                  <li>
                    {openSidebar ? 'To-do' : <TodoIcon/>}
                  </li>
                </Link>
                <Link to="/calendar">
                  <li>
                    {openSidebar ? 'Calendar' : <CalendarIcon/>}
                  </li>
                </Link>
                <Link to="/historic">
                  <li>
                    {openSidebar ? 'Historic' : <HistoricIcon/>}
                  </li>
                </Link>
              </ul>
            </nav>
          </C.ContentNav>
      </C.Container>
  );
}

export default Sidebar;