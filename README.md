# 🛡️ OpenAuth - NodeJS Auth System

Ein modulares, sicheres und leicht anpassbares Login- & Registrierungssystem. Entwickelt mit Fokus auf Best-Practices für modernes Web-Engineering.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

- **Sicheres Hashing**: Passwörter werden mit `bcryptjs` (Salt-Rounds: 10) verschlüsselt.
- **Stateless Auth**: Verwendet JSON Web Tokens (JWT) für die Sitzungsverwaltung.
- **Modernes Backend**: Basiert auf Express.js und Mongoose (MongoDB).
- **Frontend Ready**: Enthält ein sauberes HTML/JS Interface für Login, Register und ein geschütztes Dashboard.
- **Environment Driven**: Vollständige Trennung von Code und Konfiguration via `.env`.

---

## 🛠️ Installation & Setup

Befolge diese Schritte, um das System auf deinem lokalen Rechner zu starten:

### 1. Repository klonen
```bash
git clone [https://github.com/xavoyx/simple-auth-system](https://github.com/xavoyx/simple-auth-system)
cd simple-auth-system
```

## 📊 Abhängigkeiten installieren
```
npm install
```


## 🦺 Konfiguration (Wichtig!)

Erstelle eine Datei namens .env im Hauptverzeichnis (nutze .env.example als Vorlage) und fülle deine Daten aus:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=dein_super_geheimes_passwort
```

## 💬 Server starten
```# Für die Entwicklung
node index.js
```
Öffne nun http://localhost:3000 in deinem Browser.

## 🧑‍📂 Projektstruktur
```
├── middleware/       # Schutz-Logik (JWT Prüfung)
├── models/           # Datenbank-Schemen (MongoDB)
├── public/           # Frontend (HTML, CSS, JS)
├── routes/           # API-Endpunkte für Auth
├── .env.example      # Vorlage für Umgebungsvariablen
├── .gitignore        # Schließt sensible Daten von Git aus
├── index.js          # Haupteinstiegspunkt der App
└── LICENSE           # MIT Lizenz
```

## 🔒 API Endpunkte
```Methode	Pfad	Beschreibung
  POST	/api/auth/register	Erstellt einen neuen Benutzer
  POST	/api/auth/login	Authentifiziert User & gibt JWT zurück
  ```

## 🤝 Mitwirken (Contributing)
Dies ist ein Open-Source-Projekt! Wenn du Verbesserungen hast (z.B. Passwort-Vergessen-Funktion oder E-Mail-Validierung), erstelle einfach einen Pull Request.

#### 1. Fork das Projekt

#### 2. Erstelle einen Feature Branch (git checkout -b feature/NeuesFeature)

#### 3. Commit deine Änderungen (git commit -m 'Add some feature')

#### 4. Push zum Branch (git push origin feature/NeuesFeature)

#### 5. Erstelle einen Pull Request

## ⚖️ Lizenz


Veröffentlicht unter der MIT **[Lizenz](https://github.com/xavoyx/simple-auth-system?tab=MIT-1-ov-file)**. Siehe LICENSE für Details.

