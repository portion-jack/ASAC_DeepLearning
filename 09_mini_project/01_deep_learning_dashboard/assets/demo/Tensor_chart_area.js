// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart_tf_low");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2", "6", "8", "10", "13", "16", "21", "28", "33", "45", "59", "102", "202", "302", "404", "1000"],
    datasets: [{
      label: "train acc",
      lineTension: 0.3,
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0.12352941176, 0.19882352941, 0.27294117647, 0.37470588235,
             0.50882352941, 0.63117647059, 0.71705882353, 0.77764705882,
             0.80411764706, 0.84294117647, 0.87, 0.89176470588,
             0.91647058824, 0.93647058824, 0.95058823529, 0.99294117647],
    },
    {
      label: "val acc",
      lineTension: 0.3,
      borderColor: "rgba(255,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0.11502347418, 0.17840375587, 0.24178403756, 0.39201877934,
             0.50469483568, 0.62441314554, 0.70187793427, 0.76995305164,
             0.80046948357, 0.84741784038, 0.89201877934, 0.9014084507,
             0.92253521127, 0.92957746479, 0.93427230047, 0.92488262911],
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
      display: true
    }
  }
});
