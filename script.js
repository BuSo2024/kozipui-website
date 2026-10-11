const WHATSAPP_NUMBER = "905XXXXXXXXX";
const INSTAGRAM_URL = "";
const products = [
  { id: 'tshirt', tr: 'Tişört', en: 'Regular T-shirt', trLine: 'Günlük favorinize kişisel bir dokunuş.', enLine: 'A personal touch for an everyday favorite.' },
  { id: 'polo', tr: 'Polo Tişört', en: 'Polo T-shirt', trLine: 'Sade çizgiler, size özel detaylar.', enLine: 'Clean lines with a detail of your own.' },
  { id: 'towel', tr: 'Havlu', en: 'Towel', trLine: 'Küçük bir isim, anlamlı bir hediye.', enLine: 'A little name, a meaningful gift.' },
  { id: 'tote', tr: 'Bez Çanta', en: 'Tote bag', trLine: 'Hikâyenizi her gün yanınızda taşıyın.', enLine: 'Carry a little of your story every day.' }
];
const colors = [
  { hex: '#F26A2E', tr: 'Turuncu', en: 'Orange' }, { hex: '#D99A3A', tr: 'Altın sarısı', en: 'Golden Ochre' },
  { hex: '#7A7F5D', tr: 'Zeytin', en: 'Olive' }, { hex: '#6E8295', tr: 'Mavi gri', en: 'Blue Slate' },
  { hex: '#2F2C2A', tr: 'Kömür', en: 'Soft Charcoal' }
];
const translations = {
  tr: {
    skip:'İçeriğe geç',studio:'NAKIŞ ATÖLYESİ',catalog:'Katalog',personalization:'Kişiselleştirme',about:'Hakkımızda',contact:'İletişim',cart:'Sepet',menu:'Menü',close:'Kapat',
    heroLabel:'KİŞİYE ÖZEL NAKIŞ',heroTitle:'İsme özel nakışlı hediyeler ve tekstil ürünleri',heroText:'KoziPui, sevdikleriniz ve markanız için özenle hazırlanmış kişiye özel nakışlı ürünler tasarlar.',viewCatalog:'Kataloğu gör',personalizeProduct:'Ürün kişiselleştir',heroNote:'Küçük detaylar. Kalıcı anılar.',madeFor:'Sadece sizin için',tote:'Bez Çanta',unique:'Sizin kadar özel',littleStitches:'Küçük ilmekler, büyük anlamlar.',handmade:'Özenle işlendi ✳',concept:'Konsept illüstrasyonları',
    value1:'✳ Kişiye özel detaylar',value2:'♡ Özenle hazırlanır',value3:'↗ Fikrinizden ilham alır',catalogLabel:'KENDİ HİKÂYENİZİ İŞLEYİN',catalogTitle:'Bir ürün, binlerce olasılık.',catalogText:'Günlük favorilerden anlamlı hediyelere. İlk ilmeği birlikte atalım.',personalLabel:'HAYAL EDİN. KİŞİSELLEŞTİRİN.',personalTitle:'Biraz siz, biraz KoziPui.',personalIntro:'Bir isim, bir renk ya da kendi tasarımınız. Her şey küçük bir fikirle başlar.',textEmbroidery:'YAZI NAKIŞI',textTitle:'Yazını seç, ip rengini belirle',textDescription:'Ürünü seç, yazını gir ve nakış önizlemesini anında gör.',previewHint:'Önizleme temsilidir; gerçek nakış için tasarım birlikte onaylanır.',yourText:'Nakış yazınız',threadColor:'İp rengi',sendWhatsApp:'WhatsApp ile gönder',addBasket:'Talep sepetine ekle',ownDesignLabel:'ÖZEL TASARIM',ownDesign:'Kendi tasarımınız',designDescription:'Logonuzu veya tasarımınızı gönderin, nakış için ön çalışma hazırlayalım.',chooseFile:'Tasarım dosyanızı seçin',fileTypes:'PNG, JPG, SVG veya PDF · en fazla 10 MB',yourNote:'Notunuz',fileNotice:'Dosyanız yalnızca cihazınızda seçilir. Sunucuya yüklenmez. WhatsApp görüşmesinde dosyayı kendiniz ekleyin.',submitForm:'Formu gönder',sendOnWhatsApp:'WhatsApp ile gönder',designFootnote:'Her tasarımın bir hikâyesi var. Sizinkini birlikte işleyelim.',
    gallery:'Galeri',galleryLabel:'İLHAM KÖŞESİ',galleryTitle:'Detaylarda saklı.',galleryNotice:'Bu konsept illüstrasyonları, gerçek atölye fotoğraflarıyla değiştirilecektir.',gallery1:'Kişisel bir dokunuş',gallery2:'Her güne küçük bir hikâye',gallery3:'Markanızın ince detayı',reviews:'Yorumlar',reviewsLabel:'GÜZEL SÖZLER İÇİN BİR YER',reviewsTitle:'Sizin hikâyeleriniz.',reviewsNotice:'Prototip örnekleri — gerçek müşteri yorumları değildir.',sample:'ÖRNEK YORUM',review1:'“Sıradan bir hediyeyi kişisel bir anıya dönüştüren o küçük detay.”',review2:'“Seçtiğim isim ve renk bir araya gelince tam hayal ettiğim gibi oldu.”',review3:'“Markamız için sade, özenli ve bize ait bir dokunuş.”',sampleAuthor:'Örnek müşteri · prototip',aboutLabel:'KÜÇÜK BİR ATÖLYE. BÜYÜK BİR ÖZEN.',aboutTitle:'Her ilmekte bir hikâye.',aboutText:'KoziPui, kişiye özel nakışlı hediyeler ve tekstil ürünleri hazırlayan küçük bir atölyedir. Her ürün, detaylara özen gösterilerek ve özel bir anı daha kalıcı hale getirmek için tasarlanır.',contactLabel:'BİRLİKTE BİR ŞEYLER ÜRETELİM',contactTitle:'Aklınızda özel bir fikir mi var?',contactText:'Bize yazın, birlikte nakışa dönüştürelim.',tagline:'Küçük ilmekler. Size özel hikâyeler.',emailPlaceholder:'E-posta: eklenecek',prototype:'Prototip · İletişim bilgileri henüz ayarlanmadı',personalizeShort:'Kişiselleştir',basketTitle:'Talep sepetiniz',basketNotice:'Bu bir teklif talebidir. Çevrimiçi ödeme veya ödeme adımı yoktur.',emptyBasket:'Sepetiniz boş. Bir kişiselleştirme talebi ekleyin.',remove:'Kaldır',added:'Talebiniz sepete eklendi.',textRequired:'Lütfen nakış yazınızı girin.',fileError:'PNG, JPG, SVG veya PDF seçin (en fazla 10 MB).',formPrepared:'Talebiniz bu cihazda hazırlandı; gönderilmedi. WhatsApp ile paylaşın ve dosyanızı görüşmeye ekleyin.',contactMissing:'WhatsApp numarası henüz ayarlanmadı. Bu bir prototiptir; mesaj gönderilmedi. Site sahibi script.js içindeki WHATSAPP_NUMBER değerini güncellemelidir.',instagramMissing:'Instagram adresi henüz ayarlanmadı. Site sahibi script.js içindeki INSTAGRAM_URL değerini eklemelidir.',notePlaceholder:'Notunuz (ürün, renk, adet, nakış konumu)',textPlaceholder:'örn. Elif',messageHello:'Merhaba KoziPui, kişiselleştirme için teklif almak istiyorum.',messageProduct:'Ürün',messageText:'Yazı',messageColor:'İp rengi',messageNote:'Not',messageFile:'Dosya',attach:'Dosyayı bu görüşmeye kendim ekleyeceğim.',language:'Dil',generalMessage:'Merhaba KoziPui, özel bir nakış fikrim var.',noText:'Yazınız',request:'Talep'
  },
  en: {
    skip:'Skip to content',studio:'EMBROIDERY STUDIO',catalog:'Catalog',personalization:'Personalization',about:'About Us',contact:'Contact',cart:'Cart',menu:'Menu',close:'Close',
    heroLabel:'CUSTOM EMBROIDERY',heroTitle:'Personalized embroidered gifts and textile pieces',heroText:'KoziPui creates carefully made embroidered products for loved ones, special moments, and small brands.',viewCatalog:'View catalog',personalizeProduct:'Personalize a product',heroNote:'Little details. Lasting memories.',madeFor:'Made just for you',tote:'Tote bag',unique:'As unique as you',littleStitches:'Little stitches, meaningful stories.',handmade:'Made with care ✳',concept:'Concept illustrations',value1:'✳ Personal little details',value2:'♡ Made with care',value3:'↗ Inspired by your ideas',catalogLabel:'STITCH YOUR OWN STORY',catalogTitle:'One piece, endless possibilities.',catalogText:'From everyday favorites to thoughtful gifts. Let’s make the first stitch together.',personalLabel:'IMAGINE IT. MAKE IT YOURS.',personalTitle:'A little you, a little KoziPui.',personalIntro:'A name, a color, or your own design. It all starts with a little idea.',textEmbroidery:'TEXT EMBROIDERY',textTitle:'Write your name, choose your thread',textDescription:'Choose the product, type your text, and preview your embroidery.',previewHint:'An illustrative preview; the final embroidery design is agreed together.',yourText:'Your embroidery text',threadColor:'Thread color',sendWhatsApp:'Send via WhatsApp',addBasket:'Add to request basket',ownDesignLabel:'CUSTOM DESIGN',ownDesign:'Your own design',designDescription:'Send us your logo or design and we’ll prepare an embroidery preview.',chooseFile:'Choose your design file',fileTypes:'PNG, JPG, SVG or PDF · up to 10 MB',yourNote:'Your note',fileNotice:'Your file is selected on your device only, not uploaded to a server. Attach it manually in your WhatsApp conversation.',submitForm:'Submit the form',sendOnWhatsApp:'Send on WhatsApp',designFootnote:'Every design has a story. Let’s stitch yours together.',gallery:'Gallery',galleryLabel:'A LITTLE INSPIRATION',galleryTitle:'It’s all in the details.',galleryNotice:'These concept illustrations will be replaced with real studio photography.',gallery1:'A personal little touch',gallery2:'A story for every day',gallery3:'Your brand, in the details',reviews:'Reviews',reviewsLabel:'A PLACE FOR KIND WORDS',reviewsTitle:'Your stories, stitched in.',reviewsNotice:'Prototype examples — these are not real customer reviews.',sample:'SAMPLE REVIEW',review1:'“That little detail that turns an everyday gift into a personal memory.”',review2:'“Seeing my chosen name and color together made it feel truly mine.”',review3:'“A simple, thoughtful touch that feels like our small brand.”',sampleAuthor:'Example customer · prototype',aboutLabel:'A SMALL STUDIO. A LOT OF CARE.',aboutTitle:'A story in every stitch.',aboutText:'KoziPui is a small embroidery studio creating personalized textile gifts and custom pieces. Each product is made with care, attention to detail, and the intention of turning simple textiles into meaningful keepsakes.',contactLabel:'LET’S MAKE SOMETHING TOGETHER',contactTitle:'Have a custom idea in mind?',contactText:'Message us and let’s turn it into embroidery.',tagline:'Little stitches. Stories of your own.',emailPlaceholder:'Email: to be added',prototype:'Prototype · Contact details are not configured yet',personalizeShort:'Personalization',basketTitle:'Your request basket',basketNotice:'This is a quote request. There is no online payment or checkout.',emptyBasket:'Your basket is empty. Add a personalization request.',remove:'Remove',added:'Your request was added to the basket.',textRequired:'Please enter your embroidery text.',fileError:'Choose a PNG, JPG, SVG or PDF (up to 10 MB).',formPrepared:'Your request is prepared on this device; it has not been sent. Share it via WhatsApp and attach your file in the conversation.',contactMissing:'The WhatsApp number is not configured yet. This is a prototype; no message was sent. The site owner must update WHATSAPP_NUMBER in script.js.',instagramMissing:'The Instagram address is not configured yet. The site owner must set INSTAGRAM_URL in script.js.',notePlaceholder:'Your note (product, color, quantity, placement)',textPlaceholder:'e.g. Elif',messageHello:'Hello KoziPui, I’d like a quote for personalized embroidery.',messageProduct:'Product',messageText:'Text',messageColor:'Thread color',messageNote:'Note',messageFile:'File',attach:'I will attach the file manually in this conversation.',language:'Language',generalMessage:'Hello KoziPui, I have a custom embroidery idea.',noText:'Your text',request:'Request'
  }
};
let lang = 'tr';
let selectedProduct = products[0];
let selectedColor = colors[0];
const basket = [];
const $ = selector => document.querySelector(selector);
const t = key => translations[lang][key];
let toastTimer;
function notify(message) { $('#toast').textContent = message; $('#toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 3500); }
function notice(message) { $('#notice-text').textContent = message; $('#notice-dialog').showModal(); }
function sendWhatsApp(message) {
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) { notice(t('contactMissing')); return; }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}
function image(product) { const img = document.createElement('img'); img.src = `assets/images/${product.id}.svg`; img.alt = ''; img.width = 400; img.height = 440; return img; }
function renderProducts() {
  $('#catalog-grid').replaceChildren(); $('#product-selector').replaceChildren();
  products.forEach(product => {
    const card = document.createElement('button'); card.className = 'catalog-card';
    const visual = document.createElement('div'); visual.className = 'catalog-image'; const catalogPicture = document.createElement('picture');
    const mobileSource = document.createElement('source'); mobileSource.media = '(max-width:800px)'; mobileSource.srcset = `assets/images/hero/${product.id}.svg`;
    catalogPicture.append(mobileSource, image(product)); visual.append(catalogPicture);
    const arrow = document.createElement('span'); arrow.className = 'arrow'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true'); visual.append(arrow);
    const title = document.createElement('h3'); title.textContent = product[lang];
    const line = document.createElement('p'); line.textContent = product[`${lang}Line`]; card.append(visual, title, line);
    card.addEventListener('click', () => { selectProduct(product); $('#personalization').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); });
    $('#catalog-grid').append(card);
    const choice = document.createElement('button'); choice.className = 'product-choice'; choice.type = 'button'; choice.dataset.product = product.id; choice.setAttribute('aria-pressed', String(product.id === selectedProduct.id)); choice.append(image(product), document.createTextNode(product[lang]));
    choice.addEventListener('click', () => selectProduct(product)); $('#product-selector').append(choice);
  });
}
function selectProduct(product) { selectedProduct = product; document.querySelectorAll('[data-product]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.product === product.id))); updatePreview(); }
function renderColors() {
  $('#swatches').replaceChildren();
  colors.forEach(color => { const button = document.createElement('button'); button.className = 'swatch'; button.type = 'button'; button.style.backgroundColor = color.hex; button.title = color[lang]; button.setAttribute('aria-label', color[lang]); button.setAttribute('aria-pressed', String(color === selectedColor)); button.addEventListener('click', () => { selectedColor = color; renderColors(); updatePreview(); }); $('#swatches').append(button); });
}
function updatePreview() { $('#preview-image').src = `assets/images/${selectedProduct.id}.svg`; $('#preview-product').textContent = selectedProduct[lang]; $('#preview-text').textContent = $('#custom-text').value || t('noText'); $('#preview-text').style.color = selectedColor.hex; }
function currentRequest() { return { product: selectedProduct.id, text: $('#custom-text').value.trim(), color: selectedColor.hex, note: $('#design-note').value.trim(), occasion: headerMobileQuery.matches ? selectedOccasion : '' }; }
function requestMessage(request) { const product = products.find(item => item.id === request.product); const color = colors.find(item => item.hex === request.color); return [`${t('messageProduct')}: ${product[lang]}`, `${t('messageText')}: ${request.text}`, `${t('messageColor')}: ${color[lang]} (${color.hex})`, ...(request.note ? [`${t('messageNote')}: ${request.note}`] : []), ...(request.occasion ? [`${t('occasionLabel')}: ${t(request.occasion)}`] : [])].join('\n'); }
function validText() { if (!$('#custom-text').value.trim()) { $('#custom-text').focus(); notify(t('textRequired')); return false; } return true; }
function renderBasket() {
  $('#basket-items').replaceChildren(); document.querySelectorAll('.basket-count').forEach(el => el.textContent = basket.length);
  if (!basket.length) { const empty = document.createElement('p'); empty.textContent = t('emptyBasket'); $('#basket-items').append(empty); }
  basket.forEach((request, index) => { const row = document.createElement('div'); row.className = 'basket-item'; const text = document.createElement('p'); text.textContent = requestMessage(request); text.style.whiteSpace = 'pre-line'; const remove = document.createElement('button'); remove.className = 'remove-item'; remove.textContent = t('remove'); remove.addEventListener('click', () => { basket.splice(index, 1); renderBasket(); }); row.append(text, remove); $('#basket-items').append(row); });
  $('#basket-whatsapp').disabled = basket.length === 0;
}
function validFile() {
  const file = $('#design-file').files[0];
  if (!file || !/\.(png|jpe?g|svg|pdf)$/i.test(file.name) || file.size > 10 * 1024 * 1024) { notify(t('fileError')); $('#design-file').focus(); return false; } return true;
}
function setLanguage(value) {
  lang = value; document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll('[data-label]').forEach(el => el.setAttribute('aria-label', t(el.dataset.label)));
  document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
  $('#design-note').placeholder = t('notePlaceholder'); $('#custom-text').placeholder = t('textPlaceholder');
  $('#product-selector').setAttribute('aria-label', t('messageProduct'));
  $('.hero-art').setAttribute('aria-label', t('concept'));
  document.querySelector('meta[name=description]').content = t('heroText');
  $('#form-status').textContent = ''; $('#file-name').textContent = $('#design-file').files[0]?.name || '';
  renderProducts(); renderColors(); updatePreview(); renderBasket();
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
$('#custom-text').addEventListener('input', updatePreview);
$('#text-whatsapp').addEventListener('click', () => { if (validText()) sendWhatsApp(`${t('messageHello')}\n${requestMessage(currentRequest())}\n${t('language')}: ${lang.toUpperCase()}`); });
$('#add-basket').addEventListener('click', () => { if (validText()) { basket.push(currentRequest()); renderBasket(); notify(t('added')); } });
document.querySelectorAll('.basket-trigger').forEach(button => button.addEventListener('click', () => { renderBasket(); $('#basket-dialog').showModal(); }));
$('#close-basket').addEventListener('click', () => $('#basket-dialog').close()); $('#close-notice').addEventListener('click', () => $('#notice-dialog').close());
$('#basket-whatsapp').addEventListener('click', () => { if (basket.length) sendWhatsApp(`${t('messageHello')}\n\n${basket.map((request, index) => `${t('request')} ${index + 1}\n${requestMessage(request)}`).join('\n\n')}\n${t('language')}: ${lang.toUpperCase()}`); });
$('#design-file').addEventListener('change', () => { $('#file-name').textContent = $('#design-file').files[0]?.name || ''; $('#form-status').textContent = ''; if ($('#design-file').files.length) validFile(); });
$('#design-form').addEventListener('submit', event => { event.preventDefault(); if (validFile()) $('#form-status').textContent = t('formPrepared'); });
$('#design-whatsapp').addEventListener('click', () => { if (validFile()) sendWhatsApp(`${t('messageHello')}\n${t('messageFile')}: ${$('#design-file').files[0].name}\n${t('messageNote')}: ${$('#design-note').value.trim()}\n${t('attach')}\n${t('language')}: ${lang.toUpperCase()}`); });
document.querySelectorAll('.contact-whatsapp').forEach(button => button.addEventListener('click', () => sendWhatsApp(`${t('generalMessage')}\n${t('language')}: ${lang.toUpperCase()}`)));
document.querySelectorAll('.instagram-link').forEach(button => button.addEventListener('click', () => { if (!/^https:\/\/(www\.)?instagram\.com\//.test(INSTAGRAM_URL)) { notice(t('instagramMissing')); return; } window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer'); }));
$('#menu-toggle').addEventListener('click', () => setMobileMenuOpen($('#mobile-menu').hidden));
$('#mobile-menu').addEventListener('click', event => { if (event.target.closest('a')) setMobileMenuOpen(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMobileMenuOpen(false); });
Object.assign(translations.tr, { home:'Ana sayfa', stagePersonal:'İsme özel', mobileHeadline:'Her dikiş, size özel.', mobileSubtitle:'Hazır ürünler ya da adınıza özel nakış.', stageNote:'Animasyon alanı · konsept önizleme', occasionTitle:'Hangi vesile için?', occasionNote:'Özel anlar, daha anlamlı ♡', occasionLabel:'Vesile', wedding:'Düğün', baptism:'Vaftiz', newyear:'Yılbaşı', baby:'Bebek', gift:'Hediye', popularCategories:'Popüler kategoriler', seeAll:'Tümünü gör', threeSteps:'Kişiselleştirme 3 adımda', chooseProduct:'Ürünü seç', chooseProductHint:'Beğendiğin modeli bul', writeName:'İsmi yaz', writeNameHint:'Nasıl nakışlansın?', sendStep:'WhatsApp’tan gönder', sendStepHint:'Bizi bilgilendir' });
Object.assign(translations.en, { home:'Home', stagePersonal:'Made for you', mobileHeadline:'Every stitch, made for you.', mobileSubtitle:'Ready-made pieces or embroidery with your name.', stageNote:'Animation stage · concept preview', occasionTitle:'What’s the occasion?', occasionNote:'Little details, meaningful moments ♡', occasionLabel:'Occasion', wedding:'Wedding', baptism:'Baptism', newyear:'New Year', baby:'Baby', gift:'Gift', popularCategories:'Popular categories', seeAll:'View all', threeSteps:'Personalize in 3 steps', chooseProduct:'Choose a product', chooseProductHint:'Find your favorite piece', writeName:'Write the name', writeNameHint:'Make it your own', sendStep:'Send via WhatsApp', sendStepHint:'Tell us your idea' });
$('#year').textContent = new Date().getFullYear(); setLanguage('tr');

// Hero rotation is independent of catalog selection and personalization state.
const heroShowcase = document.querySelector('.hero-showcase');
const heroCards = [...document.querySelectorAll('[data-showcase-product]')];
const heroMotionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const heroDesktopQuery = matchMedia('(min-width:801px)');
let heroIndex = 0;
let heroPaused = false;
let heroTimer;
function renderHeroShowcase() {
  heroCards.forEach((card, index) => {
    const offset = (index - heroIndex + heroCards.length) % heroCards.length;
    const role = ['is-active', 'is-next', 'is-hidden', 'is-previous'][offset];
    card.classList.remove('is-active', 'is-next', 'is-hidden', 'is-previous');
    card.classList.add(role);
    card.setAttribute('aria-hidden', String(offset !== 0));
    const product = products.find(item => item.id === card.dataset.showcaseProduct);
    card.querySelector('.showcase-name').textContent = product[lang];
  });
  document.querySelector('.showcase-position').textContent = `${String(heroIndex + 1).padStart(2, '0')} / 04`;
  const control = document.querySelector('.showcase-pause');
  control.textContent = lang === 'tr' ? (heroPaused ? 'Devam et' : 'Duraklat') : (heroPaused ? 'Resume' : 'Pause');
  control.setAttribute('aria-pressed', String(heroPaused));
  heroShowcase.classList.toggle('is-paused', heroPaused || document.hidden);
}
function scheduleHeroRotation() {
  clearInterval(heroTimer);
  if (!heroPaused && !heroMotionPreference.matches && !document.hidden && heroDesktopQuery.matches) {
    heroTimer = setInterval(() => { heroIndex = (heroIndex + 1) % heroCards.length; renderHeroShowcase(); }, 3000);
  }
}
document.querySelector('.showcase-pause').addEventListener('click', () => {
  heroPaused = !heroPaused;
  renderHeroShowcase();
  scheduleHeroRotation();
});
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', renderHeroShowcase));
heroMotionPreference.addEventListener('change', scheduleHeroRotation);
heroDesktopQuery.addEventListener('change', scheduleHeroRotation);
document.addEventListener('visibilitychange', () => { renderHeroShowcase(); scheduleHeroRotation(); });
renderHeroShowcase();
scheduleHeroRotation();

// Header-only scroll, contextual CTA and basket feedback.
const siteHeader = document.querySelector('.header');
const headerMobileQuery = matchMedia('(max-width: 800px)');
const headerReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const headerCta = siteHeader.querySelector('.header-cta');
let headerLastScrollY = Math.max(0, window.scrollY);
let headerScrollFrame;
function revealHeader() {
  siteHeader.classList.remove('is-hidden');
  siteHeader.inert = false;
}
function updateHeaderScroll() {
  const y = Math.max(0, window.scrollY);
  if (headerMobileQuery.matches) { revealHeader(); headerLastScrollY = y; headerScrollFrame = undefined; return; }
  const compact = siteHeader.classList.contains('is-scrolled');
  siteHeader.classList.toggle('is-scrolled', compact ? y > 20 : y > 80);
  const delta = y - headerLastScrollY;
  const menuOpen = document.querySelector('#menu-toggle').getAttribute('aria-expanded') === 'true';
  if (!headerMobileQuery.matches || y < 100 || menuOpen || siteHeader.contains(document.activeElement)) {
    revealHeader();
  } else if (Math.abs(delta) >= 6) {
    const hide = delta > 0;
    siteHeader.classList.toggle('is-hidden', hide);
    siteHeader.inert = hide;
  }
  if (Math.abs(delta) >= 6 || y < 100) headerLastScrollY = y;
  headerScrollFrame = undefined;
}
window.addEventListener('scroll', () => {
  if (headerScrollFrame === undefined) headerScrollFrame = requestAnimationFrame(updateHeaderScroll);
}, { passive: true });
headerMobileQuery.addEventListener('change', () => { revealHeader(); headerLastScrollY = window.scrollY; updateHeaderScroll(); });
document.addEventListener('keydown', event => { if (event.key === 'Tab' || event.key === 'Escape') revealHeader(); });
siteHeader.addEventListener('focusin', revealHeader);
document.querySelector('#menu-toggle').addEventListener('click', revealHeader);
function updateHeaderLanguage() {
  headerCta.textContent = lang === 'tr' ? 'Kişiselleştir' : 'Personalize';
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', updateHeaderLanguage));
const heroActionObserver = new IntersectionObserver(entries => {
  const entry = entries[0];
  const pastHeroActions = !entry.isIntersecting && entry.boundingClientRect.bottom <= 64;
  siteHeader.classList.toggle('has-context-cta', pastHeroActions);
  headerCta.hidden = !pastHeroActions;
}, { rootMargin: '-64px 0px 0px 0px', threshold: 0 });
heroActionObserver.observe(document.querySelector('.hero-copy .actions'));
const headerMenuLinks = [...siteHeader.querySelectorAll('.desktop-nav a, #mobile-menu a')];
function updateHeaderActiveLink() {
  headerMenuLinks.forEach(link => {
    if (link.hash === window.location.hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateHeaderActiveLink);
let headerBasketCount = basket.length;
const headerBadge = siteHeader.querySelector('.basket-count');
new MutationObserver(() => {
  const count = Number(headerBadge.textContent);
  if (count > headerBasketCount && !headerReducedMotion.matches) {
    headerBadge.classList.remove('is-bouncing');
    void headerBadge.offsetWidth;
    headerBadge.classList.add('is-bouncing');
  }
  headerBasketCount = count;
}).observe(headerBadge, { childList: true, characterData: true, subtree: true });
headerBadge.addEventListener('animationend', () => headerBadge.classList.remove('is-bouncing'));
updateHeaderLanguage();
updateHeaderActiveLink();
updateHeaderScroll();


// Occasion links prepare catalog context; the homepage has no selected occasion.
let selectedOccasion = '';
const catalogOccasions = new Map([
  ['wedding', 'wedding'], ['baptism', 'baptism'], ['new-year', 'newyear'],
  ['baby', 'baby'], ['gift', 'gift']
]);
function syncCatalogOccasion() {
  selectedOccasion = catalogOccasions.get(new URLSearchParams(location.search).get('occasion')) || '';
}
function updateMobileMenuLabel() {
  const open = !document.querySelector('#mobile-menu').hidden;
  const label = open ? (lang === 'tr' ? 'Kapat' : 'Close') : (lang === 'tr' ? 'Menü' : 'Menu');
  document.querySelector('.menu-word').textContent = label;
  document.querySelector('.menu-symbol').textContent = open ? '×' : '☰';
  document.querySelector('#menu-toggle').setAttribute('aria-label', label);
}
function setMobileMenuOpen(open) {
  const panel = document.querySelector('#mobile-menu');
  panel.hidden = !open;
  document.querySelector('#menu-toggle').setAttribute('aria-expanded', String(open));
  const modal = open && headerMobileQuery.matches;
  document.body.classList.toggle('mobile-menu-open', modal);
  document.querySelectorAll('main, .footer, .bottom-nav').forEach(element => element.inert = modal);
  updateMobileMenuLabel();
  if (open) panel.querySelector('a').focus();
  else document.querySelector('#menu-toggle').focus({ preventScroll: true });
}
headerMobileQuery.addEventListener('change', () => setMobileMenuOpen(false));
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', updateMobileMenuLabel));
document.addEventListener('keydown', event => {
  if (event.key !== 'Tab' || !headerMobileQuery.matches || document.querySelector('#mobile-menu').hidden || document.querySelector('dialog[open]')) return;
  const focusable = [...siteHeader.querySelectorAll('a[href], button')].filter(element => element.getClientRects().length && !element.disabled);
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
document.querySelectorAll('.occasion-chips a').forEach(link => link.addEventListener('click', event => {
  if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (link.href !== location.href) history.pushState(null, '', link.href);
  syncCatalogOccasion();
  updateHeaderActiveLink();
  updateBottomNavigation();
  document.querySelector('#catalog').scrollIntoView({ behavior: headerReducedMotion.matches ? 'instant' : 'smooth' });
}));
window.addEventListener('popstate', () => {
  syncCatalogOccasion();
  updateHeaderActiveLink();
  updateBottomNavigation();
  if (location.hash === '#catalog') document.querySelector('#catalog').scrollIntoView({ behavior: headerReducedMotion.matches ? 'instant' : 'smooth' });
});
syncCatalogOccasion();
function updateBottomNavigation() {
  const target = location.hash || '#catalog';
  document.querySelectorAll('.bottom-nav a').forEach(link => {
    if (link.hash === target) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateBottomNavigation);
updateMobileMenuLabel();
updateBottomNavigation();
function formatMobileHeadline() {
  const headline = document.querySelector('[data-i18n="mobileHeadline"]');
  const parts = t('mobileHeadline').split(', ');
  headline.replaceChildren(document.createTextNode(`${parts[0]},`), document.createElement('br'), document.createTextNode(parts.slice(1).join(', ')));
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', formatMobileHeadline));
formatMobileHeadline();
