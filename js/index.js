var items = new Array();
var checks = new Array();

var btnAgregar = document.querySelector(".agregar");

btnAgregar.addEventListener("click", (e) => {
  addItem();
  e.preventDefault();

  listItems();
});

const addItem = function () {
  var tag = document.getElementById("newText");
  const text = tag.value;
  if (text) {
    items.push(text);
    checks.push(false);    
  }
  tag.value = '';
};

const listItems = function () {
  let template = "";
  for (let i = 0; i < items.length; i++) {
    if (checks[i]) {
      template += `<li class="lis"><div class="chec">`;
    } else {
      template += `<li class="lis"><div>`;
    }
    template += `<p>` + items[i] + `</p>
          <button class="checar" onclick="checkItem(` + i + `)">check</button>
          <button class="del" onclick="deleteItem(` + i + `)">delete</button>
        </div></li>`;
  }
  
  document.querySelector(".Lista").innerHTML = template;
};

const checkItem = function(index){
    checks[index] = !checks[index];
    listItems();
}

const deleteItem = function(index){
    items.pop(index);
    checks.pop(index);
    listItems();
}

listItems();
