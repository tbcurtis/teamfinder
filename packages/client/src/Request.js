import { Box, Button, Heading, Text } from "@chakra-ui/react";

function Request({ data, setIsOpen, setCurrentId }) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      style={{ textAlign: "center" }}
    >
      <Heading fontSize="xl">
        {data.creator} is looking for teammates in Team #{data.id}
      </Heading>
      <Text mt={4}>{data.player1 || "Needs Player"}</Text>
      <Text mt={4}>{data.player2 || "Needs Player"}</Text>
      <Text mt={4}>{data.player3 || "Needs Player"}</Text>

      <Button
        colorScheme="blue"
        variant="outline"
        style={{ alignSelf: "right", marginTop: "1rem" }}
        onClick={() => {
          setCurrentId(data.id);
          setIsOpen(true);
        }}
      >
        Join Team
      </Button>
    </Box>
  );
}
export default Request;
