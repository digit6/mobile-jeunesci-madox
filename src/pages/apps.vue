<template>
    <div>
<router-view></router-view>

    </div>
</template>


<script>
import store from '../store'
export default {
    beforeRouteEnter (to, from, next) {
        // ...

        if(store.state.session){
            next()
        } else {
            next(from)
        }
    }
    
}
</script>