import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Image } from '@chakra-ui/react';
import Select, { StylesConfig, ValueContainerProps, components } from 'react-select';

const styles: StylesConfig = {
  control: (base) => ({...base, cursor: "pointer", border: "none", boxShadow: 'none', gridArea: "unset"}),
  valueContainer: (base) => ({...base, input: { height: "0" }})
}

const ValueContainer = ({ children, ...props}: ValueContainerProps) => {
  return (
    <components.ValueContainer {...props}>
      { props.getValue()[0] 
        ? <Image src={'locales/' + (props.getValue()[0] as any).value + ".svg"} style={{ width: 30 }} alt={(props.getValue()[0] as any).value + " flag"}/> 
        : null 
      }
      {children}
    </components.ValueContainer>
  );
};

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    <Image src={'locales/' + props.data.value + ".svg"} style={{ width: 30 }} alt={props.data.value + " flag"}/>
  </Option>
);
 
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const locales = router.locales ?? [i18n.language]; 
  const [language, setLanguage] = useState(i18n.language);
 
  return (
    <Select 
      value={{value: language}} 
      components={{ValueContainer, Option: IconOption, DropdownIndicator:() => null, IndicatorSeparator:() => null }}
      isSearchable={false}
      styles={styles}
      options={locales.map((locale) => ({value: locale}))}
      onChange={(e: any) => {router.push({ pathname: router.pathname, query: router.query }, undefined, { locale: e.value }); setLanguage(e.value)}}
    />
  );
};

export default LanguageSwitcher;