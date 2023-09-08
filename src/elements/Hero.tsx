import { Search2Icon } from "@chakra-ui/icons";
import { Button, Flex, VStack, Stack, useBreakpointValue, Input, InputGroup, InputLeftElement, InputRightElement, HStack, Select } from "@chakra-ui/react";
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
    <Flex w={'full'} h={'60vh'} backgroundImage="/hero.jpg">
      <VStack w={'full'} justifyContent="center" px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack textAlign="center" width={["80%", "70%", "60%", "50%"]} bgColor="gray.200" p="7" borderRadius="lg">
          <Text color="gray.700" fontWeight={800} fontSize={["md", "2xl", "5xl"]}>
            Threads Downloader
          </Text>
          <Text color="gray.700" fontWeight={700} fontSize={["sm", "xl", "2xl"]}>
            {t("hero")}
          </Text>
          <VStack mt="5" display={["flex", "flex", "flex", "none"]}>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <Search2Icon/>
              </InputLeftElement>
              <Input onChange={(e) => setUrl(e.target.value)} placeholder={t("placeholder")} fontSize="xs" backgroundColor="gray.700"/>
            </InputGroup>
            <HStack gap="0">
              <Select borderRightRadius="none" iconSize="0" width="unset" cursor="pointer" bgColor="messenger.700" fontWeight="400" border="unset">
                <option style={{ backgroundColor: 'white', color: 'black' }}>MP4</option>
                <option style={{ backgroundColor: 'white', color: 'black' }}>MP3</option>
              </Select>
              <Button borderLeftRadius="none" bg="red.500" _hover={{ bg: 'whiteAlpha.500', color: "black" }} onClick={() => downloadFile(url)}>{t("download")}</Button>
            </HStack>
          </VStack>
          <InputGroup mt="10" display={["none", "none", "none", "flex"]}>
            <InputLeftElement pointerEvents='none'>
              <Search2Icon />
            </InputLeftElement>
            <Input onChange={(e) => setUrl(e.target.value)} placeholder={t("placeholder")} backgroundColor="gray.700"/>
            <InputRightElement width="unset">
              <HStack gap="0">
                <Select borderRadius="unset" iconSize="0" width="unset" cursor="pointer" bgColor="messenger.700" fontWeight="400" border="unset">
                  <option style={{ backgroundColor: 'white', color: 'black' }}>MP4</option>
                  <option style={{ backgroundColor: 'white', color: 'black' }}>JPG</option>
                </Select>
                <Button borderLeftRadius="none" bg="red.500" _hover={{ bg: 'whiteAlpha.500', color: "black" }} onClick={() => downloadFile(url)}>{t("download")}</Button>
              </HStack>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
