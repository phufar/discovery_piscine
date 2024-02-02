$(document).ready(function () {
    const list = $("#tf_list");
    let TodoList = [];
    setcookie();
    $('#new').click(function(){
        newTodo();
    })
    function createTodo(text) {
      const ele = $("<div>").addClass("todo").html('<p>' + text + '</p><button class="removeBtn">x</button>');
      return ele;
    }
    function render() {
      list.empty();
      for (let index = 0; index < TodoList.length; index++) {
        const element = TodoList[index];
        list.append(createTodo(element));
      }
      document.cookie = JSON.stringify(TodoList);
    }
    function newTodo() {
      let name = prompt("Name the todo.");
      if (name.length > 0) {
        TodoList.unshift(name);
        render();
      }
    }
    function remove(text) {
      let yes = confirm('Are you sure to remove');
      if (yes) {
        TodoList = TodoList.filter((a) => a != text);
        render();
      }
    }
    $(document).on("click", ".removeBtn", function () {
      let text = $(this).siblings("p").text();
      remove(text);
    });
    
    function setcookie(){
      let save = document.cookie;
      if (save&&save.length > 0) {
        try{
          TodoList = JSON.parse(save);
          render();
        }catch{}
      }
    }
  });