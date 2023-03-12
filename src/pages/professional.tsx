import Navbar from "@/components/Navbar";
import Header from "@/components/Head";
import { HStack, VStack, Heading, Text, Divider, Box } from "@chakra-ui/react";
import VisitTable from "@/components/VisitTable";
import { GetStaticProps } from "next";
// import data from "@/utils/db";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://codehack-2023-server.christopherhuk1.repl.co/dummy/1/getInfo");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default function ProfessionalPage({ data }) {
  return (
    <>
      <Header title="My HealthApp | Professional View" />

      <HStack
        w="100vw"
        h="100vh"
      >
        <Navbar tab="Tab 2" />

        <VStack
          w="80%"
          h="100vh"
          p={5}
          alignItems="flex-start"
        >
          <Heading size="xl">
            Data you've shared with <span>healthcare professionals</span>
          </Heading>
          <Text>{data.legalName}</Text>

          <Divider />

          <Box
            w="100%"
            h="100%"
          >
            <VisitTable />
          </Box>
        </VStack>
      </HStack>
    </>
  );
}
