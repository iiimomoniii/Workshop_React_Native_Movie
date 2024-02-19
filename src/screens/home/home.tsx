import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MovieProps from '../../models/class/movie';
const Home = ({ navigation }: {navigation: any}) => {
  const [MoviesObjLists, setMovies] = useState([])

  useEffect(()=>{
    fetch('https://www.majorcineplex.com/apis/get_movie_avaiable')
    .then(res => res.json())
    .then((result)=> {
      setMovies(result.movies)
    })
  },[])

  const pressDetail = (id:number) => {
    navigation.navigate('Detail', {id: id});
  };

  return (
    <ScrollView >
    {MoviesObjLists.map((m:MovieProps)=> (
      <View style={styles.root} key={m.id}>
        <Pressable onPress={()=> pressDetail(m.id)}>
          <Image
            style={styles.coverImage}
            source={{
              uri: m.poster_url,
            }}
            resizeMode="contain"
  resizeMethod="resize"
          />
          <View style={styles.textBox}>
            <Text style={styles.movieTitle}>
              {m.title_en}({m.genre})
            </Text>
            <Text style={{fontSize: 15}}>{m.title_th}</Text>
            <Text></Text>
          </View>
        </Pressable>
      </View>
    ))}
  </ScrollView>
  )
}
const styles = StyleSheet.create({
  root : {
    backgroundColor: '#000000',
    backfaceVisibility: 'hidden'
  },
  coverImage: {
    height: 500,
    justifyContent: 'space-around',    //  <-- you can use "center", "flex-start",
    resizeMode: 'contain',   
  },
  textBox: {
    margin: 5,
  },
  movieTitle : {
    fontSize: 20,
    color: 'white'
  }
});
export default Home