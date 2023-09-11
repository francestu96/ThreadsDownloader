import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Logo from './Logo';
import Link from 'next/link';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <HStack>
              <Logo/>
              <Text pt={'10px'} fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color='red.500'>ThreadsDownloader</Text>
            </HStack>
            <Text fontSize={'sm'}>
              © 2023 ThreadsDownloader. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Telegram'} href={'https://t.me/+cQnNYlOtA8ZiYjA0'}>
                <FaTelegram />
              </SocialButton>
              <SocialButton label={'Discord'} href={'https://discord.com/channels/1149786155223621693/1149786155223621696'}>
                <FaDiscord />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>About us</ListHeader>
            <Link href={'/privacy-policy'}>Privacy Policy</Link>
            <Link href={'/terms-of-service'}>Terms of Service</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'https://t.me/+cQnNYlOtA8ZiYjA0'}>Telegram</Link>
            <Link href={'https://discord.com/channels/1149786155223621693/1149786155223621696'}>Discord</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input placeholder={'Your email address'} bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} border={0} _focus={{   bg: 'whiteAlpha.300', }}/>
              <IconButton bg='red.500' aria-label="Subscribe" icon={<BiMailSend />}/>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}