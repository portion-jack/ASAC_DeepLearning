// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart_tf_high");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2", "6", "8", "10", "13", "16", "21", "28", "33", "45", "59", "71", "83", "98", "100"],
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
      data: [0.78000003099, 0.88764709234, 0.90000003576, 0.90294122696, 
             0.92058831453, 0.92235296965, 0.92705887556, 0.93705886602,
             0.94352948666, 0.95352947712, 0.96588242054, 0.97470593452,
             0.98000007868, 0.98882359266, 0.98294121027]
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
      data: [0.81924885511, 0.89906102419, 0.89906102419, 0.90845072269,
             0.92018783092, 0.92018783092, 0.92018783092, 0.93427228928,
             0.93192487955, 0.93427228928, 0.93427228928, 0.9178403616,
             0.92488265038, 0.92957746983, 0.92253524065
        ],
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
