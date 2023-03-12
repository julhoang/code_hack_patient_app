import React from "react";
import { VStack, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Navbar({ tab }: { tab: string }) {
  const router = useRouter();

  return (
    <VStack
      w="20%"
      p={4}
      spacing={4}
      bgColor="gray.200"
      h="100%"
    >
      <Heading size="md">MY ADMIN</Heading>
      <Button
        colorScheme="teal"
        variant={tab === "Tab 1" ? "solid" : "outline"}
        onClick={() => router.push("/")}
        w="90%"
        marginBottom="10"
      >
        Public View
      </Button>
      <Button
        colorScheme="teal"
        variant={tab === "Tab 2" ? "solid" : "outline"}
        onClick={() => router.push("/professional")}
        w="90%"
      >
        Professional View
      </Button>
    </VStack>
  );
}
