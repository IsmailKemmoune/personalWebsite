import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { IconButton, HStack, Text, Flex } from "@chakra-ui/react";

export function Navbar() {
  return (
    <Flex
      bgColor="#121112"
      //position="fixed"
      alignItems="center"
      justifyContent="space-between"
      w="100vw"
      h="60px"
    >
      <Text color="white" marginLeft="30px" fontFamily="" fontSize="30px">
        .km()
      </Text>
      <HStack spacing="50px" marginRight="30px">
        <Text color="white" fontSize="25px">
          .about()
        </Text>
        <Text color="white" fontSize="25px">
          .projects()
        </Text>
        <Text color="white" fontSize="25px">
          .contact()
        </Text>
        <IconButton
          aria-label="github"
          icon={<AiFillGithub />}
          bgColor="transparent"
          color="white"
          fontSize="30px"
          _hover={{ bgColor: "transparent" }}
        />
        <IconButton
          aria-label="twitter"
          icon={<AiOutlineTwitter />}
          bgColor="transparent"
          color="white"
          fontSize="30px"
          _hover={{ bgColor: "transparent" }}
          _focus={{ border: "transparent", bgColor: "transparent" }}
        />
        <IconButton
          aria-label="linkedin"
          icon={<GrLinkedinOption />}
          bgColor="transparent"
          color="white"
          fontSize="30px"
          _hover={{ bgColor: "transparent" }}
        />
      </HStack>
    </Flex>
  );
}
