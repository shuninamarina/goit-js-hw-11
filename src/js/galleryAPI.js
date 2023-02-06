import axios from 'axios';

const API_KEY = '33429067-310a486f36471618a3087cf1d';
axios.defaults.baseURL = 'https://pixabay.com/api/';

class GalleryAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchGallery() {
    const options = new URLSearchParams({
      q: this.searchQuery,
      per_page: 40,
      page: this.page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });

    const { data } = await axios(`?${options}`);
    this.incrementPage();
    return data;
  }

  get _searchQuery() {
    return this.searchQuery;
  }

  set _searchQuery(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

export const galleryAPI = new GalleryAPI();
