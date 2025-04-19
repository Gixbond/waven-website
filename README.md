# WAVEN - Luxury Villa Lombok

## Projektstatus
- Aktuelle Version: V4 (stabil)
- Website läuft erfolgreich auf Port 8000
- Erreichbar von localhost (::1) und Geräten im Netzwerk (192.168.1.219)
- Alle Bilder und CSS-Dateien werden korrekt geladen

## GitHub Repository
- URL: https://github.com/Gixbond/waven-website
- GitHub Pages URL (wenn aktiviert): https://gixbond.github.io/waven-website/

## Wichtige Dateien
- `index.html` - Hauptdatei
- `index-stable-v4.html` - Backup der stabilen V4-Version
- Bilder im `/images/` Verzeichnis:
  - waven-logo.svg
  - hero.jpg
  - vision.jpg
  - luxus.jpg
- CSS-Dateien:
  - styles.css
  - desktop.css
  - mobile.css

## Bekannte Probleme
- Animationen funktionieren nur bei initialem Laden
- Text kann bei bestimmten Animationen verschwinden
- V4 ist die stabilste Version

## Lokale Entwicklung
- Python-Server läuft auf Port 8000
- Erreichbar unter: http://localhost:8000/
- Netzwerk-Zugriff unter: http://192.168.1.219:8000/

## Server-Logs
Die Website wird regelmäßig von folgenden IPs aufgerufen:
- localhost (::1)
- 192.168.1.219 (Netzwerkgerät)

## Technische Details
- Verwendete Technologien:
  - HTML5
  - CSS3
  - JavaScript
  - GSAP für Animationen
  - Python HTTP Server für lokale Entwicklung

## Wichtige Hinweise
- Die V4-Version ist die stabilste Version und sollte als Basis für zukünftige Entwicklungen verwendet werden
- Alle Änderungen sollten zuerst lokal getestet werden
- Vor größeren Änderungen immer ein Backup der aktuellen Version erstellen
