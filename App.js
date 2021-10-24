/* Robert Vanderhost Jr
   Shopping List version 1
   ITN263 Moble App Development
   September 11, 2021 */



import React from 'react';
import { KeyboardAvoidingView, Platform, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import List from './components/List'

export default function App() {

  
  return (
    <View style={styles.container}>
      

      {/* Shopping List */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Shopping List</Text>

        <View style={styles.items}>
      
          {/*This is where the itemes and pictures are added and sized!*/}
          <Image
          style={{ width: 35, height: 30, marginLeft: 10}}
          source={require('./img/bananas.png')}
          />
          <List text={'Bananas'}
          />

          <Image
          style={{ width: 30, height: 38, marginLeft: 10, marginBottom: 5}}
          source={require('./img/milk1.png')}
          />  
          <List text={'Milk'}/>

          <Image
          style={{ width: 40, height: 30, marginLeft: 10, marginBottom: 5}}
          source={require('./img/bread2.png')}
          />
          
          <List text={'Bread'}/>

          <Image
          style={{ width: 40, height: 35, marginLeft: 10, marginBottom: 5}}
          source={require('./img/flour2.png')}
          />
          <List text={'Flour'}/>

          <Image
          style={{ width: 47, height: 35, marginLeft: 5, marginBottom: 5}}
          source={require('./img/sugar1.png')}
          />
          <List text={'Sugar'}/>

          <Image
          style={{ width: 47, height: 35, marginLeft: 10, marginBottom: 5}}
          source={require('./img/eggs1.png')}
          />
          <List text={'Eggs'}
          />
          
           
        
        </View>
        

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  
sectionTitle: {
  fontSize: 24,
  
  fontWeight: 'bold'
},
items: {
  marginTop: 30,
},
writeTaskWrapper: {
  position: 'absolute'
},
input: {},
addWrapper: {},
addText: {},
});
