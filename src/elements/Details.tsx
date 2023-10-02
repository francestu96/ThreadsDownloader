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
            {t("HOME.DETAILS.BENVENUTI")}
            </Text>
            <Text color="gray.700">
            {t("HOME.DETAILS.BENVENUTI-TEXT")}
            </Text>
          </VStack>
          <VStack mb="5" alignItems="start">
            <Text color="gray.700" fontWeight={500}>
            {t("HOME.DETAILS.COME-FARE")}
            </Text>
            <Text color="gray.700">
            {t("HOME.DETAILS.COME-FARE-TEXT")}
            </Text>
          </VStack>
          <VStack mb="5" alignItems="start">
            <Box color="gray.700" fontWeight={500}>
            {t("HOME.DETAILS.COMODITA")}
              <Box boxSize={[10, 12, 15, 20]} float="left" margin="20px 20px 0px 20px">
                <BsChatRightText size="auto" fill="#E53E3E"/>
              </Box>
              <Text color="gray.700" fontWeight={400}>
              {t("HOME.DETAILS.COMODITA-TEXT")}
              </Text>
            </Box>
          </VStack>
          <VStack alignItems="start">
            <Text color="gray.700" fontWeight={500}>
            {t("HOME.DETAILS.DOWN-TIP")}
            </Text>
            <Text color="gray.700">
            {t("HOME.DETAILS.DOWN-TIP-TEXT")}
            </Text>
          </VStack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Details;
