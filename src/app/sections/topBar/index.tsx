import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";

const TopBar = () => {
  return (
    <Box
      bg="gray.200"
      p="1.5"
      boxShadow="md"
      position="fixed"
      w="100vw"
      zIndex="99"
    >
      <Flex justifyContent="space-between" alignItems="center" mx="6">
        <Heading fontSize="2xl">CHEYMA BAHROUN</Heading>
        <Stack direction="row" spacing={22} align="center">
          <Button colorScheme="teal" variant="ghost">
            me
          </Button>
          <Button colorScheme="teal" variant="ghost">
            walah me
          </Button>
          <Button colorScheme="teal" variant="ghost">
            me again
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Button
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default TopBar;
