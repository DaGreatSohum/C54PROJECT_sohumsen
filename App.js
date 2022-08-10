import React from 'react';
import {Text,View,TouchableOpacity} from "react-native";

export default class App extends React.Component{
  cb=()=>{
   alert("Charles Babbage was an English polymath. A mathematician, philosopher, inventor and mechanical engineer, Babbage originated the concept of a digital programmable computer. Babbage is considered by some to be 'father of the computer'.")
  }
  mt=()=>{
   alert("Mother Teresa, also known as Saint Teresa of Calcutta, was an Albanian-Indian Roman Catholic nun who in 1950 founded and was an active member of the Missionaries of Charity. Although her passport name was Mary Teresa Bojaxhiu, she was born Anjezë Gonxhe Bojaxhiu, in Üsküb—now Skopje, capital of North Macedonia.")
  }
  nm=()=>{
   alert("Nelson Rolihlahla Mandela was a South African anti-apartheid activist who served as the first president of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election.")
  }
  mg=()=>{
   alert("Mohandas Karamchand Gandhi, commonly known as Bapu, was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule, and to later inspire movements for civil rights and freedom across the world.")
  }
  wc=()=>{
   alert("Winston Churchill was an inspirational statesman, writer, orator and leader who led Britain to victory in the Second World War. He served as Conservative Prime Minister twice - from 1940 to 1945 (before being defeated in the 1945 general election by the Labour leader Clement Attlee) and from 1951 to 1955")
  }
  my=()=>{
   alert("Malala Yousafzai, often referred to mononymously as Malala, is a Pakistani activist for female education and the 2014 Nobel Peace Prize laureate. Awarded when she was 17, she is the world's youngest Nobel Prize laureate, and the second Pakistani and the first Pashtun to ever receive a Nobel Prize.")
  }
render(){
return(
  <View>


  <Text style={{fontFamily:"impact", marginLeft:80}}>Famous Leaders and Idols</Text> 


  <TouchableOpacity onPress={this.cb} style={{backgroundColor:"red",margin:20, borderRadius:"100%", width:200, padding:20,marginTop:80, marginLeft:80}}>
   <Text style={{textAlign:"center",color:"white",fontFamily:"impact"}}>Charles Babbage   </Text>
</TouchableOpacity>

  <TouchableOpacity onPress={this.mt} style={{backgroundColor:"darkorange",margin:20, borderRadius:"100%", width:200, padding:20,marginTop:80, marginLeft:80}}>
   <Text style={{textAlign:"center",color:"white",fontFamily:"impact"}}>Mother Teresa   </Text>
</TouchableOpacity>

  <TouchableOpacity onPress={this.nm} style={{backgroundColor:"#ffcc00",margin:20, borderRadius:"100%", width:200, padding:20,marginTop:80, marginLeft:80}}>
   <Text style={{textAlign:"center",color:"white",fontFamily:"impact"}}>Nelson Mandela</Text>
</TouchableOpacity>

  <TouchableOpacity onPress={this.mg} style={{backgroundColor:"green",margin:20, borderRadius:"100%", width:200, padding:20,marginTop:80, marginLeft:80}}>
   <Text style={{textAlign:"center",color:"white",fontFamily:"impact"}}>Mahatma Gandhi</Text>
</TouchableOpacity>

  <TouchableOpacity onPress={this.wc} style={{backgroundColor:"blue",margin:20, borderRadius:"100%", width:200, padding:20,marginTop:80, marginLeft:80}}>
   <Text style={{textAlign:"center",color:"white",fontFamily:"impact"}}>Winston Churchill</Text>
</TouchableOpacity>

  <TouchableOpacity onPress={this.my} style={{backgroundColor:"purple",margin:20, borderRadius:"100%", width:200, padding:20,marginTop:80, marginLeft:80}}>
   <Text style={{textAlign:"center",color:"white",fontFamily:"impact"}}>Malala Yousafzai</Text>
</TouchableOpacity>

  </View>
)
}
}
