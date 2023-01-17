 //Crea una funcion que reciba una lista de numeros y un numero
    //y nos tiene que devolver si aparece el elemento en la lista o no
    function bisqueda(lista, numero){
        for(var index=0; i<lista.length; index++){
        if(lista[index]==numero){
            return true;
        }
        }
        return false;
    }
