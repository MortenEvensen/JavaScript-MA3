//Console.log out elements in JSON file
//I tried two sollutions, one using a for loop and another just logging each element

data = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

//Sollution 1: Using a for loop to log the elements as objects:

for (var i = 0; i < data.video[i].author.data[i]; i++); {
console.log(data.video[i]);
console.log(data.video[i].author.data[i])};

//Sollution 2: Using separate console logs for each element
console.log(data.video[0].id);
console.log(data.video[0].name);
console.log(data.video[0].url);
console.log(data.video[0].author);
console.log(data.video[0].author.data[0].name_author);
console.log(data.video[0].author.data[0].url);
console.log(data.video[0].author.data[0].type);