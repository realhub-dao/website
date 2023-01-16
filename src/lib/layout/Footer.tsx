import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{" "}
        <Link
          href="https://realhub.finance"
          isExternal
          rel="noopener noreferrer"
        >
          RealHub DAO
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
