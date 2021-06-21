var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var s_width= screen.width
var c_width = screen.width - 50;
var c_height = screen.height - 250;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    if(s_width<992){
        document.getElementById("myCanvas").width=c_width;
        document.getElementById("myCanvas").height=c_height;
    }
    canvas.addEventListener("touchstart", touch_d);
    
    function touch_d(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;  
    }

    canvas.addEventListener("touchmove", touch_m);
    function touch_m (e)
    {
      start_x = e.touches[0].clientX-canvas.offsetLeft;
      start_y = e.touches[0].clientY - canvas.offsetTop;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      ctx.moveTo(last_position_of_x,last_position_of_y);
      ctx.lineTo(start_x,start_y);
      ctx.stroke();
      last_position_of_x = start_x;
      last_position_of_y = start_y;

    }

   

   

