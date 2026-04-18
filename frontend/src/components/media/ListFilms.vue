<template>
	<br><br><br>
	<div class="block_search">
		<input v-model="searchQuery" @input="searhFilms" type="text" placeholder="Поиск..." class="search">
	</div>
	
    <ul>
      <li v-for="(media, index) in medias" :key="index" >
		<router-link style="text-decoration: none; color: inherit;" :to="{
                  name: 'data-media',
                  params: { id: media.id
				}
              }">
					<div class="news">
						<a>
							<div class="news_header">
								<img :src="media.image_url" alt="Изображение учебной дисциплины">
							</div>
							<div class="news_name"> {{ media.title }}</div>
									<p><strong>рейтинг: <span class="mark">{{ media.rating }}</span></strong><br>
										<strong>год:</strong> {{ media.year}}</p>
									<div class="janry">{{ media.genre}}</div>
						</a>
					</div>
		</router-link>
    </li>
    </ul>
    <div class="foot">
      <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-outline-dark btn-lg">Предыдущая страница</button>
      <span class="number">{{ currentPage }}</span>
      <button class="btn btn-outline-dark btn-lg" @click="nextPage" :disabled="currentPage === totalPages" >Следующая страница</button>
    </div>
	<br>
</template>

  <script>
  import http from "../../http-common"; // подключение объекта, который позволяет отправлять запросы серверу
  export default {
    name: "ListFilms", // Имя шаблона
    data() { // данные компонента (определение переменных)
      return {
        medias: [],
		currentPage: 1,
		totalPages: 17,
      };
    },
    methods: {
	getMedias() {
		http
		.get("/ListMedias/1?page="+this.currentPage)
		.then(response => {
			this.medias = response.data;
			const requests = this.medias.map(media => {
			const yearPromise = http.get("/year/" + media.year_id);
			const genrePromise = http.get("/genre/" + media.genre_id);
			const countryPromise = http.get("/country/" + media.country_id);

			return Promise.all([yearPromise, genrePromise, countryPromise])
				.then(([yearResponse, genreResponse, countryResponse]) => {
				media.year = yearResponse.data.year;
				media.genre = genreResponse.data.name;
				media.country = countryResponse.data.name;
				})
				.catch(e => {
				console.log(e);
				});
			});
			return Promise.all(requests);
		})
		.catch(e => {
			console.log(e);
		});
	},
	nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getMedias();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getMedias();
      }
    },
	searhFilms() {
		if (this.searchQuery) {
		http
		.get("/media/title/"+this.searchQuery+"/1")
		.then(response => {
			this.medias = response.data;
			const requests = this.medias.map(media => {
			const yearPromise = http.get("/year/" + media.year_id);
			const genrePromise = http.get("/genre/" + media.genre_id);
			const countryPromise = http.get("/country/" + media.country_id);

			return Promise.all([yearPromise, genrePromise, countryPromise])
				.then(([yearResponse, genreResponse, countryResponse]) => {
				media.year = yearResponse.data.year;
				media.genre = genreResponse.data.name;
				media.country = countryResponse.data.name;
				})
				.catch(e => {
				console.log(e);
				});
			});
			return Promise.all(requests);
		})
		.catch(e => {
			console.log(e);
		});
		}
		else{
			this.getMedias();
		}
    },
    },
    mounted() { // загружаем данные учебных дисциплин. Обработчик mounted() вызывается после монтирования экземпляра шаблона
		this.getMedias();
    }
  }
  </script>
  
  <style>

  </style>