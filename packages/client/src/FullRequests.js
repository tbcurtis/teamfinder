import { Box, Heading, Text } from "@chakra-ui/react";

function FullRequests({ data }) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      style={{ textAlign: "center" }}
    >
      <Heading fontSize="xl">Team #{data.id}</Heading>
      <Text mt={4}>{data.creator}</Text>
      <Text mt={4}>{data.player1}</Text>
      <Text mt={4}>{data.player2}</Text>
      <Text mt={4}>{data.player3}</Text>
    </Box>
  );
}
export default FullRequests;
