const innerWaves = 3.5;
const numberOfDataPoints = 2048;
const canvasHeight = 32;
const canvasWidth = 32;
const margin = 2;
const dataPoints = new Array(numberOfDataPoints);
const drawingContext = c.getContext("2d");
drawingContext.strokeStyle = "green";
drawingContext.lineWidth = 2;
drawingContext.moveTo(0, canvasHeight / 2);
for (let index = 0; index < dataPoints.length; index++) {
  const value = Math.sin(
    (innerWaves * index * 2 * Math.PI) / numberOfDataPoints
  );
  const amplitude = Math.sin((index * Math.PI) / numberOfDataPoints);
  dataPoints[index] =
    ((canvasHeight - margin) / 2) * (amplitude * value) + 0.5 * canvasHeight;
  drawingContext.lineTo(
    (index / dataPoints.length) * canvasWidth,
    dataPoints[index]
  );
}
drawingContext.stroke();
