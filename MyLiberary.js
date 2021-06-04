function collided(bullet,wall){
    if (bullet.x >= wall.x - wall.width){
      
      var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
      if (damage > 10 ){
        wall.shapeColor = "red";
        
      }
     
     
      if (damage < 10 || damage == 10){
        wall.shapeColor = "lightgreen";
        
      }
       
       }
  }