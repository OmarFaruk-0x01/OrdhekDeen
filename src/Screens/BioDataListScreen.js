import React from 'react';
import {View, FlatList, Animated} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import AppHeader from '../Components/AppHeader';
import BioCard from '../Components/BioCard';
import {Biodatas, BN} from '../Constent';
import FlatBioCardList from '../Components/FlatBioCardList';
import BioCardList from '../Components/BioCardList';

const VISIABLE_ITEMS = 3;
const CARD_PER_PAGE = 5;
const TotalPage = Math.ceil(Biodatas.length / CARD_PER_PAGE);

const BiodataListScreen = () => {
  const [isList, setIsList] = React.useState(true);
  function renderList() {
    if (isList) {
      return <FlatBioCardList />;
    } else {
      return <BioCardList />;
    }
  }
  return (
    <>
      <AppHeader isList={isList} setIsList={setIsList} />

      {renderList()}
    </>
  );
};

export default BiodataListScreen;
