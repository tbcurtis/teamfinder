import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FullRequests from "./FullRequests";
import { Container, Heading, Box, Stack, Link } from "@chakra-ui/react";
function FullTeamsPage() {
  let [fullRequests, setFullRequests] = useState([]);
  useEffect(() => {
    //axios.get("http://localhost:3001/api/getAllFullRequests").then((res) => {
    axios
      .get("https://api-teamfinder.herokuapp.com/api/getAllFullRequests")
      .then((res) => {
        setFullRequests(res.data);
      });
  }, []);
  let RequestList = (requests) => {
    return requests.map((request) => (
      <FullRequests data={request} key={request.id} />
    ));
  };
  return (
    <Container>
      <Box p={8}>
        <Heading style={{ textAlign: "center" }} onClick={() => {}}>
          TeamFinder Full Teams
        </Heading>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <Link href="http://localhost:3000/" color="red" isExternal> */}
          <Link
            href="https://web-client-teamfinder.herokuapp.com/"
            color="red"
            isExternal
          >
            Click here to Create/Join a team
          </Link>
        </div>
      </Box>

      <Stack spacing={8}>{RequestList(fullRequests)}</Stack>
    </Container>
  );
}
export default FullTeamsPage;
