var ctx1 = document.getElementById('lineChartPost').getContext('2d');
var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Post',
            data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
var ctx2 = document.getElementById('lineChartUser').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Users online',
            data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                'rgba(41,155,99, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',
            borderWidth: 1
        }, {
            label: 'New users',
            data: [1050, 1000, 1500, 1800, 1500, 1000, 2000, 2000, 2050, 1750, 1300, 1900],
            backgroundColor: [
                'rgba(41,51,155, 1)'

            ],
            borderColor: 'rgb(41, 51, 155)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
var ctx3 = document.getElementById('lineChartHas').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Hastags',
            data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                'rgba(41,155,99, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',
            borderWidth: 1
        }, {
            label: 'New hastags',
            data: [1050, 1000, 1500, 1800, 1500, 1000, 2000, 2000, 2050, 1750, 1300, 1900],
            backgroundColor: [
                'rgba(41,51,155, 1)'

            ],
            borderColor: 'rgb(41, 51, 155)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
var ctx4 = document.getElementById('lineChartReport').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Posts',
            data: [2050, 1900, 2100, 2800, 1800, 2000, 2000, 2000, 2050, 1950, 2300, 2900],
            backgroundColor: [
                'rgba(41,155,99, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',
            borderWidth: 1
        }, {
            label: 'Users',
            data: [1050, 1000, 1500, 1800, 1500, 1000, 2000, 2600, 2450, 1750, 1300, 1900],
            backgroundColor: [
                'rgba(41,51,155, 1)'

            ],
            borderColor: 'rgb(41, 51, 155)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
var ctx5 = document.getElementById('lineChartSpecific').getContext('2d');
var myChart5 = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'User Post',
            data: [5, 10, 3, 2, 15, 20, 25, 12, 15, 13, 9, 6],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});