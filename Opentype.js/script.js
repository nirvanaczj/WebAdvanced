var fontName = "https://cdn.glitch.com/6a98ee39-b203-42c3-b9d2-3e2213e5f4c5%2FRoboto-Regular.ttf?v=1573066194338"

opentype.load(fontName, function(err, font) {
    window.font = font
    if (err) {
      alert("Font could not be loaded: " + err);
    } else {
      // Construct a Path object containing the letter shapes of the given text.
      // The other parameters are x, y and fontSize.
      // Note that y is the position of the baseline.
      var path = font.getPath("Hello, World!", 0, 150, 120);

      // If you just want to draw the text you can also use font.draw(ctx, text, x, y, fontSize).
      // path.draw(ctx);
      var snapPath = font.getPath("ZiJia Chen", 0, 200, 120);
      snapPath.fill = 'white'
      doSnap(snapPath);
      var snapCtx = document.getElementById("snap").getContext("2d");
      snapCtx.clearRect(0, 0, 940, 300);
      snapPath.draw(snapCtx);
      // font.draw(ctx,'Hello, World!',0, 150, 120,);
      // font.drawPoints(ctx,'Hello, World!',0, 150, 120,);
      // font.drawMetrics(ctx,'Hello, World!',0, 150, 120,);
    }
  }
);

// console.log(font)
var snapStrength = Math.random()*80;
snapStrength = 60
var snapDistance = 50;
var snapX = 0;
var snapY = 0;
function doSnap(path) {
  var i;
  var strength = snapStrength / 100.0;
  for (i = 0; i < path.commands.length; i++) {
    var cmd = path.commands[i];
    if (cmd.type !== "Z") {
      cmd.x = snap(cmd.x + snapX, snapDistance, strength) - snapX;
      cmd.y = snap(cmd.y + snapY, snapDistance, strength) - snapY;
    }
    if (cmd.type === "Q" || cmd.type === "C") {
      cmd.x1 = snap(cmd.x1 + snapX, snapDistance, strength) - snapX;
      cmd.y1 = snap(cmd.y1 + snapY, snapDistance, strength) - snapY;
    }
    if (cmd.type === "C") {
      cmd.x2 = snap(cmd.x2 + snapX, snapDistance, strength) - snapX;
      cmd.y2 = snap(cmd.y2 + snapY, snapDistance, strength) - snapY;
    }
  }
}

function snap(v, distance, strength) {
  return v * (1.0 - strength) + strength * Math.round(v / distance) * distance;
}


document.addEventListener("mousemove", function(event){
//  console.log(font)
  var clientWpercent = 20 + event.clientX/document.body.clientWidth * 80
  var clientHpercent = 20 + event.clientY/document.body.clientHeight * 80
  snapStrength = clientWpercent
  snapDistance = clientHpercent
  function render(font) {
    
      // Construct a Path object containing the letter shapes of the given text.
      // The other parameters are x, y and fontSize.
      // Note that y is the position of the baseline.
      var path = font.getPath("Hello, World!", 0, 150, 120);

      // If you just want to draw the text you can also use font.draw(ctx, text, x, y, fontSize).
      // path.draw(ctx);
      var snapPath = font.getPath("ZiJia Chen", 0, 200, 120);
      snapPath.fill = 'white'
      doSnap(snapPath);
      var snapCtx = document.getElementById("snap").getContext("2d");
      snapCtx.clearRect(0, 0, 940, 300);
      snapPath.draw(snapCtx);
      // font.draw(ctx,'Hello, World!',0, 150, 120,);
      // font.drawPoints(ctx,'Hello, World!',0, 150, 120,);
      // font.drawMetrics(ctx,'Hello, World!',0, 150, 120,);
    }
  render(font)
  }
);
