import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../Contexts/AuthContext/RequireAuth';
import CalendarScreen from '../Screens/CalendarScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import HistoricScreen from '../Screens/HistoricScreen';
import Login from '../Screens/Login';
import SalesScreen from '../Screens/SalesScreen';
import TodoScreen from '../Screens/TodoScreen';

const GetRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path="*" element={<Login/>}/>
          <Route path='/' element={<RequireAuth><DashboardScreen/></RequireAuth>}/>
          <Route path='/sales' element={<RequireAuth><SalesScreen/></RequireAuth>}/>
          <Route path='/todo' element={<RequireAuth><TodoScreen/></RequireAuth>}/>
          <Route path='/calendar' element={<RequireAuth><CalendarScreen/></RequireAuth>}/>
          <Route path='/historic' element={<RequireAuth><HistoricScreen/></RequireAuth>}/>
      </Routes>
  );
}

export default GetRoutes;