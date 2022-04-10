import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
  useTheme,
} from 'react-native-paper';
import Home from './Screens/Home';
import {LogBox} from 'react-native';
import BiodataListScreen from './Screens/BioDataListScreen';
import {BN, BN_Style, fontConfig} from './Constent';
import BioDetailsScreen from './Screens/BioDetailsScreen';
LogBox.ignoreAllLogs();
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import {Logo, BackgroundImage, LogoBW} from './Constent/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
enableScreens();
const Stack = createSharedElementStackNavigator();
const Drawer = createDrawerNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8A0C8D',
    accent: '#A62182',
    primarySarface: '#8A0C8D9f',
  },
  mode: 'exct',
  fonts: configureFonts(fontConfig),
};

const MainDrawer = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BioList" component={BiodataListScreen} />
      <Stack.Screen
        name="BioDetails"
        component={BioDetailsScreen}
        options={() => ({
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {opacity: progress},
          }),
        })}
        sharedElements={(route, otherRoute, showing) => {
          const {bioData} = route.params;
          return [
            `item.${bioData.bio_no}.image`,
            `item.${bioData.bio_no}.profile`,
            `item.${bioData.bio_no}.text`,
          ];
        }}
      />
    </Stack.Navigator>
  );
};

const CustomDrawer = props => {
  const width = useWindowDimensions().width * 0.29;
  const theme = useTheme();
  console.log(JSON.stringify(props, 3));
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        margin: 0,
        padding: 0,
        marginTop: 0,
        paddingTop: 0,
      }}
      style={{padding: 0, margin: 0, paddingTop: 0}}>
      <View
        style={{
          padding: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            width: '100%',
            height: 180,
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={BackgroundImage}
            style={{
              position: 'absolute',
              top: -5,
              width: '100%',
              height: '100%',
            }}
            resizeMethod="resize"
          />
          <Image
            source={LogoBW}
            style={{
              position: 'absolute',
              top: 0,
              width: 150,
              height: '100%',
            }}
            resizeMode="center"
            resizeMethod="scale"
          />
        </View>
        {props.state.routes.map((route, index) => {
          const {options} = props.descriptors[route.key];
          console.log(options);
          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.7}
              onPress={() => {
                props.navigation.navigate(route.name);
              }}>
              <View
                style={{
                  width: width,
                  margin: 3,
                  height: width,
                  backgroundColor:
                    props.state.index == index
                      ? theme.colors.primary
                      : theme.colors.primarySarface,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={options.iconName} color={'#fff'} size={50} />
                <Text
                  style={{
                    fontSize: 23,
                    fontFamily: BN,
                    color: '#fff',
                    textAlign: 'center',
                  }}>
                  {options.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{headerShown: false}}>
          <Drawer.Screen
            name="Main"
            options={{title: 'হোম', iconName: 'home'}}
            component={MainDrawer}
          />
          <Drawer.Screen
            name="AboutUs"
            options={{title: 'আমাদের সম্পর্কে', iconName: 'info'}}
            component={MainDrawer}
          />
          <Drawer.Screen
            name="Tutorial"
            options={{title: 'টিউটোরিয়াল', iconName: 'videocamera'}}
            component={MainDrawer}
          />
          <Drawer.Screen
            name="FAQ"
            options={{title: 'প্রশ্ন ও উত্তর', iconName: 'question'}}
            component={MainDrawer}
          />
          <Drawer.Screen
            name="ContactUs"
            options={{title: 'যোগাযোগ', iconName: 'customerservice'}}
            component={MainDrawer}
          />
        </Drawer.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
