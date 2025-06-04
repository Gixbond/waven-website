# Waven Website

Dies ist die aktuelle Version der Waven Website mit integrierter Google Maps-Karte.

## Wichtige Dateien

- `index.html` - Die aktuelle Hauptdatei
- `backup.sh` - Script zum Erstellen von Backups
- `backups/` - Verzeichnis mit gespeicherten Versionen

## Backup-System

Das Backup-System speichert automatisch Versionen der Website mit Zeitstempel.

### Backup erstellen
```bash
./backup.sh
```

### Zurück zu einer früheren Version
```bash
cp backups/index_YYYYMMDD_HHMMSS.html index.html
```

## Entwicklung

- Arbeiten Sie mit `index.html` als Hauptdatei
- Erstellen Sie vor wichtigen Änderungen immer ein Backup
- Die Backups werden im `backups/` Verzeichnis mit Zeitstempel gespeichert

## Lokale Vorschau

Um die Website lokal zu testen:
```bash
python3 -m http.server 8000
```
Öffnen Sie dann http://localhost:8000/index.html in Ihrem Browser.
