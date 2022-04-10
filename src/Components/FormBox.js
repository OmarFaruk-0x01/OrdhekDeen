import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, useTheme, TextInput} from 'react-native-paper';
import DropdownMenu from './DropDownMenu';
import {BN, SearchInputTexts} from '../Constent';
import * as Animatable from 'react-native-animatable';
import {takeEntoBn} from '../Helpers/Functions';
import {useNavigation} from '@react-navigation/native';
const fadeIn = {
  from: {
    opacity: 0,
    transform: [{translateX: 100}],
  },
  to: {
    transform: [{translateX: 0}],
    opacity: 1,
  },
};
const FormBox = ({type}) => {
  const theme = useTheme();
  const nav = useNavigation();
  const [bioData, setBioData] = React.useState({
    [SearchInputTexts[0][0]]: SearchInputTexts[0][1][0],
    [SearchInputTexts[1][0]]: SearchInputTexts[1][1][0],
    [SearchInputTexts[2][0]]: SearchInputTexts[2][1][0],
  });
  console.log(bioData);
  const [bioNo, setBioNo] = React.useState('');
  if (type == 'bio') {
    return (
      <Animatable.View
        animation={fadeIn}
        style={{
          padding: 10,
          // backgroundColor: theme.colors.accent,
          margin: 10,
          borderRadius: 10,
          borderColor: theme.colors.accent,
          backgroundColor: '#fff',
          borderWidth: 2,
        }}>
        <TextInput
          keyboardType="phone-pad"
          mode="outlined"
          value={takeEntoBn(bioNo)}
          label="বায়োডাটা নং"
          style={{fontFamily: BN, fontSize: 17}}
          onChangeText={t => setBioNo(t)}
        />
        <Button
          compact
          mode="contained"
          labelStyle={{fontFamily: BN, fontSize: 23}}
          style={{marginTop: 10}}
          icon={({size, color}) => (
            <Image
              resizeMethod="scale"
              resizeMode="stretch"
              style={{
                width: size + 1,
                height: size + 1,
                tintColor: color,
                direction: 'rtl',
              }}
              source={require('../../assets/images/Search_Icon.png')}
            />
          )}>
          বায়োডাটা খুঁজুন
        </Button>
      </Animatable.View>
    );
  }
  return (
    <Animatable.View
      animation={fadeIn}
      style={{
        padding: 10,
        // backgroundColor: theme.colors.accent,
        margin: 10,
        borderRadius: 10,
        borderColor: theme.colors.accent,
        backgroundColor: '#fff',
        borderWidth: 2,
      }}>
      {SearchInputTexts.map(([KeyInfo, dataList], index) => (
        <View
          key={KeyInfo}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 4,
          }}>
          <Text
            style={{
              fontSize: 22,
              color: theme.colors.primary,
              fontFamily: BN,
            }}>
            {KeyInfo}
          </Text>
          <DropdownMenu
            onChange={item => {
              setBioData({...bioData, [KeyInfo]: item});
            }}
            dataList={dataList}
            placeholder={bioData[KeyInfo]}
          />
        </View>
      ))}
      <Button
        compact
        mode="contained"
        labelStyle={{fontFamily: BN, fontSize: 23}}
        style={{marginTop: 10}}
        onPress={() => {
          nav.navigate('BioList');
        }}
        icon={({size, color}) => (
          <Image
            resizeMethod="scale"
            resizeMode="stretch"
            style={{
              width: size + 1,
              height: size + 1,
              tintColor: color,
              direction: 'rtl',
            }}
            source={require('../../assets/images/Search_Icon.png')}
          />
        )}>
        বায়োডাটা খুঁজুন
      </Button>
    </Animatable.View>
  );
};

export default FormBox;
