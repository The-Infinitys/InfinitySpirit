const makeTitle = () => {
  const article_title = document.querySelector(".article-title");
  article_title.innerHTML = document.querySelector(
    "InfinitySpiritContent h1"
  ).innerHTML;
};
makeTitle();
const makeIndex = () => {
  const article_index = document.querySelector(".article-index");
  const article_content = document.querySelector("InfinitySpiritContent");
  const addIndex = (element) => {
    const tag = document.createElement(element.tagName);
    tag.innerHTML = element.innerHTML;
    tag.onclick = () => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "center",
      });
    };
    article_index.append(tag);
  };
  for (let index = 0; index < article_content.children.length; index++) {
    const element = article_content.children[index];
    const tagname = element.tagName.toLowerCase();
    if (
      tagname in
      {
        h1: "",
        h2: "",
        h3: "",
        h4: "",
      }
    ) {
      addIndex(element);
    }
  }
};
makeIndex();
