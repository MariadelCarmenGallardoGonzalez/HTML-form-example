	//const form = document.querySelector('form')
	const form = document.getElementById('form')    

    form.onsubmit = (event) =>{
   		event.preventDefault()
    	AddTodo()
    }    

	function AddTodo(){
    	const todoform = document.getElementById('elementtodo')
        console.log(todoform.value)
    }	