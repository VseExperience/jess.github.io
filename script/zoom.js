var zoom = 1;

var elems = document.getElementsByClassName("item_photo");
for (var i = 0; i < elems.length; i++) {
    elems[i].style.cursor = 'zoom-in';
    elems[i].addEventListener("click", function() {

        if(zoom == 1) {
            zoom = 1.5;
            this.style.transform = "scale(" + zoom + ")";
            this.style.cursor = 'zoom-out';
        } else if (zoom == 1.5) {
            zoom = 1;
            this.style.transform = "scale(" + zoom + ")";
            this.style.cursor = 'zoom-in';
        }
    });
}





//    document.getElementById("zoomElement").addEventListener("click", function() {
//
//        if(zoom == 1) {
//            zoom = 1.5;
//            document.getElementById("zoomElement").style.transform = "scale(" + zoom + ")";
//            document.getElementById("zoomElement").style.cursor = 'zoom-out';
//        } else if (zoom == 1.5) {
//            zoom = 1;
//            document.getElementById("zoomElement").style.transform = "scale(" + zoom + ")";
//            document.getElementById("zoomElement").style.cursor = 'zoom-in';
//        }
//    });

