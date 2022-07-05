const input_text = document.getElementById("add_box");
const button = document.getElementById("submit_img");
const list = document.getElementById("add_list");
let modify_btn = document.getElementById("modify_btn");

let count = 0;

const inputText = () => {
  const content = document.createElement("div");
  content.className = "content";
  content.id = `content${count}`;

  content.innerHTML = `
  <div id="list_id${count}">  
    <span>
      <input id="check${count}" class="check" type="checkbox" readonly>
      <label for="check${count}"></label>
      <div id="add_text${count}">${input_text.value}</div>
    </span>
    <img id="delete_img" onclick="delete_button(${count})" src="../assets/img/cancel-button.png" />
    <input id="modify_input${count}" value="${input_text.value}" />
    <button id="modify_btn" onclick="ModifyHandle(${count})">수정</button>
  </div>`;

  count++;
  // <hr id="hr${count}"></hr>

  list.appendChild(content);
};

button.addEventListener("click", inputText);

function delete_text() {
  const currentVal = input_text.value;
  input_text.value = "";
}

button.onclick = delete_text;

input_text.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    inputText();
    input_text.value = "";
  }
});

const delete_button = (id) => {
  let node = document.getElementById(`list_id${id}`);
  console.log(node);

  node.remove();
};

function ModifyHandle(id) {
  let value = document.getElementById(`modify_input${id}`).value;
  let defaultText = document.getElementById(`add_text${id}`);

  defaultText.innerText = value;
}
