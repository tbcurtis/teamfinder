import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function JoinModal({ isOpen, setIsOpen, currentId, retrieveOpenRequests }) {
  let [usernameInput, setUsernameInput] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Join team</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="user"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              axios
                .post(
                  "https://api-teamfinder.herokuapp.com/api/acceptRequest",
                  {
                    id: currentId,
                    playername: usernameInput,
                  }
                )
                .then((res) => {
                  setIsOpen(false);
                  setUsernameInput("");
                  retrieveOpenRequests();
                });
            }}
          >
            Join
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
              setUsernameInput("");
            }}
          >
            Cancel{" "}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default JoinModal;
