<template>
  <br><br><br>
  <div>
    <ul>
      <!-- Используем директиву v-for для итерации по массиву genres и создания элементов списка -->
      <li v-for="genre in genres" :key="genre.id">
        <router-link style="text-decoration: none; color: inherit;" :to="genre.slug" class="styles_root__c9qje">
          <div class="news_j">
            <div class="news_header_j">
              <img :src="genre.image" alt="">
            </div>
            <div class="news_name">
              {{ genre.name }}
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
  return {
    genres: [
      {
        id: 1,
        name: 'Комедии',
        slug: 'comedy',
        image: '//avatars.mds.yandex.net/get-bunker/50064/c965e7ae1145db8f4a5d636d8a8682ad07b486d3/192x192',
      },
      {
        id: 2,
        name: 'Мультфильмы',
        slug: 'animation',
        image: '//avatars.mds.yandex.net/get-bunker/56833/ed83c13d1ddbd91dbb34d35b3936c32f1ceef2b2/192x192',
      },
      {
        id: 3,
        name: 'Ужасы',
        slug: 'horror',
        image: '//avatars.mds.yandex.net/get-bunker/50064/a88a3adacd414135e7f67d6459f462302844882b/192x192',
      },
      {
        id: 4,
        name: 'Фантастика',
        slug: 'sci-fi',
        image: '//avatars.mds.yandex.net/get-bunker/118781/2d1173df7d33adb29c73cfaaa3d014e48103223a/192x192',
      },
      {
        id: 5,
        name: 'Триллеры',
        slug: 'thriller',
        image: '//avatars.mds.yandex.net/get-bunker/128809/bc0da196556282793b39f4bd77143d9d7a7a353b/192x192',
      },
      {
        id: 6,
        name: 'Боевики',
        slug: 'action',
        image: '//avatars.mds.yandex.net/get-bunker/61205/07b81fddd36a916e3c1dad941de8e47ecf896c7e/192x192',
      },
      {
        id: 7,
        name: 'Мелодрамы',
        slug: 'romance',
        image: '//avatars.mds.yandex.net/get-bunker/128809/58e8f588c62ec66988c914314f32e38ab12f3fb2/192x192',
      },
      {
        id: 8,
        name: 'Детективы',
        slug: 'mystery',
        image: '//avatars.mds.yandex.net/get-bunker/50064/546ba464afc21764e58be3987df5063a0a2f9da9/192x192',
      },
      {
        id: 9,
        name: 'Приключения',
        slug: 'adventure',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/9784475/f106ecaf-1e30-4952-8628-47749da869fd/192x192',
      },
      {
        id: 10,
        name: 'Фэнтези',
        slug: 'fantasy',
        image: '//avatars.mds.yandex.net/get-bunker/118781/978442eab5efbae3978771d335a13a5f0289b85e/192x192',
      },
      {
        id: 11,
        name: 'Военные',
        slug: 'war',
        image: '//avatars.mds.yandex.net/get-bunker/56833/3f2342b15393fb66d99757e9e0384ffb68fbfe02/192x192',
      },
      {
        id: 12,
        name: 'Семейные',
        slug: 'family',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10671298/989a8446-60e7-42b9-8d35-13eff88978bd/192x192',
      },
      {
        id: 13,
        name: 'Аниме',
        slug: 'anime',
        image: '//avatars.mds.yandex.net/get-bunker/998550/02b1907eef5123b57eea76be2aab126ab5888717/192x192',
      },
      {
        id: 14,
        name: 'Исторические',
        slug: 'history',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/9784475/19db3fc2-a852-4244-a3f4-13151627fe74/192x192',
      },
      {
        id: 15,
        name: 'Драмы',
        slug: 'drama',
        image: '//avatars.mds.yandex.net/get-bunker/49769/efe0f7420bc7d970c0a8002e6d3e6d484754cdd5/192x192',
      },
      {
        id: 16,
        name: 'Документальные',
        slug: 'documentary',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10893610/06bb5ec7-9956-4c30-8459-b909292a40e1/192x192',
      },
      {
        id: 17,
        name: 'Детские',
        slug: 'children',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10592371/4553538a-43a9-4aaa-90cf-ca8ee4d1f9c6/192x192',
      },
      {
        id: 18,
        name: 'Криминал',
        slug: 'crime',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10893610/746b4dcc-96ef-4e97-8279-ff7c55e76cd6/192x192',
      },
      {
        id: 19,
        name: 'Биографии',
        slug: 'biography',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10671298/081f700b-3d4a-43b8-9ba2-88a6ef0ebb92/192x192',
      },
      {
        id: 20,
        name: 'Вестерны',
        slug: 'western',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10893610/cc9c1945-5f86-4c28-a97b-48a7809e4b8b/192x192',
      },
      {
        id: 21,
        name: 'Спортивные',
        slug: 'sport',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10893610/7dffa706-d001-446d-941c-68654c95127b/192x192',
      },
      {
        id: 22,
        name: 'Реальное ТВ',
        slug: 'reality-tv',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10893610/e3da88cd-faf1-4cdd-a124-b903988819cd/192x192',
      },
      {
        id: 23,
        name: 'Короткометражки',
        slug: 'short',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10893610/7955f149-df07-4089-b114-bc09d37a193b/192x192',
      },
      {
        id: 24,
        name: 'Музыкальные',
        slug: 'music',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/9784475/34b4ed9b-7387-4658-8320-9d9cf3a1c55b/192x192',
      },
      {
        id: 25,
        name: 'Мюзиклы',
        slug: 'musical',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10835644/af3d5c04-a8e6-4262-9a6f-03114508da85/192x192',
      },
      {
        id: 26,
        name: 'Ток-шоу',
        slug: 'talk-show',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10900341/7fd68b12-1183-46cd-a859-46cf7e138213/192x192',
      },
      {
        id: 27,
        name: 'Игры',
        slug: 'game-show',
        image: '//avatars.mds.yandex.net/get-kinopoisk-image/10592371/1f7157b3-4659-4afe-99ae-c4b8314447e5/192x192',
      },
    ],
  };
  },
};
</script>

<style>
</style>