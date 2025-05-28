const gallery = document.querySelector(".gallery");

for (let i = 0; i <= 11; i++) {
  const item = document.createElement("div");
  item.className = "gallery-item";

  const img = document.createElement("img");
  img.src = `images/image${i}.jpg`;
  img.alt = `Image ${i}`;
  item.appendChild(img);

  if (i > 0 && i < 11) {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = `audio/dial${i}.mp3`;
    item.appendChild(audio);
  }

  gallery.appendChild(item);
}
