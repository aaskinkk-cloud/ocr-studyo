# OCR Stüdyo

## 1.14 (22.10.2026) — Sessiz ekran
- **Tam ekran uyarısı:** Ana ekrandan açılan (kurulu, tam ekran) uygulamada içeriden tam ekran isteği gönderilmez → Chrome'un "Tam ekrandan çıkmak için yukarıdan sürükleyip…" uyarısı çıkmaz. Chrome sekmesinde tam ekrana her girişte bu uyarıyı tarayıcı kendisi gösterir; sayfa kapatamaz.
- **Kelimeye dokununca Google paneli:** Chrome'un "Dokunarak ara" paneli açılmasın diye sayfa (ve içindeki çerçeveler) dokunuşu kendisi karşılar. Uzun basıp seçme çalışır.
- Blok `/* SESSİZ EKRAN */` adıyla `index.html`'in başındadır; tüm uygulamalarda aynıdır.

Taranmış belge ve fotoğraftaki yazıyı metne çevirir (Türkçe OCR) — telefonda, dosyalar cihazdan çıkmaz.

**Uygulamayı aç:** https://aaskinkk-cloud.github.io/ocr-studyo/

Milli Emlak uygulamasının **OCR Stüdyo** modülü de buradan gelir: Milli Emlak açılışta bu sayfanın sürümünü (`sw.js`) okur, değişmişse yeni sürümü kendiliğinden indirir. Drive'a modül yüklemek gerekmez.

## Klasör İşleri (1.1)

Üst çubuktaki **📂 Klasör İşleri** düğmesi:

- **Toplu isimlendirme:** Klasördeki PDF'lerin ilk sayfasından *Adı Soyadı* ve *T.C. Kimlik No* okunur (TC doğrulamalı), dosyalar "Ad Soyad - TC" biçiminde yeniden adlandırılır (İsim+TC / yalnız isim / yalnız TC).
- **Ön izleme:** Klasör seçilince PDF listesi çıkar; ada tıklayınca işlemeden önce sayfalar görülür, istenmeyen dosyanın işareti kaldırılır (işlenmez).
- **Klasör Gözat:** PDF'leri tek tek gör, adı/TC'yi dosya adında ve istenirse belgenin içinde ara, bilgileri düzelt, alan seçip yalnız o bölgeyi oku, kaydet / geri al, incelendi işareti, tekrarlayan TC süzgeci, listeyi Excel'e aktar.
- **Cevabi yazı + tutanak:** Gelen yazının tarih, sayı ve kurumunu okuyup cevabi yazı ve tutanak taslağı hazırlar. A4 kâğıt görünümünde, sekmeli (Cevabi yazı / Tutanak); tutanak A4'e 2 adet basılır, tam ortada kesik çizgi; imza adları/unvanları düzenlenir, hatırlanır; tarih son cümlenin sonuna aynı satıra eklenir.
- **Tablolar:** Sayfadaki tabloları bulur; Excel / Word / panoya aktarır.
- **Ek alanlar:** İstediğin başlıkları yaz (ör. *Yüzölçümü, Ada / Parsel, Mahalle*); her belgede o başlığın değeri bulunur, sonuç tablosunda sütun olur, Excel'e aktarılır, istersen dosya adına eklenir. Başlıklar hatırlanır.

OCR, OCR Stüdyo'nun kendi okuma hattıyla yapılır (internet gerekmez). Klasörde yeniden adlandırma için Chrome/Edge'de **bilgisayardan** aç (telefon tarayıcıları klasöre yazma izni vermez).

## Ortak OCR motoru (`motor/`)

`motor/` klasörü OCR Stüdyo'nun gömülü tanıma motorunun ayrı dosyalarıdır (tesseract, çekirdek, Türkçe model). **Okur** taranmış kitapları bu dosyalarla okur; böylece iki uygulama aynı motoru kullanır. OCR Stüdyo kendi kopyasını `index.html` içinde taşımaya devam eder (internetsiz çalışması için). Motor güncellenirse bu klasör de aynı dosyalarla yenilenmeli.

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

**1.13** — Cevabi yazı ve tutanakta kurum adları resmî yazışma kuralına göre yazılır: tamamı büyük harfle okunan kelimelerin yalnız baş harfi büyük kalır ("ÇAYBAŞI KAYMAKAMLIĞI Milli Emlak Şefliği" → "Çaybaşı Kaymakamlığı Milli Emlak Şefliği"); T.C., A.Ş., DSİ, TEDAŞ gibi kısaltmalar korunur, "ve" küçük yazılır. Metin düzenleme belirginleşti: **✎ Düzenle** düğmesi, kâğıt üzerinde düzenleme çerçevesi, tutanağın alt nüshasına tıklayınca üst nüsha düzenlenir, uzun tutanak kaydırılabilir; **↺ Yeniden oluştur** elle yapılan düzeltmeleri silip metni belgeden tekrar üretir.  
1.12 — Tutanak 2. imzacısı Milli Emlak parametrelerinden (Komisyon Üye 1 / Üye 2 ve unvanları) otomatik gelir, ikisinden biri seçilir. "İçerikte de ara" varsayılan açık; tarama 3 kat paralel, ilerleme liste başlığında.  
1.11 — Klasör Gözat'ta **İçerikte de ara**: ad dosya adında olmasa da PDF'in içinde geçiyorsa bulunur (tarayıcı OCR katmanı dahil, 1-2 harf OCR hatasına toleranslı, Türkçe karakter/boşluk duyarsız); okunan metin cihazda saklanır; metni olmayan PDF'ler istenirse OCR'lanır. Ön izleme penceresinin Kapat düğmesi düzeldi. Tutanakta 2. imzacı komisyon üyelerinden seçilir (Hasan AKÇAY / Halil AİŞEOĞLU).  
1.10 — Cevap/tutanak sayfasındaki Yazdır düğmesi çalışıyor (açılır pencere engellenirse sayfa içinden yazdırır); tutanakta imzalar 2 satır yukarıda (tarihle imza arası daraldı).  
1.9 — Tutanak başlığı ortalı, büyük (16 pt) ve kalın; ekranda ve çıktıda. Kopyalanınca metnin başına eklenir.  
1.8 — Tutanakta tarih son cümlenin sonunda, noktadan sonra bir boşlukla aynı satırda (…imza altına alınmıştır. 19.01.2026); ekranda ve çıktıda.  
1.7 — Cevabi yazı + tutanak sayfası yenilendi: A4 kâğıt, sekmeler, tutanak A4'e 2 adet (ortada kesik çizgi), imza alanı.  
1.6 — Bilgisayarda oluşturulmuş PDF'lerin metni □□ / bozuk görünmüyor (yazı tipi sorunu giderildi; bu belgelerin OCR'ı da düzeldi); klasör seçilince dosya listesi + ön izleme + işleme dahil/hariç.  
1.5 — Klasör İşleri OCR Stüdyo tasarımında (sade kartlar, aynı renkler, koyu tema); ek alanlar; sonuçları Excel'e aktarma; Klasör Gözat'ta dosya açılınca otomatik okuma.  
1.4 — Taranmış PDF'lerde tarayıcının (ör. Canon MF Toolbox) gömdüğü görünmez, hatalı OCR katmanı kullanılmaz; sayfa OCR Stüdyo motoruyla okunur. Dijital PDF'lerin metni aynen kullanılır.  
1.3 — Klasör İşleri sayfaları OCR Stüdyo'nun kendi okuma hattıyla okur (görüntü iyileştirme + gömülü Türkçe model + sözlüklü düzeltme): ana ekranda çıkan metnin aynısı. Ad/TC bulunamazsa ikinci geçiş ve eski okuma da denenir.  
1.2 — Klasör İşleri: ad sanılan cümle parçaları ("tapu kütüklerinin", "hanesinde belirtilen" vb.) elenir; emin olunamayan ad boş kalır, dosya yanlış adla adlandırılmaz.  
1.1 — Klasör İşleri eklendi (PDF toplu isimlendirme, Klasör Gözat, cevabi yazı + tutanak, tablo tarama).  
1.0 — GitHub'a taşındı (Milli Emlak 124 ile birlikte).


## milliemlak/ klasörü

Milli Emlak uygulamasının telefondan güncelleme paketi (şifreli). OCR Stüdyo ile ilgisi yoktur; ayrıntı `milliemlak/OKUBENI.md`.

## me/ — Milli Emlak tam ekran açılış sayfası (20.10.2026)

`https://aaskinkk-cloud.github.io/ocr-studyo/me/` — Milli Emlak (Apps Script) uygulamasını Google'ın uyarı bandı ve
tarayıcı çubuğu olmadan, ana ekrandan tam ekran açar. **Veri içermez**; uygulama adresi yalnız telefonun tarayıcısında
(localStorage) saklanır, depoya yazılmaz. Kendi `sw.js`'i yalnız `me/` klasörünü kapsar, önbellek tutmaz.
