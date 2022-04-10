import React from 'react';
import {Button, Menu, useTheme} from 'react-native-paper';
import {} from 'react-native';
import {BN, SearchInputTexts} from '../Constent';

const DropDwonButton = ({btnText, openMenu}) => {
  const theme = useTheme();
  return (
    <Button
      contentStyle={{flexDirection: 'row-reverse'}}
      style={{
        alignSelf: 'center',
        width: 180,
        alignItems: 'flex-end',
      }}
      icon="arrow-down-drop-circle-outline"
      labelStyle={{
        width: 140,
        fontSize: 20,
        fontFamily: BN,
        textAlign: 'right',
      }}
      mode="contained"
      onPress={openMenu}>
      {btnText}
    </Button>
  );
};

const DropdownMenu = ({onChange, placeholder, dataList}) => {
  const [menuVisiable, setM] = React.useState(false);

  function closeMenu() {
    setM(false);
  }
  function openMenu() {
    setM(true);
  }

  return (
    <Menu
      anchor={<DropDwonButton openMenu={openMenu} btnText={placeholder} />}
      visible={menuVisiable}
      onDismiss={closeMenu}>
      {dataList?.map(item => (
        <Menu.Item
          key={item}
          title={item}
          onPress={() => {
            onChange && onChange(item);
            closeMenu();
          }}
        />
      ))}
    </Menu>
  );
};

export default DropdownMenu;
