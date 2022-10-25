#include <iostream>
using namespace std;

int main()
{
    int tam;
    cin >> tam;
    int numeros[tam];

    for (int i = 0; i < tam; i++)
    {
        cin >> numeros[i];
    }

    int inf, sup, mitad, dato, i;
    char band = 'F';

    cin >> dato;

    // Algoritmo de la Busqueda Binaria
    inf = 0;
    sup = tam;
    cout<<sup;
    i = 0;
    while ((inf <= sup) && (i < 5))
    {
        mitad = (inf + sup) / 2;
        if (numeros[mitad] == dato)
        {
            band = 'V';
            break;
        }
        if (numeros[mitad] > dato)
        {
            sup = mitad;
            mitad = (inf + sup) / 2;
        }
        if (numeros[mitad] < dato)
        {
            inf = mitad;
            mitad = (inf + sup) / 2;
        }
        i++;
    }

    if (band == 'V')
    {
        cout << "El numero se encontro en la pos: " << mitad << endl;
    }
    else
    {
        cout << "El numero NO se encontro";
    }
    return 0;
}