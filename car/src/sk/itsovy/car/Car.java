package sk.itsovy.car;

public class Car {
    private String brand;
    private String model;
    private int year;
    private double consution;
    private boolean cvt;
    private Color color;
    private int maxSpeed;

    public Car() {
        this.year=2019;
        this.cvt=false;
        this.consution=10.0;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setConsution(double consution) {
        this.consution = consution;
    }

    public void setCvt(boolean cvt) {
        this.cvt = cvt;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public void print() {
        System.out.println("Brand: "+this.brand+" Model: "+model+" Color: "+color);
    }

    public Car(String brand, String model, int year, double consution) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.consution = consution;
    }
}
