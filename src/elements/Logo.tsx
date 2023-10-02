import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <LinkBox h='45' cursor="pointer">
      <LinkOverlay as={Link} href="/">
          <Image src='/logo.png' height={45} width={80} alt="ThreadsBro logo"/>
      </LinkOverlay>
    </LinkBox>
  );
};

export default Logo;
