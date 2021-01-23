var cad= `
<div class="container-fluid bg-white">
                  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                    <a href="#index.html" onclick="homeRedirect()"> <img src= "img/logo1.png" width="100" class="logo"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                          <a class="nav-link" href="index.html" onclick="homeRedirect()"> Inicio <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="aboutus.html" onclick="aboutUsRedirect()"> Sobre mí </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="service.html" onclick="serviceRedirect()"> Recetas </a>
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
            <p class="copy">  © 2020, Todos los derechos reservados <br/> | Magicocina |. </p>
`
document.getElementById("footer").innerHTML=cad;

