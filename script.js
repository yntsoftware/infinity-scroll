const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('pulse-loader');

let photos = [];

// Unsplash API
const apiKey = 'F6IjSPFA-goftaXnkmgn5fGBXnsINHyWcpgQFGjSUs8';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes on DOM elements
function setAttributes(el, attrs) {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function displayPhotos() {
  photos.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Put <img> inside <a>, then put both inside imgContainer element
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    photos = await res.json();
    displayPhotos();

  } catch (err) {
  }
}


// On Load
getPhotos();
