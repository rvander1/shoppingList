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
      
          
          <List text={'Bananas'}
          />
           
          <List text={'Milk'}/>
         
          
          <List text={'Bread'}/>

          
          <List text={'Flour'}/>

          
          <List text={'Sugar'}/>

          
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
