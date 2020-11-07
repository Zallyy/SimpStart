<template>
    <div class="link folder" @mouseover="hovering = true" @mouseout="hovering = false">
        <i class="fas fa-folder" v-show="!hovering"></i>
        <i class="fas fa-folder-open" v-show="hovering"></i>        
        <div>
            <p>{{folder.title}}</p>
            <div v-show="hovering" class="links">
                <div class="link" v-for="link in folder.links" :key="link.name">
                    <a :href="link.url">{{link.name}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['folder'],
    data() {
        return {
            hovering: false            
        }
    }
}
</script>
