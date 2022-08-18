export function getImageDimensions(url) {
  const start = url.lastIndexOf("-") + 1;
  const end = url.lastIndexOf(".");
  const dimensions = url.slice(start, end);

  const imgWidth = parseInt(dimensions.split("x")[0]);
  const imgHeight = parseInt(dimensions.split("x")[1]);

  return { imgWidth, imgHeight };
}
