import { Flex, VStack, Stack, Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { BsChatRightText } from "react-icons/bs";

const Details = () => {
  const { t } = useTranslation();

  return (
    <Flex w={'full'} backgroundImage="section-bg.png" backgroundSize="cover" backgroundPosition={["center", "center", "unset", "unset"]} backgroundColor="gray.200" justifyContent="center">
      <VStack w={["90%", "80%", "70%", "60%"]} p="10">
        <Stack fontSize={["md", "lg", "xl", "xl"]}>
          <VStack mb="5" textAlign="center">
            <Text color="gray.700" fontWeight={500} fontSize={["xl", "xl", "2xl", "2xl"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
            <Text color="gray.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            </Text>
          </VStack>
          <VStack mb="5" alignItems="start">
            <Text color="gray.700" fontWeight={500}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </Text>
            <Text color="gray.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </VStack>
          <VStack mb="5" alignItems="start">
            <Box color="gray.700" fontWeight={500}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              <Box boxSize={[10, 12, 15, 20]} float="left" margin="20px 20px 0px 20px">
                <BsChatRightText size="auto" fill="#E53E3E"/>
              </Box>
              <Text color="gray.700" fontWeight={400}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
            </Box>
          </VStack>
          <VStack alignItems="start">
            <Text color="gray.700" fontWeight={500}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </Text>
            <Text color="gray.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </VStack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Details;
