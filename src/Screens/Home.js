import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  Button,
  Divider,
  Headline,
  Menu,
  Paragraph,
  useTheme,
} from 'react-native-paper';
import AppHeader from '../Components/AppHeader';
import DropdownMenu from '../Components/DropDownMenu';
import FormBox from '../Components/FormBox';
import {BN, BN_Style, HomeScreen_Haidis, SearchInputTexts} from '../Constent';
import {SwitchButton_Text} from '../Constent/index';

const Home = () => {
  const theme = useTheme();
  const [formType, setFormType] = React.useState(null);

  function toggleNormalForm() {
    setFormType(null);
  }
  function toggleBioForm() {
    setFormType('bio');
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <AppHeader transparent={true} />
      <Image
        resizeMethod="resize"
        style={{
          position: 'absolute',
          zIndex: -1,
          borderWidth: 1,
          height: 380,
          width: '120%',
          transform: [{translateX: -40}],
        }}
        fadeDuration={900}
        resizeMode="center"
        source={require('../../assets/images/mb-background.jpg')}
      />
      <Text
        style={{
          fontFamily: BN_Style,
          fontSize: 30,
          color: '#fff',
          width: 280,
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 25,
        }}>
        {HomeScreen_Haidis.hadis}
      </Text>
      <Paragraph
        style={{
          fontFamily: BN_Style,
          fontSize: 15,
          color: '#fff',
          width: 250,
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        {HomeScreen_Haidis.ref}
      </Paragraph>
      <Divider
        style={{width: '100%', height: 100, backgroundColor: 'transparent'}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          style={{
            borderColor: theme.colors.primary,
            backgroundColor: 'transparent',
            borderBottomWidth: formType == null ? 2 : 0,
            borderRadius: 0,
          }}
          onPress={toggleNormalForm}
          compact>
          {SwitchButton_Text.button1}
        </Button>
        <Button
          onPress={toggleBioForm}
          compact
          style={{
            borderColor: theme.colors.primary,
            backgroundColor: 'transparent',
            borderBottomWidth: formType !== null ? 2 : 0,
            borderRadius: 0,
          }}>
          {SwitchButton_Text.button2}
        </Button>
      </View>
      <FormBox type={formType} />
      <Divider style={{flex: 1, backgroundColor: '#fff'}} />
    </View>
  );
};

export default Home;
