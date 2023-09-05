import { Box, HStack, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import SubNav, { ISubNav } from './SubNav';

const NavItem: FC<ISubNav> = ({ label, children, href, src }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.400');
  const linkActiveColor = useColorModeValue('gray.800', 'white');
  const router = useRouter();
  const isCurrentPath = router.asPath === href || (href !== '/' && router.pathname.startsWith(href || '') && !src);

  return (
    <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
        <Box>
          <Box
            fontSize={17}
            fontWeight={500}
            color={isCurrentPath ? linkActiveColor : linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkActiveColor,
            }}
            cursor="pointer"
          >
            {children ? (
              <HStack gap="1">
                <Text>{label}</Text>
                <ChevronDownIcon />
              </HStack>
            ) : src ? (
                <Link target="_blank" href={src} _hover={{textDecoration: 'none'}}>
                  {label}
                </Link>
            ) :
            (
              <NextLink href={href || '/'} legacyBehavior>
                <Link _hover={{textDecoration: 'none'}}>
                  {label}
                </Link>
              </NextLink>
            )}
          </Box>
        </Box>
      </PopoverTrigger>

      {children && (
        <PopoverContent border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'}>
          <Stack>
            {children.map((child: any) => (
              <SubNav key={child.label} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default NavItem;
