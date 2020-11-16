var cad= `
<div class="container-fluid bg-white">
                  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                    <a href="#index.html" onclick="homeRedirect()"> <img src= "img/logo.png" width="100" class="logo"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                          <a class="nav-link" href="index.html" onclick="homeRedirect()"> Inicio <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="aboutus.html" onclick="aboutUsRedirect()"> Nosotros </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="service.html" onclick="serviceRedirect()"> Productos </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="form.html" onclick="formRedirect()"> Contacto </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                  
                <section>
                     <!-- boton WhatsApp -->
                     <a href="http://wa.link/85d3jd" class="float" target="_blank">
                        <i class="fab fa-whatsapp my-float img-fluid"></i>
                    </a> 
                </section>
`
document.getElementById("header").innerHTML=cad;

var cad= `
<div class="rounded-social-buttons my-4">
                <a class="social-button facebook" href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                <a class="social-button instagram" href="https://www.instagram.com/magicocina/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a>                  
            </div>
            <p class="copy">  © 2020, Todos los derechos reservados - | Magicocina |. </p>
`
document.getElementById("footer").innerHTML=cad;

if (document.getElementById("producto")) {
  /*cad=`< class="carousel-idicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  `
  for (var i=1; i<data.length; i++){
    cad+='<li data-target="#demo" data-slide-to="'+i+'" class="active"></li>'
  }
  cad+=`</ul>`
  cad+=`<div class="carousel-inner">`
    for (var i=0; i<data.length; i++){
      cad+=`<div class="carousel-item `
      if(i==0)
        cad+=` active">`
      else
        cad+=`">`;
      
      cad+=`
      <img src="${data[i].imagen}" alt="${data[i].nombre}" width="100" height="100">
      <div class="carousel-caption">
        <h3>${data[i].nombre}</h3>
        <p>${data[i].descripcion}</p>
      </div>
    </div>`
    }
  cad+=`</div>`
  console.log(cad)
  document.getElementById("producto").innerHTML=cad;  esto no se ve*/

  //esto es fijo
  cad=`
  <table>
            <tr>
              <th> Nombre </th>
              <th> Descripcion </th>
              <th> Imagen </th>
            </tr>
  `
  //contenido que varia
  for (i=0; i<data.length; i++){
    cad+=`
    <tr>
              <td> ${data[i].nombre} </td>
              <td> ${data[i].descripcion}</td>
              <td> los mejores productos </td>
              <td> <img src= "${data[i].imagen}"> </td>
            </tr>
    `
  }
  cad+=`
      </table>
  `

  console.log(cad);
  document.getElementById("producto").innerHTML=cad;

}