// demo charts
    var ctx = document.getElementById('myWeightChart');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            datasets: [{
                label: 'Actual weight',
                data: [103,120,140,160,170,180,200,220,232,251,270,300,345,366,368,375,388,432,448,460,466,467],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Industry',
                data: [100, 300, 550],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'upper',
                data: [1, 2, 3, 4, 5, 6],
                backgroundColor: [
                    'rgba(0, 156, 132, 0.2)',
                    'rgba(0, 156, 132, 0.2)',
                    'rgba(0, 156, 132, 0.2)',
                    'rgba(0, 156, 132, 0.2)',
                    'rgba(0, 156, 132, 0.2)',
                    'rgba(0, 156, 132, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(0, 156, 222, 1)',
                    'rgba(0, 156, 222, 1)',
                    'rgba(0, 156, 222, 1)',
                    'rgba(0, 156, 222, 1)',
                    'rgba(0, 156, 222, 1)',
                    'rgba(0, 156, 222, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Lower',
                data: [1, 2, 3, 4, 5, 6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                        stacked: true,
                        min: 50,
                        max: 500,
                        stepSize: 0.5
                }]
            }
        }
    });

    var ctx = document.getElementById('myReproChart');
    var myReproductiveChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [0,3,6,9,12],
            datasets: [{
                label: 'Target',
                data: [0,50,75,85,84],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Your herd',
                data: [0,25,35,51,64,68,72,74,77,82,81,80],
                backgroundColor: [
                    'rgba(0, 156, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 156, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                        stacked: false,
                        min: 0,
                        max: 100,
                        stepSize: 10
                }]
            }
        }
    });