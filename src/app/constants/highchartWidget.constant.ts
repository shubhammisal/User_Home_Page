

export class ChartOptions {
    
    public static columnChartOptions : any = {
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Months'
            },
            labels: {
                style: {
                    fontSize :'10px',
                }
            }
        },
        yAxis: {
            min: 0,
            max:100,
            tickInterval: 20,
            title: {
                text: 'Security rating',
            },
            stackLabels: {
                enabled: false
            },
            labels: {
                style: {
                    fontSize :'10px',
                }
            }
        },
        legend: {
            enabled : false
        },
        tooltip: {
            headerFormat: '<b>{category}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total Rating: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                // borderRadius: '4px',
                borderWidth: 0,
                dataLabels: {
                    enabled: false
                },
                // borderRadiusTopLeft: 5,
                // borderRadiusTopRight: 5,
            }
        },
        series: [
            {
                name: 'A3',
                data: [30,33,15,25,12,24,10,22,25,21,27,20],
                color:'#ebecf0'
            }, 
            {
                name: 'A2',
                data: [20,30,20,20,18,28,35,25,23,25,32,20],
                color: '#9979e6'
            }, 
            {
                name: 'A1',
                data: [25,35,15,35,20,35,30,30,27,35,38,25],
                color:'#6343c0'
            }
               ]
    }

    //---------------------------------------------------------------------------------------

    public static gaugeChartOptions : any = {
        chart: {
          type: 'solidgauge',
          height: '30%',
          backgroundColor: 'transparent',
          margin: [0, 0, 20, 0]
        },
        title: null,
      
        pane: {
          center: ['40%', '80%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
            backgroundColor: '#E6E6E6',
            innerRadius: '80%',
            outerRadius: '100%',
            shape: 'arc',
          }
        },
      
        tooltip: {
          enabled: false
        },
      
        yAxis: {
          min: 0,
          max: 300,
          stops: [
            [0.8, '#6343c0'] 
          ],
          lineWidth: 0,
          tickWidth: 0,
          minorTickInterval: null,
          tickAmount: 0,
          title: null,
          labels: {
            enabled: false
          }
        },
      
        plotOptions: {
          solidgauge: {
            dataLabels: {
              y: -20,
              borderWidth: 0,
              useHTML: true,
              format: '<div style="text-align:center"><span style="font-size:20px;font-weight:bold;color:#1e1e1e">{y}</span></div>'
            },
            innerRadius: '80%',
            outerRadius: '100%',
            rounded: true,
          }
        },
      
        series: [{
          name: 'Vendors',
          type: 'solidgauge',
          data: [240]
        }]
      };

}