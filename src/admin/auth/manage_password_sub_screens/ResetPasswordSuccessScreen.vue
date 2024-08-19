


<script setup>
    /* eslint-disable */
    import InputTextContainer from '@/components/InputTextContainer.vue';
    import SolidButton from '@/components/SolidButton.vue';
    // import BorderedButton from '@/components/BorderedButton.vue';

</script>


<template>
<div class="reset-password-template-container">
<div class="rem-logo-container">
  <img src="../../../assets/success_illustration.svg" alt="">
</div>

<div class="title-description-container">
    <p class="title-header">You successfully changed your password</p>
    <p class="regular-blue-text">Always remember the password for your account at Lumibiz!</p>
</div>


<div class="buttons">
    <SolidButton buttonTitle="Back to Login" @button-tapped="$emit('button-tapped')" :enableButton="true"/>
</div>
</div>  

</template>


<style scoped>


</style>