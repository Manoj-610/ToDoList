const toid =document.getElementById("toid")
const plusid =document.getElementById("plusid")
const todoid =document.getElementById("todoid")
// const btnid =document.getElementById("btnid")
let changetodo=null;
const addTodo =()=>{
    // alert("hello")
    const inputtext=toid.value.trim();
    // removeall(inputtext);

    if(inputtext.length<=0){
        alert("You must write someting in ToDo List")
        return false;
    }
    if(plusid.value==='Edit'){
        changetodo.target.previousElementSibling.innerHTML=inputtext;
        plusid.value="Add"
        toid.value="";
        editlocaltodo(inputtext);
        


    }
    else{

    
    const li=document.createElement("li");
    const p =document.createElement("p");
    p.innerHTML=inputtext
    li.appendChild(p);
    // const div =document.createElement("div");
    // const remall=document.createElement("button");
    // remall.innerHTML='Remove All'
    // remall.classList.add("bt1")
    // div.appendChild(remall);
    // btnid.appendChild(div);
    
    const editbtn =document.createElement("button");
    editbtn.innerHTML='Edit';
    editbtn.classList.add("btn1")
    li.appendChild(editbtn);
    const deltebtn =document.createElement("button");
    deltebtn.innerHTML='Remove';
    deltebtn.classList.add("btn")
    li.appendChild(deltebtn);
    todoid.appendChild(li);
    toid.value="";
    savetodo(inputtext);
    }
   

}
const updatetodo= (e)=>{
    
    if(e.target.innerHTML==='Remove'){
        todoid.removeChild(e.target.parentElement)
        deletelocalsto(e.target.parentElement);
       
    }
    if(e.target.innerHTML==='Edit'){
        toid.value= e.target.previousElementSibling.innerHTML;
        toid.focus();
        plusid.value='Edit';
        changetodo=e;
    }
    // if(e.target.innerHTML==="RemoveAll"){
    //     todoid.removeChild(e.target.parentElement)
    //     removeall(e.target.parentElement);
    // }



}
const savetodo=(saveinf)=>{
    let save;
    if(localStorage.getItem("save")=== null){
         save=[];
        console.log(save)
    }
    else{
        save=JSON.parse(localStorage.getItem("save"))
    }
    
   
    save.push(saveinf);
    localStorage.setItem("save" ,JSON.stringify(save));

}
const getlocaltodo=()=>{
    let save;
    if(localStorage.getItem("save")=== null){
         save=[];
        console.log(save)
    }
    else{
        save=JSON.parse(localStorage.getItem("save"))
        save.forEach(saveinf => {
            const li=document.createElement("li");
    const p =document.createElement("p");
    p.innerHTML=saveinf;
    li.appendChild(p);
    
    const editbtn =document.createElement("button");
    editbtn.innerHTML='Edit';
    editbtn.classList.add("btn1")
    li.appendChild(editbtn);
    const deltebtn =document.createElement("button");
    deltebtn.innerHTML='Remove';
    deltebtn.classList.add("btn")
    li.appendChild(deltebtn);
    todoid.appendChild(li);
            
        });

    }
}
const deletelocalsto=(saveinf)=>{
    let save;
    if(localStorage.getItem("save")=== null){
         save=[];
        console.log(save)
    }
    else{
        save=JSON.parse(localStorage.getItem("save"))
    }
    let todotext=saveinf.children[0].innerHTML;
    let todoindex=save.indexOf(todotext)
    save.splice(todoindex,1)
    localStorage.setItem("save" ,JSON.stringify(save))
    console.log(todoindex)

    console.log(saveinf.children[0].innerHTML)
    
}
const editlocaltodo=(inf)=>{
    let save;
 save =JSON.parse(localStorage.getItem("save"));
let todoindex =save.indexOf(inf);
save[todoindex] = toid.value;
localStorage.setItem("save" ,JSON.stringify(save));
inputtext="";
}
// const removeall=(e)=>{
//     e.btnid.value="";
  
// }
document.addEventListener('DOMContentLoaded',getlocaltodo)
 plusid.addEventListener('click', addTodo);
 todoid.addEventListener('click',updatetodo)