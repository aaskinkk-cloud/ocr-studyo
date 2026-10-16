# milliemlak/ — Milli Emlak uygulaması güncelleme paketi

Bu klasör OCR Stüdyo'nun parçası değildir. Milli Emlak (Taşınmaz Yönetim Sistemi) uygulamasının
**Diğer › Uygulamayı Güncelle** düğmesi yeni sürümü buradan indirir.

- `milliemlak.bin` — uygulamanın **şifreli** (AES-256-GCM) ve sıkıştırılmış hâli. Anahtar yalnız
  uygulamanın kendisinde (özel depo) durur; bu dosya tek başına okunamaz.
- `surum.json` — en son sürüm numarası.

Silmeyin: silinirse telefondan güncelleme çalışmaz (uygulama kurulu sürümle açılmaya devam eder).
