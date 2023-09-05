import { Search2Icon } from "@chakra-ui/icons";
import { Button, Flex, VStack, Stack, useBreakpointValue, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { useState } from "react";
import { useTranslation } from 'next-i18next'
import axios from "axios";

const Hero = () => {
  const { t } = useTranslation()
  const [url, setUrl] = useState<string>();

  async function downloadFile(url: string | undefined) {
    if(url){
      const res = await axios.get("/api/download?url=" + url, {responseType: 'blob'});
      const href = URL.createObjectURL(res.data);
      
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', res.headers['content-disposition'].split('filename=')[1] || "uname");
      document.body.appendChild(link);
      link.click();
  
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    }
  };

  return (
    <Flex w={'full'} h={'60vh'} backgroundImage="hero.jpg">
      <VStack w={'full'} justifyContent="center" px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack textAlign="center" width="50%" bgColor="white" p="7" borderRadius="lg">
          <Text color="gray.700" fontWeight={800} fontSize={["md", "2xl", "5xl"]}>
            Threads Downloader
          </Text>
          <Text color="gray.700" fontWeight={700} fontSize={["sm", "xl", "2xl"]}>
            {t("hero")}
          </Text>
          <InputGroup mt="12">
            <InputLeftElement pointerEvents='none'>
              <Search2Icon color='gray.300' />
            </InputLeftElement>
            <Input onChange={(e) => setUrl(e.target.value)} placeholder={t("placeholder")} />
            <InputRightElement width="unset">
              <Button borderLeftRadius="none" bg="main" color="white" _hover={{ bg: 'whiteAlpha.500', color: "black" }} onClick={() => downloadFile(url)}>{t("download")}</Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
