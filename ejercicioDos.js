
/*
2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el
planeta yavin4 para robar uno de los planos de una de las 10
estrellas de la muerte, como distractor el imperio ha creado
planos falsos y se tiene el dato de que el número de serie de
estos planos falsos comienza por encima del número 10; es decir
todos los planos falsos tienen números de serie consecutivos
comenzando desde el #11. SOLO si se obtiene un plano verdadero
Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen
consola avisando que han despegado
*/




function robarPlanos(idPlano, despegar){

    if(idPlano>0 && idPlano<=10){

        let mensaje="El plano que se consiguio es "+ idPlano
        despegar (null,mensaje)
    }else{
        let error="No te has robado nada"
        despegar (error, null)
    }


  }  

  robarPlanos(10,function(error,mensajeOK){

    if(error){

        console.log(error)
        console.log("no despegue")
    }else{

      console.log(mensajeOK)
      console.log("Estamos despegando")
    }
  })


  

  