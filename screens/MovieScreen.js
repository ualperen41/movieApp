import { Text, View, ScrollView, SafeAreaView, Dimensions, Image, Platform } from 'react-native' // Platform eklendi
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/cast'; 
import MovieList from '../components/movieList'
import Loading from '../components/loading'
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../utils/movieapi'
const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios';
const topMargin = ios ? "" : "mt-3"

const MovieScreen = () => {
  let movieName = "Ant-man and the Wasp: Quantumania"
  const { params: item } = useRoute()
  const [isFavourite, toggleFavourite] = useState(false)
  const [cast, setCast] = useState([1, 2, 3, 4, 5])
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
  const [loading,setLoading] = useState(false)
  const [movie,setMovie] = useState({})
  const navigation = useNavigation()

  useEffect(() => {
    // call the movie details api
    setLoading(true)
    getMovieDetails(item.id)
    getMovieCredits(item.id)
    getSimilarMovies(item.id)
  }, [item]) // Parantez hatası düzeltildi

  const getMovieDetails = async id => {
   const data = await fetchMovieDetails(id)
   if(data) setMovie(data)
   setLoading(false)
  }
  const getMovieCredits = async id => {
   const data = await fetchMovieCredits(id)
  if(data && data.cast) setCast(data.cast)
   setLoading(false)
  }
   const getSimilarMovies = async id => {
   const data = await fetchSimilarMovies(id)
  if(data && data.results) setSimilarMovies(data.results)
  }
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-800">
      {/* Back button and movie poster */}
      <View className="w-full">
        {/* String birleştirme backtick (``) ile düzeltildi */}
        <SafeAreaView className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`} >
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon size="35" color={isFavourite ? theme.background : "white"} />
          </TouchableOpacity>
        </SafeAreaView>
        {
          loading? (
            <Loading/>
          ) : (
   <View>
          <Image source={{uri: image500(movie?.poster_path)}} style={{ width: width, height: height * 0.55 }} />
          <LinearGradient 
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']} 
            style={{ width: width, height: height * 0.40 }} 
            start={{ x: 0.5, y: 0 }} 
            end={{ x: 0.5, y: 1 }} 
            className="absolute bottom-0" 
          />
        </View>
     
          )
        }
      </View>

      {/* movie details */}
      {/* Oran -0.9'dan -0.09 olarak güncellendi */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        {/* Title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movie?.title}
        </Text>
        {/* Status,release,runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          {movie?.status} · {movie?.release_date?.split("-")[0]} · {movie?.runtime} min
        </Text>

        {/* genres */}
        <View className="flex-row justify-center space-x-2 mx-4">
         {
          movie?.genres?.map((genre,index)=>{
            let showDot = index+1 != movie.genres.length
            return(
              <Text key={index} className="text-neutral-400 font-semibold text-base text-center">
            {genre?.name} {showDot? "·":null}
          </Text>
            )
          })
         }
          {/* <Text className="text-neutral-400 font-semibold text-base text-center">
            Action ·
          </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill ·
          </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy ·
          </Text> */}
        </View>

        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
        </Text>
      </View>

      {/* cast */}
      <Cast cast={cast} navigation={navigation} />

      {/* Similar Movies */}
      {similarMovies.length>0 && <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />}
    </ScrollView>
  )
}

export default MovieScreen