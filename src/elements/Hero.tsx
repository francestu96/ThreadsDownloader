import { Search2Icon } from "@chakra-ui/icons";
import { Button, Flex, VStack, Stack, useBreakpointValue, Input, InputGroup, InputLeftElement, InputRightElement, HStack, Select, useToast } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { useState } from "react";
import { useTranslation } from 'next-i18next'
import axios from "axios";

const Hero = () => {
  const toast = useToast();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [url, setUrl] = useState<string>();

  async function downloadFile(url: string | undefined) {
    if(url){
      try{
        const res = await axios.get("/api/download?url=" + url, {responseType: 'blob'});
        setIsLoading(false);
        toast({ description: "Download in progress!", status: 'success', duration: 3000, position: "top", isClosable: true});

        const href = URL.createObjectURL(res.data);
        
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', res.headers['content-disposition'].split('filename=')[1] || "uname");
        document.body.appendChild(link);
        link.click();
    
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      }
      catch (error: any){
        setIsLoading(false);
        toast({ description: await error.response.data.text(), status: 'error', duration: 3000, position: "top", isClosable: true});
      }
    }
    else{
      setIsLoading(false);
      toast({ description: "Missing URL", status: 'error', duration: 3000, position: "top", isClosable: true});
    }
  };

  return (
    <Flex w={'full'} h={'60vh'} backgroundImage="/hero.jpg">
      <VStack w={'full'} justifyContent="center" px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack textAlign="center" width={["80%", "70%", "60%", "50%"]} bgColor="gray.200" p="7" borderRadius="lg">
          <Text color="gray.700" fontWeight={800} fontSize={["md", "2xl", "5xl"]}>
            Threads Downloader
          </Text>
          <Text color="gray.700" fontWeight={700} fontSize={["sm", "xl", "2xl"]}>
            {t("HOME.HERO.TITLE")}
          </Text>
          <VStack mt="5" display={["flex", "flex", "flex", "none"]}>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <Search2Icon/>
              </InputLeftElement>
              <Input onChange={(e) => setUrl(e.target.value)} placeholder={t("HOME.HERO.PLACEHOLDER")} fontSize="xs" backgroundColor="gray.700"/>
            </InputGroup>
            <Button isLoading={isLoading} borderLeftRadius="none" bg="red.500" _hover={{ bg: 'whiteAlpha.500', color: "black" }} onClick={() => { setIsLoading(true); downloadFile(url) }}>{t("HOME.HERO.DOWNLOAD")}</Button>
          </VStack>
          <InputGroup mt="10" display={["none", "none", "none", "flex"]}>
            <InputLeftElement pointerEvents='none'>
              <Search2Icon />
            </InputLeftElement>
            <Input onChange={(e) => setUrl(e.target.value)} placeholder={t("HOME.HERO.PLACEHOLDER")} backgroundColor="gray.700"/>
            <InputRightElement width="unset">
              <Button isLoading={isLoading} borderLeftRadius="none" bg="red.500" _hover={{ bg: 'whiteAlpha.500', color: "black" }} onClick={() => { setIsLoading(true); downloadFile(url) }}>{t("HOME.HERO.DOWNLOAD")}</Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
