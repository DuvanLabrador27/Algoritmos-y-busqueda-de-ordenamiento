#include <iostream>
using namespace std;

int main()
{
    /*
    TAM= TAMAÑO DEL ARREGLO
    NUM= NUMERO QUE SE BUSCA
    ARREGLO = ARREGLO QUE MA PUEDO DECIR
    SE HACE EL FOR SE LLENA Y PREGUNTA
    INMEDIATAMENTE SI EL NUMERO QUE BUSCO ES ESE 
    SI NO 
    PUES DICE QUE NO EXISTE 
    COUNT= CONTAR PARA IMPRIMA SI O NO EXISTE
    
    */
    int tam,count=0,num;
    cin>>tam>>num;
    int arreglo[tam];
    for (int i = 0; i < tam; i++)
    {
        cin>>arreglo[i];
        if(arreglo[i]==num)
        {count++;}
    }
    if(count>0){cout<<"ELEMENTO ENCONTRADO";}
    else{cout<<"NO EXISTE EL ELEMENTO BUSCADO";}           

}