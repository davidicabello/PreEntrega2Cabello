/* 
    Un objeto es una estructura que permite agrupar valores relacionados entre si
    Los objetos contienen propiedades y cada propiedad dentro tendrá su propio valor
    Esta relacion se conoce como clave-valor (clave=propiedad, valor=valor)

    Además de propiedades, los objetos contienen métodos: funciones que se ejecutan en relación al objeto en cuestión
    Los métodos deben estar siempre relacionados a un objeto para su ejecución.

    Se pueden representar en objetos cualquier elemento de la vida real, platos de cocina, departamentos, transacciones bancarias
    

    Por ejemplo:

    let nombre = "Martin"
    let apellido = "Martinez"
    let comision = 54925

    Tenemos 3 variables que, nosotros como humanos le encontramos una relación (entnre las 3 componen una persona que pertence a este curso)
    Pero a ojos de JS son 3 variables totalmente independientes, sin ninguna relación entre si}
    Los objetos nos permiten agrupar estos valores dandole relación de cara a JS

  

 ~~~~// sintaxis:

        palabraReservada nombreObjeto operadorAsignación{
            clave: valor,
            clave: valor,
            clave: valor
        }

        const estudiante = {
            nombre: "Martin",
            apellido: "Martinez",
            comision: 54925
        }

        Así, tenemos un objeto cuyas propiedades son nombre, apellido y comision

~~~ACCESO A LA INFO

        El acceso a la información almacenada en las propiedades es bastante similar al acceso a las variables, 
        con la salvedad que debemos anteponer el objeto al que hacemos referencia antes de la propiedad

        si antes planteabamos console.log(nombre), trabajando con objetos debemos plantear

        console.log(estudiante.nombre) 
    
        Otra alternativa de sintaxis sería, en lugar de objeto.propiedad plantear objeto["propiedad"]
        Ej.:

        console.log(estudiante["nombre"]) //Sintaxis confusa cuando lleguemos a arrays

~~~ Para tener en cuenta:

        Al declarar los objetos con const nos aseguramos que no se podrá modificar durante la ejecución.
        Esta limitación recae sobre las propiedades, no así sobre los valores.
        Es decir, de mi objeto estudiante, una vez declarado no puedo quitarle la propiedad 'apellido' ni sumarle la propiedad calificación
        Lo que sí puedo hacer sobre este objeto es modificar los valores que contienen las propiedades, actualizando el valor de la prop comisión a '54545'

        Cómo hacemos esta modificación? Similar a la reasignación de una variable

        si antes planteabamos

        comision = 54549
        ahora deberíamos indicar que queremos trabajar con la propiedad del objeto:

        estudiante.comision = 54549


~~~ METODOS

        Para incorporar métodos (funciones que están ligadas a objetos, sin ellos no se podrían ejecutar)
        Así se le da a cada objeto un comportamiento especifico asociado a él

        Por ejemplo, un método que muestre toda la información del objeto, podría ser:

        const estudiante = {
            nombre: "Martin",
            apellido: "Martinez",
            comision: 54925,
            presentarse: function(){
                alert(`Hola, yo soy ${this.nombre} ${this.apellido} y pertenezco a la comisión ${this.comision}`)
            }
        }

        El método presentarse es parte del objeto estudiante, con lo cual es necesario invocarlo/llamarlo antes de ejecutar el método
        estudiante.presentarse()

    ~~~ EJEMPLOS DE METODOS QUE YA CONOCEMOS

            .toLowerCase() --> Metodo
            .toFixed() --> Metodo
            .length --> Propiedad, no termina en ()
    
    ~~~ METODOS PERSONALIZADOS
        
            const perro = {
                nombre: "Bobby",
                raza: "Callejero"
                ladrar: function(){
                    alert("Guau guau")
                }
                romper: function(queRompo){
                    alert(`Olvidate de tu ${queRompo}`)
                }
                manguear: function(){
                    alert("me das?")
                }
            }

            perro.ladrar()
            perro.romper("basura")
            perro.manguear()


~~~  THIS

        Palabra reservada que refiere al objeto que se está trabajando
        Por ejemplo, en presentarse() hacemos mencion a this.nombre ya que queremos la propiedad nombre del
        objeto desde el cual estamos llamando a presentarse()

        Sería lo mismo que decir 'yo soy ${estudiante.nombre}' pero eso nos sacaría dinamismo: porque si mi proximo objeto se llama nuevoEstudiante,
        tengo que modificar el código de mi método. En cambio, utilizando this, se hace referencia al contexto donde trabajamos
        El valor que queremos mostrar es el contenido de la propiedad 'nombre' perteneciente a este (this) objeto --> estudiante 


~~~ OBJETOS LITERALES

        Entendemos por objetos literales a aquellos objetos declarados manualmente, entre llaves, para encapsular en ellas las propiedades y métodos

        Se diferencian de los objetos construidos

~~~ OBJETOS CONSTRUIDOS
        Son aquellos objetos que son instanciados (creados) a partir del uso de una function constructora, que define propiedades y métodos del tipo de objeto
        La function constructora es el molde a partir del cual se van a instanciar los distintos objetos de ese tipo.
        Cuando trabajamos con objetos que vayan a tener las mismas características pero cada cual con sus particularidades, podemos estandarizar su creación con los constructores
        Los objetos instanciados a partir de constructores heredan sus propeidades y métodos

            palabraReservada nombreFuncion (parametros){
                palabraReservada.propiedad = valor,
                palabraReservada.propiedad = valor,
                palabraReservada.propiedad = funcion
            }

            function Estudiante(nombre, apellido, comision){
                this.nombre = nombre;
                this.apellido = apellido;
                this.comision = comision
                this.presentarse = function () {
                    alert(`Hola, yo soy ${this.nombre} ${this.apellido} y pertenezco a la comisión ${this.comision}`)
                }
            }
            Todos los objetos instanciados a partir de Estudiante heredarán las propiedades nombre, apellido y comisión
            También heredan el metodo presentarse()

        Cómo instancio objetos a partir de una function moldeadora? utilizando la palabra reservada NEW

        palabraReservada nombreObjeto operadorAsignación palabraReservada functionMoldeadora (parametros)

        const estudiante1 = new Estudiante ("Martin", "Martinez", 54925)
        
        Se enviarán esos valores como parámetros a la function Estudiante, la cual asignará los valores enviados como parámetros a un nuevo objeto que almacenará en estudiante1


~~~ CLASES 
        Aportan una sintaxis más clara y simple para utilizar como instanciador de objetos.
        Su incorporación deja de lado el uso de la función constructora, prefiriendo siempre el uso de class constructor

        //SINTAXIS
            
            palabaReservada NombreClase{
                palabraReservada(parametros){
                    palabraReservada.propiedad = valor,
                    palabraReservada.propiedad = valor
                }
            }

            class Perros{
                constructor(nombrePerro, razaPerro){
                    this.nombre = nombrePerro,
                    this.raza = razaPerro
                }
            }

            const bobby = new Perro("Bobby", "Callejero")
            const micki = new Perro("Micki", "Caniche")

            class Estudiante{
                constructor(nombre, comision){
                    this.nombre = nombre,
                    this.comision = comision,
                    this.nota1 = 0,
                    this.nota2 = 0,
                    this.nota3 = 0,
                    this.final = ""
                }
            }

            const estudiante1 = new Estudiante("Martín Martinez", 54925)

        //METODOS EN CLASES

            utilizando clases los métodos no se declaran como funciones anónimas dentro de las propiedades.
            Se declaran dentro de la clase pero fuera del constructor, prescindiendo de la palabraReservada function

            palabaReservada NombreClase{
                palabraReservada(parametros){
                    palabraReservada.propiedad = valor,
                    palabraReservada.propiedad = valor
                }
                nombreMetodo(parametros){
                    codigo del método
                }
            }

            class Perros{
                constructor(nombrePerro, razaPerro, comidaPerro){
                    this.nombre = nombrePerro,
                    this.raza = razaPerro,
                    this.comida = comidaPerro
                }
                ladrar(){
                    alert("Guau guau")
                }
                romper(queRompo){
                    alert(`Olvidate de tu ${queRompo}`)
                }
                gustosComida(nuevaComida){
                    this.comida = nuevaComida,
                    alert("")
                }
            }

            class Estudiante{
                constructor(nombre, comision){
                    this.nombre = nombre,
                    this.comision = comision,
                    this.nota1 = 0,
                    this.nota2 = 0,
                    this.nota3 = 0,
                    this.final = ""
                }
                calificarExamen(trimestre, nota){
                    if(trimestre == 1){
                        this.nota1 = nota;
                        alert(`${this.nombre} obtuvo un ${this.nota1} en el primer examen`)
                    }else if(trimestre == 2){
                        this.nota2 = nota;
                        alert(`${this.nombre} obtuvo un ${this.nota2} en el segundo examen`)
                    }else if(trimestre == 3){
                        this.nota3 = nota;
                        alert(`${this.nombre} obtuvo un ${this.nota3} en el tercer examen`)
                    }else{
                        alert("Ingrese un trimestre válido y reintente")
                    }
                }
                evaluacionFinal(){
                    let promedio = (this.nota1 + this.nota2 + this.nota3 ) / 3
                    if (promedio >= 7){
                        this.final = "Aprobado"
                    }else if(promedio >= 4){
                        this.final = "Rinde final"
                    }else{
                        this.final = "Recursará"
                    }
                    alert(`El resultado de ${this.nombre} en la comision ${this.comision} fue ${this.final}`)
                }
            }

            const estudiante1 = new Estudiante("Martín Martinez", 54925)
            estudiante1.calificarExamen(1, 8)
            estudiante1.calificarExamen(2, 7)
            estudiante1.calificarExamen(3, 9)
            estudiante1.evaluacionFinal()


~~~ IN / FOR IN
        
    El operador IN devuelve true o false según si el valor que enviamos existe como propiedad del objeto

    console.log(propiedad in objeto)

    console.log(comision in estudiante1) --> true
    console.log(curso in estudiante1) --> false

    el ciclo for..in recorre las propiedades del objeto y por cada una de ellas realiza una determinada acción

    for (alias in estudiante1){
        console.log(estudiante1[alias])
        //Para acceder a las propiedades dinamicamente utilizamos la notacion de [] en lugar del punto
        //Ya que el . interpreta que litearlmente le estamos pidiendo esa propiedad estáticamente 
        //si planteamos estudiante1.alias va a buscas la propiedad 'alias' en lugar del contenido variable de alias
        //'alias' es un nombre definido manualmente, puede ser cualquier nombre mientras se respete su uso en el código
    }

*/