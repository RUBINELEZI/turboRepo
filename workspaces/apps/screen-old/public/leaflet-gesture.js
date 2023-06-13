!(function (a, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define('leafletGestureHandling', ['exports'], t)
    : t((a.leafletGestureHandling = {}))
})(this, function (a) {
  'use strict'
  var o = {
    ar: {
      touch: 'Ø§Ø³ØªØ®Ø¯Ù… Ø¥ØµØ¨Ø¹ÙŠÙ† Ù„ØªØ­Ø±ÙŠÙƒ Ø§Ù„Ø®Ø±ÙŠØ·Ø©',
      scroll:
        'â€Ø§Ø³ØªØ®Ø¯Ù… ctrl + scroll Ù„ØªØµØºÙŠØ±/ØªÙƒØ¨ÙŠØ± Ø§Ù„Ø®Ø±ÙŠØ·Ø©',
      scrollMac:
        'ÙŠÙ…ÙƒÙ†Ùƒ Ø§Ø³ØªØ®Ø¯Ø§Ù… âŒ˜ + Ø§Ù„ØªÙ…Ø±ÙŠØ± Ù„ØªÙƒØ¨ÙŠØ±/ØªØµØºÙŠØ± Ø§Ù„Ø®Ø±ÙŠØ·Ø©',
    },
    bg: {
      touch:
        'Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¹Ñ‚Ðµ Ð´Ð²Ð° Ð¿Ñ€ÑŠÑÑ‚Ð°, Ð·Ð° Ð´Ð° Ð¿Ñ€ÐµÐ¼ÐµÑÑ‚Ð¸Ñ‚Ðµ ÐºÐ°Ñ€Ñ‚Ð°Ñ‚Ð°',
      scroll:
        'Ð—Ð°Ð´Ñ€ÑŠÐ¶Ñ‚Ðµ Ð±ÑƒÑ‚Ð¾Ð½Ð° Ctrl Ð½Ð°Ñ‚Ð¸ÑÐ½Ð°Ñ‚, Ð´Ð¾ÐºÐ°Ñ‚Ð¾ Ð¿Ñ€ÐµÐ²ÑŠÑ€Ñ‚Ð°Ñ‚Ðµ, Ð·Ð° Ð´Ð° Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸Ñ‚Ðµ Ð¼Ð°Ñ‰Ð°Ð±Ð° Ð½Ð° ÐºÐ°Ñ€Ñ‚Ð°Ñ‚Ð°',
      scrollMac:
        'Ð—Ð°Ð´Ñ€ÑŠÐ¶Ñ‚Ðµ Ð±ÑƒÑ‚Ð¾Ð½Ð° âŒ˜ Ð½Ð°Ñ‚Ð¸ÑÐ½Ð°Ñ‚, Ð´Ð¾ÐºÐ°Ñ‚Ð¾ Ð¿Ñ€ÐµÐ²ÑŠÑ€Ñ‚Ð°Ñ‚Ðµ, Ð·Ð° Ð´Ð° Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸Ñ‚Ðµ Ð¼Ð°Ñ‰Ð°Ð±Ð° Ð½Ð° ÐºÐ°Ñ€Ñ‚Ð°Ñ‚Ð°',
    },
    bn: {
      touch:
        'à¦®à¦¾à¦¨à¦šà¦¿à¦¤à§à¦°à¦Ÿà¦¿à¦•à§‡ à¦¸à¦°à¦¾à¦¤à§‡ à¦¦à§à¦Ÿà¦¿ à¦†à¦™à§à¦—à§à¦² à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨',
      scroll:
        'à¦®à§à¦¯à¦¾à¦ª à¦œà§à¦® à¦•à¦°à¦¤à§‡ ctrl + scroll à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨',
      scrollMac:
        'à¦®à§à¦¯à¦¾à¦ªà§‡ à¦œà§à¦® à¦•à¦°à¦¤à§‡ âŒ˜ à¦¬à§‹à¦¤à¦¾à¦® à¦Ÿà¦¿à¦ªà§‡ à¦¸à§à¦•à§à¦°à¦² à¦•à¦°à§à¦¨',
    },
    ca: {
      touch: 'Fes servir dos dits per moure el mapa',
      scroll:
        'Prem la tecla Control mentre et desplaces per apropar i allunyar el mapa',
      scrollMac:
        'Prem la tecla âŒ˜ mentre et desplaces per apropar i allunyar el mapa',
    },
    cs: {
      touch: 'KÂ posunutÃ­ mapy pouÅ¾ijte dva prsty',
      scroll:
        'Velikost zobrazenÃ­ mapy zmÄ›Åˆte podrÅ¾enÃ­m klÃ¡vesy Ctrl aÂ posouvÃ¡nÃ­m koleÄka myÅ¡i',
      scrollMac:
        'Velikost zobrazenÃ­ mapy zmÄ›nÃ­te podrÅ¾enÃ­m klÃ¡vesy âŒ˜ aÂ posunutÃ­m koleÄka myÅ¡i / touchpadu',
    },
    da: {
      touch: 'Brug to fingre til at flytte kortet',
      scroll: 'Brug ctrl + rullefunktionen til at zoome ind og ud pÃ¥ kortet',
      scrollMac: 'Brug âŒ˜ + rullefunktionen til at zoome ind og ud pÃ¥ kortet',
    },
    de: {
      touch: 'Verschieben der Karte mit zwei Fingern',
      scroll: 'Verwende Strg+Scrollen zum Zoomen der Karte',
      scrollMac: 'âŒ˜',
    },
    el: {
      touch:
        'Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÏ„Îµ Î´ÏÎ¿ Î´Î¬Ï‡Ï„Ï…Î»Î± Î³Î¹Î± Î¼ÎµÏ„Î±ÎºÎ¯Î½Î·ÏƒÎ· ÏƒÏ„Î¿Î½ Ï‡Î¬ÏÏ„Î·',
      scroll:
        'Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÏ„Îµ Ï„Î¿ Ï€Î»Î®ÎºÏ„ÏÎ¿ Ctrl ÎºÎ±Î¹ ÎºÏÎ»Î¹ÏƒÎ·, Î³Î¹Î± Î½Î± Î¼ÎµÎ³ÎµÎ¸ÏÎ½ÎµÏ„Îµ Ï„Î¿Î½ Ï‡Î¬ÏÏ„Î·',
      scrollMac:
        'Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÏ„Îµ Ï„Î¿ Ï€Î»Î®ÎºÏ„ÏÎ¿ âŒ˜ + ÎºÏÎ»Î¹ÏƒÎ· Î³Î¹Î± ÎµÏƒÏ„Î¯Î±ÏƒÎ· ÏƒÏ„Î¿Î½ Ï‡Î¬ÏÏ„Î·',
    },
    en: {
      touch: 'Use two fingers to move the map',
      scroll: 'Use ctrl + scroll to zoom the map',
      scrollMac: 'Use âŒ˜ + scroll to zoom the map',
    },
    'en-AU': {
      touch: 'Use two fingers to move the map',
      scroll: 'Use ctrl + scroll to zoom the map',
      scrollMac: 'Use âŒ˜ + scroll to zoom the map',
    },
    'en-GB': {
      touch: 'Use two fingers to move the map',
      scroll: 'Use ctrl + scroll to zoom the map',
      scrollMac: 'Use âŒ˜ + scroll to zoom the map',
    },
    es: {
      touch: 'Para mover el mapa, utiliza dos dedos',
      scroll:
        'MantÃ©n pulsada la tecla Ctrl mientras te desplazas para acercar o alejar el mapa',
      scrollMac:
        'MantÃ©n pulsada la tecla âŒ˜ mientras te desplazas para acercar o alejar el mapa',
    },
    eu: {
      touch: 'Erabili bi hatz mapa mugitzeko',
      scroll: 'Mapan zooma aplikatzeko, sakatu Ktrl eta egin gora edo behera',
      scrollMac:
        'Eduki sakatuta âŒ˜ eta egin gora eta behera mapa handitu eta txikitzeko',
    },
    fa: {
      touch:
        'Ø¨Ø±Ø§ÛŒ Ø­Ø±Ú©Øª Ø¯Ø§Ø¯Ù† Ù†Ù‚Ø´Ù‡ Ø§Ø² Ø¯Ùˆ Ø§Ù†Ú¯Ø´Øª Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.',
      scroll:
        'â€Ø¨Ø±Ø§ÛŒ Ø¨Ø²Ø±Ú¯â€ŒÙ†Ù…Ø§ÛŒÛŒ Ù†Ù‚Ø´Ù‡ Ø§Ø² ctrl + scroll Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯',
      scrollMac:
        'Ø¨Ø±Ø§ÛŒ Ø¨Ø²Ø±Ú¯â€ŒÙ†Ù…Ø§ÛŒÛŒ Ù†Ù‚Ø´Ù‡ØŒ Ø§Ø² âŒ˜ + Ù¾ÛŒÙ…Ø§ÛŒØ´ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.',
    },
    fi: {
      touch: 'SiirrÃ¤ karttaa kahdella sormella.',
      scroll: 'Zoomaa karttaa painamalla Ctrl-painiketta ja vierittÃ¤mÃ¤llÃ¤.',
      scrollMac:
        'Zoomaa karttaa pitÃ¤mÃ¤llÃ¤ painike âŒ˜ painettuna ja vierittÃ¤mÃ¤llÃ¤.',
    },
    fil: {
      touch: 'Gumamit ng dalawang daliri upang iusog ang mapa',
      scroll: 'Gamitin ang ctrl + scroll upang i-zoom ang mapa',
      scrollMac: 'Gamitin ang âŒ˜ + scroll upang i-zoom ang mapa',
    },
    fr: {
      touch: 'Utilisez deuxÂ doigts pour dÃ©placer la carte',
      scroll:
        "Vous pouvez zoomer sur la carte Ã  l'aide de CTRL+Molette de dÃ©filement",
      scrollMac:
        "Vous pouvez zoomer sur la carte Ã  l'aide de âŒ˜+Molette de dÃ©filement",
    },
    gl: {
      touch: 'Utiliza dous dedos para mover o mapa',
      scroll: 'Preme Ctrl mentres te desprazas para ampliar o mapa',
      scrollMac: 'Preme âŒ˜ e desprÃ¡zate para ampliar o mapa',
    },
    gu: {
      touch:
        'àª¨àª•àª¶à«‹ àª–àª¸à«‡àª¡àªµàª¾ àª¬à«‡ àª†àª‚àª—àª³à«€àª“àª¨à«‹ àª‰àªªàª¯à«‹àª— àª•àª°à«‹',
      scroll:
        'àª¨àª•àª¶àª¾àª¨à«‡ àªà«‚àª® àª•àª°àªµàª¾ àª®àª¾àªŸà«‡ ctrl + àª¸à«àª•à«àª°à«‹àª²àª¨à«‹ àª‰àªªàª¯à«‹àª— àª•àª°à«‹',
      scrollMac:
        'àª¨àª•àª¶àª¾àª¨à«‡ àªà«‚àª® àª•àª°àªµàª¾ âŒ˜ + àª¸à«àª•à«àª°à«‹àª²àª¨à«‹ àª‰àªªàª¯à«‹àª— àª•àª°à«‹',
    },
    hi: {
      touch:
        'à¤®à¥ˆà¤ª à¤à¤• à¤œà¤—à¤¹ à¤¸à¥‡ à¤¦à¥‚à¤¸à¤°à¥€ à¤œà¤—à¤¹ à¤²à¥‡ à¤œà¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¦à¥‹ à¤‰à¤‚à¤—à¤²à¤¿à¤¯à¥‹à¤‚ à¤•à¤¾ à¤‡à¤¸à¥à¤¤à¥‡à¤®à¤¾à¤² à¤•à¤°à¥‡à¤‚',
      scroll:
        'à¤®à¥ˆà¤ª à¤•à¥‹ à¤œà¤¼à¥‚à¤® à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ ctrl + à¤¸à¥à¤•à¥à¤°à¥‹à¤² à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚',
      scrollMac:
        'à¤®à¥ˆà¤ª à¤•à¥‹ à¤œà¤¼à¥‚à¤® à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ âŒ˜ + à¤¸à¥à¤•à¥à¤°à¥‹à¤² à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚',
    },
    hr: {
      touch: 'PomiÄite kartu pomoÄ‡u dva prsta',
      scroll: 'Upotrijebite Ctrl i klizaÄ miÅ¡a da biste zumirali kartu',
      scrollMac: 'Upotrijebite gumb âŒ˜ dok se pomiÄete za zumiranje karte',
    },
    hu: {
      touch: 'KÃ©t ujjal mozgassa a tÃ©rkÃ©pet',
      scroll: 'A tÃ©rkÃ©p a ctrl + gÃ¶rgetÃ©s hasznÃ¡latÃ¡val nagyÃ­thatÃ³',
      scrollMac: 'A tÃ©rkÃ©p a âŒ˜ + gÃ¶rgetÃ©s hasznÃ¡latÃ¡val nagyÃ­thatÃ³',
    },
    id: {
      touch: 'Gunakan dua jari untuk menggerakkan peta',
      scroll: 'Gunakan ctrl + scroll untuk memperbesar atau memperkecil peta',
      scrollMac: 'Gunakan âŒ˜ + scroll untuk memperbesar atau memperkecil peta',
    },
    it: {
      touch: 'Utilizza due dita per spostare la mappa',
      scroll: 'Utilizza CTRL + scorrimento per eseguire lo zoom della mappa',
      scrollMac: 'Utilizza âŒ˜ + scorrimento per eseguire lo zoom della mappa',
    },
    iw: {
      touch: '×”×–×– ××ª ×”×ž×¤×” ×‘××ž×¦×¢×•×ª ×©×ª×™ ××¦×‘×¢×•×ª',
      scroll:
        'â€××¤×©×¨ ×œ×©× ×•×ª ××ª ×ž×¨×—×§ ×”×ª×¦×•×’×” ×‘×ž×¤×” ×‘××ž×¦×¢×•×ª ×ž×§×© ctrl ×•×’×œ×™×œ×”',
      scrollMac:
        '××¤×©×¨ ×œ×©× ×•×ª ××ª ×ž×¨×—×§ ×”×ª×¦×•×’×” ×‘×ž×¤×” ×‘××ž×¦×¢×•×ª ×ž×§×© âŒ˜ ×•×’×œ×™×œ×”',
    },
    ja: {
      touch: 'åœ°å›³ã‚’ç§»å‹•ã•ã›ã‚‹ã«ã¯æŒ‡ 2 æœ¬ã§æ“ä½œã—ã¾ã™',
      scroll:
        'åœ°å›³ã‚’ã‚ºãƒ¼ãƒ ã™ã‚‹ã«ã¯ã€Ctrl ã‚­ãƒ¼ã‚’æŠ¼ã—ãªãŒã‚‰ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã—ã¦ãã ã•ã„',
      scrollMac:
        'åœ°å›³ã‚’ã‚ºãƒ¼ãƒ ã™ã‚‹ã«ã¯ã€âŒ˜ ã‚­ãƒ¼ã‚’æŠ¼ã—ãªãŒã‚‰ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã—ã¦ãã ã•ã„',
    },
    kn: {
      touch: 'Use two fingers to move the map',
      scroll: 'Use Ctrl + scroll to zoom the map',
      scrollMac: 'Use âŒ˜ + scroll to zoom the map',
    },
    ko: {
      touch: 'ì§€ë„ë¥¼ ì›€ì§ì´ë ¤ë©´ ë‘ ì†ê°€ë½ì„ ì‚¬ìš©í•˜ì„¸ìš”.',
      scroll:
        'ì§€ë„ë¥¼ í™•ëŒ€/ì¶•ì†Œí•˜ë ¤ë©´ Ctrlì„ ëˆ„ë¥¸ ì±„ ìŠ¤í¬ë¡¤í•˜ì„¸ìš”.',
      scrollMac: 'ì§€ë„ë¥¼ í™•ëŒ€í•˜ë ¤ë©´ âŒ˜ + ìŠ¤í¬ë¡¤ ì‚¬ìš©',
    },
    lt: {
      touch: 'Perkelkite Å¾emÄ—lapÄ¯ dviem pirÅ¡tais',
      scroll:
        'Slinkite nuspaudÄ™ klaviÅ¡Ä… â€žCtrlâ€œ, kad pakeistumÄ—te Å¾emÄ—lapio mastelÄ¯',
      scrollMac:
        'Paspauskite klaviÅ¡Ä… âŒ˜ ir slinkite, kad priartintumÄ—te Å¾emÄ—lapÄ¯',
    },
    lv: {
      touch: 'Lai pÄrvietotu karti, bÄ«diet to ar diviem pirkstiem',
      scroll: 'Kartes tÄlummaiÅ†ai izmantojiet ctrl + ritinÄÅ¡anu',
      scrollMac: 'Lai veiktu kartes tÄlummaiÅ†u, izmantojiet âŒ˜ + ritinÄÅ¡anu',
    },
    ml: {
      touch:
        'à´®à´¾à´ªàµà´ªàµ à´¨àµ€à´•àµà´•à´¾àµ» à´°à´£àµà´Ÿàµ à´µà´¿à´°à´²àµà´•àµ¾ à´‰à´ªà´¯àµ‹à´—à´¿à´•àµà´•àµà´•',
      scroll:
        'à´•àµºà´Ÿàµà´°àµ‹àµ¾ + à´¸àµâ€Œà´•àµà´°àµ‹àµ¾ à´‰à´ªà´¯àµ‹à´—à´¿à´šàµà´šàµ â€Œà´®à´¾à´ªàµà´ªàµ â€Œà´¸àµ‚à´‚ à´šàµ†à´¯àµà´¯àµà´•',
      scrollMac:
        'âŒ˜ + à´¸àµâ€Œà´•àµà´°àµ‹àµ¾ à´‰à´ªà´¯àµ‹à´—à´¿à´šàµà´šàµ â€Œà´®à´¾à´ªàµà´ªàµ â€Œà´¸àµ‚à´‚ à´šàµ†à´¯àµà´¯àµà´•',
    },
    mr: {
      touch:
        'à¤¨à¤•à¤¾à¤¶à¤¾ à¤¹à¤²à¤µà¤¿à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤¦à¥‹à¤¨ à¤¬à¥‹à¤Ÿà¥‡ à¤µà¤¾à¤ªà¤°à¤¾',
      scroll:
        'à¤¨à¤•à¤¾à¤¶à¤¾ à¤à¥‚à¤® à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ ctrl + scroll à¤µà¤¾à¤ªà¤°à¤¾',
      scrollMac:
        'à¤¨à¤•à¤¾à¤¶à¤¾à¤µà¤° à¤à¥‚à¤® à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ âŒ˜ + à¤¸à¥à¤•à¥à¤°à¥‹à¤² à¤µà¤¾à¤ªà¤°à¤¾',
    },
    nl: {
      touch: 'Gebruik twee vingers om de kaart te verplaatsen',
      scroll: 'Gebruik Ctrl + scrollen om in- en uit te zoomen op de kaart',
      scrollMac: 'Gebruik âŒ˜ + scrollen om in en uit te zoomen op de kaart',
    },
    no: {
      touch: 'Bruk to fingre for Ã¥ flytte kartet',
      scroll: 'Hold ctrl-tasten inne og rull for Ã¥ zoome pÃ¥ kartet',
      scrollMac: 'Hold inne âŒ˜-tasten og rull for Ã¥ zoome pÃ¥ kartet',
    },
    pl: {
      touch: 'PrzesuÅ„ mapÄ™ dwoma palcami',
      scroll: 'NaciÅ›nij CTRL i przewiÅ„, by przybliÅ¼yÄ‡ mapÄ™',
      scrollMac: 'NaciÅ›nijÂ âŒ˜ i przewiÅ„, by przybliÅ¼yÄ‡ mapÄ™',
    },
    pt: {
      touch: 'Use dois dedos para mover o mapa',
      scroll:
        'Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa',
      scrollMac:
        'Use âŒ˜ e role a tela simultaneamente para aplicar zoom no mapa',
    },
    'pt-BR': {
      touch: 'Use dois dedos para mover o mapa',
      scroll:
        'Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa',
      scrollMac:
        'Use âŒ˜ e role a tela simultaneamente para aplicar zoom no mapa',
    },
    'pt-PT': {
      touch: 'Utilize dois dedos para mover o mapa',
      scroll: 'Utilizar ctrl + deslocar para aumentar/diminuir zoom do mapa',
      scrollMac: 'Utilize âŒ˜ + deslocar para aumentar/diminuir o zoom do mapa',
    },
    ro: {
      touch: 'FolosiÈ›i douÄƒ degete pentru a deplasa harta',
      scroll:
        'ApÄƒsaÈ›i tasta ctrl È™i derulaÈ›i simultan pentru a mÄƒri harta',
      scrollMac: 'FolosiÈ›i âŒ˜ È™i derulaÈ›i pentru a mÄƒri/micÈ™ora harta',
    },
    ru: {
      touch:
        'Ð§Ñ‚Ð¾Ð±Ñ‹ Ð¿ÐµÑ€ÐµÐ¼ÐµÑÑ‚Ð¸Ñ‚ÑŒ ÐºÐ°Ñ€Ñ‚Ñƒ, Ð¿Ñ€Ð¾Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð¾ Ð½ÐµÐ¹ Ð´Ð²ÑƒÐ¼Ñ Ð¿Ð°Ð»ÑŒÑ†Ð°Ð¼Ð¸',
      scroll:
        'Ð§Ñ‚Ð¾Ð±Ñ‹ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð¼Ð°ÑÑˆÑ‚Ð°Ð±, Ð¿Ñ€Ð¾ÐºÑ€ÑƒÑ‡Ð¸Ð²Ð°Ð¹Ñ‚Ðµ ÐºÐ°Ñ€Ñ‚Ñƒ, ÑƒÐ´ÐµÑ€Ð¶Ð¸Ð²Ð°Ñ ÐºÐ»Ð°Ð²Ð¸ÑˆÑƒ Ctrl.',
      scrollMac:
        'Ð§Ñ‚Ð¾Ð±Ñ‹ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð¼Ð°ÑÑˆÑ‚Ð°Ð±, Ð½Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ âŒ˜Â + Ð¿Ñ€Ð¾ÐºÑ€ÑƒÑ‚ÐºÐ°',
    },
    sk: {
      touch: 'Mapu mÃ´Å¾ete posunÃºÅ¥ dvoma prstami',
      scroll: 'Ak chcete priblÃ­Å¾iÅ¥ mapu, stlaÄte klÃ¡ves ctrl aÂ posÃºvajte',
      scrollMac:
        'Ak chcete priblÃ­Å¾iÅ¥ mapu, stlaÄte klÃ¡ves âŒ˜ aÂ posÃºvajte kolieskom myÅ¡i',
    },
    sl: {
      touch: 'Premaknite zemljevid z dvema prstoma',
      scroll:
        'Zemljevid poveÄate tako, da drÅ¾ite tipko Ctrl in vrtite kolesce na miÅ¡ki',
      scrollMac:
        'Uporabite âŒ˜ + funkcijo pomika, da poveÄate ali pomanjÅ¡ate zemljevid',
    },
    sr: {
      touch: 'ÐœÐ°Ð¿Ñƒ Ð¿Ð¾Ð¼ÐµÑ€Ð°Ñ˜Ñ‚Ðµ Ð¿Ð¾Ð¼Ð¾Ñ›Ñƒ Ð´Ð²Ð° Ð¿Ñ€ÑÑ‚Ð°',
      scroll:
        'ÐŸÑ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸Ñ‚Ðµ ctrl Ñ‚Ð°ÑÑ‚ÐµÑ€ Ð´Ð¾Ðº Ð¿Ð¾Ð¼ÐµÑ€Ð°Ñ‚Ðµ Ð´Ð° Ð±Ð¸ÑÑ‚Ðµ Ð·ÑƒÐ¼Ð¸Ñ€Ð°Ð»Ð¸ Ð¼Ð°Ð¿Ñƒ',
      scrollMac:
        'ÐŸÑ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸Ñ‚Ðµ Ñ‚Ð°ÑÑ‚ÐµÑ€ âŒ˜ Ð´Ð¾Ðº Ð¿Ð¾Ð¼ÐµÑ€Ð°Ñ‚Ðµ Ð´Ð° Ð±Ð¸ÑÑ‚Ðµ Ð·ÑƒÐ¼Ð¸Ñ€Ð°Ð»Ð¸ Ð¼Ð°Ð¿Ñƒ',
    },
    sv: {
      touch: 'AnvÃ¤nd tvÃ¥ fingrar fÃ¶r att flytta kartan',
      scroll: 'AnvÃ¤nd ctrl + rulla fÃ¶r att zooma kartan',
      scrollMac: 'AnvÃ¤nd âŒ˜ + rulla fÃ¶r att zooma pÃ¥ kartan',
    },
    ta: {
      touch:
        'à®®à¯‡à®ªà¯à®ªà¯ˆ à®¨à®•à®°à¯à®¤à¯à®¤ à®‡à®°à®£à¯à®Ÿà¯ à®µà®¿à®°à®²à¯à®•à®³à¯ˆà®ªà¯ à®ªà®¯à®©à¯à®ªà®Ÿà¯à®¤à¯à®¤à®µà¯à®®à¯',
      scroll:
        'à®®à¯‡à®ªà¯à®ªà¯ˆ à®ªà¯†à®°à®¿à®¤à®¾à®•à¯à®•à®¿/à®šà®¿à®±à®¿à®¤à®¾à®•à¯à®•à®¿à®ªà¯ à®ªà®¾à®°à¯à®•à¯à®•, ctrl à®ªà®Ÿà¯à®Ÿà®©à¯ˆà®ªà¯ à®ªà®¿à®Ÿà®¿à®¤à¯à®¤à®ªà®Ÿà®¿, à®®à¯‡à®²à¯‡/à®•à¯€à®´à¯‡ à®¸à¯à®•à¯à®°à®¾à®²à¯ à®šà¯†à®¯à¯à®¯à®µà¯à®®à¯',
      scrollMac:
        'à®®à¯‡à®ªà¯à®ªà¯ˆ à®ªà¯†à®°à®¿à®¤à®¾à®•à¯à®•à®¿/à®šà®¿à®±à®¿à®¤à®¾à®•à¯à®•à®¿à®ªà¯ à®ªà®¾à®°à¯à®•à¯à®•, âŒ˜ à®ªà®Ÿà¯à®Ÿà®©à¯ˆà®ªà¯ à®ªà®¿à®Ÿà®¿à®¤à¯à®¤à®ªà®Ÿà®¿, à®®à¯‡à®²à¯‡/à®•à¯€à®´à¯‡ à®¸à¯à®•à¯à®°à®¾à®²à¯ à®šà¯†à®¯à¯à®¯à®µà¯à®®à¯',
    },
    te: {
      touch:
        'à°®à±à°¯à°¾à°ªà±â€Œà°¨à°¿ à°¤à°°à°²à°¿à°‚à°šà°¡à°‚ à°•à±‹à°¸à°‚ à°°à±†à°‚à°¡à± à°µà±‡à°³à±à°²à°¨à± à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà°‚à°¡à°¿',
      scroll:
        'à°®à±à°¯à°¾à°ªà±â€Œà°¨à°¿ à°œà±‚à°®à± à°šà±‡à°¯à°¡à°¾à°¨à°¿à°•à°¿ ctrl à°¬à°Ÿà°¨à±â€Œà°¨à± à°¨à±Šà°•à±à°•à°¿ à°‰à°‚à°šà°¿, à°¸à±à°•à±à°°à±‹à°²à± à°šà±‡à°¯à°‚à°¡à°¿',
      scrollMac:
        'à°®à±à°¯à°¾à°ªà± à°œà±‚à°®à± à°šà±‡à°¯à°¾à°²à°‚à°Ÿà±‡ âŒ˜ + à°¸à±à°•à±à°°à±‹à°²à± à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà°‚à°¡à°¿',
    },
    th: {
      touch:
        'à¹ƒà¸Šà¹‰ 2 à¸™à¸´à¹‰à¸§à¹€à¸žà¸·à¹ˆà¸­à¹€à¸¥à¸·à¹ˆà¸­à¸™à¹à¸œà¸™à¸—à¸µà¹ˆ',
      scroll:
        'à¸à¸” Ctrl à¸„à¹‰à¸²à¸‡à¹„à¸§à¹‰ à¹à¸¥à¹‰à¸§à¹€à¸¥à¸·à¹ˆà¸­à¸™à¸«à¸™à¹‰à¸²à¸ˆà¸­à¹€à¸žà¸·à¹ˆà¸­à¸‹à¸¹à¸¡à¹à¸œà¸™à¸—à¸µà¹ˆ',
      scrollMac:
        'à¸à¸” âŒ˜ à¹à¸¥à¹‰à¸§à¹€à¸¥à¸·à¹ˆà¸­à¸™à¸«à¸™à¹‰à¸²à¸ˆà¸­à¹€à¸žà¸·à¹ˆà¸­à¸‹à¸¹à¸¡à¹à¸œà¸™à¸—à¸µà¹ˆ',
    },
    tl: {
      touch: 'Gumamit ng dalawang daliri upang iusog ang mapa',
      scroll: 'Gamitin ang ctrl + scroll upang i-zoom ang mapa',
      scrollMac: 'Gamitin ang âŒ˜ + scroll upang i-zoom ang mapa',
    },
    tr: {
      touch: 'Haritada gezinmek iÃ§in iki parmaÄŸÄ±nÄ±zÄ± kullanÄ±n',
      scroll:
        'HaritayÄ± yakÄ±nlaÅŸtÄ±rmak iÃ§in ctrl + kaydÄ±rma kombinasyonunu kullanÄ±n',
      scrollMac:
        'HaritayÄ± yakÄ±nlaÅŸtÄ±rmak iÃ§in âŒ˜ tuÅŸuna basÄ±p ekranÄ± kaydÄ±rÄ±n',
    },
    uk: {
      touch: 'ÐŸÐµÑ€ÐµÐ¼Ñ–Ñ‰ÑƒÐ¹Ñ‚Ðµ ÐºÐ°Ñ€Ñ‚Ñƒ Ð´Ð²Ð¾Ð¼Ð° Ð¿Ð°Ð»ÑŒÑ†ÑÐ¼Ð¸',
      scroll:
        'Ð©Ð¾Ð± Ð·Ð¼Ñ–Ð½ÑŽÐ²Ð°Ñ‚Ð¸ Ð¼Ð°ÑÑˆÑ‚Ð°Ð± ÐºÐ°Ñ€Ñ‚Ð¸, Ð¿Ñ€Ð¾ÐºÑ€ÑƒÑ‡ÑƒÐ¹Ñ‚Ðµ ÐºÐ¾Ð»Ñ–Ñ‰Ð°Ñ‚ÐºÐ¾ Ð¼Ð¸ÑˆÑ–, ÑƒÑ‚Ñ€Ð¸Ð¼ÑƒÑŽÑ‡Ð¸ ÐºÐ»Ð°Ð²Ñ–ÑˆÑƒ Ctrl',
      scrollMac:
        'Ð©Ð¾Ð± Ð·Ð¼Ñ–Ð½Ð¸Ñ‚Ð¸ Ð¼Ð°ÑÑˆÑ‚Ð°Ð± ÐºÐ°Ñ€Ñ‚Ð¸, Ð²Ð¸ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¾Ð²ÑƒÐ¹Ñ‚Ðµ âŒ˜ + Ð¿Ñ€Ð¾ÐºÑ€ÑƒÑ‡ÑƒÐ²Ð°Ð½Ð½Ñ',
    },
    vi: {
      touch: 'Sá»­ dá»¥ng hai ngÃ³n tay Ä‘á»ƒ di chuyá»ƒn báº£n Ä‘á»“',
      scroll: 'Sá»­ dá»¥ng ctrl + cuá»™n Ä‘á»ƒ thu phÃ³ng báº£n Ä‘á»“',
      scrollMac: 'Sá»­ dá»¥ng âŒ˜ + cuá»™n Ä‘á»ƒ thu phÃ³ng báº£n Ä‘á»“',
    },
    'zh-CN': {
      touch: 'ä½¿ç”¨åŒæŒ‡ç§»åŠ¨åœ°å›¾',
      scroll: 'æŒ‰ä½ Ctrl å¹¶æ»šåŠ¨é¼ æ ‡æ»šè½®æ‰å¯ç¼©æ”¾åœ°å›¾',
      scrollMac: 'æŒ‰ä½ âŒ˜ å¹¶æ»šåŠ¨é¼ æ ‡æ»šè½®æ‰å¯ç¼©æ”¾åœ°å›¾',
    },
    'zh-TW': {
      touch: 'åŒæ™‚ä»¥å…©æŒ‡ç§»å‹•åœ°åœ–',
      scroll: 'æŒ‰ä½ ctrl éµåŠ ä¸Šæ²å‹•æ»‘é¼ å¯ä»¥ç¸®æ”¾åœ°åœ–',
      scrollMac: 'æŒ‰ âŒ˜ åŠ ä¸Šæ»¾å‹•æ²è»¸å¯ä»¥ç¸®æ”¾åœ°åœ–',
    },
  }
  L.Map.mergeOptions({ gestureHandlingOptions: { text: {}, duration: 1e3 } })
  var t = !1,
    e = L.Handler.extend({
      addHooks: function () {
        ;(this._handleTouch = this._handleTouch.bind(this)),
          this._setupPluginOptions(),
          this._setLanguageContent(),
          this._disableInteractions(),
          this._map._container.addEventListener(
            'touchstart',
            this._handleTouch
          ),
          this._map._container.addEventListener('touchmove', this._handleTouch),
          this._map._container.addEventListener('touchend', this._handleTouch),
          this._map._container.addEventListener(
            'touchcancel',
            this._handleTouch
          ),
          this._map._container.addEventListener('click', this._handleTouch),
          L.DomEvent.on(
            this._map._container,
            'mousewheel',
            this._handleScroll,
            this
          ),
          L.DomEvent.on(this._map, 'mouseover', this._handleMouseOver, this),
          L.DomEvent.on(this._map, 'mouseout', this._handleMouseOut, this),
          L.DomEvent.on(this._map, 'movestart', this._handleDragging, this),
          L.DomEvent.on(this._map, 'move', this._handleDragging, this),
          L.DomEvent.on(this._map, 'moveend', this._handleDragging, this)
      },
      removeHooks: function () {
        this._enableInteractions(),
          this._map._container.removeEventListener(
            'touchstart',
            this._handleTouch
          ),
          this._map._container.removeEventListener(
            'touchmove',
            this._handleTouch
          ),
          this._map._container.removeEventListener(
            'touchend',
            this._handleTouch
          ),
          this._map._container.removeEventListener(
            'touchcancel',
            this._handleTouch
          ),
          this._map._container.removeEventListener('click', this._handleTouch),
          L.DomEvent.off(
            this._map._container,
            'mousewheel',
            this._handleScroll,
            this
          ),
          L.DomEvent.off(this._map, 'mouseover', this._handleMouseOver, this),
          L.DomEvent.off(this._map, 'mouseout', this._handleMouseOut, this),
          L.DomEvent.off(this._map, 'movestart', this._handleDragging, this),
          L.DomEvent.off(this._map, 'move', this._handleDragging, this),
          L.DomEvent.off(this._map, 'moveend', this._handleDragging, this)
      },
      _handleDragging: function (a) {
        'movestart' == a.type || 'move' == a.type
          ? (t = !0)
          : 'moveend' == a.type && (t = !1)
      },
      _disableInteractions: function () {
        this._map.dragging.disable(),
          this._map.scrollWheelZoom.disable(),
          this._map.tap && this._map.tap.disable()
      },
      _enableInteractions: function () {
        this._map.dragging.enable(),
          this._map.scrollWheelZoom.enable(),
          this._map.tap && this._map.tap.enable()
      },
      _setupPluginOptions: function () {
        this._map.options.gestureHandlingText &&
          (this._map.options.gestureHandlingOptions.text =
            this._map.options.gestureHandlingText)
      },
      _setLanguageContent: function () {
        var a
        if (
          this._map.options.gestureHandlingOptions &&
          this._map.options.gestureHandlingOptions.text &&
          this._map.options.gestureHandlingOptions.text.touch &&
          this._map.options.gestureHandlingOptions.text.scroll &&
          this._map.options.gestureHandlingOptions.text.scrollMac
        )
          a = this._map.options.gestureHandlingOptions.text
        else {
          var t = this._getUserLanguage()
          t || (t = 'en'),
            o[t] && (a = o[t]),
            a || -1 === t.indexOf('-') || ((t = t.split('-')[0]), (a = o[t])),
            a || (a = o[(t = 'en')])
        }
        var e = !1
        0 <= navigator.platform.toUpperCase().indexOf('MAC') && (e = !0)
        var l = a.scroll
        e && (l = a.scrollMac),
          this._map._container.setAttribute(
            'data-gesture-handling-touch-content',
            a.touch
          ),
          this._map._container.setAttribute(
            'data-gesture-handling-scroll-content',
            l
          )
      },
      _getUserLanguage: function () {
        return navigator.languages
          ? navigator.languages[0]
          : navigator.language || navigator.userLanguage
      },
      _handleTouch: function (a) {
        for (
          var t = [
              'leaflet-control-minimap',
              'leaflet-interactive',
              'leaflet-popup-content',
              'leaflet-popup-content-wrapper',
              'leaflet-popup-close-button',
              'leaflet-control-zoom-in',
              'leaflet-control-zoom-out',
            ],
            e = !1,
            l = 0;
          l < t.length;
          l++
        )
          L.DomUtil.hasClass(a.target, t[l]) && (e = !0)
        e
          ? L.DomUtil.hasClass(a.target, 'leaflet-interactive') &&
            'touchmove' === a.type &&
            1 === a.touches.length
            ? (L.DomUtil.addClass(
                this._map._container,
                'leaflet-gesture-handling-touch-warning'
              ),
              this._disableInteractions())
            : L.DomUtil.removeClass(
                this._map._container,
                'leaflet-gesture-handling-touch-warning'
              )
          : 'touchmove' === a.type || 'touchstart' === a.type
          ? 1 === a.touches.length
            ? (L.DomUtil.addClass(
                this._map._container,
                'leaflet-gesture-handling-touch-warning'
              ),
              this._disableInteractions())
            : (this._enableInteractions(),
              L.DomUtil.removeClass(
                this._map._container,
                'leaflet-gesture-handling-touch-warning'
              ))
          : L.DomUtil.removeClass(
              this._map._container,
              'leaflet-gesture-handling-touch-warning'
            )
      },
      _isScrolling: !1,
      _handleScroll: function (a) {
        a.metaKey || a.ctrlKey
          ? (a.preventDefault(),
            L.DomUtil.removeClass(
              this._map._container,
              'leaflet-gesture-handling-scroll-warning'
            ),
            this._map.scrollWheelZoom.enable())
          : (L.DomUtil.addClass(
              this._map._container,
              'leaflet-gesture-handling-scroll-warning'
            ),
            this._map.scrollWheelZoom.disable(),
            clearTimeout(this._isScrolling),
            (this._isScrolling = setTimeout(function () {
              for (
                var a = document.getElementsByClassName(
                    'leaflet-gesture-handling-scroll-warning'
                  ),
                  t = 0;
                t < a.length;
                t++
              )
                L.DomUtil.removeClass(
                  a[t],
                  'leaflet-gesture-handling-scroll-warning'
                )
            }, this._map.options.gestureHandlingOptions.duration)))
      },
      _handleMouseOver: function (a) {
        this._enableInteractions()
      },
      _handleMouseOut: function (a) {
        t || this._disableInteractions()
      },
    })
  L.Map.addInitHook('addHandler', 'gestureHandling', e),
    (a.GestureHandling = e),
    (a.default = e),
    Object.defineProperty(a, '__esModule', { value: !0 })
})
//# sourceMappingURL=leaflet-gesture-handling.min.js.map
