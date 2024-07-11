const create_gotop_button = () => {
  const go_top = document.createElement("button");
  go_top.id = "go-top";
  go_top.innerHTML = `
  <svg
    viewBox="0 0 100 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    fill="none"
    stroke="#888"
    stroke-width="2">
    <g>
      <animate
        attributeName="stroke"
        dur="5s"
        repeatCount="indefinite"
        values="#ff0000;#ffff00;#00ff00;#00ffff;#0000ff;#ff00ff;#ff0000"
        >
      </animate>
      <circle cx="50" cy="50" r="40" />
      <path d="M 80 45 L50 25 L 20 45" />
      <path d="M 80 55 L50 35 L 20 55" />
      <circle cx="50" cy="65" r="20"/>
      <ellipse cx="40" cy="65" rx="10" ry="8" stroke-width="1" />
      <ellipse cx="60" cy="65" rx="10" ry="8" stroke-width="1" />
    </g>
  </svg>
  `;
  go_top.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  document.body.append(go_top);
};
create_gotop_button();
const makeIndex = () => {
  const article_index = document.querySelector(".article-index");
  const article_content = document.querySelector("InfinitySpiritContent");
  const addIndex = (element) => {
    const tag = document.createElement(element.tagName);
    tag.innerHTML = element.innerHTML;
    const element_pos = element.getBoundingClientRect();
    const element_x = element_pos.x;
    const element_y = element_pos.y;
    tag.onclick = () => {
      window.scrollTo({
        behavior: "smooth",
        top: element_y - window.innerHeight / 9,
        left: element_x,
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
  const scroll_index = () => {
    const body_scroll = window.scrollY / document.body.scrollHeight;
    const index_scrollTop_target =
      body_scroll * document.querySelector(".article-index").scrollHeight -
      document.querySelector(".article-index").scrollTop;
    const index_scrollTop_now =
      document.querySelector(".article-index").scrollTop;
    document.querySelector(".article-index").scrollTop +=
      (index_scrollTop_target - index_scrollTop_now) / 30;
    requestAnimationFrame(scroll_index);
  };
  scroll_index();
};
makeIndex();

let renew_clock_watch_count = 0;
try {
  document.querySelector("InfinitySpiritDate").innerHTML =
    document.querySelector("date").innerHTML;
} catch (SyntaxError) {
  console.log("not found date object");
}
if (document.querySelector("InfinitySpiritTitle").innerHTML == "") {
  document.querySelector("InfinitySpiritTitle").innerHTML =
    document.querySelector("InfinitySpiritContent h1").innerHTML;
}
const renew_Infinity_clock = () => {
  renew_clock_watch_count = (renew_clock_watch_count + 1) % 5;
  if (renew_clock_watch_count == 0) {
    const now = new Date();
    const clock_hand_svg = document.querySelector(".Infinity-clock_hands");
    const now_hours = now.getHours();
    const now_minutes = now.getMinutes();
    const now_seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const short_way =
      ((((now_hours + now_minutes / 60) / 12) * 360 - 90) * Math.PI) / 180;
    const long_way = (((now_minutes / 60) * 360 - 90) * Math.PI) / 180;
    const thin_way = (((now_seconds / 60) * 360 - 90) * Math.PI) / 180;
    clock_hand_svg.innerHTML =
      `
    <path d="M50 50,l` +
      (30 * Math.cos(thin_way)).toString() +
      " " +
      (30 * Math.sin(thin_way)).toString() +
      `Z" stroke-width="1" />
    <path d="M50 50,l` +
      (30 * Math.cos(long_way)).toString() +
      " " +
      (30 * Math.sin(long_way)).toString() +
      `Z" />
    <path d="M50 50,l` +
      (20 * Math.cos(short_way)).toString() +
      " " +
      (20 * Math.sin(short_way)).toString() +
      `Z" />
  `;
  }
  requestAnimationFrame(renew_Infinity_clock);
};
renew_Infinity_clock();
