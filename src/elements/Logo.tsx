import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import Image from 'next/image';

const Logo = () => {
  return (
    <LinkBox h='45'>
      <LinkOverlay href="/">
          <Image src='/logo.png' height={45} width={80} alt="ThreadsDownloader logo"/>
      </LinkOverlay>
    </LinkBox>
  );
};

export default Logo;
