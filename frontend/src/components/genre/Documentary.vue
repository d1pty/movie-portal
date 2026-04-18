<template>
	<br><br><br>
    <ul>
      <!-- Вывод списка учебных дисциплин -->
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
    name: "data-documentary", // Имя шаблона
    data() { // данные компонента (определение переменных)
      return {
        medias: [],
		currentPage: 1,
		totalPages: 5,
      };
    },
    methods: {
	getMedias() {
		http
		.get("/media/genre/документальный?page="+this.currentPage)
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
    },
    mounted() { // загружаем данные учебных дисциплин. Обработчик mounted() вызывается после монтирования экземпляра шаблона
		this.getMedias();
    }
  }
  </script>
  
  <style>
  .news_page {
	margin-top: 50px;
	font-family: BankGothic RUSS Medium;
}

.news_page__title {
	text-align: center;
	text-transform: uppercase;
	color: #163198;
	margin-top: 100px;
	font-size: 45px;
	font-family: FreeSetC Regular, serif;
	font-weight: 600;
}

.news_container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	margin-top: 20px;
	font-family: "Roboto", sans-serif;
	color: #10182f;
}

.news_wrapper {
	display: flex;
	width: 1040px;
	justify-content: space-evenly;
	flex-wrap: wrap;
}

.news {
	align-self: flex-start;
	position: relative;
	min-width: 275px;
	height: 600px;
	margin: 1.25rem 0.75rem;
	background: white;
	transition: all 300ms ease-in-out;
	margin: 10px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	width: 275px;
}

.news:hover {
	cursor: pointer;
	box-shadow: 0px 15px 35px rgba(227, 252, 239, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
	transform: scale(1.025);
}

.news_header{
  max-width: 100%;
  height: 360px;
}
.news_header img {
  position: relative;
  height: 360px;
  width: 100%;
}




.date {
	display: flex;
	margin-top: auto;
}

.date_text small {
	color: #545d7a;
}
ul{
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: center;
}
li{
  display: flex;
}
.news a{
	text-decoration: none;
}
.news p{
	color: #313030;
	padding: 5px;
	font-size: 16px;
	margin: 0 auto;

}
.news_name{
	color: #000;
	padding: 10px;
	font-size: 20px;
	font-weight:bold
}
.janry{
	color: #464646;
	font-size: 14px;
	padding-left: 5px;
}
.mark {
    margin-right: 4px;
    background: linear-gradient(165deg,#ffd25e 16.44%,#b59646 63.42%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.number{
	padding-left: 30px;
	padding-right: 30px;
	font-size: 40px;
	font-weight:bold
}
.foot{
	display: flex;
	justify-content: center;
	width: 100%;
	height: 20%;
}

  </style>