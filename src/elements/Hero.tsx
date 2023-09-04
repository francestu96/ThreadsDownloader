import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Flex, VStack, Link, Stack, useBreakpointValue, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'

const Hero = () => {
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
            <Input placeholder='Enter amount' />
            <InputRightElement>
              <CheckIcon color='green.500' />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
