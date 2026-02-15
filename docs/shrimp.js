let rots = [ 
  { ry: 0,   rx: 0  },
  { ry: 90,  rx: 0  },
  { ry: 180, rx: 0  },
  { ry: 270, rx: 0  },
  { ry: 0,   rx: 90 },
  { ry: 0,   rx:-90 }
];

// local image paths
let images = [
  'images/THESHRIMP.png',
  'images/THESHRIMP.png',
  'images/THESHRIMP.png',
  'images/THESHRIMP.png',
  'images/THESHRIMP.png',
  'images/THESHRIMP.png'
];

gsap.timeline()
  .set(".face", {
    rotateY: (i) => rots[i].ry,
    rotateX: (i) => rots[i].rx,
    transformOrigin: "50% 50% -150px",
    z: 150,
    background: (i) => `url(${images[i]}) center / cover no-repeat`
  })
  .add(function(){
    window.onmousemove = (e)=> {
      
      let winPercent = { 
        x: e.clientX / innerWidth, 
        y: e.clientY / innerHeight 
      };

      gsap.to(cube, {
        duration:1,
        rotationX:-180+360*winPercent.y,
        rotationY:-180+360*winPercent.x
      });
      
      gsap.to('.face', {
        duration:1,
        backgroundPosition:
          -150+150*winPercent.x+'px '+
          (-150*winPercent.y)+'px'
      });
    }  
  });
