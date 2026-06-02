import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Platform, StatusBar,Text, ScrollView,TouchableOpacity } from 'react-native';
import { MenuAlt1Icon, SearchIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { fetchTrendingMovies, fetchUpcomingMovies, fetchTopRatedMovies } from "../utils/movieapi";
const ios = Platform.OS === 'ios';  

const HomeScreen = () => {
  const [trending, setTrending] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [topRated, setTopRated] = useState([])
  const [loading,setLoading] = useState(false)
  const navigaton = useNavigation()

 useEffect(() => {
getTrendingMovies()
getUpcomingMovies();
  getTopRatedMovies();
 }, [])
const getTrendingMovies = async () => {
  const data = await fetchTrendingMovies();
  if(data && data.results) setTrending(data.results);
  setLoading(false);
}
const getUpcomingMovies = async () => {
  const data = await fetchUpcomingMovies();
  if(data && data.results) setUpcoming(data.results);
}

const getTopRatedMovies = async () => {
  const data = await fetchTopRatedMovies();
  if(data && data.results) setTopRated(data.results);
}
  return (
    <LinearGradient colors={["#1a1a1a", "#333333"]} style={{flex:1}}>
      <SafeAreaView className={ios ? "mb-2" : "mb-3"}>
        <StatusBar barStyle="light-content" />  
        <View className="flex-row justify-between items-center mx-4">
          <MenuAlt1Icon size={30} color="white" strokeWidth={2} />
          <Text className="text-white text-3xl font-bold"><Text style={styles.text}>M</Text>ovies</Text>
          <TouchableOpacity onPress={() => navigaton.navigate("Search")}>
            <SearchIcon size={30} color="white" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
 {
  loading? (
    <Loading/>
  ) : (
 <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
          {/* Trending Movies */}
         {trending.length>0 && <TrendingMovies data={trending} />}

          {/* Upcoming movies row */}
          <MovieList title="Upcoming" data={upcoming} />

          {/* Top Rated movies row */}
          <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
  )
 }
     
    </LinearGradient>
  );
};

export default HomeScreen;