import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Layout from './Components/Layout';
import Main from './Components/Main';
import { SidebarProvider } from './Contexts/SidebarContext';
import usePersistedState from './Hooks/usePersistedState';
import dark from './Styles/theme/dark';
import light from './Styles/theme/light';

const App: React.FC = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <SidebarProvider>
        <Layout>
          <Main toggleTheme={toggleTheme}/>
        </Layout>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;