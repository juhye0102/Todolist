const input_text = document.getElementById('add_box');
const button = document.getElementById('submit_img');
const list= document.getElementById('add_list');

let count = 0;

const inputText = () => {
    // console.log(input.value);
    const content = document.createElement('div');
    content.className="content";
    content.id=`content${count}`;

    content.innerHTML=`
    <span>
      <input id="check${count}" class="check" type="checkbox" readonly>
      <label for="check${count}"></label>
    <div id="add_text">${input_text.value}</div>
    </span>
    <div>
      <img id="delete_img" onclick="delete_button(${count})" src="/assets/img/cancel-button.png">
    </div>`
 
    
    
    const hr=document.createElement('hr')
    hr.id=`hr${count}`
    
    count++;
    
    list.appendChild(content);
    list.appendChild(hr);

  }

button.addEventListener('click', inputText);

function delete_text() {
  const currentVal = input_text.value;
  input_text.value ='';
}

button.onclick = delete_text;

input_text.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { 
    inputText();
    input_text.value ='';
  }
}); 


const delete_button = (id) => {
  const node = list.querySelector(`#content${id}`);
  const hr = list.querySelector(`#hr${id}`);

  node.remove()
  hr.remove()
}