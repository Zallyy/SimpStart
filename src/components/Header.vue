<template>
    <header>
        <div class="categories">
            <category-component :category="category" v-for="category in categories.category" :key='category.title'></category-component>
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
                    },
                    {
                        title: "Programming",
                        links: [
                            {
                                name: 'Github',
                                url: 'https://github.com/' 
                            },
                            {
                                name: 'MDN Web Docs',
                                url: 'https://developer.mozilla.org/en-US/'
                            }
                        ],
                    },
                    {
                        title: "Social",
                        links: [
                            {
                                name: 'YouTube',
                                url: 'https://youtube.com/' 
                            },
                            {
                                name: 'Twitter',
                                url: 'https://twitter.com'
                            },
                            {
                                name: 'Reddit',
                                url: 'https://reddit.com'
                            },
                            {
                                name: 'Gmail',
                                url: 'https://gmail.com'
                            }
                        ],
                    }
                ]
            }
        }
    }
}
</script>
