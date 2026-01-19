function loadImageFromFile(file, callback) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => callback(img);
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function loadImageFromURL(url, callback) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => callback(img);
  img.onerror = () => alert("No se pudo cargar la imagen desde la URL");
  img.src = url;
}
