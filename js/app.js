const fileInput = document.getElementById("fileInput");
const urlInput = document.getElementById("urlInput");
const pagesInput = document.getElementById("pages");
const directionSelect = document.getElementById("direction");
const paperSize = document.getElementById("paperSize");

const previewBtn = document.getElementById("previewBtn");
const pdfBtn = document.getElementById("pdfBtn");

const previewCanvas = document.getElementById("previewCanvas");
const container = document.getElementById("canvasContainer");

let currentImage = null;
let currentSlices = [];

function loadImage(callback) {
  if (fileInput.files.length) {
    loadImageFromFile(fileInput.files[0], callback);
  } else if (urlInput.value) {
    loadImageFromURL(urlInput.value, callback);
  } else {
    alert("Sube una imagen o pega una URL");
  }
}

previewBtn.onclick = () => {
  loadImage(image => {
    currentImage = image;

    const pages = parseInt(pagesInput.value);
    const orientation = directionSelect.value;
    const paper = paperSize.value;

    const paperSizes = {
    A4: [210, 297],
    LETTER: [216, 279],
    LEGAL: [216, 356]
    };

    const [pw, ph] = paperSizes[paper];
    const overlapMM = 8;

    const imageRatio = image.width / image.height;

    const { rows, cols } = calculateGridSmart(
    pages,
    orientation,
    imageRatio,
    pw,
    ph,
    overlapMM
    );

    drawPreview(image, rows, cols, previewCanvas);

    const overlapPx = (overlapMM / pw) * image.width;
    currentSlices = getSlices(image, rows, cols, overlapPx);

    renderPieces(image, currentSlices, container);
  });
};

pdfBtn.onclick = () => {
  if (!currentImage || !currentSlices.length) {
    alert("Genera la vista previa primero");
    return;
  }

  generatePDF(currentImage, currentSlices, paperSize.value);
};
