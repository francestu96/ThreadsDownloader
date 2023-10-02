import { Flex, Heading, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Default from 'templates/Default';
import { useTranslation } from 'next-i18next';

const TermsOfServicePage: NextPage = () => {
  const { t } = useTranslation();
  
  return (
    <Default pageName="ThreadsBro | Terms of Service">
      <Flex justifyContent="center">
        <VStack w={["90%", "80%", "75%", "70%"]} p="10" alignItems="start">
          <Heading>
            {t("TERMS-OF-SERVICE.HEAD")}
          </Heading>
          <Text>
            {t("TERMS-OF-SERVICE.HEAD-TEXT-1")}
            <br/><br/>
            {t("TERMS-OF-SERVICE.HEAD-TEXT-2")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("TERMS-OF-SERVICE.LICENCE")}
          </Heading>
          <Text>
          {t("TERMS-OF-SERVICE.LICENCE-TEXT")}
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              {t("TERMS-OF-SERVICE.CHECK1")}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              {t("TERMS-OF-SERVICE.CHECK2")}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              {t("TERMS-OF-SERVICE.CHECK3")}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              {t("TERMS-OF-SERVICE.CHECK4")}
            </ListItem>
          </List>
          <Text>
          {t("TERMS-OF-SERVICE.LICENCE-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("TERMS-OF-SERVICE.DISCLAIMER")}
          </Heading>
          <Text>
          {t("TERMS-OF-SERVICE.DISCLAIMER-TEXT")}.
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("TERMS-OF-SERVICE.LIMIT")}
          </Heading>
          <Text>
          {t("TERMS-OF-SERVICE.LIMIT-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("TERMS-OF-SERVICE.REV-ERRATA")}
          </Heading>
          <Text>
          {t("TERMS-OF-SERVICE.REV-ERRATA-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("TERMS-OF-SERVICE.LINKS")}
          </Heading>
          <Text>
          {t("TERMS-OF-SERVICE.LINKS-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("TERMS-OF-SERVICE.SITE-TERMS")}
          </Heading>
          <Text>
          {t("TERMS-OF-SERVICE.SITE-TERMS-TEXT")}
          </Text>
        </VStack>
      </Flex>
    </Default>
  );
};

export async function getStaticProps(context: any) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    }
  }
}

export default TermsOfServicePage;