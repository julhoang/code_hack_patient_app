import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import myTheme from "@/styles/myTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
