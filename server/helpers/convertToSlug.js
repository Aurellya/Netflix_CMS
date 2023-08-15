function convertToSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters except hyphens
    .replace(/--+/g, "-") // Replace consecutive hyphens with a single hyphen
    .trim();
}

module.exports = convertToSlug;
