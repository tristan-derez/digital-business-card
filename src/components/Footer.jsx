import { Flex, IconButton, Link } from "@chakra-ui/react";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoTwitch,
} from "react-icons/io5";

export default function Footer() {
  return (
    <Flex
      bg='#161619'
      h='64px'
      justifyContent='space-around'
      paddingY='20px'
      mt='24px'
      paddingX='72px'
    >
      <Link href='https://www.twitter.com/doreizu'>
        <IconButton
          aria-label='link to twitter profile'
          icon={<IoLogoTwitter />}
          fontSize='20px'
          size='xs'
          bg='#918E9B'
          color='#161619'
          borderRadius='3px'
        />
      </Link>
      <Link href='https://www.twitch.tv/dreyzu'>
        <IconButton
          aria-label='link to twitch channel'
          icon={<IoLogoTwitch />}
          fontSize='20px'
          bg='#918E9B'
          size='xs'
          color='#161619'
          borderRadius='3px'
        />
      </Link>
      <Link href='https://www.instagram.com/dreyzu/'>
        <IconButton
          aria-label='link to instagram profile'
          icon={<IoLogoInstagram />}
          fontSize='20px'
          bg='#918E9B'
          size='xs'
          color='#161619'
          borderRadius='3px'
        />
      </Link>
      <Link href='https://github.com/dreyzu'>
        <IconButton
          aria-label='link to github profile'
          icon={<IoLogoGithub />}
          fontSize='20px'
          bg='#918E9B'
          size='xs'
          color='#161619'
          borderRadius='3px'
        />
      </Link>
    </Flex>
  );
}
