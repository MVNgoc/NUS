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

var reportButton = document.getElementsByClassName('report-button');
var btnSend = document.getElementById('btnSend');

var temp = 0;

for (let i = 0; i < reportButton.length; i++) {
    reportButton[i].onclick = () => {
        confirmDialog.classList.remove('confirmdig-hide');
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            textareareport.value = '';
            textareareport.disabled = true;
            btnSend.disabled = true;
            btnSend.style.cursor = 'not-allowed';
        }
    }
}

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = () => {
        if (checkbox[i].checked) {
            temp += 1;
        } else {
            temp -= 1;
        }
        console.log(temp);
        if (temp > 0) {
            btnSend.disabled = false;
            btnSend.style.cursor = 'pointer';
        } else {
            btnSend.disabled = true;
            btnSend.style.cursor = 'not-allowed';
        }
        if ((checkbox[4].checked) && (!checkbox[i].disabled)) {
            textareareport.disabled = false;
        } else {
            textareareport.value = '';
            textareareport.disabled = true;
        }
    }
}

$('#button_contact').click(() => {
    $('#sidebar').css("display", "none");
})

var createBlogInput = document.getElementById('create-blog-input');

if (createBlogInput) {
    createBlogInput.onclick = () => {
        createBlogContainer.classList.remove('confirmdig-hide');
    }
}

if (blogName) {
    btnPost.style.cursor = 'not-allowed';
    blogName.onkeyup = () => {
        if ((blogName.value != '') && (blogContent.value != '')) {
            btnPost.disabled = false;
            btnPost.style.cursor = 'pointer';
        } else {
            btnPost.disabled = true;
            btnPost.style.cursor = 'not-allowed';
        }
    }
}

if (blogContent) {
    btnPost.style.cursor = 'not-allowed';
    blogContent.onkeyup = () => {
        if ((blogContent.value != '') && (blogName.value != '')) {
            btnPost.disabled = false;
            btnPost.style.cursor = 'pointer';
        } else {
            btnPost.disabled = true;
            btnPost.style.cursor = 'not-allowed';
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
$('#editImageAdmin_btn').click(() => {
    $('#confirmDialogEdit').removeClass('confirmdigEditImage-hide')
})
$('.btn-cancel').click(() => {
    $('#confirmDialogEdit').addClass('confirmdigEditImage-hide')
})
$('.btn_editNavAd').click(() => {
    $('.icon_edit_nav').removeClass('icon_edit_nav_hide')
    $('.btn_add_navAd').removeClass('btn_add_navAd_hide')
    $('.btn_saveNavAd').removeClass('btn_saveNavAd_hide')
    $('.form-input-admin').removeAttr('disabled');
})
$('.btn_saveNavAd').click(() => {
    $('.icon_edit_nav').addClass('icon_edit_nav_hide')
    $('.btn_add_navAd').addClass('btn_add_navAd_hide')
    $('.btn_saveNavAd').addClass('btn_saveNavAd_hide')
    $('.form-input-admin').attr('disabled', 'disabled');
})

function add_nav_btn(add_cata_nav_btn) {
    $(add_cata_nav_btn).parent().append(`<li><a href="#"><input value="Cataloge N.n" type="text" class="form-input form-input-admin" id="" placeholder="" name=""></a><i class="fa-solid fa-circle-xmark icon_edit_nav"></i></li>
    <li type="button" class="btn_add_navAd" id="btn_add_navAd" onclick="add_nav_btn(this)"><a href="#">Add</a></li>`);
    $(add_cata_nav_btn).remove();
}

function addBig_nav_btn(add_cata_nav_btn) {
    $(add_cata_nav_btn).parent().append(`<li><a href="#"> 
                                                <input value="Cataoge N" type="text" class="form-input form-input-admin" id="" placeholder="" name="">
                                                <i class="arrow down"></i>
                                        </a></li>
                                        <li class="btn_add_navAd" onclick="addBig_nav_btn(this)">
                                            <a href="#">Add</a>
                                        </li>`);
    $(add_cata_nav_btn).remove();
}

let arrayNav = [{
    name: 'cataloge A',
    child: ['cataloge A.1', 'cateloge A.2', 'cateloge A.3']
}, {
    name: 'cataloge B',
    child: ['cataloge B.2', 'cateloge B.2', 'cateloge B.3']
}, {
    name: 'cataloge C',
    child: []
}]
arrayNav.forEach((element, index) => {
    let tmp = `<li>
    <a href="#"> 
        <input disabled value="${element.name}" type="text" class="form-input form-input-admin" id="" placeholder="" name="">
        <i class="arrow down"></i>
    </a>
    <i id="icon_edit_nav" class="fa-solid fa-circle-xmark icon_edit_nav icon_edit_nav_hide"></i>`
    if (element.child.length > 0) {
        let tmp2 = '<ul class="subnav">'
        element.child.forEach((item, index2) => {
            tmp2 += `<li><a href="#"><input disabled value="${item}" type="text" class="form-input form-input-admin" id="" placeholder="" name=""></a><i
            class="fa-solid fa-circle-xmark icon_edit_nav icon_edit_nav_hide"></i></li>`
            if (index2 == element.child.length - 1) {
                tmp2 += `
                <li type="button" class="btn_add_navAd btn_add_navAd_hide" onclick="add_nav_btn(this)"><a href="#">Add</a></li>`
            }
        });
        tmp2 += `</ul>
        </li>`
        tmp += tmp2

    } else {

        tmp += `<ul class="subnav"><li type="button" class="btn_add_navAd btn_add_navAd_hide" onclick="add_nav_btn(this)"><a href="#">Add</a></li></ul></li>`
    }
    $('#nav').append(tmp);
    if (index == arrayNav.length - 1) {
        $('#nav').append(`<li class="btn_add_navAd btn_add_navAd_hide" onclick="addBig_nav_btn(this)">
                                <a href="#">Add</a>
                            </li>`)
    }

});


$('.listAcc_btnaccept').click(() => {
    let text = "This account has been approved!";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
})
$('.deleteImageAdmin').click(() => {
    let text = "Are you sure you want to remove this image?";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
})
$('.confirmdig_save_btn').click(() => {
    let text = "Are you sure?";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
})
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
// $(function() {

//     var imagesPreview = function(input, placeToInsertImagePreview) {

//         if (input.files) {
//             var filesAmount = input.files.length;

//             for (i = 0; i < filesAmount; i++) {
//                 var reader = new FileReader();

//                 reader.onload = function(event) {
//                     $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
//                 }

//                 reader.readAsDataURL(input.files[i]);
//             }
//         }

//     };

//     $('#gallery-photo-add').on('change', function() {
//         imagesPreview(this, 'div.gallery');
//     });
// });
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