import { IconContext } from 'react-icons';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Layout } from '~/components';
import { useActiveTheme } from '~/hooks/useActiveTheme';
import { Filter, Header, List, Notes } from '~/modules';
import { store } from '~/store';
import { GlobalStyle, ResetStyles, theme } from '~/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const { activeTheme, handleToggleTheme } = useActiveTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme[activeTheme]}>
        <IconContext.Provider value={{ color: theme[activeTheme].text }}>
          <Provider store={store}>
            <ResetStyles />
            <GlobalStyle />

            <Header onToggleTheme={handleToggleTheme} />

            <Layout>
              <Filter />
              <Notes />
              <List />
            </Layout>
          </Provider>
        </IconContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
