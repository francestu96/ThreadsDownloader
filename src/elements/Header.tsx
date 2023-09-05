import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon, Icon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, useColorModeValue, VStack, useDisclosure, Text, Slide, Button, Popover, PopoverTrigger, PopoverContent, Stack, Link, Center } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'
import { ISubNav } from './SubNav';
import Logo from './Logo';
import NavItem from './NavItem';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_LINKS: ISubNav[] = [
  { label: 'Home', href: '/' },
  { label: 'F.A.Q.', href: '/#faq' },
  {
    label: 'Support',
    href: '#',
    children: [
      {
        label: 'Telegram',
        subLabel: 'Follow us on Telegram',
        href: 'https://t.me/',
        logo: '/telegram.png',
      },
      {
        label: 'Twitter',
        subLabel: 'Follow us on Twitter',
        href: 'https://twitter.com/',
        logo: '/twitter.webp',
      },
    ],
  }
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const linkColor =  useColorModeValue('green.50', 'gray.900');

  return (
    <Box borderBottom="1px" borderBottomColor="chakra-border-color" p='10px 20%'>
      <Flex justify="space-between" display={['none', 'none', 'none','flex']}>
        <Logo />
        <HStack gap={'15px'} alignItems="center">
          <HStack mr="15">
            {NAV_LINKS.map((link) => (
              <NavItem key={`link-${link.label}`} {...link} />
            ))}
          </HStack>
          <LanguageSwitcher></LanguageSwitcher>
        </HStack>
      </Flex>

      <Flex align="center" justify="space-between" display={['flex', 'flex', 'flex','none']}>
        <Logo />
        <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon/>} onClick={onToggle}/>
      </Flex> 

      <Slide in={isOpen} transition={{"enter": {duration: 0.5}, "exit": {duration: 0.5}}} style={{ zIndex: 10 }}>
        <Flex w='100vw' bgColor={useColorModeValue('white', 'gray.800')} h="100vh" flexDir="column">
          <Flex justify="flex-end">
          <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg" icon={<CloseIcon/>}onClick={onToggle}/>
        </Flex>
          <VStack gap={'15px'}>
            <HStack gap={'10px'}>
              <Button size="lg" backgroundColor="main">Sign In</Button> 
            </HStack>
            {NAV_LINKS.map((link) => (
              <NavItem key={`link-${link.label}`} {...link} />
            ))}
          </VStack>
        </Flex>   
      </Slide> 
    </Box>
  );
};

export default Header;
