<template>
    <div>
        <h1>Collatz</h1>
        <label>Introduce un número</label>
        <br/>
        <input type="number" v-model="numero"/>
        <br/>
        <button @click="crearCollatz">Sacar Collatz</button>
        <div v-for="num in collatz" :key="num">
            <h4 v-if="$filters.parimpar(num)" style="color: green;">{{num}}</h4>
            <h4 v-else style="color: red;">{{num}}</h4>
        </div>
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