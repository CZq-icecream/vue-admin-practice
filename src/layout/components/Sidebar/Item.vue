<template>
  
</template>

<script>
export default {
    name: 'MenuItem',
    functional: true,
    props: {
        icon: {
            type: String,
            default: '',
            required: false
        },
        title: {
            type: String,
            required: true
        }
    },
    render(h, context){
        const {icon, title} = context.props
        const vnodes = []
        if (icon != undefined){
            vnodes.push(<i class={icon}/>)
        }
        if (title){
            vnodes.push(<span slot="title">{(title)}</span>)
        }
        return vnodes;
    }
}
</script>

<style>

</style>