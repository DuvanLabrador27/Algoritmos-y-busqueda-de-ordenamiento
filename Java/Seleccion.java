import java.util.Scanner;

import javax.swing.JOptionPane;

public class Seleccion {
    public static void main(String[] args) {
        long startTime = System.nanoTime();

        Scanner scan = new Scanner(System.in);
        int arreglo[], nElementos, menor, pos, tem;

            //NUMERO DE ELEMENTOS QUE TENDRA EL ARREGLO
        nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad total de elementos: "));
        arreglo = new int[nElementos];

        for (int i = 0; i < nElementos; i++) {
            //DATO A DIGITAR
            System.out.print("Digite un numero: ");
            arreglo[i] = scan.nextInt();
        }

            //MÉTODO POR SELECCION
        for(int i = 0; i < arreglo.length-1; i++){
            menor = arreglo[i];
            pos = i;
            for(int j = i+1; j < arreglo.length; j++){
                if(arreglo[j]  < menor){
                    menor = arreglo[j];
                    pos = j;
                }
            }
            if(pos != 1){
                tem = arreglo[i];
                arreglo[i] = arreglo[pos];
                arreglo[pos] = tem;
            }
        }
        System.out.println("Ordenamiento por Seleccion");
        for (int i = 0; i < arreglo.length; i++) {
            System.out.println(arreglo[i]);
        }

        //OTRA FORMA PERO UTILIZANDO DATOS TOTALMENTE ALEATORIOS

        /* Scanner scan = new Scanner(System.in);
        int arreglo[], nElementos, menor, pos, tem;

        nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad total de elementos: "));
        arreglo = new int[nElementos];

        for(int i = 0; i < nElementos; i++){
            arreglo[i] = (int)(Math.random()*100);
        }
        for (int i = 0; i < arreglo.length; i++) {
            System.out.println(arreglo[i]);
        }

            //MÉTODO POR SELECCION
        for(int i = 0; i < arreglo.length-1; i++){
            menor = arreglo[i];
            pos = i;
            for(int j = i+1; j < arreglo.length; j++){
                if(arreglo[j]  < menor){
                    menor = arreglo[j];
                    pos = j;
                }
            }
            if(pos != 1){
                tem = arreglo[i];
                arreglo[i] = arreglo[pos];
                arreglo[pos] = tem;
            }
        }
        System.out.println("Ordenamiento por Seleccion");
        for (int i = 0; i < arreglo.length; i++) {
            System.out.println(arreglo[i]);
        } */

        long endTime = System.nanoTime();
        System.out.println("Duración: " + ((endTime-startTime)/1000000000.0) + " segundos");
    }
}
