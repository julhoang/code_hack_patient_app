import React from "react";
import {
  VStack,
  Heading,
  Text,
  HStack,
  Badge,
  Divider,
  Box,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Head";
import { GetServerSideProps } from "next";
import { PatientRecord, AccessedInformationType, AccessLog } from "@/utils/types";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://codehack-2023-server.christopherhuk1.repl.co/dummy/1/getInfo");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function SingleCard({ title, content }: { title?: string; content?: string }) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{content}</Text>
      </CardBody>
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
}

function MainContent() {
  return (
    <SimpleGrid
      spacing={10}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      marginTop={10}
    >
      <SingleCard
        title="Medications"
        content="View your current and past medications."
      />
      <SingleCard
        title="Insurance"
        content="View your insurance information and claims."
      />
      <SingleCard
        title="Lab Results"
        content="View your lab results."
      />
      <SingleCard
        title="Hospital Visits"
        content="View your hospital visits and reports."
      />
      <SingleCard
        title="Immunizations"
        content="View your immunization records."
      />
      <SingleCard
        title="Clinician Visits"
        content="View your past clinic visits and records."
      />
      <SingleCard
        title="Advanced Care Planning"
        content="View and update your advance care planning preferences."
      />
    </SimpleGrid>
  );
}

export default function Overview({ data }: { data: PatientRecord }) {
  return (
    <>
      <Header title="My HealthApp | Overview" />

      <HStack
        w="100vw"
        h="100vh"
      >
        <Navbar
          name={data.legalName}
          tab="Tab 1"
        />

        <VStack
          w="80%"
          h="100vh"
          p={5}
          alignItems="flex-start"
        >
          <Heading size="xl">Overview</Heading>

          <Divider />

          <Box
            w="100%"
            h="100%"
            marginTop={5}
          >
            <MainContent />
          </Box>
        </VStack>
      </HStack>
    </>
  );
}
