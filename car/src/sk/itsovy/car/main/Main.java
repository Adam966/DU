package sk.itsovy.car;

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.setBrand("Hyndai");
        myCar.setModel("Tucson");
        myCar.setYear(2017);
        myCar.setConsution(7.8);
        myCar.setColor(Color.GRAY);
        myCar.print();

        Car superCar = new Car("Skoda", "Octavia", 1993, 20, Color.GREEN);
        superCar.print();
        System.out.println(String.format("%02f", superCar.getKilometers(1.19, 50)));
    }
}
