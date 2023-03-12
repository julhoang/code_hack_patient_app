import React from "react";
import { VStack, Button, Heading, Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Navbar({ name, tab }: { name: string; tab: string }) {
  const router = useRouter();

  return (
    <VStack
      w="20%"
      p={4}
      spacing={4}
      bgColor="gray.200"
      h="100%"
    >
      <Heading
        size="md"
        display="flex"
        alignItems={"center"}
      >
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <span style={{ marginLeft: "10px" }}>Hi, John</span>
      </Heading>
      <Button
        colorScheme="yellow"
        variant={tab === "Tab 1" ? "solid" : "outline"}
        onClick={() => router.push("/")}
        w="90%"
        marginBottom="10"
      >
        My Health
      </Button>
      <Button
        colorScheme="yellow"
        variant={tab === "Tab 2" ? "solid" : "outline"}
        onClick={() => router.push("/public")}
        w="90%"
        marginBottom="10"
      >
        Public View
      </Button>
      <Button
        colorScheme="yellow"
        variant={tab === "Tab 3" ? "solid" : "outline"}
        onClick={() => router.push("/professional")}
        w="90%"
      >
        Professional View
      </Button>
    </VStack>
  );
}
