import { Avatar, Box, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Header = () => {
  const [compteur, setCompteur] = useState(0);
  return (
    <Box px={{ base: 1, md: 6, lg: 12 }}>
      <Stack alignItems="center" pt="12" direction={{base:"column", md:"row"}} spacing="20">
        <Avatar h={{base:"48", md:"64"}} w={{base:"48", md:"64"}} name="Cheyma Bahroun" src="./me.jpg" />
        <Box>
          <Heading>CHEYMA BH</Heading>
          <Heading as="h2" fontSize="2xl">
            Software Engineer
          </Heading>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
