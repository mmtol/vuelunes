<template>
    <div>
        <h1>Tabla de multiplicar</h1>
        <h2>Primera forma</h2>
        <div>
            <label>Introduzca el número</label>
            <input type="number" v-model="numero"/>
            <button @click="multiplicar">Generar tabla</button>
            <table>
                <thead>
                    <tr>
                        <th>OPERACIÓN</th>
                        <th>RESULTADO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="resultado in resultados" :key="resultado">
                        <td>
                            {{numero}} * {{  }} = 
                        </td>
                        <td>{{ resultado }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2>Segunda forma</h2>
        <div>
            <label>Introduzca el número</label>
            <input type="number" v-model="numero"/>
            <table>
                <thead>
                    <tr>
                        <th>OPERACIÓN</th>
                        <th>RESULTADO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contador in 10" :key="contador">
                        <td>
                            {{numero}} * {{ contador }} = 
                        </td>
                        <td>{{ numero * contador }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2>Tercera forma</h2>
        <div>
            <label>Introduzca el número</label>
            <input type="number" v-model="numero"/>
            <table>
                <thead>
                    <tr>
                        <th>OPERACIÓN</th>
                        <th>RESULTADO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contador in 10" :key="contador">
                        <td>{{ $filters.getOperacion(numero, contador) }}</td>
                        <td>{{ $filters.getResultado(numero, contador) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default 
{
    name:"TablaMultiplicar",
    data()
    {
        return{
            numero:0,
            resultados:[]
        }
    },
    methods:
    {
        multiplicar()
        {
            for (var i = 1; i <= 10; ++i)
            {
                this.resultados.push(this.numero * i);
            }
        }
    }
}
</script>

<style>

</style>