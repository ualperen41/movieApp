# 🎬 Movies App

Trend filmler, yaklaşan yapımlar ve en yüksek puanlı filmleri keşfedebileceğiniz React Native + Expo mobil uygulaması.

---

## 📸 Ekran Görüntüleri

![](./movieapp.gif)


---

## 🚀 Özellikler

- 🔥 Trend filmler (Carousel görünümü)
- 🗓️ Yaklaşan filmler
- ⭐ En yüksek puanlı filmler
- 🔍 Film arama
- 🎞️ Film detay sayfası
- 📊 Puan göstergesi (progress bar)
- 🌙 Koyu tema arayüz
- 📱 iOS ve Android desteği

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Versiyon |
|-----------|----------|
| React Native | 0.72.3 |
| Expo | ~49.0.7 |
| React Navigation | ^6.1.7 |
| NativeWind (Tailwind CSS) | ^2.0.11 |
| Axios | ^1.4.0 |
| Expo Linear Gradient | ~12.3.0 |
| React Native Snap Carousel | ^3.9.1 |
| React Native Progress | ^5.0.0 |
| React Native Heroicons | ^2.0.0 |
| React Native SVG | ~13.9.0 |

---

## 📁 Proje Yapısı

```
rnative-movieapp/
├── assets/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── MovieScreen.js
│   │   ├── PersonScreen.js
│   │   └── SearchScreen.js
│   ├── components/
│   │   ├── TrendingMovies.js
│   │   ├── MovieList.js
│   │   ├── MovieCard.js
│   │   └── Loading.js
│   ├── navigation/
│   │   └── AppNavigation.js
│   └── api/
│       └── moviedb.js
├── App.js
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Kurulum

### Gereksinimler

- Node.js (v16+)
- Expo CLI
- TMDB API anahtarı

### 1. Repoyu Klonla

```bash
git clone https://github.com/kullanici-adi/rnative-movieapp.git
cd rnative-movieapp
```

### 2. Bağımlılıkları Yükle

```bash
npm install
```

### 3. API Anahtarını Ayarla

`src/api/moviedb.js` dosyasına TMDB API anahtarını ekle:

```js
const API_KEY = "YOUR_TMDB_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";
```

> 🔑 API anahtarı almak için [TMDB](https://www.themoviedb.org/settings/api) sitesine üye ol.

### 4. Uygulamayı Başlat

```bash
# Expo Go ile başlat
npm start

# Android
npm run android

# iOS
npm run ios
```

---

## 🌐 Kullanılan API

Bu uygulama **[The Movie Database (TMDB)](https://www.themoviedb.org/)** API'sini kullanmaktadır.

| Endpoint | Açıklama |
|----------|----------|
| `/trending/movie/day` | Günün trend filmleri |
| `/movie/upcoming` | Yaklaşan filmler |
| `/movie/top_rated` | En yüksek puanlı filmler |
| `/search/movie` | Film arama |
| `/movie/:id` | Film detayları |
| `/movie/:id/credits` | Oyuncu kadrosu |

---




## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'i push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

