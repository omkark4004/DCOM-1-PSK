import Chart from 'chart.js/auto';

export function setAnimation(k, data) {
  const totalDuration = k * 400;
  const delayBetweenPoints = totalDuration / data.length;
  const previousY = (ctx) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(['y'], true).y;
  const animation = {
    x: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: NaN,
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  };
  return animation;
}

export function chartConfig(table, data, animation) {
  var myChart = new Chart(table, {
    type: 'line',
    data: {
      datasets: [
        {
          borderColor: 'blue',
          borderWidth: 1,
          radius: 0,
          data: data,
          lineTension: 0.5,
        },
      ],
    },
    options: {
      animation,
      interaction: {
        intersect: false,
      },
      plugins: {
        legend: false,
      },
      scales: {
        x: {
          type: 'linear',
          title: {
            display: true,
            text: 'Time',
          },
        },
        y: {
          type: 'linear',
          title: {
            display: true,
            text: 'Amplitude',
          },
        },
      },
    },
  });
  return myChart;
}
