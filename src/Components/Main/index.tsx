import React from 'react';
import GetRoutes from '../../Routes';
import { ToggleThemeProps } from '../../Types';
import Header from '../Header';
import Sidebar from '../Sidebar';

import * as C from './styles';

const Main: React.FC<ToggleThemeProps> = ({toggleTheme}) => {
  return (
      <C.Container>
          <C.ContentHeader>
                <Sidebar/>
                <C.ContentAreaMain>
                    <Header toggleTheme={toggleTheme}/>
                    <C.Content>
                        <GetRoutes/>
                    </C.Content>
                </C.ContentAreaMain>
          </C.ContentHeader>
      </C.Container>
  );
}

export default Main;