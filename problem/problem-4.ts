{
    
type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  type Shape = Circle | Rectangle;
  
  function isCircle(shape: Shape): shape is Circle {
    return shape.shape === "circle";
  }
  
  function isRectangle(shape: Shape): shape is Rectangle {
    return shape.shape === "rectangle";
  }
  
 
  function calculateShapeArea(shape: Shape): number {
    if (isCircle(shape)) {
     
      return Math.PI * Math.pow(shape.radius, 2);
    } else if (isRectangle(shape)) {
  
      return shape.width * shape.height;
    } else {
      throw  Error("erro shape type");
    }
  }
  

 let circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea); 

let rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea); 
}