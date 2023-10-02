import { Flex, VStack, Stack, SimpleGrid } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { LiaTelegramPlane } from "react-icons/lia";
import { TbFreeRights } from "react-icons/tb";
import { BsSpeedometer } from "react-icons/bs";
import { BsShieldFillCheck } from "react-icons/bs";
import { ImInfinite } from "react-icons/im";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { LuMonitorSmartphone } from "react-icons/lu";


const Description = () => {
  const { t } = useTranslation();

  return (
    <Flex w={'full'}>
      <VStack w={'full'} p="10">
        <Stack textAlign="center">
          <Text fontWeight={800} fontSize={["md", "2xl", "5xl"]}>
            ThreadsBro
          </Text>
          <Text fontWeight={700} fontSize={["sm", "xl", "2xl"]}>
            {t("HOME.HERO.TITLE")}
          </Text>
        </Stack>
        <SimpleGrid minChildWidth={["50%", "40%", "35%", "30%"]} spacing="2" width={["95%", "90%", "85%", "80%"]} mt={["0", "5", "7", "10"]} fontSize={["xs", "sm", "md", "md"]} textAlign="center">
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <TbFreeRights size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
             {t("HOME.DESCRIPTION.FREE")}
            </Text>
            <Text>
              {t("HOME.DESCRIPTION.FREE-TEXT")}
            </Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <BsSpeedometer size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
              {t("HOME.DESCRIPTION.QUICK")}
            </Text>
            <Text>
              {t("HOME.DESCRIPTION.QUICK-TEXT")}
            </Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <BsShieldFillCheck size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
            {t("HOME.DESCRIPTION.SICURE")}
            </Text>
            <Text>{t("HOME.DESCRIPTION.SICURE-TEXT")}</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <ImInfinite size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
            {t("HOME.DESCRIPTION.NO-LIMITS")}
            </Text>
            <Text>{t("HOME.DESCRIPTION.NO-LIMITS-TEXT")}</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            < MdOutlineUnsubscribe size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
            {t("HOME.DESCRIPTION.NO-REGISTRATION")}
            </Text>
            <Text>{t("HOME.DESCRIPTION.NO-REGISTRATION-TEXT")}</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <LuMonitorSmartphone size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
            {t("HOME.DESCRIPTION.COMPATIBLE")}
            </Text>
            <Text>{t("HOME.DESCRIPTION.COMPATIBLE-TEXT")}</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default Description;
