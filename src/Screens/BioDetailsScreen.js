import React from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import AppHeader from '../Components/AppHeader';
import * as Animatable from 'react-native-animatable';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CardBG, BN, MaleImage, BN_Style, EN_Regular} from '../Constent';
import Icon from 'react-native-vector-icons/AntDesign';
import {SharedElement} from 'react-navigation-shared-element';
import {EN_Medium, EN_Light} from '../Constent/index';
import InfoBox from '../Components/InfoBox';

const InfoRow = ({Key, Value, delay}) => {
  const theme = useTheme();
  return (
    <Animatable.View
      animation={fadeFromDown}
      delay={delay}
      style={{
        paddingHorizontal: 10,
        marginVertical: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderRightWidth: 1,
          padding: 10,
          borderColor: theme.colors.primary,
          backgroundColor: theme.colors.primary,
          // marginHorizontal: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontFamily: BN,
            color: '#fff',
          }}>
          {Key}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          padding: 10,
          borderColor: theme.colors.primary,
          // marginHorizontal: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontFamily: BN,
            color: '#000',
          }}>
          {Value}
        </Text>
      </View>
    </Animatable.View>
  );
};

const fadeFromDown = {
  from: {
    opacity: 0,
    transform: [{translateY: 10}],
  },
  to: {
    opacity: 1,
    transform: [{translateY: 0}],
  },
};
const fadeFromUp = {
  from: {
    opacity: 0,
    transform: [{translateY: -10}],
  },
  to: {
    opacity: 1,
    transform: [{translateY: 0}],
  },
};

const BioDetailsScreen = () => {
  const theme = useTheme();
  const nav = useNavigation();
  const {
    params: {bioData},
  } = useRoute();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#fff'}}
      contentContainerStyle={{backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <SharedElement
            id={`item.${bioData.bio_no}.image`}
            style={{
              // position: 'absolute',
              width: '100%',
              height: 150,
              alignItems: 'center',
              justifyContent: 'flex-end',
              zIndex: -1,
            }}>
            <>
              <Image
                resizeMethod="scale"
                resizeMode="stretch"
                source={CardBG}
                style={{
                  top: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
              />
              <SharedElement id={`item.${bioData.bio_no}.text`}>
                <Animatable.Text
                  delay={100}
                  animation={fadeFromDown}
                  style={{
                    fontSize: 30,
                    fontFamily: BN,
                    left: 10,
                    color: '#fff',
                  }}>
                  বায়োডাটা নং
                </Animatable.Text>
              </SharedElement>
            </>
          </SharedElement>
          <SharedElement
            id={`item.${bioData.bio_no}.profile`}
            style={{
              width: 130,
              height: 130,
              position: 'absolute',
              top: 150 / 2,
              left: 5,
              zIndex: 100,
            }}>
            <Image
              source={MaleImage}
              style={{
                width: 130,
                height: 130,
              }}
            />
          </SharedElement>
        </View>

        <Animatable.Text
          delay={500}
          animation={fadeFromDown}
          style={{
            fontSize: 24,
            fontFamily: EN_Regular,
            marginBottom: 0,
            padding: 5,
            paddingHorizontal: 10,
            marginLeft: 135,
            color: '#000',
          }}>
          39421342
        </Animatable.Text>

        <Animatable.View animation={fadeFromDown} delay={500}>
          <Text
            style={{
              fontSize: 30,
              marginTop: 20,
              marginBottom: 10,
              textDecorationStyle: 'double',
              textDecorationLine: 'underline',
              textAlign: 'center',
              fontFamily: BN,
              color: theme.colors.primary,
            }}>
            বেক্তিগত তথ্য
          </Text>
          <View>
            <InfoRow
              delay={500}
              Key={'বায়োডাটার ধরন'}
              Value={'পাত্রের বায়োডাটা'}
            />
            <InfoRow delay={550} Key={'বৈবাহিক অবস্থা'} Value={'অবিবাহিত'} />
            <InfoRow delay={600} Key={'স্থায়ী ঠিকানা'} Value={'পিরোজপুর'} />
            <InfoRow delay={650} Key={'বিভাগ'} Value={'ঢাকা বিভাগ'} />
            <InfoRow delay={700} Key={'বর্তমান ঠিকানা'} Value={'পিরোজপুর'} />
            <InfoRow delay={750} Key={'বিভাগ'} Value={'বরিশাল বিভাগ'} />
            <InfoRow delay={800} Key={'জন্মসন (আসল)'} Value={'১৯৯৭'} />
            <InfoRow delay={850} Key={'গাত্রবর্ণ'} Value={'উজ্জ্বল শ্যামলা'} />
            <InfoRow delay={900} Key={'উচ্চতা'} Value={`৫'১১''`} />
            <InfoRow delay={950} Key={'ওজন'} Value={'৭৭ কেজি'} />
            <InfoRow delay={1000} Key={'রক্তের গ্রুপ'} Value={'A+'} />
            <InfoRow delay={1050} Key={'পেশা'} Value={'business'} />
          </View>
        </Animatable.View>
        <InfoBox infoTitle={'ঠিকানা'} />
        <InfoBox infoTitle={'ঠিকানা'} />
        <InfoBox infoTitle={'ঠিকানা'} />
        <InfoBox infoTitle={'ঠিকানা'} />
      </View>

      <TouchableOpacity
        onPress={() => nav.goBack()}
        style={{position: 'absolute', right: 10, top: 10}}>
        <Icon name="close" size={30} color={'#fff'} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BioDetailsScreen;
