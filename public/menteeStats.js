const rate = document.getElementById("rate");
const stars = document.getElementById("stars");
const crank = document.getElementById("crank");

const cfrate = document.getElementById("cfrate");
const cfrank = document.getElementById("cfrank");

const total = document.getElementById("total");

function getData() {
  url1 = "https://competitive-coding-api.herokuapp.com/api/codechef/keshab_02";
  url2 =
    "https://competitive-coding-api.herokuapp.com/api/codeforces/nishant403";
  url3 =
    "https://competitive-coding-api.herokuapp.com/api/leetcode/chaharnishant";
  fetch(url1)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.rating);
      // console.log(data.stars);
      // console.log(data.country_rank);
      rate.innerHTML = data.rating;
      stars.innerHTML = data.stars;
      crank.innerHTML = data.country_rank;

      var m1 = parseInt(data.contest_ratings[0].getmonth);
      var r1 = parseInt(data.contest_ratings[0].rank);

      var m2 = parseInt(data.contest_ratings[1].getmonth);
      var r2 = parseInt(data.contest_ratings[1].rank);

      var m3 = parseInt(data.contest_ratings[2].getmonth);
      var r3 = parseInt(data.contest_ratings[2].rank);

      var m4 = parseInt(data.contest_ratings[3].getmonth);
      var r4 = parseInt(data.contest_ratings[3].rank);

      var chart1 = document.getElementById("curve_chart1");
      drawChart(m1, m2, m3, m4, r1, r2, r3, r4, chart1);
    });

  fetch(url2)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.rating);
      // console.log(data.stars);
      // console.log(data.country_rank);
      cfrate.innerHTML = data.rating;
      cfrank.innerHTML = data.rank;

      var m1 = 4;
      var r1 = parseInt(data.contests[0].Rank);

      var m2 = 3;
      var r2 = parseInt(data.contests[1].Rank);

      var m3 = 2;
      var r3 = parseInt(data.contests[2].Rank);

      var m4 = 1;
      var r4 = parseInt(data.contests[3].Rank);

      var chart2 = document.getElementById("curve_chart2");
      drawChart(m1, m2, m3, m4, r1, r2, r3, r4, chart2);
    });

  fetch(url3)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.rating);
      // console.log(data.stars);
      // console.log(data.country_rank);
      console.log(data);
      total.innerHTML = data.total_problems_solved;
      var easy = parseInt(data.easy_questions_solved);
      var medium = parseInt(data.medium_questions_solved);
      var hard = parseInt(data.hard_questions_solved);

      console.log(easy);

      var chart = document.getElementById("piechart");
      //   drawChart2();
    });
}
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart(m1, m2, m3, m4, r1, r2, r3, r4, chartid) {
  var data = google.visualization.arrayToDataTable([
    ["month", "rank"],
    [m1, r1],
    [m2, r2],
    [m3, r3],
    [m4, r4],
  ]);

  var options = {
    title: "Contest Statistics",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(chartid);

  chart.draw(data, options);
}
// google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Level", "Problems solved"],
    ["easy", easy],
    ["medium", medium],
    ["hard", hard],
  ]);

  var options = {
    title: "My Daily Activities",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
