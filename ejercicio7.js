/**
 * Crea una funcion que reciba una
 * lista y un elemento como parametros
 * y devuelva verdadero si el elemento
 * se encuentra en la lista,
 * o falso en caso contrario.
 */

function seEncuentraEnListraElemento(lista, elemento){

    for(var i= 0; i<lista.lrngth; i++){
        if(lista[i] == elemento){
            return true;
        }
    }
}
