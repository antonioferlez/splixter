function calculateGridSmart(
  totalPages,
  orientation,
  imageRatio,
  paperWidth,
  paperHeight,
  overlapMM
) {
  const usableW = paperWidth - overlapMM;
  const usableH = paperHeight - overlapMM;

  let cols, rows;

  if (orientation === "horizontal") {
    cols = totalPages;

    const totalPosterWidth = cols * usableW;
    const totalPosterHeight = totalPosterWidth / imageRatio;

    rows = Math.ceil(totalPosterHeight / usableH);
  } else {
    rows = totalPages;

    const totalPosterHeight = rows * usableH;
    const totalPosterWidth = totalPosterHeight * imageRatio;

    cols = Math.ceil(totalPosterWidth / usableW);
  }

  return { rows, cols };
}

function getSlices(image, rows, cols, overlapPx) {
  const sliceW = image.width / cols;
  const sliceH = image.height / rows;

  const slices = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const sx = x * sliceW - overlapPx;
      const sy = y * sliceH - overlapPx;

      slices.push({
        sx: Math.max(0, sx),
        sy: Math.max(0, sy),
        sw: Math.min(image.width - sx, sliceW + overlapPx * 2),
        sh: Math.min(image.height - sy, sliceH + overlapPx * 2)
      });
    }
  }

  return slices;
}
