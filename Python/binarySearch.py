import time
inicio = time.time()
def pedirNumero(lista):
    for numero in lista:
        print(numero,end=" ")
    num=int(input("\n Ingresa un numero de la lista anterior:"))
    return num
def busquedaBinaria(lista,num):
    tam=len(lista)
    cont=0
    inf=0
    sup=tam
    while inf<=sup and cont<tam:
        mitad=int((inf+sup)/2)
        if lista[mitad]==num:
            return True
        elif lista[mitad]>num:
            sup=mitad
            mitad=int((inf+sup)/2)
        elif lista[mitad]<num:
            inf=mitad
            mitad=int((inf+sup)/2)
        cont=cont+1
    return False
lista=[10,15,20,25,30,35,40,45,50,55]          
while True:
    num=pedirNumero(lista)
    encontrado=busquedaBinaria(lista,num)
    if encontrado==True:
        print("Felicidades el numero ingresado esta en la lista :)")
        break
    else:
        print("El numero no esta en la lista intentalo de nuevo: ")
fin = time.time()
print(fin-inicio)