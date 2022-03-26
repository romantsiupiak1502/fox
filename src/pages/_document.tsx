import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="description" content="fox" />
      <body className="p-8 w-screen h-screen bg-cyan-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
