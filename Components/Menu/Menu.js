import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Card>
            <Card.Title style={{ fontSize: 24 }}>Завтрак</Card.Title>
            <Card.Divider />
            <Card.Title>Овсянка</Card.Title>
            <Card.Image
              source={{
                uri: 'https://cdn.profile.ru/wp-content/uploads/2021/03/Ovsyana-kasha-klubnika-oatmeal-porridge.jpg',
              }}
            ></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Card.Divider />
            <Card.Title>Яблоко</Card.Title>
            <Card.Image source={require('./apple.jpg')}></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Card.Divider />
            <Card.Title>Молоко</Card.Title>
            <Card.Image
              source={{
                uri: 'https://chesom.com/blog/wp-content/uploads/2019/11/milk.750.jpg',
              }}
            ></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Button
              icon={<Icon name="code" color="white" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#333',
              }}
              title="Check Food"
            />
          </Card>
          <Card>
            <Card.Title style={{ fontSize: 24 }}>Обед</Card.Title>
            <Card.Divider />
            <Card.Title>Овсянка</Card.Title>
            <Card.Image
              source={{
                uri: 'https://cdn.profile.ru/wp-content/uploads/2021/03/Ovsyana-kasha-klubnika-oatmeal-porridge.jpg',
              }}
            ></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Card.Divider />
            <Card.Title>Яблоко</Card.Title>
            <Card.Image source={require('./apple.jpg')}></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Card.Divider />
            <Card.Title>Молоко</Card.Title>
            <Card.Image
              source={{
                uri: 'https://chesom.com/blog/wp-content/uploads/2019/11/milk.750.jpg',
              }}
            ></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Button
              icon={<Icon name="code" color="white" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#333',
              }}
              title="Check Food"
            />
          </Card>
          <Card>
            <Card.Title style={{ fontSize: 24 }}>Ужин</Card.Title>
            <Card.Divider />
            <Card.Title>Овсянка</Card.Title>
            <Card.Image
              source={{
                uri: 'https://cdn.profile.ru/wp-content/uploads/2021/03/Ovsyana-kasha-klubnika-oatmeal-porridge.jpg',
              }}
            ></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Card.Divider />
            <Card.Title>Яблоко</Card.Title>
            <Card.Image source={require('./apple.jpg')}></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Card.Divider width={0.6} color={'grey'} />
            <Card.Title>Молоко</Card.Title>
            <Card.Image
              source={{
                uri: 'https://chesom.com/blog/wp-content/uploads/2019/11/milk.750.jpg',
              }}
            ></Card.Image>
            <View style={styles.textBlock}>
              <Text style={styles.text}>protein 20</Text>
              <Text style={styles.text}>carbohydrate 30</Text>
              <Text style={styles.text}>lipids 10</Text>
              <Text style={styles.text}>N/I 1.2</Text>
            </View>
            <Button
              icon={<Icon name="code" color="white" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: '#333',
              }}
              title="Check Food"
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: '#333',
    padding: 10,
  },
  text: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Menu;
