import Navbar from "./elements/Navbar";
import Content from "./elements/Content";
import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={{
          body: {
            overflow: "hidden", // Disable scrolling
          },
        }}
      />
      <Box minH={"100vh"}>
        <Navbar />
        <Content />
      </Box>
    </>
  );
}

export default App;
