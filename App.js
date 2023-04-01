import { StyleSheet, Text, View, Image,Touchable } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function App() {
  return (
    <>
    {/* First Layer */}
    <View style={[styles.secondSheet]}>

        <View style={{flex:0.2, width:'80%', flexDirection : 'row',marginLeft:'10%',marginTop:'10%',paddingTop:'5%',alignItems:'center',justifyContent:'space-around'}}>
            <Image  
            source = {require('./assets/go-back.png')}
            style={{width:40, height:40}}
            />
            <Image  
            source = {require('./assets/nike.png')}
            style={{width:90, height:90}}
            />
            <Image  
            source = {require('./assets/Shopng-bag.png')}
            style={{width:40, height:40}}
            />
        </View>

        <View style={{flex:0.2, flexDirection:'row',  justifyContent:'center'}}>
          <Text style={[styles.fontComon,{ fontSize:30, textAlign:'left', color:'#18212d'}]}>Air Max Plus</Text>
        </View>
        <View style={[{flex:0.1, alignItems:'center', marginTop:-30}]}>
            <Image  
              source = {require('./assets/4_start.png')}
              style={{width:100, height:10}}
              />
        </View>

        <View style={{flex:0.3, flexDirection:'row', marginTop:-50}}>
            <Image  
            source = {require('./assets/shoe_pic.png')}
            style={[styles.ImgStyle]}
            />
        </View>
      
      
    </View>


{/* Second layer */}
    <View style= {[styles.secondSheet,{backgroundColor:'#18212d' }]}>

      <View style={{flex:0.2, flexDirection : 'row', marginBottom:'10%', padding:'3%'}}>
        <Text style={[styles.fontComon,{ fontSize:20, textAlign:'left'}]}>Select Color</Text>
              <Image  
                source = {require('./assets/selectColor1.png')}
                style={{height:'300%',width:'40%'}}
              />
              <Image  
                source = {require('./assets/selectColor3.png')}
                style={{height:100,width:'40%'}}
              />
              <Image  
                source = {require('./assets/selectColor3.png')} //hidden image
                style={{height:100,width:'40%', marginTop:100}}
              /> 
      </View>

      <Text style={[styles.fontComon, { fontSize:20, textAlign:'left', padding:'2%'}]}>Select Size</Text>

      <View style={{flex:0.2, flexDirection : 'row',padding:'2%', justifyContent:'space-around'}}>
        <View style={[styles.circleForSizes,{borderColor:'red'}]}><Text style={[styles.fontComon,{fontSize:16, color:'red'}]} >39</Text></View>
        <View style={[styles.circleForSizes,{borderColor:'red'}]}><Text style={[styles.fontComon,{fontSize:16, color:'red'}]} >40</Text></View>
        <View style={[styles.circleForSizes,{borderColor:'yellow'}]}><Text style={[styles.fontComon,{fontSize:16, color:'yellow'}]} >41</Text></View>
        <View style={[styles.circleForSizes,{borderColor:'red'}]}><Text style={[styles.fontComon,{fontSize:16, color:'red'}]} >42</Text></View>
        <View style={[styles.circleForSizes,{borderColor:'red'}]}><Text style={[styles.fontComon,{fontSize:16, color:'red'}]} >43</Text></View>
        <View style={[styles.circleForSizes,{borderColor:'red'}]}><Text style={[styles.fontComon,{fontSize:16, color:'red'}]} >44</Text></View>
      </View>

      <View style={[{flex:0.2, marginTop:'5%', padding:'2%',flexDirection : 'row',justifyContent:'space-between'}]}>
          <Text style={[styles.fontComon,{color:'gray'}]} >Description</Text>
          <Text style={styles.fontComon}>Delivery</Text>
          <Text style={[styles.fontComon,{color:'gray'}]}>Reviews</Text>
      </View>

      <Text style={[styles.fontComon,{fontSize:16, color:'gray', marginLeft:'2%'}]}>AlignItems describes how to align children along the cross axis of their container. It is very similar to justifyContent but instead of applying to the main axis,
         alignItems applies to the cross axis.</Text>

      <View style={{flex:0.2, flexDirection : 'row',justifyContent:'space-around', marginTop:'5%',marginLeft:'10%',width:'80%', height:200 }}>
          <Pressable style={{backgroundColor:'white',height:'200%',padding:'5%', width:'50%',borderTopLeftRadius:30}}>
            <Text style={[styles.fontComon,{color:'#18212d', textAlign:'center', fontSize:18 }]}>140$</Text>
          </Pressable>
          <Pressable style={{backgroundColor:'orange',padding:'5%',height:'200%', width:'50%',  borderTopRightRadius:30}}>
            <Text style={[styles.fontComon,{color:'#18212d', textAlign:'center', fontSize:18 }]}>Add To cart</Text>
          </Pressable>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSheet : {
    flex: 1,
    // backgroundColor:'red',
    borderTopRightRadius : 35,
    borderTopLeftRadius : 35,
    padding:5,

    flexWrap: "wrap",
    justifyContent: 'flex-start',
    alignItems:'stretch',
    alignContent:'stretch'

  },
  ImgStyle : {
    marginTop:'20%',
    width : '100%',
    height : '100%'
  },
  fontComon : {
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textAlign:'left'
  },
  circleForSizes : {
    height : 50 ,
    width :50,
    borderWidth: 3,
    borderColor: "white",

    // color:'yellow',
    borderRadius: 50,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
