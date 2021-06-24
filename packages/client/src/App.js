import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./HomePage";
function App({ Component }) {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
