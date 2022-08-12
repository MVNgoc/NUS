var search_icon = document.getElementById('search-icon');
var search_hashtag = document.getElementById('search-hashtag');
var avatar_user = document.getElementById('avatar-user');
var subnav_user = document.getElementById('subnav-user');
var more_icon = document.getElementById('more-icon');

search_icon.onclick = () => {
    search_icon.style.display = 'none';
    search_hashtag.style.display = 'block';
    search_hashtag.style.animation = 'modalSideslipIn ease .5s';
    more_icon.style.display = 'none';
    back_icon.style.display = 'block';
    avatar_user.style.left = '419px';
    subnav_user.style.left = '316px';
}

avatar_user.onclick = (e) => {
    subnav_user.style.display = 'block';
    e.stopPropagation();
}

var back_icon = document.getElementById('back-icon');

back_icon.onclick = () => {
    search_icon.style.display = 'block';
    search_hashtag.style.display = 'none';
    more_icon.style.display = 'block';
    back_icon.style.display = 'none';
    avatar_user.style.left = '570px';
    subnav_user.style.left = '468px';
}

var toggle_switch = document.getElementById('toggle-switch');
var nav = document.getElementById('nav');
var heightHeader = toggle_switch.clientHeight;

more_icon.onclick = () => {
    var isClose = toggle_switch.clientHeight === heightHeader;
    if (isClose) {
        toggle_switch.style.height = 'auto';
        nav.style.display = 'flex';
        avatar_user.style.left = '392px';
        subnav_user.style.left = '288px';
    } else {
        toggle_switch.style.height = null;
        nav.style.display = 'none';
        avatar_user.style.left = '570px';
        subnav_user.style.left = '468px';
    }
}

var more_info_icon = document.getElementsByClassName('more-info-icon');
var more_info_subnav = document.getElementsByClassName('more-info-subnav');

for (let i = 0; i < more_info_icon.length; i++) {
    more_info_icon[i].onclick = (e) => {
        if (more_info_subnav[i].style.display == 'block') {
            more_info_subnav[i].style.display = 'none';
        } else {
            more_info_subnav[i].style.display = 'block';
            e.stopPropagation();
        }
    }
}

document.onclick = () => {
    subnav_user.style.display = 'none';
}


$('.listAcc_btndelete').click(() => {
    $('#confirmDialog').removeClass('confirmdig-hide')
})

var confirmDialog = document.getElementById('confirmDialog');
$('#btnCancle').click(() => {
    $('#confirmDialog').addClass('confirmdig-hide')
    for (let i = 0; i < more_info_icon.length; i++) {
        more_info_subnav[i].style.display = 'none';
    }
})

var createBlogContainer = document.getElementById('create-blog-container');
var blogName = document.getElementById('blog-name');
var cataloge = document.getElementById('cataloge');
var blogContent = document.getElementById('blog-content');
var checkbox = document.getElementsByClassName('checkbox');
var btnPost = document.getElementById('btnPost');

$('#btnCancle-create-blog').click(() => {
    createBlogContainer.classList.add('confirmdig-hide');
    blogName.value = '';
    cataloge.options[0].selected = true;
    blogContent.value = '';
    checkbox[0].checked = false;
    btnPost.disabled = true;
    for (let i = 0; i < more_info_icon.length; i++) {
        more_info_subnav[i].style.display = 'none';
    }
})

$('#btnCancleDeleteBlog').click(() => {
    $('#confirmDialogDeleteBlog').addClass('confirmdig-hide')
    for (let i = 0; i < more_info_icon.length; i++) {
        more_info_subnav[i].style.display = 'none';
    }
})

$('.listAcc_btnaccept').click(() => {
    let text = "This account has been approved!";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
})

var checkboxtextarea = document.getElementById('checkbox-textarea');
var textareareport = document.getElementById('textarea-report');

if(checkboxtextarea) {
    checkboxtextarea.onclick = () => {
        if (checkboxtextarea.checked) {
            textareareport.disabled = false;
        } else {
            textareareport.disabled = true;
            textareareport.value = '';
        }
    }
}

var reportButton = document.getElementsByClassName('report-button');
var btnSend = document.getElementById('btnSend');

for (let i = 0; i < reportButton.length; i++) {
    reportButton[i].onclick = () => {
        confirmDialog.classList.remove('confirmdig-hide');
        for (let j = 0; j < checkbox.length; j++) {
            checkbox[j].checked = false;
            textareareport.disabled = true;
            textareareport.value = '';
            checkbox[j].onclick = () => {
                if(checkbox[j].checked) {
                    btnSend.disabled = false;
                }
                else {
                    btnSend.disabled = true;
                }
            }
        }
    }
} 

$('#button_contact').click(() => {
    $('#sidebar').css("display", "none");
})

var createBlogInput = document.getElementById('create-blog-input');

if(createBlogInput) {
    createBlogInput.onclick = () => {
        createBlogContainer.classList.remove('confirmdig-hide');
    }
}

if(blogName) {
    blogName.onkeyup = () => {
        if ((blogName.value != '') && (blogContent.value != '')) {
            btnPost.disabled = false;
        } else {
            btnPost.disabled = true;
        }
    }
}

if(blogContent) {
    blogContent.onkeyup = () => {
        if ((blogContent.value != '') && (blogName.value != '')) {
            btnPost.disabled = false;
        } else {
            btnPost.disabled = true;
        }
    }
}

var editButton = document.getElementsByClassName('edit-button');
var deleteButton = document.getElementsByClassName('delete-button');
var confirmDialogDeleteBlog = document.getElementById('confirmDialogDeleteBlog');

for (let i = 0; i < editButton.length; i++) {
    editButton[i].onclick = () => {
        createBlogContainer.classList.remove('confirmdig-hide');
    }
}

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = () => {
        confirmDialogDeleteBlog.classList.remove('confirmdig-hide');
    }
}

var btnViewReport = document.getElementsByClassName('listAcc_btnViewReport'); 
for (let i = 0; i < btnViewReport.length; i++) {
    btnViewReport[i].onclick = () => {
        confirmDialog.classList.remove('confirmdig-hide');
    }
}

var btnDeleteUser = document.getElementsByClassName('listAcc_btnDeleteUser');
for (let i = 0; i < btnDeleteUser.length; i++) {
    btnDeleteUser[i].onclick = () => {
        confirmDialog.classList.remove('confirmdig-hide');
    }
}

$('#button_contact').click(() => {
    $('#sidebar').css("display", "block");
    $('#button_contact').css("display", "none");
})

$('#button_sidebar').click(() => {
    $('#sidebar').css("display", "none");
    $('#button_contact').css("display", "flex");
})
$('#searchpopup').click(() => {
    $('#chartSpecific').removeClass('chartSpecific_hide')
})
$('#userPostBtn').click(() => {
    $('#popupChart').removeClass('popupCrt_hide')
})
$('#btnCanclePopup').click(() => {
    $('#popupChart').addClass('popupCrt_hide')
    $('#chartSpecific').addClass('chartSpecific_hide')

})
$('.listAcc_btndelete').click(() => {
    $('#confirmDialog').removeClass('confirmdig-hide')
})

$('.listAcc_btnaccept').click(() => {
    let text = "This account has been approved!";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
})

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