const wpStringToSlug = str => {
  const from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
  const to = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";
  str = str.replace(/^\s+|\s+$/g, "").toLowerCase();
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }
  return str
    .replace(".", "-") // replace a dot by a dash
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by a dash
    .replace(/-+/g, "-") // collapse dashes
    .replace(/\//g, ""); // collapse all forward-slashes
};

export { wpStringToSlug };
