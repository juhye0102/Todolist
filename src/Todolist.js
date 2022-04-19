const input = document.getElementById('add_box');
const button = document.getElementById('submit_img');
const list= document.getElementById('add_list');

const inputText = () => {
    // console.log(input.value);
    const spans = document.createElement('div');
    spans.innerHTML = input.value;
    list.appendChild(spans);
  }

button.addEventListener('click', inputText);

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { 
    inputText();
  }
}); 
