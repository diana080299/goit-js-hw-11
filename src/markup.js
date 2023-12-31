export function markUp(images) {
    return images
      .map(
        image => `<div class="photo-card"> 
    <a href="${image.largeImageURL}"><img class='img' src="${image.webformatURL}" alt="${image.tags}" width='300' loading="lazy" /></a>
    <div class="info">
      <p class="info-item">
        <b>Likes</b>${image.likes}
      </p>
      <p class="info-item">
        <b>Views</b>${image.views}
      </p>
      <p class="info-item">
        <b>Comments</b>${image.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>${image.downloads}
      </p>
    </div>
  </div>`
      )
      .join('');
  }
  