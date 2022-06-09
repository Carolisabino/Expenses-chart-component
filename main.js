let xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const yValues = [17.5, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
let barColors = "hsl(10, 79%, 65%)";

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
      label: "asd",
    }]
  },
  options: {
    legend: {
      display: false
   },
   tooltips: {
      enabled: false
   },
    scales: {
         xAxes: [{
            gridLines: {
               display: false,
            }
         }],
         yAxes: [{
            gridLines: {
               display: false,
            },
            ticks: {
              display: false
          },
         }]
    },
    plugins: {
      legend: {
        display: false
      }
    }
 }
});