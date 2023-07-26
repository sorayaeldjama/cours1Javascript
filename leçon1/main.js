// Creer un objet qui s'apppel todo 
let todo = {
    titre : "bonjour",
    description : "les gens ",
};
//  console.log(todo.titre);
//  console.log(todo.description);

// Creer une liste d'objet de todo 
let listeTodo =[
    {
        titre:"premier titre",
        description:"premiere description",
    },
    {
        titre:"dexieme titre",
        description:"dexieme description",
    },

];

function affichertodo(todo){
    document.write(todo.titre + "<br>");
    document.write(todo.description);
};

affichertodo(listeTodo[0]);

// Afficher l ensemble de la liste 

function AfficherlisteTodo(){
    listeTodo.forEach(function(todo){
        affichertodo(todo);
    });
}
 AfficherlisteTodo();

 function AjouterUntodo(titre,description){
    let todo = {
        titre : titre,
        description : description,
    };
    listeTodo.push(todo);
 }

 AjouterUntodo("troisieme","description");
 AfficherlisteTodo();

 let newTodoTitre = document.querySelector("#titre");
 let newTododescription = document.querySelector("#description");

 console.log(newTodoTitre.value);

 function ActionCreerUnTodo(){
    AjouterUntodo(newTodoTitre.value,newTododescription.value);
    AfficherlisteTodo();

   
 }

