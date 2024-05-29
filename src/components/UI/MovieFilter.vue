<script>
import { defineComponent } from 'vue';
import { ElSelect, ElOption, ElButton } from 'element-plus';
import 'element-plus/dist/index.css';
import MyButton1 from "@/components/UI/MyButton1.vue";
import {getMovies} from "@/api/api";
import {createDictionaryForFilter} from "@/api/helpers";

export default defineComponent({
  components: {
    MyButton1,
    ElSelect,
    ElOption,
    ElButton
  },
  data() {
    return {
      genres: ["аниме", "боевик", "вестерн", "военный", "документальный", "драма", "история", "комедия", "криминал",
        "мелодрама", "мультфильм", "приключения", "трейлер", "ужасы", "фантастика", "фэнтези"],
      years: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987,
        1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
        2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      countries: ['Австралия', 'Австрия', 'Албания', 'Беларусь', 'Бельгия', 'Болгария', 'Боливия', 'Бразилия',
        'Великобритания', 'Венгрия', 'Германия', 'Германия (ГДР)', 'Германия (ФРГ)', 'Гонконг', 'Гренландия',
        'Греция', 'Грузия', 'Дания', 'Доминикана','Египет', 'Израиль', 'Индия', 'Ирландия', 'Испания', 'Италия',
        'Казахстан', 'Канада', 'Китай', 'Колумбия', 'Корея', 'Корея Северная', 'Корея Южная', 'Коста-Рика', 'Куба',
        'Кыргызстан', 'Латвия', 'Литва', 'Люксембург', 'Мальта', 'Мексика', 'Молдова', 'Монголия', 'Непал', 'Нидерланды',
        'Новая Зеландия', 'Норвегия', 'ОАЭ', 'Польша', 'Португалия', 'Россия', 'Румыния', 'СССР', 'США', 'Сальвадор',
        'Сербия', 'Турция', 'Украина', 'Филиппины', 'Финляндия', 'Франция', 'Хорватия', 'Чехия', 'Чехословакия',
        'Швейцария', 'Швеция', 'Эстония', 'Япония'],
      ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      selectedGenres: [],
      selectedYear: '',
      selectedCountry: '',
      selectedRating: '',
      filteredMovies: [],
      movies: []
    };
  },
  methods: {
    searchMovies() {
      this.$emit('filter-movies', {
        genre: this.selectedGenres,
        year: this.selectedYear,
        country: this.selectedCountry,
        rating: this.selectedRating
      })
      getMovies().then(allMovies => this.movies = allMovies);
      this.filteredMovies = this.movies.filter(movie => {
        const genreMatch = this.selectedGenres.length === 0 || movie.genres.some(g => this.selectedGenres.includes(g));
        const yearMatch = !this.selectedYear || movie.releaseDate.toString().substring(0, 4) === this.selectedYear.toString();
        const countryMatch = !this.selectedCountry || movie.countries === this.selectedCountry;
        const ratingMatch = !this.selectedRating || movie.rating === this.selectedRating;

        return genreMatch && yearMatch && countryMatch && ratingMatch;
      });
    },
    onSearchClick() {
      this.searchMovies();
      this.$router.push()
    }
  }
});
</script>

<template>
  <div class="filter-container">
    <div class="filter">
      <el-select v-model="selectedGenres" placeholder="Жанры" filterable clearable multiple collapse-tags>
        <el-option v-for="genre in genres" :key="genre" :label="genre" :value="genre" />
      </el-select>
    </div>
    <div class="filter">
      <el-select v-model="selectedYear" placeholder="Год" filterable clearable>
        <el-option v-for="year in years" :key="year" :label="year" :value="year" />
      </el-select>
    </div>
    <div class="filter">
      <el-select v-model="selectedCountry" placeholder="Страны" filterable clearable>
        <el-option v-for="country in countries" :key="country" :label="country" :value="country" />
      </el-select>
    </div>
    <div class="filter">
      <el-select v-model="selectedRating" placeholder="Оценка" filterable clearable>
        <el-option v-for="rating in ratings" :key="rating" :label="rating" :value="rating" />
      </el-select>
    </div>
    <button class="filter" @click="searchMovies">Поиск</button>
  </div>
</template>

<style scoped>
.filter-container {
  width: 80%;
  display: flex;
  margin: 3% auto 3% auto;
  justify-content: space-around;
  padding: 10px;
  background-color: black;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}

.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}

select {
  margin-top: 5px;
}

button {
  border: white solid 1px;
  border-radius: 30px;
  text-align: center;
  justify-content: center;
  height: 32px;
  width: 100px;
  font-size: 15px;
  font-weight: 200;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  color: white;
  background-color: black;

}

button:hover {
  border: #FFB800 solid 1px;
  color: #FFB800;
}

button:active {
  color: black;
  background-color: #FFB800;
}

.el-select {
  color: deeppink;
  --el-select-width: 27vh;
  --el-select-border-color-hover: black;
  --el-select-disabled-color: green;
  --el-select-disabled-border: green;
  --el-select-close-hover-color: #FFB800;
  --el-select-input-color: #FFB800;
  --el-select-multiple-input-color: #FFB800;
  --el-select-input-focus-border-color: #FFB800;
}

.el-select-dropdown {
  background-color: deeppink; /* Замените на желаемый цвет */
}

.el-scrollbar::-webkit-scrollbar-thumb {
  background-color: red;
}

:root {
  --el-popup-modal-bg-color: pink;
}
.el-select__wrapper {
  background-color: red;
}
</style>