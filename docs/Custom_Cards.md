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

Wenn Ihr das Dashobard über Hacs installiert habt, findet die eine fertig und gebrauchsfähige Kopie der Card im Ordner `www/community/HA_homedashboard/`.

Für den Particles Background sind zwei Dinge notwendig. Zuerst müsst ihr unter Geräte & Dienste einen Helfer mit dem Typ Schalter und dem Namen Button Background Dashboard angelegen, dann könnt ihr den 
nachfolgenden Code wie folgt einfügen. Somit könnt ihr im Anschluß bequem per Schalter den partikel Hintergrund ein- oder ausblenden. Ich habe den Schalter in der Unterseite Einstellungen hinterlegt.

Das zweite ist das Anlegen der Dateien, kopiert dazu einfach alle Dateien aus folgendem github aus dem Ordner "z-particles background" und fügt sie bei euch unter www/particles/ ein. Den Ordner "particles" müsst ihr vorab erstellen.

Je nachdem auf welcher Seite ihr den Hintergrund letztlich nutzten wollt, muss eine conditional card eingefügt werden. Der Code dazu sieht wie folgt aus. Die Card bleibt erstmal leer und durch Card Mod wird sie an die richtige Stelle gesetzt. 
Die Positionierung der Card innerhalb des Dashboards sollte am Ende erfolgen. Die Farben können in der css und in der app.js bearbeitet werden (Cache danach löschen nicht vergessen). Hier im Beispiel wird ein Helper Button genutzt umd den animierten Background ein- und ausschalten zu können.

```yaml
type: conditional
conditions:
  - condition: state
    entity: input_boolean.button_background_dashboard
    state: "on"
card:
  type: iframe
  url: /local/community/HA_homedashboard/Particles_Backgroundbackground/background/index.html
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
Nach Konfiguration, kann die Card in auf der Startseite verwendet werden. Die passenden Sensoren findet auf der Seite Dashboard Sensoren im Wiki.
    



