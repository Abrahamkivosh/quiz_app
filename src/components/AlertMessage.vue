<template>
    <div class="alert-message" :class="alertMessageClass(theIcon)">
        <div class="alert-message__icon">
            <i class="fa" :class="theIcon" aria-hidden="true"></i>
        </div>
        <div class="alert-message__text">{{ theText }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
    icon: {
        text: String,
        required: true
    },
    text: {
        text: String,
        required: true
    }
})
let theIcon = ref<String>(props.icon as String)
let theText = ref<String>(props.text as String)
// if icon is fa-times  then parent div  will be red
// if icon is fa-check then parent div will be green
let alertMessageClass = (icon: String) => {
    if (icon === 'fa-times') {
        return 'alert-message--error'
    } else if (icon === 'fa-check') {
        return 'alert-message--success'
    }else {
        return ''
    }
}
// time out for alert message
setTimeout(() => {
    document.querySelector('.alert-message')?.remove()
    // clear the icon and text
    theIcon.value = ''
    theText.value = ''
    // emit event to parent component
    defineEmits(['close'])
}, 3500)
</script>

<style lang="scss">
.alert-message {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);


    &__icon {
        margin-right: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
        
    }

    &__text {
        font-size: 1.2rem;
        font-weight: 500;
        
    }
    &--error {
        background-color: #eb584e;
        color: #fff !important;
    }
    &--success {
        background-color: #4caf50;
        color: #fff !important;
    }
}
</style>