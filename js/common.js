$(function(){

    $("#trigger").click(function(){
        $(".left_panel").toggleClass("left_panel_desktop");
        $(".right_panel").toggleClass("right_panel_desktop");
        $(".logo_full").toggleClass('logo_full_hide');
        $(".logo_icon").toggleClass('logo_icon_hide');
        $(".sidde_copyright").toggleClass('sidde_copyright_ani');
    });
    $(document).ready(function() {
        $('#example').DataTable();
      });

    //pie chart 2

    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Stack Overflow',     21],
          ['MDN Web Docs',      10],
          ['Quora',  4],
          ['Other CodePens', 3],
          ['From memory',    1]
        ]);

        var options = {
          title: 'Changeable Pie Data Chart',
          colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#44ff00']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
      //pie chart 2
      //bar chart
      var chart = Highcharts.chart('container', {

        chart: {
          type: 'column'
        },
      
        title: {
          text: 'Highcharts responsive chart'
        },
      
        subtitle: {
          text: 'Resize the frame or click buttons to change appearance'
        },
      
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical'
        },
      
        xAxis: {
          categories: ['Apples', 'Oranges', 'Bananas'],
          labels: {
            x: -10
          }
        },
      
        yAxis: {
          allowDecimals: false,
          title: {
            text: 'Amount'
          }
        },
      
        series: [{
          name: 'Christmas Eve',
          data: [1, 4, 3]
        }, {
          name: 'Christmas Day before dinner',
          data: [6, 4, 2]
        }, {
          name: 'Christmas Day after dinner',
          data: [8, 4, 3]
        }],
      
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
              },
              yAxis: {
                labels: {
                  align: 'left',
                  x: 0,
                  y: -5
                },
                title: {
                  text: null
                }
              },
              subtitle: {
                text: null
              },
              credits: {
                enabled: false
              }
            }
          }]
        }
      });
      
      document.getElementById('small').addEventListener('click', function () {
        chart.setSize(400);
      });
      
      document.getElementById('large').addEventListener('click', function () {
        chart.setSize(600);
      });
      
      document.getElementById('auto').addEventListener('click', function () {
        chart.setSize(null);
      });


      function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
      }
      


})

