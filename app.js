
new Vue({
    'el':'#app',
    data:{
        ejemploNombre: "Carlos",
        contador:0,
        numRandom:0,
        lista:"",
        clase:true,
        texto:"",
        mensaje:""
    },
    methods:{
        numeroAl(){
            this.numRandom=Math.random();
        },
        cambiarDiseño(){
            this.clase= this.clase ==true ? "btn-warning":"btn-primary"
        },
        validar(){
            if(this.texto.length()!=0){
                this.mensaje="Con Texto"
            }else{
                this.mensaje="Sin texto"
            }
        },
        incrementa(){
            this.contador=this.contador+=2
        }
    }
})

/*new Vue({
    'el':'#app',
    data:{
        mostrar:true,
        lenguajes:['C','C++','Javascrip'],
        claseAdicional: 'roja',
        ancho:20,
        miEstilo:{width:50+'px'}
    }
})

/*new Vue({
    'el':'#app',
    data:{
        empleados:[
            {name:'Evan You',salary:6000,location:'Tepic'},
            {name:'Erich Gamma',salary:6000,location:'Guallabitos'},
            {name:'Valary Karpov',salary:6000,location:'Picachos'}
        ]
    }
})*/