import java.util.Scanner;

import javax.swing.JOptionPane;

public class Burbuja {
    public static void main(String[] args) {
        long startTime = System.nanoTime();

        Scanner scan = new Scanner(System.in);
        int arreglo[], nElementos, aux;

        nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad total de elementos: "));
        arreglo = new int[nElementos];

        for (int i = 0; i < nElementos; i++) {
            System.out.print("Digite un numero: ");
            arreglo[i] = scan.nextInt();
        }

            //MÉTODO BURBUJA
        for (int i = 0; i < (nElementos - 1); i++) {
            for (int j = 0; j < (nElementos - 1); j++) {
                if (arreglo[j] > arreglo[j + 1]) {
                    aux = arreglo[j];
                    arreglo[j] = arreglo[j + 1];
                    arreglo[j + 1] = aux;
                }
            }
        }
        System.out.println("Ordenamiento por Burbuja");
        for (int i = 0; i < nElementos; i++) {
            System.out.println(arreglo[i]);
        }

            //OTRA FORMA PERO UTILIZANDO DATOS TOTALMENTE ALEATORIOS

        /* Scanner scan = new Scanner(System.in);
        int arreglo[], nElementos, aux;

        nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad total de elementos: "));
        arreglo = new int[nElementos];

        for(int i = 0; i < nElementos; i++){
            arreglo[i] = (int)(Math.random()*100);
        }
        for (int i = 0; i < arreglo.length; i++) {
            System.out.println(arreglo[i]);
        }

            //MÉTODO BURBUJA
        for (int i = 0; i < (nElementos - 1); i++) {
            for (int j = 0; j < (nElementos - 1); j++) {
                if (arreglo[j] > arreglo[j + 1]) {
                    aux = arreglo[j];
                    arreglo[j] = arreglo[j + 1];
                    arreglo[j + 1] = aux;
                }
            }
        }

        System.out.println("Ordenamiento por Burbuja");
        for (int i = 0; i < nElementos; i++) {
            System.out.println(arreglo[i]);
        } */

        long endTime = System.nanoTime();
        System.out.println("Duración: " + ((endTime-startTime)/1000000000.0) + " segundos");
    }
}