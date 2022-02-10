import "./App.css";
import { Box, Flex } from "@chakra-ui/react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Flex justifyContent='center'>
      <Flex direction='column' justifyContent='center' mt='44px'>
        <Box borderRadius='10px' overflow='hidden' w='317px' bg='#1A1B21'>
          <Header />
          <Main />
          <Footer />
        </Box>
      </Flex>
    </Flex>
  );
}
