# ✨ HA_homedashboard ✨ 
Homedashboard Cards and Layout Code for Home Assistant

Hier möchte ich euch mein Dashboard vorstellen und im Detail für euch bereitstellen. Inzwischen ist die Struktur sehr gewachsen, wechselhalb so eine Übersicht auch für mich gut ist, um den Überblick zu behalten.
Das Dashboard ist für die Tabletansicht angepasst. Es sollte nach Möglichkeit nicht gescrollt werden müssen, aber an manchen Stellen lässt es sich einfach nicht vermeiden. Zudem werden die größeren Cards auch dem Handy im Layout gebrochen und daher ebenfalls ganz gut dargestellt.

![Screenshot 2024-12-14 023409](https://github.com/user-attachments/assets/499c5656-9474-4ca0-a2da-a24616f3e1ec)

## 📂 Ordnerstruktur
Alles übersichtlich strukturiert, so dass ihr die gewünschten Elemente einfach kopieren könnt. Es sind alle YAML-Dateien pro Karte aufgeführt und den entsprechenden Seiten oder Unterseiten zugeordnet. 
Schaut am besten den jeweiligen Screenshot der Seite an und ihr könnt schnell die enstprechende Card zuordnen bzw. in der Ordnerstruktur finden.

## 📖 Features

- Topmenü verstecken auf Tablet und Handy (optional)
- Startseite mit popups für Heizung, Wetter, Kamera und Strom
- Startseite mit dynamischen Inhalten für (Müll, Fenster, Licht, Pakete)
- Hauptseiten für Heizung, Licht, Garten, Wetter und Strom plus Startseite
- Unterseiten für Einstellungen, Roboter, Sicherheit und Multimedia
- ausführliche Wettercard (dwd wetterdienst vorausgesetzt)
- ausführliche Stromübersicht mit aktuellen Verbrauchswerten für Geräte und Gesamt (Watt/kWh) mit History
- Solarinput ebenfalls mit in Stromübersichtkarte aufgenommen
- angepasst für Lenovo M10 3.Gen (aber auch andere Tablets mit 10 oder 11")
- großteils Handy kompatibel (getestet mit s24)
- viele tabbed und popups cards

...coming soon

## ✔️ Voraussetzungen

Folgende Cards müssen über HACS installiert sein, dass im Anschluss euer kopierter Code funktioniert.
Welche HACS card ihr letztendlich benötigt, seht ihr auch in meinen jeweils erstellten Cards.

für alle Seiten notwendig
- mushroom
- card-mod
- stack in card
- tabbed card
- bubble card
- mini graph card
- layout card

für Staubsauger und Müll Card notwendig
- dreame vacuum map card
- trash card
- ics calendar

für Wetter Card notwendig
- deutscher wetterdienst

für Stromübersicht Card notwendig
- power flow card plus
- sankey chart card
- energy overview card

(optional - Topmenu verstecken)
- kiosk mode

(optional - Swipen für vor und zurück auf Tablet oder Handy)
- home assistant swipe navigation

## 📥 Installation
1. Wähle den YAML-Code aus einer Vorlage aus den Ordnern aus und kopiere den Code.
2. Gehe zu deinem Dashboard und füge den kopierten Code in eine neue Card oder direkt in eine neue Seite ein.
3. Passe die Entitäten an deine an, ersetze dazu IDs und Sensoren durch die aus deinem Setup.
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

#### ` Note: Danke an die Entwickler der Cards aus meinen Voraussetzungen.`
#### ` Dadurch wird das Dahsboard zu dem, was es ist. 🤗` 
<div align="right">
  <img src="https://profile-counter.glitch.me/jayjojayson/count.svg?"  />
</div>
