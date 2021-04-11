/*1.PROBLEMA: Yoda el maestro jedi, necesita asignar a sus
aprendices Padawans 2 actividades dependiendo de la edad de
ellos:
 Manejo de la fuerza: Si el aprendiz es menor de 15 años
 Manejo del sable de luz: Si el aprendiz es mayor de 15
años
Inicialmente, se debe programar una función que asocie los
datos de: {nombre, planeta, edad y estatura} de 1 Padawan a un
objeto y una vez este objeto sea creado se debe llamar a una
función secundaria que clasifique y muestre en consola la
actividad asignada al Padawan
*/


function matricularAprendiz(nombre,planeta,edad,estatura,clasificar){
    let padawan= {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura
    }
    clasificar(padawan)
}

matricularAprendiz("Andresito","Infinity",404,6.02,function(elEstudiante){
    if(elEstudiante.edad>=15){
        console.log("Socio vos manejas lo que se llama===> MANEJO DE LA FUERZA")

    }else{
        console.log("Socio vos manejas lo que se llama===> MANEJO DEL SABLE DE LUZ")

    }

})
