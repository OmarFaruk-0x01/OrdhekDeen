import React from 'react';
import {View, FlatList, Animated} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import AppHeader from './AppHeader';
import BioCard from './BioCard';
import {Biodatas, BN} from '../Constent';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';

const VISIABLE_ITEMS = 3;
const CARD_PER_PAGE = 5;
const TotalPage = Math.ceil(Biodatas.length / CARD_PER_PAGE);

const BioCardList = () => {
  const theme = useTheme();
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimation = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [items, setItems] = React.useState(
    Biodatas.slice(page * CARD_PER_PAGE - CARD_PER_PAGE, CARD_PER_PAGE * page),
  );
  const setActiveIndex = React.useCallback(activeIndex => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });

  const setPageItems = React.useCallback(activePageNumber => {
    setPage(activePageNumber);
  });
  React.useEffect(() => {
    Animated.spring(scrollXAnimation, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      key={'left'}
      direction={Directions.LEFT}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (index === Biodatas.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
          console.log('left: ', index, '\t', 'page: ', page);
          if (index + 2 === CARD_PER_PAGE * page) {
            if (page <= TotalPage) {
              setPageItems(page + 1);
            }
          }
        }
      }}>
      <FlingGestureHandler
        key={'right'}
        direction={Directions.RIGHT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.ACTIVE) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
            console.log('right: ', index, '\t', 'page: ', page);
            if (index + 1 === CARD_PER_PAGE * page - CARD_PER_PAGE) {
              if (page > 1) {
                setPageItems(page - 1);
              }
            }
          }
        }}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FlatList
              data={Biodatas.slice(0, CARD_PER_PAGE * page)}
              // extraData={index}
              horizontal
              maxToRenderPerBatch={5}
              inverted
              keyExtractor={(item, index) => {
                return item.key;
              }}
              scrollEnabled={false}
              removeClippedSubviews={false}
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                // alignItems: 'center',
                padding: 10,
              }}
              CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
              }) => {
                const newStyle = [style, {zIndex: Biodatas.length - index}];
                return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
                );
              }}
              renderItem={({item, index}) => {
                const inputRange = [index - 1, index, index + 1];
                const translateX = scrollXAnimation.interpolate({
                  inputRange,
                  outputRange: [50, 0, -300],
                });
                const scale = scrollXAnimation.interpolate({
                  inputRange,
                  outputRange: [0.8, 1, 1.3],
                });
                const opacity = scrollXAnimation.interpolate({
                  inputRange,
                  outputRange: [1 - 1 / VISIABLE_ITEMS, 1, 0],
                });

                return (
                  <BioCard
                    bioData={item}
                    extraStyle={{opacity, transform: [{translateX}, {scale}]}}
                  />
                );
              }}
            />
          </View>
          <Button
            style={{
              alignSelf: 'center',
              marginVertical: 10,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: theme.colors.primary,
              backgroundColor: '#fff',
            }}
            labelStyle={{
              fontFamily: BN,
              fontSize: 17,
              textDecorationLine: 'underline',
            }}>
            জীবনসঙ্গী নির্বাচনে ইসলামের নির্দেশনা
          </Button>
        </View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};
export default BioCardList;
