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
            Threads Downloader
          </Text>
          <Text fontWeight={700} fontSize={["sm", "xl", "2xl"]}>
            {t("HOME.HERO.TITLE")}
          </Text>
        </Stack>
        <SimpleGrid minChildWidth={["50%", "40%", "35%", "30%"]} spacing="2" width={["95%", "90%", "85%", "80%"]} mt={["0", "5", "7", "10"]} fontSize={["xs", "sm", "md", "md"]} textAlign="center">
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <TbFreeRights size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
             {t("HOME.DESCRIPTION.GRATIS")}
            </Text>
            <Text>
              {t("HOME.DESCRIPTION.GRATIS-TEXT")}
            </Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <BsSpeedometer size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
              {t("HOME.DESCRIPTION.VELOCE")}
            </Text>
            <Text>
              {t("HOME.DESCRIPTION.VELOCE-TEXT")}
            </Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <BsShieldFillCheck size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
            {t("HOME.DESCRIPTION.SICURO")}
            </Text>
            <Text>{t("HOME.DESCRIPTION.SICURO-TEXT")}</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <ImInfinite size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
            {t("HOME.DESCRIPTION.NESSUN-LIMITE")}
            </Text>
            <Text>{t("HOME.DESCRIPTION.NESSUN-LIMITE-TEXT")}</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            < MdOutlineUnsubscribe size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
            {t("HOME.DESCRIPTION.NESSUNA-REGISTRAZIONE")}
            </Text>
            <Text>{t("HOME.DESCRIPTION.NESSUNA-REGISTRAZIONE-TEXT")}</Text>
          </VStack>
          <VStack _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5);", cursor: "pointer"}} p="10">
            <LuMonitorSmartphone size={70}/>
            <Text fontSize={["sm", "md", "lg", "lg"]} fontWeight="600">
            {t("HOME.DESCRIPTION.COMPATIBILE")}
            </Text>
            <Text>{t("HOME.DESCRIPTION.COMPATIBILE-TEXT")}</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default Description;
