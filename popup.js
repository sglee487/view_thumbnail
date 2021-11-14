var thumbnail_box = document.getElementById("thumbnail_box");

chrome.tabs.query({ active:true, currentWindow: true }, tabs => {
    var video_url = tabs[0].url;
    url_match = video_url.match(/watch\?v=([^&]*)/);

    var hq_url = `https://i.ytimg.com/vi/${url_match[1]}/hqdefault.jpg`;
    hq_tag = document.createElement("img");
    hq_tag.src = hq_url;
    thumbnail_box.appendChild(hq_tag);

    var max_tag = new Image();
    max_tag.src = `https://i.ytimg.com/vi/${url_match[1]}/maxresdefault.jpg`;
    max_tag.onload = function() {
       if (max_tag.width == 1280) {
        max_tag.width = 480;
        max_tag.height = 270;
        max_tag.style.top = '45px';
        thumbnail_box.appendChild(max_tag);
      }
    }

});