import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { AccessLog, PatientRecord } from "@/utils/types";

const Row = ({ details, id }: { details: AccessLog; id: string }) => {
  const router = useRouter();

  return (
    <Tr>
      <Td>
        <Text>{details.clinician}</Text>
      </Td>
      <Td>
        <Text>{details.accessTime}</Text>
      </Td>
      <Td>
        <Button
          size="md"
          variant="outline"
          colorScheme="facebook"
          onClick={() => router.push("/detail/" + id)}
        >
          View Details <FiArrowUpRight fontWeight="600" />
        </Button>
      </Td>
    </Tr>
  );
};

export default function VisitTable({ data }: { data: PatientRecord }) {
  return (
    <TableContainer
      maxWidth="100%"
      marginTop={5}
    >
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Doctor</Th>
            <Th>Date</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.accessLogs.map((value, index) => (
            <Row
              details={value}
              key={index}
              id={value.visitID}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
