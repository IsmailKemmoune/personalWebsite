import React from "react";
import { VStack, Text, Input, Box, chakra } from "@chakra-ui/react";

export function Form() {
  return (
    <Box
      bgColor="white"
      borderColor="#131216"
      border="1px"
      h="300px"
      w="500px"
      boxShadow="9px 9px 0px 1px #131216"
    >
      <VStack alignItems="normal" padding="15px">
        <Text color="#7D7D7D">
          <chakra.span letterSpacing="4px"> // </chakra.span>NAME
        </Text>
        <Input borderRadius="0px" borderColor="#131216" w="90%"></Input>
        <Text color="#7D7D7D">
          <chakra.span letterSpacing="4px">//</chakra.span> EMAIL
        </Text>
        <Input borderRadius="0px" borderColor="#131216" w="90%"></Input>
        <Text color="#7D7D7D">
          <chakra.span letterSpacing="4px">//</chakra.span>GMAIL
        </Text>
        <Input borderRadius="0px" borderColor="#131216" w="90%"></Input>
      </VStack>
    </Box>
  );
}
