import { Button, Container, Heading, Box, Stack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Request from "./Request";
import { useEffect, useState } from "react";
import axios from "axios";
import JoinModal from "./JoinModal";
import CreateModal from "./CreateModal";

function HomePage() {
  let [isOpen, setIsOpen] = useState(false);
  let [isCreateOpen, setIsCreateOpen] = useState(false);
  let [currentId, setCurrentId] = useState(0);
  let [openRequests, setOpenRequests] = useState([]);
  useEffect(() => {
    //axios.get("http://localhost:3001/api/getAllOpenRequests").then((res) => {
    axios
      .get("https://api-teamfinder.herokuapp.com/api/getAllOpenRequests")
      .then((res) => {
        setOpenRequests(res.data);
      });
  }, []);
  let retrieveOpenRequests = () => {
    //axios.get("http://localhost:3001/api/getAllOpenRequests").then((res) => {
    axios
      .get("https://api-teamfinder.herokuapp.com/api/getAllOpenRequests")
      .then((res) => {
        setOpenRequests(res.data);
      });
  };
  let RequestList = (requests) => {
    return requests.map((request) => (
      <Request
        setCurrentId={setCurrentId}
        data={request}
        setIsOpen={setIsOpen}
        key={request.id}
      />
    ));
  };
  return (
    <>
      <JoinModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentId={currentId}
        retrieveOpenRequests={retrieveOpenRequests}
      />
      <CreateModal
        isOpen={isCreateOpen}
        setIsOpen={setIsCreateOpen}
        currentId={currentId}
        retrieveOpenRequests={retrieveOpenRequests}
      />
      <Container>
        <Box p={8}>
          <Heading style={{ textAlign: "center" }} onClick={() => {}}>
            TeamFinder
          </Heading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outline"
              onClick={() => {
                setIsCreateOpen(true);
              }}
            >
              Create
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              //href="http://localhost:3000/completedRequests"
              href="https://web-client-teamfinder.herokuapp.com/completedRequests"
              color="red"
              isExternal
            >
              Click here to view full teams.
            </Link>
          </div>
        </Box>

        <Stack spacing={8}>{RequestList(openRequests)}</Stack>
      </Container>
    </>
  );
}
export default HomePage;
