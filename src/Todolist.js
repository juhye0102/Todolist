const input_text = document.getElementById('add_box');
const button = document.getElementById('submit_img');
const list= document.getElementById('add_list');


const inputText = () => {
    // console.log(input.value);
    const content = document.createElement('div');
    content.id="content";

    content.innerHTML=`
    <span>
      <input id="check" type="checkbox">
      <label for="check"></label>
    <div id="add_text">${input_text.value}</div>
    </span>
    <div>
      <img id="edit_img" src="/assets/img/free-icon-edit-button-84380.png">
      <img id="delete_img" src="/assets/img/cancel-button.png">
    </div>`
    
    list.appendChild(content);
    list.appendChild(document.createElement('hr'));
  }

button.addEventListener('click', inputText);

input_text.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { 
    inputText();
  }
}); 

