function circulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo"); /*Creamos la variabla figura para dar forma a la figura en la opcion toggle que nos permite hacer y deshacer el click*/
}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rombo");
}

function rec_h(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rec_h");
}

function rec_v(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rec_v")
}

function arriba(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("arriba")
}

function abajo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("abajo")
}

function imagen(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("imagen")
}

function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("izquierda")
}

function derecha(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("derecha")
}

function diagonalderecha(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("diagonalderecha")
}

function diagonalizquierda(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("diagonalizquierda")
}

function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("triangulo")
}

function trapecio(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("trapecio")
}

function estrella(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("estrella")
}

function pacman(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("pacman")
}

function paralelograma(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("paralelograma")
}

//Capturar datos

function capturarDatos(){
//capturamos los valores de cada uno de los campos
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    var mFoto = document.getElementById("mFoto");
    var mNombres = document.getElementById("mNombres");
    var mEdad = document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar");

    mNombres.textContent = nombres;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;

    if (genero == "Masculino"){
        mFoto.src="img/profile.png";
    }
    else if(genero == "Femenino"){
        mFoto.src="img/woman.png";
    }
    else{
        mFoto.src="img/queer.png";
    }

    switch (color){
        case "Negro":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Negro");
            break
        case "Azul":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Azul");
            break
        case "Morado":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Morado");
            break
        case "Naranja":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Naranja");
            break
        case "Plateado":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Plateado");
            break
    }

}