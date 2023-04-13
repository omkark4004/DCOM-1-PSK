import React,{useEffect} from 'react'
import Chart from 'chart.js/auto';

export const Wave =(props)=>{
    const user=props.user;
    const Amplitude=props.amp;
    const data = [];
    let prev;
    let k =2*user.length;
    if(k)
    for (let i = 0; i <= k*Math.PI; i+=0.001*k) {
        prev =Amplitude*Math.sin(i);
        if(user[Math.floor((i/(2*Math.PI)))]===0){
            prev=prev*-1;
        }
        data.push({x: i, y: prev});
    }
    else{
        for (let i = 0; i <= 2*Math.PI; i+=0.001) {
            data.push({x: i, y: null});
        }
    }

    const totalDuration = k*400;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
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
            }
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
            }
        }
    }
    useEffect(() => {
        var table = document.getElementById('myChart').getContext('2d')
        var myChart = new Chart(table, {
            type: "line",
            data: {
                datasets: [{
                    borderColor: 'blue',
                    borderWidth: 1,
                    radius: 0,
                    data: data,
                    lineTension: 0.5
                }]
            },
            options: {
                animation,
                interaction: {
                    intersect: false
                },
                plugins: {
                    legend: false
                },
                scales: {
                    x: {
                        type: 'linear'
                    }
                }
            }
        });
        return () => {
            myChart.destroy()
        }
    })
    return (
        <div id="chart-wrapper">
            <canvas id="myChart"></canvas>
        </div>
    )
}

export default Wave