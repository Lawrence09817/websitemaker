function sendInquiry(e){
e.preventDefault();
const n=document.getElementById('name').value;
const em=document.getElementById('email').value;
const m=document.getElementById('message').value;
const subject=encodeURIComponent('Website Inquiry — '+n);
const body=encodeURIComponent('Name: '+n+'\nEmail: '+em+'\n\nProject Details:\n'+m);
document.getElementById('note').textContent='Opening your email app...';
window.location.href='mailto:speedstar1523@gmail.com?subject='+subject+'&body='+body;
}