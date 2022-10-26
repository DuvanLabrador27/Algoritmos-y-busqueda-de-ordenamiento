import java.util.Scanner;

import javax.swing.JOptionPane;

public class Insercion {
    public static void main(String[] args) {
        long startTime = System.nanoTime();

        Scanner scan = new Scanner(System.in);
        int arreglo [], nElementos, pos, aux;

            //NUMERO DE ELEMENTOS QUE TENDRA EL ARREGLO
        nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad total de elementos: "));
        System.out.println("Digite la cantidad total de elementos: ");
        arreglo = new int[nElementos];

        for(int i = 0; i < nElementos; i++){
            //DATO A DIGITAR
            System.out.print("Digite un numero: ");
            arreglo[i] = scan.nextInt();
        }

            //MÉTODO POR INSERCION
        for(int i = 0; i < nElementos; i++){
            pos = i;
            aux = arreglo[i];

            while((pos > 0) && (arreglo[pos-1] > aux)){
                arreglo[pos] = arreglo[pos-1];
                pos--;
            }
            arreglo[pos] = aux;
        }

        System.out.println("Ordenamiento por Insercion");
        for(int i = 0; i < nElementos; i++){
            System.out.println(arreglo[i]);
        }


            //OTRA FORMA PERO UTILIZANDO DATOS TOTALMENTE ALEATORIOS

        /* Scanner scan = new Scanner(System.in);
        int arreglo [], nElementos, pos, aux;

        nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad total de elementos: "));
        arreglo = new int[nElementos];

        for(int i = 0; i < nElementos; i++){
            arreglo[i] = (int)(Math.random()*10000);
        }
        for (int i = 0; i < arreglo.length; i++) {
            System.out.println(arreglo[i]);
        }

            //MÉTODO POR INSERCION
        for(int i = 0; i < nElementos; i++){
            pos = i;
            aux = arreglo[i];

            while((pos > 0) && (arreglo[pos-1] > aux)){
                arreglo[pos] = arreglo[pos-1];
                pos--;
            }
            arreglo[pos] = aux;
        }

        System.out.println("Ordenamiento por Insercion");
        for(int i = 0; i < nElementos; i++){
            System.out.println(arreglo[i]);
        } */

        long endTime = System.nanoTime();
        System.out.println("Duración: " + ((endTime-startTime)/1000000000.0) + " segundos");
    }
}