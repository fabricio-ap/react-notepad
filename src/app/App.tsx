import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Header, Layout } from '~/components';
import { useTheme } from '~/hooks';
import { NoteList } from '~/modules';
import { ResetStyles, theme } from '~/theme';
import { GlobalStyle } from '~/theme/global';

const queryClient = new QueryClient();

function App() {
  const { theme: activeTheme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme[activeTheme]}>
        <ResetStyles />
        <GlobalStyle />

        <Header />
        <Layout>
          <NoteList />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
