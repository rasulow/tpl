
import VueI18n from 'vue-i18n'
const messages = {
    tk: {
      code: 'tk',
        message: {
          language: 'tk',
          hello: 'Turkmen',
          sergiDukan: 'Sergi',
          tazelik: 'Täzelikler',
          dukanlar: 'Dükanlar',
          maglumat: 'Maglumat',
          bazarKategoriya: 'Bazar',
          tazelikHabar: 'Täzelikler & Habarlar',
          habarlashmak: 'Habarlaşmak'
        },
        toolbar: {
          bildirish: 'Bildirişler',
          bazar: 'Bazar',
          habar: 'Habarlar & Media',
        },
        appBar: {
          bolum: 'Bölümler',
          halanlarym: 'Halanlarym',
          bildirishlerim: 'Meniň bildirişlerim',
        },
        appBarMall: {
          product: 'Harytlar',
          dukan: 'Dükanlar',
          brand: 'Brendler',
          kategoriya: 'Bölümler',
          halanlarym: 'Halanlarym',
          sebet: 'Sebet'
        },
        appBarMedia: {
          media: 'Media',
          habarlar: 'Habarlar',
          halanlarym: 'Halanlarym',
          biznes: 'Biznes sahypalar',
        },
        search: {
          product: 'Haryt gözle',
          store: 'Dükan gözle',
          brand: 'Brend gözle',
          media: 'Media gözle',
          news: 'Habar gözle'
        },
        footer: {
          show: 'Doly görkez',
          hide: 'Gizle'
        }
      },
      
    ru: {
      code: 'ru',
        message: {
          language: 'RU',
          hello: 'Russian',
          sergiDukan: 'Выставочные магазины',
          tazelik: 'Новости',
          dukanlar: 'Магазины',
          maglumat: 'Информации',
          bazarKategoriya: 'Рынок',
          tazelikHabar: 'Новости & Уведомлении',
          habarlashmak: 'Связатся'
          
        },
        toolbar: {
          bildirish: 'Объявления',
          bazar: 'Рынок',
          habar: 'Новости & Медия',
        },
        appBar: {
          bolum: 'Разделы',
          halanlarym: 'Избранные',
          bildirishlerim: 'Мои объявлении',
        },
        appBarMall: {
          product: 'Продукты',
          dukan: 'Магазины',
          brand: 'Бренды',
          kategoriya: 'Категории',
          halanlarym: 'Избранные',
          sebet: 'Корзина'
        },
        appBarMedia: {
          media: 'Медиа',
          habarlar: 'Новости',
          halanlarym: 'Избранные',
          biznes: 'Бизнес страницы',
        },
        search: {
          product: 'Поиск товар',
          store: 'Поиск магазин',
          brand: 'Поиск брендов',
          media: 'Поиск медия',
          news: 'Поиск новостей'
        },
        footer: {
          show: 'Показать полностью',
          hide: 'Скрывать'
        }
      },      
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'tk', // set locale
  messages, // set locale messages
})
export default i18n