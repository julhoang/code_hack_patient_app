import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { AccessLog, PatientRecord } from "@/utils/types";
import { FiSearch } from "react-icons/fi";

const Row = ({ details, id }: { details: AccessLog; id: string }) => {
  const router = useRouter();

  return (
    <Tr>
      <Td>
        <Text>{details.clinicName}</Text>
      </Td>
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
          borderColor={"brands.blue"}
          color={"brands.blue"}
          onClick={() => router.push("/detail/" + id)}
        >
          View Details{" "}
          <FiArrowUpRight
            style={{ marginLeft: "10px" }}
            fontWeight="600"
          />
        </Button>
      </Td>
    </Tr>
  );
};

export default function VisitTable({ data }: { data: PatientRecord }) {
  return (
    <>
      <InputGroup marginTop={10}>
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="gray.300" />}
        />
        <Input
          type="text"
          placeholder={"Search by clinic, doctor, or date"}
          borderRadius="full"
        />
      </InputGroup>
      <TableContainer
        maxWidth="100%"
        marginTop={5}
      >
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Clinic</Th>
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
    </>
  );
}
