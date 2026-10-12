# OCR Stüdyo

Taranmış belge ve fotoğraftaki yazıyı metne çevirir (Türkçe OCR) — telefonda, dosyalar cihazdan çıkmaz.

**Uygulamayı aç:** https://aaskinkk-cloud.github.io/ocr-studyo/

Milli Emlak uygulamasının **OCR Stüdyo** modülü de buradan gelir: Milli Emlak açılışta bu sayfanın sürümünü (`sw.js`) okur, değişmişse yeni sürümü kendiliğinden indirir. Drive'a modül yüklemek gerekmez.

## Klasör İşleri (1.1)

Üst çubuktaki **📂 Klasör İşleri** düğmesi:

- **Toplu isimlendirme:** Klasördeki PDF'lerin ilk sayfasından *Adı Soyadı* ve *T.C. Kimlik No* okunur (TC doğrulamalı), dosyalar "Ad Soyad - TC" biçiminde yeniden adlandırılır (İsim+TC / yalnız isim / yalnız TC).
- **Klasör Gözat:** PDF'leri tek tek gör, bilgileri düzelt, alan seçip yalnız o bölgeyi oku, kaydet / geri al, incelendi işareti, tekrarlayan TC süzgeci, listeyi Excel'e aktar.
- **Cevabi yazı + tutanak:** Gelen yazının tarih, sayı ve kurumunu okuyup cevabi yazı ve tutanak taslağı hazırlar.
- **Tablolar:** Sayfadaki tabloları bulur; Excel / Word / panoya aktarır.

OCR, OCR Stüdyo'nun gömülü Türkçe modeliyle yapılır (internet gerekmez). Klasörde yeniden adlandırma için Chrome/Edge'de **bilgisayardan** aç (telefon tarayıcıları klasöre yazma izni vermez).

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

**1.1** — Klasör İşleri eklendi (PDF toplu isimlendirme, Klasör Gözat, cevabi yazı + tutanak, tablo tarama).  
1.0 — GitHub'a taşındı (Milli Emlak 124 ile birlikte).
