import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { VStack, Heading, Text, HStack, Badge } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Head";
import { AccessedInformationType, AccessLog } from "@/utils/types";
import { GetStaticPaths, GetServerSideProps } from "next";
import { PatientRecord } from "@/utils/types";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://codehack-2023-server.christopherhuk1.repl.co/dummy/1/getInfo");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Badges = ({ accessedInformation }: { accessedInformation: AccessedInformationType }) => {
  let Rows: React.ReactNode[] = [];
  Object.keys(accessedInformation).forEach((key) => {
    if (accessedInformation[key]) {
      Rows.push(
        <Badge
          variant="subtle"
          colorScheme="green"
          marginRight={2}
          key={key}
        >
          {key}
        </Badge>
      );
    }
  });

  return <div>{Rows}</div>;
};

export default function DetailView({ data }: { data: PatientRecord }) {
  const [details, setDetails] = useState<AccessLog>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const details = data.accessLogs.find((clinic) => clinic.visitID == id);
      setDetails(details);
    }
  }, [id]);

  return (
    <>
      {details && (
        <>
          <Header title="My HealthApp | Detail View" />
          <HStack
            w="100vw"
            h="100vh"
          >
            <Navbar
              name={data.legalName}
              tab="Professional"
            />

            <VStack
              w="80%"
              h="100vh"
              p={5}
              alignItems="flex-start"
              spacing={5}
            >
              <Heading size="xl">Visit Summary with {details.clinician} </Heading>
              <HStack>
                <Text
                  as="b"
                  w={200}
                >
                  Place
                </Text>
                <Text>{details.clinicName}</Text>
              </HStack>
              <HStack>
                <Text
                  as="b"
                  w={200}
                >
                  Speciality
                </Text>
                <Text>{details.clinicianSpecialty}</Text>
              </HStack>
              <HStack>
                <Text
                  as="b"
                  w={200}
                >
                  Date
                </Text>
                <Text>{details.accessTime}</Text>
              </HStack>
              <HStack>
                <Text
                  as="b"
                  w={200}
                >
                  Data Shared
                </Text>
                <HStack>
                  <Badges accessedInformation={details.accessedInformation} />
                </HStack>
              </HStack>
              <HStack>
                <Text
                  as="b"
                  w={200}
                >
                  Documents
                </Text>
                <Text></Text>
              </HStack>
            </VStack>
          </HStack>
        </>
      )}
    </>
  );
}
