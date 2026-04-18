<template>
  <br><br><br>
  <div class="media">
    <div class="media_img">
        <img :src="media.image_url" alt="Изображение учебной дисциплины">
    </div>
      <div class="media_info">
        <div class="media_name">{{ media.title }}</div><br>
        <strong style="font-size: 30px;">Описание<hr></strong>
        <div class="media_str">
          <strong>Рейтинг: <span class="mark" >{{ media.rating }}</span></strong><br><br>
          <strong>Год: </strong> {{ media.year }}<br><br>
          <strong>Жанр: </strong> {{ media.genre }}<br><br>
          <strong>Страна: </strong>{{ media.country }}<br><br>
          <strong>Рейтинг пользователей: </strong>{{ rating }}<br><br>
        </div>
      </div>
        <div class="info">
        <strong>Описание:</strong> {{ media.description }}
      </div>
      <br>
      <div class="comments">
        <h3>Комментарии</h3>
        <div v-for="comment in comments" :key="comment.id" class="comment-container">
          <div class="comment-details">
            <strong>{{ comment.username }}</strong>
            <p v-if="comment.user_id != this.$store.state.auth.user.id || !isEdited">{{ comment.comment }}</p>
            <span v-if="comment.user_id != this.$store.state.auth.user.id || !isEdited">Оценка: {{ comment.rating }}</span>
            <textarea v-if="comment.user_id === this.$store.state.auth.user.id && isEdited" v-model="editedComment"></textarea>
            <input v-if="comment.user_id === this.$store.state.auth.user.id && isEdited" type="number" id="ratingInput" v-model="editedRating" min="0" max="10" step="0.1" class="form-control">
          </div>
          <div class="comment-actions" v-if="comment.user_id === this.$store.state.auth.user.id">
            <button v-if="!isEdited" @click="editComment(comment)">Редактировать</button>
            <button v-if="isEdited" @click="saveComment(comment)">Записать</button>
            <button @click="deleteComment(comment)">Удалить</button>
          </div>
        </div>
        <!-- Показывать секцию addcomm только если текущий пользователь не оставил комментарий -->
        <div v-if="this.$store.state.auth.status.loggedIn && !HasCommented(comments) " class="addcomm">
          <div class="row">
            <div class="col-md-3">
              <textarea v-model="newComment" class="form-control" placeholder="Добавить комментарий"></textarea><br>
            </div>
            <div class="col-md-1">
              <label for="ratingInput">Оценка:</label>
              <input type="number" id="ratingInput" v-model="newRating" min="0" max="10" step="0.1" class="form-control">
            </div>
            <div class="col-md-1">
              <button @click="addComment" class="btn btn-outline-dark btn-lg">Добавить</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  <br><br>
</template>
  
<script>
import http from "../../http-common";

export default {
  name: "data-media",
  props: ["id"],
  data() {
    return {
      media: [],
      comments: [],
      rating: null,
      isEdited: false,
    };
  },
  methods: {
    getMedia() {
        http
          .get("/media/" + this.$route.params.id)
          .then((response) => {
            this.media = response.data;
			const yearPromise = http.get("/year/" + this.media.year_id);
			const genrePromise = http.get("/genre/" + this.media.genre_id);
			const countryPromise = http.get("/country/" + this.media.country_id);

			return Promise.all([yearPromise, genrePromise, countryPromise])
				.then(([yearResponse, genreResponse, countryResponse]) => {
                this.media.year = yearResponse.data.year;
				this.media.genre = genreResponse.data.name;
				this.media.country = countryResponse.data.name;
				})
				.catch(e => {
				console.log(e);
				});
          })
          .catch((e) => {
            console.log("Ошибка при получении медиа:", e);
          });
  },
  getComments() {
  http
    .get("/comment/" + this.$route.params.id)
    .then((response) => {
      const comments = response.data;
      let commentsCount = 0;
      let sum = 0;
      for (const comment of comments) {
        commentsCount++;
        sum += parseFloat(comment.rating);
      }
      const average = sum / commentsCount;
      this.rating = average.toFixed(1);
      const userPromises = comments.map((comment) => {
        return http.get("/user/" + comment.user_id);
      });
      // Ждем завершения всех запросов
      Promise.all(userPromises)
        .then((userResponses) => {
          // Присваиваем имена пользователей к соответствующим комментариям
          userResponses.forEach((userResponse, index) => {
            comments[index].username = userResponse.data.username;
          });
          // Присваиваем обновленный массив комментариев с именами пользователей
          this.comments = comments;
        })
        .catch((userErrors) => {
          console.log(userErrors);
        });
    })
    .catch((e) => {
      console.log(e);
    });
  },
  async addComment() {
    if (this.newRating < 0 || this.newRating > 10) {
        alert("Введите оценку от 0 до 10.0");
        return;
    }
    if (this.newComment == null) {
        alert("Введите комментарий");
        return;
    }
    const response = await http.post("/addComment", {
      user_id: this.$store.state.auth.user.id,
      comment: this.newComment,
      media_id: this.media.id,
      rating: this.newRating
    });
    this.comments.push(response.data);
    this.newComment = "";
    this.isEdited = false
    // После успешного добавления комментария, обновляем список комментариев
    await this.getComments();
  },
  async deleteComment(comment) {
    await http.post('/deleteComment/' + comment.id);
     this.getComments();
  },
  editComment() {
    this.isEdited = true;
  },
  async saveComment(comment) {
    const data = {
      comment: this.editedComment,
      rating: this.editedRating,
    };
    this.isEdited = false;
    await http.post('/updateComment/'+comment.id,data);
    await this.getComments();
  },
  HasCommented(comments) { // узнаю есть ли коммент текущего пользователя
    let bool = false;
    for (let i in comments) {
      if(comments[i].user_id === this.$store.state.auth.user.id) {
        bool = true
      }
    }
    return bool;
  }
},
  mounted() {
    this.getMedia();
    this.getComments();
  },
};
</script>
<style scoped>
  /* Стили для комментариев */
  .comments {
    display: flex;
    flex-direction: column;
  }

  .comment-container {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }

  .comment-details {
    flex: 1;
  }

  .comment-actions {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }
</style>
