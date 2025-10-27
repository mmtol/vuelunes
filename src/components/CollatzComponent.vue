<template>
    <div>
        <h1>Collatz</h1>
        <label>Introduce un número</label>
        <br/>
        <input type="number" v-model="numero"/>
        <br/>
        <button @click="crearCollatz">Sacar Collatz</button>
        <h2 v-if="$filters.parimpar(numero)">PAR</h2>
        <h2 v-else>IMPAR</h2>
        <h2>{{ collatz }}</h2>
    </div>
</template>

<script>
export default 
{
    name:"CollatzComponent",
    data()
    {
        return{
            numero:0,
            collatz:[]
        }
    },
    methods:
    {
        crearCollatz()
        {
            this.collatz = [];
            this.collatz.push(parseInt(this.numero));
            while (this.numero != 1)
            {
                if (this.numero % 2 == 0)
                {
                    this.numero = this.numero / 2;
                }
                else
                {
                    this.numero = (this.numero * 3) + 1;
                }
                this.collatz.push(this.numero);
            }
        }
    }
}
</script>

<style>

</style>