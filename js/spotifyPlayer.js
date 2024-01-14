import { getAccessToken } from "./spotify";
import { profile } from "./spotify";

populateUI(profile);

function toggleClick(element){
  element.classList.toggle("fa-play-circle");
}
function populateUI(profile) {
    document.getElementById("displayName").textContent = profile.display_name == null? "no login": profile.display_name;
    // if (profile.images[0]) {
    //     const profileImage = new Image(200, 200);
    //     profileImage.src = profile.images[0].url;
    //     document.getElementById("avatar").appendChild(profileImage);
    //     document.getElementById("imgUrl").innerText = profile.images[0].url;
    // }
    // document.getElementById("id").innerText = profile.id;
    // document.getElementById("email").innerText = profile.email;
    // document.getElementById("uri").innerText = profile.uri;
    // document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
    // document.getElementById("url").innerText = profile.href;
    // document.getElementById("url").setAttribute("href", profile.href);
}

const NOW_PLAYING_URL = `https://api.spotify.com/v1/me/player/currently-playing`

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
