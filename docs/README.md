![Home Assistant](https://img.shields.io/badge/home%20assistant-41BDF5?logo=home-assistant&logoColor=white)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/jayjojayson/HA_homedashboard?include_prereleases=&sort=semver&color=blue)](https://github.com/jayjojayson/HA_homedashboard/releases/)
[![README English](https://img.shields.io/badge/README-English-orange)](https://github.com/jayjojayson/HA_homedashboard/blob/main/docs/z-English-ReadMe/readME-Eng.md)
![stars](https://img.shields.io/github/stars/jayjojayson/HA_homedashboard)

# ℹ️ Einführung
Homedashboard Cards and Layout Code for Home Assistant

Hier möchte ich euch mein Dashboard vorstellen und im Detail für euch bereitstellen. Das Dashboard basiert auf dem neuen Kacheldesign in HA. Inzwischen ist die Struktur des Dashboards sehr gewachsen, wechselhalb eine Übersicht auch für mich gut ist, um den Überblick zu behalten.
Das Dashboard ist für die Tabletansicht angepasst. Es sollte nach Möglichkeit nicht gescrollt werden müssen, aber an manchen Stellen lässt es sich einfach nicht vermeiden. Daher wird gerade die Startseite mit vielen dynamischen Einblendungen, PopUp- und Conditional-Cards gestaltet. Zudem werden die größeren Cards auf dem Handy im Layout gebrochen und daher ebenfalls ganz gut dargestellt. Die Entwicklung geht weiter und ich werde hier versuchen den aktullen Stand vom Dashboard zu pflegen. Aktuelle Updates Infos findet ihr in den jeweiligen Releases.

**Wenn euch das Dashboard gefällt, gebt ihm bitte einen Stern ⭐ auf GitHub, danke. 🤗**


<img width="90%" height="auto" alt="HA_homedashboard" src="https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/docs/images/HA_homedashboard_dashboard.png") />

<details>
  <summary> <b>Beispielbild Startseite (aufgeklappt)</b></summary>  
  
  ![image](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/refs/heads/main/1%20Startseite/startseite_ubersicht_opened.jpg)
</details>

<a href="https://www.youtube.com/watch?v=AK_P7a_ynUY">
  <img src="https://github.com/user-attachments/assets/c545ab17-c052-4b84-871a-43b32e56e61d" width="50%">
</a>

**📂 Ordnerstruktur**
Alles übersichtlich strukturiert, so dass ihr die gewünschten Elemente einfach kopieren könnt. Es sind alle YAML-Dateien pro Karte aufgeführt und den entsprechenden Seiten oder Unterseiten zugeordnet. 
Schaut am besten den jeweiligen Screenshot der Seite im Ordner/Unterordner an und ihr könnt schnell die enstprechende Card zuordnen bzw. in der Ordnerstruktur finden. Ihr findet dort auch die yaml der kompletten Seiten.

#
# 📖 Features

- **📣 HA-Topmenü/Header ein-/ausblenden (Button-Action)  [(optional)](https://jayjojayson.github.io/HA_homedashboard/#/Custom_Cards)**
- **📣 particles Background ein-/ausblenden (Button-Action)  [(optional)](https://jayjojayson.github.io/HA_homedashboard/#/Custom_Cards)**
- **📣 sticky Sidebar ein-/ausblenden (Button-Action)  [(optional)](https://jayjojayson.github.io/HA_homedashboard/#/Custom_Cards)**
- **⭐ Startseite mit popups für Heizung, Wetter, Kamera und Strom**
- **⭐ Startseite mit dynamischen Inhalten für (Müll, Fenster, Licht, Multimedia, Pakete, Feiertage)**
- **📣 Zurück-Button (zur Startseite) am unteren Rand fest eingebunden** 
- **⭐ Hauptseiten für Heizung, Licht, Garten, Wetter und Strom plus Startseite**
- **⭐ Unterseiten für Einstellungen, Roboter, 📹 Sicherheit und Multimedia**
- **☔ ausführliche Wettercard (dwd wetterdienst vorausgesetzt)**
- **⚡ ausführliche Stromübersicht - aktuelle Verbrauchswerte für Geräte und Gesamt (Watt/kWh) 📈 History**
- **☀️ Solarinput ebenfalls mit in Stromübersichtkarte & Startseite aufgenommen**
- **💻 angepasst für Lenovo M10 3.Gen Tablet (aber auch andere Tablets mit 10 oder 11")**
- **📱 großteils Handy kompatibel (getestet mit s24)**
- **viele tabbed und popups cards**

...coming soon

#
# ✔️ Voraussetzungen

Folgende Cards müssen über HACS installiert sein, dass im Anschluss euer kopierter Code funktioniert.
Welche HACS card ihr letztendlich benötigt, seht ihr auch in meinen jeweils erstellten Cards.

**für alle Seiten notwendig**
- mushroom
- card-mod
- stack in card
- tabbed card
- bubble card
- mini graph card
- layout card
- auto entities card
- multiple entity row card
  <details>
    <summary> <b>Beispielbild Startseite</b></summary>  
    
	<img width="60%" height="auto" alt="HA_homedashboard" src="https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/1%20Startseite/startseite_ubersicht.jpg") /> 
  </details>

**für Staubsauger und Müll Card notwendig**
- dreame vacuum map card
- trash card
- ics calendar 
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
	<img width="60%" height="auto" alt="HA_homedashboard" src="https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/7%20Unterseiten/2%20Roboter/roboterseite_ubersicht.jpg") />
  </details>

**für Wetter Card notwendig**
- deutscher wetterdienst
- NINA Wetterwarnungen
- compass card (neu für Windrichtung)
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
	<img width="60%" height="auto" alt="HA_homedashboard" src="https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/5%20Wetter/wetterseite_ubersicht.jpg") />
  </details>

**für Stromübersicht Card notwendig**
- power flow card plus
- sankey chart card
- energy overview card
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
	<img width="60%" height="auto" alt="HA_homedashboard" src="https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/6%20Strom/stromseite_ubersicht.jpg") />
  </details>

**für Paketeüberischt Card notwendig**
- 17track Integration

**für Raspi-Status Card notwendig**
- System Monitor Integration
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
	<img width="60%" height="auto" alt="HA_homedashboard" src="https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/7%20Unterseiten/1%20Einstellungen/einstellungenseite_ubersicht.jpg") />
  </details>

(optional - Topmenu verstecken)
- kiosk mode

(optional - Swipen für vor und zurück auf Tablet oder Handy)
- home assistant swipe navigation

**Sensoren**
Es müssen ein paar Sensoren in der configuration.yaml angelegt werden. Das ist notwendig, um Temperatur-, Luft-, und Solarwerte nach Zustand einzufärben.
Ihr findet die Sensoren unter sensoren.yaml. Dort den entsprechenden Sensor herauskopieren, bei euch in die config.yaml eintragen und HA (schnell) neu laden.

#
# 📥 Installation

## ➡️ Installation über HACS
- Gehe zu Hacs und füge das Respository dort ein. 
Link für HACS
```yaml
https://github.com/jayjojayson/HA_homedashboard
```

- oder besser nutze diesen Link.
- [![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=jayjojayson&repository=HA_homedashboard&category=plugin)
- Nach dem Import könnt ihr über HACS das Dashboard installieren. Alle Dateien werden unter `www/community/HA_homedashboard/` abgelegt. Über den Filemanger im Seintemenü könnt ihr dorthin navigieren. Kopiert den Inhalt und geht zu Einstellungen > Dashboard > neues Dashboard anlegen und anschließend oben rechts auf die drei Punkte klicken, Raw-Konfigurationseditor auswählen und den kopierten Code dort einfügen. Danach könnt ihr das Dashboard öffnen und mit euren Enitäten füttern und nach belieben gestalten.

Installiert wird:

- HA_Dashboard.yaml
- HA_Dashboard_Theme.yaml
- Background-Image
- Particles Background
- Pool-Flow-Card
- Energy-Flow-Card


Für das Dashboard: configuration.yaml mit folgendem ergänzen (Beispiellink)
```yaml
lovelace:
  mode: yaml
  dashboards:
    ha_homedashboard:
      mode: yaml
      title: Home Dashboard
      icon: mdi:monitor-dashboard
      show_in_sidebar: true			 # oder false wenn es nicht in der Seitenleiste sichtbar sein soll
      filename: www/community/HA_homedashboard/HA_homedashboard.yaml
  ```

Für das Theme: configuration.yaml mit folgendem ergänzen (Beispiellink)
```yaml
  frontend:
    themes: !include www/community/HA_homedashboard/HA_homedashboard_theme.yaml
  ```

## ➡️ Manuell Installation/Kopieren
1. Wähle den YAML-Code aus einer Vorlage aus den Ordnern aus und kopiere den Code.
2. Gehe zu deinem Dashboard und füge den kopierten Code in eine neue Card oder direkt in eine neue Seite ein.
3. Passe die Entitäten an deine an, ersetze dazu IDs und Sensoren durch die aus deinem Setup.
4. Schaue das Ergebnis an. 


**` Note: Danke an die Entwickler der Cards aus meinen Voraussetzungen.`**
**` Dadurch wird das Dahsboard zu dem, was es ist. 🤗`**
