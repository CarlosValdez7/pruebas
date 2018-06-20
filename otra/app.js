new Vue({
    'el':'#app',
    data:{
        contador1:0,
        contador2:0
    },
    computed:{
        comContUno(){
            console.log('dobleContUno');
            return this.contador1*2;
        },
        comContDos(){
            console.log('dobleContDos');
            return this.contador2*2;
        }
    },
    watch:{
        contador1:function(valor){
            if (valor == 7){
                alert('contador ='+ this.contador1+'valor ='+valor)
            }
        }
    },
    methods:{
        incContadorUno(){
            this.contador1++;
        },
        incContadorDos(){
            this.contador2++;
        },
        dobleContUno(){
            console.log('dobleContUno');
            return this.contador1*2;
        },
        dobleContDos(){
            console.log('dobleContDos');
            return this.contador2*2;
        }
    }
})
