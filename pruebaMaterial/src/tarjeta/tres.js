import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  ListView,
  View,
  Alert,
  TouchableHighlight,
  ToolbarAndroid,
  Navigator
} from 'react-native';

import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import { Card, Button } from 'react-native-material-design';


module.exports = React.createClass({
  
  render: function(){
    return (
      
      <View>
         <MaterialToolbar
                title={'Vicente Fernandez'}
                //primary={theme}
                icon={'arrow-back'}
                onIconPress={() => this.props.navigator.pop()}
                //actions={[{
                  //  icon: 'warning',
                   // badge: { value: 3, animate: true },
                    //onPress: this.increment
                //}]}
                rightIconStyle={{
                    margin: 10
                }}
            />
      <Card style={styles.tarje}>
                    <Card.Media
                        image={<Image source={{uri: "http://cdn.smehost.net/vicentefernandezmx-mxprod/wp-content/uploads/2015/08/vicente-fernandez-25.jpg"}} />}
                        overlay
                    />
                    <Card.Body>
                        <Text>Inolvidable!!</Text>
                    </Card.Body>
                    <Card.Actions position="center">
                       <Button value="Contratar" onPress={function(){
                           fetch('https://chepomariachix.herokuapp.com/mensaje')
                              .then((response) => {
                                   Alert.alert('Contratación',"Su orden está siendo procesada",)
                               })
                              
                              .done();
                        }}/>
                    </Card.Actions>
                </Card>
      
      </View>
      
      )}
       
})


var styles = StyleSheet.create({
  tarje: {
    marginTop: 75
  }
})