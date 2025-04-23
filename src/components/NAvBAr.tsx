import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-icon.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NAvBAr = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NAvBAr;
