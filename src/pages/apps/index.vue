<template>
    <div>
        <types></types>
        <contenue></contenue>
        
  


    </div>
</template>

<script>
import types from '@/components/types'
import categorie from '@/components/categorie'
import contenue from '@/components/contenue'
export default {

    layout:'barApps',
    components:{categorie,contenue,types},
    mounted(){

          
    }
}
</script>