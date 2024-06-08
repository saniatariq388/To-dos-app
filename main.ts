#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.yellow("****************** WELCOME TO MY TODOS APP ******************"));

let todo_list:string[] =[];

let while_condition:boolean = true;

while(while_condition === true){

  let option = await inquirer.prompt(
    [
      {
         name:"user_option",
         type:"list",
        message:chalk.red("Select an option"),
        choices:["Add","Update","Veiw","delete"],
      }
    ]
 )


if(option.user_option === "Add"){

  let  ans = await inquirer.prompt({
        type:"input",
        name:"usr_ans",
         message:chalk.green("Add item in your todos"),
        })

    if(ans.usr_ans !== '')   {

      todo_list.push(ans.usr_ans);
      console.log(todo_list);
      
    } else{

      console.log('Please add some item in your Todos.');
    
    }
    
}
else if (option.user_option === "delete"){

  let removeChoice = await inquirer.prompt([{
    name :'remove_item',
    type : 'list',
    message :'Select item to delete',
    choices :todo_list

  }]);

  let index_to_remove  = todo_list.indexOf(removeChoice.remove_item);

  if(index_to_remove >= 0){
   todo_list.splice(index_to_remove , 1);
   console.log('You removed : ' ,removeChoice.remove_item );
   console.log(todo_list);
    }
}
if(option.user_option ==="Update"){
   let updateTodo = await inquirer.prompt({
      name:"todo",
      type:"list",
      message:chalk.green("Update items in your todos"),
      choices:todo_list.map(item => item),// map function firstly add item and map with arrow (=>)function
   });

   
     // make new array with filter function,it replace item that you want

   //=> perform the arrow function to replace

   let newTodos = todo_list.filter(item => item !== updateTodo.todo);
   //means filter kar do item ko item say magr new todo not equal(!==) update todo old todo kay
   //for multiple array addition we use [... name]3 dots in array with name

   todo_list =[...newTodos,option.user_ans];
   console.log(todo_list);
   }
   if(option.user_option == "Veiw"){

     console.log(chalk.bold.yellow("*************TO DO LIST*************"));
     console.log(todo_list);
     console.log("***********************************");
     
   }
   
   let user_ans = await inquirer.prompt([{
    name : 'selection',
    type :'confirm',
    message :'Do you want to continue?',
    default : true
}])

if(user_ans.selection === false){

  while_condition = false;
}

}
console.log(`Thankyou For Using Todo App.`);














