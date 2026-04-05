# Pasaport Kontrolu API

Bu proje, "Pasaport Kontrolu (Authentication)" senaryosu icin hazirlanmis basit bir GitHub proje ornegidir.

## Proje Amaci
Bu uygulamada bir API'ye giris yapmadan korumali verilere erisilmemesi hedeflenmistir.
Mantik su: Kullanici once giris yapar, sistem JWT token uretir, sonra korumali endpoint'lere sadece bu token ile girilir.

## Kullanilan Yapilar
- Node.js
- Express
- JWT (jsonwebtoken)
- Authentication middleware
- Rate limit
- Helmet

## Proje Yapisi
- `src/server.js` -> ana sunucu dosyasi
- `middleware/auth.js` -> token kontrol middleware'i
- `routes/authRoutes.js` -> login islemi
- `routes/protectedRoutes.js` -> korumali endpoint'ler

## Nasil Calistirilir
```bash
npm install
cp .env.example .env
npm start
```

## Demo Giris Bilgileri
```json
{
  "username": "omer",
  "password": "123456"
}
```

## Ornek Istekler
### 1) Login
`POST /api/auth/login`

Body:
```json
{
  "username": "omer",
  "password": "123456"
}
```

### 2) Korumali profile endpoint'i
`GET /api/user/profile`

Header:
```text
Authorization: Bearer TOKEN_BURAYA
```

## Guvenlik Mantigi
- Token olmadan korumali endpoint'e girilemez.
- Gecersiz token ile erisim reddedilir.
- Rate limit ile cok fazla istek engellenir.
- Helmet ile temel HTTP header guvenligi eklenir.

## Ozet
Bu proje ile API'lerde authentication mantiginin neden gerekli oldugu basit ve anlasilir sekilde gosterilmistir.
