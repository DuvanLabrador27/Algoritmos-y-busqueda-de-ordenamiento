import time
inicio = time.time()
def pedirNumero(lista):
    for numero in lista:
        print(numero,end=" ")
    num=int(input("\n Ingresa un numero de la lista anterior:"))
    return num
def busquedaSecuencia(lista,num):
    for i in range(0,len(lista)):
        if num==lista[i]:
            return True
    return False
lista=[5506008231, 9638123600, 1666345892, 4344409072, 3250016072, 4423202755]
while True:
    num=pedirNumero(lista)
    encontrado=busquedaSecuencia(lista,num)
    if encontrado==True:
        print("Felicidades haz colocado un numero de la lista :) ")
        break
    else:
        print("Intentalo de nuevo: ")
fin = time.time()
print(fin-inicio)