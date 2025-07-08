const mediumUsername = "studentteam";
const rssFeedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`;
const CACHE_KEY = "mediumFeedCache";
const CACHE_TIME_KEY = "mediumFeedCacheTime";
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

async function fetchMediumFeed() {
    const now = Date.now();
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    const cachedTime = sessionStorage.getItem(CACHE_TIME_KEY);

    if (cachedData && cachedTime && (now - cachedTime < CACHE_DURATION)) {
        return JSON.parse(cachedData);
    }

    const response = await fetch(rssFeedUrl);
    const data = await response.json();

    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
    sessionStorage.setItem(CACHE_TIME_KEY, now.toString());

    return data;
}

function createCard(post) {
    const imgMatch = post.content.match(/<img[^>]+src="(https:\/\/[^">]+(?:jpg|jpeg|png|gif))"/i);
    const imgSrc = imgMatch ? imgMatch[1] : "../../../assets/images/placeholder.png";

    return `
      <div class="card-v13">
        <a class="card-v13__figure-wrapper" href="${post.link}" target="_blank">
          <figure class="card-v13__figure">
            <img src="${imgSrc}" alt="Post image">
          </figure>
        </a>
        <div class="cr8-text-center cr8-margin-top-sm">
          <h3 class="cr8-text-md">
            <a class="cr8-color-contrast-higher" href="${post.link}" target="_blank">${post.title}</a>
          </h3>
          <div class="card-v13__separator cr8-margin-x-auto cr8-margin-y-sm" role="presentation"></div>
          <p class="cr8-color-contrast-medium cr8-text-sm cr8-line-height-lg">${new Date(post.pubDate).toDateString()}</p>
          <div class="cr8-margin-top-sm">
            <button class="btn-fx-3 cr8-radius-md cr8-text-sm">
              <div class="btn-fx-3__inner cr8-padding-y-xs cr8-padding-x-md">
                <span>Learn More</span>
                <figure class="btn-fx-3__icon-wrapper" aria-hidden="true">
                  <!-- You can add an icon here if needed -->
                </figure>
              </div>
            </button>
          </div>
        </div>
      </div>
    `;
}

async function renderCards() {
    try {
        const data = await fetchMediumFeed();
        const container = document.getElementById("cardContainer");

        const maxPosts = 10; // number of posts to show
        data.items.slice(0, maxPosts).forEach(post => {
            container.innerHTML += createCard(post);
        });
    } catch (error) {
        console.error("Error loading Medium posts:", error);
    }
}

renderCards();
