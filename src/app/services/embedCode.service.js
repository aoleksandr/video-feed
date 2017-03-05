export default function() {
  return {
    getCode(data) {
      let result = '';
      switch(data.source) {
        case 'youtube':
          result = `<iframe src="https://www.youtube.com/embed/${data.videoId}" frameborder="0" allowfullscreen></iframe>`;
          break;
        case 'facebook':
          result = `<iframe src="https://www.facebook.com/video/embed?video_id=${data.videoId}" frameborder="0" allowfullscreen></iframe>`;
          break;
        case 'url':
          result = `<video controls><source src="${data.url}" type="video/mp4"></video>`;
          break;
      }
      return result;
    }
  };
}