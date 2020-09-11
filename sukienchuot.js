let imgobj = null;

imgobj= document.getElementById('img');

function init() {
    imgObj = document.getElementById('img');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}


function moveright() {
    imgObj.style.left = parseInt(imgObj.style.left) + 20 + 'px';
}


window.onload = init;
