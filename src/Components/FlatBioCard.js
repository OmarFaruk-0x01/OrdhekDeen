import React from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Button,
  Card,
  DataTable,
  Divider,
  Headline,
  Paragraph,
  useTheme,
} from 'react-native-paper';
import {SharedElement} from 'react-navigation-shared-element';
import {EN_Regular} from '../Constent/index';
import {useNavigation} from '@react-navigation/native';

const BIOCARD_HIGHT_1 = 130;
const BIOCARD_WIDTH_1 = 280;
const RowItem = ({Key, value}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 6,
      }}>
      <Paragraph style={{flex: 1, fontSize: 22, color: theme.colors.primary}}>
        {Key}
      </Paragraph>
      <Divider style={{borderWidth: 0.8, width: 9, marginHorizontal: 10}} />
      <Paragraph style={{flex: 1, fontSize: 22, textAlign: 'right'}}>
        {value}
      </Paragraph>
    </View>
  );
};

const FlatBioCard = ({bioData}) => {
  const theme = useTheme();
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('BioDetails', {bioData});
      }}>
      <View
        style={{
          marginVertical: 5,
          marginHorizontal: 5,
          padding: 0,
          flexDirection: 'row',
          height: BIOCARD_HIGHT_1,

          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: '#fff',
          borderColor: theme.colors.primary,
        }}>
        <View
          style={{
            height: '100%',
            width: 130,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SharedElement
            id={`item.${bioData.bio_no}.image`}
            style={{position: 'absolute', width: '100%', height: '100%'}}>
            <Image
              resizeMethod="resize"
              resizeMode="stretch"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: 2,
              }}
              source={require('../../assets/images/cardbg.png')}
            />
          </SharedElement>
          <SharedElement
            id={`item.${bioData.bio_no}.profile`}
            style={{width: '50%', height: '50%'}}>
            <Image
              resizeMethod="resize"
              resizeMode="stretch"
              style={{width: '100%', height: '100%'}}
              source={require('../../assets/images/male.png')}
            />
          </SharedElement>
          <SharedElement id={`item.${bioData.bio_no}.text`}>
            <Paragraph style={{fontSize: 17, color: '#fff'}}>
              বায়োডাটা নং
            </Paragraph>
          </SharedElement>
          <Text style={{fontSize: 18, color: '#fff', fontFamily: EN_Regular}}>
            1234666644
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 5,
            borderBottomEndRadius: 5,
            borderTopEndRadius: 5,
          }}>
          <RowItem Key={'বৈবাহিক অবস্থা'} value={'অবিবাহিত'} />
          <RowItem Key={'জন্মসন'} value={'১৯৯৬'} />
          <RowItem Key={'পেশা'} value={'ছাত্রী'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(FlatBioCard);
