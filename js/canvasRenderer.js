function drawPreview(image, rows, cols, canvas) {
  const ctx = canvas.getContext("2d");

  const maxWidth = 600;
  const scale = maxWidth / image.width;

  canvas.width = image.width * scale;
  canvas.height = image.height * scale;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#1A1A1A";
  ctx.lineWidth = 2;

  for (let i = 1; i < cols; i++) {
    ctx.beginPath();
    ctx.moveTo((canvas.width / cols) * i, 0);
    ctx.lineTo((canvas.width / cols) * i, canvas.height);
    ctx.stroke();
  }

  for (let i = 1; i < rows; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (canvas.height / rows) * i);
    ctx.lineTo(canvas.width, (canvas.height / rows) * i);
    ctx.stroke();
  }
}

function renderPieces(image, slices, container) {
  container.innerHTML = "";

  slices.forEach(slice => {
    const canvas = document.createElement("canvas");
    canvas.width = slice.sw;
    canvas.height = slice.sh;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      slice.sx,
      slice.sy,
      slice.sw,
      slice.sh,
      0,
      0,
      slice.sw,
      slice.sh
    );

    canvas.style.maxWidth = "200px";
    canvas.style.margin = "5px";
    container.appendChild(canvas);
  });
}
