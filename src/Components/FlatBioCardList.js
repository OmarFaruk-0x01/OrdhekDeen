import React from 'react';
import {View, FlatList, Animated} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

import {Biodatas, BN} from '../Constent';

import FlatBioCard from './FlatBioCard';

const VISIABLE_ITEMS = 3;
const CARD_PER_PAGE = 5;
const TotalPage = Math.ceil(Biodatas.length / CARD_PER_PAGE);

const FlatBioCardList = () => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [page, setPage] = React.useState(1);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <FlatList
          data={Biodatas.slice(0, CARD_PER_PAGE * page)}
          keyExtractor={(item, index) => (item.bio_no + index).toString()}
          style={{flex: 1}}
          removeClippedSubviews={false}
          renderItem={({item, index}) => {
            return <FlatBioCard bioData={item} />;
          }}
          onEndReachedThreshold={16}
          onEndReached={() => {
            setPage(page + 1);
          }}
        />
      </View>
    </View>
  );
};
export default FlatBioCardList;
