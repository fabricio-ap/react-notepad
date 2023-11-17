import { useState } from 'react';
import { IconContext } from 'react-icons';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Header, Layout } from '~/components';
import { Notes } from '~/modules';
import { store } from '~/store';
import { GlobalStyle, ResetStyles, theme } from '~/theme';
import { ThemeEnum, ThemeType } from '~/types/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const initialTheme = (window.localStorage.getItem('theme') as ThemeType) || ThemeEnum.light;

function App() {
  const [activeTheme, setActiveTheme] = useState<ThemeType>(initialTheme);

  const handleToggleTheme = () => {
    activeTheme === 'light' ? setMode(ThemeEnum.dark) : setMode(ThemeEnum.light);
  };

  const setMode = (mode: ThemeType) => {
    window.localStorage.setItem('theme', mode);
    setActiveTheme(mode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme[activeTheme]}>
        <IconContext.Provider value={{ color: theme[activeTheme].text }}>
          <Provider store={store}>
            <ResetStyles />
            <GlobalStyle />

            <Header onToggleTheme={handleToggleTheme} />

            <Layout>
              <Notes />
            </Layout>
          </Provider>
        </IconContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
