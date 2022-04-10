import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import {LogoBW, Logo} from '../Constent';

const AppHeader = ({transparent, isList, setIsList}) => {
  const theme = useTheme();
  const nav = useNavigation();

  function renderActions() {
    if (isList == undefined) {
      return;
    }
    return (
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Appbar.Action
          style={{
            padding: 0,
            width: 25,
            height: 25,
            backgroundColor: isList ? theme.colors.primary : '#fff',
          }}
          color={isList ? '#fff' : theme.colors.primary}
          icon="format-list-bulleted"
          onPress={() => {
            setIsList(true);
          }}
        />
        <Appbar.Action
          style={{
            padding: 0,
            width: 25,
            height: 25,
            backgroundColor: !isList ? theme.colors.primary : '#fff',
          }}
          color={!isList ? '#fff' : theme.colors.primary}
          icon="account-box"
          onPress={() => {
            setIsList(false);
          }}
        />
      </View>
    );
  }

  return (
    <Appbar.Header
      style={{
        backgroundColor: transparent ? 'transparent' : '#fff',
        elevation: transparent ? 0 : 5,
        alignItems: 'center',
        justifyContent: isList == undefined ? 'center' : 'space-between',
      }}>
      <Appbar.Action
        icon={!transparent ? 'chevron-double-left' : 'menu-open'}
        color={theme.colors.primary}
        onPress={() => {
          if (!transparent) {
            nav.goBack();
          } else {
            nav.openDrawer();
          }
        }}
        style={{
          position: isList == undefined ? 'absolute' : 'relative',
          left: isList == undefined ? (!transparent ? 0 : 3) : 0,
          top: isList == undefined ? (!transparent ? 3 : 2) : 0,
          backgroundColor: '#fff',
          borderColor: theme.colors.primary,
          borderWidth: transparent ? 3 : 0,
        }}
      />
      <Image
        source={transparent ? LogoBW : Logo}
        style={{width: 100, alignSelf: 'center'}}
        resizeMode="contain"
      />

      {renderActions()}
    </Appbar.Header>
  );
};

export default AppHeader;
