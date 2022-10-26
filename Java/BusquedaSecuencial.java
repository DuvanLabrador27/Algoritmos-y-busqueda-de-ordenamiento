import java.util.Scanner;

import javax.swing.JOptionPane;

public class BusquedaSecuencial {
    public static void main(String[] args) {
        long startTime = System.nanoTime();

        Scanner scan = new Scanner(System.in);
        int arreglo[], nElementos, numBuscar;
        boolean bandera = false;

        nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad total de elementos: "));
        arreglo = new int[nElementos];

        for (int i = 0; i < arreglo.length; i++) {
            System.out.print("Digite un numero: ");
            arreglo[i] = scan.nextInt();
        }

        System.out.println("Ingresa el numero a buscar: ");
        numBuscar = scan.nextInt();

            //BUSQUEDA SECUENCIAL
        int i = 0;
        while(i < arreglo.length && bandera == false){
            if(arreglo[i] == numBuscar){
                bandera = true;
            }
            i++;
        }

        if(bandera == false){
            System.out.println("El numero no encontrado");
        }else{
            System.out.println("El numero ha sido encontrado en la posicion: " + i);
        }

        long endTime = System.nanoTime();
        System.out.println("Duración: " + ((endTime-startTime)/1000000000.0) + " segundos");
    }
}
