function generatePDF(image, slices, paper) {
  const sizes = {
    A4: [210, 297],
    LETTER: [216, 279],
    LEGAL: [216, 356]
  };

  const [pageW, pageH] = sizes[paper];
  const margin = 8;

  const pdf = new window.jspdf.jsPDF("portrait", "mm", [pageW, pageH]);

  slices.forEach((slice, i) => {
    if (i > 0) pdf.addPage();

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

    const imgData = canvas.toDataURL("image/png");

    const scale = Math.min(
      (pageW - margin * 2) / slice.sw,
      (pageH - margin * 2) / slice.sh
    );

    const drawW = slice.sw * scale;
    const drawH = slice.sh * scale;

    const x = (pageW - drawW) / 2;
    const y = (pageH - drawH) / 2;

    pdf.addImage(imgData, "PNG", x, y, drawW, drawH);
  });

  pdf.save("splixter.pdf");
}
