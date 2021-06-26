// Import stylesheets
import './style.css';


// Write TypeScript code!

class toDo {
  todo: Array<string> = [];
  constructor(){
  }
  
    add(todoText:string):Array<string>{
      this.todo.push(todoText);
      return this.todo;
     }

    list(){
      
      this.todo.forEach(function (value) {
          document.createElement("li"+value);
      });
  }

}
const todo =  new toDo();

todo.add("valami");
todo.add("valamik");
todo.list();

const listDiv: HTMLElement = document.getElementById('list');

  const input: HTMLElement = document.getElementById('input');

const button: HTMLElement = document.getElementById('add');


button.addEventListener("click", function(){todo.add(input.nodeValue)})