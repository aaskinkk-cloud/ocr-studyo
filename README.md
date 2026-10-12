# OCR Stüdyo

Taranmış belge ve fotoğraftaki yazıyı metne çevirir (Türkçe OCR) — telefonda, dosyalar cihazdan çıkmaz.

**Uygulamayı aç:** https://aaskinkk-cloud.github.io/ocr-studyo/

Milli Emlak uygulamasının **OCR Stüdyo** modülü de buradan gelir: Milli Emlak açılışta bu sayfanın sürümünü (`sw.js`) okur, değişmişse yeni sürümü kendiliğinden indirir. Drive'a modül yüklemek gerekmez.

## Kurulum

Chrome'da adresi aç → menü → **Ana ekrana ekle**. İnternetsiz de çalışır.

## Gizlilik

Dosyalar yalnız cihazında işlenir; hiçbir sunucuya gönderilmez.

## Dosyalar

| Dosya | Açıklama |
|---|---|
| `index.html` | Uygulamanın tamamı (tek dosya) |
| `sw.js` | Çevrimdışı önbellek ve sürüm (`V=P+'…'` — Milli Emlak buradan okur) |
| `manifest.webmanifest`, `icon.svg` | Ana ekran simgesi ve uygulama bilgileri |

## Sürüm

**1.0** — GitHub'a taşındı (Milli Emlak 124 ile birlikte).
