var nextPageToken = "";
// Resultados por pagina
var resPorPagina = 12;
// Paginas a mostrar
var arrLinks = [];
var arrNames = [];
var paginas = 1;
var key = "AIzaSyA4XorSjdlx1WAESJgiKgJaNPEahyTsMmw";
var idCanal = "UCwM4o1t8iRs9Jdan9NhQgWg";
var url = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&channelId=" + idCanal + "&part=snippet,id&order=date&maxResults=" + resPorPagina;
$.getJSON(url, function (data) {    
    
    for ( i in data.items ){ 
        //Hacer reseña
        var reseña  = document.createElement("p"), contenido = document.createTextNode("Video"); 
        reseña.append(contenido);

        //Poner logo de hover
        var img = document.createElement("img");
        img.setAttribute("src","./img/iconoEntrar.png");
        img.setAttribute("alt","");

        //Crear el nombre del video
        var videoName  = document.createElement("p"), contenido = document.createTextNode(data.items[i]["snippet"].title); 
        arrNames.push(data.items[i]["snippet"].title);                
        videoName.setAttribute("id",data.items[i]["snippet"].title);
        videoName.append(contenido);        

        //Crear div
        var divHover = document.createElement("div");
        divHover.setAttribute("onclick","youtube()");
        divHover.setAttribute("class","hover-galeria");
        divHover.append(videoName);
        divHover.append(img);
        divHover.append(reseña);
        
        //Imagen de youtube
        var imgYoutube = document.createElement("img");
        imgYoutube.setAttribute("src",data.items[i]["snippet"]["thumbnails"]["high"].url);
        imgYoutube.setAttribute("alt","");

        //Crear div de imagen
        var divImagen = document.createElement("div");
        divImagen.setAttribute("class","imagen-port");
        divImagen.append(imgYoutube);
        divImagen.append(divHover);
                
        //Obtener el divGaleria
        var divGaleria = document.getElementById("youtube");
        //Añadir a la galeria de imagenes
        divGaleria.appendChild(divImagen);
                           
        arrLinks.push("https://www.youtube.com/watch?v=" + data.items[i]["id"].videoId);
    }    
});

function youtube(){                    
    for ( var i = 0 ; i < arrNames.length ; i++ ){
        var divHover = document.getElementById(arrNames[i]);            
        for( var j = 0 ; j < arrNames.length ; i++ ){
            if ( divHover.textContent == arrNames[i] ){
                window.open(arrLinks[i]);
                break;
            }        
        }
    }
}

function link(){
    window.open("https://drive.google.com/drive/folders/1U5vy1-HZm4If3P35rzyU6Ss6DPQGw2n6?usp=sharing");
}