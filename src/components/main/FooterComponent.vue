<template>
    <v-footer
        color="#212135"
        class="footer-style"
        style="padding-top: 30px;padding-bottom: 30px;"
    >
        <v-container>
            <v-row>
                <v-col
                    class="lg5-custom"
                >
                    <v-list style="background-color: #212135;">
                        <v-list-item style="padding: 0;">
                            <v-list-item-content 
                                style="width: 100%; margin: 0;padding: 0;"
                            >
                                <v-list-item-title 
                                    tag="span" 
                                    class="title"
                                >
                                    {{ $t('message.maglumat') }}
                                </v-list-item-title>
                                <v-list-item-title
                                    v-for="item in maglumat"
                                    :key="item"
                                    class="subtitle"
                                >
                                    {{ item.subtitle }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>


                <!-- bildirish -->
                <v-col
                    class="lg5-custom"
                >
                    <v-list style="background-color: #212135;">
                        <v-list-item style="padding: 0;">
                            <v-list-item-content 
                                style="width: 100%; margin: 0;padding: 0;"
                            >
                                <v-list-item-title 
                                    tag="span" 
                                    class="title"
                                >
                                    {{ $t('toolbar.bildirish') }}
                                </v-list-item-title>
                                <v-card color="#212135" elevation="0" :height="exhibitionHeight">
                                <v-list-item-title
                                    v-for="item in bildirisler"
                                    :key="item"
                                    class="subtitle"
                                >
                                    <router-link 
                                        :to="{name: 'publications', query: { category: item.id }}" 
                                        style="text-decoration: none;color: #FFFFFF;"
                                    >
                                        {{ item.name }}
                                    </router-link>
                                </v-list-item-title>
                                </v-card>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <div class="show-hide mt-n3" @click="showHide(1)">{{ exhibitionCatModel == "Show..." ? $t('footer.show') : $t('footer.hide') }}</div>
                </v-col>
                
                
                <!-- bazar -->
                <v-col
                    class="lg5-custom"
                >
                    <v-list style="background-color: #212135;">
                        <v-list-item style="padding: 0;" >
                            <v-list-item-content 
                                style="width: 100%; margin: 0;padding: 0;"
                            >
                                <v-list-item-title 
                                    tag="span" 
                                    class="title"
                                >
                                {{ $t('message.bazarKategoriya') }}
                                </v-list-item-title>
                                <v-card color="#212135" elevation="0" :height="mallHeight">
                                    <v-list-item-title
                                        v-for="i in bazar"
                                        :key="i"
                                        class="subtitle"
                                    >
                                    <router-link 
                                        :to="{name: 'mall-stores', query: { category: i.id }}" 
                                        style="text-decoration: none;color: #FFFFFF;"
                                    >
                                        {{ i.name }}
                                    </router-link>
                                    </v-list-item-title>
                                </v-card>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <div class="show-hide mt-n3" @click="showHide(2)">{{ mallCatModel == "Show..." ? $t('footer.show') : $t('footer.hide') }}</div>
                </v-col>

                <v-col
                    class="lg5-custom"
                >
                    <v-list style="background-color: #212135;">
                        <v-list-item style="padding: 0;">
                            <v-list-item-content 
                                style="width: 100%; margin: 0;padding: 0;"
                            >
                                <v-list-item-title 
                                    tag="span" 
                                    class="title"
                                >
                                    {{ $t('toolbar.habar') }}
                                </v-list-item-title>
                                <v-list-item-title
                                    v-for="item in tazelikler"
                                    :key="item"
                                    class="subtitle"
                                >
                                    {{ item.subtitle }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>

                <v-col
                    class="lg5-custom"
                >
                    <v-list style="background-color: #212135;">
                        <v-list-item style="padding: 0;">
                            <v-list-item-content 
                                style="width: 100%; margin: 0;padding: 0;"
                            >
                                <v-list-item-title 
                                    tag="span" 
                                    class="title"
                                >
                                    {{ $t('message.habarlashmak') }}
                                </v-list-item-title>
                                <v-list-item-title
                                    v-for="item in habarlasmak"
                                    :key="item"
                                    class="subtitle"
                                >
                                    {{ item.subtitle }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        mallCatModel: 'Show...',
        mallHeight: "200",
        exhibitionCatModel: 'Show...',
        exhibitionHeight: "200",
        maglumat: [
            { subtitle: 'Biz Barada' },
            { subtitle: 'Ulanyjy ylalaşygy' },
            { subtitle: 'Çap etme tertibi' },
            { subtitle: 'Sorag - jogap' },
            { subtitle: 'Mahabat barada' },
            { subtitle: 'Android programma' },
            { subtitle: 'IOS programma' }
        ],
        bildirisler: [],
        bazar: [],
        tazelikler: [
            { subtitle: 'Media' },
            { subtitle: 'Habarlar' },
            { subtitle: 'Biznes sahypalar' },
        ],
        habarlasmak: [
            { subtitle: 'tpl@mail.com' },
            { subtitle: '+99365555555' },
            { subtitle: '09:00 - 22:00' },
            { subtitle: 'ул. Андалиба, 70, Ашхабад' }
        ],
    }),
    created() {
        this.getPublicationCategories(),
        this.getMallCategories()
    },
    methods: {
        async getPublicationCategories () {
            try {
                const response = await axios.get('/publications/categories/')
                this.bildirisler = response.data
            }catch(e) {
                console.log(e)
            }
        },
        async getMallCategories() {
            try {
                const response = await axios.get('/mall/categories/')
                this.bazar = response.data
            } catch(e) {
                console.log(e)
            }  
        },
        showHide(id) {
            if (id == 1) {
                if (this.exhibitionCatModel == 'Show...') {
                    this.exhibitionHeight = '100%'
                    this.exhibitionCatModel = 'Hide'
                }else{
                    this.exhibitionHeight = "200"
                    this.exhibitionCatModel = 'Show...'
                }
            }
            if (id == 2) {
                if (this.mallCatModel == 'Show...') {
                    this.mallHeight = '100%'
                    this.mallCatModel = 'Hide'
                }else{
                    this.mallHeight = "200"
                    this.mallCatModel = 'Show...'
                }
            }
        } 
    }
}
</script>

<style>
.title {
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    color: #F2F2F2;
    cursor: pointer;
}

.subtitle {
    font-size: 16px;
    font-weight: 300;
    color: #E0E0E0;
    margin: 5px 0;
    line-height: 16px;
    cursor: pointer;
}
.footer-style {
    height: 302;
}
@media (min-width: 1264px) and (max-width: 1903px) {
    .col.lg5-custom {
        width: 20%;
        max-width: 20%;
        flex-basis: 20%;
    }
    .footer-style {
        height: 100%;
    }
}

.show-hide {
    color: #409DBA;
    cursor: pointer;
    font-style: italic;
}
</style>