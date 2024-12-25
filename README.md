# ✨ HA_homedashboard ✨ 
Homedashboard Cards and Layout Code for Home Assistant

Hier möchte ich euch mein Dashboard vorstellen und im Detail für euch bereitstellen. Inzwischen ist die Struktur sehr gewachsen, wechselhalb so eine Übersicht auch für mich gut ist, um den Überblick zu behalten.
Das Dashboard ist für die Tabletansicht angepasst. Es sollte nach Möglichkeit nicht gescrollt werden müssen, aber an manchen Stellen lässt es sich einfach nicht vermeiden. Zudem werden die größeren Cards auch dem Handy im Layout gebrochen und daher ebenfalls ganz gut dargestellt.

![Screenshot 2024-12-14 023409](https://github.com/user-attachments/assets/499c5656-9474-4ca0-a2da-a24616f3e1ec)

## 📂 Ordnerstruktur
Übersichtlich strukturiert, so dass du die gewünschten Elemente einfach kopieren kannst. Es sind alle YAML-Dateien pro Karte aufgeführt und den entsprechenden Seiten oder Unterseiten zugeordnet. 
Schaut am besten den jeweiligen Screenshot der Seite an und ihr könnte schnell die enstprechende Card zuordnen bzw. in der Ordnerstruktur finden.

## 📖 Features

Topmenü verstecken auf Tablet und Handy

....coming soon

## 📥 Installation
1. Wähle die YAML-Code aus einer Vorlage aus den Ordnern aus und kopiere den Code.
2. Gehe zu deinem Dashboard und füge den kopierten Inhalt in eine neue Card oder direkt in eine neue Seite ein.
3. Passe die Entitäten an deine an. Ersetze dazu IDs und Sensoren durch die aus deinem Setup.
4. Schaue das Ergebnis an. 

## 💬 Topmenü Hack

Um das Topmenü auszublenden nutze ich den Kiosk Mode von HACS.
Einfach über HACS installieren und im Anschluss folgenden Code im Raw-Konfigurationseditor an erster Stelle einfügen.
Erreichbar ist der Editor über die drei Punkte oben rechts, wenn man im Bearbeitungsmodus für das Dashboard ist.

```bash
  kiosk_mode:
    mobile_settings:
      hide_header: true
      ignore_entity_settings: true
      custom_width: 1280
```


## 👩‍💻 Sourcecode Yaml

<div align="left">
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
</div>

<div align="center">
  <img src="https://profile-counter.glitch.me/jayjojayson/count.svg?"  />
</div>
