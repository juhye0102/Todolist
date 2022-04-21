const input = document.getElementById('add_box');
const button = document.getElementById('submit_img');
const list= document.getElementById('add_list');


const inputText = () => {
    // console.log(input.value);
    const content = document.createElement('div');
    content.id="content";

    const span=document.createElement('span');
    const input=document.createElement('input');
    input.id="check";
    input.type="checkbox";
    
    const label=document.createElement('label');
    label.id="check";

    const div=document.createElement('div');
    div.id="add_text";

    const div_img=document.createElement('div');
    const edit_img=document.createElement('img');
    edit_img.id="edit_img";

    const delete_img=document.createElement('img');
    delete_img.id="delete_img";


    // spans.innerHTML = input.value;
    list.appendChild(content);
  }

button.addEventListener('click', inputText);

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { 
    inputText();
  }
}); 

