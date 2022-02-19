
var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    var span = document.createElement("span");
    span.className="hide";
    var close = document.createTextNode("X");
    span.appendChild(close);
    list[i].appendChild(span);
}

var hide = document.getElementsByClassName("hide");
for (i=0;i<hide.length;i++) {
    hide[i].onclick=function() {
        var d = this.parentElement;
        d.style.display="none";
    }
}

   var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);









function mylst() {
    var li = document.createElement("li");
    var txt = document.getElementById("mytxt").value;
    var t = document.createTextNode(txt);
    li.appendChild(t);
    if (txt == "") {
        alert("Please enter the Task");

    } else {
        document.getElementById("lst").appendChild(li);
    }   
    
    
var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    var span = document.createElement("span");
    span.className="hide";
    var close = document.createTextNode("X");
    span.appendChild(close);
    list[i].appendChild(span);
}


var close = document.getElementsByClassName("hide");
for (i=0;i<hide.length;i++) {
    hide[i].onclick=function() {
        var d = this.parentElement;
        d.style.display="none";
    }
}


var tasks = document.querySelectorAll("ul");
for(var i=0; i<tasks.length; i++) {
    tasks[i].onclick = function() {
        this.classList.toggle('checked');
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false); 

 }

 
