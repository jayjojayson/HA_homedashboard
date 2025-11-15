[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

#
# ℹ️ Einführung
Homedashboard Cards and Layout Code for Home Assistant

Hier möchte ich euch mein Dashboard vorstellen und im Detail für euch bereitstellen. Das Dashboard basiert auf dem neuen Kacheldesign in HA. Inzwischen ist die Struktur des Dashboards sehr gewachsen, wechselhalb eine Übersicht auch für mich gut ist, um den Überblick zu behalten.
Das Dashboard ist für die Tabletansicht angepasst. Es sollte nach Möglichkeit nicht gescrollt werden müssen, aber an manchen Stellen lässt es sich einfach nicht vermeiden. Daher wird gerade die Startseite mit vielen dynamischen Einblendungen, PopUp- und Conditional-Cards gestaltet. Zudem werden die größeren Cards auf dem Handy im Layout gebrochen und daher ebenfalls ganz gut dargestellt. Die Entwicklung geht weiter und ich werde hier versuchen den aktullen Stand vom Dashboard zu pflegen. Aktuelle Updates Infos findet ihr in den jeweiligen Releases.

**Wenn euch das Dashboard gefällt, gebt ihm bitte einen Stern ⭐ auf GitHub, danke. 🤗**

**Read in english - [English-ReadMe](https://github.com/jayjojayson/HA_homedashboard/blob/main/z-English-ReadMe/readME-Eng.md)**

<details>
  <summary> <b>Beispielbild Startseite (aufgeklappt)</b></summary>  
  
  ![start](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/1%20Startseite/startseite_ubersicht.jpg)  
</details>

[![HA_homedashboard](https://github.com/user-attachments/assets/c545ab17-c052-4b84-871a-43b32e56e61d)](https://www.youtube.com/watch?v=AK_P7a_ynUY "HA_homedashboard")



**📂 Ordnerstruktur**
Alles übersichtlich strukturiert, so dass ihr die gewünschten Elemente einfach kopieren könnt. Es sind alle YAML-Dateien pro Karte aufgeführt und den entsprechenden Seiten oder Unterseiten zugeordnet. 
Schaut am besten den jeweiligen Screenshot der Seite im Ordner/Unterordner an und ihr könnt schnell die enstprechende Card zuordnen bzw. in der Ordnerstruktur finden. Ihr findet dort auch die yaml der kompletten Seiten.

#
# 📖 Features

- **📣 HA-Topmenü/Header ein-/ausblenden (Button-Action)  [(optional)](#-installation)**
- **📣 particles Background ein-/ausblenden (Button-Action)  [(optional)](#-installation)**
- **📣 sticky Sidebar ein-/ausblenden (Button-Action)  [(optional)](#-installation)**
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
    
    ![start](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/1%20Startseite/startseite_ubersicht.jpg)  
  </details>

**für Staubsauger und Müll Card notwendig**
- dreame vacuum map card
- trash card
- ics calendar 
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/Unterseiten/2%20Roboter/roboterseite_ubersicht.jpg)  
  </details>

**für Wetter Card notwendig**
- deutscher wetterdienst
- NINA Wetterwarnungen
- compass card (neu für Windrichtung)
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/5%20Wetter/wetterseite_ubersicht.jpg)  
  </details>

**für Stromübersicht Card notwendig**
- power flow card plus
- sankey chart card
- energy overview card
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/6%20Strom/stromseite_ubersicht.jpg)  
  </details>

**für Paketeüberischt Card notwendig**
- 17track Integration

**für Raspi-Status Card notwendig**
- System Monitor Integration
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/Unterseiten/1%20Einstellungen/einstellungenseite_ubersicht.jpg)  
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
- Gehe zu Hacs und füge das Respository dort ein. Dazu oben rechts auf die drei Punkte klicken, importieren auswählen und den Link von hier dort einfügen. Nach dem Import könnt ihr über HACS das Dashboard installieren. Das Dashboard wird unter `www/community/HA_homedashboard/` abgelegt. Über den Filemanger im Seintemenü könnt ihr dorthin navigieren. Kopiert den Inhalt und geht zu Einstellungen > Dashboard > neues Dashboard anlegen und anschließend oben rechts auf die drei Punkte klicken, Raw-Konfigurationseditor auswählen und den kopierten Code dort einfügen. Danach könnt ihr das Dashboard öffnen und mit euren Enitäten füttern und nach belieben gestalten.

Link für HACS
```yaml
https://github.com/jayjojayson/HA_homedashboard
```
configuration.yaml mit folgendem ergänzen (Beispiellink, muss angepasst werden)
```yaml
  frontend:
    themes: !include www/community/HA_homedashboard/HA_homedashboard_theme.yaml
  ```

## ➡️ Manuelle Installation
1. Wähle den YAML-Code aus einer Vorlage aus den Ordnern aus und kopiere den Code.
2. Gehe zu deinem Dashboard und füge den kopierten Code in eine neue Card oder direkt in eine neue Seite ein.
3. Passe die Entitäten an deine an, ersetze dazu IDs und Sensoren durch die aus deinem Setup.
4. Schaue das Ergebnis an. 

#
## 💬 Topmenü Hack 

Um das Topmenü auf Tablet und Handy auszublenden nutze ich den Kiosk Mode von HACS.
Einfach über HACS installieren und im Anschluss folgenden Code im Raw-Konfigurationseditor an erster Stelle einfügen.
Erreichbar ist der Editor über die drei Punkte oben rechts, wenn man im Bearbeitungsmodus für das Dashboard ist.

```yaml
  kiosk_mode:
    mobile_settings:
      hide_header: true
      ignore_entity_settings: true
      custom_width: 1280
```
Es geht auch noch besser, wenn ihr unter Geräte & Dienste einen Helfer mit dem Typ Schalter und Namen kioskmode angelegt könnt ihr den 
nachfolgenden Code wie folgt einfügen. Somit könnt ihr bequem per Schalter das Topmenü ein- oder ausblenden. Ich habe den Schalter in der Unterseite Einstellungen hinterlegt.

```yaml
kiosk_mode:
  non_admin_settings:
    hide_header: true
    hide_menubutton: true
    ignore_entity_settings: true
  entity_settings:
    - entity:
        input_boolean.kioskmode: 'on'
      hide_header: true
    - entity:
        input_boolean.kioskmode: 'off'
      hide_header: false
```

## 💬 particles background

Für den Particles Background sind zwei Dinge notwendig. Zuerst müsst ihr unter Geräte & Dienste einen Helfer mit dem Typ Schalter und dem Namen Button Background Dashboard angelegen, dann könnt ihr den 
nachfolgenden Code wie folgt einfügen. Somit könnt ihr im Anschluß bequem per Schalter den partikel Hintergrund ein- oder ausblenden. Ich habe den Schalter in der Unterseite Einstellungen hinterlegt.

Das zweite ist das Anlegen der Dateien, kopiert dazu einfach alle Dateien aus folgendem github aus dem Ordner "z-particles background" und fügt sie bei euch unter www/particles/ ein. Den Ordner "particles" müsst ihr vorab erstellen.

Je nachdem auf welcher Seite ihr den Hintergrund letztlich nutzten wollt, muss eine conditional card eingefügt werden. Der Code dazu sieht wie folgt aus. Die Card bleibt erstmal leer und durch Card Mod wird sie an die richtige Stelle gesetzt. 
Die Positionierung der Card innerhalb des Dashboards sollte am Ende erfolgen. Die Farben können in der css und in der app.js bearbeitet werden (Cache danach löschen nicht vergessen).

```yaml
type: conditional
conditions:
  - condition: state
    entity: input_boolean.button_background_dashboard
    state: "on"
card:
  type: iframe
  url: /local/particles/background/index.html
  aspect_ratio: 50%
  card_mod:
    style: |
      ha-card {
        border: none !important;
        border-radius: 0px !important;
        background: none !important;
        box-shadow: none !important;
        z-index: -1;
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        opacity:0.3;
      }
```
![Aufzeichnung 2025-01-17 174641 (2)](https://github.com/user-attachments/assets/8a822d2b-757b-411f-b239-982fd412243c)
  
## 💬 sticky Sidebar

Für die Sticky Sidebar wird ein Helfer benötigt. Unter Geräte & Dienste einen Helfer mit dem Typ Schalter und dem Namen Button Sidebar Menu angelegen, dann könnt ihr den 
Code aus meinem Beispeil einfügen. Somit könnt ihr im Anschluß bequem per Schalter die Sidebar ein- oder ausblenden. Ich habe den Schalter auf der Startseite oben rechts neben der Überschrift Heizung hinterlegt.
Auch hier ist Card-Mod wieder eine Vorraussetzung das alles korrekt funktioniert.

```yaml
type: conditional
conditions:
  - condition: state
    entity: input_boolean.button_sidebar_menu
    state: "on"
card:
  type: custom:layout-card
  layout_type: custom:grid-layout
  layout:
    grid-template-columns: repeat(1, 1fr)
    grid-template-rows: repeat(3, auto)
  cards:
    - type: custom:vertical-stack-in-card
      card_mod:
        style: |
          ha-card {
            background: #181e2a !important;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
            border: none !important;
            border-radius: 40px 0 0 40px !important;
            padding: 15px;
            margin-top: 75px;
            width: 300px !important;
            opacity: 1;
            z-index: 2;
            position: fixed;
            top:0;
            right:0;
            width:100%;
            height:80%;
          }
      cards:
        - type: vertical-stack
          cards:
            - type: custom:button-card
              color: transparent
              icon: none
              name: Hauptseiten
              styles:
                card:
                  - text-transform: uppercase;
                  - justify-content: middle
                  - align-self: middle
                  - margin: none
                  - height: 50px
                  - font-family: verdana
                  - color: var(--primary-color)
                  - background-color: transparent
                  - border-radius: 12px 12px 40px 12px
                  - border-style: none
                  - box-shadow: none
            - type: horizontal-stack
              cards:
                - type: custom:button-card
                  color: transparent
                  icon: mdi:lightbulb-group
                  tap_action:
                    action: navigate
                    navigation_path: /dashboard-test/licht
                  styles:
                    card:
                      - background-color: "#354b5e"
                      - border-radius: 10px 10px 10px 10px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 25px
                      - height: 25px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: var(--primary-color)
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:heating-coil
                  tap_action:
                    action: navigate
                    navigation_path: /dashboard-test/heizung
                  styles:
                    card:
                      - background-color: "#354b5e"
                      - border-radius: 10px 10px 10px 10px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 25px
                      - height: 25px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: var(--primary-color)
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
            - type: horizontal-stack
              cards:
                - type: custom:button-card
                  color: transparent
                  icon: mdi:weather-partly-cloudy
                  tap_action:
                    action: navigate
                    navigation_path: /dashboard-test/wetter
                  styles:
                    card:
                      - background-color: "#354b5e"
                      - border-radius: 10px 10px 10px 10px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 25px
                      - height: 25px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: var(--primary-color)
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:solar-power-variant
                  tap_action:
                    action: navigate
                    navigation_path: /dashboard-test/solar
                  styles:
                    card:
                      - background-color: "#354b5e"
                      - border-radius: 10px 10px 10px 10px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 25px
                      - height: 25px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: var(--primary-color)
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
        - type: vertical-stack
          cards:
            - type: custom:button-card
              color: transparent
              icon: none
              name: Unterseiten
              styles:
                card:
                  - text-transform: uppercase;
                  - justify-content: middle
                  - align-self: middle
                  - margin: none
                  - height: 85px
                  - font-family: verdana
                  - color: grey
                  - background-color: transparent
                  - border-radius: 12px 12px 40px 12px
                  - border-style: none
                  - box-shadow: none
            - type: horizontal-stack
              cards:
                - type: custom:button-card
                  color: transparent
                  icon: mdi:cog
                  tap_action:
                    action: navigate
                    navigation_path: /dashboard-test/einstellungen
                  styles:
                    card:
                      - background-color: "#404b5e"
                      - border-radius: 10px 10px 10px 10px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 25px
                      - height: 25px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: var(--secondary-text-color)
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:robot-mower
                  tap_action:
                    action: navigate
                    navigation_path: /dashboard-test/robter-steuerung
                  styles:
                    card:
                      - background-color: "#404b5e"
                      - border-radius: 10px 10px 10px 10px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 25px
                      - height: 25px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: var(--secondary-text-color)
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
            - type: horizontal-stack
              cards:
                - type: custom:button-card
                  color: transparent
                  icon: mdi:cctv
                  tap_action:
                    action: navigate
                    navigation_path: /dashboard-test/sicherheit
                  styles:
                    card:
                      - background-color: "#404b5e"
                      - border-radius: 10px 10px 10px 10px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 25px
                      - height: 25px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: var(--secondary-text-color)
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:pool
                  tap_action:
                    action: navigate
                    navigation_path: /dashboard-test/garten
                  styles:
                    card:
                      - background-color: "#404b5e"
                      - border-radius: 10px 10px 10px 10px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 25px
                      - height: 25px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: var(--secondary-text-color)
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
        - type: vertical-stack
          cards:
            - type: custom:button-card
              color: transparent
              name: Settings
              icon: none
              styles:
                card:
                  - text-transform: uppercase;
                  - justify-content: middle
                  - align-self: middle
                  - margin: none
                  - height: 87px
                  - font-family: verdana
                  - color: var(--secondary-text-color)
                  - background-color: transparent
                  - border-radius: 12px 12px 40px 12px
                  - border-style: none
                  - box-shadow: none
            - type: horizontal-stack
              cards:
                - type: custom:button-card
                  color: transparent
                  icon: mdi:menu
                  tap_action:
                    action: perform-action
                    perform_action: input_boolean.toggle
                    target:
                      entity_id: input_boolean.kioskmode
                  styles:
                    card:
                      - background-color: "#1f2634"
                      - border-radius: 40px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 18px
                      - height: 20px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: steelblue
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:webpack
                  tap_action:
                    action: perform-action
                    perform_action: input_boolean.toggle
                    target:
                      entity_id: input_boolean.button_background_dashboard
                  styles:
                    card:
                      - background-color: "#1f2634"
                      - border-radius: 40px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 18px
                      - height: 20px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: steelblue
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:menu-open
                  tap_action:
                    action: perform-action
                    perform_action: input_boolean.toggle
                    target:
                      entity_id: input_boolean.button_sidebar_menu
                  styles:
                    card:
                      - background-color: "#1f2634"
                      - border-radius: 40px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 18px
                      - height: 20px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: steelblue
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
        - type: custom:vertical-stack-in-card
          card_mod:
            style: |
              ha-card {
                border: none;
                background: none;
                border: none;
                border-radius: 0px !important;
                margin-top: 10px !important;
                padding-bottom: 6px;
              }
          cards:
            - type: horizontal-stack
              cards:
                - type: custom:button-card
                  color: transparent
                  icon: mdi:hammer
                  tap_action:
                    action: navigate
                    navigation_path: /developer-tools/yaml
                  styles:
                    card:
                      - background-color: "#1f2634"
                      - border-radius: 40px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 18px
                      - height: 23px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: steelblue
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:backup-restore
                  tap_action:
                    action: navigate
                    navigation_path: /config/backup/overview
                  styles:
                    card:
                      - background-color: "#1f2634"
                      - border-radius: 40px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 18px
                      - height: 23px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: steelblue
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:cog
                  tap_action:
                    action: navigate
                    navigation_path: /config
                  styles:
                    card:
                      - background-color: "#1f2634"
                      - border-radius: 40px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 18px
                      - height: 23px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: steelblue
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:devices
                  tap_action:
                    action: navigate
                    navigation_path: /config/integrations/dashboard
                  styles:
                    card:
                      - background-color: "#1f2634"
                      - border-radius: 40px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 18px
                      - height: 23px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: steelblue
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none
                - type: custom:button-card
                  color: transparent
                  icon: mdi:robot
                  tap_action:
                    action: navigate
                    navigation_path: /config/automation/dashboard
                  styles:
                    card:
                      - background-color: "#1f2634"
                      - border-radius: 40px
                      - border-style: none
                      - box-shadow: >-
                          rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px
                          7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
                    icon:
                      - width: 15px
                      - height: 23px
                      - color: white
                      - align-self: start
                      - text-align: start
                      - padding: 12px
                      - color: steelblue
                    img_cell:
                      - justify-content: middle
                      - align-self: middle
                      - margin: none

```
  
## 💬 HA_Homedashboard Theme Datei 

Wenn Ihr genau die Farbgestaltung haben möchtet, wie auf den Vorschaubildern zu sehen, könnt ihr HACS für die Installation nutzen oder könnt euch die HA_Homedashboard Theme Yaml in euer HA 
impotieren. Dazu ladet ihr euch die Datei herunter und geht anschließend in den FileEditor bei Home Assistant. Dort fügt ihr die Datei in den config Ordner oder in den lokal Ordner.
Der Speicherort spielt eigentlich keine Rolle. Die Theme-Datei wird von HA automatisch erkannt. 

Das Theme ist in drei Stück aufgeteilt, das Haupttheme, grey-icon und temps. Grey-icon nutze ich manchmal um die Icon auf grau zu setzen und Temps um Standardtemeperaturwerte einzufärben.

Nachdem einfügen des Theme könnt ihr, wie gewohnt, unter Benutzereinstellungen das Theme auswählen. Es wird dann autormatisch übernommen und gespeichert. 
Wenn ihr auch das Hintergrundfoto nutzen möchtet, findet ihr es im Ordner images. Das müsst ihr dann händisch auf jeder Seite hinterlegen/hochladen.

Damit das Theme funktioniert müsst ihr in der configuration.yaml gleich am Anfang folgendes hinzufügen (Beispiel, wechselt den Pfad zu eurer Ablage)
```yaml
frontend:
  themes: !include www/community/HA_homedashboard/HA_homedashboard_theme.yaml
```

## 💬 Automatisierung Müllansage Vorabend (Sprachausgabe + Notify Handy)

Die Automation sagt euch am Vorabend um 18:00 Uhr an, welche Tonne herausgestellt werden muss. Dazu wird der Abfallkalender nach dem nächsten Termin durchsucht und da diese immer ganztäglich sind, beginnen sie somit um 0:00 Uhr. Daher ist ein Zeitversatz von -6h eingebaut, so dass die Ansage am Vorabend erfolgt. Ihr könnt die Zeit natürlich anpassen. Die Sprachausgabe erfolgt über einen media_player eurer Wahl. Zusätzlich könnt ihr euch auf dem Handy benachrichtigen lassen. Die drei Entitäten Kalender, Media_player und Handy müsst ihr natürlich mit euren ausstauschen.
  
```yaml
alias: Ansage Abfallkalender
description: Notification auf dem Handy und über Echo Dot
triggers:
  - entity_id: calendar.abfall
    event: start
    offset: "-6:0:0"
    trigger: calendar
conditions: []
actions:
  - data:
      message: >
        Heute muss die {{ state_attr('calendar.abfall', 'message') }}
        herausgestellt werden.
      title: |
        {{ state_attr('calendar.abfall', 'message') }}
    action: notify.mobile_app_samsung_s24
  - data:
      message: >
        Es ist wieder Zeit, die {{ state_attr('calendar.abfall', 'message') }}
        auf die Straße zu stellen.
      title: Nächste Ziehung steht an!
    action: notify.alexa_media_jan_s_echo
mode: single

```

## 💬 günstigste Tankstelle ermitteln

Für die Funktion müssen zwei Sensoren in der configuration.yaml erstellt werden. Diese findet ihr in der sensoren-beispiel.yaml. Der erste ermittelt den günstigsten Preis in der Umgebung und der zweite die dazugehörige Straße bzw. Tankstelle.
Die Enttitäten der Tanken müssen entsprechend angepasst werden. Ich nutze dafür die Integration Tankerkoenig. Ein kostenloser API Schlüssel kann auf der Seite von Tankerkoenig beantragt werden.
Nach Konfiguration, kann die Card in auf der Startseite verwendet werden.
    


#
#  👩‍💻 Sourcecode Yaml

<div align="left">
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
</div>

**` Note: Danke an die Entwickler der Cards aus meinen Voraussetzungen.`**
**` Dadurch wird das Dahsboard zu dem, was es ist. 🤗`**
