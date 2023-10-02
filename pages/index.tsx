import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Default from 'templates/Default';
import Home from 'templates/Home';

const HomePage: NextPage = () => {
  return (
    <Default pageName="ThreadsBro | Home">
      <Home/>
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

export default HomePage;