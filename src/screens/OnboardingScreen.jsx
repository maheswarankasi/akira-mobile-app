import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  const swiperRef = useRef(null);
  const {t} = useTranslation();

  // Swiper-la next poga illa next screen (Login) poga
  const handleNext = (index) => {
    if (index === 0) {
      // 1st slide-la iruntha, 2nd slide-ku move pannu
      swiperRef.current.scrollBy(1);
    } else {
      // 2nd slide-la iruntha, Login screen-ku navigate pannu
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper 
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        dot={<View style={styles.inactiveDot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.paginationStyle}
      >
        {/* ===================== SLIDE 1 (Page 4) ===================== */}
        <View style={styles.slide}>
          <View style={styles.imageContainer}>
            {/* Design-la irukkura image-ah add pannunga */}
            <Image 
              source={require('../assets/images/Page-4-image.webp')} 
              style={styles.image} 
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{t('mentor_name')}</Text>
            <Text style={styles.subtitle}>{t('mentor_location')}</Text>
            
            <Text style={styles.highlightText}>{t('inspired_title')}</Text>
            <Text style={styles.description}>{t('inspired_desc1')}</Text>
            <Text style={styles.description, styles.desc2}>{t('inspired_desc2')}</Text>
          </View>
          
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.nextButton} onPress={() => handleNext(0)}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ===================== SLIDE 2 (Page 5) ===================== */}
        <View style={styles.slide}>
          <View style={styles.textContainer}>
            <Text style={[styles.title, { color: '#2E7D32', fontSize: 28 }]}>
              {t('eat_pure')}
            </Text>
            <Text style={styles.subtitle}>{t('bridge_gap')}</Text>
            
            <View style={styles.greenBox}>
              <Text style={styles.greenBoxTitle}>{t('back_to_roots')}</Text>
              <Text style={styles.greenBoxDesc}>
                {t('roots_desc')}
              </Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            {/* Design-la irukkura market image-ah add pannunga */}
            <Image 
              source={require('../assets/images/Page-5-image.webp')} 
              style={styles.image} 
              resizeMode="contain"
            />
          </View>

          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.nextButton} onPress={() => handleNext(1)}>
              <Text style={styles.nextButtonText}>{t('next')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf0ea', // 
  },
  slide: {
    flex: 1,
  },
  imageContainer: {
    height: '45%',
    width: '100%',
    justifyContent: "flex-end",
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    textAlign:'center',
  },
  description: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  desc2: {
    paddingTop: 8,
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  greenBox: {
    backgroundColor: '#2E7D32',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    marginTop: 10,
  },
  greenBoxTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  greenBoxDesc: {
    color: '#FFF',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
    width: '100%',
  },
  nextButton: {
    backgroundColor: '#FF2A5F',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inactiveDot: {
    backgroundColor: '#D3D3D3',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF2A5F',
    width: 24,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  paginationStyle: {
    bottom: 50, // Dots-ah Next button-ku nera alignment pandrathuku
    justifyContent: 'flex-start',
    left: 24,
  }
});