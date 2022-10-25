#include <iostream>
using namespace std;

int main()
{
    int tam, aux;
    cin >> tam;
    int arreglo[tam];

    for (int i = 0; i < tam; i++)
    {
        cin >> arreglo[i];
    }

    for (int i = 0; i < tam - 1; ++i)
    {
        int min = i;
        for (int c = i + 1; c < tam; ++c)
        {
            if (arreglo[min] > arreglo[c])
                min = c;
        }
        aux = arreglo[i];
        arreglo[i] = arreglo[min];
        arreglo[min] = aux;
    }

    for (int i = 0; i < tam; i++)
    {
        cout << arreglo[i] << " ";
    }
}