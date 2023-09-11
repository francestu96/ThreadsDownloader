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
            How we use collected information
          </Heading>
          <Text>
            ThreadsMate.com does not collect or store your data, period.
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Advertising
          </Heading>
          <Text>
            Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Google Adsense
          </Heading>
          <Text>
            Some of the ads may be served by Google. Google's use of the DART cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet. DART uses "non personally identifiable information" and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at https://policies.google.com/technologies/ads
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Changes to this privacy policy
          </Heading>
          <Text>
            ThreadsMate.com has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site, revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Your acceptance of these terms
          </Heading>
          <Text>
            By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
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