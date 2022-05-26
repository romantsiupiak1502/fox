import 'styles/index.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { NavBar, Footer } from 'components';
import { Wrapper } from './__components';

if (process.env['NEXT_PUBLIC_API_MOCKING'] === 'true') {
  require('mocks');
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
