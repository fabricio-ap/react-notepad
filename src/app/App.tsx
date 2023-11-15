import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Header, Layout } from '~/components';
import { NoteList } from '~/modules';
import { store } from '~/store';
import { ResetStyles, theme } from '~/theme';
import { GlobalStyle } from '~/theme/global';

enum Theme {
  light = 'light',
  dark = 'dark',
}

type ThemeType = Theme.light | Theme.dark;

const queryClient = new QueryClient();

function App() {
  const [activeTheme, setActiveTheme] = useState<ThemeType>(Theme.light);

  console.log({ activeTheme });

  useEffect(() => {
    const storage = window.localStorage.getItem('theme') as ThemeType;
    storage && setActiveTheme(storage);
  }, []);

  const setMode = (mode: Theme.light | Theme.dark) => {
    window.localStorage.setItem('theme', mode);
    setActiveTheme(mode);
  };

  const toggleTheme = () => {
    activeTheme === 'light' ? setMode(Theme.dark) : setMode(Theme.light);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme[activeTheme]}>
        <IconContext.Provider value={{ color: theme[activeTheme].text }}>
          <Provider store={store}>
            <ResetStyles />
            <GlobalStyle />

            <Header onToggleTheme={toggleTheme} />

            <Layout>
              <NoteList />
            </Layout>
          </Provider>
        </IconContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
