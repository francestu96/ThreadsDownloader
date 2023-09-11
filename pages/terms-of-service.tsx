import { Flex, Heading, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Default from 'templates/Default';
import { useTranslation } from 'next-i18next';

const TermsOfServicePage: NextPage = () => {
  const { t } = useTranslation();
  
  return (
    <Default pageName="ThreadsDownloader | Terms of Service">
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
            Use licence
          </Heading>
          <Text>
            Permission is granted to temporarily download one copy of the materials (information or software) on ThreadsMate.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Modify or copy the materials;
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Remove any copyright or other proprietary notations from the materials;
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Transfer the materials to another person or "mirror" the materials on any other server
            </ListItem>
          </List>
          <Text>
            We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Disclaimer
          </Heading>
          <Text>
            The materials on ThreadsMate.com's website are provided "as is". ThreadsMate.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, ThreadsMate.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Limitations
          </Heading>
          <Text>
            In no event shall ThreadsMate.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on ThreadsMate.com's Internet site, even if ThreadsMate.com or a ThreadsMate.com authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Revisions and Errata
          </Heading>
          <Text>
            The materials appearing on ThreadsMate.com's website could include technical, typographical, or photographic errors. ThreadsMate.com.com does not warrant that any of the materials on its web site are accurate, complete, or current. ThreadsMate.com may make changes to the materials contained on its web site at any time without notice. ThreadsMate.com does not, however, make any commitment to update the materials.
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Links
          </Heading>
          <Text>
            ThreadsMate.com has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ThreadsMate.com of the site. Use of any such linked web site is at the user's own risk.
          </Text>
          <Heading as="h6" size="lg" mt="10">
            Site Terms of Use Modifications
          </Heading>
          <Text>
            ThreadsMate.com may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use. General Terms and Conditions applicable to Use of a Web Site.
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