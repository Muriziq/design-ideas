function drawRoundedShape(points, radius,ctx) {
    if (points.length < 2) return;
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
      const prev = points[(i - 1 + points.length) % points.length];
      const curr = points[i];
      const next = points[(i + 1) % points.length];

      const v1 = { x: curr.x - prev.x, y: curr.y - prev.y };
      const len1 = Math.hypot(v1.x, v1.y);
      v1.x /= len1;
      v1.y /= len1;
      const v2 = { x: next.x - curr.x, y: next.y - curr.y };
      const len2 = Math.hypot(v2.x, v2.y);
      v2.x /= len2;
      v2.y /= len2;
      const p1 = {
        x: curr.x - v1.x * Math.min(radius, len1 / 2),
        y: curr.y - v1.y * Math.min(radius, len1 / 2),
      };
      const p2 = {
        x: curr.x + v2.x * Math.min(radius, len2 / 2),
        y: curr.y + v2.y * Math.min(radius, len2 / 2),
      };

      if (i === 0) {
        ctx.moveTo(p1.x, p1.y);
      } else {
        ctx.lineTo(p1.x, p1.y);
      }
      ctx.arcTo(curr.x, curr.y, p2.x, p2.y, radius);
    }
    ctx.closePath();

}
function firstCanvas(){
  const firstNav = document.querySelector(".first nav").getBoundingClientRect()
  const first2 = document.querySelector(".first2").getBoundingClientRect()
  const first2Canvas = document.querySelector(".first2 canvas")
  first2Canvas.style.height = `${first2.height+firstNav.height}px`
  first2Canvas.style.top = `-${firstNav.height}px`
  const firstctx = first2Canvas.getContext("2d")
  first2Canvas.height = first2.height + firstNav.height
  first2Canvas.width = first2.width

  const firstPoint = [
    {x:0,y:0},
    {x:first2.width-firstNav.width-50,y:0},
    {x:first2.width-firstNav.width,y:firstNav.height},
    {x:first2.width,y:firstNav.height},
    {x:first2.width,y:first2Canvas.height},
    {x:first2.width-firstNav.width,y:first2Canvas.height},
    {x:first2.width-firstNav.width-50,y:first2Canvas.height-100},
    {x:0,y:first2Canvas.height-100}
  ]
  firstctx.beginPath()
  firstctx.fillStyle = "#ECFFEB"
  firstctx.moveTo(0,0)
  drawRoundedShape(firstPoint,20,firstctx)
  firstctx.fill()
  firstctx.closePath()
  

  const secondCanvas = document.querySelector(".first3 canvas")
  const first3 = document.querySelector(".first3").getBoundingClientRect()
    secondCanvas.style.height = `${first3.height+firstNav.height}px`
  secondCanvas.style.top = `-${firstNav.height}px`
  const seondCtx = secondCanvas.getContext("2d")
  secondCanvas.height = first3.height + firstNav.height
  secondCanvas.width = first3.width
  const secondPoint = [
    {x:0,y:0},
    {x:first3.width-firstNav.width-60,y:0},
    {x:first3.width-firstNav.width -10,y:firstNav.height},
    {x:first3.width,y:firstNav.height},
    {x:first3.width,y:secondCanvas.height},
    {x:0,y:secondCanvas.height}
  ]
    seondCtx.beginPath()
  seondCtx.fillStyle = "#223315"
  seondCtx.moveTo(0,0)
  drawRoundedShape(secondPoint,20,seondCtx)
  seondCtx.fill()
  seondCtx.closePath()
}
firstCanvas()

function secondCanvas(){
  const secondHeaderDiv = document.querySelector(".second header > div").getBoundingClientRect()
  document.querySelector(".second header > p").style.width = secondHeaderDiv.width + "px"
  const canvas = document.querySelector(".second3 > canvas")
  const secondButton = document.querySelector(".second3 > button").getBoundingClientRect()
  const secondDiv = document.querySelector(".second3 > div").getBoundingClientRect()
  const canvasSize = canvas.getBoundingClientRect()
  canvas.width = canvasSize.width
  canvas.height = canvasSize.height
  const ctx = canvas.getContext("2d")
  const points = [
    {x:0,y:0},
    {x:canvasSize.width-secondButton.width-7,y:0},
    {x:canvasSize.width-secondButton.width-7,y:secondButton.height},
    {x:canvasSize.width,y:secondButton.height+10},
    {x:canvasSize.width,y:canvasSize.height},
    {x:secondDiv.width+7,y:canvasSize.height},
    {x:secondDiv.width+7,y:canvasSize.height-secondDiv.height-7},
    {x:0,y:canvasSize.height-secondDiv.height-7},
  
  ]
  const image = new Image()
  image.src = "images/512422e4cfee98cebb7b33bf624717a51cbbb9f8.jpg"


    ctx.beginPath()
  ctx.moveTo(0,0)
  drawRoundedShape(points,30,ctx)
  ctx.clip()
  image.onload = () =>{
      console.log(image.height,image.width)
      const scale = Math.max(canvas.height/image.height,canvas.width/image.width)
      const newWidth = image.width * scale
      const newHeight = image.height * scale
    ctx.save()
    ctx.translate(newWidth/2,newHeight/2)
    ctx.drawImage(image,-newWidth/2,-newHeight/2,newWidth,newHeight)
    ctx.restore()
  }
  ctx.closePath()
}
secondCanvas()


function thirdCanvas(){
  const canvas = document.querySelector(".third2 canvas")
  const third2 = document.querySelector(".third2").getBoundingClientRect()
  const thirdNav = document.querySelector(".thirdnav").getBoundingClientRect()
  canvas.style.height = `${third2.height+thirdNav.height}px`
  canvas.style.width = `${third2.width}px`
  canvas.style.top = `-${thirdNav.height}px`
  canvas.width = third2.width
  canvas.height = third2.height + thirdNav.height
  
  const ctx = canvas.getContext("2d")
  const points =[
    {x:0,y:0},
    {x:third2.width-thirdNav.width-20,y:0},
    {x:third2.width-thirdNav.width-10,y:thirdNav.height-10},
    {x:third2.width-thirdNav.width,y:thirdNav.height},
    {x:third2.width,y:thirdNav.height},
    {x:third2.width,y:canvas.height},
    {x:0,y:canvas.height}

  ]
  const image = new Image()
  image.src = "images/Casa interior HD 8K papel de parede Imagem fotográfica _ imagem Premium gerada com IA 1.svg"


 
  image.onload = () =>{
       ctx.beginPath()
  ctx.moveTo(0,0)
  drawRoundedShape(points,30,ctx)
  ctx.clip()
      console.log(image.height,image.width)
      const scale = Math.max(canvas.height/image.height,canvas.width/image.width)
      const newWidth = image.width * scale
      const newHeight = image.height * scale
    ctx.save()
    ctx.translate(newWidth/2,newHeight/2)
    ctx.drawImage(image,-newWidth/2,-newHeight/2,newWidth,newHeight)
    ctx.restore()
      ctx.closePath()
    ctx.beginPath()
      ctx.moveTo(0,0)
  drawRoundedShape(points,30,ctx)
  ctx.clip()
  ctx.fillStyle = "#00000042"
  ctx.rect(0,0,canvas.width,canvas.height)
  ctx.fill()
  ctx.closePath()
  }

}
thirdCanvas()