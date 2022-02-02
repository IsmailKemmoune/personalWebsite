import React from "react";
import { VStack, Text, Flex, HStack, Image, Box } from "@chakra-ui/react";

export function About() {
  return (
    <Flex align="start">
      <Box bgColor="#121112" h="350" w="350px">
        <Image src="/assets/proverb.png" w="100%" objectFit="cover" />
      </Box>
      <HStack spacing="-10px">
        <VStack spacing="-60px">
          <Image
            src="/assets/planet1.svg"
            maxWidth="600px"
            //objectFit="fill"
            h="600px"
            boxSize="600px"
          />
          <Image
            src="/assets/planet2.svg"
            maxWidth="300px"
            //objectFit="fill"
            boxSize="200px"
            marginLeft="200px"
          />
        </VStack>
        <VStack spacing="20px" alignItems="flex-start" maxWidth="40vw">
          <Text fontSize="30px" color="#110F18">
            &lt;about&gt;
          </Text>
          <Text
            fontSize="23px"
            paddingRight="30px"
            paddingLeft="30px"
            color="#110F18"
          >
            Hi, my name is Ismail.km, I’m a management engineering and business
            consulting graduate who's passionate at web development, I’ve met
            amazing engineers that made me a much better developer, I like
            building creative websites, and learn new technologies.
          </Text>
          <Text fontSize="30px" color="#110F18">
            &lt;/about&gt;
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
}
