<template>
  <nav class="navbar">
    <div class="navbar__left">
      <router-link class="logo" to="/">🎬 CinemaApp</router-link>

      <router-link class="nav-link" to="/ListGenres/">
        Жанры
      </router-link>

      <router-link class="nav-link" to="/ListFilms/">
        Фильмы
      </router-link>

      <router-link class="nav-link" to="/ListSerials/">
        Сериалы
      </router-link>
    </div>

    <div class="navbar__right">
      <template v-if="currentUser">
        <router-link class="user" to="/profile">
          {{ currentUser.username }}
        </router-link>

        <button class="logout-btn" @click="logOut">
          Выйти
        </button>
      </template>

      <template v-else>
        <router-link class="login-btn" to="/login">
          Войти
        </router-link>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      window.location.href = "/login";
    }
  }
};
</script>

<style>
/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;

  background: linear-gradient(90deg, #3a3a3a, #2b2b2b);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  z-index: 1000;

  backdrop-filter: blur(6px);
}

/* ===== LEFT ===== */
.navbar__left {
  display: flex;
  align-items: center;
  gap: 18px;
}

/* LOGO */
.logo {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  margin-right: 10px;
  letter-spacing: 0.5px;
}

/* ===== LINKS ===== */
.nav-link {
  color: #cfcfcf;
  text-decoration: none;
  font-size: 15px;
  padding: 6px 10px;
  border-radius: 8px;

  transition: all 0.25s ease;
}

/* hover эффект */
.nav-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

/* активная вкладка */
.nav-link.router-link-active {
  color: #ffffff;
  background: linear-gradient(135deg, #ff4d6d, #ff8a00);
  box-shadow: 0 3px 10px rgba(255, 77, 109, 0.3);
}

/* ===== RIGHT ===== */
.navbar__right {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* USER */
.user {
  color: #ffffff;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.user:hover {
  background: rgba(255, 255, 255, 0.08);
}

/* BUTTONS */
.logout-btn,
.login-btn {
  padding: 7px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  background: #4a4a4a;
  color: white;

  transition: all 0.2s ease;
}

.logout-btn:hover,
.login-btn:hover {
  background: #666;
  transform: translateY(-1px);
}
</style>