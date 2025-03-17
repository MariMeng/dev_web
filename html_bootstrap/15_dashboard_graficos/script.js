const doughnutChart = document.getElementById("doughnut");
const pieChart = document.getElementById("pie");
const lineChart = document.getElementById("line");
const barChart = document.getElementById("bar");

function criarGrafico(type,chart) {  
    new Chart(chart, {
    type: type,
    data: {
      labels: ["JavaScript","HTML/CSS","Python","SQL","TypeScript","Bash/Shell"],
      datasets: [{
        label: '# Linguaguens de programação mais utilizadas 2023',
        data: [63.61,52.97,49.28,48.66,38.87,32.37],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

criarGrafico('bar', barChart);
criarGrafico('line', lineChart);
criarGrafico('pie', pieChart);
criarGrafico('doughnut', doughnutChart);