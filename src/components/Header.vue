<template>
    <header>
        <div class="categories" v-for="category in categories.category" :key='category.title'>
            <category-component :category="category"></category-component>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            categories: {
                category: [
                    {
                        title: 'Anime',
                        links: [
                            {
                                name: 'MyAnimeList',
                                url: 'https://myanimelist.net/' 
                            },
                            {
                                name: 'AniChart',
                                url: 'https://anichart.net/'
                            }
                        ],
                        folders: [
                            {
                                title: 'Streaming',
                                links: [
                                    {
                                        name: 'AnimePahe',
                                        url: 'https://animepahe.org/'
                                    },
                                    {
                                        name: 'CrunchyRoll',
                                        url: 'https://www.crunchyroll.com/'
                                    }
                                ]
                            },
                            {
                                title: 'Images',
                                links: [
                                    {
                                        name: 'Pixiv',
                                        url: 'https://www.pixiv.net/en/'
                                    },
                                    {
                                        name: 'KonaChan',
                                        url: 'https://konachan.net/post'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>