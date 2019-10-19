function overText(x) {
    x.style.color = "#EFC050";
}

function outText(x) {
    x.style.color = "#f0f8ff";
}

function clickText(x){
    let myid;
    let myEdit;
    let newText;
    switch(x){
        case myFullName: 
            myid = "myFullName";
            myEdit = "Full Name";
            break;
        case myName:
            myid = "myName";
            myEdit = "Name";
            break;
        case myEdu_1:
            myid = "myEdu_1";
            myEdit = "Acedemy";
            break;
        case myEduPro_1:
            myid = "myEduPro_1";
            myEdit = "Study Program";
            break;
        case myEduDate_1:
            myid = "myEduDate_1";
            myEdit = "Date of Study";
            break;
        case myEdu_2:
            myid = "myEdu_2";
            myEdit = "Acedemy";
            break;
        case myEduPro_2:
            myid = "myEduPro_2";
            myEdit = "Study Program";
            break;
        case myEduDate_2:
            myid = "myEduDate_2";
            myEdit = "Date of Study";
            break;
        default:
            alert("not found")
            break;
    }
    newText = prompt('Edit your '+myEdit);
    if(newText != null){
        document.getElementById(myid).innerHTML = newText;
    }

} 

function myAddSkill() {
    let node = document.createElement("li");
    let newSkill =  prompt('Add your skill');
    if(newSkill != null && newSkill != ""){
        let textnode = document.createTextNode(newSkill);
        node.appendChild(textnode);
        document.getElementById("mySkill").appendChild(node);
    }
  }
  
  function myRemoveSkill() {
    var list = document.getElementById("mySkill");
    list.removeChild(list.lastChild);
  }

  function myChangeBackgroundColor() {
        let newColor =  prompt('INPUT ( color-name | code-color | rgb(x,x,x) )');
    if(newColor != null && newColor != "" ){
        document.getElementById("content").style.background = newColor ; 
    }
  }

  