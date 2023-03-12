import React from "react";
import { VStack, Button, Heading, Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiHome, FiUsers, FiGlobe } from "react-icons/fi";

export default function Navbar({ name, tab }: { name: string; tab: string }) {
  const router = useRouter();

  return (
    <VStack
      w="20%"
      p={4}
      spacing={4}
      h="100%"
      bg={"#Dde9fb"}
    >
      <Heading
        size="md"
        display="flex"
        alignItems={"center"}
        alignContent="flex-start"
        marginBottom={5}
      >
        <Avatar
          name="Dan Abrahmov"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
        />
        <span style={{ marginLeft: "10px" }}>Hi, Kate Wilson</span>
      </Heading>
      <Button
        bg={tab === "Tab 1" ? "brands.blue" : "#Dde9fb0"}
        variant={tab === "Tab 1" ? "solid" : "outline"}
        onClick={() => router.push("/")}
        w="90%"
        borderColor="black"
        color={tab === "Tab 1" ? "white" : "black"}
        justifyContent="flex-start"
        _hover={{ bg: "#4669ed" }}
      >
        <FiHome
          style={{ marginRight: "10px" }}
          size={20}
        />{" "}
        Overview
      </Button>

      <Button
        bg={tab === "Tab 2" ? "brands.blue" : "#Dde9fb0"}
        variant={tab === "Tab 2" ? "solid" : "outline"}
        onClick={() => router.push("/professional")}
        w="90%"
        borderColor="black"
        color={tab === "Tab 2" ? "white" : "black"}
        justifyContent="flex-start"
        _hover={{ bg: "#4669ed" }}
      >
        <FiUsers
          style={{ marginRight: "10px" }}
          size={20}
        />{" "}
        Professional View
      </Button>

      <Button
        bg={tab === "Tab 3" ? "brands.blue" : "#Dde9fb0"}
        variant={tab === "Tab 3" ? "solid" : "outline"}
        _hover={{ bg: "#4669ed" }}
        onClick={() => router.push("/public")}
        w="90%"
        marginBottom="10"
        borderColor="black"
        color={tab === "Tab 3" ? "white" : "black"}
        justifyContent="flex-start"
      >
        <FiGlobe
          style={{ marginRight: "10px" }}
          size={20}
        />{" "}
        Public View
      </Button>
    </VStack>
  );
}
