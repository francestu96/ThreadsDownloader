import { Flex, VStack, Stack, SimpleGrid } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { LiaTelegramPlane } from "react-icons/lia";

const Description = () => {
  const { t } = useTranslation();

  return (
    <Flex w={'full'}>
      <VStack w={'full'} p="10">
        <Stack textAlign="center">
          <Text fontWeight={800} fontSize={["md", "2xl", "5xl"]}>
            Threads Downloader
          </Text>
          <Text fontWeight={700} fontSize={["sm", "xl", "2xl"]}>
            {t("hero")}
          </Text>
        </Stack>
        <SimpleGrid minChildWidth={["50%", "40%", "35%", "30%"]} spacing="2" width={["95%", "90%", "85%", "80%"]} mt={["0", "5", "7", "10"]} fontSize={["xs", "sm", "md", "md"]} textAlign="center">
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <LiaTelegramPlane size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
              Lorem ipsum dolor sit amet
            </Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <LiaTelegramPlane size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
              Lorem ipsum dolor sit amet
            </Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <LiaTelegramPlane size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
              Lorem ipsum dolor sit amet
            </Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <LiaTelegramPlane size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
              Lorem ipsum dolor sit amet
            </Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <LiaTelegramPlane size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
              Lorem ipsum dolor sit amet
            </Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <LiaTelegramPlane size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
              Lorem ipsum dolor sit amet
            </Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default Description;
