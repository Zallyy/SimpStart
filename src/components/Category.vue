<template>
    <div class="category" @click="hovering = !hovering">
        <i class="fas fa-folder" v-show="!hovering"></i>
        <i class="fas fa-folder-open" v-show="hovering"></i>

        <div class="category-folder">
            <p :style='hovering ? "text-decoration: underline" : "text-decoration: none"' class="category-title">{{category.title}}</p>

            <div v-show="hovering" class="items">
                <div class="links">
                    <div class="link" v-for="link in category.links" :key="link.name">
                        <a :href="link.url">{{link.name}}</a>
                    </div>
                </div>

                <div class="folders">
                    <folder-component :folder="folder" v-for="folder in category.folders" :key="folder.title"></folder-component>
                </div>    
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    props: ['category'],
    data() {
        return {
            hovering: false            
        }
    }
}
</script>

