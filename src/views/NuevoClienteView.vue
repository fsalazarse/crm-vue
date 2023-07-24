<script setup>
    import ClienteServices from '../services/ClienteServices'
    import {FormKit} from '@formkit/vue' 
    import {useRouter} from 'vue-router'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/Heading.vue'

    const router = useRouter()

    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSubmit = (data) => {
        data.estado = 1
        ClienteServices.agregarCliente(data)
            .then(respuesta => {
                console.log(respuesta);
                //Redireccionar
                router.push({name:'listo-clientes'})
            })
            .catch(error => console.log(error))
    }

</script>
<template>
    <div  class="flex justify-end">
        <RouterLink to="listo-clientes"> 
            Volver
        </RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6">
            
            <FormKit
                type="form"
                submit-label="Agregar Cliente"
                incomplete-message = "No se pudo enviar, revisa los mensajes"
                @submit="handleSubmit"

                >
                <FormKit 
                    type="text" 
                    label="nombre"
                    placeholder=" Nombre de cliente"
                    name="nombre"
                    validation="required"
                    :validation-messages="{required: 'El nombre del cliente el obligatorio'}"
                />

                <FormKit 
                    type="text" 
                    label="Apellido"
                    name="apellido"
                    placeholder=" Apellido de cliente"
                    validation="required"
                    :validation-messages="{required: 'El Apellido del cliente el obligatorio'}"
                />

                <FormKit 
                    type="email" 
                    label="Email"
                    name="email"
                    placeholder=" Email de cliente"
                    validation="required|email"
                    :validation-messages="{required: 'El Email del cliente el obligatorio', email: 'Coloca un email valido'}"
                />

                <FormKit 
                    type="text" 
                    label="Telefono"
                    name="telefono"
                    placeholder=" Telefono: xxx-xxx-xxx"
                    validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{matches: 'El formato no es valido'}"
                />

                <FormKit 
                    type="text" 
                    label="Puesto"
                    name="puesto"
                    placeholder="Empresa de Cliente"
                />
            </FormKit>
        </div>
    </div>
</template>

<style>
.formkit-wrapper {
    max-width: 100%;
}

</style>