import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Link, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, transition } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Default from 'templates/Default';
import { useTranslation } from 'next-i18next';

const FaqPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Default pageName="ThreadsBro | F.A.Q.">
      <Flex w={'full'} h={'20vh'} backgroundImage="/faq-banner.jpg" backgroundSize="cover" justify="center" align="center">
        <Text color="white" fontWeight={600} fontSize={["md", "2xl", "5xl"]} >
        {t("FAQ.HEAD")}
        </Text>
      </Flex>
      <Flex justify="center" py="10" h="fit-content">
        <Tabs borderWidth='2px' rounded='lg' p={["2", "3", "5", "6"]} variant='soft-rounded' isFitted w={["90%", "70%", "60%", "50%"]} boxShadow="0px 0px 15px 5px rgba(0,0,0,0.5)" colorScheme="red">
          <TabList>
            <Tab fontWeight='bold' fontSize={["xs", "md"]}>{t("FAQ.BUTTON-A")}</Tab>
            <Tab fontWeight='bold' fontSize={["xs", "md"]}>{t("FAQ.BUTTON-B")}</Tab>
          </TabList>
          <TabPanels fontSize={["xs", "md"]}>
            <TabPanel>
              <Accordion>
                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-1A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-1A")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-2A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-2A")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-3A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-3A")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-4A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-4A")}
                  </AccordionPanel>
                </AccordionItem>

                

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-5A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-5A")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-6A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-6A")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-7A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-7A")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-8A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-8A")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-9A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-9A")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-10A")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-10A")}
                  </AccordionPanel>
                </AccordionItem>

              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion>
                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-1B")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-1B")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-2B")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-2B")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-3B")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-3B")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-4B")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-4B")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-5B")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-5B")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-6B")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-6B")}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                      {t("FAQ.QUEST-7B")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                  {t("FAQ.RESP-7B")}
                  </AccordionPanel>
                </AccordionItem>

              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
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

export default FaqPage;