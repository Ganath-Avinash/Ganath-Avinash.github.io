function make()
{
window.location.replace('lo.html')
}
function red(){
    window.location.replace('gal.html')
}
function bring(){
    var R=document.getElementById("see")
    var r= document.getElementById("search-input")
    var e=document.getElementById("search-button")
    var E=document.getElementById("into")
    E.style.display="inline"
    R.style.display="none"
    r.style.display="inline"
    e.style.display="inline"
}
function reado(){
    var R=document.getElementById("see")
    var r= document.getElementById("search-input")
    var e=document.getElementById("search-button")
    var E=document.getElementById("into")
    E.style.display="none"
    R.style.display="inline"
    r.style.display="none"
    e.style.display="none"
}
function read(){
    const query = document.getElementById('search-input').value.toLowerCase();
    if (query === 'anime') {
        window.location.href='u2.html';
    } else if (query === 'game') {
        window.location.href='u3.html';
    } else if (query === 'nature') {
        window.location.href='u1.html';
    } else if (query === 'minimalistic') {
        window.location.href='u4.html';
    }
    else if (query === 'png') {
        window.location.href='png.html';
    }
    else if (query===""){
        window.alert('Enter Something To Search!');
    }
    else {
            window.alert('Category not found!');
        }}

function vandhu(){
    var bb=document.getElementById("bbc");
    bb.style.fontFamily="Poppins"
    bb.style.right="0px";
    bb.style.transition="1s";
}
function closee(){
    var cbb=document.getElementById("bbc");
    cbb.style.right="-450px";
    cbb.style.transition="2s";
}
function koi(){
    var cbb=document.getElementById("bbc");
    cbb.style.display="none"
}