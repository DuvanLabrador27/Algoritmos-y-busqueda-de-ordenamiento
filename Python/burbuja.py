import time
inicio = time.time()
def pedirDatos():
    lista=[]
    while True:
        n=int(input("Ingrese un numero (0 para terminar):"))
        if n==0:
            return lista
        else:
            lista.append(n)
    return lista

def burbuja(lista):
    tamano=len(lista)
    for _ in range(0,tamano):
        for j in range(0,tamano-1):
            if lista[j]>lista[j+1]:
                aux=lista[j]
                lista[j]=lista[j+1]
                lista[j+1]=aux
    return lista
    
def mostrarLista(lista):
    tam=len(lista)
    print("Lista ordenada por burbuja:")
    for i in range(0,tam):
        print(f"{lista[i]}")

lista=pedirDatos()
lista=burbuja(lista)
mostrarLista(lista)
fin = time.time()
print(fin-inicio)