import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="description" content="fox" />
      <body className="w-screen h-screen bg-background flex justify-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
