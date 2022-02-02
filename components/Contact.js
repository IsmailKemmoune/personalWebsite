import React from "react";
import { Form } from "../components/Form";
import { VStack, Text, Flex, Image, Box, chakra } from "@chakra-ui/react";

export function Contact() {
  return (
    <Flex align="end">
      <VStack>
        <Text fontSize="30px" color="#110F18">
          &lt;contact&gt;
        </Text>
        <Text fontStyle="italic" color="#110F18">
          Feel free to send an e-mail on{" "}
          <chakra.span textDecoration="underline">
            i.kemmoune@gmail.com
          </chakra.span>
        </Text>
        <Text color="#110F18">
          Alternatively, you can laso drop-in a mail here!
        </Text>
        <Form />
        <Text fontSize="30px" color="#110F18">
          &lt;/contact&gt;
        </Text>
      </VStack>
      <Box bgColor="#121112" h="350" w="350px">
        <Image src="/assets/proverb.png" w="100%" objectFit="cover" />
      </Box>
    </Flex>
  );
}
