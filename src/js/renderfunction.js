import { refs } from './refs';

function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => ` <li class="photo-card">
      <a href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes:${likes}</b>
        </p>
        <p class="info-item">
          <b>Views:${views}</b>
        </p>
        <p class="info-item">
          <b>Comments:${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads:${downloads}</b>
        </p>
      </div>
      </a>
    </li>`
    )
    .join('');
}

function renderGalleryMarkup(images) {
  refs.galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup(images));
}

function clearGalleryMarkup() {
  refs.galleryList.innerHTML = '';
}

export { renderGalleryMarkup, clearGalleryMarkup };
