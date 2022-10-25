#include <iostream>
using namespace std;

int main()
{
    int j, temp;
    int tam;
    cin >> tam;
    int arreglo[tam];
    for (int i = 0; i < tam; i++)
    {
        cin >> arreglo[i];
    }

    for (int i = 1; i < tam; i++)
    {
        temp = arreglo[i];
        j = i - 1;
        while ((arreglo[j] > temp) && (j >= 0))
        {
            arreglo[j + 1] = arreglo[j];
            j--;
        }
        arreglo[j + 1] = temp;
    }
    for (int i = 0; i < tam; i++)
    {
        cout << arreglo[i] << " ";
    }
}
