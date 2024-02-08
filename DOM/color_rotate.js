var color_palette = [
        ["black", "yellow"],
        ["white", "navy"],
        ["darkgreen", "lightcoral"],
        ["slategray", "lavender"],
        ["darkslateblue", "lightgoldenrodyellow"],
        ["dimgray", "mistyrose"],
];
var color_palette_size = color_palette.length - 1;
var i = 0;
var isRotate = false;
var color_interval;

self.onmessage = function (event) {
        console.log(i);

        if (!isRotate) {
                var date = new Date();
                self.postMessage([color_palette[i][0],color_palette[i][1],date]);
                i++;
                color_interval = setInterval(start_rotate, 1000);
                isRotate = true;
        }       
        else{
                stop_rotate();
                if(i >= color_palette_size){
                        i = 0 ;
                }
                self.postMessage("end");
        }
        
        function start_rotate(){
                date = new Date();
                self.postMessage([color_palette[i][0],color_palette[i][1],date]);
                i++;
                if(i >= color_palette_size){
                        i = 0 ;
                }
        }

        function stop_rotate() {
                isRotate = false;
                clearInterval(color_interval);
        }

                
};
