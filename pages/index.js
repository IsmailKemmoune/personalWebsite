import React from "react";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack position="0px">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </VStack>
  );
}
