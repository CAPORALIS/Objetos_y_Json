
//Sergio Caporali Ramirez
//Ejercicio 3




let object=new Object();
object.items=new Object();
object.items.item=new Array();
object.items.item={"id": "0001",
"type": "donut",
"name": "Cake",
"ppu": 0.55,};
object.items.item.batters=new Object();
object.items.item.toppping=new Array();
object.items.item.batters.batter=new Object();
object.items.item.toppping[0]={ "id": "5001", "type": "None" };
object.items.item.toppping[1]={ "id": "5002", "type": "Glazed" };
object.items.item.toppping[2]={ "id": "5005", "type": "Sugar" };
object.items.item.toppping[3]={ "id": "5007", "type": "Powdered Sugar" };
object.items.item.toppping[4]={ "id": "5006", "type": "Chocolate with Sprinkles" };
object.items.item.toppping[5]={ "id": "5003", "type": "Chocolate" };
object.items.item.toppping[6]={ "id": "5004", "type": "Maple" };
object.items.item.batters.batter[0]={ "id": "1001", "type": "Regular" };
object.items.item.batters.batter[1]={ "id": "1002", "type": "Chocolate" };
object.items.item.batters.batter[2]={ "id": "1003", "type": "Blueberry" };
object.items.item.batters.batter[3]={ "id": "1004", "type": "Devil's Food" };



console.log(JSON.parse(JSON.stringify(object)));
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");

console.log(object.items.item);
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log("\n ...................");
console.log(object.items.item.batters);
console.log("Buenas noches profe, intenté imprimir lo que es el codigo y si me lo acepta, el problema que al imprimir los codigos todos juntos no me manda completo el código, pero si lo imprimo por separado, me aparecen las secciones que tengo y bien impresos, no sé a que se deba esto pero es el motivo por el cual estoy enviando mi trabajo tan tarde");









