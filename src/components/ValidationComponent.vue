


<script setup> 
    /* eslint-disable */
        const props = defineProps({
            imageString: String,
            title: String,
            isPositive: Boolean
        });

</script>


 <template>
    <div class="main-validator-container">
        <!-- <div class="icon-container"><img src="../assets/tick-circle.svg" alt="" v-if="isPositive"><img src="../assets/close_circle.svg" alt="" v-else></div> -->
        <div :class="{'positive-attr': isPositive, 'negative-attr': !isPositive}" >{{ title }}</div>
    </div>
 </template>


<style scoped>
    .main-validator-container{
        display: flex;
        gap: 3px;
        align-items: center;
        width: 100%;
    }

    .positive-attr{
        color: green;
    }

    .negative-attr{
        color: red;
    }

    div{
        font-size: 14px;
     
    }
</style>