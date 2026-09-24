function ToggleLogoutModal() {
    const modal = document.getElementById('logout-modal');
    if(getComputedStyle(modal).display == 'none'){
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}
function tagAlert(str){
    alert("Diste click en " + str);
}
function ToggleTagModal(){
    const modal = document.getElementById('tag-modal');
    if(getComputedStyle(modal).display == 'none'){
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}

function ToggleCreateTaskModal() {
    const modal = document.getElementById('createTask-modal');
    if(getComputedStyle(modal).display == 'none'){
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}