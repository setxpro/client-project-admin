import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { ToggleThemeProps } from '../../Types';

import * as C from './styles';

const Header: React.FC<ToggleThemeProps> = ({toggleTheme}) => {

  const { title } = useContext(ThemeContext);
  const auth = useContext(AuthContext);

  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => setOpenSearch(!openSearch);

  const handleLogout = async () => {
    const data = await auth.signOut();
    return data;
  }

  return (
      <C.Container>
          
          <C.ContentLeft>
            <C.ContentMail>
                <div>
                  <C.MailIcon/>
                </div>
            </C.ContentMail>
            <C.TodoIcon/>
            <C.CalendarIcon/>
          </C.ContentLeft>
          
          <C.ContentRight>
              
            <C.ContentSearch mode={openSearch}>
              <input 
                type="text" 
                name="search" 
                placeholder="Search..." 
              />
              <C.SearchIcon
                onClick={handleOpenSearch}
              />
            </C.ContentSearch>

            <C.ContentBell>
              <div>
                <C.BellIcon/>
              </div>
            </C.ContentBell>
            <div>
              {title === 'dark' && <C.LightIcon onClick={toggleTheme}/>}
              {title === 'light' && <C.DarkIcon onClick={toggleTheme}/>}
            </div>
            <div>
              <C.LogoutIcon onClick={handleLogout}/>
            </div>
            <C.ContentAvatar>
              <div>
                <img src="https://github.com/setxpro.png" alt=''/>
              </div>
            </C.ContentAvatar>
          </C.ContentRight>

      </C.Container>
  );
}

export default Header;