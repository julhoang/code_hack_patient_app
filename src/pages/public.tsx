import React, { useState } from "react";
import { Inter } from "next/font/google";
import {
  HStack,
  VStack,
  Heading,
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
import TextareaAutosize from "react-textarea-autosize";
import { GetStaticProps } from "next";
import { PatientRecord } from "@/utils/types";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://codehack-2023-server.christopherhuk1.repl.co/dummy/1/getInfo");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }: { data: PatientRecord }) => {
  const [editMode, setEditMode] = useState(false);
  const [notes, setNotes] = useState(data.notes);
  const [prevNotes, setPrevNotes] = useState(data.notes);

  async function handleEditModeToggleSave() {
    // send to /api/writeDB
    if (editMode && notes !== prevNotes) {
      try {
        const res = await fetch("/api/writeDB", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: notes }),
        });
        if (!res.ok) {
          throw new Error("Failed to save notes.");
        }
      } catch (error) {
        console.error(error);
      }
    }

    setPrevNotes(notes);
    setEditMode((prevEditMode) => !prevEditMode);
  }

  function handleCancel() {
    setEditMode((prevEditMode) => !prevEditMode);
    setNotes(prevNotes);
  }

  return (
    <>
      <Header title="My Healthcare" />

      <HStack
        w="100vw"
        h="100vh"
      >
        <Navbar
          name={data.legalName}
          tab={"Tab 1"}
        />
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

          <Box
            w="100%"
            h="100%"
          >
            <VStack
              w="80%"
              marginTop={5}
              spacing={5}
              alignItems="flex-start"
            >
              <Badge
                colorScheme="gray"
                fontSize={"lg"}
              >
                Read Only
              </Badge>

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

              <Divider />

              <Badge
                colorScheme="gray"
                fontSize={"lg"}
              >
                Editable
              </Badge>

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

              <HStack>
                <Button
                  onClick={handleEditModeToggleSave}
                  variant="solid"
                  colorScheme={editMode ? "blue" : "gray"}
                >
                  {editMode ? "Save" : "Edit"}
                </Button>

                {editMode ? (
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                ) : null}
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </>
  );
};

export default Home;
