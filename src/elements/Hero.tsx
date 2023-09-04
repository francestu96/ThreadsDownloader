import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Flex, VStack, Link, Stack, useBreakpointValue, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'
import axios from "axios";
import { useState } from "react";

const Hero = () => {
  const [url, setUrl] = useState<string>();

  async function downloadFile(url: string | undefined) {
    if(url){
      const res = await axios.get("/api/download?url=" + url, {responseType: 'blob'});
      const href = URL.createObjectURL(res.data);
      
      console.log(res)
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
    <Flex w={'full'} h={'60vh'} backgroundImage="hero.jpg" backgroundSize={'cover'} backgroundPosition={'center center'}>
      <VStack w={'full'} justifyContent="center" px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack textAlign="center" width="50%">
          <Text fontWeight={800} fontSize={["md", "2xl", "5xl"]}>
            Threads Downloader
          </Text>
          <Text fontWeight={700} fontSize={["sm", "xl", "2xl"]}>
            Download all your Threads contents in your favorite format!
          </Text>
          <InputGroup mt="12">
            <InputLeftElement pointerEvents='none'>
              <Search2Icon color='gray.300' />
            </InputLeftElement>
            <Input onChange={(e) => setUrl(e.target.value)} placeholder='Enter video URL' />
            <InputRightElement width="unset">
              <Button bg="main" _hover={{ bg: 'whiteAlpha.500', color: "black" }} onClick={() => downloadFile(url)}>Download</Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
