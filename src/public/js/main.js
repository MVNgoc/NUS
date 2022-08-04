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

var createBlogContainer = document.getElementById('create-blog-container');

$('#btnCancle').click(() => {
    $('#confirmDialog').addClass('confirmdig-hide')
    for (let i = 0; i < more_info_icon.length; i++) {
        more_info_subnav[i].style.display = 'none';
    }
    createBlogContainer.classList.add('confirmdig-hide');
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

checkboxtextarea.onclick = () => {
    if (checkboxtextarea.checked) {
        textareareport.disabled = false;
    } else {
        textareareport.disabled = true;
        textareareport.value = '';
    }
}

var confirmDialog = document.getElementById('confirmDialog');
var reportButton = document.getElementsByClassName('report-button');
var checkbox = document.getElementsByClassName('checkbox');

for (let i = 0; i < reportButton.length; i++) {
    reportButton[i].onclick = () => {
        confirmDialog.classList.remove('confirmdig-hide');
        for (let j = 0; j < checkbox.length; j++) {
            checkbox[j].checked = false;
            textareareport.disabled = true;
            textareareport.value = '';
        }
    }
}

var createBlogInput = document.getElementById('create-blog-input');
var blogContent = document.getElementById('blog-content');
var btnPost = document.getElementById('btnPost');

createBlogInput.onclick = () => {
    createBlogContainer.classList.remove('confirmdig-hide');
}

blogContent.onkeyup = () => {
    if(blogContent.value != '') {
        btnPost.disabled = false;
    }
    else {
        btnPost.disabled = true;
    }
}