<template>
    <main>
        <article>
            <div class="container text-center acomodo">
                <p class="h2 title fontDesign">Películas y series ilimitadas y mucho más</p>
                <p class="h4 subtitle mt-4">Disfruta donde quieras. Cancela cuando quieras</p>
                <p class="h5 subtitle mt-4">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            </div>
            <div class="container text-center mt-3 acomodo2">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-6">
                        <input class="form-control inputEmail border rounded-2" type="email" name="email" id="email" placeholder="Email">
                    </div>
                    <div class="col-md-2">
                        <button class="btn btnNext rounded-2" type="button">
                            Comenzar
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
        <article>
            <div class="text-center bg-white containerPlain rounded-2">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center left">
                        <img src="../assets/images/popCorn.png" style="width: 100px;">
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center right">
                        <div class="text-left"> <!-- Agregado text-left para alinear el texto a la izquierda -->
                            <p class="h5 mb-3">Todo lo que te encanta de Netflix por tan solo $99.</p>
                            <p class="h6 mb-3">Elige el plan Estándar con anuncios.</p>
                            <p class="h6">
                                <a href="#">
                                    Más info
                                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#5985E1"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article>
            <div class="container divPositionLeft">
                <div class="align-middle">
                    <p class="h2 title fontDesign">Disfruta en tu TV</p>
                    <p class="h4">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple <br>TV, reproductores de Blu-ray y más.
                    </p>
                    <img class="float-end imgPositionRight" src="../assets/images/home1.png" alt="">
                </div>
            </div>
            <hr class="border line">
        </article>
        <article>
            <div class="container divPositionRight">
                <div class="align-middle">
                    <img class="float-start imgPositionLeft" src="../assets/images/home2.png" alt="">
                    <p class="h2 title fontDesign">Disfruta donde quieras</p>
                    <p class="h4">Películas y series ilimitadas en tu teléfono, tablet,<br> laptop y TV.
                    </p>
                </div>
            </div>
            <hr class="border line">
        </article>
        <article>
            <div class="container divPositionLeft">
                <div class="align-middle">
                    <p class="h2 title fontDesign">Crea perfiles para niños</p>
                    <p class="h4">Los niños vivirán aventuras con sus personajes <br> favoritos en un espacio diseñado exclusivamente para <br> ellos, sin costo con tu membresía.
                    </p>
                    <img class="float-end imgPositionRight" src="../assets/images/home3.png" alt="">
                </div>
            </div>
            <hr class="border line">
        </article>
        <article>
            <div class="container divPositionRight">
                <div class="align-middle">
                    <img class="float-start imgPositionLeft" src="../assets/images/home4.png" alt="">
                    <p class="h2 title fontDesign">Descarga tus series para <br> verlas offline</p>
                    <p class="h4">Ve Netflix en un avión, un tren o un submarino...
                    </p>
                </div>
            </div>
            <hr class="border line">
        </article>
        <article>
            <br>
            <div class="container text-center fq color-white">
                <p class="h2 title fontDesign mt-5">
                    Preguntas frecuentes
                </p>
                <div class="dropdown mt-3">
                    <button class="btndesign dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="h4">¿Qué es Netflix?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#FFFFFF"><path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z"/></svg>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <p class="dropdown-item">Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.

Todo lo que quieras ver, a un costo mensual muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!</p>
                    </div>
                </div>
            </div>
        </article>
    </main>
</template>

<script>
export default {
    name: 'TheWelcome'
}
</script>

<style scoped>
.acomodo {
    color: white;
    margin-top: 10%;
}

.acomodo2 {
    margin-left: 22.5%;
}

.title {
    font-size: 2.7em;
}

.subtitle {
    font-weight: 400;
}

.right {
    margin-top: 15px;
    margin-left: -20%;
}

.left {
    margin-top: 15px;
    margin-left: 10%;
    margin-right: -220px;
}

.inputEmail {
    border-color: gray;
    background: rgba(33, 33, 33, 0.6);
    padding: 12px;
    width: 380px;
    height: 56px;
}

.inputEmail::placeholder {
    color: white;
}

.btnNext {
    text-align: center;
    background-color: rgba(229, 9, 20, 1);
    border: 1px solid rgba(229, 9, 20, 1);
    color: white;
    font-size: 1.5em;
    font-weight: 500;
    margin-left: -540px;
    transition: .2s ease-in-out;
    padding: 10px;
    width: 200px;
}

.btnNext:hover {
    background-color: rgb(197, 16, 25);
    color: white;
}

.containerPlain {
    color: white;
    width: 90%;
    height: 150px;
    margin: auto;
    margin-top: 80px;
    background: rgb(72,22,63);
    background: radial-gradient(circle, rgba(72,22,63,1) 9%, rgba(0,4,19,1) 74%);
}

.imgPositionRight{
    position: relative;
    margin-top: -16%;
    margin-right: 20%;
    width: 40%;
}
.divPositionLeft{
    margin-top: 180px;
    margin-left: 23%;
    color: white;
    padding-bottom: 220px;
}
.imgPositionLeft{
    position: relative;
    margin-top: -8%;
    margin-left: -20%;
    width: 40%;
}
.divPositionRight{
    margin-top: 80px;
    margin-left: 33%;
    color: white;
    padding-bottom: 170px;
}
.divPositionRight img{
    top: 0px;
    height: 500px;
    width: auto;
}
.divPositionLeft img{
    top: 0px;
    height: 300px;
    width: auto;
}
.line{
    width: 100%;
    height: 8px;
    background: gray;
}
.fontDesign{
    color: white;
}
.fq{
    height: 1000px;
}
.btndesign{
    border-style: none;
    background: rgba(47, 47, 47, 1);
    color: white;
    height: 85px;
    text-align: start;
    width: 1175px;
}
.btndesign span{
    position: absolute;
    margin-top: 10px;
    margin-left: 10px;
    font-weight: 400;
}
.btndesign svg{
    float: right;
    margin-right: 10px;
}
/* Eliminar la flecha del dropdown */
.dropdown-toggle::after {
    display: none;
}
</style>