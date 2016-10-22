// i will turn my json variable, which is an array of objects,
// into an array of arrays

// step 1: make empty array
var dataArray = [];

//step 2: make headers
var headers = ['State', 'GDP_per_capita'];
dataArray.push(headers);

// i will sort my json by GDP_per_capita
json.sort(function(a,b){
  return b.GDP_per_capita - a.GDP_per_capita;
});
//step 3: Loop through json with forEach
json.forEach(function(d){
  dataArray.push([d.state,d.GDP_per_capita]);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chatArea:{
      top:20,
      bottom:100,
      right:0,
      left:100,
    },
    fontSize: 12,
    fontName: "Helvetica"
  };

  var chart = new google.visualization.BarChart(document.getElementById('chart'));

  chart.draw(data, options);
}
