// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart_torch_low");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2", "6", "8", "10", "13", "16", "21", "28", "33", "45", "59", "102", "202", "302", "404", "1000"],
    datasets: [{
      label: "train acc",
      lineTension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0.13882352941, 0.44882352941, 0.76764705882, 0.74882352941,
             0.73529411765, 0.76647058824, 0.74941176471, 0.76941176471,
             0.57, 0.76411764706, 0.79352941176, 0.87823529412,
             0.90294117647, 0.90882352941, 0.92352941176, 0.96235294118]
    },
    {
      label: "val acc",
      lineTension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0.13849765258, 0.44835680751, 0.77230046948, 0.75117370892,
             0.71596244131, 0.77230046948, 0.72769953052, 0.76056338028,
             0.55399061033, 0.75352112676, 0.80985915493, 0.89201877934,
             0.88497652582, 0.91784037559, 0.91784037559, 0.91549295775],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 0
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1,
        }
      }],
    },
    legend: {
      display : true
    }
  }
});
