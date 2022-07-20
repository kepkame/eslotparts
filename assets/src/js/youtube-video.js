/**
 * Enable YouTube video
 */
 function findVideos() {
    let videos = document.querySelectorAll('.b-video');
  
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }
  
  function setupVideo(video) {
    let link = video.querySelector('.b-video__link');
    let media = video.querySelector('.b-video__media');
    let button = video.querySelector('.b-video__btn');
    let id = '';
    if (media.src.indexOf('ytimg') != -1) {
      id = parseMediaURL(media);
    } else {
      id = parseLinkURL(link);
    }
  
    video.addEventListener('click', function() {
      let iframe = createIframe(id);
  
      link.remove();
      button.remove();
      video.appendChild(iframe);
    });
  
    link.removeAttribute('href');
  }
  
  function parseMediaURL(media) {
    // https://i.ytimg.com/vi/1zd47_SeIJU/maxresdefault.jpg
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);
  
    return match[1];
  }
  
  function parseLinkURL(link) {
    // https://youtu.be/1zd47_SeIJU
    let regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
    let url = link.href;
    let match = url.match(regexp);
  
    return match[1];
  }
  
  function createIframe(id) {
    let iframe = document.createElement('iframe');
  
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('width', '798');
    iframe.setAttribute('height', '421');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('b-video__media');
  
    return iframe;
  }
  
  function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1&mute=1';
  
    return 'https://www.youtube.com/embed/' + id + query;
  }
  
  findVideos();