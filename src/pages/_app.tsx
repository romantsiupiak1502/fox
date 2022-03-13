import 'styles/index.css';
import type { AppProps } from 'next/app';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  require('mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
