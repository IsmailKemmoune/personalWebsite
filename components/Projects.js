import React from "react";
import { ProjectsInfo } from "../components/ProjectsInfo";
import { Box, chakra, Flex, VStack, Text } from "@chakra-ui/react";

export function Projects() {
  const ProjectInfo = [
    {
      name: "Github Profile",
      description:
        "A github instant-search that diplays user-data on demand using github's REST API",
      techs: ["JavaScript", "React", "ChakraUI"],
    },
    {
      name: "Weather React",
      description:
        "A weather app that displays a 5-days forecast of a specified city, using axios and a public weather API.",
      techs: ["JavaScript", "React", "ChakraUI", "Axios"],
    },
    {
      name: "Tinder Clone",
      description:
        "Remake of Tinder's famous UI cards using Chakra and custom animations",
      techs: ["JavaScript", "React", "ChakraUI"],
    },
    {
      name: "Twitch Clone",
      description: "Twitch's profile page remake using ChakraUI (WIP)",
      techs: ["JavaScript", "React", "ChakraUI"],
    },
  ];

  return (
    <Flex w="100%" justifyContent="center">
      <Box bgColor="#131216" padding="20px">
        <VStack spacing="14px" alignItems="normal">
          <Text color="white" fontSize="30px" marginLeft="5px">
            &lt;projects&gt;
          </Text>
          <Text color="white">
            <chakra.span color="#FF3EEC" marginLeft="25px">
              const
            </chakra.span>
            &#160;Projects
            <chakra.span color="#FF3EEC"> = </chakra.span>[
          </Text>

          {ProjectInfo.map((project) => (
            <ProjectsInfo
              name={project.name}
              description={project.description}
              techs={project.techs}
            />
          ))}
          <Text color="white" paddingLeft="30px">
            &#93;&#59;
          </Text>
          <Text color="white" fontSize="30px" paddingLeft="5px">
            &lt;/projects&gt;
          </Text>
          <Text color="#7D7D7D" fontStyle="italic" paddingLeft="5px">
            <chakra.span letterSpacing="4px">//</chakra.span>More on my Github
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
