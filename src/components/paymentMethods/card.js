import React from 'react'
import { Text, View, Image } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'
import CardBrandImage from './cardBrandImage'

export default props => (
  <TouchableOpacity {...props} styles={props.styles} style={props.styles.cardTextOuterContainer} onPress={() => props.selectPaymentHandler(props.paymentSource)}>
    <View style={props.styles.cardTextContainer}>
      <CardBrandImage style={props.styles.cardBrandImage} brand={props.paymentSource.brand} />
      <Text style={props.styles.cardTextType}>{props.paymentSource.brand}</Text>
      <Text style={props.styles.cardTextEndingIn}>Ending in</Text>
      <Text style={props.styles.cardTextLast4}>{props.paymentSource.last4}</Text>
    </View>
    {props.selected ?
      <View style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image style={{tintColor: 'rgba(0,122,255,1)', alignSelf: 'center'}} source={require('../../../assets/images/icon_checkmark.png')} />
      </View>
      :
    	null
    }
  </TouchableOpacity>
)
