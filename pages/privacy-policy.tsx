import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Default from 'templates/Default';

const PrivacyPolicyPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Default pageName="ThreadsDownloader | Privacy Policy">
      <Flex justifyContent="center">
        <VStack w={["90%", "80%", "75%", "70%"]} p="10" alignItems="start">
          <Heading>
            {t("PRIVACY-POLICY.HEAD")}
          </Heading>
          <Text>
            {t("PRIVACY-POLICY.HEAD-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
            {t("PRIVACY-POLICY.PERS-ID")}
          </Heading>
          <Text>
            {t("PRIVACY-POLICY.PERS-ID-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
            {t("PRIVACY-POLICY.NON-PERS-ID")}
          </Heading>
          <Text>
            {t("PRIVACY-POLICY.NON-PERS-ID-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
            {t("PRIVACY-POLICY.COOKIES")}
          </Heading>
          <Text>
            {t("PRIVACY-POLICY.COOKIES-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("PRIVACY-POLICY.INFORMATION")}
          </Heading>
          <Text>
          {t("PRIVACY-POLICY.INFORMATION-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("PRIVACY-POLICY.ADV")}
          </Heading>
          <Text>
          {t("PRIVACY-POLICY.ADV-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("PRIVACY-POLICY.ADSENSE")}
          </Heading>
          <Text>
          {t("PRIVACY-POLICY.ADSENSE-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("PRIVACY-POLICY.CHANGES-POLICY")}
          </Heading>
          <Text>
          {t("PRIVACY-POLICY.CHANGES-POLICY-TEXT")}
          </Text>
          <Heading as="h6" size="lg" mt="10">
          {t("PRIVACY-POLICY.YOUR-ACCEPT")}
          </Heading>
          <Text>
          {t("PRIVACY-POLICY.YOUR-ACCEPT-TEXT")}
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

export default PrivacyPolicyPage;