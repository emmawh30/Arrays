var todos = ["Weekly To Do List"];

var input = prompt("What Would You Like To Do?");


while(input !== "quit"){

//handle input
	if(input === "list") {
		console.log("**********")
		todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
		
	});
		console.log("**********")

	} 	else if(input === "new") {
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
		console.log("Added Todo");
	

	}	else if(input === "delete"){
		//ask for index of todo to be deleted
		var index = prompt("Enter index of todo to delete"); 
		//delete that todo
		//splice () which is how many items after the index do we want to delete?
		todos.splice(index,1);
		console.log("Deleted Todo");
	}
		//ask again for new input
		input = prompt("What Would You Like To Do?")
	}
		console.log("ok, you quit the app");