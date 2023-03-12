import { useState } from "react";
import { Inter } from "next/font/google";
import {
  HStack,
  VStack,
  Heading,
  Text,
  Divider,
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Badge,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Head";
import data from "@/utils/db";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [editMode, setEditMode] = useState(false);
  const [notes, setNotes] = useState(data.notes);

  const handleEditModeToggle = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  return (
    <>
      <Header title="My Healthcare" />

      <HStack
        w="100vw"
        h="100vh"
      >
        <Navbar tab={"Tab 1"} />
        <VStack
          w="80%"
          h="100vh"
          p={5}
          alignItems="flex-start"
        >
          <Heading size="xl">
            Data you are sharing with <span>the public</span>
          </Heading>

          <Divider />

          <Badge
            colorScheme={editMode ? "yellow" : "gray"}
            fontSize={"lg"}
          >
            {editMode ? "Editing Mode" : "Reading Mode"}
          </Badge>

          <Box
            w="100%"
            h="100%"
          >
            <VStack
              w="80%"
              marginTop={5}
              spacing={5}
            >
              <InputGroup>
                <InputLeftAddon
                  width={200}
                  children="Name"
                />
                <Input
                  type="text"
                  value={data.legalName}
                  readOnly
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon
                  width={200}
                  children="Date of Birth"
                />
                <Input
                  type="text"
                  value={data.dateOfBirth}
                  readOnly
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon
                  width={200}
                  children="My Notes"
                />
                <TextareaAutosize
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Leave any notes that might be helpful to the person who are trying to help you."
                  minRows={5}
                  readOnly={!editMode}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.25rem",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    color: "#4a5568",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    boxShadow: "inset 0 1px 1px rgba(0,0,0,0.075)",
                  }}
                />
              </InputGroup>

              <Button
                onClick={handleEditModeToggle}
                variant="solid"
              >
                {editMode ? "Save" : "Edit"}
              </Button>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </>
  );
}
