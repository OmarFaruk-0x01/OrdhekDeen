import React from 'react';
import {Card, Divider, useTheme} from 'react-native-paper';
import {View, Text} from 'react-native';
import {BN} from '../Constent';

const QuesAns = ({ques, ans}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: theme.colors.disabled,
        paddingVertical: 5,
      }}>
      <Text
        style={{
          fontSize: 23,
          color: theme.colors.text,
          paddingBottom: 7,
          fontFamily: BN,
        }}>
        {ques}
      </Text>
      <Text style={{fontSize: 20, color: '#555', fontFamily: BN}}>{ans}</Text>
    </View>
  );
};

const InfoBox = ({infoTitle}) => {
  const theme = useTheme();
  return (
    <Card
      style={{
        borderTopColor: theme.colors.primary,
        borderTopWidth: 2,
        marginVertical: 10,
        marginHorizontal: 5,
      }}>
      <Card.Title
        title={infoTitle}
        titleStyle={{
          textAlign: 'center',
          fontSize: 25,
          color: theme.colors.primary,
          //   borderWidth: 1,s
          margin: 0,
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          borderBottomColor: theme.colors.primary,
        }}
      />
      <Card.Content>
        <QuesAns ques={'স্থায়ী ঠিকানা?'} ans={'পিরোজপুর'} />
        <QuesAns
          ques={'স্নাতক / স্নাতক (সম্মান) / সমমান শিক্ষাগত যোগ্যতা'}
          ans={'BATHM Bachelor OF Arts tourism and hospitality management'}
        />
        <QuesAns
          ques={'নিজের সম্পর্কে কিছু লিখুন'}
          ans={
            'আমরা দুনিয়ায় কেন এসেছি?  এক শানদার আখিরাত বানানোর জন্য। তাই সুন্নতের উপর থেকে জীবন কাটাতে চাই।'
          }
        />
      </Card.Content>
    </Card>
  );
};

export default InfoBox;
