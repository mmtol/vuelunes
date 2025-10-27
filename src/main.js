import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App)
app.config.globalProperties.$filters={
    parimpar(num)
    {
        var esPar = false;
        if(num % 2 == 0)
        {
            esPar = true;
        }
        else
        {
            esPar = false;
        }
        return esPar;
    },
    getResultado(num, mult)
    {
        return num * mult;
    },
    getOperacion(num,mult)
    {
        return num + " * " + mult;
    }
}

app.use(router).mount('#app')

