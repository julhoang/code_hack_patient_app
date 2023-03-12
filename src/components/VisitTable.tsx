import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/router";
import data from "@/utils/db";

const Row = ({ details, id }: { details: object; id: number }) => {
  const router = useRouter();
  const time = new Date(details.accessTime);
  return (
    <Tr>
      <Td>
        <Text>{details.clinician}</Text>
      </Td>
      <Td>
        <Text>{time.toString()}</Text>
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

export default function VisitTable() {
  return (
    <TableContainer
      maxWidth="100%"
      marginTop={10}
    >
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Place</Th>
            <Th>Date</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.accessLogs.map((value, index) => (
            <Row
              details={value}
              key={index}
              id={index}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
