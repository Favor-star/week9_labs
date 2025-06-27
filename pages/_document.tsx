import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased w-full h-full max-w-screen min-h-screen px-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
