{
    class Car {
        make: string;
        model: string;
        year: number;
        
       constructor(make: string, model: string, year: number) {
          this.make = make;
          this.model = model;
          this.year = year;
        }
      
        getCarAge(): number {
          let current_Year = new Date().getFullYear();
          return current_Year - this.year;
        }
      }
      
     
     let car = new Car("Honda", "Civic", 2018);
      console.log(car.getCarAge()); 
      
}