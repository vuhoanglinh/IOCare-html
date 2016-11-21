// lib hight chart
// http://www.highcharts.com
$(function () {
    /**
    * @todo edit using data drupal
    */
    $('#day-chart').highcharts({
        chart: {
            style: {
                fontFamily: 'Roboto'
            }
        },
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['ten minutes ago', 'an hour ago', 'an four hour ago', 'a long time ago']
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Lượt',
            crosshairs: true,
            shared: true,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Lượt xem',
            marker: {
                symbol: 'diamond'
            },
            color: '#e05c4c',
            data: [100, 40, 175, 120]
        }, {
            name: 'Bình luận',
            marker: {
                symbol: 'square'
            },
            color: "#309fc2",
            data: [50, 90, 125, 200]
        }, {
            name: 'Thích',
            color: "#5e77ab",
            data: [60, 75, 45, 70]
        }]
    });

    /**
    * @todo edit using data drupal, sort by day of week
    */
    $('#week-chart').highcharts({
        chart: {
            style: {
                fontFamily: 'Roboto'
            }
        },
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['22/11', '23/11', '24/11', '25/11', '26/11', '27/11', '28/11']
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Lượt',
            crosshairs: true,
            shared: true,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Lượt xem',
            marker: {
                symbol: 'diamond'
            },
            color: '#e05c4c',
            data: [100, 40, 175, 70, 150, 200]
        }, {
            name: 'Bình luận',
            marker: {
                symbol: 'square'
            },
            color: "#309fc2",
            data: [50, 90, 125, 200, 50, 130]
        }, {
            name: 'Thích',
            color: "#5e77ab",
            data: [60, 75, 45, 70, 130, 100]
        }]
    });

    /**
    * @todo edit using data drupal, sort by day of month
    */
    $('#month-chart').highcharts({
        chart: {
            style: {
                fontFamily: 'Roboto'
            }
        },
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7']
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Lượt',
            crosshairs: true,
            shared: true,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Lượt xem',
            marker: {
                symbol: 'diamond'
            },
            color: '#e05c4c',
            data: [100, 40, 175, 70, 150, 200]
        }, {
            name: 'Bình luận',
            marker: {
                symbol: 'square'
            },
            color: "#309fc2",
            data: [50, 90, 125, 200, 50, 130]
        }, {
            name: 'Thích',
            color: "#5e77ab",
            data: [60, 75, 45, 70, 130, 100]
        }]
    });

    /**
    * @todo edit using data drupal, full time
    */
    $('#fulltime-chart').highcharts({
        chart: {
            style: {
                fontFamily: 'Roboto'
            }
        },
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Lượt',
            crosshairs: true,
            shared: true,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Lượt xem',
            marker: {
                symbol: 'diamond'
            },
            color: '#e05c4c',
            data: [70, 150, 200]
        }, {
            name: 'Bình luận',
            marker: {
                symbol: 'square'
            },
            color: "#309fc2",
            data: [50, 90, 130]
        }, {
            name: 'Thích',
            color: "#5e77ab",
            data: [60, 75, 100]
        }]
    });
});

$(document).ready(function(){
    // fix dimensions of chart that was in a hidden element
    jQuery(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function (e) { // on tab selection event
        jQuery( ".chart" ).each(function() { // target each element with the .contains-chart class
            var chart = jQuery(this).highcharts(); // target the chart itself
            chart.reflow() // reflow that chart
        });
    })
});