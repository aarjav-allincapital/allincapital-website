/* Enablestack widget — themed build. Primary: #54467d · Icon: default
   Regenerate anytime with: npx enablestack-widget-theme <hexcolor> [icon] */
(function () {
  var g = (typeof window !== "undefined") ? window : this;
  if (!g) { return; }
  g.ENABLESTACK_CONFIG = g.ENABLESTACK_CONFIG || {};
  var c = g.ENABLESTACK_CONFIG.colors;
  if (!c || !c.primary) {
    g.ENABLESTACK_CONFIG.colors = Object.assign({}, c, { primary: "#54467d" });
  }
  if (!g.ENABLESTACK_CONFIG.icon) {
    g.ENABLESTACK_CONFIG.icon = "default";
  }
})();

/* ===========================================

  ENABLESTACK WIDGET
  Enterprise Accessibility Infrastructure

  Owned and maintained by enableuser
  https://www.enableuser.com

=========================================== */

// Skip execution in non-browser environments (Node.js, SSR, etc.)
if (typeof window === 'undefined' || typeof document === 'undefined') {
  // no-op: widget requires a browser environment
} else {
// --- Browser-only code begins ---

// ===========================================
// TRANSLATIONS
// ===========================================

const TRANSLATIONS = {
  en: {
    accessibilityMenu: 'Accessibility Menu',
    closeAccessibilityMenu: 'Close Accessibility Menu',
    accessibilityTools: 'Accessibility Tools',
    resetAllSettings: 'Reset All Settings',
    screenReader: 'Read Aloud',
    voiceCommand: 'Voice Command',
    textSpacing: 'Text Spacing',
    pauseAnimations: 'Pause Animations',
    hideImages: 'Hide Images',
    dyslexiaFriendly: 'Dyslexia Friendly',
    biggerCursor: 'Bigger Cursor',
    lineHeight: 'Line Height',
    fontSelection: 'Font Selection',
    colorFilter: 'Color Filter',
    textAlign: 'Text Align',
    textSize: 'Text Size',
    highContrast: 'High Contrast',
    defaultFont: 'Default Font',
    noFilter: 'No Filter',
    default: 'Default',
    screenReaderOn: 'Read aloud on',
    screenReaderOff: 'Read aloud off',
    voiceControlActivated: 'Voice control activated',
    notSupportedBrowser: 'is not supported in this browser',
    close: 'Close',
    reset: 'Reset',
    saturation: 'Saturation',
    selectLanguage: 'Select Language',
    personalizeExperience: 'Personalize Your Experience',
    navigatePageStructure: 'Navigate by Page Structure',
    landmarks: 'Landmarks',
    headings: 'Headings',
    links: 'Links',
    noItemsFound: 'No items found',
    focus: 'Focus',
    cursor: 'Cursor',
    highlight: 'Highlight',
    contrast: 'Contrast',
    colorShift: 'Color Shift',
    animation: 'Animation',
    spacing: 'Spacing',
    font: 'Font',
    guide: 'Guide',
    window: 'Window',
    images: 'Images',
    showShortcuts: 'Show shortcuts',
    additionalShortcuts: 'Additional Keyboard Shortcuts',
    resetVisualToolkit: 'Reset Visual Toolkit',
    resetIssue: 'Reset Issue',
    navigatePageStructureShortcut: 'Navigate by Page Structure',
    profiles: 'Accessibility Profiles',
    profileSeizure: 'Seizure Safe',
    profileVision: 'Low Vision',
    profileAdhd: 'ADHD Friendly',
    profileDyslexia: 'Dyslexia',
    align: 'Align',
    readAloudShort: 'Read Aloud',
    voice: 'Voice',
    altText: 'Alt Text',
    noAltText: 'Missing alt text',
    openHelpDesk: 'Open Help Desk',  // kept for internal use
    closeHelpDesk: 'Close Help Desk', // kept for internal use
    // Enhanced features (v1.3.0)
    hoverHighlight: 'Hover Highlight',
    enlargeButtons: 'Big Buttons',
    muteMedia: 'Mute Media',
    readableFont: 'Readable Font',
    magnifier: 'Magnifier',
    textMagnifier: 'Text Magnifier',
    readFocus: 'Read Focus',
    virtualKeyboard: 'Keyboard',
    readableMode: 'Reader View',
    dictionary: 'Dictionary',
    customColor: 'Custom Color',
    customColorBackground: 'Background',
    customColorText: 'Text',
    customColorHeadings: 'Headings',
    customColorApply: 'Apply',
    customColorReset: 'Reset colors',
    accessibilityStatement: 'Accessibility Statement',
    sendFeedback: 'Send Feedback',
    hideForNow: 'Hide button',
    dictionarySelectPrompt: 'Select a word on the page to look it up',
    dictionaryNotFound: 'No definition found',
    dictionaryLoading: 'Looking up…',
    readerViewEmpty: 'No readable content found on this page',
    resizeWidget: 'Resize widget (drag, or use arrow keys)'
  },
  de: {
    accessibilityMenu: 'Barrierefreiheit-Menü', closeAccessibilityMenu: 'Barrierefreiheit-Menü schließen', resetAllSettings: 'Alle Einstellungen zurücksetzen',
    screenReader: 'Vorlesen', voiceCommand: 'Sprachbefehl', textSpacing: 'Zeichenabstand', pauseAnimations: 'Animationen anhalten', hideImages: 'Bilder ausblenden',
    dyslexiaFriendly: 'Legasthenie-freundlich', biggerCursor: 'Großer Cursor', lineHeight: 'Zeilenhöhe', fontSelection: 'Schriftauswahl', colorFilter: 'Farbfilter',
    textAlign: 'Textausrichtung', textSize: 'Textgröße', highContrast: 'Hoher Kontrast', default: 'Standard', screenReaderOn: 'Vorlesen aktiviert', screenReaderOff: 'Vorlesen deaktiviert',
    voiceControlActivated: 'Sprachsteuerung aktiviert', notSupportedBrowser: 'wird in diesem Browser nicht unterstützt', close: 'Schließen', reset: 'Zurücksetzen',
    saturation: 'Sättigung', navigatePageStructure: 'Nach Seitenstruktur navigieren', landmarks: 'Orientierungspunkte', headings: 'Überschriften', links: 'Links',
    noItemsFound: 'Keine Einträge gefunden', focus: 'Fokus', cursor: 'Cursor', highlight: 'Hervorheben', contrast: 'Kontrast', colorShift: 'Farbverschiebung',
    animation: 'Animation', spacing: 'Abstand', font: 'Schrift', guide: 'Leselineal', window: 'Lesefenster', images: 'Bilder', showShortcuts: 'Tastenkürzel anzeigen',
    additionalShortcuts: 'Weitere Tastenkürzel', resetVisualToolkit: 'Visuelles Toolkit zurücksetzen', resetIssue: 'Markierung zurücksetzen',
    profiles: 'Barrierefreiheit-Profile', profileSeizure: 'Epilepsie-sicher', profileVision: 'Sehschwäche', profileAdhd: 'ADHS-freundlich', profileDyslexia: 'Legasthenie',
    align: 'Ausrichten', voice: 'Stimme', altText: 'Alt-Text', noAltText: 'Alt-Text fehlt'
  },
  es: {
    accessibilityMenu: 'Menú de accesibilidad', closeAccessibilityMenu: 'Cerrar menú de accesibilidad', resetAllSettings: 'Restablecer todos los ajustes',
    screenReader: 'Leer en voz alta', voiceCommand: 'Comando de voz', textSpacing: 'Espaciado de texto', pauseAnimations: 'Pausar animaciones', hideImages: 'Ocultar imágenes',
    dyslexiaFriendly: 'Apto para dislexia', biggerCursor: 'Cursor grande', lineHeight: 'Altura de línea', fontSelection: 'Selección de fuente', colorFilter: 'Filtro de color',
    textAlign: 'Alineación de texto', textSize: 'Tamaño de texto', highContrast: 'Alto contraste', default: 'Predeterminado', screenReaderOn: 'Lectura en voz alta activada', screenReaderOff: 'Lectura en voz alta desactivada',
    voiceControlActivated: 'Control por voz activado', notSupportedBrowser: 'no es compatible con este navegador', close: 'Cerrar', reset: 'Restablecer',
    saturation: 'Saturación', navigatePageStructure: 'Navegar por la estructura de la página', landmarks: 'Puntos de referencia', headings: 'Encabezados', links: 'Enlaces',
    noItemsFound: 'No se encontraron elementos', focus: 'Foco', cursor: 'Cursor', highlight: 'Resaltar', contrast: 'Contraste', colorShift: 'Cambio de color',
    animation: 'Animación', spacing: 'Espaciado', font: 'Fuente', guide: 'Guía', window: 'Ventana', images: 'Imágenes', showShortcuts: 'Mostrar atajos',
    additionalShortcuts: 'Atajos de teclado adicionales', resetVisualToolkit: 'Restablecer kit visual', resetIssue: 'Restablecer resaltado',
    profiles: 'Perfiles de accesibilidad', profileSeizure: 'Seguro para epilepsia', profileVision: 'Baja visión', profileAdhd: 'Apto para TDAH', profileDyslexia: 'Dislexia',
    align: 'Alinear', voice: 'Voz', altText: 'Texto alternativo', noAltText: 'Falta texto alternativo'
  },
  it: {
    accessibilityMenu: 'Menu accessibilità', closeAccessibilityMenu: 'Chiudi menu accessibilità', resetAllSettings: 'Ripristina tutte le impostazioni',
    screenReader: 'Leggi ad alta voce', voiceCommand: 'Comando vocale', textSpacing: 'Spaziatura testo', pauseAnimations: 'Pausa animazioni', hideImages: 'Nascondi immagini',
    dyslexiaFriendly: 'Adatto alla dislessia', biggerCursor: 'Cursore grande', lineHeight: 'Interlinea', fontSelection: 'Selezione carattere', colorFilter: 'Filtro colore',
    textAlign: 'Allineamento testo', textSize: 'Dimensione testo', highContrast: 'Contrasto elevato', default: 'Predefinito', screenReaderOn: 'Lettura ad alta voce attiva', screenReaderOff: 'Lettura ad alta voce disattivata',
    voiceControlActivated: 'Controllo vocale attivato', notSupportedBrowser: 'non è supportato in questo browser', close: 'Chiudi', reset: 'Ripristina',
    saturation: 'Saturazione', navigatePageStructure: 'Naviga per struttura della pagina', landmarks: 'Punti di riferimento', headings: 'Intestazioni', links: 'Collegamenti',
    noItemsFound: 'Nessun elemento trovato', focus: 'Focus', cursor: 'Cursore', highlight: 'Evidenzia', contrast: 'Contrasto', colorShift: 'Variazione colore',
    animation: 'Animazione', spacing: 'Spaziatura', font: 'Carattere', guide: 'Guida', window: 'Finestra', images: 'Immagini', showShortcuts: 'Mostra scorciatoie',
    additionalShortcuts: 'Altre scorciatoie da tastiera', resetVisualToolkit: 'Ripristina toolkit visivo', resetIssue: 'Ripristina evidenziazione',
    profiles: 'Profili di accessibilità', profileSeizure: 'Sicuro per epilessia', profileVision: 'Ipovisione', profileAdhd: 'Adatto ad ADHD', profileDyslexia: 'Dislessia',
    align: 'Allinea', voice: 'Voce', altText: 'Testo alternativo', noAltText: 'Testo alternativo mancante'
  },
  fr: {
    accessibilityMenu: 'Menu d\'accessibilité', closeAccessibilityMenu: 'Fermer le menu d\'accessibilité', resetAllSettings: 'Réinitialiser tous les réglages',
    screenReader: 'Lecture à voix haute', voiceCommand: 'Commande vocale', textSpacing: 'Espacement du texte', pauseAnimations: 'Suspendre les animations', hideImages: 'Masquer les images',
    dyslexiaFriendly: 'Adapté à la dyslexie', biggerCursor: 'Grand curseur', lineHeight: 'Hauteur de ligne', fontSelection: 'Choix de police', colorFilter: 'Filtre de couleur',
    textAlign: 'Alignement du texte', textSize: 'Taille du texte', highContrast: 'Contraste élevé', default: 'Par défaut', screenReaderOn: 'Lecture à voix haute activée', screenReaderOff: 'Lecture à voix haute désactivée',
    voiceControlActivated: 'Contrôle vocal activé', notSupportedBrowser: 'n\'est pas pris en charge par ce navigateur', close: 'Fermer', reset: 'Réinitialiser',
    saturation: 'Saturation', navigatePageStructure: 'Naviguer par structure de page', landmarks: 'Points de repère', headings: 'Titres', links: 'Liens',
    noItemsFound: 'Aucun élément trouvé', focus: 'Focus', cursor: 'Curseur', highlight: 'Surligner', contrast: 'Contraste', colorShift: 'Décalage des couleurs',
    animation: 'Animation', spacing: 'Espacement', font: 'Police', guide: 'Guide', window: 'Fenêtre', images: 'Images', showShortcuts: 'Afficher les raccourcis',
    additionalShortcuts: 'Raccourcis clavier supplémentaires', resetVisualToolkit: 'Réinitialiser la boîte à outils visuelle', resetIssue: 'Réinitialiser le surlignage',
    profiles: 'Profils d\'accessibilité', profileSeizure: 'Anti-épilepsie', profileVision: 'Basse vision', profileAdhd: 'Adapté au TDAH', profileDyslexia: 'Dyslexie',
    align: 'Aligner', voice: 'Voix', altText: 'Texte alternatif', noAltText: 'Texte alternatif manquant'
  },
  ru: {
    accessibilityMenu: 'Меню доступности', closeAccessibilityMenu: 'Закрыть меню доступности', resetAllSettings: 'Сбросить все настройки',
    screenReader: 'Чтение вслух', voiceCommand: 'Голосовая команда', textSpacing: 'Интервал текста', pauseAnimations: 'Остановить анимацию', hideImages: 'Скрыть изображения',
    dyslexiaFriendly: 'Для дислексии', biggerCursor: 'Большой курсор', lineHeight: 'Высота строки', fontSelection: 'Выбор шрифта', colorFilter: 'Цветовой фильтр',
    textAlign: 'Выравнивание текста', textSize: 'Размер текста', highContrast: 'Высокая контрастность', default: 'По умолчанию', screenReaderOn: 'Чтение вслух включено', screenReaderOff: 'Чтение вслух выключено',
    voiceControlActivated: 'Голосовое управление включено', notSupportedBrowser: 'не поддерживается в этом браузере', close: 'Закрыть', reset: 'Сбросить',
    saturation: 'Насыщенность', navigatePageStructure: 'Навигация по структуре страницы', landmarks: 'Ориентиры', headings: 'Заголовки', links: 'Ссылки',
    noItemsFound: 'Ничего не найдено', focus: 'Фокус', cursor: 'Курсор', highlight: 'Подсветка', contrast: 'Контраст', colorShift: 'Сдвиг цвета',
    animation: 'Анимация', spacing: 'Интервал', font: 'Шрифт', guide: 'Линейка', window: 'Окно', images: 'Изображения', showShortcuts: 'Показать клавиши',
    additionalShortcuts: 'Дополнительные сочетания клавиш', resetVisualToolkit: 'Сбросить визуальные настройки', resetIssue: 'Сбросить подсветку',
    profiles: 'Профили доступности', profileSeizure: 'Защита от эпилепсии', profileVision: 'Слабое зрение', profileAdhd: 'Для СДВГ', profileDyslexia: 'Дислексия',
    align: 'Выровнять', voice: 'Голос', altText: 'Альт-текст', noAltText: 'Нет альт-текста'
  },
  tr: {
    accessibilityMenu: 'Erişilebilirlik Menüsü', closeAccessibilityMenu: 'Erişilebilirlik menüsünü kapat', resetAllSettings: 'Tüm ayarları sıfırla',
    screenReader: 'Sesli Oku', voiceCommand: 'Sesli Komut', textSpacing: 'Metin Aralığı', pauseAnimations: 'Animasyonları Durdur', hideImages: 'Görselleri Gizle',
    dyslexiaFriendly: 'Disleksi Dostu', biggerCursor: 'Büyük İmleç', lineHeight: 'Satır Yüksekliği', fontSelection: 'Yazı Tipi Seçimi', colorFilter: 'Renk Filtresi',
    textAlign: 'Metin Hizalama', textSize: 'Metin Boyutu', highContrast: 'Yüksek Kontrast', default: 'Varsayılan', screenReaderOn: 'Sesli okuma açık', screenReaderOff: 'Sesli okuma kapalı',
    voiceControlActivated: 'Ses kontrolü etkin', notSupportedBrowser: 'bu tarayıcıda desteklenmiyor', close: 'Kapat', reset: 'Sıfırla',
    saturation: 'Doygunluk', navigatePageStructure: 'Sayfa Yapısına Göre Gezin', landmarks: 'Yer İşaretleri', headings: 'Başlıklar', links: 'Bağlantılar',
    noItemsFound: 'Öğe bulunamadı', focus: 'Odak', cursor: 'İmleç', highlight: 'Vurgula', contrast: 'Kontrast', colorShift: 'Renk Kaydırma',
    animation: 'Animasyon', spacing: 'Aralık', font: 'Yazı Tipi', guide: 'Kılavuz', window: 'Pencere', images: 'Görseller', showShortcuts: 'Kısayolları göster',
    additionalShortcuts: 'Ek Klavye Kısayolları', resetVisualToolkit: 'Görsel araçları sıfırla', resetIssue: 'Vurguyu sıfırla',
    profiles: 'Erişilebilirlik Profilleri', profileSeizure: 'Nöbet Güvenli', profileVision: 'Az Gören', profileAdhd: 'DEHB Dostu', profileDyslexia: 'Disleksi',
    align: 'Hizala', voice: 'Ses', altText: 'Alternatif Metin', noAltText: 'Alternatif metin yok'
  },
  ar: {
    accessibilityMenu: 'قائمة إمكانية الوصول', closeAccessibilityMenu: 'إغلاق قائمة إمكانية الوصول', resetAllSettings: 'إعادة تعيين جميع الإعدادات',
    screenReader: 'قراءة بصوت عالٍ', voiceCommand: 'أمر صوتي', textSpacing: 'تباعد النص', pauseAnimations: 'إيقاف الحركات', hideImages: 'إخفاء الصور',
    dyslexiaFriendly: 'مناسب لعسر القراءة', biggerCursor: 'مؤشر كبير', lineHeight: 'ارتفاع السطر', fontSelection: 'اختيار الخط', colorFilter: 'مرشح الألوان',
    textAlign: 'محاذاة النص', textSize: 'حجم النص', highContrast: 'تباين عالٍ', default: 'افتراضي', screenReaderOn: 'القراءة بصوت عالٍ مفعّلة', screenReaderOff: 'القراءة بصوت عالٍ متوقفة',
    voiceControlActivated: 'تم تفعيل التحكم الصوتي', notSupportedBrowser: 'غير مدعوم في هذا المتصفح', close: 'إغلاق', reset: 'إعادة تعيين',
    saturation: 'التشبع', navigatePageStructure: 'التنقل حسب بنية الصفحة', landmarks: 'معالم', headings: 'عناوين', links: 'روابط',
    noItemsFound: 'لم يتم العثور على عناصر', focus: 'تركيز', cursor: 'مؤشر', highlight: 'تمييز', contrast: 'تباين', colorShift: 'تحويل الألوان',
    animation: 'حركة', spacing: 'تباعد', font: 'خط', guide: 'دليل', window: 'نافذة', images: 'صور', showShortcuts: 'إظهار الاختصارات',
    additionalShortcuts: 'اختصارات لوحة مفاتيح إضافية', resetVisualToolkit: 'إعادة تعيين الأدوات المرئية', resetIssue: 'إعادة تعيين التمييز',
    profiles: 'ملفات إمكانية الوصول', profileSeizure: 'آمن من النوبات', profileVision: 'ضعف البصر', profileAdhd: 'مناسب لفرط الحركة', profileDyslexia: 'عسر القراءة',
    align: 'محاذاة', voice: 'صوت', altText: 'نص بديل', noAltText: 'لا يوجد نص بديل'
  },
  hi: {
    accessibilityMenu: 'सुगम्यता मेनू', closeAccessibilityMenu: 'सुगम्यता मेनू बंद करें', resetAllSettings: 'सभी सेटिंग्स रीसेट करें',
    screenReader: 'ज़ोर से पढ़ें', voiceCommand: 'वॉइस कमांड', textSpacing: 'टेक्स्ट स्पेसिंग', pauseAnimations: 'एनिमेशन रोकें', hideImages: 'चित्र छिपाएँ',
    dyslexiaFriendly: 'डिस्लेक्सिया अनुकूल', biggerCursor: 'बड़ा कर्सर', lineHeight: 'पंक्ति ऊँचाई', fontSelection: 'फ़ॉन्ट चयन', colorFilter: 'रंग फ़िल्टर',
    textAlign: 'टेक्स्ट संरेखण', textSize: 'टेक्स्ट आकार', highContrast: 'उच्च कंट्रास्ट', default: 'डिफ़ॉल्ट', screenReaderOn: 'ज़ोर से पढ़ना चालू', screenReaderOff: 'ज़ोर से पढ़ना बंद',
    voiceControlActivated: 'वॉइस नियंत्रण सक्रिय', notSupportedBrowser: 'इस ब्राउज़र में समर्थित नहीं है', close: 'बंद करें', reset: 'रीसेट',
    saturation: 'संतृप्ति', navigatePageStructure: 'पृष्ठ संरचना से नेविगेट करें', landmarks: 'लैंडमार्क', headings: 'शीर्षक', links: 'लिंक',
    noItemsFound: 'कोई आइटम नहीं मिला', focus: 'फ़ोकस', cursor: 'कर्सर', highlight: 'हाइलाइट', contrast: 'कंट्रास्ट', colorShift: 'रंग परिवर्तन',
    animation: 'एनिमेशन', spacing: 'स्पेसिंग', font: 'फ़ॉन्ट', guide: 'गाइड', window: 'विंडो', images: 'चित्र', showShortcuts: 'शॉर्टकट दिखाएँ',
    additionalShortcuts: 'अतिरिक्त कीबोर्ड शॉर्टकट', resetVisualToolkit: 'विज़ुअल टूलकिट रीसेट करें', resetIssue: 'हाइलाइट रीसेट करें',
    profiles: 'सुगम्यता प्रोफ़ाइल', profileSeizure: 'दौरा-सुरक्षित', profileVision: 'कम दृष्टि', profileAdhd: 'ADHD अनुकूल', profileDyslexia: 'डिस्लेक्सिया',
    align: 'संरेखित करें', voice: 'आवाज़', altText: 'वैकल्पिक टेक्स्ट', noAltText: 'वैकल्पिक टेक्स्ट नहीं है'
  },
  zh: {
    accessibilityMenu: '无障碍菜单', closeAccessibilityMenu: '关闭无障碍菜单', resetAllSettings: '重置所有设置',
    screenReader: '朗读', voiceCommand: '语音指令', textSpacing: '文字间距', pauseAnimations: '暂停动画', hideImages: '隐藏图片',
    dyslexiaFriendly: '阅读障碍友好', biggerCursor: '大光标', lineHeight: '行高', fontSelection: '字体选择', colorFilter: '色彩滤镜',
    textAlign: '文本对齐', textSize: '文字大小', highContrast: '高对比度', default: '默认', screenReaderOn: '朗读已开启', screenReaderOff: '朗读已关闭',
    voiceControlActivated: '语音控制已启用', notSupportedBrowser: '在此浏览器中不受支持', close: '关闭', reset: '重置',
    saturation: '饱和度', navigatePageStructure: '按页面结构导航', landmarks: '地标', headings: '标题', links: '链接',
    noItemsFound: '未找到项目', focus: '焦点', cursor: '光标', highlight: '高亮', contrast: '对比度', colorShift: '色彩偏移',
    animation: '动画', spacing: '间距', font: '字体', guide: '阅读指引', window: '阅读窗口', images: '图片', showShortcuts: '显示快捷键',
    additionalShortcuts: '更多键盘快捷键', resetVisualToolkit: '重置视觉工具包', resetIssue: '重置高亮',
    profiles: '无障碍配置', profileSeizure: '癫痫安全', profileVision: '低视力', profileAdhd: 'ADHD 友好', profileDyslexia: '阅读障碍',
    align: '对齐', voice: '语音', altText: '替代文本', noAltText: '缺少替代文本'
  },
  ja: {
    accessibilityMenu: 'アクセシビリティメニュー', closeAccessibilityMenu: 'アクセシビリティメニューを閉じる', resetAllSettings: 'すべての設定をリセット',
    screenReader: '読み上げ', voiceCommand: '音声コマンド', textSpacing: '文字間隔', pauseAnimations: 'アニメーション停止', hideImages: '画像を非表示',
    dyslexiaFriendly: 'ディスレクシア対応', biggerCursor: '大きいカーソル', lineHeight: '行の高さ', fontSelection: 'フォント選択', colorFilter: 'カラーフィルター',
    textAlign: 'テキスト配置', textSize: '文字サイズ', highContrast: 'ハイコントラスト', default: 'デフォルト', screenReaderOn: '読み上げオン', screenReaderOff: '読み上げオフ',
    voiceControlActivated: '音声操作が有効', notSupportedBrowser: 'はこのブラウザでは対応していません', close: '閉じる', reset: 'リセット',
    saturation: '彩度', navigatePageStructure: 'ページ構造でナビゲート', landmarks: 'ランドマーク', headings: '見出し', links: 'リンク',
    noItemsFound: '項目が見つかりません', focus: 'フォーカス', cursor: 'カーソル', highlight: 'ハイライト', contrast: 'コントラスト', colorShift: '色変換',
    animation: 'アニメーション', spacing: '間隔', font: 'フォント', guide: 'ガイド', window: 'ウィンドウ', images: '画像', showShortcuts: 'ショートカット表示',
    additionalShortcuts: 'その他のキーボードショートカット', resetVisualToolkit: 'ビジュアルツールをリセット', resetIssue: 'ハイライトをリセット',
    profiles: 'アクセシビリティプロファイル', profileSeizure: '発作対策', profileVision: 'ロービジョン', profileAdhd: 'ADHD 対応', profileDyslexia: 'ディスレクシア',
    align: '配置', voice: '音声', altText: '代替テキスト', noAltText: '代替テキストなし'
  },
  pt: {
    accessibilityMenu: 'Menu de acessibilidade', closeAccessibilityMenu: 'Fechar menu de acessibilidade', resetAllSettings: 'Redefinir todas as configurações',
    screenReader: 'Ler em voz alta', voiceCommand: 'Comando de voz', textSpacing: 'Espaçamento do texto', pauseAnimations: 'Pausar animações', hideImages: 'Ocultar imagens',
    dyslexiaFriendly: 'Adequado para dislexia', biggerCursor: 'Cursor grande', lineHeight: 'Altura da linha', fontSelection: 'Seleção de fonte', colorFilter: 'Filtro de cor',
    textAlign: 'Alinhamento do texto', textSize: 'Tamanho do texto', highContrast: 'Alto contraste', default: 'Padrão', screenReaderOn: 'Leitura em voz alta ativada', screenReaderOff: 'Leitura em voz alta desativada',
    voiceControlActivated: 'Controle por voz ativado', notSupportedBrowser: 'não é compatível com este navegador', close: 'Fechar', reset: 'Redefinir',
    saturation: 'Saturação', navigatePageStructure: 'Navegar pela estrutura da página', landmarks: 'Marcos', headings: 'Títulos', links: 'Links',
    noItemsFound: 'Nenhum item encontrado', focus: 'Foco', cursor: 'Cursor', highlight: 'Destacar', contrast: 'Contraste', colorShift: 'Mudança de cor',
    animation: 'Animação', spacing: 'Espaçamento', font: 'Fonte', guide: 'Guia', window: 'Janela', images: 'Imagens', showShortcuts: 'Mostrar atalhos',
    additionalShortcuts: 'Atalhos de teclado adicionais', resetVisualToolkit: 'Redefinir kit visual', resetIssue: 'Redefinir destaque',
    profiles: 'Perfis de acessibilidade', profileSeizure: 'Seguro contra convulsões', profileVision: 'Baixa visão', profileAdhd: 'Adequado para TDAH', profileDyslexia: 'Dislexia',
    align: 'Alinhar', voice: 'Voz', altText: 'Texto alternativo', noAltText: 'Sem texto alternativo'
  },
  bn: {
    accessibilityMenu: 'অ্যাক্সেসিবিলিটি মেনু', closeAccessibilityMenu: 'অ্যাক্সেসিবিলিটি মেনু বন্ধ করুন', resetAllSettings: 'সব সেটিংস রিসেট করুন',
    screenReader: 'জোরে পড়ুন', voiceCommand: 'ভয়েস কমান্ড', textSpacing: 'টেক্সট স্পেসিং', pauseAnimations: 'অ্যানিমেশন থামান', hideImages: 'ছবি লুকান',
    dyslexiaFriendly: 'ডিসলেক্সিয়া-বান্ধব', biggerCursor: 'বড় কার্সার', lineHeight: 'লাইনের উচ্চতা', fontSelection: 'ফন্ট নির্বাচন', colorFilter: 'রঙ ফিল্টার',
    textAlign: 'টেক্সট সারিবদ্ধকরণ', textSize: 'টেক্সটের আকার', highContrast: 'উচ্চ কনট্রাস্ট', default: 'ডিফল্ট', screenReaderOn: 'জোরে পড়া চালু', screenReaderOff: 'জোরে পড়া বন্ধ',
    voiceControlActivated: 'ভয়েস নিয়ন্ত্রণ সক্রিয়', notSupportedBrowser: 'এই ব্রাউজারে সমর্থিত নয়', close: 'বন্ধ করুন', reset: 'রিসেট',
    saturation: 'স্যাচুরেশন', navigatePageStructure: 'পৃষ্ঠার কাঠামো অনুযায়ী নেভিগেট করুন', landmarks: 'ল্যান্ডমার্ক', headings: 'শিরোনাম', links: 'লিংক',
    noItemsFound: 'কোনো আইটেম পাওয়া যায়নি', focus: 'ফোকাস', cursor: 'কার্সার', highlight: 'হাইলাইট', contrast: 'কনট্রাস্ট', colorShift: 'রঙ পরিবর্তন',
    animation: 'অ্যানিমেশন', spacing: 'স্পেসিং', font: 'ফন্ট', guide: 'গাইড', window: 'উইন্ডো', images: 'ছবি', showShortcuts: 'শর্টকাট দেখান',
    additionalShortcuts: 'অতিরিক্ত কীবোর্ড শর্টকাট', resetVisualToolkit: 'ভিজ্যুয়াল টুলকিট রিসেট করুন', resetIssue: 'হাইলাইট রিসেট করুন',
    profiles: 'অ্যাক্সেসিবিলিটি প্রোফাইল', profileSeizure: 'খিঁচুনি-নিরাপদ', profileVision: 'ক্ষীণ দৃষ্টি', profileAdhd: 'ADHD-বান্ধব', profileDyslexia: 'ডিসলেক্সিয়া',
    align: 'সারিবদ্ধ করুন', voice: 'ভয়েস', altText: 'বিকল্প টেক্সট', noAltText: 'বিকল্প টেক্সট নেই'
  },
  ko: {
    accessibilityMenu: '접근성 메뉴', closeAccessibilityMenu: '접근성 메뉴 닫기', resetAllSettings: '모든 설정 초기화',
    screenReader: '소리 내어 읽기', voiceCommand: '음성 명령', textSpacing: '텍스트 간격', pauseAnimations: '애니메이션 일시정지', hideImages: '이미지 숨기기',
    dyslexiaFriendly: '난독증 친화', biggerCursor: '큰 커서', lineHeight: '줄 높이', fontSelection: '글꼴 선택', colorFilter: '색상 필터',
    textAlign: '텍스트 정렬', textSize: '텍스트 크기', highContrast: '고대비', default: '기본값', screenReaderOn: '소리 내어 읽기 켜짐', screenReaderOff: '소리 내어 읽기 꺼짐',
    voiceControlActivated: '음성 제어 활성화됨', notSupportedBrowser: '이 브라우저에서 지원되지 않습니다', close: '닫기', reset: '초기화',
    saturation: '채도', navigatePageStructure: '페이지 구조로 탐색', landmarks: '랜드마크', headings: '제목', links: '링크',
    noItemsFound: '항목을 찾을 수 없습니다', focus: '포커스', cursor: '커서', highlight: '강조', contrast: '대비', colorShift: '색상 변환',
    animation: '애니메이션', spacing: '간격', font: '글꼴', guide: '가이드', window: '창', images: '이미지', showShortcuts: '단축키 표시',
    additionalShortcuts: '추가 키보드 단축키', resetVisualToolkit: '시각 도구 초기화', resetIssue: '강조 초기화',
    profiles: '접근성 프로필', profileSeizure: '발작 안전', profileVision: '저시력', profileAdhd: 'ADHD 친화', profileDyslexia: '난독증',
    align: '정렬', voice: '음성', altText: '대체 텍스트', noAltText: '대체 텍스트 없음'
  },
  vi: {
    accessibilityMenu: 'Menu trợ năng', closeAccessibilityMenu: 'Đóng menu trợ năng', resetAllSettings: 'Đặt lại tất cả cài đặt',
    screenReader: 'Đọc to', voiceCommand: 'Lệnh thoại', textSpacing: 'Giãn cách chữ', pauseAnimations: 'Tạm dừng hoạt ảnh', hideImages: 'Ẩn hình ảnh',
    dyslexiaFriendly: 'Thân thiện với chứng khó đọc', biggerCursor: 'Con trỏ lớn', lineHeight: 'Chiều cao dòng', fontSelection: 'Chọn phông chữ', colorFilter: 'Bộ lọc màu',
    textAlign: 'Căn chỉnh văn bản', textSize: 'Cỡ chữ', highContrast: 'Tương phản cao', default: 'Mặc định', screenReaderOn: 'Đã bật đọc to', screenReaderOff: 'Đã tắt đọc to',
    voiceControlActivated: 'Đã kích hoạt điều khiển giọng nói', notSupportedBrowser: 'không được hỗ trợ trên trình duyệt này', close: 'Đóng', reset: 'Đặt lại',
    saturation: 'Độ bão hòa', navigatePageStructure: 'Điều hướng theo cấu trúc trang', landmarks: 'Mốc trang', headings: 'Tiêu đề', links: 'Liên kết',
    noItemsFound: 'Không tìm thấy mục nào', focus: 'Tiêu điểm', cursor: 'Con trỏ', highlight: 'Tô sáng', contrast: 'Tương phản', colorShift: 'Đổi màu',
    animation: 'Hoạt ảnh', spacing: 'Giãn cách', font: 'Phông chữ', guide: 'Thước đọc', window: 'Cửa sổ đọc', images: 'Hình ảnh', showShortcuts: 'Hiện phím tắt',
    additionalShortcuts: 'Phím tắt bổ sung', resetVisualToolkit: 'Đặt lại công cụ hiển thị', resetIssue: 'Đặt lại tô sáng',
    profiles: 'Hồ sơ trợ năng', profileSeizure: 'An toàn co giật', profileVision: 'Thị lực kém', profileAdhd: 'Thân thiện ADHD', profileDyslexia: 'Chứng khó đọc',
    align: 'Căn chỉnh', voice: 'Giọng nói', altText: 'Văn bản thay thế', noAltText: 'Thiếu văn bản thay thế'
  },
  id: {
    accessibilityMenu: 'Menu Aksesibilitas', closeAccessibilityMenu: 'Tutup menu aksesibilitas', resetAllSettings: 'Atur ulang semua pengaturan',
    screenReader: 'Baca Nyaring', voiceCommand: 'Perintah Suara', textSpacing: 'Jarak Teks', pauseAnimations: 'Jeda Animasi', hideImages: 'Sembunyikan Gambar',
    dyslexiaFriendly: 'Ramah Disleksia', biggerCursor: 'Kursor Besar', lineHeight: 'Tinggi Baris', fontSelection: 'Pilihan Font', colorFilter: 'Filter Warna',
    textAlign: 'Perataan Teks', textSize: 'Ukuran Teks', highContrast: 'Kontras Tinggi', default: 'Bawaan', screenReaderOn: 'Baca nyaring aktif', screenReaderOff: 'Baca nyaring nonaktif',
    voiceControlActivated: 'Kontrol suara diaktifkan', notSupportedBrowser: 'tidak didukung di peramban ini', close: 'Tutup', reset: 'Atur ulang',
    saturation: 'Saturasi', navigatePageStructure: 'Navigasi menurut struktur halaman', landmarks: 'Penanda', headings: 'Judul', links: 'Tautan',
    noItemsFound: 'Tidak ada item ditemukan', focus: 'Fokus', cursor: 'Kursor', highlight: 'Sorot', contrast: 'Kontras', colorShift: 'Pergeseran Warna',
    animation: 'Animasi', spacing: 'Jarak', font: 'Font', guide: 'Panduan', window: 'Jendela', images: 'Gambar', showShortcuts: 'Tampilkan pintasan',
    additionalShortcuts: 'Pintasan keyboard tambahan', resetVisualToolkit: 'Atur ulang perangkat visual', resetIssue: 'Atur ulang sorotan',
    profiles: 'Profil Aksesibilitas', profileSeizure: 'Aman Kejang', profileVision: 'Penglihatan Rendah', profileAdhd: 'Ramah ADHD', profileDyslexia: 'Disleksia',
    align: 'Ratakan', voice: 'Suara', altText: 'Teks Alternatif', noAltText: 'Tidak ada teks alternatif'
  },
  th: {
    accessibilityMenu: 'เมนูการช่วยการเข้าถึง', closeAccessibilityMenu: 'ปิดเมนูการช่วยการเข้าถึง', resetAllSettings: 'รีเซ็ตการตั้งค่าทั้งหมด',
    screenReader: 'อ่านออกเสียง', voiceCommand: 'คำสั่งเสียง', textSpacing: 'ระยะห่างข้อความ', pauseAnimations: 'หยุดแอนิเมชัน', hideImages: 'ซ่อนรูปภาพ',
    dyslexiaFriendly: 'เหมาะสำหรับผู้บกพร่องด้านการอ่าน', biggerCursor: 'เคอร์เซอร์ใหญ่', lineHeight: 'ความสูงบรรทัด', fontSelection: 'เลือกแบบอักษร', colorFilter: 'ฟิลเตอร์สี',
    textAlign: 'การจัดข้อความ', textSize: 'ขนาดข้อความ', highContrast: 'ความต่างสีสูง', default: 'ค่าเริ่มต้น', screenReaderOn: 'เปิดการอ่านออกเสียง', screenReaderOff: 'ปิดการอ่านออกเสียง',
    voiceControlActivated: 'เปิดใช้การควบคุมด้วยเสียง', notSupportedBrowser: 'ไม่รองรับในเบราว์เซอร์นี้', close: 'ปิด', reset: 'รีเซ็ต',
    saturation: 'ความอิ่มตัวของสี', navigatePageStructure: 'นำทางตามโครงสร้างหน้า', landmarks: 'จุดสังเกต', headings: 'หัวข้อ', links: 'ลิงก์',
    noItemsFound: 'ไม่พบรายการ', focus: 'โฟกัส', cursor: 'เคอร์เซอร์', highlight: 'ไฮไลต์', contrast: 'ความต่างสี', colorShift: 'การเปลี่ยนสี',
    animation: 'แอนิเมชัน', spacing: 'ระยะห่าง', font: 'แบบอักษร', guide: 'เส้นนำสายตา', window: 'หน้าต่างอ่าน', images: 'รูปภาพ', showShortcuts: 'แสดงปุ่มลัด',
    additionalShortcuts: 'ปุ่มลัดเพิ่มเติม', resetVisualToolkit: 'รีเซ็ตเครื่องมือภาพ', resetIssue: 'รีเซ็ตไฮไลต์',
    profiles: 'โปรไฟล์การช่วยการเข้าถึง', profileSeizure: 'ปลอดภัยจากอาการชัก', profileVision: 'สายตาเลือนราง', profileAdhd: 'เหมาะสำหรับ ADHD', profileDyslexia: 'บกพร่องด้านการอ่าน',
    align: 'จัดแนว', voice: 'เสียง', altText: 'ข้อความแทน', noAltText: 'ไม่มีข้อความแทน'
  },
  pl: {
    accessibilityMenu: 'Menu dostępności', closeAccessibilityMenu: 'Zamknij menu dostępności', resetAllSettings: 'Zresetuj wszystkie ustawienia',
    screenReader: 'Czytaj na głos', voiceCommand: 'Polecenie głosowe', textSpacing: 'Odstępy tekstu', pauseAnimations: 'Wstrzymaj animacje', hideImages: 'Ukryj obrazy',
    dyslexiaFriendly: 'Przyjazny dysleksji', biggerCursor: 'Duży kursor', lineHeight: 'Wysokość wiersza', fontSelection: 'Wybór czcionki', colorFilter: 'Filtr kolorów',
    textAlign: 'Wyrównanie tekstu', textSize: 'Rozmiar tekstu', highContrast: 'Wysoki kontrast', default: 'Domyślne', screenReaderOn: 'Czytanie na głos włączone', screenReaderOff: 'Czytanie na głos wyłączone',
    voiceControlActivated: 'Sterowanie głosowe włączone', notSupportedBrowser: 'nie jest obsługiwane w tej przeglądarce', close: 'Zamknij', reset: 'Resetuj',
    saturation: 'Nasycenie', navigatePageStructure: 'Nawiguj według struktury strony', landmarks: 'Punkty orientacyjne', headings: 'Nagłówki', links: 'Linki',
    noItemsFound: 'Nie znaleziono elementów', focus: 'Fokus', cursor: 'Kursor', highlight: 'Podświetl', contrast: 'Kontrast', colorShift: 'Przesunięcie kolorów',
    animation: 'Animacja', spacing: 'Odstępy', font: 'Czcionka', guide: 'Linijka', window: 'Okno', images: 'Obrazy', showShortcuts: 'Pokaż skróty',
    additionalShortcuts: 'Dodatkowe skróty klawiszowe', resetVisualToolkit: 'Zresetuj narzędzia wizualne', resetIssue: 'Zresetuj podświetlenie',
    profiles: 'Profile dostępności', profileSeizure: 'Bezpieczny dla epilepsji', profileVision: 'Słabowidzący', profileAdhd: 'Przyjazny ADHD', profileDyslexia: 'Dysleksja',
    align: 'Wyrównaj', voice: 'Głos', altText: 'Tekst alternatywny', noAltText: 'Brak tekstu alternatywnego'
  },
  nl: {
    accessibilityMenu: 'Toegankelijkheidsmenu', closeAccessibilityMenu: 'Toegankelijkheidsmenu sluiten', resetAllSettings: 'Alle instellingen resetten',
    screenReader: 'Voorlezen', voiceCommand: 'Spraakopdracht', textSpacing: 'Tekstafstand', pauseAnimations: 'Animaties pauzeren', hideImages: 'Afbeeldingen verbergen',
    dyslexiaFriendly: 'Dyslexievriendelijk', biggerCursor: 'Grote cursor', lineHeight: 'Regelhoogte', fontSelection: 'Lettertypekeuze', colorFilter: 'Kleurfilter',
    textAlign: 'Tekstuitlijning', textSize: 'Tekstgrootte', highContrast: 'Hoog contrast', default: 'Standaard', screenReaderOn: 'Voorlezen aan', screenReaderOff: 'Voorlezen uit',
    voiceControlActivated: 'Spraakbediening geactiveerd', notSupportedBrowser: 'wordt niet ondersteund in deze browser', close: 'Sluiten', reset: 'Resetten',
    saturation: 'Verzadiging', navigatePageStructure: 'Navigeren op paginastructuur', landmarks: 'Oriëntatiepunten', headings: 'Koppen', links: 'Links',
    noItemsFound: 'Geen items gevonden', focus: 'Focus', cursor: 'Cursor', highlight: 'Markeren', contrast: 'Contrast', colorShift: 'Kleurverschuiving',
    animation: 'Animatie', spacing: 'Afstand', font: 'Lettertype', guide: 'Leesliniaal', window: 'Leesvenster', images: 'Afbeeldingen', showShortcuts: 'Sneltoetsen tonen',
    additionalShortcuts: 'Extra sneltoetsen', resetVisualToolkit: 'Visuele toolkit resetten', resetIssue: 'Markering resetten',
    profiles: 'Toegankelijkheidsprofielen', profileSeizure: 'Epilepsieveilig', profileVision: 'Slechtziend', profileAdhd: 'ADHD-vriendelijk', profileDyslexia: 'Dyslexie',
    align: 'Uitlijnen', voice: 'Stem', altText: 'Alt-tekst', noAltText: 'Alt-tekst ontbreekt'
  },
  el: {
    accessibilityMenu: 'Μενού προσβασιμότητας', closeAccessibilityMenu: 'Κλείσιμο μενού προσβασιμότητας', resetAllSettings: 'Επαναφορά όλων των ρυθμίσεων',
    screenReader: 'Εκφώνηση', voiceCommand: 'Φωνητική εντολή', textSpacing: 'Απόσταση κειμένου', pauseAnimations: 'Παύση κινήσεων', hideImages: 'Απόκρυψη εικόνων',
    dyslexiaFriendly: 'Φιλικό προς τη δυσλεξία', biggerCursor: 'Μεγάλος δείκτης', lineHeight: 'Ύψος γραμμής', fontSelection: 'Επιλογή γραμματοσειράς', colorFilter: 'Φίλτρο χρώματος',
    textAlign: 'Στοίχιση κειμένου', textSize: 'Μέγεθος κειμένου', highContrast: 'Υψηλή αντίθεση', default: 'Προεπιλογή', screenReaderOn: 'Εκφώνηση ενεργή', screenReaderOff: 'Εκφώνηση ανενεργή',
    voiceControlActivated: 'Φωνητικός έλεγχος ενεργός', notSupportedBrowser: 'δεν υποστηρίζεται σε αυτό το πρόγραμμα περιήγησης', close: 'Κλείσιμο', reset: 'Επαναφορά',
    saturation: 'Κορεσμός', navigatePageStructure: 'Πλοήγηση κατά δομή σελίδας', landmarks: 'Ορόσημα', headings: 'Επικεφαλίδες', links: 'Σύνδεσμοι',
    noItemsFound: 'Δεν βρέθηκαν στοιχεία', focus: 'Εστίαση', cursor: 'Δείκτης', highlight: 'Επισήμανση', contrast: 'Αντίθεση', colorShift: 'Μετατόπιση χρώματος',
    animation: 'Κίνηση', spacing: 'Απόσταση', font: 'Γραμματοσειρά', guide: 'Οδηγός', window: 'Παράθυρο', images: 'Εικόνες', showShortcuts: 'Εμφάνιση συντομεύσεων',
    additionalShortcuts: 'Πρόσθετες συντομεύσεις πληκτρολογίου', resetVisualToolkit: 'Επαναφορά οπτικών εργαλείων', resetIssue: 'Επαναφορά επισήμανσης',
    profiles: 'Προφίλ προσβασιμότητας', profileSeizure: 'Ασφαλές για επιληψία', profileVision: 'Μειωμένη όραση', profileAdhd: 'Φιλικό προς ΔΕΠΥ', profileDyslexia: 'Δυσλεξία',
    align: 'Στοίχιση', voice: 'Φωνή', altText: 'Εναλλακτικό κείμενο', noAltText: 'Λείπει εναλλακτικό κείμενο'
  },
  sv: {
    accessibilityMenu: 'Tillgänglighetsmeny', closeAccessibilityMenu: 'Stäng tillgänglighetsmenyn', resetAllSettings: 'Återställ alla inställningar',
    screenReader: 'Läs upp', voiceCommand: 'Röstkommando', textSpacing: 'Textavstånd', pauseAnimations: 'Pausa animationer', hideImages: 'Dölj bilder',
    dyslexiaFriendly: 'Dyslexivänlig', biggerCursor: 'Stor markör', lineHeight: 'Radhöjd', fontSelection: 'Typsnittsval', colorFilter: 'Färgfilter',
    textAlign: 'Textjustering', textSize: 'Textstorlek', highContrast: 'Hög kontrast', default: 'Standard', screenReaderOn: 'Uppläsning på', screenReaderOff: 'Uppläsning av',
    voiceControlActivated: 'Röststyrning aktiverad', notSupportedBrowser: 'stöds inte i den här webbläsaren', close: 'Stäng', reset: 'Återställ',
    saturation: 'Mättnad', navigatePageStructure: 'Navigera efter sidstruktur', landmarks: 'Landmärken', headings: 'Rubriker', links: 'Länkar',
    noItemsFound: 'Inga objekt hittades', focus: 'Fokus', cursor: 'Markör', highlight: 'Markera', contrast: 'Kontrast', colorShift: 'Färgskifte',
    animation: 'Animation', spacing: 'Avstånd', font: 'Typsnitt', guide: 'Läslinjal', window: 'Läsfönster', images: 'Bilder', showShortcuts: 'Visa kortkommandon',
    additionalShortcuts: 'Fler kortkommandon', resetVisualToolkit: 'Återställ visuella verktyg', resetIssue: 'Återställ markering',
    profiles: 'Tillgänglighetsprofiler', profileSeizure: 'Anfallssäker', profileVision: 'Nedsatt syn', profileAdhd: 'ADHD-vänlig', profileDyslexia: 'Dyslexi',
    align: 'Justera', voice: 'Röst', altText: 'Alt-text', noAltText: 'Alt-text saknas'
  },
  no: {
    accessibilityMenu: 'Tilgjengelighetsmeny', closeAccessibilityMenu: 'Lukk tilgjengelighetsmenyen', resetAllSettings: 'Tilbakestill alle innstillinger',
    screenReader: 'Les høyt', voiceCommand: 'Talekommando', textSpacing: 'Tekstavstand', pauseAnimations: 'Pause animasjoner', hideImages: 'Skjul bilder',
    dyslexiaFriendly: 'Dysleksivennlig', biggerCursor: 'Stor markør', lineHeight: 'Linjehøyde', fontSelection: 'Skriftvalg', colorFilter: 'Fargefilter',
    textAlign: 'Tekstjustering', textSize: 'Tekststørrelse', highContrast: 'Høy kontrast', default: 'Standard', screenReaderOn: 'Høytlesing på', screenReaderOff: 'Høytlesing av',
    voiceControlActivated: 'Talestyring aktivert', notSupportedBrowser: 'støttes ikke i denne nettleseren', close: 'Lukk', reset: 'Tilbakestill',
    saturation: 'Metning', navigatePageStructure: 'Naviger etter sidestruktur', landmarks: 'Landemerker', headings: 'Overskrifter', links: 'Lenker',
    noItemsFound: 'Ingen elementer funnet', focus: 'Fokus', cursor: 'Markør', highlight: 'Uthev', contrast: 'Kontrast', colorShift: 'Fargeskifte',
    animation: 'Animasjon', spacing: 'Avstand', font: 'Skrift', guide: 'Leselinjal', window: 'Lesevindu', images: 'Bilder', showShortcuts: 'Vis snarveier',
    additionalShortcuts: 'Flere hurtigtaster', resetVisualToolkit: 'Tilbakestill visuelle verktøy', resetIssue: 'Tilbakestill utheving',
    profiles: 'Tilgjengelighetsprofiler', profileSeizure: 'Anfallssikker', profileVision: 'Svaksynt', profileAdhd: 'ADHD-vennlig', profileDyslexia: 'Dysleksi',
    align: 'Juster', voice: 'Stemme', altText: 'Alt-tekst', noAltText: 'Alt-tekst mangler'
  },
  da: {
    accessibilityMenu: 'Tilgængelighedsmenu', closeAccessibilityMenu: 'Luk tilgængelighedsmenuen', resetAllSettings: 'Nulstil alle indstillinger',
    screenReader: 'Læs højt', voiceCommand: 'Stemmekommando', textSpacing: 'Tekstafstand', pauseAnimations: 'Sæt animationer på pause', hideImages: 'Skjul billeder',
    dyslexiaFriendly: 'Ordblindevenlig', biggerCursor: 'Stor markør', lineHeight: 'Linjehøjde', fontSelection: 'Skriftvalg', colorFilter: 'Farvefilter',
    textAlign: 'Tekstjustering', textSize: 'Tekststørrelse', highContrast: 'Høj kontrast', default: 'Standard', screenReaderOn: 'Højtlæsning til', screenReaderOff: 'Højtlæsning fra',
    voiceControlActivated: 'Stemmestyring aktiveret', notSupportedBrowser: 'understøttes ikke i denne browser', close: 'Luk', reset: 'Nulstil',
    saturation: 'Mætning', navigatePageStructure: 'Naviger efter sidestruktur', landmarks: 'Kendemærker', headings: 'Overskrifter', links: 'Links',
    noItemsFound: 'Ingen elementer fundet', focus: 'Fokus', cursor: 'Markør', highlight: 'Fremhæv', contrast: 'Kontrast', colorShift: 'Farveskift',
    animation: 'Animation', spacing: 'Afstand', font: 'Skrift', guide: 'Læselineal', window: 'Læsevindue', images: 'Billeder', showShortcuts: 'Vis genveje',
    additionalShortcuts: 'Flere tastaturgenveje', resetVisualToolkit: 'Nulstil visuelle værktøjer', resetIssue: 'Nulstil fremhævning',
    profiles: 'Tilgængelighedsprofiler', profileSeizure: 'Anfaldssikker', profileVision: 'Svagtseende', profileAdhd: 'ADHD-venlig', profileDyslexia: 'Ordblindhed',
    align: 'Juster', voice: 'Stemme', altText: 'Alt-tekst', noAltText: 'Alt-tekst mangler'
  },
  fi: {
    accessibilityMenu: 'Saavutettavuusvalikko', closeAccessibilityMenu: 'Sulje saavutettavuusvalikko', resetAllSettings: 'Palauta kaikki asetukset',
    screenReader: 'Lue ääneen', voiceCommand: 'Äänikomento', textSpacing: 'Tekstin välistys', pauseAnimations: 'Pysäytä animaatiot', hideImages: 'Piilota kuvat',
    dyslexiaFriendly: 'Lukihäiriöystävällinen', biggerCursor: 'Suuri kohdistin', lineHeight: 'Rivikorkeus', fontSelection: 'Fontin valinta', colorFilter: 'Värisuodatin',
    textAlign: 'Tekstin tasaus', textSize: 'Tekstin koko', highContrast: 'Suuri kontrasti', default: 'Oletus', screenReaderOn: 'Ääneen luku päällä', screenReaderOff: 'Ääneen luku pois',
    voiceControlActivated: 'Ääniohjaus käytössä', notSupportedBrowser: 'ei ole tuettu tässä selaimessa', close: 'Sulje', reset: 'Palauta',
    saturation: 'Kylläisyys', navigatePageStructure: 'Selaa sivun rakenteen mukaan', landmarks: 'Maamerkit', headings: 'Otsikot', links: 'Linkit',
    noItemsFound: 'Kohteita ei löytynyt', focus: 'Kohdistus', cursor: 'Kohdistin', highlight: 'Korosta', contrast: 'Kontrasti', colorShift: 'Värinsiirto',
    animation: 'Animaatio', spacing: 'Välistys', font: 'Fontti', guide: 'Lukuviiva', window: 'Lukuikkuna', images: 'Kuvat', showShortcuts: 'Näytä pikanäppäimet',
    additionalShortcuts: 'Lisäpikanäppäimet', resetVisualToolkit: 'Palauta visuaaliset työkalut', resetIssue: 'Palauta korostus',
    profiles: 'Saavutettavuusprofiilit', profileSeizure: 'Kohtausturvallinen', profileVision: 'Heikko näkö', profileAdhd: 'ADHD-ystävällinen', profileDyslexia: 'Lukihäiriö',
    align: 'Tasaa', voice: 'Ääni', altText: 'Vaihtoehtoinen teksti', noAltText: 'Vaihtoehtoinen teksti puuttuu'
  },
  cs: {
    accessibilityMenu: 'Nabídka přístupnosti', closeAccessibilityMenu: 'Zavřít nabídku přístupnosti', resetAllSettings: 'Obnovit všechna nastavení',
    screenReader: 'Číst nahlas', voiceCommand: 'Hlasový příkaz', textSpacing: 'Rozestupy textu', pauseAnimations: 'Pozastavit animace', hideImages: 'Skrýt obrázky',
    dyslexiaFriendly: 'Vhodné pro dyslexii', biggerCursor: 'Velký kurzor', lineHeight: 'Výška řádku', fontSelection: 'Výběr písma', colorFilter: 'Barevný filtr',
    textAlign: 'Zarovnání textu', textSize: 'Velikost textu', highContrast: 'Vysoký kontrast', default: 'Výchozí', screenReaderOn: 'Čtení nahlas zapnuto', screenReaderOff: 'Čtení nahlas vypnuto',
    voiceControlActivated: 'Hlasové ovládání aktivováno', notSupportedBrowser: 'není v tomto prohlížeči podporováno', close: 'Zavřít', reset: 'Obnovit',
    saturation: 'Sytost', navigatePageStructure: 'Navigace podle struktury stránky', landmarks: 'Orientační body', headings: 'Nadpisy', links: 'Odkazy',
    noItemsFound: 'Nebyly nalezeny žádné položky', focus: 'Zaměření', cursor: 'Kurzor', highlight: 'Zvýraznit', contrast: 'Kontrast', colorShift: 'Posun barev',
    animation: 'Animace', spacing: 'Rozestupy', font: 'Písmo', guide: 'Vodítko', window: 'Okno', images: 'Obrázky', showShortcuts: 'Zobrazit zkratky',
    additionalShortcuts: 'Další klávesové zkratky', resetVisualToolkit: 'Obnovit vizuální nástroje', resetIssue: 'Obnovit zvýraznění',
    profiles: 'Profily přístupnosti', profileSeizure: 'Bezpečné při epilepsii', profileVision: 'Slabý zrak', profileAdhd: 'Vhodné pro ADHD', profileDyslexia: 'Dyslexie',
    align: 'Zarovnat', voice: 'Hlas', altText: 'Alternativní text', noAltText: 'Chybí alternativní text'
  },
  hu: {
    accessibilityMenu: 'Akadálymentesítési menü', closeAccessibilityMenu: 'Akadálymentesítési menü bezárása', resetAllSettings: 'Összes beállítás visszaállítása',
    screenReader: 'Felolvasás', voiceCommand: 'Hangparancs', textSpacing: 'Szövegköz', pauseAnimations: 'Animációk szüneteltetése', hideImages: 'Képek elrejtése',
    dyslexiaFriendly: 'Diszlexiabarát', biggerCursor: 'Nagy kurzor', lineHeight: 'Sormagasság', fontSelection: 'Betűtípus választás', colorFilter: 'Színszűrő',
    textAlign: 'Szövegigazítás', textSize: 'Szövegméret', highContrast: 'Nagy kontraszt', default: 'Alapértelmezett', screenReaderOn: 'Felolvasás bekapcsolva', screenReaderOff: 'Felolvasás kikapcsolva',
    voiceControlActivated: 'Hangvezérlés aktiválva', notSupportedBrowser: 'nem támogatott ebben a böngészőben', close: 'Bezárás', reset: 'Visszaállítás',
    saturation: 'Telítettség', navigatePageStructure: 'Navigálás az oldal szerkezete szerint', landmarks: 'Tájékozódási pontok', headings: 'Címsorok', links: 'Hivatkozások',
    noItemsFound: 'Nincs találat', focus: 'Fókusz', cursor: 'Kurzor', highlight: 'Kiemelés', contrast: 'Kontraszt', colorShift: 'Színeltolás',
    animation: 'Animáció', spacing: 'Térköz', font: 'Betűtípus', guide: 'Olvasóvonal', window: 'Olvasóablak', images: 'Képek', showShortcuts: 'Gyorsbillentyűk megjelenítése',
    additionalShortcuts: 'További gyorsbillentyűk', resetVisualToolkit: 'Vizuális eszközök visszaállítása', resetIssue: 'Kiemelés visszaállítása',
    profiles: 'Akadálymentesítési profilok', profileSeizure: 'Rohambiztos', profileVision: 'Gyengénlátó', profileAdhd: 'ADHD-barát', profileDyslexia: 'Diszlexia',
    align: 'Igazítás', voice: 'Hang', altText: 'Alternatív szöveg', noAltText: 'Hiányzó alternatív szöveg'
  },
  ro: {
    accessibilityMenu: 'Meniu de accesibilitate', closeAccessibilityMenu: 'Închide meniul de accesibilitate', resetAllSettings: 'Resetează toate setările',
    screenReader: 'Citește cu voce tare', voiceCommand: 'Comandă vocală', textSpacing: 'Spațiere text', pauseAnimations: 'Pauză animații', hideImages: 'Ascunde imaginile',
    dyslexiaFriendly: 'Prietenos cu dislexia', biggerCursor: 'Cursor mare', lineHeight: 'Înălțimea rândului', fontSelection: 'Selectare font', colorFilter: 'Filtru de culoare',
    textAlign: 'Aliniere text', textSize: 'Dimensiune text', highContrast: 'Contrast ridicat', default: 'Implicit', screenReaderOn: 'Citire cu voce tare activată', screenReaderOff: 'Citire cu voce tare dezactivată',
    voiceControlActivated: 'Control vocal activat', notSupportedBrowser: 'nu este acceptat în acest browser', close: 'Închide', reset: 'Resetează',
    saturation: 'Saturație', navigatePageStructure: 'Navigare după structura paginii', landmarks: 'Repere', headings: 'Titluri', links: 'Linkuri',
    noItemsFound: 'Nu s-au găsit elemente', focus: 'Focalizare', cursor: 'Cursor', highlight: 'Evidențiere', contrast: 'Contrast', colorShift: 'Schimbare culoare',
    animation: 'Animație', spacing: 'Spațiere', font: 'Font', guide: 'Ghid', window: 'Fereastră', images: 'Imagini', showShortcuts: 'Afișează scurtăturile',
    additionalShortcuts: 'Scurtături suplimentare de tastatură', resetVisualToolkit: 'Resetează instrumentele vizuale', resetIssue: 'Resetează evidențierea',
    profiles: 'Profiluri de accesibilitate', profileSeizure: 'Sigur pentru epilepsie', profileVision: 'Vedere slabă', profileAdhd: 'Prietenos cu ADHD', profileDyslexia: 'Dislexie',
    align: 'Aliniază', voice: 'Voce', altText: 'Text alternativ', noAltText: 'Lipsește textul alternativ'
  },
  he: {
    accessibilityMenu: 'תפריט נגישות', closeAccessibilityMenu: 'סגור תפריט נגישות', resetAllSettings: 'איפוס כל ההגדרות',
    screenReader: 'הקראה', voiceCommand: 'פקודה קולית', textSpacing: 'ריווח טקסט', pauseAnimations: 'השהיית אנימציות', hideImages: 'הסתרת תמונות',
    dyslexiaFriendly: 'ידידותי לדיסלקציה', biggerCursor: 'סמן גדול', lineHeight: 'גובה שורה', fontSelection: 'בחירת גופן', colorFilter: 'מסנן צבע',
    textAlign: 'יישור טקסט', textSize: 'גודל טקסט', highContrast: 'ניגודיות גבוהה', default: 'ברירת מחדל', screenReaderOn: 'הקראה פועלת', screenReaderOff: 'הקראה כבויה',
    voiceControlActivated: 'שליטה קולית הופעלה', notSupportedBrowser: 'אינו נתמך בדפדפן זה', close: 'סגור', reset: 'איפוס',
    saturation: 'רוויה', navigatePageStructure: 'ניווט לפי מבנה העמוד', landmarks: 'ציוני דרך', headings: 'כותרות', links: 'קישורים',
    noItemsFound: 'לא נמצאו פריטים', focus: 'מיקוד', cursor: 'סמן', highlight: 'הדגשה', contrast: 'ניגודיות', colorShift: 'הסטת צבע',
    animation: 'אנימציה', spacing: 'ריווח', font: 'גופן', guide: 'סרגל קריאה', window: 'חלון קריאה', images: 'תמונות', showShortcuts: 'הצג קיצורי דרך',
    additionalShortcuts: 'קיצורי מקלדת נוספים', resetVisualToolkit: 'איפוס כלים חזותיים', resetIssue: 'איפוס הדגשה',
    profiles: 'פרופילי נגישות', profileSeizure: 'בטוח לאפילפסיה', profileVision: 'ראייה לקויה', profileAdhd: 'ידידותי ל-ADHD', profileDyslexia: 'דיסלקציה',
    align: 'יישור', voice: 'קול', altText: 'טקסט חלופי', noAltText: 'חסר טקסט חלופי'
  },
  fa: {
    accessibilityMenu: 'منوی دسترس‌پذیری', closeAccessibilityMenu: 'بستن منوی دسترس‌پذیری', resetAllSettings: 'بازنشانی همه تنظیمات',
    screenReader: 'خواندن با صدای بلند', voiceCommand: 'فرمان صوتی', textSpacing: 'فاصله متن', pauseAnimations: 'توقف انیمیشن‌ها', hideImages: 'پنهان کردن تصاویر',
    dyslexiaFriendly: 'مناسب نارساخوانی', biggerCursor: 'نشانگر بزرگ', lineHeight: 'ارتفاع خط', fontSelection: 'انتخاب قلم', colorFilter: 'فیلتر رنگ',
    textAlign: 'تراز متن', textSize: 'اندازه متن', highContrast: 'کنتراست بالا', default: 'پیش‌فرض', screenReaderOn: 'خواندن با صدای بلند روشن', screenReaderOff: 'خواندن با صدای بلند خاموش',
    voiceControlActivated: 'کنترل صوتی فعال شد', notSupportedBrowser: 'در این مرورگر پشتیبانی نمی‌شود', close: 'بستن', reset: 'بازنشانی',
    saturation: 'اشباع رنگ', navigatePageStructure: 'پیمایش بر اساس ساختار صفحه', landmarks: 'نشانه‌ها', headings: 'سرفصل‌ها', links: 'پیوندها',
    noItemsFound: 'موردی یافت نشد', focus: 'تمرکز', cursor: 'نشانگر', highlight: 'برجسته‌سازی', contrast: 'کنتراست', colorShift: 'تغییر رنگ',
    animation: 'انیمیشن', spacing: 'فاصله', font: 'قلم', guide: 'خط‌کش خواندن', window: 'پنجره خواندن', images: 'تصاویر', showShortcuts: 'نمایش میانبرها',
    additionalShortcuts: 'میانبرهای بیشتر صفحه‌کلید', resetVisualToolkit: 'بازنشانی ابزارهای بصری', resetIssue: 'بازنشانی برجسته‌سازی',
    profiles: 'نمایه‌های دسترس‌پذیری', profileSeizure: 'ایمن برای صرع', profileVision: 'کم‌بینایی', profileAdhd: 'مناسب ADHD', profileDyslexia: 'نارساخوانی',
    align: 'تراز', voice: 'صدا', altText: 'متن جایگزین', noAltText: 'متن جایگزین ندارد'
  },
  ur: {
    accessibilityMenu: 'رسائی مینو', closeAccessibilityMenu: 'رسائی مینو بند کریں', resetAllSettings: 'تمام ترتیبات ری سیٹ کریں',
    screenReader: 'بلند آواز میں پڑھیں', voiceCommand: 'صوتی حکم', textSpacing: 'متن کا فاصلہ', pauseAnimations: 'اینیمیشن روکیں', hideImages: 'تصاویر چھپائیں',
    dyslexiaFriendly: 'ڈسلیکسیا دوست', biggerCursor: 'بڑا کرسر', lineHeight: 'سطر کی اونچائی', fontSelection: 'فونٹ کا انتخاب', colorFilter: 'رنگ فلٹر',
    textAlign: 'متن کی سیدھ', textSize: 'متن کا سائز', highContrast: 'اعلی کنٹراسٹ', default: 'طے شدہ', screenReaderOn: 'بلند خوانی آن', screenReaderOff: 'بلند خوانی آف',
    voiceControlActivated: 'صوتی کنٹرول فعال', notSupportedBrowser: 'اس براؤزر میں معاون نہیں', close: 'بند کریں', reset: 'ری سیٹ',
    saturation: 'رنگت', navigatePageStructure: 'صفحے کی ساخت سے نیویگیٹ کریں', landmarks: 'نشانات', headings: 'سرخیاں', links: 'روابط',
    noItemsFound: 'کوئی آئٹم نہیں ملا', focus: 'فوکس', cursor: 'کرسر', highlight: 'نمایاں کریں', contrast: 'کنٹراسٹ', colorShift: 'رنگ کی تبدیلی',
    animation: 'اینیمیشن', spacing: 'فاصلہ', font: 'فونٹ', guide: 'رہنما', window: 'ونڈو', images: 'تصاویر', showShortcuts: 'شارٹ کٹ دکھائیں',
    additionalShortcuts: 'اضافی کی بورڈ شارٹ کٹس', resetVisualToolkit: 'بصری ٹول کٹ ری سیٹ کریں', resetIssue: 'نمایاں کاری ری سیٹ کریں',
    profiles: 'رسائی پروفائلز', profileSeizure: 'دورے سے محفوظ', profileVision: 'کمزور بینائی', profileAdhd: 'ADHD دوست', profileDyslexia: 'ڈسلیکسیا',
    align: 'سیدھ کریں', voice: 'آواز', altText: 'متبادل متن', noAltText: 'متبادل متن موجود نہیں'
  },
  pa: {
    accessibilityMenu: 'ਪਹੁੰਚਯੋਗਤਾ ਮੀਨੂ', closeAccessibilityMenu: 'ਪਹੁੰਚਯੋਗਤਾ ਮੀਨੂ ਬੰਦ ਕਰੋ', resetAllSettings: 'ਸਾਰੀਆਂ ਸੈਟਿੰਗਾਂ ਰੀਸੈਟ ਕਰੋ',
    screenReader: 'ਉੱਚੀ ਪੜ੍ਹੋ', voiceCommand: 'ਆਵਾਜ਼ ਕਮਾਂਡ', textSpacing: 'ਟੈਕਸਟ ਸਪੇਸਿੰਗ', pauseAnimations: 'ਐਨੀਮੇਸ਼ਨ ਰੋਕੋ', hideImages: 'ਤਸਵੀਰਾਂ ਲੁਕਾਓ',
    dyslexiaFriendly: 'ਡਿਸਲੈਕਸੀਆ ਅਨੁਕੂਲ', biggerCursor: 'ਵੱਡਾ ਕਰਸਰ', lineHeight: 'ਲਾਈਨ ਉਚਾਈ', fontSelection: 'ਫੌਂਟ ਚੋਣ', colorFilter: 'ਰੰਗ ਫਿਲਟਰ',
    textAlign: 'ਟੈਕਸਟ ਅਲਾਈਨਮੈਂਟ', textSize: 'ਟੈਕਸਟ ਆਕਾਰ', highContrast: 'ਉੱਚ ਕੰਟ੍ਰਾਸਟ', default: 'ਡਿਫੌਲਟ', screenReaderOn: 'ਉੱਚੀ ਪੜ੍ਹਨਾ ਚਾਲੂ', screenReaderOff: 'ਉੱਚੀ ਪੜ੍ਹਨਾ ਬੰਦ',
    voiceControlActivated: 'ਆਵਾਜ਼ ਕੰਟਰੋਲ ਸਰਗਰਮ', notSupportedBrowser: 'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸਮਰਥਿਤ ਨਹੀਂ', close: 'ਬੰਦ ਕਰੋ', reset: 'ਰੀਸੈਟ',
    saturation: 'ਸੰਤ੍ਰਿਪਤਾ', navigatePageStructure: 'ਪੰਨਾ ਢਾਂਚੇ ਅਨੁਸਾਰ ਨੈਵੀਗੇਟ ਕਰੋ', landmarks: 'ਲੈਂਡਮਾਰਕ', headings: 'ਸਿਰਲੇਖ', links: 'ਲਿੰਕ',
    noItemsFound: 'ਕੋਈ ਆਈਟਮ ਨਹੀਂ ਮਿਲੀ', focus: 'ਫੋਕਸ', cursor: 'ਕਰਸਰ', highlight: 'ਹਾਈਲਾਈਟ', contrast: 'ਕੰਟ੍ਰਾਸਟ', colorShift: 'ਰੰਗ ਤਬਦੀਲੀ',
    animation: 'ਐਨੀਮੇਸ਼ਨ', spacing: 'ਸਪੇਸਿੰਗ', font: 'ਫੌਂਟ', guide: 'ਗਾਈਡ', window: 'ਵਿੰਡੋ', images: 'ਤਸਵੀਰਾਂ', showShortcuts: 'ਸ਼ਾਰਟਕੱਟ ਦਿਖਾਓ',
    additionalShortcuts: 'ਵਾਧੂ ਕੀਬੋਰਡ ਸ਼ਾਰਟਕੱਟ', resetVisualToolkit: 'ਵਿਜ਼ੁਅਲ ਟੂਲਕਿੱਟ ਰੀਸੈਟ ਕਰੋ', resetIssue: 'ਹਾਈਲਾਈਟ ਰੀਸੈਟ ਕਰੋ',
    profiles: 'ਪਹੁੰਚਯੋਗਤਾ ਪ੍ਰੋਫਾਈਲ', profileSeizure: 'ਦੌਰਾ-ਸੁਰੱਖਿਅਤ', profileVision: 'ਘੱਟ ਨਜ਼ਰ', profileAdhd: 'ADHD ਅਨੁਕੂਲ', profileDyslexia: 'ਡਿਸਲੈਕਸੀਆ',
    align: 'ਅਲਾਈਨ ਕਰੋ', voice: 'ਆਵਾਜ਼', altText: 'ਵਿਕਲਪਿਕ ਟੈਕਸਟ', noAltText: 'ਵਿਕਲਪਿਕ ਟੈਕਸਟ ਨਹੀਂ ਹੈ'
  },
  mr: {
    accessibilityMenu: 'प्रवेशयोग्यता मेनू', closeAccessibilityMenu: 'प्रवेशयोग्यता मेनू बंद करा', resetAllSettings: 'सर्व सेटिंग्ज रीसेट करा',
    screenReader: 'मोठ्याने वाचा', voiceCommand: 'व्हॉइस कमांड', textSpacing: 'मजकूर अंतर', pauseAnimations: 'अ‍ॅनिमेशन थांबवा', hideImages: 'प्रतिमा लपवा',
    dyslexiaFriendly: 'डिस्लेक्सिया-अनुकूल', biggerCursor: 'मोठा कर्सर', lineHeight: 'ओळ उंची', fontSelection: 'फॉन्ट निवड', colorFilter: 'रंग फिल्टर',
    textAlign: 'मजकूर संरेखन', textSize: 'मजकूर आकार', highContrast: 'उच्च कॉन्ट्रास्ट', default: 'डीफॉल्ट', screenReaderOn: 'मोठ्याने वाचन सुरू', screenReaderOff: 'मोठ्याने वाचन बंद',
    voiceControlActivated: 'व्हॉइस नियंत्रण सक्रिय', notSupportedBrowser: 'या ब्राउझरमध्ये समर्थित नाही', close: 'बंद करा', reset: 'रीसेट',
    saturation: 'संपृक्तता', navigatePageStructure: 'पृष्ठ रचनेनुसार नेव्हिगेट करा', landmarks: 'लँडमार्क', headings: 'शीर्षके', links: 'दुवे',
    noItemsFound: 'कोणतेही आयटम आढळले नाहीत', focus: 'फोकस', cursor: 'कर्सर', highlight: 'हायलाइट', contrast: 'कॉन्ट्रास्ट', colorShift: 'रंग बदल',
    animation: 'अ‍ॅनिमेशन', spacing: 'अंतर', font: 'फॉन्ट', guide: 'मार्गदर्शक', window: 'विंडो', images: 'प्रतिमा', showShortcuts: 'शॉर्टकट दाखवा',
    additionalShortcuts: 'अतिरिक्त कीबोर्ड शॉर्टकट', resetVisualToolkit: 'व्हिज्युअल टूलकिट रीसेट करा', resetIssue: 'हायलाइट रीसेट करा',
    profiles: 'प्रवेशयोग्यता प्रोफाइल', profileSeizure: 'फेफरे-सुरक्षित', profileVision: 'कमी दृष्टी', profileAdhd: 'ADHD अनुकूल', profileDyslexia: 'डिस्लेक्सिया',
    align: 'संरेखित करा', voice: 'आवाज', altText: 'पर्यायी मजकूर', noAltText: 'पर्यायी मजकूर नाही'
  },
  te: {
    accessibilityMenu: 'యాక్సెసిబిలిటీ మెనూ', closeAccessibilityMenu: 'యాక్సెసిబిలిటీ మెనూ మూసివేయండి', resetAllSettings: 'అన్ని సెట్టింగ్‌లను రీసెట్ చేయండి',
    screenReader: 'బిగ్గరగా చదవండి', voiceCommand: 'వాయిస్ కమాండ్', textSpacing: 'టెక్స్ట్ స్పేసింగ్', pauseAnimations: 'యానిమేషన్‌లను ఆపండి', hideImages: 'చిత్రాలను దాచండి',
    dyslexiaFriendly: 'డిస్లెక్సియా అనుకూలం', biggerCursor: 'పెద్ద కర్సర్', lineHeight: 'లైన్ ఎత్తు', fontSelection: 'ఫాంట్ ఎంపిక', colorFilter: 'రంగు ఫిల్టర్',
    textAlign: 'టెక్స్ట్ అమరిక', textSize: 'టెక్స్ట్ పరిమాణం', highContrast: 'అధిక కాంట్రాస్ట్', default: 'డిఫాల్ట్', screenReaderOn: 'బిగ్గరగా చదవడం ఆన్', screenReaderOff: 'బిగ్గరగా చదవడం ఆఫ్',
    voiceControlActivated: 'వాయిస్ నియంత్రణ సక్రియం', notSupportedBrowser: 'ఈ బ్రౌజర్‌లో మద్దతు లేదు', close: 'మూసివేయండి', reset: 'రీసెట్',
    saturation: 'సంతృప్తత', navigatePageStructure: 'పేజీ నిర్మాణం ద్వారా నావిగేట్ చేయండి', landmarks: 'ల్యాండ్‌మార్క్‌లు', headings: 'శీర్షికలు', links: 'లింక్‌లు',
    noItemsFound: 'అంశాలు కనుగొనబడలేదు', focus: 'ఫోకస్', cursor: 'కర్సర్', highlight: 'హైలైట్', contrast: 'కాంట్రాస్ట్', colorShift: 'రంగు మార్పు',
    animation: 'యానిమేషన్', spacing: 'స్పేసింగ్', font: 'ఫాంట్', guide: 'గైడ్', window: 'విండో', images: 'చిత్రాలు', showShortcuts: 'షార్ట్‌కట్‌లను చూపించండి',
    additionalShortcuts: 'అదనపు కీబోర్డ్ షార్ట్‌కట్‌లు', resetVisualToolkit: 'విజువల్ టూల్‌కిట్ రీసెట్ చేయండి', resetIssue: 'హైలైట్ రీసెట్ చేయండి',
    profiles: 'యాక్సెసిబిలిటీ ప్రొఫైల్‌లు', profileSeizure: 'మూర్ఛ-సురక్షితం', profileVision: 'తక్కువ దృష్టి', profileAdhd: 'ADHD అనుకూలం', profileDyslexia: 'డిస్లెక్సియా',
    align: 'అమర్చండి', voice: 'వాయిస్', altText: 'ప్రత్యామ్నాయ వచనం', noAltText: 'ప్రత్యామ్నాయ వచనం లేదు'
  },
  ta: {
    accessibilityMenu: 'அணுகல்தன்மை மெனு', closeAccessibilityMenu: 'அணுகல்தன்மை மெனுவை மூடு', resetAllSettings: 'எல்லா அமைப்புகளையும் மீட்டமை',
    screenReader: 'உரக்கப் படி', voiceCommand: 'குரல் கட்டளை', textSpacing: 'உரை இடைவெளி', pauseAnimations: 'அசைவூட்டங்களை நிறுத்து', hideImages: 'படங்களை மறை',
    dyslexiaFriendly: 'டிஸ்லெக்ஸியா நட்பு', biggerCursor: 'பெரிய கர்சர்', lineHeight: 'வரி உயரம்', fontSelection: 'எழுத்துரு தேர்வு', colorFilter: 'நிற வடிப்பான்',
    textAlign: 'உரை சீரமைப்பு', textSize: 'உரை அளவு', highContrast: 'அதிக மாறுபாடு', default: 'இயல்புநிலை', screenReaderOn: 'உரக்கப் படித்தல் இயக்கம்', screenReaderOff: 'உரக்கப் படித்தல் நிறுத்தம்',
    voiceControlActivated: 'குரல் கட்டுப்பாடு செயல்படுத்தப்பட்டது', notSupportedBrowser: 'இந்த உலாவியில் ஆதரிக்கப்படவில்லை', close: 'மூடு', reset: 'மீட்டமை',
    saturation: 'நிறச்செறிவு', navigatePageStructure: 'பக்க அமைப்பின்படி வழிசெலுத்து', landmarks: 'அடையாளங்கள்', headings: 'தலைப்புகள்', links: 'இணைப்புகள்',
    noItemsFound: 'உருப்படிகள் எதுவும் இல்லை', focus: 'குவியம்', cursor: 'கர்சர்', highlight: 'தனிப்படுத்து', contrast: 'மாறுபாடு', colorShift: 'நிற மாற்றம்',
    animation: 'அசைவூட்டம்', spacing: 'இடைவெளி', font: 'எழுத்துரு', guide: 'வழிகாட்டி', window: 'சாளரம்', images: 'படங்கள்', showShortcuts: 'குறுக்குவழிகளைக் காட்டு',
    additionalShortcuts: 'கூடுதல் விசைப்பலகை குறுக்குவழிகள்', resetVisualToolkit: 'காட்சி கருவிகளை மீட்டமை', resetIssue: 'தனிப்படுத்தலை மீட்டமை',
    profiles: 'அணுகல்தன்மை சுயவிவரங்கள்', profileSeizure: 'வலிப்பு-பாதுகாப்பு', profileVision: 'குறைந்த பார்வை', profileAdhd: 'ADHD நட்பு', profileDyslexia: 'டிஸ்லெக்ஸியா',
    align: 'சீரமை', voice: 'குரல்', altText: 'மாற்று உரை', noAltText: 'மாற்று உரை இல்லை'
  },
  ms: {
    accessibilityMenu: 'Menu Kebolehcapaian', closeAccessibilityMenu: 'Tutup menu kebolehcapaian', resetAllSettings: 'Tetapkan semula semua tetapan',
    screenReader: 'Baca Kuat', voiceCommand: 'Arahan Suara', textSpacing: 'Jarak Teks', pauseAnimations: 'Jeda Animasi', hideImages: 'Sembunyikan Imej',
    dyslexiaFriendly: 'Mesra Disleksia', biggerCursor: 'Kursor Besar', lineHeight: 'Tinggi Baris', fontSelection: 'Pilihan Fon', colorFilter: 'Penapis Warna',
    textAlign: 'Penjajaran Teks', textSize: 'Saiz Teks', highContrast: 'Kontras Tinggi', default: 'Lalai', screenReaderOn: 'Baca kuat dihidupkan', screenReaderOff: 'Baca kuat dimatikan',
    voiceControlActivated: 'Kawalan suara diaktifkan', notSupportedBrowser: 'tidak disokong dalam pelayar ini', close: 'Tutup', reset: 'Tetapkan semula',
    saturation: 'Ketepuan', navigatePageStructure: 'Navigasi mengikut struktur halaman', landmarks: 'Mercu tanda', headings: 'Tajuk', links: 'Pautan',
    noItemsFound: 'Tiada item dijumpai', focus: 'Fokus', cursor: 'Kursor', highlight: 'Serlahkan', contrast: 'Kontras', colorShift: 'Anjakan Warna',
    animation: 'Animasi', spacing: 'Jarak', font: 'Fon', guide: 'Panduan', window: 'Tetingkap', images: 'Imej', showShortcuts: 'Tunjukkan pintasan',
    additionalShortcuts: 'Pintasan papan kekunci tambahan', resetVisualToolkit: 'Tetapkan semula kit visual', resetIssue: 'Tetapkan semula serlahan',
    profiles: 'Profil Kebolehcapaian', profileSeizure: 'Selamat Sawan', profileVision: 'Penglihatan Terhad', profileAdhd: 'Mesra ADHD', profileDyslexia: 'Disleksia',
    align: 'Jajarkan', voice: 'Suara', altText: 'Teks Alternatif', noAltText: 'Tiada teks alternatif'
  },
  fil: {
    accessibilityMenu: 'Menu ng Accessibility', closeAccessibilityMenu: 'Isara ang menu ng accessibility', resetAllSettings: 'I-reset ang lahat ng setting',
    screenReader: 'Basahin nang Malakas', voiceCommand: 'Voice Command', textSpacing: 'Espasyo ng Teksto', pauseAnimations: 'I-pause ang mga Animation', hideImages: 'Itago ang mga Larawan',
    dyslexiaFriendly: 'Angkop sa Dyslexia', biggerCursor: 'Malaking Cursor', lineHeight: 'Taas ng Linya', fontSelection: 'Pagpili ng Font', colorFilter: 'Filter ng Kulay',
    textAlign: 'Pagkakahanay ng Teksto', textSize: 'Laki ng Teksto', highContrast: 'Mataas na Contrast', default: 'Default', screenReaderOn: 'Naka-on ang pagbasa nang malakas', screenReaderOff: 'Naka-off ang pagbasa nang malakas',
    voiceControlActivated: 'Naka-activate ang voice control', notSupportedBrowser: 'ay hindi suportado sa browser na ito', close: 'Isara', reset: 'I-reset',
    saturation: 'Saturation', navigatePageStructure: 'Mag-navigate ayon sa istruktura ng pahina', landmarks: 'Mga Landmark', headings: 'Mga Heading', links: 'Mga Link',
    noItemsFound: 'Walang nahanap na item', focus: 'Focus', cursor: 'Cursor', highlight: 'I-highlight', contrast: 'Contrast', colorShift: 'Pagbabago ng Kulay',
    animation: 'Animation', spacing: 'Espasyo', font: 'Font', guide: 'Gabay', window: 'Window', images: 'Mga Larawan', showShortcuts: 'Ipakita ang mga shortcut',
    additionalShortcuts: 'Karagdagang keyboard shortcut', resetVisualToolkit: 'I-reset ang visual toolkit', resetIssue: 'I-reset ang highlight',
    profiles: 'Mga Profile ng Accessibility', profileSeizure: 'Ligtas sa Seizure', profileVision: 'Mahina ang Paningin', profileAdhd: 'Angkop sa ADHD', profileDyslexia: 'Dyslexia',
    align: 'Ihanay', voice: 'Boses', altText: 'Alt Text', noAltText: 'Walang alt text'
  }
};


// ===========================================
// LANGUAGE DETECTION
// Priority: ENABLESTACK_CONFIG.language > <html lang> > navigator.language > 'en'
// Any string missing from a language falls back to English automatically.
// ===========================================
function detectWidgetLanguage() {
  let requested = 'en';
  try {
    requested = (window.ENABLESTACK_CONFIG && window.ENABLESTACK_CONFIG.language) ||
      document.documentElement.getAttribute('lang') ||
      navigator.language || 'en';
  } catch (e) { requested = 'en'; }
  requested = String(requested).toLowerCase().trim();
  // Legacy / regional aliases
  const aliases = { iw: 'he', in: 'id', nb: 'no', nn: 'no' };
  if (TRANSLATIONS[requested]) return requested;
  if (aliases[requested] && TRANSLATIONS[aliases[requested]]) return aliases[requested];
  const base = requested.split(/[-_]/)[0];
  if (TRANSLATIONS[base]) return base;
  if (aliases[base] && TRANSLATIONS[aliases[base]]) return aliases[base];
  return 'en';
}

const currentLanguage = detectWidgetLanguage();

// Map each UI language to a full BCP-47 locale for speech synthesis / recognition.
const SPEECH_LOCALES = {
  en: 'en-US', es: 'es-ES', fr: 'fr-FR', de: 'de-DE', it: 'it-IT', pt: 'pt-BR',
  hi: 'hi-IN', ru: 'ru-RU', zh: 'zh-CN', ja: 'ja-JP', ar: 'ar-SA', ko: 'ko-KR',
  nl: 'nl-NL', pl: 'pl-PL', tr: 'tr-TR', sv: 'sv-SE', he: 'he-IL', fa: 'fa-IR',
  id: 'id-ID', th: 'th-TH', vi: 'vi-VN', el: 'el-GR', cs: 'cs-CZ', hu: 'hu-HU',
  ro: 'ro-RO', da: 'da-DK', fi: 'fi-FI', no: 'nb-NO', bn: 'bn-IN'
};
const SPEECH_LANG = SPEECH_LOCALES[currentLanguage] || (currentLanguage === 'en' ? 'en-US' : currentLanguage);

// Languages that read right-to-left — the panel flips its layout for these.
const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur'];
const IS_RTL = RTL_LANGUAGES.indexOf(currentLanguage) !== -1;

function getTranslation(key) {
  // 1. Explicit per-string override via ENABLESTACK_CONFIG.lang
  try {
    const userLang = window.ENABLESTACK_CONFIG && window.ENABLESTACK_CONFIG.lang;
    if (userLang && typeof userLang[key] === 'string') return userLang[key];
  } catch (e) { /* ignore */ }
  // 2. Detected language, 3. English fallback, 4. raw key
  const table = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  return table[key] || TRANSLATIONS.en[key] || key;
}

// ===========================================
// CONFIGURATION VARIABLES
// ===========================================

// Default configuration - can be overridden by user
const DEFAULT_WIDGET_CONFIG = {
  // Core Features
  enableHighContrast: true,
  enableBiggerText: true,
  enableTextSpacing: true, // Now has 3 levels
  enablePauseAnimations: true, // Enhanced to include reduced motion features
  enableHideImages: true,
  enableDyslexiaFont: true,
  enableBiggerCursor: true,
  enableLineHeight: true, // Now has 3 levels (2em, 3em, 4em)
  enableTextAlign: true,

  // Advanced Features
  enableScreenReader: true,
  enableVoiceControl: true,
  enableFontSelection: true,
  enableColorFilter: true,
  enableFocusIndicator: true,
  enableHighlightLinks: true,
  enableReadingGuide: true,
  enableReadingWindow: true,
  enableSaturation: true,
  enableAltText: true,
  enableProfiles: true,

  // Enhanced features (added v1.3.0)
  enableHighlightHover: true,
  enableEnlargeButtons: true,
  enableMuteMedia: true,
  enableReadableFont: true,
  enablePageMagnifier: true,
  enableTextMagnifier: true,
  enableReadFocus: true,
  enableVirtualKeyboard: true,
  enableReadableMode: true,
  enableCustomColor: true,
  enableDictionary: true,          // NOTE: makes an external call to api.dictionaryapi.dev on demand

  // Optional footer link (leave empty to hide the link)
  accessibilityStatementUrl: '',   // e.g. 'https://example.com/accessibility'

  // Launcher button icon — chosen once at integration time (npm prompt or
  // WordPress admin). One of: 'default', 'wheelchair', 'person', 'eye'.
  icon: 'default',

  // Widget Styling
  widgetWidth: '340px',
  widgetPosition: {
    side: 'left', // 'left' or 'right'
    right: '20px',
    left: '20px',
    bottom: '20px'
  },

  // Colors — EnableUser brand purple (#54467D). Shades are derived from the
  // primary; change just `primary` (or pass ENABLESTACK_CONFIG.colors.primary)
  // to re-theme the whole widget.
  colors: {
    primary: '#54467d',            // Accent/active color — brand purple
    primaryBright: '#736794',      // Gradient start (lighter purple)  = lighten(primary, 0.18)
    primaryDeep: '#3b3158',        // Gradient end (deeper purple)     = darken(primary, 0.30)
    brandGradient: 'linear-gradient(135deg, #736794 0%, #3b3158 100%)',
    secondary: '#ffffff',         // Icon/text color on the accent (launcher button, active chips)
    optionBg: '#f7f4fc',         // Option/card background — light lavender (light theme)
    optionText: '#2c2542',       // Option/card text color — dark ink
    optionIcon: '#54467d'         // Option/card icon color — brand purple
  },

  // Button styling
  button: {
    size: '55px',
    borderRadius: '100px',
    iconSize: '40px',
    shadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  },

  // Menu styling
  menu: {
    headerHeight: '70px',
    padding: '0 10px 10px 10px',
    optionPadding: '20px 10px',
    optionMargin: '10px',
    borderRadius: '8px',
    fontSize: '16px',
    titleFontSize: '16px',
    closeButtonSize: '44px'
  },

  // Typography
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '17px',
    titleFontSize: '22px',
    titleFontWeight: '700',
    lineHeight: '1'
  },

  // Animation
  animation: {
    transition: '0.2s',
    hoverScale: '1.05'
  },

  // Language/Text Configuration
  lang: {
    accessibilityMenu: 'Accessibility Menu',
    closeAccessibilityMenu: 'Close Accessibility Menu',
    accessibilityTools: 'Accessibility Tools',
    resetAllSettings: 'Reset All Settings',
    screenReader: 'Screen Reader',
    voiceCommand: 'Voice Command',
    textSpacing: 'Text Spacing',
    pauseAnimations: 'Pause Animations',
    hideImages: 'Hide Images',
    dyslexiaFriendly: 'Dyslexia Friendly',
    biggerCursor: 'Bigger Cursor',
    lineHeight: 'Line Height',
    fontSelection: 'Font Selection',
    colorFilter: 'Color Filter',
    textAlign: 'Text Align',
    textSize: 'Text Size',
    highContrast: 'High Contrast',
    defaultFont: 'Default Font',
    noFilter: 'No Filter',
    default: 'Default',
    screenReaderOn: 'Screen reader on',
    screenReaderOff: 'Screen reader off',
    voiceControlActivated: 'Voice control activated',
    notSupportedBrowser: 'is not supported in this browser',
    close: 'Close',
    reset: 'Reset'
  },

  // Read Aloud (speech synthesis) tuning
  speech: {
    rate: 1,   // speaking rate, 0.1–10
    pitch: 1   // voice pitch, 0–2
  },

  // Voice Command Configuration - built-in sets for major languages.
  // Developers can add/override locales; unlisted languages fall back to English.
  voiceCommands: {
    en: {
      showMenu: ['show menu', 'open menu', 'accessibility menu', 'access menu'],
      highContrast: ['high contrast', 'contrast', 'dark mode', 'increase contrast'],
      biggerText: ['bigger text', 'large text', 'text size', 'increase text', 'bigger', 'larger text', 'text bigger', 'make text bigger', 'enlarge text'],
      textSpacing: ['text spacing', 'spacing', 'letter spacing', 'text space'],
      pauseAnimations: ['pause animations', 'stop animations', 'disable animations', 'no animations'],
      hideImages: ['hide images', 'remove images', 'no images'],
      biggerCursor: ['bigger cursor', 'large cursor', 'cursor size', 'big cursor'],
      lineHeight: ['line height', 'line spacing', 'space between lines', 'line space'],
      textAlign: ['align text', 'text align', 'center text', 'alignment'],
      saturation: ['saturation', 'color saturation', 'saturate', 'desaturate', 'grayscale'],
      fontSelection: ['font selection', 'change font', 'select font', 'font', 'dyslexia font', 'readable font'],
      colorFilter: ['color filter', 'color blind', 'colorblind', 'filter'],
      screenReader: ['screen reader', 'read aloud', 'voice reader'],
      voiceControl: ['voice command', 'voice control', 'voice commands'],
      showAltText: ['alt text', 'show alt text', 'image description', 'image descriptions'],
      resetAll: ['reset all', 'reset everything', 'clear all', 'reset settings', 'reset']
    },
    es: {
      showMenu: ['abrir menú', 'menú de accesibilidad', 'mostrar menú'],
      highContrast: ['alto contraste', 'contraste'],
      biggerText: ['texto más grande', 'agrandar texto', 'tamaño de texto', 'aumentar texto'],
      textSpacing: ['espaciado de texto', 'espaciado'],
      pauseAnimations: ['pausar animaciones', 'detener animaciones', 'sin animaciones'],
      hideImages: ['ocultar imágenes', 'quitar imágenes', 'sin imágenes'],
      biggerCursor: ['cursor más grande', 'cursor grande'],
      lineHeight: ['altura de línea', 'interlineado'],
      textAlign: ['alinear texto', 'alineación', 'centrar texto'],
      saturation: ['saturación', 'escala de grises', 'desaturar'],
      fontSelection: ['cambiar fuente', 'seleccionar fuente', 'fuente', 'fuente para dislexia'],
      colorFilter: ['filtro de color', 'daltónico', 'daltonismo'],
      screenReader: ['lector de pantalla', 'leer en voz alta'],
      voiceControl: ['control por voz', 'comando de voz'],
      showAltText: ['texto alternativo', 'mostrar texto alternativo', 'descripción de imagen'],
      resetAll: ['restablecer todo', 'reiniciar', 'restablecer', 'borrar todo']
    },
    fr: {
      showMenu: ['ouvrir le menu', "menu d'accessibilité", 'afficher le menu'],
      highContrast: ['contraste élevé', 'contraste'],
      biggerText: ['texte plus grand', 'agrandir le texte', 'taille du texte', 'augmenter le texte'],
      textSpacing: ['espacement du texte', 'espacement'],
      pauseAnimations: ['pause animations', 'arrêter les animations', 'suspendre les animations', 'sans animations'],
      hideImages: ['masquer les images', 'cacher les images', 'sans images'],
      biggerCursor: ['curseur plus grand', 'grand curseur'],
      lineHeight: ['hauteur de ligne', 'interligne'],
      textAlign: ['aligner le texte', 'alignement', 'centrer le texte'],
      saturation: ['saturation', 'niveaux de gris', 'désaturer'],
      fontSelection: ['changer de police', 'choisir la police', 'police', 'police dyslexie'],
      colorFilter: ['filtre de couleur', 'daltonien', 'daltonisme'],
      screenReader: ["lecteur d'écran", 'lecture à voix haute', 'lire à voix haute'],
      voiceControl: ['commande vocale', 'contrôle vocal'],
      showAltText: ['texte alternatif', 'afficher le texte alternatif', "description de l'image"],
      resetAll: ['tout réinitialiser', 'réinitialiser', 'effacer tout']
    },
    de: {
      showMenu: ['menü öffnen', 'barrierefreiheit menü', 'menü anzeigen'],
      highContrast: ['hoher kontrast', 'kontrast'],
      biggerText: ['größerer text', 'text vergrößern', 'textgröße', 'text größer'],
      textSpacing: ['zeichenabstand', 'abstand', 'textabstand'],
      pauseAnimations: ['animationen anhalten', 'animationen stoppen', 'keine animationen'],
      hideImages: ['bilder ausblenden', 'bilder verstecken', 'keine bilder'],
      biggerCursor: ['größerer cursor', 'großer cursor'],
      lineHeight: ['zeilenhöhe', 'zeilenabstand'],
      textAlign: ['text ausrichten', 'ausrichtung', 'text zentrieren'],
      saturation: ['sättigung', 'graustufen', 'entsättigen'],
      fontSelection: ['schrift ändern', 'schrift wählen', 'schrift', 'legasthenie schrift'],
      colorFilter: ['farbfilter', 'farbenblind', 'farbenblindheit'],
      screenReader: ['bildschirmleser', 'vorlesen', 'laut vorlesen'],
      voiceControl: ['sprachbefehl', 'sprachsteuerung'],
      showAltText: ['alternativtext', 'alt text anzeigen', 'bildbeschreibung'],
      resetAll: ['alles zurücksetzen', 'zurücksetzen', 'alles löschen']
    },
    it: {
      showMenu: ['apri menu', 'menu accessibilità', 'mostra menu'],
      highContrast: ['contrasto elevato', 'contrasto'],
      biggerText: ['testo più grande', 'ingrandisci testo', 'dimensione testo', 'aumenta testo'],
      textSpacing: ['spaziatura testo', 'spaziatura'],
      pauseAnimations: ['pausa animazioni', 'ferma animazioni', 'niente animazioni'],
      hideImages: ['nascondi immagini', 'rimuovi immagini', 'niente immagini'],
      biggerCursor: ['cursore più grande', 'cursore grande'],
      lineHeight: ['interlinea', 'altezza riga'],
      textAlign: ['allinea testo', 'allineamento', 'centra testo'],
      saturation: ['saturazione', 'scala di grigi', 'desatura'],
      fontSelection: ['cambia carattere', 'seleziona carattere', 'carattere', 'carattere dislessia'],
      colorFilter: ['filtro colore', 'daltonico', 'daltonismo'],
      screenReader: ['lettore schermo', 'leggi ad alta voce'],
      voiceControl: ['comando vocale', 'controllo vocale'],
      showAltText: ['testo alternativo', 'mostra testo alternativo', 'descrizione immagine'],
      resetAll: ['ripristina tutto', 'ripristina', 'cancella tutto']
    },
    pt: {
      showMenu: ['abrir menu', 'menu de acessibilidade', 'mostrar menu'],
      highContrast: ['alto contraste', 'contraste'],
      biggerText: ['texto maior', 'aumentar texto', 'tamanho do texto'],
      textSpacing: ['espaçamento do texto', 'espaçamento'],
      pauseAnimations: ['pausar animações', 'parar animações', 'sem animações'],
      hideImages: ['ocultar imagens', 'remover imagens', 'sem imagens'],
      biggerCursor: ['cursor maior', 'cursor grande'],
      lineHeight: ['altura da linha', 'espaçamento entre linhas'],
      textAlign: ['alinhar texto', 'alinhamento', 'centralizar texto'],
      saturation: ['saturação', 'escala de cinza', 'dessaturar'],
      fontSelection: ['mudar fonte', 'selecionar fonte', 'fonte', 'fonte para dislexia'],
      colorFilter: ['filtro de cor', 'daltônico', 'daltonismo'],
      screenReader: ['leitor de tela', 'ler em voz alta'],
      voiceControl: ['comando de voz', 'controle por voz'],
      showAltText: ['texto alternativo', 'mostrar texto alternativo', 'descrição da imagem'],
      resetAll: ['redefinir tudo', 'redefinir', 'limpar tudo']
    },
    hi: {
      showMenu: ['मेनू खोलें', 'सुगम्यता मेनू'],
      highContrast: ['उच्च कंट्रास्ट', 'कंट्रास्ट'],
      biggerText: ['बड़ा टेक्स्ट', 'टेक्स्ट बड़ा करें', 'टेक्स्ट आकार'],
      textSpacing: ['टेक्स्ट स्पेसिंग', 'स्पेसिंग'],
      pauseAnimations: ['एनिमेशन रोकें', 'एनिमेशन बंद करें'],
      hideImages: ['चित्र छिपाएं', 'इमेज छिपाएं'],
      biggerCursor: ['बड़ा कर्सर'],
      lineHeight: ['पंक्ति ऊंचाई', 'लाइन स्पेसिंग'],
      textAlign: ['टेक्स्ट संरेखित करें', 'टेक्स्ट सेंटर करें'],
      saturation: ['संतृप्ति', 'ग्रेस्केल'],
      fontSelection: ['फ़ॉन्ट बदलें', 'फ़ॉन्ट चुनें', 'फ़ॉन्ट'],
      colorFilter: ['रंग फ़िल्टर', 'कलर ब्लाइंड'],
      screenReader: ['स्क्रीन रीडर', 'ज़ोर से पढ़ें'],
      voiceControl: ['वॉइस कमांड', 'वॉइस कंट्रोल'],
      showAltText: ['वैकल्पिक टेक्स्ट', 'ऑल्ट टेक्स्ट'],
      resetAll: ['सब रीसेट करें', 'रीसेट करें']
    }
  },

  // Grid Layout Configuration
  // Grid Layout Configuration
  gridLayout: {
    columns: '1fr 1fr 1fr', // 3-column layout
    gap: '10px' // Gap between grid items
  }
};

// Function to deep merge user configuration with defaults
function mergeConfigs(defaultConfig, userConfig) {
  const result = { ...defaultConfig };

  if (!userConfig) return result;

  for (const key in userConfig) {
    if (!Object.prototype.hasOwnProperty.call(userConfig, key)) continue;
    // Block prototype-pollution vectors
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;

    const userVal = userConfig[key];
    const defVal = defaultConfig[key];

    if (typeof userVal === 'object' && userVal !== null && !Array.isArray(userVal)) {
      const base = (typeof defVal === 'object' && defVal !== null && !Array.isArray(defVal)) ? defVal : {};
      result[key] = mergeConfigs(base, userVal);
    } else {
      // If the default defines this key, only accept a value of the same shape
      if (defVal !== undefined) {
        if (Array.isArray(defVal) !== Array.isArray(userVal)) continue;
        if (!Array.isArray(defVal) && typeof defVal !== typeof userVal) continue;
      }
      result[key] = userVal;
    }
  }

  return result;
}

// Merge user configuration with defaults
const WIDGET_CONFIG = mergeConfigs(DEFAULT_WIDGET_CONFIG, window.ENABLESTACK_CONFIG || {});

// Bump when the localStorage schema changes so stale settings can be migrated.
const EU_SETTINGS_VERSION = '1.2';

// ===========================================
// THEME / BRANDING COLORS
// ===========================================
// The widget's colour is decided once, at integration time — NOT by visitors:
//   • WordPress: the plugin auto-matches your theme on activation (adjustable
//     from Settings → Enablestack Widget).
//   • npm: you enter your brand hex at install time; it is baked into the build.
//   • Manual embed: set ENABLESTACK_CONFIG.colors.primary (or .theme).
// From a single primary colour the widget derives its full accent palette
// (bright/deep/gradient/glows) so one choice re-themes the whole widget.
// The built-in default is the EnableUser brand purple, #54467D.

const EU_THEME_PRESETS = {
  purple: '#54467D',
  teal:   '#14b8a6',
  blue:   '#2563eb',
  indigo: '#4f46e5',
  violet: '#7c3aed',
  rose:   '#e11d48',
  orange: '#ea580c',
  green:  '#16a34a',
  slate:  '#475569',
  dark:   '#111827'
};

function euHexToRgb(hex) {
  let h = String(hex == null ? '' : hex).trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}
function euClampByte(v) { return Math.max(0, Math.min(255, Math.round(v))); }
function euRgbToHex(r, g, b) {
  return '#' + [r, g, b].map(function (x) { return euClampByte(x).toString(16).padStart(2, '0'); }).join('');
}
function euLighten(hex, amt) {
  const c = euHexToRgb(hex); if (!c) return hex;
  return euRgbToHex(c.r + (255 - c.r) * amt, c.g + (255 - c.g) * amt, c.b + (255 - c.b) * amt);
}
function euDarken(hex, amt) {
  const c = euHexToRgb(hex); if (!c) return hex;
  return euRgbToHex(c.r * (1 - amt), c.g * (1 - amt), c.b * (1 - amt));
}
function euRgba(hex, a) {
  const c = euHexToRgb(hex); if (!c) return 'rgba(0, 0, 0, ' + a + ')';
  return 'rgba(' + c.r + ', ' + c.g + ', ' + c.b + ', ' + a + ')';
}
// Blend `amt` (0..1) of `hex2` into `hex`.
function euMix(hex, hex2, amt) {
  const a = euHexToRgb(hex), b = euHexToRgb(hex2); if (!a || !b) return hex;
  return euRgbToHex(a.r + (b.r - a.r) * amt, a.g + (b.g - a.g) * amt, a.b + (b.b - a.b) * amt);
}

// Build the full widget palette from one primary colour. Structural (dark
// surface) colours come from explicit overrides/defaults; accent shades are
// always derived from the primary so the widget stays colour-consistent.
function euDerivePalette(primary, overrides) {
  overrides = overrides || {};
  const base = DEFAULT_WIDGET_CONFIG.colors;
  const bright = euLighten(primary, 0.18);
  const deep = euDarken(primary, 0.30);
  return {
    primary: primary,
    primaryBright: bright,
    primaryDeep: deep,
    brandGradient: 'linear-gradient(135deg, ' + bright + ' 0%, ' + deep + ' 100%)',
    secondary: overrides.secondary || base.secondary,
    optionBg: overrides.optionBg || base.optionBg,
    optionText: overrides.optionText || base.optionText,
    optionIcon: overrides.optionIcon || base.optionIcon
  };
}

// Which primary should the widget use?
// configured colors.primary > configured theme preset > built-in default (#54467D).
function euResolveInitialPrimary() {
  const uc = (window.ENABLESTACK_CONFIG && window.ENABLESTACK_CONFIG.colors) || {};
  if (uc.primary && euHexToRgb(uc.primary)) return uc.primary;
  const ut = window.ENABLESTACK_CONFIG && window.ENABLESTACK_CONFIG.theme;
  if (ut && EU_THEME_PRESETS[ut]) return EU_THEME_PRESETS[ut];
  return null; // keep the built-in default palette
}

// Apply the resolved palette so every build-time interpolation reflects it.
const euInitialPrimary = euResolveInitialPrimary();
if (euInitialPrimary) {
  const euUserColors = (window.ENABLESTACK_CONFIG && window.ENABLESTACK_CONFIG.colors) || {};
  WIDGET_CONFIG.colors = euDerivePalette(euInitialPrimary, euUserColors);
}

// Map a palette to the CSS custom properties the stylesheet reads from.
function euThemeVarMap(colors) {
  return {
    // Accent (themeable) — derived from the chosen primary
    '--eu-primary': colors.primary,
    '--eu-primary-bright': colors.primaryBright,
    '--eu-primary-deep': colors.primaryDeep,
    '--eu-gradient': colors.brandGradient,
    '--eu-secondary': colors.secondary,           // on-accent (white)
    '--eu-option-icon': colors.primary,           // card icons follow the accent
    // Light-theme surfaces (fixed, high-contrast)
    '--eu-surface': '#ffffff',                    // panel / white items
    '--eu-option-bg': '#f7f4fc',                  // cards / sections
    '--eu-surface-2': '#f2eefa',
    '--eu-hover': '#ece5f7',
    '--eu-border': '#e7e0f2',
    '--eu-border-strong': '#d6cce8',
    '--eu-header-bg': '#ffffff',
    '--eu-option-text': '#2c2542',                // main ink
    '--eu-text': '#2c2542',
    '--eu-text-muted': '#726b8c',
    // Accent tints / glows (rgba so they read softly on light)
    '--eu-active-bg': euMix('#ffffff', colors.primary, 0.10),
    '--eu-active-tint': euRgba(colors.primary, 0.10),
    '--eu-glow-deep': euRgba(colors.primaryDeep, 0.32),
    '--eu-glow': euRgba(colors.primary, 0.42),
    '--eu-glow-mid': euRgba(colors.primary, 0.30),
    '--eu-glow-soft': euRgba(colors.primary, 0.12),
    '--eu-glow-header': euRgba(colors.primary, 0.16),
    '--eu-logo-shadow': euRgba(colors.primaryDeep, 0.45)
  };
}

// Serialize the var map for baking into :host / :root at build time.
function euBuildCssVars(colors) {
  const map = euThemeVarMap(colors);
  return Object.keys(map).map(function (k) { return k + ': ' + map[k] + ';'; }).join('\n    ');
}
const euCssVars = euBuildCssVars(WIDGET_CONFIG.colors);

// ===========================================
// STYLES & VISUAL ASSETS
// ===========================================

// Widget styles (will go inside Shadow DOM - NOT affected by page styles or accessibility features)
const widgetStyles = `
  :host {
    all: initial;
    font-family: ${WIDGET_CONFIG.typography.fontFamily};
    /* Theme colours — override any of these to re-skin the widget live */
    ${euCssVars}
  }
  
  * {
    box-sizing: border-box;
  }
  
  #eu-accessibility-fixed-button {
    position: fixed !important;
    ${WIDGET_CONFIG.widgetPosition.side}: ${WIDGET_CONFIG.widgetPosition[WIDGET_CONFIG.widgetPosition.side]} !important;
    bottom: ${WIDGET_CONFIG.widgetPosition.bottom} !important;
    z-index: 9999;
    background: transparent;
    padding: 0;
    border-radius: 100%;
  }

  #eu-accessibility-button {
    background: var(--eu-gradient);
    border: solid 2px rgba(255, 255, 255, 0.92);
    border-radius: ${WIDGET_CONFIG.button.borderRadius};
    cursor: pointer;
    width: ${WIDGET_CONFIG.button.size};
    height: ${WIDGET_CONFIG.button.size};
    box-shadow: 0 8px 22px var(--eu-glow-deep), 0 2px 6px rgba(0, 0, 0, 0.28);
    transition: transform ${WIDGET_CONFIG.animation.transition}, box-shadow ${WIDGET_CONFIG.animation.transition} !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #eu-accessibility-button:hover {
    transform: scale(${WIDGET_CONFIG.animation.hoverScale}) translateY(-1px);
    box-shadow: 0 12px 28px var(--eu-glow), 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  #eu-accessibility-button:focus {
    outline: 3px solid var(--eu-primary-bright);
    outline-offset: 3px;
  }
  
  #eu-accessibility-button svg {
    width: ${WIDGET_CONFIG.button.iconSize};
    height: ${WIDGET_CONFIG.button.iconSize};
    fill: var(--eu-secondary);
    pointer-events: none;
  }
  
  #eu-accessibility-menu {
    position: fixed;
    bottom: 20px;
    ${WIDGET_CONFIG.widgetPosition.side}: ${WIDGET_CONFIG.widgetPosition[WIDGET_CONFIG.widgetPosition.side]};
    width: ${WIDGET_CONFIG.widgetWidth};
    max-height: calc(100vh - 90px);
    overflow-y: auto;
    background-color: var(--eu-surface);
    padding: 0;
    display: none;
    font-family: ${WIDGET_CONFIG.typography.fontFamily};
    z-index: 999999;
    scrollbar-width: thin;
    line-height:1 !important;
    border-radius: 14px;
    box-shadow: 0 16px 44px rgba(44, 37, 66, 0.16), 0 4px 14px rgba(44, 37, 66, 0.10);
  }
  
  .eu-accessibility-option {
    font-size: ${WIDGET_CONFIG.menu.fontSize};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    width: 100%;
    background-color: var(--eu-option-bg);
    color: var(--eu-option-text);
    border: 1px solid var(--eu-border);
    cursor: pointer;
    border-radius: ${WIDGET_CONFIG.menu.borderRadius};
    transition: background-color ${WIDGET_CONFIG.animation.transition}, border-color ${WIDGET_CONFIG.animation.transition};
    line-height: ${WIDGET_CONFIG.typography.lineHeight} !important;
    gap: 3px;
    min-height: 80px;
  }
  
  .eu-accessibility-option:hover {
    border-color: var(--eu-border-strong);
    background-color: var(--eu-hover);
  }

  .eu-accessibility-option.active {
    border-color: var(--eu-primary);
    background: linear-gradient(160deg, var(--eu-active-bg) 0%, var(--eu-option-bg) 100%);
    box-shadow: inset 0 0 0 1px var(--eu-glow-mid), 0 0 12px var(--eu-glow-soft);
  }

  .eu-accessibility-option.active .eu-icon {
    color: var(--eu-primary);
  }
  
  .eu-accessibility-option:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .eu-icon {
    width: 28px;
    height: 28px;
    color: var(--eu-primary);
    fill: var(--eu-primary);
    flex-shrink: 0;
  }
  
  .eu-icon svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
  
  .eu-button-text {
    text-align: center;
    line-height: 1.2;
    font-size: 12px;
    font-weight: 600;
  }
  
  .eu-option-steps {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }

  .eu-option-step {
    width: 22px;
    height: 4px;
    border-radius: 2px;
    background-color: var(--eu-border);
    transition: background-color ${WIDGET_CONFIG.animation.transition};
  }
  
  .eu-option-step.active {
    background-color: var(--eu-primary);
  }
  
  .eu-close {
    background: none;
    border: none;
    font-size: 30px;
    color: var(--eu-text);
    cursor: pointer;
    line-height: ${WIDGET_CONFIG.typography.lineHeight};
    border-radius: ${WIDGET_CONFIG.button.borderRadius};
    width: 32px;
    height: 32px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .eu-close::before {
    content: '×';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    line-height: 1;
  }

  /* Reset shown as a clearly-labelled box (not just an icon) */
  .eu-reset-button {
    background: #ffffff;
    border: 1px solid var(--eu-primary);
    color: var(--eu-primary);
    cursor: pointer;
    border-radius: 7px;
    padding: 6px 12px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color ${WIDGET_CONFIG.animation.transition}, border-color ${WIDGET_CONFIG.animation.transition};
  }

  .eu-reset-label {
    font-family: ${WIDGET_CONFIG.typography.fontFamily};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.3px;
    line-height: 1;
    color: var(--eu-primary);
    text-transform: uppercase;
    white-space: nowrap;
  }

  .eu-close:focus, .eu-reset-button:focus {
    outline: solid 2px var(--eu-primary);
    outline-offset: 1px;
  }

  .eu-close:hover {
    color: var(--eu-text);
    background: var(--eu-hover);
  }

  .eu-reset-button:hover {
    background: var(--eu-active-tint);
    border-color: var(--eu-primary-deep);
  }
  
  /* Tooltip styles */
  .eu-tooltip {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    z-index: 1000;
  }
  
  .eu-tooltip::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(0, 0, 0, 0.8);
  }
  
  .eu-close:hover .eu-tooltip,
  .eu-close:focus .eu-tooltip,
  .eu-reset-button:hover .eu-tooltip,
  .eu-reset-button:focus .eu-tooltip {
    opacity: 1;
  }
  
  .eu-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    background: var(--eu-header-bg);
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: inset 0 -1px 0 var(--eu-border);
    gap: 8px;
    border-radius: 14px 14px 0 0;
  }

  /* Full enableuser logo — left-aligned, takes the remaining width, never clipped */
  .eu-header-logo {
    flex: 1 1 auto;
    min-width: 0;
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: clamp(34px, calc(30px + var(--eu-scale, 1) * 8px), 52px);
    object-fit: contain;
    object-position: left center;
    user-select: none;
    -webkit-user-drag: none;
  }

  /* Resize / expand handle — an inline control in the top row */
  .eu-resize-handle {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    color: var(--eu-text-muted);
    opacity: 0.8;
    cursor: nwse-resize;
    background: transparent;
    border: none;
    transition: opacity 0.15s, background-color 0.15s;
    touch-action: none;
  }
  .eu-resize-handle:hover { opacity: 1; background: var(--eu-hover); }
  .eu-resize-handle:focus { outline: none; opacity: 1; }
  .eu-resize-handle:focus-visible { outline: 2px solid var(--eu-primary); }
  .eu-resize-handle svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  #eu-accessibility-menu.eu-side-right .eu-resize-handle { transform: scaleX(-1); }
  #eu-accessibility-menu.eu-resizing { user-select: none; }

  .eu-content {
    padding: 12px 12px 0px 12px;
  }
  
  .eu-options-grid {
    display: grid;
    grid-template-columns: ${WIDGET_CONFIG.gridLayout.columns};
    gap: 8px;
    margin-bottom: 10px;
  }
  
  .eu-title {
    margin: 0;
    color: var(--eu-secondary);
    line-height: 1 !important;
    font-weight: ${WIDGET_CONFIG.typography.titleFontWeight};
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 3px;
    letter-spacing: 0px !important;
    word-spacing: 0px !important;
  }

  .eu-title-main {
    font-size: 16px;
    font-weight: 800;
    color: var(--eu-secondary);
    letter-spacing: 0.2px;
    line-height: 1.15;
  }

  .eu-title-main .eu-title-accent {
    background: linear-gradient(90deg, var(--eu-primary-bright), var(--eu-primary));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--eu-primary-bright);
  }

  .eu-title-sub {
    font-size: 10.5px;
    font-weight: 600;
    color: var(--eu-primary-bright);
    letter-spacing: 1.2px;
    text-transform: uppercase;
    line-height: 1.2;
  }

  .eu-footer {
    text-align: center;
    padding: 10px 12px 14px;
    font-size: 11.5px;
    color: var(--eu-text-muted);
    border-top: 1px solid var(--eu-hover);
    margin-top: 5px;
    letter-spacing: 0.2px;
  }

  .eu-footer a {
    color: var(--eu-primary);
    text-decoration: none;
    font-weight: 600;
  }

  .eu-footer a:hover {
    text-decoration: underline;
  }

  .eu-footer .eu-brand-name {
    font-weight: 800;
    letter-spacing: 0.3px;
    background: linear-gradient(90deg, var(--eu-primary-bright), var(--eu-primary));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--eu-primary-bright);
  }

  /* EnableUser logo in the footer (same wordmark as the header) */
  .eu-footer-brand {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
  }
  .eu-footer-logo {
    height: 21px;
    width: auto;
    max-width: 190px;
    object-fit: contain;
    vertical-align: middle;
    user-select: none;
  }

  /* Footer utility links (Accessibility Statement / Send Feedback) */
  .eu-footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px 14px;
    padding: 8px 12px 0;
  }
  .eu-footer-links a {
    color: var(--eu-primary);
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
  }
  .eu-footer-links a:hover { text-decoration: underline; }

  /* Custom Color inline panel */
  .eu-custom-color-panel {
    background: var(--eu-option-bg);
    border: 1px solid var(--eu-border);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 10px;
    display: none;
  }
  .eu-custom-color-panel.eu-open { display: block; }
  .eu-ccp-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    color: var(--eu-option-text);
    font-size: 13px;
  }
  .eu-ccp-row input[type="color"] {
    width: 44px;
    height: 28px;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  .eu-ccp-actions { display: flex; gap: 8px; margin-top: 4px; }
  .eu-ccp-btn {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background: var(--eu-primary);
  }
  .eu-ccp-btn.eu-ccp-reset { background: var(--eu-border-strong); }

  /* Personalize Your Experience Section */
  .eu-profiles-section {
    background: var(--eu-option-bg);
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid var(--eu-border);
  }

  .eu-profiles-title {
    color: var(--eu-option-text);
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .eu-profiles-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .eu-profile-chip {
    background: transparent;
    color: var(--eu-option-text);
    border: 1px solid var(--eu-border);
    border-radius: 20px;
    padding: 8px 10px;
    font-size: 13px;
    font-family: inherit;
    cursor: pointer;
    transition: all ${WIDGET_CONFIG.animation.transition};
  }

  .eu-profile-chip:hover,
  .eu-profile-chip:focus {
    border-color: var(--eu-primary);
    outline: none;
  }

  .eu-profile-chip.active {
    background: var(--eu-primary);
    color: #ffffff;
    border-color: var(--eu-primary);
    font-weight: 700;
  }

  .eu-personalize-section {
    background: var(--eu-option-bg);
    border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden;
    border: 1px solid var(--eu-border);
  }

  .eu-personalize-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 12px;
    background: transparent;
    color: var(--eu-text);
    cursor: pointer;
    border: none;
    width: 100%;
    font-family: ${WIDGET_CONFIG.typography.fontFamily};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.3px;
    transition: background 0.2s;
  }

  .eu-personalize-header:hover {
    opacity: 0.92;
  }

  .eu-personalize-header:focus {
    outline: 2px solid var(--eu-primary);
    outline-offset: -2px;
  }

  .eu-personalize-chevron {
    transition: transform 0.25s ease;
    width: 18px;
    height: 18px;
    fill: var(--eu-text);
    flex-shrink: 0;
  }

  .eu-personalize-header[aria-expanded="true"] .eu-personalize-chevron {
    transform: rotate(180deg);
  }

  .eu-personalize-body {
    display: none;
    padding: 0;
  }

  .eu-personalize-body.eu-open {
    display: block;
  }

  .eu-page-structure-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--eu-text);
    padding: 12px 14px 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .eu-page-structure-label svg {
    width: 16px;
    height: 16px;
    fill: var(--eu-primary);
  }

  .eu-structure-tabs {
    display: flex;
    gap: 0;
    border-bottom: 2px solid var(--eu-border);
    margin: 0 10px;
  }

  .eu-structure-tab {
    flex: 1;
    padding: 9px 6px;
    font-size: 13px;
    font-weight: 600;
    font-family: ${WIDGET_CONFIG.typography.fontFamily};
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    color: var(--eu-text-muted);
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .eu-structure-tab:hover {
    color: var(--eu-text);
  }

  .eu-structure-tab:focus {
    outline: 2px solid var(--eu-primary);
    outline-offset: -2px;
  }

  .eu-structure-tab.eu-active {
    color: var(--eu-primary);
    border-bottom-color: var(--eu-primary);
  }

  .eu-structure-tab .eu-tab-count {
    background: var(--eu-border);
    color: var(--eu-text-muted);
    font-size: 11px;
    font-weight: 700;
    border-radius: 10px;
    padding: 1px 7px;
    min-width: 20px;
    text-align: center;
  }

  .eu-structure-tab.eu-active .eu-tab-count {
    background: var(--eu-primary);
    color: var(--eu-secondary);
  }

  .eu-structure-panel {
    display: none;
    max-height: 220px;
    overflow-y: auto;
    padding: 6px 10px 10px;
    scrollbar-width: thin;
  }

  .eu-structure-panel.eu-active {
    display: block;
  }

  .eu-structure-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    margin: 3px 0;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    color: var(--eu-text);
    background: var(--eu-surface);
    border: 1px solid var(--eu-border);
    transition: background 0.15s, border-color 0.15s;
    text-align: left;
    width: 100%;
    font-family: ${WIDGET_CONFIG.typography.fontFamily};
    line-height: 1.35;
  }

  .eu-structure-item:hover {
    background: var(--eu-hover);
    border-color: var(--eu-primary);
  }

  .eu-structure-item:focus {
    outline: 2px solid var(--eu-primary);
    outline-offset: -1px;
  }

  .eu-structure-item-tag {
    font-size: 10px;
    font-weight: 700;
    color: var(--eu-primary);
    background: var(--eu-active-tint);
    padding: 2px 6px;
    border-radius: 4px;
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .eu-structure-item-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    min-width: 0;
  }

  .eu-structure-empty {
    padding: 16px 10px;
    text-align: center;
    color: var(--eu-text-muted);
    font-size: 13px;
    font-style: italic;
  }

  /* Show Shortcuts Toggle Bar */
  .eu-shortcuts-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    border-radius: 8px;
    padding: 9px 4px;
    margin-bottom: 10px;
  }

  .eu-shortcuts-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--eu-text);
    letter-spacing: 0.2px;
  }

  .eu-toggle-switch {
    position: relative;
    width: 46px;
    height: 26px;
    flex-shrink: 0;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  .eu-toggle-track {
    position: absolute;
    top: 0;
    left: 0;
    width: 46px;
    height: 26px;
    border-radius: 13px;
    background: var(--eu-border);
    transition: background 0.25s;
  }

  .eu-toggle-switch[aria-checked="true"] .eu-toggle-track {
    background: var(--eu-primary);
  }

  .eu-toggle-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.25s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  .eu-toggle-switch[aria-checked="true"] .eu-toggle-thumb {
    left: 23px;
  }

  .eu-toggle-switch:focus {
    outline: 2px solid var(--eu-primary);
    outline-offset: 2px;
    border-radius: 13px;
  }

  /* Additional Keyboard Shortcuts Section */
  .eu-additional-shortcuts {
    background: var(--eu-option-bg);
    border: 1px solid var(--eu-border);
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 6px;
    padding: 2px 0;
  }

  .eu-additional-shortcuts-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--eu-text);
    padding: 8px 12px 4px;
    letter-spacing: 0.2px;
  }

  .eu-shortcut-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 12px;
    border-bottom: 1px solid var(--eu-border);
  }

  .eu-shortcut-row:last-child {
    border-bottom: none;
  }

  .eu-shortcut-action {
    font-size: 12px;
    color: var(--eu-text);
    font-weight: 400;
  }

  .eu-shortcut-key {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 22px;
    padding: 0 6px;
    background: var(--eu-hover);
    color: var(--eu-text);
    font-size: 11px;
    font-weight: 700;
    font-family: monospace;
    border-radius: 5px;
    border: 1px solid var(--eu-border-strong);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  /* Visually-hidden live region for screen-reader announcements */
  .eu-sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  /* Draggable launcher */
  #eu-accessibility-fixed-button.eu-dragging { transition: none !important; }
  #eu-accessibility-fixed-button.eu-dragging #eu-accessibility-button { cursor: grabbing !important; }

  /* Right-to-left panel layout */
  #eu-accessibility-menu[dir="rtl"] { direction: rtl; text-align: right; }
`;

// Page accessibility styles (will go in main document - these affect the page, NOT the widget)
const pageStyles = `
  /* Theme colours for widget-owned page overlays (keyboard, reader, lens…) */
  :root {
    ${euCssVars}
  }
  /* Page Structure Navigation Highlight */
  @keyframes eu-highlight-pulse {
    0% { outline-color: rgba(11, 114, 133, 0.9); outline-offset: 2px; }
    50% { outline-color: rgba(11, 114, 133, 0.4); outline-offset: 4px; }
    100% { outline-color: rgba(11, 114, 133, 0.9); outline-offset: 2px; }
  }
  .eu-structure-highlight {
    outline: 3px solid rgba(11, 114, 133, 0.9) !important;
    outline-offset: 2px;
    animation: eu-highlight-pulse 1s ease-in-out 2;
    scroll-margin-top: 80px;
  }

  /* High Contrast Modes */
  .eu-high-contrast-medium {
    filter: none !important;
  }
  .eu-high-contrast-medium *:not(#eu-accessibility-widget-container):not(#eu-accessibility-widget-container *) {
    filter: contrast(1.3) !important;
  }
  
  .eu-high-contrast-high {
    background-color: #000 !important;
    color: #fff !important;
    filter: none !important;
  }
  .eu-high-contrast-high *:not(#eu-accessibility-widget-container):not(#eu-accessibility-widget-container *) {
    background-color: #000 !important;
    color: #fff !important;
    filter: contrast(1.5) !important;
  }
  
  .eu-high-contrast-ultra {
    background-color: #000 !important;
    color: #ffff00 !important;
    filter: none !important;
  }
  .eu-high-contrast-ultra *:not(#eu-accessibility-widget-container):not(#eu-accessibility-widget-container *) {
    background-color: #000 !important;
    color: #ffff00 !important;
    filter: contrast(2.0) !important;
  }
  
  /* Text Size */
  .eu-bigger-text-medium * {
    font-size: 20px !important;
  }
  .eu-bigger-text-large * {
    font-size: 24px !important;
  }
  .eu-bigger-text-xlarge * {
    font-size: 28px !important;
  }
  
  /* Text Spacing - 3 Options */
  .eu-text-spacing-light * {
    letter-spacing: 0.1em !important;
    word-spacing: 0.5em !important;
  }
  .eu-text-spacing-medium * {
    letter-spacing: 0.15em !important;
    word-spacing: 1em !important;
  }
  .eu-text-spacing-heavy * {
    letter-spacing: 0.25em !important;
    word-spacing: 2em !important;
  }
  
  /* Pause Animations (Enhanced to include Reduced Motion features) */
  .eu-pause-animations * {
    animation: none !important;
    transition: none !important;
  }
  .eu-pause-animations *::before {
    animation: none !important;
    transition: none !important;
  }
  .eu-pause-animations *::after {
    animation: none !important;
    transition: none !important;
  }
  
  /* Dyslexia Font — OpenDyslexic (SIL OFL), loaded lazily by the browser only when used */
  @font-face {
    font-family: 'OpenDyslexic';
    src: url('https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/woff/OpenDyslexic-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'OpenDyslexic';
    src: url('https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/woff/OpenDyslexic-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  .eu-dyslexia-font {
    font-family: 'OpenDyslexic', 'Comic Sans MS', 'Chalkboard SE', Verdana, sans-serif !important;
  }
  .eu-dyslexia-font * {
    font-family: 'OpenDyslexic', 'Comic Sans MS', 'Chalkboard SE', Verdana, sans-serif !important;
  }
  .eu-font-dyslexic {
    font-family: 'OpenDyslexic', 'Comic Sans MS', 'Chalkboard SE', Verdana, sans-serif !important;
  }
  .eu-font-dyslexic * {
    font-family: 'OpenDyslexic', 'Comic Sans MS', 'Chalkboard SE', Verdana, sans-serif !important;
  }
  
  /* Line Height - 3 Options */
  .eu-line-height-2em * {
    line-height: 2 !important;
  }
  .eu-line-height-3em * {
    line-height: 3 !important;
  }
  .eu-line-height-4em * {
    line-height: 4 !important;
  }
  
  /* Text Alignment */
  .eu-text-align-left * {
    text-align: left !important;
  }
  .eu-text-align-center * {
    text-align: center !important;
  }
  .eu-text-align-right * {
    text-align: right !important;
  }
  
  /* Bigger Cursor */
  .eu-bigger-cursor {
    cursor: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyOS4xODhweCIgaGVpZ2h0PSI0My42MjVweCIgdmlld0JveD0iMCAwIDI5LjE4OCA0My42MjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5LjE4OCA0My42MjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0Q5REFEOSIgc3Ryb2tlLXdpZHRoPSIxLjE0MDYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIyLjgsNC41NDkgMjYuODQ3LDE5LjkwMiAxNi45NjQsMjIuNzAxIDI0LjIzOSwzNy43NDkgMTguMjc4LDQyLjAxNyA5Ljc0MSwzMC43MjQgMS4xMzgsMzUuODA5ICIvPjxnPjxnPjxnPjxwYXRoIGZpbGw9IiMyMTI2MjciIGQ9Ik0yOS4xNzUsMjEuMTU1YzAuMDcxLTAuNjEzLTAuMTY1LTEuMjUzLTAuNjM1LTEuNTczTDIuMTY1LDAuMjU4Yy0wLjQyNC0wLjMyLTAuOTg4LTAuMzQ2LTEuNDM1LTAuMDUzQzAuMjgyLDAuNDk3LDAsMS4wMywwLDEuNjE3djM0LjE3MWMwLDAuNjEzLDAuMzA2LDEuMTQ2LDAuNzc2LDEuNDM5YzAuNDcxLDAuMjY3LDEuMDU5LDAuMjEzLDEuNDgyLTAuMTZsNy40ODItNi4zNDRsNi44NDcsMTIuMTU1YzAuMjU5LDAuNDgsMC43MjksMC43NDYsMS4yLDAuNzQ2YzAuMjM1LDAsMC40OTQtMC4wOCwwLjcwNi0wLjIxM2w2Ljk4OC00LjU4NWMwLjMyOS0wLjIxMywwLjU2NS0wLjU4NiwwLjY1OS0xLjAxM2MwLjA5NC0wLjQyNiwwLjAyNC0wLjg4LTAuMTg4LTEuMjI2bC02LjM3Ni0xMS4zODJsOC42MTEtMi43NDVDMjguNzA1LDIyLjI3NCwyOS4xMDUsMjEuNzY4LDI5LjE3NSwyMS4xNTV6IE0xNi45NjQsMjIuNzAxYy0wLjQyNCwwLjEzMy0wLjc3NiwwLjUwNi0wLjk0MSwwLjk2Yy0wLjE2NSwwLjQ4LTAuMTE4LDEuMDEzLDAuMTE4LDEuNDM5bDYuNTg4LDExLjc4MWwtNC41NDEsMi45ODVsLTYuODk0LTEyLjMxNWMtMC4yMTItMC4zNzMtMC41NDEtMC42NC0wLjk0MS0wLjcyYy0wLjA5NC0wLjAyNy0wLjE2NS0wLjAyNy0wLjI1OS0wLjAyN2MtMC4zMDYsMC0wLjU4OCwwLjEwNy0wLjg0NywwLjMyTDIuOCwzMi41OVY0LjU0OWwyMS41OTksMTUuODA2TDE2Ljk2NCwyMi43MDF6Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=='), auto !important;
  }
  .eu-bigger-cursor * {
    cursor: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyOS4xODhweCIgaGVpZ2h0PSI0My42MjVweCIgdmlld0JveD0iMCAwIDI5LjE4OCA0My42MjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5LjE4OCA0My42MjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0Q5REFEOSIgc3Ryb2tlLXdpZHRoPSIxLjE0MDYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIyLjgsNC41NDkgMjYuODQ3LDE5LjkwMiAxNi45NjQsMjIuNzAxIDI0LjIzOSwzNy43NDkgMTguMjc4LDQyLjAxNyA5Ljc0MSwzMC43MjQgMS4xMzgsMzUuODA5ICIvPjxnPjxnPjxnPjxwYXRoIGZpbGw9IiMyMTI2MjciIGQ9Ik0yOS4xNzUsMjEuMTU1YzAuMDcxLTAuNjEzLTAuMTY1LTEuMjUzLTAuNjM1LTEuNTczTDIuMTY1LDAuMjU4Yy0wLjQyNC0wLjMyLTAuOTg4LTAuMzQ2LTEuNDM1LTAuMDUzQzAuMjgyLDAuNDk3LDAsMS4wMywwLDEuNjE3djM0LjE3MWMwLDAuNjEzLDAuMzA2LDEuMTQ2LDAuNzc2LDEuNDM5YzAuNDcxLDAuMjY3LDEuMDU5LDAuMjEzLDEuNDgyLTAuMTZsNy40ODItNi4zNDRsNi44NDcsMTIuMTU1YzAuMjU5LDAuNDgsMC43MjksMC43NDYsMS4yLDAuNzQ2YzAuMjM1LDAsMC40OTQtMC4wOCwwLjcwNi0wLjIxM2w2Ljk4OC00LjU4NWMwLjMyOS0wLjIxMywwLjU2NS0wLjU4NiwwLjY1OS0xLjAxM2MwLjA5NC0wLjQyNiwwLjAyNC0wLjg4LTAuMTg4LTEuMjI2bC02LjM3Ni0xMS4zODJsOC42MTEtMi43NDVDMjguNzA1LDIyLjI3NCwyOS4xMDUsMjEuNzY4LDI5LjE3NSwyMS4xNTV6IE0xNi45NjQsMjIuNzAxYy0wLjQyNCwwLjEzMy0wLjc3NiwwLjUwNi0wLjk0MSwwLjk2Yy0wLjE2NSwwLjQ4LTAuMTE4LDEuMDEzLDAuMTE4LDEuNDM5bDYuNTg4LDExLjc4MWwtNC41NDEsMi45ODVsLTYuODk0LTEyLjMxNWMtMC4yMTItMC4zNzMtMC41NDEtMC42NC0wLjk0MS0wLjcyYy0wLjA5NC0wLjAyNy0wLjE2NS0wLjAyNy0wLjI1OS0wLjAyN2MtMC4zMDYsMC0wLjU4OCwwLjEwNy0wLjg0NywwLjMyTDIuOCwzMi41OVY0LjU0OWwyMS41OTksMTUuODA2TDE2Ljk2NCwyMi43MDF6Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=='), auto !important;
  }
  
  /* Font Selection */
  .eu-font-arial {
    font-family: Arial, sans-serif !important;
  }
  .eu-font-arial * {
    font-family: Arial, sans-serif !important;
  }
  .eu-font-times {
    font-family: 'Times New Roman', serif !important;
  }
  .eu-font-times * {
    font-family: 'Times New Roman', serif !important;
  }
  .eu-font-verdana {
    font-family: Verdana, sans-serif !important;
  }
  .eu-font-verdana * {
    font-family: Verdana, sans-serif !important;
  }
  
  /* Color Filters */
  .eu-filter-protanopia {
    filter: none !important;
  }
  .eu-filter-protanopia body > *:not(#eu-accessibility-widget-container) {
    filter: url('#protanopia-filter') !important;
  }
  .eu-filter-deuteranopia {
    filter: none !important;
  }
  .eu-filter-deuteranopia body > *:not(#eu-accessibility-widget-container) {
    filter: url('#deuteranopia-filter') !important;
  }
  .eu-filter-tritanopia {
    filter: none !important;
  }
  .eu-filter-tritanopia body > *:not(#eu-accessibility-widget-container) {
    filter: url('#tritanopia-filter') !important;
  }
  .eu-filter-grayscale {
    filter: none !important;
  }
  .eu-filter-grayscale body > *:not(#eu-accessibility-widget-container) {
    filter: grayscale(100%) !important;
  }
  
  /* Saturation Filters */
  .eu-saturation-low {
    filter: none !important;
  }
  .eu-saturation-low body > *:not(#eu-accessibility-widget-container) {
    filter: saturate(0.5) !important;
  }
  .eu-saturation-high {
    filter: none !important;
  }
  .eu-saturation-high body > *:not(#eu-accessibility-widget-container) {
    filter: saturate(10) !important;
  }
  .eu-saturation-none {
    filter: none !important;
  }
  .eu-saturation-none body > *:not(#eu-accessibility-widget-container) {
    filter: grayscale(100%) saturate(0) !important;
  }
  
  /* Alt Text Viewer tooltip */
  .eu-alt-tooltip {
    position: absolute;
    z-index: 2147483647;
    display: none;
    background: #111827;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 6px;
    font-family: Arial, sans-serif;
    font-size: 13px;
    line-height: 1.4;
    max-width: 320px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
  .eu-alt-tooltip.eu-alt-missing {
    background: #b00020;
  }

  /* Focus Indicator */
  .eu-focus-indicator *:focus {
    outline: 3px solid #1a73e8 !important;
    outline-offset: 3px !important;
    box-shadow: 0 0 0 6px rgba(26, 115, 232, 0.25) !important;
  }
  .eu-focus-indicator a:focus,
  .eu-focus-indicator button:focus,
  .eu-focus-indicator input:focus,
  .eu-focus-indicator select:focus,
  .eu-focus-indicator textarea:focus,
  .eu-focus-indicator [tabindex]:focus {
    outline: 3px solid #1a73e8 !important;
    outline-offset: 3px !important;
    box-shadow: 0 0 0 6px rgba(26, 115, 232, 0.25) !important;
  }

  /* Highlight Links */
  .eu-highlight-links a {
    background-color: rgba(255, 255, 0, 0.4) !important;
    outline: 2px solid rgba(255, 200, 0, 0.6) !important;
    border-radius: 2px !important;
  }
  .eu-highlight-links h1,
  .eu-highlight-links h2,
  .eu-highlight-links h3,
  .eu-highlight-links h4,
  .eu-highlight-links h5,
  .eu-highlight-links h6 {
    background-color: rgba(0, 200, 255, 0.15) !important;
    outline: 2px solid rgba(0, 180, 230, 0.4) !important;
    border-radius: 2px !important;
  }

  /* Reading Guide */
  #eu-reading-guide {
    position: fixed;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #e63946, #e63946, transparent);
    pointer-events: none;
    z-index: 999998;
    transition: top 0.08s ease-out;
    box-shadow: 0 0 8px rgba(230, 57, 70, 0.5);
  }

  /* Reading Window */
  .eu-reading-window-top,
  .eu-reading-window-bottom {
    position: fixed;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.65);
    pointer-events: none;
    z-index: 999997;
    transition: top 0.08s ease-out, height 0.08s ease-out;
  }
  .eu-reading-window-top {
    top: 0;
  }

  /* ===== Enhanced features (v1.3.0) ===== */

  /* Enlarge Buttons — meet WCAG 2.5.5 target size */
  .eu-enlarge-buttons a,
  .eu-enlarge-buttons button,
  .eu-enlarge-buttons input[type="button"],
  .eu-enlarge-buttons input[type="submit"],
  .eu-enlarge-buttons input[type="reset"],
  .eu-enlarge-buttons [role="button"] {
    min-width: 44px !important;
    min-height: 44px !important;
    padding: 8px 14px !important;
    font-size: 1.05em !important;
    line-height: 1.4 !important;
  }

  /* Readable Font */
  .eu-readable-font,
  .eu-readable-font * {
    font-family: Verdana, Tahoma, 'Segoe UI', Arial, sans-serif !important;
    letter-spacing: 0.02em !important;
  }

  /* Hover Highlight (applied to hovered element via JS) */
  .eu-hover-highlight-target {
    outline: 3px solid var(--eu-primary) !important;
    outline-offset: 2px !important;
    background-color: rgba(124, 108, 255, 0.12) !important;
  }

  /* Read Focus — spotlight the hovered block of text */
  .eu-read-focus-target {
    background-color: rgba(255, 244, 150, 0.85) !important;
    box-shadow: 0 0 0 4px rgba(255, 235, 120, 0.9) !important;
    border-radius: 3px !important;
    color: #111 !important;
  }

  /* Read Aloud — outline the block being read + highlight the current word */
  .eu-read-current-block {
    outline: 2px solid var(--eu-primary, #54467d) !important;
    outline-offset: 2px !important;
  }
  .eu-read-word-active {
    background-color: rgba(255, 213, 74, 0.95) !important;
    box-shadow: 0 0 0 2px rgba(255, 213, 74, 0.95) !important;
    color: #111 !important;
    border-radius: 3px !important;
  }

  /* Text Magnifier lens */
  .eu-text-magnifier-lens {
    position: fixed;
    z-index: 2147483646;
    display: none;
    max-width: 480px;
    background: #ffffff;
    color: #111827;
    border: 2px solid var(--eu-primary);
    border-radius: 8px;
    padding: 10px 14px;
    font-family: Arial, sans-serif;
    font-size: 26px;
    line-height: 1.4;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    pointer-events: none;
  }

  /* Dictionary popup */
  .eu-dictionary-popup {
    position: fixed;
    z-index: 2147483646;
    display: none;
    width: 300px;
    max-height: 260px;
    overflow-y: auto;
    background: #ffffff;
    color: #111827;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 14px 16px;
    font-family: Arial, sans-serif;
    font-size: 15px;
    line-height: 1.5;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
  }
  .eu-dictionary-popup .eu-dict-word {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 2px;
    text-transform: capitalize;
  }
  .eu-dictionary-popup .eu-dict-phon {
    color: #6b7280;
    font-style: italic;
    margin: 0 0 8px;
  }
  .eu-dictionary-popup .eu-dict-pos {
    font-weight: 700;
    color: var(--eu-primary);
    margin: 8px 0 2px;
  }
  .eu-dictionary-popup ol {
    margin: 0;
    padding-left: 18px;
  }

  /* Reader View overlay */
  .eu-reader-overlay {
    position: fixed;
    inset: 0;
    z-index: 2147483644;
    background: #fbfbf8;
    color: #1a1a1a;
    overflow-y: auto;
    display: none;
    padding: 48px 20px 80px;
  }
  .eu-reader-inner {
    max-width: 720px;
    margin: 0 auto;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 20px;
    line-height: 1.7;
  }
  .eu-reader-inner h1, .eu-reader-inner h2, .eu-reader-inner h3 {
    font-family: Georgia, serif;
    line-height: 1.3;
  }
  .eu-reader-inner img { max-width: 100%; height: auto; }
  .eu-reader-inner p, .eu-reader-inner li { margin: 0 0 1em; }
  .eu-reader-close {
    position: fixed;
    top: 16px;
    right: 20px;
    z-index: 2147483645;
    background: var(--eu-primary);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    cursor: pointer;
  }

  /* Virtual Keyboard */
  .eu-virtual-keyboard {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: 2147483645;
    display: none;
    width: min(760px, 100%);
    background: #ffffff;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 -6px 24px rgba(44, 37, 66, 0.18);
    border-radius: 12px 12px 0 0;
    border: 1px solid var(--eu-border);
    border-bottom: none;
    user-select: none;
  }
  .eu-vk-row { display: flex; gap: 6px; margin-bottom: 6px; justify-content: center; }
  .eu-vk-key {
    flex: 1 1 0;
    min-width: 0;
    height: 44px;
    background: var(--eu-option-bg);
    color: var(--eu-text);
    border: 1px solid var(--eu-border);
    border-radius: 6px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    cursor: pointer;
  }
  .eu-vk-key:hover { background: var(--eu-hover); border-color: var(--eu-border-strong); }
  .eu-vk-key:active { background: var(--eu-primary); color: #fff; }
  .eu-vk-key.eu-vk-wide { flex: 2 1 0; }
  .eu-vk-key.eu-vk-space { flex: 6 1 0; }
  .eu-vk-key.eu-vk-active { background: var(--eu-primary); color: #fff; border-color: var(--eu-primary); }

  /* Protect widget container + overlay host from page styles */
  #eu-accessibility-widget-container,
  #eu-accessibility-widget-container *,
  #eu-accessibility-overlays {
    filter: none !important;
  }
  #eu-accessibility-widget-container,
  #eu-accessibility-widget-container * {
    background-color: initial !important;
    color: initial !important;
  }
`;

// ===========================================
// SVG ICONS
// ===========================================

const icons = {
  buttonsvg: `<svg xmlns="http://www.w3.org/2000/svg" style="fill:white;" viewBox="0 0 24 24" width="30px" height="30px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20.5 6c-2.61 0.7-5.67 1-8.5 1s-5.89-0.3-8.5-1L3 8c1.86 0.5 4 0.83 6 1v13h2v-6h2v6h2V9c2-0.17 4.14-0.5 6-1l-0.5-2zM12 6c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z"></path></svg>`,
  highContrast: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.2" viewBox="0 0 35 35"><path fill="currentColor" fill-rule="evenodd" d="M1.89998 15.6285c0-7.58203 6.14649-13.72852 13.72852-13.72852 7.5821 0 13.7286 6.14649 13.7286 13.72852 0 0.6081-0.0395 1.2069-0.1161 1.794 0.5933 0.2913 1.1478 0.6497 1.6534 1.0654 0.1725-0.9268 0.2627-1.8825 0.2627-2.8594 0-8.57615-6.9524-15.5285244-15.5286-15.5285244C7.05235 0.0999756 0.0999756 7.05235 0.0999756 15.6285c0 8.5762 6.9523744 15.5286 15.5285244 15.5286 1.2241 0 2.415-0.1416 3.5574-0.4093-0.4388-0.4866-0.8222-1.0242-1.1402-1.6028-0.7847 0.1394-1.5924 0.2121-2.4172 0.2121-7.58203 0-13.72852-6.1465-13.72852-13.7286Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M2.35 15.6286C2.35 8.29502 8.29502 2.35 15.6286 2.35c7.3335 0 13.2785 5.94502 13.2785 13.2786 0 0.5408-0.0323 1.0741-0.0951 1.5979 0.444 0.1881 0.8687 0.4128 1.2703 0.6703 0.1151-0.7392 0.1748-1.4967 0.1748-2.2682C30.2571 7.54943 23.7077 1 15.6286 1 7.54943 1 1 7.54943 1 15.6286c0 8.0791 6.54943 14.6285 14.6286 14.6285 1.0033 0 1.9831-0.101 2.9297-0.2934-0.276-0.3898-0.52-0.8038-0.7282-1.2382-0.716 0.1195-1.4515 0.1816-2.2015 0.1816-7.33358 0-13.2786-5.945-13.2786-13.2785Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M15.6286 1C7.54943 1 1 7.54943 1 15.6286c0 8.0791 6.54943 14.6285 14.6286 14.6285" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.8" d="M15.6286 1C7.54943 1 1 7.54943 1 15.6286c0 8.0791 6.54943 14.6285 14.6286 14.6285"/><path fill="currentColor" fill-rule="evenodd" d="M22.8729 25.114c0-1.3811 1.0901-2.5007 2.4359-2.5007 1.3459 0 2.436 1.1196 2.436 2.5007 0 1.38-1.0901 2.4997-2.436 2.4997-1.3458 0-2.4359-1.1197-2.4359-2.4997Zm7.2258-2.0373c-0.0899-0.2248-0.071-0.4785 0.0512-0.6875l0.912-1.5598c0.0898-0.1532 0.0668-0.3504-0.0574-0.4779l-1.0556-1.0832c-0.1232-0.1264-0.3153-0.1511-0.4657-0.0589l-1.5225 0.9374c-0.201 0.1237-0.4495 0.1427-0.667 0.051-0.2181-0.092-0.3797-0.2819-0.4358-0.5118l-0.4329-1.7763c-0.0428-0.1735-0.1953-0.2957-0.3696-0.2957h-1.4931c-0.1744 0-0.3268 0.1222-0.3696 0.2957l-0.433 1.7763c-0.056 0.2299-0.2177 0.4198-0.4357 0.5118-0.2176 0.0917-0.466 0.0727-0.6671-0.051l-1.5225-0.9374c-0.1503-0.0922-0.3424-0.0675-0.4656 0.0589l-1.0556 1.0832c-0.1243 0.1275-0.1473 0.3247-0.0575 0.4779l0.9121 1.5598c0.1222 0.209 0.1411 0.4627 0.0511 0.6875-0.0895 0.2239-0.2806 0.3916-0.5142 0.4514l-1.7165 0.4395c-0.1692 0.0439-0.2882 0.2003-0.2882 0.3803v1.5311c0 0.18 0.119 0.3364 0.2882 0.3804l1.7165 0.4394c0.2336 0.0599 0.4247 0.2276 0.5142 0.4515 0.09 0.2247 0.0711 0.4785-0.0511 0.6874l-0.9121 1.5599c-0.0898 0.1532-0.0668 0.3503 0.0575 0.4778l1.0556 1.0833c0.1232 0.1264 0.3153 0.151 0.4656 0.0589l1.5225-0.9374c0.2011-0.1238 0.4495-0.1428 0.6671-0.051 0.218 0.092 0.3797 0.2818 0.4357 0.5118l0.433 1.7762c0.0428 0.1736 0.1952 0.2968 0.3696 0.2968h1.4931c0.1743 0 0.3268-0.1232 0.3696-0.2968l0.4329-1.7762c0.0561-0.23 0.2177-0.4198 0.4358-0.5118 0.2175-0.0918 0.466-0.0728 0.667 0.051l1.5225 0.9374c0.1504 0.0921 0.3425 0.0675 0.4657-0.0589l1.0556-1.0833c0.1242-0.1275 0.1472-0.3246 0.0574-0.4778l-0.912-1.5599c-0.1222-0.2089-0.1411-0.4627-0.0512-0.6874 0.0896-0.2239 0.2806-0.3916 0.5142-0.4515l1.7166-0.4394c0.1691-0.044 0.2881-0.2004 0.2881-0.3804v-1.5311c0-0.18-0.119-0.3364-0.2881-0.3803l-1.7166-0.4395c-0.2336-0.0598-0.4246-0.2275-0.5142-0.4514Z" clip-rule="evenodd"/></svg>`,
  biggerText: `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 36 23"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M26.58 21.3225806V1m-7.92 4.06451613V1H34.5v4.06451613"/><path d="M22.62 21.3225806h7.92"/><path stroke-linejoin="round" d="M6.78 18.6129032V5.06451613M1.5 7.77419355V5.06451613h10.56v2.70967742"/><path d="M4.14 18.6129032h5.28"/></g></svg>`,
  textSpacing: `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.55293 0.999969C4.75295 0.999969 4.93372 1.11917 5.0125 1.30301L8.01106 8.29982C8.11984 8.55363 8.00226 8.84757 7.74844 8.95635C7.49463 9.06512 7.20069 8.94754 7.09191 8.69373L6.11613 6.41685H2.98973L2.01395 8.69373C1.90517 8.94754 1.61123 9.06512 1.35742 8.95635C1.1036 8.84757 0.986023 8.55363 1.0948 8.29982L4.09336 1.30301C4.17214 1.11917 4.35291 0.999969 4.55293 0.999969ZM4.55293 2.76929L5.75186 5.56685H3.354L4.55293 2.76929ZM11.0562 9.00214C11.2617 9.00214 11.4463 8.87633 11.5215 8.68502L14.2733 1.68299C14.3743 1.42598 14.2478 1.13575 13.9908 1.03475C13.7338 0.933747 13.4436 1.06021 13.3426 1.31722L11.0562 7.13514L8.76973 1.31722C8.66873 1.06021 8.3785 0.933747 8.1215 1.03475C7.86449 1.13575 7.73802 1.42598 7.83902 1.68299L10.5908 8.68502C10.666 8.87633 10.8506 9.00214 11.0562 9.00214ZM14.9537 12.4999C14.9537 12.606 14.9115 12.7077 14.8365 12.7828L12.8365 14.7828C12.6803 14.939 12.4271 14.939 12.2708 14.7828C12.1146 14.6265 12.1146 14.3733 12.2708 14.2171L13.588 12.8999H1.51937L2.83653 14.2171C2.99274 14.3733 2.99274 14.6265 2.83653 14.7828C2.68032 14.939 2.42705 14.939 2.27084 14.7828L0.270843 12.7828C0.195828 12.7077 0.153687 12.606 0.153687 12.4999C0.153687 12.3938 0.195828 12.2921 0.270843 12.2171L2.27084 10.2171C2.42705 10.0609 2.68032 10.0609 2.83653 10.2171C2.99274 10.3733 2.99274 10.6265 2.83653 10.7828L1.51937 12.0999L13.588 12.0999L12.2708 10.7828C12.1146 10.6265 12.1146 10.3733 12.2708 10.2171C12.4271 10.0609 12.6803 10.0609 12.8365 10.2171L14.8365 12.2171C14.9115 12.2921 14.9537 12.3938 14.9537 12.4999Z" fill="#000000"/></svg>`,
  pauseAnimations: `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 37 36"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15.8087111 23.6666667h-1.2702778c-.4429444 0-.8018333-.3598334-.8018333-.8027778v-9.7277778c0-.4429444.3588889-.8027778.8018333-.8027778h1.2702778c.4429445 0 .8027778.3598334.8027778.8027778v9.7277778c0 .4429444-.3598333.8027778-.8027778.8027778m6.6525722 0h-1.2702777c-.442 0-.8018334-.3598334-.8018334-.8027778v-9.7277778c0-.4429444.3598334-.8027778.8018334-.8027778h1.2702777c.4438889 0 .8027778.3598334.8027778.8027778v9.7277778c0 .4429444-.3588889.8027778-.8027778.8027778"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.88888889" d="M18.5 4.77777778V1m0 34v-3.7777778M31.7222222 18H35.5m-34 0h3.77777778m3.87278889-9.34943333L6.47873333 5.97967778M30.5204167 30.0204167l-2.6708889-2.6708889m-.0000945-18.69896113 2.6708889-2.67088889M6.47911111 30.0204167l2.67183333-2.6708889M23.5542889 5.78219444l1.4440555-3.49066666M12.0013722 33.7087556l1.4440556-3.4906667m17.2723778-7.1638 3.4906666 1.4440555M2.79124444 11.5013722l3.49066667 1.4440556m7.15274999-7.15860558L11.9877722 2.2971m13.0246445 31.4061778-1.4468889-3.4897222m7.14765-17.2788945L34.2029 11.4877722M2.79672222 24.5124167l3.48972222-1.4468889"/></g></svg>`,
  hideImages: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 12C16 12 4 32 4 32s12 20 28 20 28-20 28-20S48 12 32 12zm0 32a12 12 0 1112-12 12 12 0 01-12 12z"/><circle cx="32" cy="32" r="8"/></svg>`,
  dyslexiaFont: `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 31 22"><path fill="currentColor" fill-rule="evenodd" d="M.5 22V1.0083333h7.2421899c6.8051611 0 11.6124768 4.3388889 11.6124768 10.4805556C19.3546667 17.6305556 14.547351 22 7.7421899 22H.5Zm2.4348742-4.31h4.8073157c5.3692097 0 9.1463863-2.8616703 9.1463863-7.27 0-4.3807776-3.7771766-7.2422222-9.1463863-7.2422222H2.9348742V17.69ZM26.2735913 4.0333333l.0114609 2.1694445h4.0126191V8.25h-4.001719L26.77 22h-3.535416L23.78 8.25h-2.4238344V6.2027778h2.55923l.0751088-2.1694445C24.0706908 1.6805556 25.6007488 0 27.697782 0 28.6896221 0 29.677687.3666667 30.5 1.0083333l-.9627285 1.6805556c-.3479788-.3666667-.9515992-.6416667-1.627768-.6416667-.8819593 0-1.6420082.825-1.6359122 1.9861111Z"/></svg>`,
  biggerCursor: `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 27 27"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.9983464 11.5517813 9.5269972 9.52699721-4.4465655 4.44656549-9.5269972-9.52699717-4.05145413 9.06403815L1 1.0000004l24.0623846 6.5003268z"/></svg>`,
  lineHeight: `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 47 25"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3.99999962 2.71042226V22.7104223"/><path fill="currentColor" d="m.16814235 20.5270412 3.44487862 4.2104072c.17486379.2137224.48987514.2452235.70359754.0703597a.4999988.4999988 0 0 0 .07035976-.0703597l3.44487862-4.2104072c.17486378-.2137225.14336265-.5287338-.07035976-.7035976-.08933106-.073089-.20119771-.1130213-.31661889-.1130213H.555121c-.27614238 0-.5.2238576-.5.5 0 .1154211.0399323.2272878.11302135.3166189Zm0-161332381L3.61302097.18339592c.17486379-.21372241.48987514-.24522355.70359754-.07035976a.49999975.49999975 0 0 1 .07035976.07035976l3.44487862 4.2104072c.17486378.2137224.14336265.52873375-.07035976.70359754-.08933106.07308905-.20119771.11302135-.31661889.11302135H.555121c-.27614237 0-.5-.22385762-.5-.5 0-.11542118.0399323-.22728783.11302135-.3166189Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.4999996 1.71042226h30m-30 7h30m-30 7.00000004h30m-30 7h24"/></g></svg>`,
  textAlign: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M10 16h44v4H10zm0 12h44v4H10zm0 12h44v4H10zm0 12h44v4H10z"/></svg>`,
  screenReader: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M16 24 L24 24 L32 16 L32 48 L24 40 L16 40 Z" fill="#333" stroke="#555" stroke-width="2"/><path d="M36 20 C42 24, 42 40, 36 44" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M36 12 C48 24, 48 40, 36 52" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round"/><rect x="28" y="48" width="8" height="8" fill="#ccc"/></svg>`,
  resetAll: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" width="100%" height="100%"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="1.84"><path d="M16.20106 8c0 .9667-.189683 1.8872-.5324673 2.7251-.3427843.8372-.8386698 1.5911-1.4517524 2.2246-.6130825.6335-1.3426846 1.1459-2.152902 1.5001-.8108948.3542-1.70172746.5502-2.6372711.5502-.93554365 0-1.8263763-.196-2.63727112-.5502-.81021738-.3542-1.53981948-.8666-2.15290203-1.5001M2.6522744 8c0-.9667.189683-1.8872.53246728-2.7251.34278427-.8372.83866982-1.5911 1.45175237-2.2246.61308255-.6335 1.34268465-1.1459 2.15290203-1.5001C7.6002909 1.196 8.49112355 1 9.4266672 1c.93554364 0 1.8263763.196 2.6372711.5502.8102174.3542 1.5398195.8666 2.152902 1.5001"></path><path stroke-linejoin="round" d="m4.92576062 6.96092-2.48958935 1.484L1 5.87242m13.0125924 2.93832 2.3886509-1.652L18 9.62694"></path></g></svg>`,
  voiceControl: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 44a12 12 0 0012-12V20a12 12 0 10-24 0v12a12 12 0 0012 12z" fill="#333"/><path d="M20 32h24v4H20z" fill="#555"/><path d="M32 48v8" stroke="#555" stroke-width="4" stroke-linecap="round"/></svg>`,
  fontSelection: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="32" y="40" font-family="serif" font-size="24" text-anchor="middle" fill="#333">Aa</text><path d="M8 48h48v2H8z"/></svg>`,
  colorFilter: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="24" fill="none" stroke="#333" stroke-width="2"/><path d="M32 8a24 24 0 000 48V8z" fill="#f00" opacity="0.3"/><path d="M32 8a24 24 0 000 48" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="4,2"/></svg>`,
  saturation: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="20" cy="32" r="12" fill="#ff0000" opacity="0.7"/><circle cx="32" cy="32" r="12" fill="#00ff00" opacity="0.7"/><circle cx="44" cy="32" r="12" fill="#0000ff" opacity="0.7"/></svg>`,
  reducedMotion: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="16" y="24" width="8" height="16" fill="#333"/><rect x="28" y="24" width="8" height="16" fill="#333"/><rect x="40" y="24" width="8" height="16" fill="#333"/></svg>`,
  focusIndicator: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="12" y="12" width="40" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="6,3"/><circle cx="32" cy="32" r="8" fill="currentColor"/></svg>`,
  highlightLinks: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="8" y="14" width="48" height="10" rx="2" fill="currentColor" opacity="0.25"/><rect x="8" y="28" width="36" height="10" rx="2" fill="currentColor" opacity="0.25"/><rect x="8" y="42" width="42" height="10" rx="2" fill="currentColor" opacity="0.25"/><line x1="8" y1="23" x2="56" y2="23" stroke="currentColor" stroke-width="2"/><line x1="8" y1="37" x2="44" y2="37" stroke="currentColor" stroke-width="2"/><line x1="8" y1="51" x2="50" y2="51" stroke="currentColor" stroke-width="2"/></svg>`,
  readingGuide: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" stroke-width="3" opacity="0.7"/><line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" stroke-width="1" stroke-dasharray="4,2"/><polygon points="32,22 28,28 36,28" fill="currentColor"/></svg>`,
  readingWindow: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="4" y="4" width="56" height="56" rx="4" fill="currentColor" opacity="0.3"/><rect x="4" y="22" width="56" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="6" y="24" width="52" height="16" fill="white" opacity="0.9"/></svg>`,
  altText: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="6" y="10" width="52" height="36" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="20" cy="22" r="5" fill="currentColor"/><path d="M10 40l12-12 8 8 10-10 14 14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="18" y="48" width="28" height="10" rx="2" fill="currentColor"/><text x="32" y="56" text-anchor="middle" font-family="Arial" font-size="8" font-weight="bold" fill="white">ALT</text></svg>`,
  // Enhanced feature icons (v1.3.0)
  hoverHighlight: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="10" y="12" width="34" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="3"/><rect x="14" y="16" width="26" height="6" rx="2" fill="currentColor" opacity="0.5"/><path d="M38 40l6 16 4-7 7 3z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  enlargeButtons: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="8" y="20" width="48" height="24" rx="6" fill="none" stroke="currentColor" stroke-width="3"/><path d="M20 32h24M20 32l6-6M20 32l6 6M44 32l-6-6M44 32l-6 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  muteMedia: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M12 24h10l12-10v36L22 40H12z" fill="currentColor"/><path d="M44 24l14 16M58 24L44 40" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
  readableFont: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="32" y="42" font-family="Verdana, sans-serif" font-size="34" text-anchor="middle" fill="currentColor">Aa</text><path d="M10 52h44" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  magnifier: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="26" cy="26" r="16" fill="none" stroke="currentColor" stroke-width="4"/><path d="M38 38l16 16" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M26 18v16M18 26h16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  textMagnifier: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="26" cy="26" r="16" fill="none" stroke="currentColor" stroke-width="4"/><path d="M38 38l16 16" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><text x="26" y="33" font-family="serif" font-size="18" text-anchor="middle" fill="currentColor">T</text></svg>`,
  readFocus: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="6" y="26" width="52" height="14" rx="3" fill="currentColor" opacity="0.25"/><path d="M10 20h44M10 46h34" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.4"/><rect x="6" y="26" width="52" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
  virtualKeyboard: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="4" y="16" width="56" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M12 24h2M20 24h2M28 24h2M36 24h2M44 24h2M52 24h0M12 32h2M20 32h2M28 32h2M36 32h2M44 32h2M22 40h20" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  readableMode: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="10" y="8" width="44" height="48" rx="3" fill="none" stroke="currentColor" stroke-width="3"/><path d="M18 20h28M18 28h28M18 36h20M18 44h24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  dictionary: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M14 10h30a6 6 0 016 6v38a4 4 0 00-4-4H14z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M14 50a4 4 0 014-4h32" fill="none" stroke="currentColor" stroke-width="3"/><text x="30" y="38" font-family="serif" font-size="20" text-anchor="middle" fill="currentColor">A</text></svg>`,
  customColor: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 8a24 24 0 000 48c4 0 6-3 6-6 0-3-2-4-2-7 0-2 2-4 5-4h5a10 10 0 0010-10C56 18 45 8 32 8z" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="22" cy="24" r="3" fill="currentColor"/><circle cx="32" cy="18" r="3" fill="currentColor"/><circle cx="42" cy="24" r="3" fill="currentColor"/></svg>`,
};

// Selectable launcher-button icons. The integrator picks one at setup time
// (npm install prompt or WordPress admin) via ENABLESTACK_CONFIG.icon.
// Paths carry no fill so they inherit the button's white fill from CSS.
const EU_LAUNCHER_ICONS = {
  // Classic accessibility person (unchanged default)
  default: icons.buttonsvg,
  // Wheelchair — International Symbol of Access
  wheelchair: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 6.05 10 6.99 10 8.04V14c0 1.1.9 2 2 2h5v6h2v-7c0-1.1-.9-2-2-2h-3V9.66c1.07.98 2.57 1.54 4 1.54z"></path><path d="M12.83 18c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.42 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></svg>`,
  // Active person (accessibility "new" — striding with raised arm)
  person: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><circle cx="12" cy="4" r="2"></circle><path d="m15.89 8.11-.01-.01c-.4-.4-1.07-1.1-2.36-1.1h-3.13C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41-4.47-4.48z"></path></svg>`,
  // Eye — vision / visibility
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>`
};

// EnableUser wordmark logo (transparent PNG data URI) shown in the panel header.
const EU_LOGO = 'data:image/png;base64,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';

// Resolve the configured launcher icon (falls back to the default).
function euLauncherIconSvg() {
  const key = (typeof WIDGET_CONFIG !== 'undefined' && WIDGET_CONFIG.icon) || 'default';
  return EU_LAUNCHER_ICONS[key] || EU_LAUNCHER_ICONS.default;
}

// ===========================================
// SHADOW DOM SETUP
// ===========================================

let shadowRoot = null;

// Inject styles into the page (NOT the widget)
function injectPageStyles() {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = pageStyles;
  styleSheet.id = 'eu-accessibility-page-styles';
  document.head.appendChild(styleSheet);

  // Add SVG color blindness filters to main document
  const svgFilters = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgFilters.style.position = 'absolute';
  svgFilters.style.width = '0';
  svgFilters.setAttribute('class', 'eu-accessibility-filters');
  svgFilters.style.height = '0';
  svgFilters.innerHTML = `
    <defs>
      <filter id="protanopia-filter">
        <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
      </filter>
      <filter id="deuteranopia-filter">
        <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
      </filter>
      <filter id="tritanopia-filter">
        <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
      </filter>
    </defs>
  `;
  document.body.appendChild(svgFilters);
}

// Visually-hidden aria-live region so tool changes are announced to screen readers.
const euAnnouncer = {
  region: null,
  attach: function (root) {
    if (this.region) return;
    const el = document.createElement('div');
    el.className = 'eu-sr-only';
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    root.appendChild(el);
    this.region = el;
  },
  say: function (message) {
    if (!this.region || !message) return;
    // Clear then set (after a tick) so repeated identical messages re-announce.
    this.region.textContent = '';
    const region = this.region;
    setTimeout(function () { region.textContent = message; }, 40);
  }
};

// Create shadow DOM container
function createShadowContainer() {
  const container = document.createElement('div');
  container.id = 'eu-accessibility-widget-container';
  document.body.appendChild(container);

  // Create shadow root
  shadowRoot = container.attachShadow({ mode: 'open' });

  // Add widget styles to shadow DOM
  const styleElement = document.createElement('style');
  styleElement.textContent = widgetStyles;
  shadowRoot.appendChild(styleElement);

  // Live region for screen-reader announcements
  euAnnouncer.attach(shadowRoot);

  return shadowRoot;
}

// ===========================================
// CORE UTILITY FUNCTIONS
// ===========================================

// Cache for DOM elements to improve performance
const domCache = {
  get body() {
    return document.body;
  },
  get documentElement() {
    return document.documentElement;
  },
  images: null,
  lastImageUpdate: 0,
  getImages: function () {
    const now = Date.now();
    if (!this.images || now - this.lastImageUpdate > 5000) {
      this.images = document.querySelectorAll('img');
      this.lastImageUpdate = now;
    }
    return this.images;
  }
};

// Apply saved settings from localStorage (optimized)
function applySettings() {
  // Check if body element exists
  if (!domCache.body || !domCache.documentElement) {
    console.warn('Body or document element not ready yet');
    return;
  }

  // Simple boolean toggles that map directly to a body class. Multi-level
  // features (text size, contrast, alignment, etc.) are handled separately below.
  const settings = [
    { key: 'biggerCursor', className: 'eu-bigger-cursor' },
    { key: 'pauseAnimations', className: 'eu-pause-animations' },
    { key: 'enlargeButtons', className: 'eu-enlarge-buttons' },
    { key: 'readableFont', className: 'eu-readable-font' },
  ];

  // Batch DOM operations for better performance
  const bodyClassesToAdd = [];
  const bodyClassesToRemove = [];
  const docClassesToAdd = [];
  const docClassesToRemove = [];

  settings.forEach(({ key, className, target = domCache.body }) => {
    const isActive = localStorage.getItem(key) === 'true';
    if (className) {
      if (target === domCache.documentElement) {
        if (isActive) {
          docClassesToAdd.push(className);
        } else {
          docClassesToRemove.push(className);
        }
      } else {
        if (isActive) {
          bodyClassesToAdd.push(className);
        } else {
          bodyClassesToRemove.push(className);
        }
      }
    }
  });

  // Apply all class changes at once - ONLY remove classes that start with 'eu-'
  if (bodyClassesToAdd.length > 0) {
    domCache.body.classList.add(...bodyClassesToAdd);
  }
  if (bodyClassesToRemove.length > 0) {
    // Only remove our own classes, never remove classes that don't start with 'eu-'
    bodyClassesToRemove.forEach(className => {
      if (className.startsWith('eu-')) {
        domCache.body.classList.remove(className);
      }
    });
  }
  if (docClassesToAdd.length > 0) {
    domCache.documentElement.classList.add(...docClassesToAdd);
  }
  if (docClassesToRemove.length > 0) {
    // Only remove our own classes, never remove classes that don't start with 'eu-'
    docClassesToRemove.forEach(className => {
      if (className.startsWith('eu-')) {
        domCache.documentElement.classList.remove(className);
      }
    });
  }

  // Handle font selection - only remove widget's own font classes
  const fontClasses = ['eu-font-arial', 'eu-font-times', 'eu-font-verdana', 'eu-font-dyslexic'];
  fontClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedFont = localStorage.getItem('fontSelection');
  if (selectedFont) {
    domCache.body.classList.add(`eu-font-${selectedFont}`);
  }

  // Handle color filters - only remove widget's own filter classes
  const filterClasses = ['eu-filter-protanopia', 'eu-filter-deuteranopia', 'eu-filter-tritanopia', 'eu-filter-grayscale'];
  filterClasses.forEach(className => {
    if (domCache.documentElement.classList.contains(className)) {
      domCache.documentElement.classList.remove(className);
    }
  });
  const selectedFilter = localStorage.getItem('colorFilter');
  if (selectedFilter) {
    domCache.documentElement.classList.add(`eu-filter-${selectedFilter}`);
  }

  // Handle saturation filters - only remove widget's own saturation classes
  const saturationClasses = ['eu-saturation-low', 'eu-saturation-high', 'eu-saturation-none'];
  saturationClasses.forEach(className => {
    if (domCache.documentElement.classList.contains(className)) {
      domCache.documentElement.classList.remove(className);
    }
  });
  const selectedSaturation = localStorage.getItem('saturation');
  if (selectedSaturation) {
    domCache.documentElement.classList.add(`eu-saturation-${selectedSaturation}`);
  }

  // Handle text alignment - only remove widget's own alignment classes
  const alignClasses = ['eu-text-align-left', 'eu-text-align-center', 'eu-text-align-right'];
  alignClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedAlign = localStorage.getItem('textAlign');
  if (selectedAlign) {
    domCache.body.classList.add(`eu-text-align-${selectedAlign}`);
  }

  // Handle bigger text - only remove widget's own text size classes
  const textClasses = ['eu-bigger-text-medium', 'eu-bigger-text-large', 'eu-bigger-text-xlarge'];
  textClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedTextSize = localStorage.getItem('biggerText');
  if (selectedTextSize) {
    domCache.body.classList.add(`eu-bigger-text-${selectedTextSize}`);
  }

  // Handle high contrast - only remove widget's own contrast classes
  const contrastClasses = ['eu-high-contrast-medium', 'eu-high-contrast-high', 'eu-high-contrast-ultra'];
  contrastClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedContrast = localStorage.getItem('highContrast');
  if (selectedContrast) {
    domCache.body.classList.add(`eu-high-contrast-${selectedContrast}`);
  }

  // Handle Text Spacing (3 Levels) - only remove widget's own spacing classes
  const spacingClasses = ['eu-text-spacing-light', 'eu-text-spacing-medium', 'eu-text-spacing-heavy'];
  spacingClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedSpacing = localStorage.getItem('textSpacing');
  if (selectedSpacing) {
    domCache.body.classList.add(`eu-text-spacing-${selectedSpacing}`);
  }

  // Handle Line Height (3 Levels) - only remove widget's own line height classes
  const lineHeightClasses = ['eu-line-height-2em', 'eu-line-height-3em', 'eu-line-height-4em'];
  lineHeightClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedLineHeight = localStorage.getItem('lineHeight');
  if (selectedLineHeight) {
    domCache.body.classList.add(`eu-line-height-${selectedLineHeight}`);
  }

  // Handle images with cached query
  const hideImages = localStorage.getItem('hideImages') === 'true';
  const displayStyle = hideImages ? 'none' : '';
  domCache.getImages().forEach((img) => {
    img.style.display = displayStyle;
  });

  // Restore new toggle features
  if (localStorage.getItem('focusIndicator') === 'true') {
    toggleFocusIndicator(true);
  }
  if (localStorage.getItem('highlightLinks') === 'true') {
    toggleHighlightLinks(true);
  }
  if (localStorage.getItem('readingGuide') === 'true') {
    readingGuide.toggle(true);
  }
  if (localStorage.getItem('readingWindow') === 'true') {
    readingWindow.toggle(true);
  }
  if (localStorage.getItem('showAltText') === 'true' && !altTextViewer.active) {
    altTextViewer.toggle(true);
  }

  // Restore enhanced features (v1.3.0)
  if (localStorage.getItem('hoverHighlight') === 'true') hoverHighlight.toggle(true);
  if (localStorage.getItem('muteMedia') === 'true') muteMedia.toggle(true);
  if (localStorage.getItem('textMagnifier') === 'true') textMagnifier.toggle(true);
  if (localStorage.getItem('readFocus') === 'true') readFocus.toggle(true);
  if (localStorage.getItem('pauseAnimations') === 'true') mediaFreeze.enable();
  if (localStorage.getItem('virtualKeyboard') === 'true') virtualKeyboard.toggle(true);
  if (localStorage.getItem('dictionary') === 'true') dictionary.toggle(true);
  applyPageMagnifier(localStorage.getItem('pageMagnifier'));
  customColor.restore();
  // Reader View is an on-demand overlay — never auto-reopen it on load.
  localStorage.removeItem('readableMode');

  if (screenReader.active && screenReader.isSupported) {
    document.addEventListener('focusin', screenReader.handleFocus);
    document.addEventListener('mouseover', screenReader.handleHover);
  }

  if (voiceControl.isActive && voiceControl.isSupported) {
    voiceControl.startListening();
  }
}

// ===========================================
// UI COMPONENTS
// ===========================================

// Create the accessibility button
function createAccessibilityButton() {
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'eu-accessibility-fixed-button';

  const button = document.createElement('button');
  button.id = 'eu-accessibility-button';
  button.innerHTML = euLauncherIconSvg();
  button.setAttribute('aria-label', getTranslation('accessibilityMenu'));

  // --- Draggable launcher (a plain click still opens the menu) ---
  let dragState = null;
  let didDrag = false;
  const DRAG_THRESHOLD = 5;

  button.addEventListener('click', function () {
    // Ignore the click that ends a drag so dragging never opens the menu.
    if (didDrag) { didDrag = false; return; }
    toggleMenu();
  });

  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  function clampAndPlace(left, top) {
    const size = buttonContainer.getBoundingClientRect();
    left = Math.max(0, Math.min(left, window.innerWidth - size.width));
    top = Math.max(0, Math.min(top, window.innerHeight - size.height));
    // The base stylesheet positions the launcher with !important, so inline
    // values must also be !important to take effect while dragging.
    buttonContainer.style.setProperty('left', left + 'px', 'important');
    buttonContainer.style.setProperty('top', top + 'px', 'important');
    buttonContainer.style.setProperty('right', 'auto', 'important');
    buttonContainer.style.setProperty('bottom', 'auto', 'important');
  }

  button.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    const rect = buttonContainer.getBoundingClientRect();
    dragState = { startX: e.clientX, startY: e.clientY, originLeft: rect.left, originTop: rect.top };
    didDrag = false;
  });

  window.addEventListener('pointermove', function (e) {
    if (!dragState) return;
    const dx = e.clientX - dragState.startX;
    const dy = e.clientY - dragState.startY;
    if (!didDrag && (Math.abs(dx) + Math.abs(dy)) < DRAG_THRESHOLD) return;
    didDrag = true;
    buttonContainer.classList.add('eu-dragging');
    clampAndPlace(dragState.originLeft + dx, dragState.originTop + dy);
  });

  window.addEventListener('pointerup', function () {
    if (!dragState) return;
    if (didDrag) {
      buttonContainer.classList.remove('eu-dragging');
      const rect = buttonContainer.getBoundingClientRect();
      try {
        localStorage.setItem('euButtonPos', JSON.stringify({ left: Math.round(rect.left), top: Math.round(rect.top) }));
      } catch (e) { /* ignore */ }
    }
    dragState = null;
  });

  buttonContainer.appendChild(button);
  shadowRoot.appendChild(buttonContainer);

  // Restore a previously dragged position
  try {
    const saved = JSON.parse(localStorage.getItem('euButtonPos') || 'null');
    if (saved && typeof saved.left === 'number' && typeof saved.top === 'number') {
      clampAndPlace(saved.left, saved.top);
    }
  } catch (e) { /* ignore */ }

  // Reposition on resize so the launcher never lands off-screen
  window.addEventListener('resize', function () {
    if (buttonContainer.style.left) {
      clampAndPlace(parseInt(buttonContainer.style.left, 10) || 0, parseInt(buttonContainer.style.top, 10) || 0);
    }
  });
}

// Reset all accessibility settings
function resetAccessibilitySettings() {
  const keys = [
    'biggerCursor',
    'biggerText',
    'dyslexiaFont',
    'hideImages',
    'lineHeight',
    'pauseAnimations',
    'screenReader',
    'textAlign',
    'textSpacing',
    'highContrast',
    'voiceControl',
    'fontSelection',
    'colorFilter',
    'saturation',
    'focusIndicator',
    'highlightLinks',
    'readingGuide',
    'readingWindow',
    'showAltText',
    'euActiveProfile',
    // Enhanced features (v1.3.0)
    'hoverHighlight',
    'enlargeButtons',
    'muteMedia',
    'readableFont',
    'pageMagnifier',
    'textMagnifier',
    'readFocus',
    'virtualKeyboard',
    'readableMode',
    'dictionary',
    'customColorBg',
    'customColorText',
    'customColorHead',
  ];
  keys.forEach((key) => localStorage.removeItem(key));

  // Remove only widget's own CSS classes - never touch existing body/document classes
  // Check if body and documentElement exist first
  if (!document.body || !document.documentElement) {
    console.warn('Body or document element not ready during reset');
    return;
  }

  // Remove body classes only if they exist and start with 'eu-'
  const cssClasses = [
    'eu-bigger-cursor',
    'eu-bigger-text',
    'eu-dyslexia-font',
    'eu-pause-animations',
    'eu-text-align',
    'eu-font-arial',
    'eu-font-times',
    'eu-font-verdana',
    'eu-font-dyslexic',
    'eu-high-contrast-medium',
    'eu-high-contrast-high',
    'eu-high-contrast-ultra',
    'eu-bigger-text-medium',
    'eu-bigger-text-large',
    'eu-bigger-text-xlarge',
    'eu-text-spacing-light',
    'eu-text-spacing-medium',
    'eu-text-spacing-heavy',
    'eu-line-height-2em',
    'eu-line-height-3em',
    'eu-line-height-4em',
    'eu-text-align-left',
    'eu-text-align-center',
    'eu-text-align-right',
    'eu-focus-indicator',
    'eu-highlight-links',
    'eu-enlarge-buttons',
    'eu-readable-font'
  ];
  cssClasses.forEach(cls => {
    if (document.body.classList.contains(cls)) {
      document.body.classList.remove(cls);
    }
  });

  // Remove document element classes only if they exist and start with 'eu-'
  const documentClasses = [
    'eu-filter-protanopia',
    'eu-filter-deuteranopia',
    'eu-filter-tritanopia',
    'eu-filter-grayscale',
    'eu-saturation-low',
    'eu-saturation-high',
    'eu-saturation-none'
  ];
  documentClasses.forEach(cls => {
    if (document.documentElement.classList.contains(cls)) {
      document.documentElement.classList.remove(cls);
    }
  });

  domCache.getImages().forEach((img) => (img.style.display = ''));

  if (screenReader.active) {
    screenReader.toggle(false);
  }

  if (voiceControl.isActive) {
    voiceControl.toggle(false);
  }

  // Reset new features
  toggleFocusIndicator(false);
  toggleHighlightLinks(false);
  readingGuide.toggle(false);
  readingWindow.toggle(false);
  altTextViewer.toggle(false);

  // Reset enhanced features (v1.3.0)
  hoverHighlight.toggle(false);
  muteMedia.toggle(false);
  mediaFreeze.disable();
  textMagnifier.toggle(false);
  readFocus.toggle(false);
  virtualKeyboard.toggle(false);
  readableMode.toggle(false);
  dictionary.toggle(false);
  applyPageMagnifier(null);
  customColor.clear();
  if (customColor.panel) customColor.panel.classList.remove('eu-open');

  applySettings();

  const buttons = shadowRoot.querySelectorAll('#eu-accessibility-menu .eu-accessibility-option');
  buttons.forEach((button) => {
    button.classList.remove('active');
    button.setAttribute('aria-pressed', 'false');

    // Reset step indicators
    const steps = button.querySelectorAll('.eu-option-step');
    steps.forEach(step => step.classList.remove('active'));
  });

  // Clear profile chips and re-derive all button states
  refreshMenuButtonStates();
}

// Create toggle buttons for accessibility options
function createToggleButton(
  buttonText,
  localStorageKey,
  className,
  targetElement = document.body,
  customToggleFunction = null,
  iconSVG = '',
  requiresFeature = null,
  optionId = null
) {
  const button = document.createElement('button');
  button.innerHTML = `
    <span class="eu-icon">${iconSVG}</span>
    <span class="eu-button-text">${buttonText}</span>
  `;
  button.setAttribute('data-key', localStorageKey);
  button.setAttribute('aria-label', buttonText);
  button.classList.add('eu-accessibility-option');
  if (optionId) {
    button.setAttribute('data-accessibility-option-id', optionId);
  }

  // Check if feature is supported
  if (requiresFeature && !requiresFeature.isSupported) {
    button.disabled = true;
    button.setAttribute('title', `${buttonText} ${getTranslation('notSupportedBrowser')}`);
    button.style.opacity = '0.5';
    return button;
  }

  const isActive = localStorage.getItem(localStorageKey) === 'true';
  button.setAttribute('aria-pressed', isActive);
  button.setAttribute('role', 'switch');
  if (isActive) {
    button.classList.add('active');
  }

  button.addEventListener('click', function () {
    handleToggle();
  });

  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  });

  function handleToggle() {
    const newIsActive = localStorage.getItem(localStorageKey) !== 'true';

    // If there's a custom toggle function, call it and check if it succeeded
    if (customToggleFunction) {
      const success = customToggleFunction(newIsActive);
      if (success === false) {
        // Feature not supported or failed
        return;
      }
    }

    localStorage.setItem(localStorageKey, newIsActive);
    button.setAttribute('aria-pressed', newIsActive);

    if (newIsActive) {
      button.classList.add('active');
      if (className) {
        targetElement.classList.add(className);
      }
    } else {
      button.classList.remove('active');
      if (className) {
        targetElement.classList.remove(className);
      }
    }
  }

  return button;
}

// Create special action buttons (for cycling through options)
function createActionButton(buttonText, actionFunction, iconSVG, optionsConfig = null, optionId = null) {
  const button = document.createElement('button');

  let buttonHTML = `
    <span class="eu-icon">${iconSVG}</span>
    <span class="eu-button-text">${buttonText}</span>
  `;

  // Add option steps if configured
  if (optionsConfig) {
    buttonHTML += '<div class="eu-option-steps">';
    for (let i = 0; i < optionsConfig.count; i++) {
      buttonHTML += '<div class="eu-option-step"></div>';
    }
    buttonHTML += '</div>';
  }

  button.innerHTML = buttonHTML;
  button.setAttribute('aria-label', buttonText);
  button.classList.add('eu-accessibility-option');
  button.setAttribute('data-options-config', optionsConfig ? JSON.stringify(optionsConfig) : '');
  if (optionId) {
    button.setAttribute('data-accessibility-option-id', optionId);
    button.setAttribute('data-key', optionId); // Add data-key for voice commands
  }

  // Update initial status
  updateActionButtonStatus(button, optionId, optionsConfig);

  button.addEventListener('click', function () {
    const result = actionFunction();
    if (result) {
      updateActionButtonStatus(button, optionId, optionsConfig);
      euAnnouncer.say(buttonText + ': ' + result);
    }
  });

  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const result = actionFunction();
      if (result) {
        updateActionButtonStatus(button, optionId, optionsConfig);
        euAnnouncer.say(buttonText + ': ' + result);
      }
    }
  });

  return button;
}

// Update action button status on page load
function updateActionButtonStatus(button, optionId, optionsConfig) {
  if (!optionsConfig) return;

  const steps = button.querySelectorAll('.eu-option-step');
  let currentIndex = -1;

  if (optionId === 'fontSelection') {
    const currentFont = localStorage.getItem('fontSelection');
    const fonts = ['arial', 'times', 'verdana', 'dyslexic'];
    currentIndex = currentFont ? fonts.indexOf(currentFont) : -1;
  } else if (optionId === 'colorFilter') {
    const currentFilter = localStorage.getItem('colorFilter');
    const filters = ['protanopia', 'deuteranopia', 'tritanopia', 'grayscale'];
    currentIndex = currentFilter ? filters.indexOf(currentFilter) : -1;
  } else if (optionId === 'textAlign') {
    const currentAlign = localStorage.getItem('textAlign');
    const alignments = ['left', 'center', 'right'];
    currentIndex = currentAlign ? alignments.indexOf(currentAlign) : -1;
  } else if (optionId === 'biggerText') {
    const currentSize = localStorage.getItem('biggerText');
    const sizes = ['medium', 'large', 'xlarge'];
    currentIndex = currentSize ? sizes.indexOf(currentSize) : -1;
  } else if (optionId === 'highContrast') {
    const currentContrast = localStorage.getItem('highContrast');
    const contrasts = ['medium', 'high', 'ultra'];
    currentIndex = currentContrast ? contrasts.indexOf(currentContrast) : -1;
  } else if (optionId === 'textSpacing') {
    const currentSpacing = localStorage.getItem('textSpacing');
    const spacings = ['light', 'medium', 'heavy'];
    currentIndex = currentSpacing ? spacings.indexOf(currentSpacing) : -1;
  } else if (optionId === 'lineHeight') {
    const currentLineHeight = localStorage.getItem('lineHeight');
    const heights = ['2em', '3em', '4em'];
    currentIndex = currentLineHeight ? heights.indexOf(currentLineHeight) : -1;
  } else if (optionId === 'saturation') {
    const currentSaturation = localStorage.getItem('saturation');
    const saturations = ['low', 'high', 'none'];
    currentIndex = currentSaturation ? saturations.indexOf(currentSaturation) : -1;
  } else if (optionId === 'pageMagnifier') {
    const currentMag = localStorage.getItem('pageMagnifier');
    const mags = ['1.25', '1.5', '2'];
    currentIndex = currentMag ? mags.indexOf(currentMag) : -1;
  }

  // Update step indicators - show all previous steps as active
  steps.forEach((step, index) => {
    if (index <= currentIndex) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  // Toggle active class on button itself if any option is selected
  if (currentIndex !== -1) {
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
  } else {
    button.classList.remove('active');
    button.setAttribute('aria-pressed', 'false');
  }
}

// ===========================================
// FEATURE TOGGLE FUNCTIONS
// ===========================================

// Function to hide or show images (optimized)
function toggleHideImages(isActive) {
  const displayStyle = isActive ? 'none' : '';
  domCache.getImages().forEach((img) => {
    img.style.display = displayStyle;
  });
}

// Font selection handler (optimized)
function handleFontSelection() {
  const fonts = ['arial', 'times', 'verdana', 'dyslexic'];
  const currentFont = localStorage.getItem('fontSelection') || 'default';
  const currentIndex = fonts.indexOf(currentFont);
  const nextIndex = (currentIndex + 1) % (fonts.length + 1); // +1 for default

  // Remove only widget's own font classes
  const fontClasses = ['eu-font-arial', 'eu-font-times', 'eu-font-verdana', 'eu-font-dyslexic'];
  fontClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === fonts.length) {
    // Default font
    localStorage.removeItem('fontSelection');
    return getTranslation('defaultFont');
  } else {
    const selectedFont = fonts[nextIndex];
    localStorage.setItem('fontSelection', selectedFont);
    domCache.body.classList.add(`eu-font-${selectedFont}`);
    return selectedFont.charAt(0).toUpperCase() + selectedFont.slice(1);
  }
}

// Saturation handler with 3 states (low, high, none/grayscale)
function handleSaturation() {
  const saturations = ['low', 'high', 'none'];
  const currentSaturation = localStorage.getItem('saturation') || 'default';
  const currentIndex = saturations.indexOf(currentSaturation);
  const nextIndex = (currentIndex + 1) % (saturations.length + 1); // +1 for default

  // Remove only widget's own saturation classes
  const saturationClasses = ['eu-saturation-low', 'eu-saturation-high', 'eu-saturation-none'];
  saturationClasses.forEach(className => {
    if (domCache.documentElement.classList.contains(className)) {
      domCache.documentElement.classList.remove(className);
    }
  });

  if (nextIndex === saturations.length) {
    // Default saturation
    localStorage.removeItem('saturation');
    return 'Default';
  } else {
    const selectedSaturation = saturations[nextIndex];
    localStorage.setItem('saturation', selectedSaturation);
    domCache.documentElement.classList.add(`eu-saturation-${selectedSaturation}`);
    if (selectedSaturation === 'none') {
      return 'No Saturation';
    }
    return selectedSaturation.charAt(0).toUpperCase() + selectedSaturation.slice(1) + ' Saturation';
  }
}

// Color filter handler (optimized)
function handleColorFilter() {
  const filters = ['protanopia', 'deuteranopia', 'tritanopia', 'grayscale'];
  const currentFilter = localStorage.getItem('colorFilter') || 'none';
  const currentIndex = filters.indexOf(currentFilter);
  const nextIndex = (currentIndex + 1) % (filters.length + 1); // +1 for none

  // Remove only widget's own filter classes
  const filterClasses = ['eu-filter-protanopia', 'eu-filter-deuteranopia', 'eu-filter-tritanopia', 'eu-filter-grayscale'];
  filterClasses.forEach(className => {
    if (domCache.documentElement.classList.contains(className)) {
      domCache.documentElement.classList.remove(className);
    }
  });

  if (nextIndex === filters.length) {
    // No filter
    localStorage.removeItem('colorFilter');
    return getTranslation('noFilter');
  } else {
    const selectedFilter = filters[nextIndex];
    localStorage.setItem('colorFilter', selectedFilter);
    domCache.documentElement.classList.add(`eu-filter-${selectedFilter}`);
    return selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1);
  }
}

// Text align handler with 3 states
function handleTextAlign() {
  const alignments = ['left', 'center', 'right'];
  const currentAlign = localStorage.getItem('textAlign') || 'none';
  const currentIndex = alignments.indexOf(currentAlign);
  const nextIndex = (currentIndex + 1) % (alignments.length + 1); // +1 for none

  // Remove only widget's own alignment classes
  const alignClasses = ['eu-text-align-left', 'eu-text-align-center', 'eu-text-align-right'];
  alignClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === alignments.length) {
    // Default alignment
    localStorage.removeItem('textAlign');
    return getTranslation('default');
  } else {
    const selectedAlign = alignments[nextIndex];
    localStorage.setItem('textAlign', selectedAlign);
    domCache.body.classList.add(`eu-text-align-${selectedAlign}`);
    return selectedAlign.charAt(0).toUpperCase() + selectedAlign.slice(1);
  }
}

// Bigger text handler with 3 states
function handleBiggerText() {
  const textSizes = ['medium', 'large', 'xlarge'];
  const currentSize = localStorage.getItem('biggerText') || 'none';
  const currentIndex = textSizes.indexOf(currentSize);
  const nextIndex = (currentIndex + 1) % (textSizes.length + 1); // +1 for none

  // Remove only widget's own text size classes
  const textClasses = ['eu-bigger-text-medium', 'eu-bigger-text-large', 'eu-bigger-text-xlarge'];
  textClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === textSizes.length) {
    // Default text size
    localStorage.removeItem('biggerText');
    return getTranslation('default');
  } else {
    const selectedSize = textSizes[nextIndex];
    localStorage.setItem('biggerText', selectedSize);
    domCache.body.classList.add(`eu-bigger-text-${selectedSize}`);
    return selectedSize === 'xlarge' ? 'X-Large' : selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1);
  }
}

// High contrast handler with 3 states
function handleHighContrast() {
  const contrastLevels = ['medium', 'high', 'ultra'];
  const currentContrast = localStorage.getItem('highContrast') || 'none';
  const currentIndex = contrastLevels.indexOf(currentContrast);
  const nextIndex = (currentIndex + 1) % (contrastLevels.length + 1); // +1 for none

  // Remove only widget's own contrast classes
  const contrastClasses = ['eu-high-contrast-medium', 'eu-high-contrast-high', 'eu-high-contrast-ultra'];
  contrastClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === contrastLevels.length) {
    // Default contrast
    localStorage.removeItem('highContrast');
    return getTranslation('default');
  } else {
    const selectedContrast = contrastLevels[nextIndex];
    localStorage.setItem('highContrast', selectedContrast);
    domCache.body.classList.add(`eu-high-contrast-${selectedContrast}`);
    return selectedContrast.charAt(0).toUpperCase() + selectedContrast.slice(1);
  }
}

// Text Spacing Handler with 3 states (1em, 2em, 4em equivalents)
function handleTextSpacing() {
  const spacings = ['light', 'medium', 'heavy']; // Maps to 1, 2, 4 approx
  const currentSpacing = localStorage.getItem('textSpacing') || 'none';
  const currentIndex = spacings.indexOf(currentSpacing);
  const nextIndex = (currentIndex + 1) % (spacings.length + 1); // +1 for none

  // Remove only widget's own spacing classes
  const spacingClasses = ['eu-text-spacing-light', 'eu-text-spacing-medium', 'eu-text-spacing-heavy'];
  spacingClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === spacings.length) {
    // Default
    localStorage.removeItem('textSpacing');
    return getTranslation('default');
  } else {
    const selectedSpacing = spacings[nextIndex];
    localStorage.setItem('textSpacing', selectedSpacing);
    domCache.body.classList.add(`eu-text-spacing-${selectedSpacing}`);
    return selectedSpacing.charAt(0).toUpperCase() + selectedSpacing.slice(1);
  }
}

// Line Height Handler with 3 states (2em, 3em, 4em)
function handleLineHeight() {
  const heights = ['2em', '3em', '4em'];
  const currentHeight = localStorage.getItem('lineHeight') || 'none';
  const currentIndex = heights.indexOf(currentHeight);
  const nextIndex = (currentIndex + 1) % (heights.length + 1); // +1 for none

  // Remove only widget's own line height classes
  const heightClasses = ['eu-line-height-2em', 'eu-line-height-3em', 'eu-line-height-4em'];
  heightClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === heights.length) {
    // Default
    localStorage.removeItem('lineHeight');
    return getTranslation('default');
  } else {
    const selectedHeight = heights[nextIndex];
    localStorage.setItem('lineHeight', selectedHeight);
    domCache.body.classList.add(`eu-line-height-${selectedHeight}`);
    return selectedHeight;
  }
}

// ===========================================
// FOCUS INDICATOR, HIGHLIGHT, READING GUIDE, READING WINDOW
// ===========================================

// Focus Indicator toggle
function toggleFocusIndicator(isActive) {
  if (isActive) {
    domCache.body.classList.add('eu-focus-indicator');
  } else {
    domCache.body.classList.remove('eu-focus-indicator');
  }
}

// Highlight Links toggle
function toggleHighlightLinks(isActive) {
  if (isActive) {
    domCache.body.classList.add('eu-highlight-links');
  } else {
    domCache.body.classList.remove('eu-highlight-links');
  }
}

// Reading Guide toggle
const readingGuide = {
  element: null,
  handler: null,
  toggle(isActive) {
    if (isActive) {
      if (!readingGuide.element) {
        const guide = document.createElement('div');
        guide.id = 'eu-reading-guide';
        document.body.appendChild(guide);
        readingGuide.element = guide;
      }
      readingGuide.element.style.display = 'block';
      if (readingGuide.handler) {
        document.removeEventListener('mousemove', readingGuide.handler);
      }
      readingGuide.handler = function (e) {
        readingGuide.element.style.top = e.clientY + 'px';
      };
      document.addEventListener('mousemove', readingGuide.handler);
    } else {
      if (readingGuide.handler) {
        document.removeEventListener('mousemove', readingGuide.handler);
        readingGuide.handler = null;
      }
      if (readingGuide.element) {
        readingGuide.element.style.display = 'none';
      }
    }
  }
};

// Reading Window toggle
const readingWindow = {
  topMask: null,
  bottomMask: null,
  handler: null,
  windowHeight: 120,
  toggle(isActive) {
    if (isActive) {
      if (!readingWindow.topMask) {
        const top = document.createElement('div');
        top.classList.add('eu-reading-window-top');
        const bottom = document.createElement('div');
        bottom.classList.add('eu-reading-window-bottom');
        document.body.appendChild(top);
        document.body.appendChild(bottom);
        readingWindow.topMask = top;
        readingWindow.bottomMask = bottom;
      }
      readingWindow.topMask.style.display = 'block';
      readingWindow.bottomMask.style.display = 'block';
      if (readingWindow.handler) {
        document.removeEventListener('mousemove', readingWindow.handler);
      }
      readingWindow.handler = function (e) {
        const y = e.clientY;
        const half = readingWindow.windowHeight / 2;
        const topH = Math.max(0, y - half);
        const bottomTop = y + half;
        readingWindow.topMask.style.height = topH + 'px';
        readingWindow.bottomMask.style.top = bottomTop + 'px';
        readingWindow.bottomMask.style.height = (window.innerHeight - bottomTop) + 'px';
      };
      document.addEventListener('mousemove', readingWindow.handler);
      // Paint an initial centered window so masks are visible before the mouse moves.
      readingWindow.handler({ clientY: Math.round(window.innerHeight / 2) });
    } else {
      if (readingWindow.handler) {
        document.removeEventListener('mousemove', readingWindow.handler);
        readingWindow.handler = null;
      }
      if (readingWindow.topMask) {
        readingWindow.topMask.style.display = 'none';
      }
      if (readingWindow.bottomMask) {
        readingWindow.bottomMask.style.display = 'none';
      }
    }
  }
};

// ===========================================
// ENHANCED FEATURES (v1.3.0)
// ===========================================

// Shared host for widget-owned overlays (virtual keyboard, dictionary, lens,
// reader view). Excluded from Custom Color / filters so overlays stay legible.
function euOverlayHost() {
  let host = document.getElementById('eu-accessibility-overlays');
  if (!host) {
    host = document.createElement('div');
    host.id = 'eu-accessibility-overlays';
    document.body.appendChild(host);
  }
  return host;
}

// Hover Highlight — outline whatever element is under the cursor
const hoverHighlight = {
  handler: null,
  last: null,
  toggle(isActive) {
    if (isActive) {
      hoverHighlight.handler = function (e) {
        const el = e.target;
        if (!el || (el.closest && el.closest('#eu-accessibility-widget-container'))) return;
        if (hoverHighlight.last && hoverHighlight.last !== el) {
          hoverHighlight.last.classList.remove('eu-hover-highlight-target');
        }
        el.classList.add('eu-hover-highlight-target');
        hoverHighlight.last = el;
      };
      document.addEventListener('mouseover', hoverHighlight.handler, true);
    } else {
      if (hoverHighlight.handler) {
        document.removeEventListener('mouseover', hoverHighlight.handler, true);
        hoverHighlight.handler = null;
      }
      if (hoverHighlight.last) {
        hoverHighlight.last.classList.remove('eu-hover-highlight-target');
        hoverHighlight.last = null;
      }
    }
  }
};

// Mute Media — silence all audio/video (and any added later)
const muteMedia = {
  observer: null,
  muteAll() {
    document.querySelectorAll('video, audio').forEach((m) => { m.muted = true; });
  },
  toggle(isActive) {
    if (isActive) {
      muteMedia.muteAll();
      try {
        muteMedia.observer = new MutationObserver(() => muteMedia.muteAll());
        muteMedia.observer.observe(document.body, { childList: true, subtree: true });
      } catch (e) { /* ignore */ }
    } else {
      if (muteMedia.observer) { muteMedia.observer.disconnect(); muteMedia.observer = null; }
      document.querySelectorAll('video, audio').forEach((m) => { m.muted = false; });
    }
  }
};

// Media Freeze — companion to Pause Animations.
// The .eu-pause-animations class already kills every CSS animation/transition.
// This controller stops the motion CSS can't reach: playing videos, animated
// GIF/WebP images, and legacy <marquee> "running strips". A MutationObserver
// re-applies it to media that loads later (lazy-load, SPA navigation, new GIFs).
const mediaFreeze = {
  observer: null,
  playGuard: null,
  frozenImgs: [], // { img, src, srcset } so we can restore on disable
  pausedVideos: new Set(), // only the videos WE paused, so we can resume just those
  isActive: false,

  // Pause every <video>; best-effort pause for embedded YouTube / Vimeo iframes.
  pauseVideos() {
    document.querySelectorAll('video').forEach((v) => {
      try {
        v.removeAttribute('autoplay');
        if (!v.paused) { mediaFreeze.pausedVideos.add(v); v.pause(); }
      } catch (e) { /* ignore */ }
    });
    document.querySelectorAll('iframe').forEach((f) => {
      const src = f.getAttribute('src') || '';
      try {
        if (/youtube(-nocookie)?\.com|youtu\.be/.test(src)) {
          f.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else if (/player\.vimeo\.com/.test(src)) {
          f.contentWindow.postMessage('{"method":"pause"}', '*');
        }
      } catch (e) { /* ignore */ }
    });
  },

  // Snapshot an animated raster image's current frame onto a canvas and swap it
  // in, so it stops looping. Cross-origin images without CORS taint the canvas
  // and can't be snapshotted — those are marked and skipped.
  freezeImage(img) {
    if (img.dataset.euFrozen === '1' || img.dataset.euFrozenFail === '1') return;
    const url = (img.currentSrc || img.src || '').toLowerCase();
    const animatable = /\.(gif|webp|apng)(\?|#|$)/.test(url) ||
      /^data:image\/(gif|webp|apng)/.test(url) || img.dataset.euAnimated === '1';
    if (!animatable) return;
    if (!img.complete || !img.naturalWidth) {
      img.addEventListener('load', () => { if (mediaFreeze.isActive) mediaFreeze.freezeImage(img); }, { once: true });
      return;
    }
    try {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d').drawImage(img, 0, 0);
      const frozen = canvas.toDataURL(); // throws if the image is cross-origin tainted
      mediaFreeze.frozenImgs.push({ img: img, src: img.getAttribute('src'), srcset: img.getAttribute('srcset') });
      img.setAttribute('src', frozen);
      img.removeAttribute('srcset');
      img.dataset.euFrozen = '1';
    } catch (e) {
      img.dataset.euFrozenFail = '1'; // don't retry every mutation
    }
  },

  freezeAllImages() {
    document.querySelectorAll('img').forEach((img) => mediaFreeze.freezeImage(img));
  },

  // Legacy <marquee> scrolling strips.
  toggleMarquees(stop) {
    document.querySelectorAll('marquee').forEach((m) => {
      try { stop ? m.stop() : m.start(); } catch (e) { /* ignore */ }
    });
  },

  enable() {
    if (mediaFreeze.isActive) return;
    mediaFreeze.isActive = true;
    mediaFreeze.pauseVideos();
    mediaFreeze.freezeAllImages();
    mediaFreeze.toggleMarquees(true);

    // Keep videos paused if the page tries to restart them while the feature is on.
    mediaFreeze.playGuard = function (e) {
      const t = e.target;
      if (mediaFreeze.isActive && t && t.tagName === 'VIDEO') {
        mediaFreeze.pausedVideos.add(t);
        try { t.pause(); } catch (err) { /* ignore */ }
      }
    };
    document.addEventListener('play', mediaFreeze.playGuard, true);

    try {
      mediaFreeze.observer = new MutationObserver(() => {
        if (!mediaFreeze.isActive) return;
        mediaFreeze.pauseVideos();
        mediaFreeze.freezeAllImages();
        mediaFreeze.toggleMarquees(true);
      });
      mediaFreeze.observer.observe(document.body, { childList: true, subtree: true });
    } catch (e) { /* ignore */ }
  },

  disable() {
    if (!mediaFreeze.isActive) return;
    mediaFreeze.isActive = false;
    if (mediaFreeze.observer) { mediaFreeze.observer.disconnect(); mediaFreeze.observer = null; }
    if (mediaFreeze.playGuard) { document.removeEventListener('play', mediaFreeze.playGuard, true); mediaFreeze.playGuard = null; }

    // Restore animated images to their original (animating) source.
    mediaFreeze.frozenImgs.forEach((rec) => {
      if (rec.src !== null) rec.img.setAttribute('src', rec.src);
      if (rec.srcset) rec.img.setAttribute('srcset', rec.srcset);
      delete rec.img.dataset.euFrozen;
    });
    mediaFreeze.frozenImgs = [];
    document.querySelectorAll('img[data-eu-frozen-fail]').forEach((img) => { delete img.dataset.euFrozenFail; });

    mediaFreeze.toggleMarquees(false);

    // Resume the videos we paused (leave any the user had already paused alone).
    mediaFreeze.pausedVideos.forEach((v) => {
      try { const p = v.play(); if (p && p.catch) p.catch(function () {}); } catch (e) { /* ignore */ }
    });
    mediaFreeze.pausedVideos.clear();
    // Best-effort resume for embedded YouTube / Vimeo players.
    document.querySelectorAll('iframe').forEach((f) => {
      const src = f.getAttribute('src') || '';
      try {
        if (/youtube(-nocookie)?\.com|youtu\.be/.test(src)) {
          f.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } else if (/player\.vimeo\.com/.test(src)) {
          f.contentWindow.postMessage('{"method":"play"}', '*');
        }
      } catch (e) { /* ignore */ }
    });
  },

  toggle(isActive) { isActive ? mediaFreeze.enable() : mediaFreeze.disable(); }
};

// Page Magnifier — zoom the whole page (3 levels then off)
function applyPageMagnifier(val) {
  const container = document.getElementById('eu-accessibility-widget-container');
  const overlays = document.getElementById('eu-accessibility-overlays');
  if (val) {
    document.body.style.zoom = val;
    const inv = String(1 / parseFloat(val)); // keep widget UI + overlays at normal size
    if (container) container.style.zoom = inv;
    if (overlays) overlays.style.zoom = inv;
  } else {
    document.body.style.zoom = '';
    if (container) container.style.zoom = '';
    if (overlays) overlays.style.zoom = '';
  }
}
function handlePageMagnifier() {
  const levels = ['1.25', '1.5', '2'];
  const cur = localStorage.getItem('pageMagnifier');
  let idx = cur ? levels.indexOf(cur) : -1;
  idx = (idx + 1) % (levels.length + 1); // extra step = off
  if (idx === levels.length) {
    localStorage.removeItem('pageMagnifier');
    applyPageMagnifier(null);
    return getTranslation('default');
  }
  const val = levels[idx];
  localStorage.setItem('pageMagnifier', val);
  applyPageMagnifier(val);
  return val + '×';
}

// Text Magnifier — floating lens showing enlarged text under the cursor
const textMagnifier = {
  lens: null,
  handler: null,
  toggle(isActive) {
    if (isActive) {
      if (!textMagnifier.lens) {
        const l = document.createElement('div');
        l.className = 'eu-text-magnifier-lens';
        euOverlayHost().appendChild(l);
        textMagnifier.lens = l;
      }
      textMagnifier.handler = function (e) {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const lens = textMagnifier.lens;
        if (!el || (el.closest && el.closest('#eu-accessibility-widget-container'))) { lens.style.display = 'none'; return; }
        const txt = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 160);
        if (!txt) { lens.style.display = 'none'; return; }
        lens.textContent = txt;
        lens.style.display = 'block';
        let x = e.clientX + 18, y = e.clientY + 18;
        const rect = lens.getBoundingClientRect();
        if (x + rect.width > window.innerWidth) x = window.innerWidth - rect.width - 10;
        if (y + rect.height > window.innerHeight) y = e.clientY - rect.height - 18;
        lens.style.left = Math.max(6, x) + 'px';
        lens.style.top = Math.max(6, y) + 'px';
      };
      document.addEventListener('mousemove', textMagnifier.handler);
    } else {
      if (textMagnifier.handler) { document.removeEventListener('mousemove', textMagnifier.handler); textMagnifier.handler = null; }
      if (textMagnifier.lens) textMagnifier.lens.style.display = 'none';
    }
  }
};

// Read Focus — highlight the block of text under the cursor
const readFocus = {
  handler: null,
  last: null,
  blockSelector: 'p, li, h1, h2, h3, h4, h5, h6, blockquote, td, th, dd, dt, figcaption',
  toggle(isActive) {
    if (isActive) {
      readFocus.handler = function (e) {
        const el = e.target;
        if (!el || (el.closest && el.closest('#eu-accessibility-widget-container'))) return;
        const block = el.closest(readFocus.blockSelector);
        if (!block) return;
        if (readFocus.last && readFocus.last !== block) readFocus.last.classList.remove('eu-read-focus-target');
        block.classList.add('eu-read-focus-target');
        readFocus.last = block;
      };
      document.addEventListener('mouseover', readFocus.handler, true);
    } else {
      if (readFocus.handler) { document.removeEventListener('mouseover', readFocus.handler, true); readFocus.handler = null; }
      if (readFocus.last) { readFocus.last.classList.remove('eu-read-focus-target'); readFocus.last = null; }
    }
  }
};

// Virtual Keyboard — on-screen keyboard that types into the focused field
const virtualKeyboard = {
  el: null,
  target: null,
  shift: false,
  mode: 'alpha', // 'alpha' | 'symbol'
  keysEl: null,
  focusHandler: null,
  alphaLayout: [
    '1 2 3 4 5 6 7 8 9 0'.split(' '),
    'q w e r t y u i o p'.split(' '),
    'a s d f g h j k l'.split(' '),
    'z x c v b n m'.split(' ')
  ],
  symbolLayout: [
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
    ['~', '`', '_', '-', '+', '=', '{', '}', '[', ']'],
    ['|', '\\', ':', ';', '"', '\'', '<', '>', '?'],
    ['/', '.', ',', '€', '£', '¥', '•', '§']
  ],
  // Shifted characters for the number row while in the alpha layer (matches a
  // physical keyboard: Shift+1 → !, Shift+2 → @, …).
  numShiftMap: { '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^', '7': '&', '8': '*', '9': '(', '0': ')' },
  toggle(isActive) {
    if (isActive) {
      virtualKeyboard.build();
      virtualKeyboard.el.style.display = 'block';
      virtualKeyboard.focusHandler = function (e) {
        const t = e.target;
        if (t && t.matches && t.matches('input:not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]') && !(t.closest && t.closest('#eu-accessibility-widget-container'))) {
          virtualKeyboard.target = t;
        }
      };
      document.addEventListener('focusin', virtualKeyboard.focusHandler);
    } else {
      if (virtualKeyboard.focusHandler) { document.removeEventListener('focusin', virtualKeyboard.focusHandler); virtualKeyboard.focusHandler = null; }
      if (virtualKeyboard.el) virtualKeyboard.el.style.display = 'none';
    }
  },
  build() {
    if (virtualKeyboard.el) return;
    const kb = document.createElement('div');
    kb.className = 'eu-virtual-keyboard';
    const keys = document.createElement('div');
    keys.className = 'eu-vk-keys';
    kb.appendChild(keys);
    virtualKeyboard.keysEl = keys;
    euOverlayHost().appendChild(kb);
    virtualKeyboard.el = kb;
    virtualKeyboard.render();
  },
  // (Re)draw the keys for the active layer (letters/numbers or symbols).
  render() {
    const keys = virtualKeyboard.keysEl;
    if (!keys) return;
    keys.textContent = '';
    const layout = virtualKeyboard.mode === 'symbol' ? virtualKeyboard.symbolLayout : virtualKeyboard.alphaLayout;
    layout.forEach((row) => {
      const r = document.createElement('div');
      r.className = 'eu-vk-row';
      row.forEach((k) => r.appendChild(virtualKeyboard.makeKey(k, k)));
      keys.appendChild(r);
    });
    const last = document.createElement('div');
    last.className = 'eu-vk-row';
    last.appendChild(virtualKeyboard.makeKey(virtualKeyboard.mode === 'symbol' ? 'ABC' : '?#$', 'mode', 'eu-vk-wide'));
    last.appendChild(virtualKeyboard.makeKey('⇧', 'shift', 'eu-vk-wide'));
    last.appendChild(virtualKeyboard.makeKey('Space', 'space', 'eu-vk-space'));
    last.appendChild(virtualKeyboard.makeKey('⌫', 'back', 'eu-vk-wide'));
    last.appendChild(virtualKeyboard.makeKey('⏎', 'enter', 'eu-vk-wide'));
    keys.appendChild(last);
    virtualKeyboard.updateCase();
  },
  makeKey(label, val, extra) {
    const b = document.createElement('button');
    b.className = 'eu-vk-key' + (extra ? ' ' + extra : '');
    b.type = 'button';
    b.textContent = label;
    b.setAttribute('data-val', val);
    // mousedown + preventDefault keeps focus/selection on the target field
    b.addEventListener('mousedown', function (e) { e.preventDefault(); virtualKeyboard.press(val); });
    return b;
  },
  press(val) {
    // Layer/modifier keys act on the keyboard itself, no target field needed.
    if (val === 'mode') {
      virtualKeyboard.mode = virtualKeyboard.mode === 'symbol' ? 'alpha' : 'symbol';
      virtualKeyboard.shift = false;
      virtualKeyboard.render();
      return;
    }
    if (val === 'shift') { virtualKeyboard.shift = !virtualKeyboard.shift; virtualKeyboard.updateCase(); return; }
    const t = virtualKeyboard.target;
    if (!t) return;
    t.focus();
    if (val === 'space') return virtualKeyboard.insert(' ');
    if (val === 'enter') return virtualKeyboard.insert('\n');
    if (val === 'back') return virtualKeyboard.backspace();
    let ch = val;
    if (virtualKeyboard.shift) {
      if (/[a-z]/.test(ch)) ch = ch.toUpperCase();
      else if (virtualKeyboard.numShiftMap[ch]) ch = virtualKeyboard.numShiftMap[ch];
    }
    virtualKeyboard.insert(ch);
  },
  insert(ch) {
    const t = virtualKeyboard.target;
    if (!t) return;
    if (t.isContentEditable) { document.execCommand('insertText', false, ch); return; }
    const start = t.selectionStart != null ? t.selectionStart : t.value.length;
    const end = t.selectionEnd != null ? t.selectionEnd : t.value.length;
    t.value = t.value.slice(0, start) + ch + t.value.slice(end);
    const pos = start + ch.length;
    try { t.setSelectionRange(pos, pos); } catch (e) { /* some input types disallow */ }
    t.dispatchEvent(new Event('input', { bubbles: true }));
  },
  backspace() {
    const t = virtualKeyboard.target;
    if (!t) return;
    if (t.isContentEditable) { document.execCommand('delete'); return; }
    const start = t.selectionStart != null ? t.selectionStart : t.value.length;
    const end = t.selectionEnd != null ? t.selectionEnd : t.value.length;
    if (start === end && start > 0) {
      t.value = t.value.slice(0, start - 1) + t.value.slice(end);
      try { t.setSelectionRange(start - 1, start - 1); } catch (e) { /* ignore */ }
    } else {
      t.value = t.value.slice(0, start) + t.value.slice(end);
      try { t.setSelectionRange(start, start); } catch (e) { /* ignore */ }
    }
    t.dispatchEvent(new Event('input', { bubbles: true }));
  },
  updateCase() {
    if (!virtualKeyboard.el) return;
    virtualKeyboard.el.querySelectorAll('.eu-vk-key').forEach((k) => {
      const val = k.getAttribute('data-val');
      if (val && /^[a-z]$/i.test(val)) {
        k.textContent = virtualKeyboard.shift ? val.toUpperCase() : val.toLowerCase();
      } else if (val && virtualKeyboard.numShiftMap[val]) {
        k.textContent = virtualKeyboard.shift ? virtualKeyboard.numShiftMap[val] : val;
      }
    });
    const shiftKey = virtualKeyboard.el.querySelector('.eu-vk-key[data-val="shift"]');
    if (shiftKey) shiftKey.classList.toggle('eu-vk-active', virtualKeyboard.shift);
  }
};

// Readable Mode — clean, single-column reader view of the main content
const readableMode = {
  overlay: null,
  savedMagnifier: null,
  toggle(isActive) {
    if (isActive) {
      // Suspend page magnifier while the reader is open (nested zoom + fixed overlay don't mix)
      readableMode.savedMagnifier = localStorage.getItem('pageMagnifier');
      if (readableMode.savedMagnifier) applyPageMagnifier(null);
      readableMode.build();
      readableMode.overlay.style.display = 'block';
      document.documentElement.style.overflow = 'hidden';
    } else {
      if (readableMode.overlay) readableMode.overlay.style.display = 'none';
      document.documentElement.style.overflow = '';
      if (readableMode.savedMagnifier) { applyPageMagnifier(readableMode.savedMagnifier); readableMode.savedMagnifier = null; }
    }
  },
  turnOffButton() {
    localStorage.setItem('readableMode', 'false');
    if (shadowRoot) {
      const btn = shadowRoot.querySelector('[data-accessibility-option-id="readableMode"]');
      if (btn) { btn.classList.remove('active'); btn.setAttribute('aria-pressed', 'false'); }
    }
    readableMode.toggle(false);
  },
  build() {
    if (readableMode.overlay) { readableMode.overlay.remove(); readableMode.overlay = null; }
    const overlay = document.createElement('div');
    overlay.className = 'eu-reader-overlay';
    const close = document.createElement('button');
    close.className = 'eu-reader-close';
    close.type = 'button';
    close.textContent = '✕ ' + getTranslation('close');
    close.addEventListener('click', readableMode.turnOffButton);
    const inner = document.createElement('div');
    inner.className = 'eu-reader-inner';
    const html = readableMode.pickContent();
    inner.innerHTML = html || ('<p>' + getTranslation('readerViewEmpty') + '</p>');
    overlay.appendChild(close);
    overlay.appendChild(inner);
    euOverlayHost().appendChild(overlay);
    readableMode.overlay = overlay;
  },
  pickContent() {
    let best = null, bestLen = 0;
    document.querySelectorAll('article, main, [role="main"]').forEach((c) => {
      const l = (c.innerText || '').length;
      if (l > bestLen) { bestLen = l; best = c; }
    });
    if (!best) {
      document.querySelectorAll('section, div').forEach((c) => {
        if (c.closest && c.closest('#eu-accessibility-widget-container')) return;
        const l = (c.innerText || '').length;
        if (l > bestLen && l < 60000) { bestLen = l; best = c; }
      });
    }
    const source = best ? best.innerHTML : (document.body ? document.body.innerHTML : '');
    return readableMode.sanitize(source);
  },
  sanitize(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    tmp.querySelectorAll('script, style, noscript, iframe, form, input, button, select, textarea, svg, nav, footer, aside, [id^="eu-accessibility"]').forEach((n) => n.remove());
    return tmp.innerHTML;
  }
};

// Dictionary — look up a selected word (uses api.dictionaryapi.dev on demand)
const dictionary = {
  popup: null,
  handler: null,
  outsideHandler: null,
  toggle(isActive) {
    if (isActive) {
      if (!dictionary.popup) {
        const p = document.createElement('div');
        p.className = 'eu-dictionary-popup';
        euOverlayHost().appendChild(p);
        dictionary.popup = p;
      }
      dictionary.handler = function () {
        const sel = (window.getSelection ? window.getSelection().toString() : '').trim();
        if (!sel || sel.split(/\s+/).length > 3 || sel.length > 40) return;
        dictionary.lookup(sel);
      };
      dictionary.outsideHandler = function (e) {
        if (dictionary.popup && dictionary.popup.style.display === 'block' && !dictionary.popup.contains(e.target)) {
          setTimeout(function () {
            const s = (window.getSelection ? window.getSelection().toString() : '').trim();
            if (!s) dictionary.popup.style.display = 'none';
          }, 10);
        }
      };
      document.addEventListener('mouseup', dictionary.handler);
      document.addEventListener('mousedown', dictionary.outsideHandler);
    } else {
      if (dictionary.handler) { document.removeEventListener('mouseup', dictionary.handler); dictionary.handler = null; }
      if (dictionary.outsideHandler) { document.removeEventListener('mousedown', dictionary.outsideHandler); dictionary.outsideHandler = null; }
      if (dictionary.popup) dictionary.popup.style.display = 'none';
    }
  },
  esc(s) { const d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; },
  show(html) {
    const p = dictionary.popup;
    if (!p) return;
    p.innerHTML = html;
    p.style.display = 'block';
    let x = window.innerWidth / 2 - 150, y = 100;
    const sel = window.getSelection ? window.getSelection() : null;
    if (sel && sel.rangeCount) {
      const r = sel.getRangeAt(0).getBoundingClientRect();
      if (r.width || r.height) { x = Math.min(r.left, window.innerWidth - 320); y = Math.min(r.bottom + 8, window.innerHeight - 280); }
    }
    p.style.left = Math.max(10, x) + 'px';
    p.style.top = Math.max(10, y) + 'px';
  },
  lookup(word) {
    dictionary.show('<div class="eu-dict-word">' + dictionary.esc(word) + '</div><div>' + getTranslation('dictionaryLoading') + '</div>');
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word.toLowerCase()))
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('not found'))))
      .then((data) => {
        const entry = Array.isArray(data) ? data[0] : null;
        if (!entry) throw new Error('empty');
        let html = '<div class="eu-dict-word">' + dictionary.esc(entry.word) + '</div>';
        let phon = entry.phonetic;
        if (!phon && Array.isArray(entry.phonetics)) { const f = entry.phonetics.find((p) => p.text); if (f) phon = f.text; }
        if (phon) html += '<div class="eu-dict-phon">' + dictionary.esc(phon) + '</div>';
        (entry.meanings || []).slice(0, 3).forEach((m) => {
          html += '<div class="eu-dict-pos">' + dictionary.esc(m.partOfSpeech || '') + '</div><ol>';
          (m.definitions || []).slice(0, 2).forEach((d) => { html += '<li>' + dictionary.esc(d.definition || '') + '</li>'; });
          html += '</ol>';
        });
        dictionary.show(html);
      })
      .catch(() => {
        dictionary.show('<div class="eu-dict-word">' + dictionary.esc(word) + '</div><div>' + getTranslation('dictionaryNotFound') + '</div>');
      });
  }
};

// Custom Color — user-chosen background / text / heading colors
const customColor = {
  panel: null,
  apply(bg, text, head) {
    let css = '';
    const guard = ':not(#eu-accessibility-widget-container):not(#eu-accessibility-widget-container *):not(#eu-accessibility-overlays):not(#eu-accessibility-overlays *)';
    if (bg) css += 'body, body *' + guard + '{background-color:' + bg + ' !important;}';
    if (text) css += 'body, body :is(p, span, li, td, a, div, label)' + guard + '{color:' + text + ' !important;}';
    if (head) css += 'body :is(h1, h2, h3, h4, h5, h6)' + guard + '{color:' + head + ' !important;}';
    let st = document.getElementById('eu-custom-color-style');
    if (!st) { st = document.createElement('style'); st.id = 'eu-custom-color-style'; document.head.appendChild(st); }
    st.textContent = css;
  },
  clear() {
    const st = document.getElementById('eu-custom-color-style');
    if (st) st.textContent = '';
    localStorage.removeItem('customColorBg');
    localStorage.removeItem('customColorText');
    localStorage.removeItem('customColorHead');
  },
  restore() {
    const bg = localStorage.getItem('customColorBg');
    const text = localStorage.getItem('customColorText');
    const head = localStorage.getItem('customColorHead');
    if (bg || text || head) customColor.apply(bg, text, head);
  },
  createPanel() {
    const panel = document.createElement('div');
    panel.className = 'eu-custom-color-panel';
    panel.id = 'eu-custom-color-panel';
    const mkRow = (labelKey, key, def) => {
      const row = document.createElement('div');
      row.className = 'eu-ccp-row';
      const lbl = document.createElement('span');
      lbl.textContent = getTranslation(labelKey);
      const inp = document.createElement('input');
      inp.type = 'color';
      inp.value = localStorage.getItem(key) || def;
      inp.setAttribute('data-cc', key);
      row.appendChild(lbl);
      row.appendChild(inp);
      return row;
    };
    panel.appendChild(mkRow('customColorBackground', 'customColorBg', '#ffffff'));
    panel.appendChild(mkRow('customColorText', 'customColorText', '#000000'));
    panel.appendChild(mkRow('customColorHeadings', 'customColorHead', '#0b7285'));
    const actions = document.createElement('div');
    actions.className = 'eu-ccp-actions';
    const applyBtn = document.createElement('button');
    applyBtn.className = 'eu-ccp-btn';
    applyBtn.type = 'button';
    applyBtn.textContent = getTranslation('customColorApply');
    const resetBtn = document.createElement('button');
    resetBtn.className = 'eu-ccp-btn eu-ccp-reset';
    resetBtn.type = 'button';
    resetBtn.textContent = getTranslation('customColorReset');
    applyBtn.addEventListener('click', () => {
      const bg = panel.querySelector('[data-cc="customColorBg"]').value;
      const text = panel.querySelector('[data-cc="customColorText"]').value;
      const head = panel.querySelector('[data-cc="customColorHead"]').value;
      localStorage.setItem('customColorBg', bg);
      localStorage.setItem('customColorText', text);
      localStorage.setItem('customColorHead', head);
      customColor.apply(bg, text, head);
      euAnnouncer.say(getTranslation('customColor'));
    });
    resetBtn.addEventListener('click', () => { customColor.clear(); euAnnouncer.say(getTranslation('customColorReset')); });
    actions.appendChild(applyBtn);
    actions.appendChild(resetBtn);
    panel.appendChild(actions);
    customColor.panel = panel;
    return panel;
  },
  togglePanel() {
    if (!customColor.panel) return '';
    customColor.panel.classList.toggle('eu-open');
    return getTranslation('customColor');
  }
};

// ===========================================
// ACCESSIBILITY FEATURES
// ===========================================

// Screen reader functionality
const screenReader = {
  active: localStorage.getItem('screenReader') === 'true',
  isSupported: 'speechSynthesis' in window,

  // --- word-highlight state ---
  currentRoot: null,      // the element currently being read
  currentWords: [],       // <span class="eu-read-word"> nodes in reading order
  wordStarts: [],         // char offset of each word inside the spoken string
  lastWordIdx: -1,
  currentUtterance: null, // guards stale onend/onerror from a cancelled utterance

  // --- hover-to-read state ---
  blockSelector: 'p, li, h1, h2, h3, h4, h5, h6, blockquote, td, th, dd, dt, figcaption, a, button, label, summary',
  hoverBlock: null,       // block currently under the cursor (so we don't re-read it)
  hoverTimer: null,       // dwell timer before a hovered block starts reading

  // Is this element visible and not hidden from assistive tech? Used to skip
  // inactive carousel slides (aria-hidden / display:none / opacity:0) so read
  // aloud doesn't run on and on through off-screen slides.
  isVisibleEl: function (el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.getAttribute && el.getAttribute('aria-hidden') === 'true') return false;
    var cs;
    try { cs = window.getComputedStyle(el); } catch (e) { return true; }
    if (!cs) return true;
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
    return true;
  },

  // Wrap each visible word of `root` in a <span> so we can highlight it while
  // it is spoken. Returns the word spans in order. Skips hidden / aria-hidden
  // subtrees, scripts/styles, and the widget's own UI.
  wrapWords: function (root) {
    var words = [];
    if (!root || root.nodeType !== 1) return words;
    try {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          var p = node.parentNode;
          if (!p || p.nodeType !== 1) return NodeFilter.FILTER_REJECT;
          var tag = p.nodeName;
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
          if (p.closest && p.closest('[aria-hidden="true"], #eu-accessibility-widget-container, #eu-accessibility-overlays')) return NodeFilter.FILTER_REJECT;
          if (!screenReader.isVisibleEl(p)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      var nodes = [], n;
      while ((n = walker.nextNode())) nodes.push(n);
      nodes.forEach(function (tn) {
        var parts = tn.nodeValue.split(/(\s+)/);
        var frag = document.createDocumentFragment();
        parts.forEach(function (part) {
          if (part === '') return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          var span = document.createElement('span');
          span.className = 'eu-read-word';
          span.textContent = part;
          frag.appendChild(span);
          words.push(span);
        });
        if (tn.parentNode) tn.parentNode.replaceChild(frag, tn);
      });
    } catch (e) { /* ignore */ }
    return words;
  },

  // Remove all highlight state and un-wrap the word spans (restoring the
  // element's original text nodes, keeping its listeners intact).
  clearWordHighlight: function () {
    try {
      var root = screenReader.currentRoot;
      if (root) {
        if (root.classList) root.classList.remove('eu-read-current-block');
        if (root.querySelectorAll) {
          root.querySelectorAll('span.eu-read-word').forEach(function (s) {
            if (s.parentNode) s.replaceWith(document.createTextNode(s.textContent));
          });
        }
        if (root.normalize) root.normalize();
      }
    } catch (e) { /* ignore */ }
    screenReader.currentRoot = null;
    screenReader.currentWords = [];
    screenReader.wordStarts = [];
    screenReader.lastWordIdx = -1;
  },

  // Speak one element, highlighting each word as it is read.
  speakElement: function (el) {
    if (!el || el.nodeType !== 1 || !screenReader.active || !screenReader.isSupported) return;
    if (el.closest && el.closest('#eu-accessibility-widget-container, #eu-accessibility-overlays')) return;
    try {
      window.speechSynthesis.cancel();
      screenReader.clearWordHighlight();

      // Guard against reading a huge container (e.g. a whole carousel or <body>):
      // don't word-wrap giant blocks — just read a capped snippet with a block outline.
      var bigText = (el.innerText || '');
      var tooBig = (el === document.body || el === document.documentElement || bigText.length > 2000);

      var words = tooBig ? [] : screenReader.wrapWords(el);
      var text;
      if (words.length) {
        text = words.map(function (w) { return w.textContent; }).join(' ');
      } else {
        text = ((el.getAttribute && (el.getAttribute('aria-label') || el.getAttribute('alt') || el.getAttribute('title'))) || bigText || '').trim();
      }

      var MAX = 4000; // hard cap so a stray big click can't read forever
      if (text.length > MAX) text = text.slice(0, MAX);
      if (!text.trim()) { screenReader.clearWordHighlight(); return; }

      screenReader.currentRoot = el;
      screenReader.currentWords = words;
      var starts = [], acc = 0;
      words.forEach(function (w) { starts.push(acc); acc += w.textContent.length + 1; });
      screenReader.wordStarts = starts;
      screenReader.lastWordIdx = -1;
      if (el.classList) el.classList.add('eu-read-current-block');

      var u = new SpeechSynthesisUtterance(text);
      u.lang = document.documentElement.lang || SPEECH_LANG;
      u.rate = WIDGET_CONFIG.speech.rate;
      u.pitch = WIDGET_CONFIG.speech.pitch;
      u.onboundary = function (ev) {
        if (ev.name && ev.name !== 'word') return;
        if (!screenReader.currentWords.length) return;
        var ci = ev.charIndex || 0;
        var idx = -1;
        for (var i = 0; i < starts.length; i++) { if (starts[i] <= ci) idx = i; else break; }
        if (idx !== screenReader.lastWordIdx) {
          var prev = screenReader.currentWords[screenReader.lastWordIdx];
          if (prev && prev.classList) prev.classList.remove('eu-read-word-active');
          var cur = screenReader.currentWords[idx];
          if (cur && cur.classList) cur.classList.add('eu-read-word-active');
          screenReader.lastWordIdx = idx;
        }
      };
      // Only clear if THIS utterance is still the active one — cancel() fires a
      // late onend on the previous utterance after we've already started a new read.
      u.onend = function () { if (u === screenReader.currentUtterance) { screenReader.currentUtterance = null; screenReader.clearWordHighlight(); } };
      u.onerror = function (e) { console.warn('Speech synthesis error:', e.error); if (u === screenReader.currentUtterance) { screenReader.currentUtterance = null; screenReader.clearWordHighlight(); } };
      screenReader.currentUtterance = u;
      window.speechSynthesis.speak(u);
    } catch (error) {
      console.warn('Screen reader error:', error);
      screenReader.clearWordHighlight();
    }
  },

  // Read whatever the user focuses (keyboard navigation).
  handleFocus: function (event) {
    if (screenReader.active && screenReader.isSupported) screenReader.speakElement(event.target);
  },

  // Read whatever block the user hovers. A short dwell delay means skimming the
  // mouse across the page doesn't read every block you pass over — it reads the
  // one you settle on. Reading only fires when the hovered block changes, so
  // moving the cursor within a block never restarts it.
  handleHover: function (event) {
    if (!screenReader.active || !screenReader.isSupported) return;
    var t = event.target;
    if (!t || t.nodeType !== 1) return;
    if (t.closest && t.closest('#eu-accessibility-widget-container, #eu-accessibility-overlays')) return;
    var block = (t.closest && t.closest(screenReader.blockSelector)) || t;
    if (block === screenReader.hoverBlock) return; // still within the same block
    screenReader.hoverBlock = block;
    if (screenReader.hoverTimer) { clearTimeout(screenReader.hoverTimer); screenReader.hoverTimer = null; }
    screenReader.hoverTimer = setTimeout(function () {
      screenReader.hoverTimer = null;
      if (screenReader.hoverBlock === block) screenReader.speakElement(block);
    }, 250);
  },

  toggle: function (isActive) {
    if (!screenReader.isSupported) {
      console.warn(`Speech synthesis ${getTranslation('notSupportedBrowser')}`);
      return false;
    }

    screenReader.active = isActive;
    localStorage.setItem('screenReader', isActive);

    try {
      if (isActive) {
        document.addEventListener('focusin', screenReader.handleFocus);
        document.addEventListener('mouseover', screenReader.handleHover);
        const feedbackSpeech = new SpeechSynthesisUtterance(getTranslation('screenReaderOn'));
        feedbackSpeech.lang = SPEECH_LANG;
        feedbackSpeech.rate = WIDGET_CONFIG.speech.rate;
        feedbackSpeech.pitch = WIDGET_CONFIG.speech.pitch;
        feedbackSpeech.onerror = function (event) {
          console.warn('Speech synthesis feedback error:', event.error);
        };
        window.speechSynthesis.speak(feedbackSpeech);
      } else {
        document.removeEventListener('focusin', screenReader.handleFocus);
        document.removeEventListener('mouseover', screenReader.handleHover);
        if (screenReader.hoverTimer) { clearTimeout(screenReader.hoverTimer); screenReader.hoverTimer = null; }
        screenReader.hoverBlock = null;
        screenReader.currentUtterance = null;
        window.speechSynthesis.cancel();
        screenReader.clearWordHighlight();
        const feedbackSpeech = new SpeechSynthesisUtterance(getTranslation('screenReaderOff'));
        feedbackSpeech.lang = SPEECH_LANG;
        feedbackSpeech.rate = WIDGET_CONFIG.speech.rate;
        feedbackSpeech.pitch = WIDGET_CONFIG.speech.pitch;
        feedbackSpeech.onerror = function (event) {
          console.warn('Speech synthesis feedback error:', event.error);
        };
        window.speechSynthesis.speak(feedbackSpeech);
      }
    } catch (error) {
      console.warn('Screen reader toggle error:', error);
      return false;
    }

    return true;
  },
};

// Voice control functionality
const voiceControl = {
  isActive: localStorage.getItem('voiceControl') === 'true',
  recognition: null,
  isSupported: 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window,
  retryCount: 0,
  maxRetries: 3,
  toggle: function (isActive) {
    if (!voiceControl.isSupported) {
      console.warn(`Speech Recognition API ${getTranslation('notSupportedBrowser')}`);
      return false;
    }

    voiceControl.isActive = isActive;
    localStorage.setItem('voiceControl', isActive);

    try {
      if (isActive) {
        voiceControl.startListening();
      } else {
        if (voiceControl.recognition) {
          voiceControl.recognition.stop();
          voiceControl.recognition = null;
        }
        voiceControl.retryCount = 0;
      }
    } catch (error) {
      console.warn('Voice control toggle error:', error);
      return false;
    }

    return true;
  },
  startListening: function () {
    if (!voiceControl.isSupported) {
      return;
    }

    if (voiceControl.recognition) {
      return;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      voiceControl.recognition = new SpeechRecognition();
      voiceControl.recognition.interimResults = false;

      // Recognize in the detected language when we ship commands for it; otherwise English.
      voiceControl.recognition.lang = WIDGET_CONFIG.voiceCommands[currentLanguage] ? SPEECH_LANG : 'en-US';
      voiceControl.recognition.continuous = false;

      voiceControl.recognition.onstart = function () {
        console.log(getTranslation('voiceControlActivated'));
        voiceControl.retryCount = 0;
      };

      voiceControl.recognition.onresult = function (event) {
        try {
          const command = event.results[0][0].transcript.toLowerCase();
          voiceControl.handleVoiceCommand(command);
        } catch (error) {
          console.warn('Voice command processing error:', error);
        }
      };

      voiceControl.recognition.onerror = function (event) {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'no-speech' && voiceControl.retryCount < voiceControl.maxRetries) {
          voiceControl.retryCount++;
          setTimeout(() => {
            if (voiceControl.isActive) {
              voiceControl.startListening();
            }
          }, 1000);
        }
      };

      voiceControl.recognition.onend = function () {
        voiceControl.recognition = null;
        if (voiceControl.isActive && voiceControl.retryCount < voiceControl.maxRetries) {
          setTimeout(() => {
            if (voiceControl.isActive) {
              voiceControl.startListening();
            }
          }, 100);
        }
      };

      voiceControl.recognition.start();
    } catch (error) {
      console.warn('Voice control initialization error:', error);
    }
  },
  handleVoiceCommand: function (command) {
    console.log(`Received command: ${command}`);

    try {
      // Normalize the command by removing extra spaces and making it lowercase
      const normalizedCommand = command.toLowerCase().trim().replace(/\s+/g, ' ');

      // Get voice commands for current language, fallback to English
      const languageCommands = WIDGET_CONFIG.voiceCommands[currentLanguage] || WIDGET_CONFIG.voiceCommands['en'];

      // Check for show menu commands
      if (languageCommands.showMenu.some(cmd => normalizedCommand.includes(cmd))) {
        if (!menuCache.button) menuCache.init();
        if (menuCache.button) {
          menuCache.button.click();
          console.log('Successfully opened menu');
        }
        return;
      }

      // Check for reset all commands
      if (languageCommands.resetAll.some(cmd => normalizedCommand.includes(cmd))) {
        resetAccessibilitySettings();
        console.log('Successfully reset all settings');
        return;
      }

      // Build dynamic command map based on configuration
      let localStorageKey = null;
      let matchedCommand = null;

      // Check each command group with better matching
      for (const [key, commands] of Object.entries(languageCommands)) {
        if (key === 'showMenu' || key === 'resetAll') continue; // Already handled above

        const isMatch = commands.some(cmd => {
          // Check for exact matches first
          if (normalizedCommand.includes(cmd.toLowerCase())) {
            matchedCommand = cmd;
            return true;
          }
          // Check for partial word matches (at least 3 characters)
          const cmdWords = cmd.toLowerCase().split(' ');
          const inputWords = normalizedCommand.split(' ');
          return cmdWords.some(cmdWord =>
            cmdWord.length >= 3 && inputWords.some(inputWord =>
              inputWord.includes(cmdWord) || cmdWord.includes(inputWord)
            )
          );
        });

        if (isMatch) {
          localStorageKey = key;
          break;
        }
      }

      if (localStorageKey) {
        // Use cached menu reference if available
        if (!menuCache.menu) menuCache.init();

        // Try to find button by data-key first (toggle buttons)
        let button = menuCache.menu?.querySelector(
          `.eu-accessibility-option[data-key='${localStorageKey}']`
        );

        // If not found, try to find by data-accessibility-option-id (action buttons)
        if (!button) {
          button = menuCache.menu?.querySelector(
            `.eu-accessibility-option[data-accessibility-option-id='${localStorageKey}']`
          );
        }

        if (button) {
          button.click();
          console.log(`Successfully executed command: ${command} (matched: ${matchedCommand || localStorageKey})`);
        } else {
          console.log('Button not found for command:', command, '(key:', localStorageKey, ')');
        }
      } else {
        console.log('Command not recognized:', command);
        // Provide helpful suggestions
        const availableCommands = Object.values(languageCommands).flat();
        const suggestions = availableCommands.filter(cmd =>
          cmd.toLowerCase().includes(normalizedCommand.split(' ')[0]) ||
          normalizedCommand.split(' ')[0].includes(cmd.toLowerCase().split(' ')[0])
        );
        if (suggestions.length > 0) {
          console.log('Did you mean one of these?', suggestions.slice(0, 3));
        }
      }
    } catch (error) {
      console.warn('Voice command handling error:', error);
    }
  },
};

// ===========================================
// ALT TEXT VIEWER
// Shows an element's alternative text on hover and flags
// images that are missing alt text (useful for everyone,
// including content editors and auditors).
// ===========================================
const altTextViewer = {
  active: false, // attached via toggle(); applySettings restores from localStorage
  tooltip: null,
  handleOver: function (event) {
    if (!event.target || !event.target.closest) return;
    const target = event.target.closest('img, [role="img"], svg, area, input[type="image"], button, a');
    if (!target || (target.closest && target.closest('#eu-accessibility-widget-container'))) return;

    let text = null;
    let missing = false;
    const isImage = target.matches('img, [role="img"], svg, area, input[type="image"]');

    if (isImage) {
      text = target.getAttribute('alt') || target.getAttribute('aria-label') || target.getAttribute('title');
      if (!text && target.tagName.toLowerCase() === 'svg') {
        const titleEl = target.querySelector('title');
        text = titleEl ? titleEl.textContent : null;
      }
      if (!text || !text.trim()) missing = true;
    } else {
      // Buttons/links: only surface hidden names (aria-label/title)
      text = target.getAttribute('aria-label') || target.getAttribute('title');
      if (!text || !text.trim()) return;
    }

    altTextViewer.show(target, missing ? getTranslation('noAltText') : text.trim(), missing);
  },
  handleOut: function () {
    altTextViewer.hide();
  },
  show: function (target, text, missing) {
    if (!altTextViewer.tooltip) {
      altTextViewer.tooltip = document.createElement('div');
      altTextViewer.tooltip.className = 'eu-alt-tooltip';
      altTextViewer.tooltip.setAttribute('role', 'status');
      document.body.appendChild(altTextViewer.tooltip);
    }
    const tip = altTextViewer.tooltip;
    tip.textContent = (missing ? '⚠ ' : 'ALT: ') + text;
    tip.classList.toggle('eu-alt-missing', !!missing);
    const rect = target.getBoundingClientRect();
    tip.style.top = Math.max(4, rect.top + window.scrollY - 36) + 'px';
    tip.style.left = Math.max(4, rect.left + window.scrollX) + 'px';
    tip.style.display = 'block';
  },
  hide: function () {
    if (altTextViewer.tooltip) altTextViewer.tooltip.style.display = 'none';
  },
  toggle: function (isActive) {
    altTextViewer.active = isActive;
    if (isActive) {
      document.addEventListener('mouseover', altTextViewer.handleOver, true);
      document.addEventListener('mouseout', altTextViewer.handleOut, true);
    } else {
      document.removeEventListener('mouseover', altTextViewer.handleOver, true);
      document.removeEventListener('mouseout', altTextViewer.handleOut, true);
      altTextViewer.hide();
    }
    return true;
  }
};

// ===========================================
// SAME-ORIGIN IFRAME SUPPORT
// Mirrors the widget's accessibility classes and page styles
// into same-origin iframes so features extend to embedded
// content. Cross-origin frames cannot be reached (browser
// security model).
// ===========================================
const frameSync = {
  getAccessibleFrameDocs: function () {
    const docs = [];
    document.querySelectorAll('iframe').forEach(function (fr) {
      try {
        if (fr.contentDocument && fr.contentDocument.body) docs.push(fr.contentDocument);
      } catch (e) { /* cross-origin frame — skip */ }
    });
    return docs;
  },
  syncNow: function () {
    const bodyClasses = Array.prototype.filter.call(document.body.classList, function (c) { return c.indexOf('eu-') === 0; });
    const docClasses = Array.prototype.filter.call(document.documentElement.classList, function (c) { return c.indexOf('eu-') === 0; });
    frameSync.getAccessibleFrameDocs().forEach(function (doc) {
      try {
        if (!doc.getElementById('eu-page-styles-frame')) {
          const style = doc.createElement('style');
          style.id = 'eu-page-styles-frame';
          style.textContent = pageStyles;
          (doc.head || doc.documentElement).appendChild(style);
        }
        [doc.body, doc.documentElement].forEach(function (el) {
          Array.prototype.filter.call(el.classList, function (c) { return c.indexOf('eu-') === 0; })
            .forEach(function (c) { el.classList.remove(c); });
        });
        bodyClasses.forEach(function (c) { doc.body.classList.add(c); });
        docClasses.forEach(function (c) { doc.documentElement.classList.add(c); });
      } catch (e) { /* ignore */ }
    });
  },
  start: function () {
    try {
      const observer = new MutationObserver(function () { frameSync.syncNow(); });
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      window.addEventListener('load', frameSync.syncNow);
      setTimeout(frameSync.syncNow, 1500); // catch late-loading frames
    } catch (e) { /* ignore */ }
  }
};

// ===========================================
// ACCESSIBILITY PROFILES
// One-click presets that compose existing tools for common
// needs. Applying a profile replaces the previous profile;
// clicking the active profile turns it off.
// ===========================================
const ACCESSIBILITY_PROFILES = {
  seizureSafe: {
    labelKey: 'profileSeizure',
    cycles: { saturation: 'low' },
    toggles: { pauseAnimations: true }
  },
  lowVision: {
    labelKey: 'profileVision',
    cycles: { biggerText: 'large', highContrast: 'medium' },
    toggles: { biggerCursor: true, focusIndicator: true, highlightLinks: true }
  },
  adhdFriendly: {
    labelKey: 'profileAdhd',
    cycles: { saturation: 'low' },
    toggles: { readingWindow: true, pauseAnimations: true }
  },
  dyslexia: {
    labelKey: 'profileDyslexia',
    cycles: { fontSelection: 'dyslexic', lineHeight: '2em', textSpacing: 'light' },
    toggles: { readingGuide: true }
  }
};

// Set a boolean tool on/off, keeping localStorage and side effects in sync
function euSetToggleState(key, isActive) {
  if (isActive) {
    localStorage.setItem(key, 'true');
  } else {
    localStorage.removeItem(key);
  }
  switch (key) {
    case 'focusIndicator': toggleFocusIndicator(isActive); break;
    case 'highlightLinks': toggleHighlightLinks(isActive); break;
    case 'readingGuide': readingGuide.toggle(isActive); break;
    case 'readingWindow': readingWindow.toggle(isActive); break;
    case 'hideImages': toggleHideImages(isActive); break;
    case 'showAltText': altTextViewer.toggle(isActive); break;
    case 'pauseAnimations': document.body.classList.toggle('eu-pause-animations', isActive); mediaFreeze.toggle(isActive); break;
    case 'biggerCursor': document.body.classList.toggle('eu-bigger-cursor', isActive); break;
    default: break;
  }
}

function applyAccessibilityProfile(name) {
  const prev = localStorage.getItem('euActiveProfile');

  // Clear previous profile
  if (prev && ACCESSIBILITY_PROFILES[prev]) {
    const prevDef = ACCESSIBILITY_PROFILES[prev];
    Object.keys(prevDef.toggles || {}).forEach(function (k) { euSetToggleState(k, false); });
    Object.keys(prevDef.cycles || {}).forEach(function (k) { localStorage.removeItem(k); });
  }

  // Apply new profile (clicking the active one just turns it off)
  if (name && name !== prev && ACCESSIBILITY_PROFILES[name]) {
    const def = ACCESSIBILITY_PROFILES[name];
    Object.keys(def.toggles || {}).forEach(function (k) { euSetToggleState(k, def.toggles[k]); });
    Object.keys(def.cycles || {}).forEach(function (k) { localStorage.setItem(k, def.cycles[k]); });
    localStorage.setItem('euActiveProfile', name);
  } else {
    localStorage.removeItem('euActiveProfile');
  }

  applySettings();
  refreshMenuButtonStates();
}

// Re-derive every menu button's visual state from localStorage
function refreshMenuButtonStates() {
  if (typeof shadowRoot === 'undefined' || !shadowRoot) return;
  const menu = shadowRoot.getElementById('eu-accessibility-menu');
  if (!menu) return;

  menu.querySelectorAll('.eu-accessibility-option').forEach(function (btn) {
    const optionId = btn.getAttribute('data-accessibility-option-id');
    const optionsConfigAttr = btn.getAttribute('data-options-config');
    if (optionsConfigAttr) {
      try { updateActionButtonStatus(btn, optionId, JSON.parse(optionsConfigAttr)); } catch (e) { /* ignore */ }
    } else {
      const key = btn.getAttribute('data-key');
      const isActive = localStorage.getItem(key) === 'true';
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    }
  });

  const activeProfile = localStorage.getItem('euActiveProfile');
  menu.querySelectorAll('.eu-profile-chip').forEach(function (chip) {
    const isOn = chip.getAttribute('data-profile') === activeProfile;
    chip.classList.toggle('active', isOn);
    chip.setAttribute('aria-pressed', String(isOn));
  });
}

// ===========================================
// PAGE STRUCTURE SCANNER
// ===========================================

const pageStructureScanner = {
  // Landmark role mapping
  landmarkSelectors: [
    { selector: 'header, [role="banner"]', label: 'Banner' },
    { selector: 'nav, [role="navigation"]', label: 'Navigation' },
    { selector: 'main, [role="main"]', label: 'Main' },
    { selector: 'aside, [role="complementary"]', label: 'Complementary' },
    { selector: 'footer, [role="contentinfo"]', label: 'Content Info' },
    { selector: '[role="search"]', label: 'Search' },
    { selector: '[role="form"]', label: 'Form' },
    { selector: '[role="region"][aria-label], [role="region"][aria-labelledby], section[aria-label], section[aria-labelledby]', label: 'Region' }
  ],

  getLandmarks() {
    const results = [];
    const seen = new Set();
    this.landmarkSelectors.forEach(({ selector, label }) => {
      document.querySelectorAll(selector).forEach(el => {
        if (seen.has(el) || el.closest('#eu-accessibility-widget-container')) return;
        seen.add(el);
        const name = el.getAttribute('aria-label')
          || (el.getAttribute('aria-labelledby') && document.getElementById(el.getAttribute('aria-labelledby'))?.textContent?.trim())
          || '';
        results.push({ element: el, tag: label, text: name || label });
      });
    });
    return results;
  },

  getHeadings() {
    const results = [];
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
      if (el.closest('#eu-accessibility-widget-container')) return;
      const level = el.tagName.toLowerCase();
      const text = el.textContent.trim();
      if (text) {
        results.push({ element: el, tag: level, text });
      }
    });
    return results;
  },

  getLinks() {
    const results = [];
    document.querySelectorAll('a[href]').forEach(el => {
      if (el.closest('#eu-accessibility-widget-container')) return;
      const text = (el.textContent.trim() || el.getAttribute('aria-label') || el.href).substring(0, 80);
      if (text) {
        results.push({ element: el, tag: 'a', text });
      }
    });
    return results;
  },

  highlightAndNavigate(element) {
    // Remove any previous highlight
    const prev = document.querySelector('.eu-structure-highlight');
    if (prev) prev.classList.remove('eu-structure-highlight');

    // Scroll into view and highlight
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    element.classList.add('eu-structure-highlight');
    element.focus({ preventScroll: true });

    // Remove highlight after animation completes
    setTimeout(() => {
      element.classList.remove('eu-structure-highlight');
    }, 2500);
  }
};

// Make the panel resizable by dragging the corner grip (or arrow keys when focused).
function euSetupResize(menu, handle) {
  const side = WIDGET_CONFIG.widgetPosition.side === 'right' ? 'right' : 'left';
  const MINW = 300;
  const MINH = 300;
  const maxW = function () { return Math.min(window.innerWidth - 40, 680); };
  const maxH = function () { return window.innerHeight - 40; };
  const clamp = function (v, lo, hi) { return Math.min(Math.max(v, lo), hi); };

  // Restore a previously chosen size.
  try {
    const saved = JSON.parse(localStorage.getItem('euWidgetSize') || 'null');
    if (saved && saved.w) menu.style.width = clamp(saved.w, MINW, maxW()) + 'px';
    if (saved && saved.h) menu.style.maxHeight = clamp(saved.h, MINH, maxH()) + 'px';
  } catch (e) { /* ignore */ }

  const persist = function () {
    try {
      localStorage.setItem('euWidgetSize', JSON.stringify({
        w: menu.offsetWidth,
        h: Math.round(menu.getBoundingClientRect().height)
      }));
    } catch (e) { /* ignore */ }
  };

  let startX, startY, startW, startH, active = false;
  const onMove = function (e) {
    if (!active) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const wDelta = side === 'right' ? -dx : dx;
    menu.style.width = clamp(startW + wDelta, MINW, maxW()) + 'px';
    menu.style.maxHeight = clamp(startH - dy, MINH, maxH()) + 'px'; // drag up = taller
  };
  const onUp = function (e) {
    if (!active) return;
    active = false;
    menu.classList.remove('eu-resizing');
    try { handle.releasePointerCapture(e.pointerId); } catch (er) { /* ignore */ }
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', onUp);
    persist();
  };
  handle.addEventListener('pointerdown', function (e) {
    e.preventDefault();
    active = true;
    startX = e.clientX;
    startY = e.clientY;
    startW = menu.offsetWidth;
    startH = Math.round(menu.getBoundingClientRect().height);
    menu.classList.add('eu-resizing');
    try { handle.setPointerCapture(e.pointerId); } catch (er) { /* ignore */ }
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  });

  // Keyboard resizing for non-mouse users.
  handle.addEventListener('keydown', function (e) {
    const step = 24;
    let w = menu.offsetWidth;
    let h = Math.round(menu.getBoundingClientRect().height);
    let used = true;
    if (e.key === 'ArrowRight') w += side === 'right' ? -step : step;
    else if (e.key === 'ArrowLeft') w += side === 'right' ? step : -step;
    else if (e.key === 'ArrowUp') h += step;
    else if (e.key === 'ArrowDown') h -= step;
    else used = false;
    if (used) {
      e.preventDefault();
      menu.style.width = clamp(w, MINW, maxW()) + 'px';
      menu.style.maxHeight = clamp(h, MINH, maxH()) + 'px';
      persist();
    }
  });
}

// Create the accessibility menu
function createAccessibilityMenu() {
  const menu = document.createElement('div');
  menu.id = 'eu-accessibility-menu';
  menu.style.display = 'none';
  menu.setAttribute('role', 'dialog');
  menu.setAttribute('aria-labelledby', 'eu-accessibility-title');
  menu.setAttribute('aria-hidden', 'true');
  menu.setAttribute('dir', IS_RTL ? 'rtl' : 'ltr');
  menu.classList.add('eu-side-' + (WIDGET_CONFIG.widgetPosition.side === 'right' ? 'right' : 'left'));

  const header = document.createElement('div');
  header.classList.add('eu-header');

  // Brand: the full enableuser logo, left-aligned on the single header row
  const brandLogo = document.createElement('img');
  brandLogo.className = 'eu-header-logo';
  brandLogo.id = 'eu-accessibility-title';
  brandLogo.src = EU_LOGO;
  brandLogo.alt = 'enableuser — ' + getTranslation('accessibilityMenu');
  brandLogo.setAttribute('draggable', 'false');

  // Create reset button
  const resetButton = document.createElement('button');
  resetButton.classList.add('eu-reset-button');
  resetButton.innerHTML = `<span class="eu-reset-label">${getTranslation('reset')}</span>`;
  resetButton.title = getTranslation('resetAllSettings');
  resetButton.setAttribute('aria-label', getTranslation('resetAllSettings'));
  resetButton.addEventListener('click', resetAccessibilitySettings);

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className = 'eu-close';
  closeButton.innerHTML = `<span class="eu-tooltip">${getTranslation('close')}</span>`;
  closeButton.setAttribute('aria-label', getTranslation('closeAccessibilityMenu'));

  closeButton.addEventListener('click', function () {
    closeMenu();
  });

  closeButton.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeMenu();
    }
  });

  // Resize / expand grip — an inline control (drag, or focus it and use arrow keys)
  const resizeHandle = document.createElement('div');
  resizeHandle.className = 'eu-resize-handle';
  resizeHandle.setAttribute('role', 'slider');
  resizeHandle.setAttribute('tabindex', '0');
  resizeHandle.setAttribute('aria-label', getTranslation('resizeWidget'));
  resizeHandle.title = getTranslation('resizeWidget');
  resizeHandle.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14 2 L2 14 M14 7 L7 14 M14 12 L12 14"/></svg>';

  // Assemble a single header row: logo on the left, controls on the right
  header.appendChild(brandLogo);
  header.appendChild(resizeHandle);
  header.appendChild(resetButton);
  header.appendChild(closeButton);
  menu.appendChild(header);

  euSetupResize(menu, resizeHandle);

  // Create content wrapper
  const content = document.createElement('div');
  content.classList.add('eu-content');

  // ===========================================
  // PERSONALIZE YOUR EXPERIENCE SECTION
  // ===========================================
  const personalizeSection = document.createElement('div');
  personalizeSection.classList.add('eu-personalize-section');

  // Collapsible header button
  const personalizeHeader = document.createElement('button');
  personalizeHeader.classList.add('eu-personalize-header');
  personalizeHeader.setAttribute('aria-expanded', 'false');
  personalizeHeader.setAttribute('aria-controls', 'eu-personalize-body');
  personalizeHeader.innerHTML = `<span>${getTranslation('navigatePageStructure')}</span><svg class="eu-personalize-chevron" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>`;

  const personalizeBody = document.createElement('div');
  personalizeBody.classList.add('eu-personalize-body');
  personalizeBody.id = 'eu-personalize-body';

  personalizeHeader.addEventListener('click', () => {
    const expanded = personalizeHeader.getAttribute('aria-expanded') === 'true';
    personalizeHeader.setAttribute('aria-expanded', String(!expanded));
    personalizeBody.classList.toggle('eu-open');
    // Scan page structure on first open
    if (!expanded && !personalizeBody.dataset.scanned) {
      personalizeBody.dataset.scanned = 'true';
      refreshPageStructureTabs();
    }
  });

  // Tab bar
  const tabBar = document.createElement('div');
  tabBar.classList.add('eu-structure-tabs');
  tabBar.setAttribute('role', 'tablist');

  const tabDefs = [
    { id: 'landmarks', label: getTranslation('landmarks'), getter: () => pageStructureScanner.getLandmarks() },
    { id: 'headings', label: getTranslation('headings'), getter: () => pageStructureScanner.getHeadings() },
    { id: 'links', label: getTranslation('links'), getter: () => pageStructureScanner.getLinks() }
  ];

  const panels = {};

  tabDefs.forEach((def, i) => {
    // Tab button
    const tab = document.createElement('button');
    tab.classList.add('eu-structure-tab');
    if (i === 0) tab.classList.add('eu-active');
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tab.setAttribute('aria-controls', `eu-panel-${def.id}`);
    tab.id = `eu-tab-${def.id}`;
    tab.innerHTML = `<span>${def.label}</span><span class="eu-tab-count" id="eu-count-${def.id}">0</span>`;

    tab.addEventListener('click', () => {
      // Deactivate all tabs
      tabBar.querySelectorAll('.eu-structure-tab').forEach(t => {
        t.classList.remove('eu-active');
        t.setAttribute('aria-selected', 'false');
      });
      // Hide all panels
      Object.values(panels).forEach(p => p.classList.remove('eu-active'));
      // Activate clicked tab
      tab.classList.add('eu-active');
      tab.setAttribute('aria-selected', 'true');
      panels[def.id].classList.add('eu-active');
    });

    tabBar.appendChild(tab);

    // Panel
    const panel = document.createElement('div');
    panel.classList.add('eu-structure-panel');
    if (i === 0) panel.classList.add('eu-active');
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `eu-tab-${def.id}`);
    panel.id = `eu-panel-${def.id}`;
    panels[def.id] = panel;
  });

  // Function to populate tabs with scanned data
  function refreshPageStructureTabs() {
    tabDefs.forEach(def => {
      const panel = panels[def.id];
      const items = def.getter();
      // Update count badge
      const countEl = personalizeBody.querySelector(`#eu-count-${def.id}`);
      if (countEl) countEl.textContent = items.length;

      panel.innerHTML = '';
      if (items.length === 0) {
        const empty = document.createElement('div');
        empty.classList.add('eu-structure-empty');
        empty.textContent = getTranslation('noItemsFound');
        panel.appendChild(empty);
        return;
      }

      items.forEach(item => {
        const btn = document.createElement('button');
        btn.classList.add('eu-structure-item');
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('eu-structure-item-tag');
        tagSpan.textContent = item.tag;
        const textSpan = document.createElement('span');
        textSpan.classList.add('eu-structure-item-text');
        textSpan.textContent = item.text;
        textSpan.title = item.text;
        btn.appendChild(tagSpan);
        btn.appendChild(textSpan);
        btn.addEventListener('click', () => {
          pageStructureScanner.highlightAndNavigate(item.element);
        });
        panel.appendChild(btn);
      });
    });
  }

  // Assemble the personalize section
  personalizeBody.appendChild(tabBar);
  tabDefs.forEach(def => {
    personalizeBody.appendChild(panels[def.id]);
  });

  personalizeSection.appendChild(personalizeHeader);
  personalizeSection.appendChild(personalizeBody);

  // ===========================================
  // ACCESSIBILITY PROFILES SECTION (top of menu)
  // ===========================================
  if (WIDGET_CONFIG.enableProfiles) {
    const profilesSection = document.createElement('div');
    profilesSection.classList.add('eu-profiles-section');

    const profilesTitle = document.createElement('div');
    profilesTitle.classList.add('eu-profiles-title');
    profilesTitle.textContent = getTranslation('profiles');
    profilesSection.appendChild(profilesTitle);

    const chipRow = document.createElement('div');
    chipRow.classList.add('eu-profiles-row');

    Object.keys(ACCESSIBILITY_PROFILES).forEach(function (name) {
      const def = ACCESSIBILITY_PROFILES[name];
      const chip = document.createElement('button');
      chip.classList.add('eu-profile-chip');
      chip.setAttribute('data-profile', name);
      chip.setAttribute('role', 'switch');
      chip.textContent = getTranslation(def.labelKey);
      const isOn = localStorage.getItem('euActiveProfile') === name;
      chip.setAttribute('aria-pressed', String(isOn));
      if (isOn) chip.classList.add('active');
      chip.addEventListener('click', function () {
        applyAccessibilityProfile(name);
      });
      chipRow.appendChild(chip);
    });

    profilesSection.appendChild(chipRow);
    content.appendChild(profilesSection);
  }

  content.appendChild(personalizeSection);

  // ===========================================
  // SHOW SHORTCUTS TOGGLE
  // ===========================================
  const shortcutKeyMap = {
    focusIndicator: 'z',
    biggerCursor: 'm',
    highlightLinks: 'y',
    highContrast: 'c',
    colorFilter: 'i',
    saturation: 's',
    pauseAnimations: 'q',
    biggerText: '=',
    textSpacing: 'k',
    lineHeight: 'l',
    textAlign: 't',
    fontSelection: 'f',
    readingGuide: 'g',
    readingWindow: 'e',
    hideImages: 'a',
    screenReader: 'p',
    voiceControl: 'v',
    showAltText: 'd'
  };

  let shortcutsVisible = false;

  const shortcutsBar = document.createElement('div');
  shortcutsBar.classList.add('eu-shortcuts-bar');

  const shortcutsLabel = document.createElement('span');
  shortcutsLabel.classList.add('eu-shortcuts-label');
  shortcutsLabel.textContent = getTranslation('showShortcuts');

  const toggleSwitch = document.createElement('button');
  toggleSwitch.classList.add('eu-toggle-switch');
  toggleSwitch.setAttribute('role', 'switch');
  toggleSwitch.setAttribute('aria-checked', 'false');
  toggleSwitch.setAttribute('aria-label', getTranslation('showShortcuts'));
  toggleSwitch.innerHTML = '<div class="eu-toggle-track"></div><div class="eu-toggle-thumb"></div>';

  function updateShortcutLabels(show) {
    const buttons = optionsGrid.querySelectorAll('.eu-accessibility-option');
    buttons.forEach(btn => {
      const optionId = btn.getAttribute('data-accessibility-option-id');
      const key = shortcutKeyMap[optionId];
      if (!key) return;
      const textEl = btn.querySelector('.eu-button-text');
      if (!textEl) return;
      // Store original text on first call
      if (!textEl.dataset.originalText) {
        textEl.dataset.originalText = textEl.textContent;
      }
      textEl.textContent = show
        ? `${textEl.dataset.originalText} (${key})`
        : textEl.dataset.originalText;
    });
  }

  toggleSwitch.addEventListener('click', () => {
    shortcutsVisible = !shortcutsVisible;
    toggleSwitch.setAttribute('aria-checked', String(shortcutsVisible));
    updateShortcutLabels(shortcutsVisible);
  });

  shortcutsBar.appendChild(shortcutsLabel);
  shortcutsBar.appendChild(toggleSwitch);
  content.appendChild(shortcutsBar);

  // Keyboard shortcuts listener (works when menu is open)
  document.addEventListener('keydown', function (e) {
    // Don't trigger if user is typing in an input/textarea/select
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target.isContentEditable) return;
    // Don't trigger with modifier keys
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    const pressedKey = e.key.toLowerCase();

    const menuEl = shadowRoot.getElementById('eu-accessibility-menu');
    if (!menuEl || menuEl.style.display !== 'block') return;

    // Additional shortcuts (active when menu is open)
    switch (pressedKey) {
      case 'r': // Reset Visual Toolkit
        e.preventDefault();
        resetAccessibilitySettings();
        return;
      case 'x': // Reset Issue — clears highlights and re-scans page structure
        e.preventDefault();
        const prevHighlight = document.querySelector('.eu-structure-highlight');
        if (prevHighlight) prevHighlight.classList.remove('eu-structure-highlight');
        // Re-scan page structure if personalize section is open
        const persBody = shadowRoot.getElementById('eu-personalize-body');
        if (persBody && persBody.classList.contains('eu-open')) {
          persBody.dataset.scanned = '';
          persBody.dataset.scanned = 'true';
          if (typeof refreshPageStructureTabs === 'function') refreshPageStructureTabs();
        }
        return;
      case 'n': // Navigate by Page Structure — toggle the personalize section open
        e.preventDefault();
        const persHeader = personalizeSection.querySelector('.eu-personalize-header');
        if (persHeader) persHeader.click();
        return;
    }

    // Tool grid shortcuts
    const optionId = Object.keys(shortcutKeyMap).find(id => shortcutKeyMap[id] === pressedKey);
    if (!optionId) return;

    const btn = menuEl.querySelector(`[data-accessibility-option-id="${optionId}"]`);
    if (btn) {
      e.preventDefault();
      btn.click();
    }
  });

  // Create grid wrapper for accessibility options
  const optionsGrid = document.createElement('div');
  optionsGrid.classList.add('eu-options-grid');

  // ===================================================================
  // UNIFIED BUTTON CONFIGURATION – 4 rows × 3 columns
  // Order: Focus, Cursor, Highlight, Contrast, Color Shift, Animation,
  //        Text Size, Spacing, Font, Guide, Window, Images
  // ===================================================================
  const allButtonConfigs = [
    // Row 1
    {
      order: 1,
      type: 'toggle',
      text: getTranslation('focus'),
      key: 'focusIndicator',
      customToggleFunction: toggleFocusIndicator,
      icon: icons.focusIndicator,
      enabled: WIDGET_CONFIG.enableFocusIndicator,
      optionId: 'focusIndicator'
    },
    {
      order: 2,
      type: 'toggle',
      text: getTranslation('cursor'),
      key: 'biggerCursor',
      className: 'eu-bigger-cursor',
      icon: icons.biggerCursor,
      enabled: WIDGET_CONFIG.enableBiggerCursor,
      optionId: 'biggerCursor'
    },
    {
      order: 3,
      type: 'toggle',
      text: getTranslation('highlight'),
      key: 'highlightLinks',
      customToggleFunction: toggleHighlightLinks,
      icon: icons.highlightLinks,
      enabled: WIDGET_CONFIG.enableHighlightLinks,
      optionId: 'highlightLinks'
    },

    // Row 2
    {
      order: 4,
      type: 'action',
      text: getTranslation('contrast'),
      actionFunction: handleHighContrast,
      icon: icons.highContrast,
      enabled: WIDGET_CONFIG.enableHighContrast,
      optionsConfig: { count: 3 },
      optionId: 'highContrast'
    },
    {
      order: 5,
      type: 'action',
      text: getTranslation('colorShift'),
      actionFunction: handleColorFilter,
      icon: icons.colorFilter,
      enabled: WIDGET_CONFIG.enableColorFilter,
      optionsConfig: { count: 4 },
      optionId: 'colorFilter'
    },
    {
      order: 5.5,
      type: 'action',
      text: getTranslation('saturation'),
      actionFunction: handleSaturation,
      icon: icons.saturation,
      enabled: WIDGET_CONFIG.enableSaturation,
      optionsConfig: { count: 3 },
      optionId: 'saturation'
    },
    {
      order: 6,
      type: 'toggle',
      text: getTranslation('animation'),
      key: 'pauseAnimations',
      className: 'eu-pause-animations',
      icon: icons.pauseAnimations,
      enabled: WIDGET_CONFIG.enablePauseAnimations,
      optionId: 'pauseAnimations',
      // Also freeze non-CSS motion (videos, animated GIFs, <marquee>) in step
      // with the CSS animation/transition kill done via the className.
      customToggleFunction: function (isActive) { mediaFreeze.toggle(isActive); return true; }
    },

    // Row 3
    {
      order: 7,
      type: 'action',
      text: getTranslation('textSize'),
      actionFunction: handleBiggerText,
      icon: icons.biggerText,
      enabled: WIDGET_CONFIG.enableBiggerText,
      optionsConfig: { count: 3 },
      optionId: 'biggerText'
    },
    {
      order: 8,
      type: 'action',
      text: getTranslation('spacing'),
      actionFunction: handleTextSpacing,
      icon: icons.textSpacing,
      enabled: WIDGET_CONFIG.enableTextSpacing,
      optionsConfig: { count: 3 },
      optionId: 'textSpacing'
    },
    {
      order: 8.3,
      type: 'action',
      text: getTranslation('lineHeight'),
      actionFunction: handleLineHeight,
      icon: icons.lineHeight,
      enabled: WIDGET_CONFIG.enableLineHeight,
      optionsConfig: { count: 3 },
      optionId: 'lineHeight'
    },
    {
      order: 8.6,
      type: 'action',
      text: getTranslation('align'),
      actionFunction: handleTextAlign,
      icon: icons.textAlign,
      enabled: WIDGET_CONFIG.enableTextAlign,
      optionsConfig: { count: 3 },
      optionId: 'textAlign'
    },
    {
      order: 9,
      type: 'action',
      text: getTranslation('font'),
      actionFunction: handleFontSelection,
      icon: icons.fontSelection,
      enabled: WIDGET_CONFIG.enableFontSelection,
      optionsConfig: { count: 4 },
      optionId: 'fontSelection'
    },

    // Row 4
    {
      order: 10,
      type: 'toggle',
      text: getTranslation('guide'),
      key: 'readingGuide',
      customToggleFunction: readingGuide.toggle,
      icon: icons.readingGuide,
      enabled: WIDGET_CONFIG.enableReadingGuide,
      optionId: 'readingGuide'
    },
    {
      order: 11,
      type: 'toggle',
      text: getTranslation('window'),
      key: 'readingWindow',
      customToggleFunction: readingWindow.toggle,
      icon: icons.readingWindow,
      enabled: WIDGET_CONFIG.enableReadingWindow,
      optionId: 'readingWindow'
    },
    {
      order: 12,
      type: 'toggle',
      text: getTranslation('images'),
      key: 'hideImages',
      icon: icons.hideImages,
      customToggleFunction: toggleHideImages,
      enabled: WIDGET_CONFIG.enableHideImages,
      optionId: 'hideImages'
    },

    // Row 6 — assistive tools
    {
      order: 16,
      type: 'toggle',
      text: getTranslation('screenReader'),
      key: 'screenReader',
      customToggleFunction: screenReader.toggle,
      icon: icons.screenReader,
      enabled: WIDGET_CONFIG.enableScreenReader,
      requiresFeature: screenReader,
      optionId: 'screenReader'
    },
    {
      order: 17,
      type: 'toggle',
      text: getTranslation('voice'),
      key: 'voiceControl',
      customToggleFunction: voiceControl.toggle,
      icon: icons.voiceControl,
      enabled: WIDGET_CONFIG.enableVoiceControl,
      requiresFeature: voiceControl,
      optionId: 'voiceControl'
    },
    {
      order: 18,
      type: 'toggle',
      text: getTranslation('altText'),
      key: 'showAltText',
      customToggleFunction: altTextViewer.toggle,
      icon: icons.altText,
      enabled: WIDGET_CONFIG.enableAltText,
      optionId: 'showAltText'
    },

    // Row 7 — enhanced tools (v1.3.0)
    {
      order: 19,
      type: 'toggle',
      text: getTranslation('hoverHighlight'),
      key: 'hoverHighlight',
      customToggleFunction: hoverHighlight.toggle,
      icon: icons.hoverHighlight,
      enabled: WIDGET_CONFIG.enableHighlightHover,
      optionId: 'hoverHighlight'
    },
    {
      order: 20,
      type: 'toggle',
      text: getTranslation('enlargeButtons'),
      key: 'enlargeButtons',
      className: 'eu-enlarge-buttons',
      icon: icons.enlargeButtons,
      enabled: WIDGET_CONFIG.enableEnlargeButtons,
      optionId: 'enlargeButtons'
    },
    {
      order: 21,
      type: 'toggle',
      text: getTranslation('muteMedia'),
      key: 'muteMedia',
      customToggleFunction: muteMedia.toggle,
      icon: icons.muteMedia,
      enabled: WIDGET_CONFIG.enableMuteMedia,
      optionId: 'muteMedia'
    },
    {
      order: 22,
      type: 'toggle',
      text: getTranslation('readableFont'),
      key: 'readableFont',
      className: 'eu-readable-font',
      icon: icons.readableFont,
      enabled: WIDGET_CONFIG.enableReadableFont,
      optionId: 'readableFont'
    },
    {
      order: 23,
      type: 'action',
      text: getTranslation('magnifier'),
      actionFunction: handlePageMagnifier,
      icon: icons.magnifier,
      enabled: WIDGET_CONFIG.enablePageMagnifier,
      optionsConfig: { count: 3 },
      optionId: 'pageMagnifier'
    },
    {
      order: 24,
      type: 'toggle',
      text: getTranslation('textMagnifier'),
      key: 'textMagnifier',
      customToggleFunction: textMagnifier.toggle,
      icon: icons.textMagnifier,
      enabled: WIDGET_CONFIG.enableTextMagnifier,
      optionId: 'textMagnifier'
    },
    {
      order: 25,
      type: 'toggle',
      text: getTranslation('readFocus'),
      key: 'readFocus',
      customToggleFunction: readFocus.toggle,
      icon: icons.readFocus,
      enabled: WIDGET_CONFIG.enableReadFocus,
      optionId: 'readFocus'
    },
    {
      order: 26,
      type: 'toggle',
      text: getTranslation('readableMode'),
      key: 'readableMode',
      customToggleFunction: readableMode.toggle,
      icon: icons.readableMode,
      enabled: WIDGET_CONFIG.enableReadableMode,
      optionId: 'readableMode'
    },
    {
      order: 27,
      type: 'toggle',
      text: getTranslation('virtualKeyboard'),
      key: 'virtualKeyboard',
      customToggleFunction: virtualKeyboard.toggle,
      icon: icons.virtualKeyboard,
      enabled: WIDGET_CONFIG.enableVirtualKeyboard,
      optionId: 'virtualKeyboard'
    },
    {
      order: 28,
      type: 'toggle',
      text: getTranslation('dictionary'),
      key: 'dictionary',
      customToggleFunction: dictionary.toggle,
      icon: icons.dictionary,
      enabled: WIDGET_CONFIG.enableDictionary,
      optionId: 'dictionary'
    },
    {
      order: 29,
      type: 'action',
      text: getTranslation('customColor'),
      actionFunction: customColor.togglePanel,
      icon: icons.customColor,
      enabled: WIDGET_CONFIG.enableCustomColor,
      optionId: 'customColor'
    },
  ];

  // Sort buttons by order and add only enabled ones to the grid
  allButtonConfigs
    .filter(config => config.enabled)
    .sort((a, b) => a.order - b.order)
    .forEach((config) => {
      let button;

      if (config.type === 'action') {
        button = createActionButton(config.text, config.actionFunction, config.icon, config.optionsConfig, config.optionId);
      } else if (config.type === 'toggle') {
        button = createToggleButton(
          config.text,
          config.key,
          config.className,
          config.target || document.body,
          config.customToggleFunction,
          config.icon,
          config.requiresFeature,
          config.optionId
        );
      }

      if (button) {
        optionsGrid.appendChild(button);
      }
    });

  // Add grid to content
  content.appendChild(optionsGrid);

  // Custom Color inline panel (toggled open by the Custom Color tool button)
  if (WIDGET_CONFIG.enableCustomColor) {
    content.appendChild(customColor.createPanel());
  }

  // ===========================================
  // ADDITIONAL KEYBOARD SHORTCUTS (flat list below tools)
  // ===========================================
  const additionalShortcutDefs = [
    { label: getTranslation('resetVisualToolkit'), key: 'r' },
    { label: getTranslation('resetIssue'), key: 'x' },
    { label: getTranslation('navigatePageStructureShortcut'), key: 'n' }
  ];

  const additionalSection = document.createElement('div');
  additionalSection.classList.add('eu-additional-shortcuts');

  const sectionTitle = document.createElement('div');
  sectionTitle.classList.add('eu-additional-shortcuts-title');
  sectionTitle.textContent = getTranslation('additionalShortcuts');
  additionalSection.appendChild(sectionTitle);

  additionalShortcutDefs.forEach(def => {
    const row = document.createElement('div');
    row.classList.add('eu-shortcut-row');
    row.innerHTML = `<span class="eu-shortcut-action">${def.label}</span><kbd class="eu-shortcut-key">${def.key}</kbd>`;
    additionalSection.appendChild(row);
  });

  content.appendChild(additionalSection);

  // Utility links: Accessibility Statement, Hide button
  const footerLinks = document.createElement('div');
  footerLinks.classList.add('eu-footer-links');

  if (WIDGET_CONFIG.accessibilityStatementUrl) {
    const a = document.createElement('a');
    a.href = WIDGET_CONFIG.accessibilityStatementUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = getTranslation('accessibilityStatement');
    footerLinks.appendChild(a);
  }
  // Hide-button control — hides the launcher until the next page load
  const hideLink = document.createElement('a');
  hideLink.href = '#';
  hideLink.textContent = getTranslation('hideForNow');
  hideLink.addEventListener('click', function (e) {
    e.preventDefault();
    closeMenu();
    const btnContainer = shadowRoot.getElementById('eu-accessibility-fixed-button');
    if (btnContainer) btnContainer.style.display = 'none'; // hidden until the next page load
  });
  footerLinks.appendChild(hideLink);
  content.appendChild(footerLinks);

  // Add footer
  const footer = document.createElement('div');
  footer.classList.add('eu-footer');
  footer.innerHTML = 'Powered by <a href="https://www.enableuser.com" target="_blank" rel="noopener noreferrer" class="eu-footer-brand" aria-label="EnableUser"><img src="' + EU_LOGO + '" alt="EnableUser" class="eu-footer-logo" draggable="false"></a>';
  content.appendChild(footer);

  // Add content to menu
  menu.appendChild(content);

  shadowRoot.appendChild(menu);
}

// ===========================================
// MENU MANAGEMENT
// ===========================================

// Cache for menu elements
const menuCache = {
  menu: null,
  button: null,
  closeButton: null,
  init: function () {
    this.menu = shadowRoot.getElementById('eu-accessibility-menu');
    this.button = shadowRoot.getElementById('eu-accessibility-button');
    this.closeButton = this.menu?.querySelector('.eu-close');
  }
};

// Menu control functions (optimized)
function toggleMenu() {
  if (!menuCache.menu) menuCache.init();
  const isOpen = menuCache.menu.style.display === 'block';

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  if (!menuCache.menu) menuCache.init();
  menuCache.menu.style.display = 'block';
  menuCache.menu.setAttribute('aria-hidden', 'false');

  // Hide the trigger button while menu is open
  const btnContainer = shadowRoot.getElementById('eu-accessibility-fixed-button');
  if (btnContainer) btnContainer.style.display = 'none';

  // Focus on the first tool button
  const firstOption = menuCache.menu.querySelector('.eu-accessibility-option');
  if (firstOption) {
    firstOption.focus();
  } else if (menuCache.closeButton) {
    menuCache.closeButton.focus();
  }

  // Add keyboard navigation
  document.addEventListener('keydown', handleMenuKeyboard);
}

function closeMenu() {
  if (!menuCache.menu) menuCache.init();
  menuCache.menu.style.display = 'none';
  menuCache.menu.setAttribute('aria-hidden', 'true');

  // Show the trigger button again
  const btnContainer = shadowRoot.getElementById('eu-accessibility-fixed-button');
  if (btnContainer) btnContainer.style.display = '';

  if (menuCache.button) {
    menuCache.button.focus();
  }

  // Remove keyboard navigation
  document.removeEventListener('keydown', handleMenuKeyboard);
}

// Cache for keyboard navigation elements
let keyboardCache = {
  focusableElements: null,
  lastUpdate: 0,
  getFocusableElements: function () {
    const now = Date.now();
    if (!this.focusableElements || now - this.lastUpdate > 1000) {
      if (menuCache.menu) {
        this.focusableElements = {
          all: menuCache.menu.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
          options: Array.from(menuCache.menu.querySelectorAll('.eu-accessibility-option, .eu-close, .eu-reset-button'))
        };
        this.lastUpdate = now;
      }
    }
    return this.focusableElements;
  }
};

function handleMenuKeyboard(e) {
  if (!menuCache.menu || menuCache.menu.style.display !== 'block') return;

  if (e.key === 'Escape') {
    e.preventDefault();
    closeMenu();
    return;
  }

  const elements = keyboardCache.getFocusableElements();
  if (!elements) return;

  if (e.key === 'Tab') {
    const firstElement = elements.all[0];
    const lastElement = elements.all[elements.all.length - 1];
    const focused = shadowRoot.activeElement;

    if (e.shiftKey) {
      if (focused === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (focused === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const currentIndex = elements.options.indexOf(shadowRoot.activeElement);
    let nextIndex;

    if (e.key === 'ArrowDown') {
      nextIndex = currentIndex === elements.options.length - 1 ? 0 : currentIndex + 1;
    } else {
      nextIndex = currentIndex === 0 ? elements.options.length - 1 : currentIndex - 1;
    }

    elements.options[nextIndex].focus();
  }
}

// ===========================================
// INITIALIZATION
// ===========================================

// Initialize the widget
function initAccessibilityWidget() {
  // Create shadow DOM first
  createShadowContainer();

  // Inject page styles (for accessibility features)
  injectPageStyles();

  // Respect OS-level reduced-motion preference on first visit
  // (auto-enables Pause Animations unless the user has chosen otherwise)
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
        localStorage.getItem('pauseAnimations') === null) {
      localStorage.setItem('pauseAnimations', 'true');
    }
  } catch (e) { /* ignore */ }

  // Stamp / migrate the localStorage settings schema version.
  try {
    if (localStorage.getItem('euSettingsVersion') !== EU_SETTINGS_VERSION) {
      localStorage.setItem('euSettingsVersion', EU_SETTINGS_VERSION);
    }
  } catch (e) { /* ignore */ }

  // Apply saved settings
  applySettings();

  // Create widget UI inside shadow DOM
  createAccessibilityButton();
  createAccessibilityMenu();

  // Global shortcut: Alt+A toggles the accessibility panel from anywhere on the page.
  document.addEventListener('keydown', function (e) {
    if (!e.altKey || e.ctrlKey || e.metaKey) return;
    const tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (e.target && e.target.isContentEditable)) return;
    if ((e.key || '').toLowerCase() === 'a') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Extend accessibility classes/styles into same-origin iframes
  frameSync.start();
  frameSync.syncNow();
}

// ===========================================
// WIDGET BOOTSTRAP
// ===========================================

// Load the widget when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccessibilityWidget);
} else {
  initAccessibilityWidget();
}

// --- Browser-only code ends ---
}