//js file right here 

var upbutton = document.getElementById('add-button');
var dlbutton = document.getElementsByClassName('deleteBt');

const delrow = document.querySelector('table')


var idin = [];
var homein = [];
var blsin = [];
var landin = [];
var rlin = [];


const newtable = document.querySelector('tbody');

upbutton.addEventListener('click',function(){
    console.log("update call");
    var upid = document.getElementById('id-input').value;
    var uphome = document.getElementById('home-input').value;
    var upbls = document.getElementById('b-input').value;
    var upland = document.getElementById('l-input').value;
    var uprl = document.getElementById('r-input').value;
    newtable.innerHTML += `
        <tr>
            <td>${upid}</td>
            <td>${uphome}</td>
            <td>${upbls}</td>
            <td>${upland}</td>
            <td>${uprl}</td>
            <td><button class="deleteBt">DELETE</button></td>
        </tr>
    `
});


delrow.addEventListener('click',function(e){

    console.log("delete call");
    const bin = e.target;
    bin.closest('tr').remove();
});

