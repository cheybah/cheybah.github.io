import { Avatar, Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Header = () => {
  const [compteur, setCompteur] = useState(0);
  return (
    <Box paddingTop="8" bg="purple.100" px={{ base: 1, md: 6, lg: 12 }}>
      <Stack
        alignItems="center"
        pt="12"
        direction={{ base: "column", md: "row" }}
        spacing="20"
      >
        <Avatar
          h={{ base: "48", md: "64" }}
          w={{ base: "48", md: "64" }}
          name="Cheyma Bahroun"
          src="./me.jpg"
        />
        <Box>
          <Heading>CHEYMA BAHROUN</Heading>
          <Heading mt="2" as="h2" fontSize="2xl">
            Software Engineer
          </Heading>
          <Text mt="5">A Software Engineering Student & Biologist</Text>
          <Button colorScheme="blue" mt="19" onClick={() => {}}>
            Contact Me 💕
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
