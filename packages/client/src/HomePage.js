import { Container, Heading, Box, Stack, Center } from "@chakra-ui/react";
import Request from "./Request";

function HomePage() {
  return (
    <Container>
      <Box p={8}>
        <Heading style={{ textAlign: "Center" }}>TeamFinder</Heading>
      </Box>
      <Stack spacing={8}>
        <Request
          title="Create Request"
          desc="Create a request to find teammates "
        />
        <Request
          title="Save Money"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
        />
      </Stack>
    </Container>
  );
}
export default HomePage;
