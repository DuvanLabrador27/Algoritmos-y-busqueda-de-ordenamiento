#include <iostream>
using namespace std;

int main()
{

    int i, j, tam;
    int temp;
    cout << "Digite el Tamaño \n" << endl;
    cin >> tam;
    int arreglo[tam];
    cout << "Digite los elementos a ordenar \n" << endl;
    for (int i = 0; i < tam; i++)
    {
        cin >> arreglo[i];
    }

    for (i = 1; i < tam; i++)
        for (j = 0; j < tam - i; j++)
            if (arreglo[j] > arreglo[j + 1])
            {
                /* Intercambiamos */
                temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
    cout << "El arreglo ordenado es: \n"
         << endl;

    for (int i = 0; i < tam; i++)
    {
        cout << arreglo[i] << " ";
    }
      
    
    
}
































































































































































































/**/
