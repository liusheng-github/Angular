import { Component } from '@angular/core';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.scss']
})
export class LineaComponent {
  temp = [];
  collection = [];

  constructor() {
    const linea = [
      {
        name: 'arrows',
        icons: [
          'icon-arrows-anticlockwise',
          'icon-arrows-anticlockwise-dashed',
          'icon-arrows-button-down',
          'icon-arrows-button-off',
          'icon-arrows-button-on',
          'icon-arrows-button-up',
          'icon-arrows-check',
          'icon-arrows-circle-check',
          'icon-arrows-circle-down',
          'icon-arrows-circle-downleft',
          'icon-arrows-circle-downright',
          'icon-arrows-circle-left',
          'icon-arrows-circle-minus',
          'icon-arrows-circle-plus',
          'icon-arrows-circle-remove',
          'icon-arrows-circle-right',
          'icon-arrows-circle-up',
          'icon-arrows-circle-upleft',
          'icon-arrows-circle-upright',
          'icon-arrows-clockwise',
          'icon-arrows-clockwise-dashed',
          'icon-arrows-compress',
          'icon-arrows-deny',
          'icon-arrows-diagonal',
          'icon-arrows-diagonal2',
          'icon-arrows-down',
          'icon-arrows-down-double',
          'icon-arrows-downleft',
          'icon-arrows-downright',
          'icon-arrows-drag-down',
          'icon-arrows-drag-down-dashed',
          'icon-arrows-drag-horiz',
          'icon-arrows-drag-left',
          'icon-arrows-drag-left-dashed',
          'icon-arrows-drag-right',
          'icon-arrows-drag-right-dashed',
          'icon-arrows-drag-up',
          'icon-arrows-drag-up-dashed',
          'icon-arrows-drag-vert',
          'icon-arrows-exclamation',
          'icon-arrows-expand',
          'icon-arrows-expand-diagonal1',
          'icon-arrows-expand-horizontal1',
          'icon-arrows-expand-vertical1',
          'icon-arrows-fit-horizontal',
          'icon-arrows-fit-vertical',
          'icon-arrows-glide',
          'icon-arrows-glide-horizontal',
          'icon-arrows-glide-vertical',
          'icon-arrows-hamburger1',
          'icon-arrows-hamburger-2',
          'icon-arrows-horizontal',
          'icon-arrows-info',
          'icon-arrows-keyboard-alt',
          'icon-arrows-keyboard-cmd',
          'icon-arrows-keyboard-delete',
          'icon-arrows-keyboard-down',
          'icon-arrows-keyboard-left',
          'icon-arrows-keyboard-return',
          'icon-arrows-keyboard-right',
          'icon-arrows-keyboard-shift',
          'icon-arrows-keyboard-tab',
          'icon-arrows-keyboard-up',
          'icon-arrows-left',
          'icon-arrows-left-double-32',
          'icon-arrows-minus',
          'icon-arrows-move',
          'icon-arrows-move2',
          'icon-arrows-move-bottom',
          'icon-arrows-move-left',
          'icon-arrows-move-right',
          'icon-arrows-move-top',
          'icon-arrows-plus',
          'icon-arrows-question',
          'icon-arrows-remove',
          'icon-arrows-right',
          'icon-arrows-right-double',
          'icon-arrows-rotate',
          'icon-arrows-rotate-anti',
          'icon-arrows-rotate-anti-dashed',
          'icon-arrows-rotate-dashed',
          'icon-arrows-shrink',
          'icon-arrows-shrink-diagonal1',
          'icon-arrows-shrink-diagonal2',
          'icon-arrows-shrink-horizonal2',
          'icon-arrows-shrink-horizontal1',
          'icon-arrows-shrink-vertical1',
          'icon-arrows-shrink-vertical2',
          'icon-arrows-sign-down',
          'icon-arrows-sign-left',
          'icon-arrows-sign-right',
          'icon-arrows-sign-up',
          'icon-arrows-slide-down1',
          'icon-arrows-slide-down2',
          'icon-arrows-slide-left1',
          'icon-arrows-slide-left2',
          'icon-arrows-slide-right1',
          'icon-arrows-slide-right2',
          'icon-arrows-slide-up1',
          'icon-arrows-slide-up2',
          'icon-arrows-slim-down',
          'icon-arrows-slim-down-dashed',
          'icon-arrows-slim-left',
          'icon-arrows-slim-left-dashed',
          'icon-arrows-slim-right',
          'icon-arrows-slim-right-dashed',
          'icon-arrows-slim-up',
          'icon-arrows-slim-up-dashed',
          'icon-arrows-square-check',
          'icon-arrows-square-down',
          'icon-arrows-square-downleft',
          'icon-arrows-square-downright',
          'icon-arrows-square-left',
          'icon-arrows-square-minus',
          'icon-arrows-square-plus',
          'icon-arrows-square-remove',
          'icon-arrows-square-right',
          'icon-arrows-square-up',
          'icon-arrows-square-upleft',
          'icon-arrows-square-upright',
          'icon-arrows-squares',
          'icon-arrows-stretch-diagonal1',
          'icon-arrows-stretch-diagonal2',
          'icon-arrows-stretch-diagonal3',
          'icon-arrows-stretch-diagonal4',
          'icon-arrows-stretch-horizontal1',
          'icon-arrows-stretch-horizontal2',
          'icon-arrows-stretch-vertical1',
          'icon-arrows-stretch-vertical2',
          'icon-arrows-switch-horizontal',
          'icon-arrows-switch-vertical',
          'icon-arrows-up',
          'icon-arrows-up-double-33',
          'icon-arrows-upleft',
          'icon-arrows-upright',
          'icon-arrows-vertical'
        ]
      },
      {
        name: 'basic',
        icons: [
          'icon-basic-accelerator',
          'icon-basic-alarm',
          'icon-basic-anchor',
          'icon-basic-anticlockwise',
          'icon-basic-archive',
          'icon-basic-archive-full',
          'icon-basic-ban',
          'icon-basic-battery-charge',
          'icon-basic-battery-empty',
          'icon-basic-battery-full',
          'icon-basic-battery-half',
          'icon-basic-bolt',
          'icon-basic-book',
          'icon-basic-book-pen',
          'icon-basic-book-pencil',
          'icon-basic-bookmark',
          'icon-basic-calculator',
          'icon-basic-calendar',
          'icon-basic-cards-diamonds',
          'icon-basic-cards-hearts',
          'icon-basic-case',
          'icon-basic-chronometer',
          'icon-basic-clessidre',
          'icon-basic-clock',
          'icon-basic-clockwise',
          'icon-basic-cloud',
          'icon-basic-clubs',
          'icon-basic-compass',
          'icon-basic-cup',
          'icon-basic-diamonds',
          'icon-basic-display',
          'icon-basic-download',
          'icon-basic-exclamation',
          'icon-basic-eye',
          'icon-basic-eye-closed',
          'icon-basic-female',
          'icon-basic-flag1',
          'icon-basic-flag2',
          'icon-basic-floppydisk',
          'icon-basic-folder',
          'icon-basic-folder-multiple',
          'icon-basic-gear',
          'icon-basic-geolocalize-01',
          'icon-basic-geolocalize-05',
          'icon-basic-globe',
          'icon-basic-gunsight',
          'icon-basic-hammer',
          'icon-basic-headset',
          'icon-basic-heart',
          'icon-basic-heart-broken',
          'icon-basic-helm',
          'icon-basic-home',
          'icon-basic-info',
          'icon-basic-ipod',
          'icon-basic-joypad',
          'icon-basic-key',
          'icon-basic-keyboard',
          'icon-basic-laptop',
          'icon-basic-life-buoy',
          'icon-basic-lightbulb',
          'icon-basic-link',
          'icon-basic-lock',
          'icon-basic-lock-open',
          'icon-basic-magic-mouse',
          'icon-basic-magnifier',
          'icon-basic-magnifier-minus',
          'icon-basic-magnifier-plus',
          'icon-basic-mail',
          'icon-basic-mail-multiple',
          'icon-basic-mail-open',
          'icon-basic-mail-open-text',
          'icon-basic-male',
          'icon-basic-map',
          'icon-basic-message',
          'icon-basic-message-multiple',
          'icon-basic-message-txt',
          'icon-basic-mixer2',
          'icon-basic-mouse',
          'icon-basic-notebook',
          'icon-basic-notebook-pen',
          'icon-basic-notebook-pencil',
          'icon-basic-paperplane',
          'icon-basic-pencil-ruler',
          'icon-basic-pencil-ruler-pen',
          'icon-basic-photo',
          'icon-basic-picture',
          'icon-basic-picture-multiple',
          'icon-basic-pin1',
          'icon-basic-pin2',
          'icon-basic-postcard',
          'icon-basic-postcard-multiple',
          'icon-basic-printer',
          'icon-basic-question',
          'icon-basic-rss',
          'icon-basic-server',
          'icon-basic-server2',
          'icon-basic-server-cloud',
          'icon-basic-server-download',
          'icon-basic-server-upload',
          'icon-basic-settings',
          'icon-basic-share',
          'icon-basic-sheet',
          'icon-basic-sheet-multiple',
          'icon-basic-sheet-pen',
          'icon-basic-sheet-pencil',
          'icon-basic-sheet-txt',
          'icon-basic-signs',
          'icon-basic-smartphone',
          'icon-basic-spades',
          'icon-basic-spread',
          'icon-basic-spread-bookmark',
          'icon-basic-spread-text',
          'icon-basic-spread-text-bookmark',
          'icon-basic-star',
          'icon-basic-tablet',
          'icon-basic-target',
          'icon-basic-todo',
          'icon-basic-todo-pen',
          'icon-basic-todo-pencil',
          'icon-basic-todo-txt',
          'icon-basic-todolist-pen',
          'icon-basic-todolist-pencil',
          'icon-basic-trashcan',
          'icon-basic-trashcan-full',
          'icon-basic-trashcan-refresh',
          'icon-basic-trashcan-remove',
          'icon-basic-upload',
          'icon-basic-usb',
          'icon-basic-video',
          'icon-basic-watch',
          'icon-basic-webpage',
          'icon-basic-webpage-img-txt',
          'icon-basic-webpage-multiple',
          'icon-basic-webpage-txt',
          'icon-basic-world'
        ]
      },
      {
        name: 'basic-elaboration',
        icons: [
          'icon-basic-elaboration-bookmark-checck',
          'icon-basic-elaboration-bookmark-minus',
          'icon-basic-elaboration-bookmark-plus',
          'icon-basic-elaboration-bookmark-remove',
          'icon-basic-elaboration-briefcase-check',
          'icon-basic-elaboration-briefcase-download',
          'icon-basic-elaboration-briefcase-flagged',
          'icon-basic-elaboration-briefcase-minus',
          'icon-basic-elaboration-briefcase-plus',
          'icon-basic-elaboration-briefcase-refresh',
          'icon-basic-elaboration-briefcase-remove',
          'icon-basic-elaboration-briefcase-search',
          'icon-basic-elaboration-briefcase-star',
          'icon-basic-elaboration-briefcase-upload',
          'icon-basic-elaboration-browser-check',
          'icon-basic-elaboration-browser-download',
          'icon-basic-elaboration-browser-minus',
          'icon-basic-elaboration-browser-plus',
          'icon-basic-elaboration-browser-refresh',
          'icon-basic-elaboration-browser-remove',
          'icon-basic-elaboration-browser-search',
          'icon-basic-elaboration-browser-star',
          'icon-basic-elaboration-browser-upload',
          'icon-basic-elaboration-calendar-check',
          'icon-basic-elaboration-calendar-cloud',
          'icon-basic-elaboration-calendar-download',
          'icon-basic-elaboration-calendar-empty',
          'icon-basic-elaboration-calendar-flagged',
          'icon-basic-elaboration-calendar-heart',
          'icon-basic-elaboration-calendar-minus',
          'icon-basic-elaboration-calendar-next',
          'icon-basic-elaboration-calendar-noaccess',
          'icon-basic-elaboration-calendar-pencil',
          'icon-basic-elaboration-calendar-plus',
          'icon-basic-elaboration-calendar-previous',
          'icon-basic-elaboration-calendar-refresh',
          'icon-basic-elaboration-calendar-remove',
          'icon-basic-elaboration-calendar-search',
          'icon-basic-elaboration-calendar-star',
          'icon-basic-elaboration-calendar-upload',
          'icon-basic-elaboration-cloud-check',
          'icon-basic-elaboration-cloud-download',
          'icon-basic-elaboration-cloud-minus',
          'icon-basic-elaboration-cloud-noaccess',
          'icon-basic-elaboration-cloud-plus',
          'icon-basic-elaboration-cloud-refresh',
          'icon-basic-elaboration-cloud-remove',
          'icon-basic-elaboration-cloud-search',
          'icon-basic-elaboration-cloud-upload',
          'icon-basic-elaboration-document-check',
          'icon-basic-elaboration-document-cloud',
          'icon-basic-elaboration-document-download',
          'icon-basic-elaboration-document-flagged',
          'icon-basic-elaboration-document-graph',
          'icon-basic-elaboration-document-heart',
          'icon-basic-elaboration-document-minus',
          'icon-basic-elaboration-document-next',
          'icon-basic-elaboration-document-noaccess',
          'icon-basic-elaboration-document-note',
          'icon-basic-elaboration-document-pencil',
          'icon-basic-elaboration-document-picture',
          'icon-basic-elaboration-document-plus',
          'icon-basic-elaboration-document-previous',
          'icon-basic-elaboration-document-refresh',
          'icon-basic-elaboration-document-remove',
          'icon-basic-elaboration-document-search',
          'icon-basic-elaboration-document-star',
          'icon-basic-elaboration-document-upload',
          'icon-basic-elaboration-folder-check',
          'icon-basic-elaboration-folder-cloud',
          'icon-basic-elaboration-folder-document',
          'icon-basic-elaboration-folder-download',
          'icon-basic-elaboration-folder-flagged',
          'icon-basic-elaboration-folder-graph',
          'icon-basic-elaboration-folder-heart',
          'icon-basic-elaboration-folder-minus',
          'icon-basic-elaboration-folder-next',
          'icon-basic-elaboration-folder-noaccess',
          'icon-basic-elaboration-folder-note',
          'icon-basic-elaboration-folder-pencil',
          'icon-basic-elaboration-folder-picture',
          'icon-basic-elaboration-folder-plus',
          'icon-basic-elaboration-folder-previous',
          'icon-basic-elaboration-folder-refresh',
          'icon-basic-elaboration-folder-remove',
          'icon-basic-elaboration-folder-search',
          'icon-basic-elaboration-folder-star',
          'icon-basic-elaboration-folder-upload',
          'icon-basic-elaboration-mail-check',
          'icon-basic-elaboration-mail-cloud',
          'icon-basic-elaboration-mail-document',
          'icon-basic-elaboration-mail-download',
          'icon-basic-elaboration-mail-flagged',
          'icon-basic-elaboration-mail-heart',
          'icon-basic-elaboration-mail-next',
          'icon-basic-elaboration-mail-noaccess',
          'icon-basic-elaboration-mail-note',
          'icon-basic-elaboration-mail-pencil',
          'icon-basic-elaboration-mail-picture',
          'icon-basic-elaboration-mail-previous',
          'icon-basic-elaboration-mail-refresh',
          'icon-basic-elaboration-mail-remove',
          'icon-basic-elaboration-mail-search',
          'icon-basic-elaboration-mail-star',
          'icon-basic-elaboration-mail-upload',
          'icon-basic-elaboration-message-check',
          'icon-basic-elaboration-message-dots',
          'icon-basic-elaboration-message-happy',
          'icon-basic-elaboration-message-heart',
          'icon-basic-elaboration-message-minus',
          'icon-basic-elaboration-message-note',
          'icon-basic-elaboration-message-plus',
          'icon-basic-elaboration-message-refresh',
          'icon-basic-elaboration-message-remove',
          'icon-basic-elaboration-message-sad',
          'icon-basic-elaboration-smartphone-cloud',
          'icon-basic-elaboration-smartphone-heart',
          'icon-basic-elaboration-smartphone-noaccess',
          'icon-basic-elaboration-smartphone-note',
          'icon-basic-elaboration-smartphone-pencil',
          'icon-basic-elaboration-smartphone-picture',
          'icon-basic-elaboration-smartphone-refresh',
          'icon-basic-elaboration-smartphone-search',
          'icon-basic-elaboration-tablet-cloud',
          'icon-basic-elaboration-tablet-heart',
          'icon-basic-elaboration-tablet-noaccess',
          'icon-basic-elaboration-tablet-note',
          'icon-basic-elaboration-tablet-pencil',
          'icon-basic-elaboration-tablet-picture',
          'icon-basic-elaboration-tablet-refresh',
          'icon-basic-elaboration-tablet-search',
          'icon-basic-elaboration-todolist-2',
          'icon-basic-elaboration-todolist-check',
          'icon-basic-elaboration-todolist-cloud',
          'icon-basic-elaboration-todolist-download',
          'icon-basic-elaboration-todolist-flagged',
          'icon-basic-elaboration-todolist-minus',
          'icon-basic-elaboration-todolist-noaccess',
          'icon-basic-elaboration-todolist-pencil',
          'icon-basic-elaboration-todolist-plus',
          'icon-basic-elaboration-todolist-refresh',
          'icon-basic-elaboration-todolist-remove',
          'icon-basic-elaboration-todolist-search',
          'icon-basic-elaboration-todolist-star',
          'icon-basic-elaboration-todolist-upload'
        ]
      },
      {
        name: 'ecommerce',
        icons: [
          'icon-ecommerce-bag',
          'icon-ecommerce-bag-check',
          'icon-ecommerce-bag-cloud',
          'icon-ecommerce-bag-download',
          'icon-ecommerce-bag-minus',
          'icon-ecommerce-bag-plus',
          'icon-ecommerce-bag-refresh',
          'icon-ecommerce-bag-remove',
          'icon-ecommerce-bag-search',
          'icon-ecommerce-bag-upload',
          'icon-ecommerce-banknote',
          'icon-ecommerce-banknotes',
          'icon-ecommerce-basket',
          'icon-ecommerce-basket-check',
          'icon-ecommerce-basket-cloud',
          'icon-ecommerce-basket-download',
          'icon-ecommerce-basket-minus',
          'icon-ecommerce-basket-plus',
          'icon-ecommerce-basket-refresh',
          'icon-ecommerce-basket-remove',
          'icon-ecommerce-basket-search',
          'icon-ecommerce-basket-upload',
          'icon-ecommerce-bath',
          'icon-ecommerce-cart',
          'icon-ecommerce-cart-check',
          'icon-ecommerce-cart-cloud',
          'icon-ecommerce-cart-content',
          'icon-ecommerce-cart-download',
          'icon-ecommerce-cart-minus',
          'icon-ecommerce-cart-plus',
          'icon-ecommerce-cart-refresh',
          'icon-ecommerce-cart-remove',
          'icon-ecommerce-cart-search',
          'icon-ecommerce-cart-upload',
          'icon-ecommerce-cent',
          'icon-ecommerce-colon',
          'icon-ecommerce-creditcard',
          'icon-ecommerce-diamond',
          'icon-ecommerce-dollar',
          'icon-ecommerce-euro',
          'icon-ecommerce-franc',
          'icon-ecommerce-gift',
          'icon-ecommerce-graph1',
          'icon-ecommerce-graph2',
          'icon-ecommerce-graph3',
          'icon-ecommerce-graph-decrease',
          'icon-ecommerce-graph-increase',
          'icon-ecommerce-guarani',
          'icon-ecommerce-kips',
          'icon-ecommerce-lira',
          'icon-ecommerce-megaphone',
          'icon-ecommerce-money',
          'icon-ecommerce-naira',
          'icon-ecommerce-pesos',
          'icon-ecommerce-pound',
          'icon-ecommerce-receipt',
          'icon-ecommerce-receipt-bath',
          'icon-ecommerce-receipt-cent',
          'icon-ecommerce-receipt-dollar',
          'icon-ecommerce-receipt-euro',
          'icon-ecommerce-receipt-franc',
          'icon-ecommerce-receipt-guarani',
          'icon-ecommerce-receipt-kips',
          'icon-ecommerce-receipt-lira',
          'icon-ecommerce-receipt-naira',
          'icon-ecommerce-receipt-pesos',
          'icon-ecommerce-receipt-pound',
          'icon-ecommerce-receipt-rublo',
          'icon-ecommerce-receipt-rupee',
          'icon-ecommerce-receipt-tugrik',
          'icon-ecommerce-receipt-won',
          'icon-ecommerce-receipt-yen',
          'icon-ecommerce-receipt-yen2',
          'icon-ecommerce-recept-colon',
          'icon-ecommerce-rublo',
          'icon-ecommerce-rupee',
          'icon-ecommerce-safe',
          'icon-ecommerce-sale',
          'icon-ecommerce-sales',
          'icon-ecommerce-ticket',
          'icon-ecommerce-tugriks',
          'icon-ecommerce-wallet',
          'icon-ecommerce-won',
          'icon-ecommerce-yen',
          'icon-ecommerce-yen2'
        ]
      },
      {
        name: 'music',
        icons: [
          'icon-music-beginning-button',
          'icon-music-bell',
          'icon-music-cd',
          'icon-music-diapason',
          'icon-music-eject-button',
          'icon-music-end-button',
          'icon-music-fastforward-button',
          'icon-music-headphones',
          'icon-music-ipod',
          'icon-music-loudspeaker',
          'icon-music-microphone',
          'icon-music-microphone-old',
          'icon-music-mixer',
          'icon-music-mute',
          'icon-music-note-multiple',
          'icon-music-note-single',
          'icon-music-pause-button',
          'icon-music-play-button',
          'icon-music-playlist',
          'icon-music-radio-ghettoblaster',
          'icon-music-radio-portable',
          'icon-music-record',
          'icon-music-recordplayer',
          'icon-music-repeat-button',
          'icon-music-rewind-button',
          'icon-music-shuffle-button',
          'icon-music-stop-button',
          'icon-music-tape',
          'icon-music-volume-down',
          'icon-music-volume-up'
        ]
      },
      {
        name: 'software',
        icons: [
          'icon-software-add-vectorpoint',
          'icon-software-box-oval',
          'icon-software-box-polygon',
          'icon-software-box-rectangle',
          'icon-software-box-roundedrectangle',
          'icon-software-character',
          'icon-software-crop',
          'icon-software-eyedropper',
          'icon-software-font-allcaps',
          'icon-software-font-baseline-shift',
          'icon-software-font-horizontal-scale',
          'icon-software-font-kerning',
          'icon-software-font-leading',
          'icon-software-font-size',
          'icon-software-font-smallcapital',
          'icon-software-font-smallcaps',
          'icon-software-font-strikethrough',
          'icon-software-font-tracking',
          'icon-software-font-underline',
          'icon-software-font-vertical-scale',
          'icon-software-horizontal-align-center',
          'icon-software-horizontal-align-left',
          'icon-software-horizontal-align-right',
          'icon-software-horizontal-distribute-center',
          'icon-software-horizontal-distribute-left',
          'icon-software-horizontal-distribute-right',
          'icon-software-indent-firstline',
          'icon-software-indent-left',
          'icon-software-indent-right',
          'icon-software-lasso',
          'icon-software-layers1',
          'icon-software-layers2',
          'icon-software-layout',
          'icon-software-layout-2columns',
          'icon-software-layout-3columns',
          'icon-software-layout-4boxes',
          'icon-software-layout-4columns',
          'icon-software-layout-4lines',
          'icon-software-layout-8boxes',
          'icon-software-layout-header',
          'icon-software-layout-header-2columns',
          'icon-software-layout-header-3columns',
          'icon-software-layout-header-4boxes',
          'icon-software-layout-header-4columns',
          'icon-software-layout-header-complex',
          'icon-software-layout-header-complex2',
          'icon-software-layout-header-complex3',
          'icon-software-layout-header-complex4',
          'icon-software-layout-header-sideleft',
          'icon-software-layout-header-sideright',
          'icon-software-layout-sidebar-left',
          'icon-software-layout-sidebar-right',
          'icon-software-magnete',
          'icon-software-pages',
          'icon-software-paintbrush',
          'icon-software-paintbucket',
          'icon-software-paintroller',
          'icon-software-paragraph',
          'icon-software-paragraph-align-left',
          'icon-software-paragraph-align-right',
          'icon-software-paragraph-center',
          'icon-software-paragraph-justify-all',
          'icon-software-paragraph-justify-center',
          'icon-software-paragraph-justify-left',
          'icon-software-paragraph-justify-right',
          'icon-software-paragraph-space-after',
          'icon-software-paragraph-space-before',
          'icon-software-pathfinder-exclude',
          'icon-software-pathfinder-intersect',
          'icon-software-pathfinder-subtract',
          'icon-software-pathfinder-unite',
          'icon-software-pen',
          'icon-software-pen-add',
          'icon-software-pen-remove',
          'icon-software-pencil',
          'icon-software-polygonallasso',
          'icon-software-reflect-horizontal',
          'icon-software-reflect-vertical',
          'icon-software-remove-vectorpoint',
          'icon-software-scale-expand',
          'icon-software-scale-reduce',
          'icon-software-selection-oval',
          'icon-software-selection-polygon',
          'icon-software-selection-rectangle',
          'icon-software-selection-roundedrectangle',
          'icon-software-shape-oval',
          'icon-software-shape-polygon',
          'icon-software-shape-rectangle',
          'icon-software-shape-roundedrectangle',
          'icon-software-slice',
          'icon-software-transform-bezier',
          'icon-software-vector-box',
          'icon-software-vector-composite',
          'icon-software-vector-line',
          'icon-software-vertical-align-bottom',
          'icon-software-vertical-align-center',
          'icon-software-vertical-align-top',
          'icon-software-vertical-distribute-bottom',
          'icon-software-vertical-distribute-center',
          'icon-software-vertical-distribute-top'
        ]
      },
      {
        name: 'weather',
        icons: [
          'icon-weather-aquarius',
          'icon-weather-aries',
          'icon-weather-cancer',
          'icon-weather-capricorn',
          'icon-weather-cloud',
          'icon-weather-cloud-drop',
          'icon-weather-cloud-lightning',
          'icon-weather-cloud-snowflake',
          'icon-weather-downpour-fullmoon',
          'icon-weather-downpour-halfmoon',
          'icon-weather-downpour-sun',
          'icon-weather-drop',
          'icon-weather-first-quarter',
          'icon-weather-fog',
          'icon-weather-fog-fullmoon',
          'icon-weather-fog-halfmoon',
          'icon-weather-fog-sun',
          'icon-weather-fullmoon',
          'icon-weather-gemini',
          'icon-weather-hail',
          'icon-weather-hail-fullmoon',
          'icon-weather-hail-halfmoon',
          'icon-weather-hail-sun',
          'icon-weather-last-quarter',
          'icon-weather-leo',
          'icon-weather-libra',
          'icon-weather-lightning',
          'icon-weather-mistyrain',
          'icon-weather-mistyrain-fullmoon',
          'icon-weather-mistyrain-halfmoon',
          'icon-weather-mistyrain-sun',
          'icon-weather-moon',
          'icon-weather-moondown-full',
          'icon-weather-moondown-half',
          'icon-weather-moonset-full',
          'icon-weather-moonset-half',
          'icon-weather-move2',
          'icon-weather-newmoon',
          'icon-weather-pisces',
          'icon-weather-rain',
          'icon-weather-rain-fullmoon',
          'icon-weather-rain-halfmoon',
          'icon-weather-rain-sun',
          'icon-weather-sagittarius',
          'icon-weather-scorpio',
          'icon-weather-snow',
          'icon-weather-snow-fullmoon',
          'icon-weather-snow-halfmoon',
          'icon-weather-snow-sun',
          'icon-weather-snowflake',
          'icon-weather-star',
          'icon-weather-storm-11',
          'icon-weather-storm-32',
          'icon-weather-storm-fullmoon',
          'icon-weather-storm-halfmoon',
          'icon-weather-storm-sun',
          'icon-weather-sun',
          'icon-weather-sundown',
          'icon-weather-sunset',
          'icon-weather-taurus',
          'icon-weather-tempest',
          'icon-weather-tempest-fullmoon',
          'icon-weather-tempest-halfmoon',
          'icon-weather-tempest-sun',
          'icon-weather-variable-fullmoon',
          'icon-weather-variable-halfmoon',
          'icon-weather-variable-sun',
          'icon-weather-virgo',
          'icon-weather-waning-cresent',
          'icon-weather-waning-gibbous',
          'icon-weather-waxing-cresent',
          'icon-weather-waxing-gibbous',
          'icon-weather-wind',
          'icon-weather-wind-e',
          'icon-weather-wind-fullmoon',
          'icon-weather-wind-halfmoon',
          'icon-weather-wind-n',
          'icon-weather-wind-ne',
          'icon-weather-wind-nw',
          'icon-weather-wind-s',
          'icon-weather-wind-se',
          'icon-weather-wind-sun',
          'icon-weather-wind-sw',
          'icon-weather-wind-w',
          'icon-weather-windgust'
        ]
      }
    ];
    this.temp = linea;
    this.collection = linea;
  }

  updateFilter(event) {
    const query = event.target.value;
    const updated = [];

    const filtered = this.temp.filter(function(el) {
      el.ico = el.icons.filter(function(elm) {
        return elm.toLowerCase().indexOf(query) !== -1 || !query;
      });

      updated.push({
        name: el.name,
        icons: el.ico
      });
    });

    this.collection = updated;
  }
}