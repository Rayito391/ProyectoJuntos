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
                    <div class="col-md-6 d-flex justify-content-center align-items-center rigth">
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
            <div class="container border">
                <p class="h2 title fontDesign">Disfruta en tu TV</p>
            </div>
            <div class="container">

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
    .acomodo{
        color: white;
        margin-top: 10%;
        opacity: 1;
    }
    .acomodo2{
        margin-left:22.5%;
    }
    .title{
        font-size: 2.7em;
    }
    .subtitle{
        font-weight: 400
    }
    .rigth{
        margin-top: 15px;
        margin-left: -20%;
    }
    .left{
        margin-top: 15px;
        margin-left: 10%;
        margin-right: -220px;
    }
    .inputEmail{
        border: 1px solid white;
        background: rgba(33, 33, 33, 0.6);
        padding: 12px;
        width: 380px;
        height: 56px;
    }
    .inputEmail::placeholder{
        color: white;
    }
    .btnNext{
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
    .btnNext:hover{
        background-color: rgb(197, 16, 25);
        color: white;
    }
    .containerPlain{
        color: white;
        width: 90%;
        height: 150px;
        margin: auto;
        margin-top: 80px;
        background: rgb(72,22,63);
        background: radial-gradient(circle, rgba(72,22,63,1) 9%, rgba(0,4,19,1) 74%);
    }

</style>


