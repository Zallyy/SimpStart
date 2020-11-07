<template>
    <div class="category">
        <i class="fas fa-folder"></i>
        <div class="category-folder">
            <p class="category-title">{{category.title}}</p>
            <div class="links" v-for="link in category.links" :key="link.name">
                <div class="link">
                    <a :href="link.url">{{link.name}}</a>
                </div>
            </div>
            <div class="link folder" v-for="folder in category.folders" :key="folder.title">
                <i class="fas fa-folder"></i>
                <div>
                    <p>{{folder.title}}</p>
                    <div class="links" v-for="link in folder.links" :key="link.name">
                        <div class="link">
                            <a :href="link.url">{{link.name}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['category'],
    methods: {
    
    }
}
</script>
