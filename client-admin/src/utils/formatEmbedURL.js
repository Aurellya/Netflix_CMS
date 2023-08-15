const formatEmbedURL = (url) => {
  const formattedUrl = "//www.youtube.com/embed/" + url.split("youtu.be/")[1];
  return formattedUrl;
};

export default formatEmbedURL;
