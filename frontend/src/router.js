import { createWebHistory, createRouter } from "vue-router";
// импорт компонентов
import ListGenres from "./components/genre/ListGenres";
import ListFilms from "./components/media/ListFilms";
import ListSerials from "./components/media/ListSerials";
import Media from "./components/media/Media";
import Comedy from "./components/genre/Comedy";
import Animation from "./components/genre/Animation";
import Horror from "./components/genre/Horror";
import Scifi from "./components/genre/Scifi";
import Thriller from "./components/genre/Thriller";
import Action from "./components/genre/Action";
import Romance from "./components/genre/Romance";
import Mystery from "./components/genre/Mystery";
import Adventure from "./components/genre/Adventure";
import Fantasy from "./components/genre/Fantasy";
import War from "./components/genre/War";
import Family from "./components/genre/Family";
import Anime from "./components/genre/Anime";
import History from "./components/genre/History";
import Drama from "./components/genre/Drama";
import Documentary from "./components/genre/Documentary";
import Children from "./components/genre/Children";
import Crime from "./components/genre/Crime";
import Biography from "./components/genre/Biography";
import Western from "./components/genre/Western";
import Sport from "./components/genre/Sport";
import Reality from "./components/genre/Reality";
import Short from "./components/genre/Short";
import Music from "./components/genre/Music";
import Musical from "./components/genre/Musical";
import Talk from "./components/genre/Talk";
import Game from "./components/genre/Game";
import Login from "./components/authorization/Login";
import Profile from "./components/authorization/Profile";
import Register from "./components/authorization/Register";
import store from "./store/index";
// определяем маршруты
const routes = [
    {
        path: "/ListGenres", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "genres", // имя маршрута
        alias: "/genres", // указание дополнительного маршрута
        component: ListGenres, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Список жанров"
        }
    },
    {
        path: "/ListFilms", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "films", // имя маршрута
        alias: "/films", // указание дополнительного маршрута
        component: ListFilms, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Список фильмов"
        }
    },
    {
        path: "/ListSerials", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "serials", // имя маршрута
        alias: "/serials", // указание дополнительного маршрута
        component: ListSerials, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Список сериалов"
        }
    },
    {
        path: "/media/:id", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-media", // имя маршрута
        component: Media, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Фильм"
        }
    },
    {
        path: "/ListGenres/comedy", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-comedy", // имя маршрута
        component: Comedy, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Комедии"
        }
    },
    {
        path: "/ListGenres/animation", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-animation", // имя маршрута
        component: Animation, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Мультфильмы"
        }
    },
    {
        path: "/ListGenres/sci-fi", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-scifi", // имя маршрута
        component: Scifi, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Фантастика"
        }
    },
    {
        path: "/ListGenres/horror", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-horror", // имя маршрута
        component: Horror, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Ужасы"
        }
    },
    {
        path: "/ListGenres/thriller", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-thriller", // имя маршрута
        component: Thriller, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Триллеры"
        }
    },
    {
        path: "/ListGenres/action", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-action", // имя маршрута
        component: Action, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Боевики"
        }
    },
    {
        path: "/ListGenres/romance", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-romance", // имя маршрута
        component: Romance, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Мелодраммы"
        }
    },
    {
        path: "/ListGenres/mystery", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-mystery", // имя маршрута
        component: Mystery, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Детективы"
        }
    },
    {
        path: "/ListGenres/adventure", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-adventure", // имя маршрута
        component: Adventure, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Приключения"
        }
    },
    {
        path: "/ListGenres/fantasy", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-fantasy", // имя маршрута
        component: Fantasy, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Фэнтези"
        }
    },
    {
        path: "/ListGenres/war", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-war", // имя маршрута
        component: War, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Военные"
        }
    },
    {
        path: "/ListGenres/family", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-family", // имя маршрута
        component: Family, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Семейные"
        }
    },
    {
        path: "/ListGenres/anime", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-anime", // имя маршрута
        component: Anime, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Аниме"
        }
    },
    {
        path: "/ListGenres/history", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-history", // имя маршрута
        component: History, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Исторические"
        }
    },
    {
        path: "/ListGenres/drama", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-drama", // имя маршрута
        component: Drama, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Драмы"
        }
    },
    {
        path: "/ListGenres/documentary", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-documentary", // имя маршрута
        component: Documentary, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Документальные"
        }
    },
    {
        path: "/ListGenres/children", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-children", // имя маршрута
        component: Children, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Детские"
        }
    },
    {
        path: "/ListGenres/crime", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-crime", // имя маршрута
        component: Crime, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Криминал"
        }
    },
    {
        path: "/ListGenres/biography", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-biography", // имя маршрута
        component: Biography, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Биографии"
        }
    },
    {
        path: "/ListGenres/western", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-western", // имя маршрута
        component: Western, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Вестерны"
        }
    },
    {
        path: "/ListGenres/sport", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-sport", // имя маршрута
        component: Sport, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Спортивные"
        }
    },
    {
        path: "/ListGenres/reality-tv", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-reality-tv", // имя маршрута
        component: Reality, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Реальное ТВ"
        }
    },
    {
        path: "/ListGenres/short", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-short", // имя маршрута
        component: Short, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Короткометражки"
        }
    },
    {
        path: "/ListGenres/music", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-music", // имя маршрута
        component: Music, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Музыкальные"
        }
    },
    {
        path: "/ListGenres/musical", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-musical", // имя маршрута
        component: Musical, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Мюзиклы"
        }
    },
    {
        path: "/ListGenres/talk-show", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-talk-show", // имя маршрута
        component: Talk, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Ток-шоу"
        }
    },
    {
        path: "/ListGenres/game-show", // указание маршрута, по которому будем переходить к списку учебных дисциплин
        name: "data-game-show", // имя маршрута
        component: Game, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Игры"
        }
    },
    {
        path: "/login",
        name: "login-user",
        component: Login,
        meta: {
            title: "Вход в систему"
        }
    },
    {
        path: "/register",
        name: "register-user",
        component: Register,
        meta: {
            title: "Регистрация"
        }
    },
    {
        path: "/profile",
        name: "profile-user",
        component: Profile,
        meta: {
            title: "Профиль пользователя",
            // маршрут защищаем (делаем доступным только авторизованным пользователям)
            requiredAuth: true
        }
    }

];

const router = createRouter({
    history: createWebHistory(), // указываем, что будет создаваться история посещений веб-страниц
    routes // подключаем маршрутизацию
});

// указание заголовка компонентам (тега title), заголовки определены в meta
// указание заголовка компонентам (тега title), заголовки определены в meta
router.beforeEach(async (to, from, next) => {
    // для тех маршрутов, для которых не определены компоненты, подключается только App.vue
    // поэтому устанавливаем заголовком по умолчанию название "Главная страница"
    document.title = to.meta.title || 'Главная страница';

    // проверяем наличие токена и срок его действия
    const auth = await store.getters["auth/isTokenActive"];
    if (auth) {
        return next();
    }
    // если токена нет или его срок действия истёк, а страница доступна только авторизованному пользователю,
    // то переходим на страницу входа в систему (ссылка на /login)
    else if (!auth && to.meta.requiredAuth) {
        const user = JSON.parse(localStorage.getItem("user"));
        await store.dispatch("auth/refreshToken", user)
            .then(() => {
                return next();
            })
            .catch(() => {
                return next({path: "/login"});
            });
        return next({ path: "/login" });
    }
    return next();
});

export default router;