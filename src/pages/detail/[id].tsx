import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { VStack, Heading, Text, HStack, Badge } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Head";
import data from "@/utils/db";

const Badges = ({ accessedInformation }: { accessedInformation: AccessedInformationType }) => {
  let Rows = [];
  Object.keys(accessedInformation).forEach((key) => {
    if (accessedInformation[key] == true) {
      Rows.push(
        <Badge
          variant="subtle"
          colorScheme="green"
        >
          {key}
        </Badge>
      );
    }
  });

  return Rows;
};

type AccessLogsType = {
  visitID: string;
  clinicID: string;
  accessTime: string;
  clinicName: string;
  clinicLocation: string;
  clinicPhone: string;
  clinician: string;
  clinicianSpecialty: string;
  accessedInformation: AccessedInformationType;
};

type AccessedInformationType = {
  Medication: boolean;
  Insurance: boolean;
  Alergies: boolean;
  Conditions: boolean;
  "Lab Results": boolean;
  "Radiology Results": boolean;
  "Hospital Reports": boolean;
  "Involved Clinicians": boolean;
  "Clinic Visit Notes": boolean;
  "Advanced Care Planning": boolean;
};

export default function DetailView() {
  const [details, setDetails] = useState<AccessLogsType>(undefined);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id !== undefined) {
      setDetails(data.accessLogs[parseInt(id)]);
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
            <Navbar tab="Professional" />

            <VStack
              w="80%"
              h="100vh"
              p={5}
              alignItems="flex-start"
              spacing={5}
            >
              <Heading size="xl">Visit Record with {details.clinician} </Heading>
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
                  Visit Summary
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
