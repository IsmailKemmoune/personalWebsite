import React from "react";
import { Box, chakra, Text } from "@chakra-ui/react";

export function ProjectsInfo({ name, description, techs }) {
  return (
    <Box>
      <Text color="#FCFF6C" marginLeft="40px">
        &#123;
      </Text>
      <Text color="#F4B0FF" marginLeft="55px">
        name : <chakra.span color="#C6FF9A">"{name}"</chakra.span>
      </Text>
      <Text color="#F4B0FF" marginLeft="55px">
        description : <chakra.span color="#C6FF9A">"{description}"</chakra.span>
      </Text>
      <Text color="#F4B0FF" marginLeft="55px">
        techs : <chakra.span color="#C6FF9A">"{techs}"</chakra.span>
      </Text>
      <Text color="#FCFF6C" marginLeft="40px">
        &#125;&#44;
      </Text>
    </Box>
  );
}
