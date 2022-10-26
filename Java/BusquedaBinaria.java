import javax.swing.JOptionPane;

public class BusquedaBinaria {
    public static void main(String[] args) {
        long startTime = System.nanoTime();

        int[] arreglo = { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 };
        int dato = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingrese el numero a buscar: "));
        int busqueda = busquedaBinaria(arreglo, dato);

        if (busqueda != -1) {
            System.out.println("El dato esta en la posicion: " + busqueda);
        } else {
            System.out.println("El dato no fue encontrado");
        }
        long endTime = System.nanoTime();
        System.out.println("Duración: " + ((endTime - startTime) / 1000000000.0) + " segundos");
    }

    private static int busquedaBinaria(int[] arreglo, int dato) {

        int centro;
        int inferior = 0;
        int superior = arreglo.length - 1;
        while (inferior <= superior) {
            centro = (inferior + superior) / 2;
            if (arreglo[centro] == dato) {
                return centro;
            } else if (dato < arreglo[centro]) {
                superior = centro - 1;
            } else {
                inferior = centro + 1;
            }
        }
        return -1;
    }
}
