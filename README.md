# ✨ HA_homedashboard ✨ 
Homedashboard Cards and Layout Code for Home Assistant

Hier möchte ich euch mein Dashboard vorstellen und im Detail für euch bereitstellen. Das Dashboard basiert auf dem neuen Kacheldesign in HA. Inzwischen ist die Struktur des Dashboards sehr gewachsen, wechselhalb eine Übersicht auch für mich gut ist, um den Überblick zu behalten.
Das Dashboard ist für die Tabletansicht angepasst. Es sollte nach Möglichkeit nicht gescrollt werden müssen, aber an manchen Stellen lässt es sich einfach nicht vermeiden. Zudem werden die größeren Cards auf dem Handy im Layout gebrochen und daher ebenfalls ganz gut dargestellt. Die Entwicklung geht weiter und ich werde hier versuchen den aktullen Stand vom Dashboard zu pflegen. Aktuelle Updates halte ich [hier](#%EF%B8%8F-updates) fest.

![start](https://github.com/user-attachments/assets/5ab05e5a-79a1-45b5-8700-a83049f8a74b)

## 📂 Ordnerstruktur
Alles übersichtlich strukturiert, so dass ihr die gewünschten Elemente einfach kopieren könnt. Es sind alle YAML-Dateien pro Karte aufgeführt und den entsprechenden Seiten oder Unterseiten zugeordnet. 
Schaut am besten den jeweiligen Screenshot der Seite im Ordner/Unterordner an und ihr könnt schnell die enstprechende Card zuordnen bzw. in der Ordnerstruktur finden. Ihr findet dort auch die yaml der kompletten Seiten.

# 📖 Features

- #### 📣 HA-Topmenü/Header ausblenden (Button-Action)  [(optional)](#-installation)
- #### ⭐ Startseite mit popups für Heizung, Wetter, Kamera und Strom
- #### ⭐ Startseite mit dynamischen Inhalten für (Müll, Fenster, Licht, Pakete, Feiertage)
- #### 📣 Zurück-Button (zur Statseite) am unteren Rand fest eingebunden 
- #### ⭐ Hauptseiten für Heizung, Licht, Garten, Wetter und Strom plus Startseite
- #### ⭐ Unterseiten für Einstellungen, Roboter, 📹 Sicherheit und Multimedia
- #### ☔ ausführliche Wettercard (dwd wetterdienst vorausgesetzt)
- #### ⚡ ausführliche Stromübersicht - aktuelle Verbrauchswerte für Geräte und Gesamt (Watt/kWh) 📈 History 
- #### ☀️ Solarinput ebenfalls mit in Stromübersichtkarte & Startseite aufgenommen
- #### 💻 angepasst für Lenovo M10 3.Gen Tablet (aber auch andere Tablets mit 10 oder 11")
- #### 📱 großteils Handy kompatibel (getestet mit s24)
- #### viele tabbed und popups cards

...coming soon

#### Hauptseiten
![hauptseiten](https://github.com/user-attachments/assets/ad3d7eb4-b574-4f21-8a9d-24eb0fcc9d55)

#### Unterseiten
![unterseiten](https://github.com/user-attachments/assets/7d6ffdfd-b7af-4478-a4b5-611d8ddefdb2)


## ✔️ Voraussetzungen

Folgende Cards müssen über HACS installiert sein, dass im Anschluss euer kopierter Code funktioniert.
Welche HACS card ihr letztendlich benötigt, seht ihr auch in meinen jeweils erstellten Cards.

#### für alle Seiten notwendig
- mushroom
- card-mod
- stack in card
- tabbed card
- bubble card
- mini graph card
- layout card
- auto entities card
- <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/1%20Startseite/startseite_ubersicht.jpg)  
  </details>

#### für Staubsauger und Müll Card notwendig
- dreame vacuum map card
- trash card
- ics calendar 
- <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/Unterseiten/2%20Roboter/roboterseite_ubersicht.jpg)  
  </details>

#### für Wetter Card notwendig
- deutscher wetterdienst
- NINA Wetterwarnungen
- compass card (neu für Windrichtung)
- <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/5%20Wetter/wetterseite_ubersicht.jpg)  
  </details>

#### für Stromübersicht Card notwendig
- power flow card plus
- sankey chart card
- energy overview card
- <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/6%20Strom/stromseite_ubersicht.jpg)  
  </details>

#### für Paketeüberischt Card notwendig
- 17track Integration

#### für Raspi-Status Card notwendig
- System Monitor Integration
- <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/Unterseiten/1%20Einstellungen/einstellungenseite_ubersicht.jpg)  
  </details>

(optional - Topmenu verstecken)
- kiosk mode

(optional - Swipen für vor und zurück auf Tablet oder Handy)
- home assistant swipe navigation

#### Sensoren
Es müssen ein paar Sensoren in der configuration.yaml angelegt werden. Das ist notwendig, um Temperatur-, Luft-, und Solarwerte nach Zustand einzufärben.
Ihr findet die Sensoren unter sensoren.yaml. Dort den entsprechenden Sensor herauskopieren, bei euch in die config.yaml eintragen und HA (schnell) neu laden.

# 📥 Installation
1. Wähle den YAML-Code aus einer Vorlage aus den Ordnern aus und kopiere den Code.
2. Gehe zu deinem Dashboard und füge den kopierten Code in eine neue Card oder direkt in eine neue Seite ein.
3. Passe die Entitäten an deine an, ersetze dazu IDs und Sensoren durch die aus deinem Setup.
4. Schaue das Ergebnis an. 

<details>
  <summary> 💬 - <b>Topmenü Hack</b> ---</summary>
  
  Um das Topmenü auf Tablet und Handy auszublenden nutze ich den Kiosk Mode von HACS.
  Einfach über HACS installieren und im Anschluss folgenden Code im Raw-Konfigurationseditor an erster Stelle einfügen.
  Erreichbar ist der Editor über die drei Punkte oben rechts, wenn man im Bearbeitungsmodus für das Dashboard ist.
  
  ```bash
    kiosk_mode:
      mobile_settings:
        hide_header: true
        ignore_entity_settings: true
        custom_width: 1280
  ```
  Es geht auch noch besser, wenn ihr unter Geräte & Dienste einen Helfer mit dem Typ Schalter und Namen kioskmode angelegt könnt ihr den 
  nachfolgenden Code wie folgt einfügen. Somit könnt ihr bequem per Schalter das Topmenü ein- oder ausblenden. Ich habe den Schalter in der Unterseite Einstellungen hinterlegt.
  
  ```bash
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
</details>

<details>
  <summary> 💬 - <b>HA_Homedashboard Theme Datei</b> ---</summary>

  ## 💬 HA_Homedashboard Theme Datei 
  
  Wenn Ihr genau die Farbgestaltung haben möchtet, wie auf den Vorschaubildern zu sehen, dann müsst ihr euch die HA_Homedashboard Theme Yaml in euer HA impotieren.
  Dazu ladet ihr euch die Datei herunter und geht anschließend in den FileEditor bei Home Assistant. Dort fügt ihr die Datei in den config Ordner oder in den lokal Ordner.
  Der Speicherort spielt eigentlich keine Rolle. Die Theme-Datei wird von HA automatisch erkannt.

  Das Theme ist in drei Stück aufgeteilt, das Haupttheme, grey-icon und temps. Grey-icon nutze ich manchmal um die Icon auf grau zu setzen und Temps um Standardtemeperaturwerte einzufärben.

  Nachdem einfügen des Theme könnt ihr, wie gewohnt, unter Benutzereinstellungen das Theme auswählen. Es wird dann autormatisch übernommen und gespeichert. 
  Wenn ihr auch das Hintergrundfoto nutzen möchtet, findet ihr es im Ordner images. Das müsst ihr dann händisch auf jeder Seite hinterlegen/hochladen.

  Damit das Theme funktioniert müsst ihr in der configuration.yaml gleich am Anfang folgendes hinzufügen
  ```bash
  frontend:
  themes: !include HA_homedashboard_theme.yaml
  ```
</details>

<details>
  <summary> 💬 - <b>Automatisierung Müllansage Vorabend</b> ---</summary>

  ## 💬 Automatisierung Müllansage Vorabend (Sprachausgabe + Notify Handy)

Die Automation sagt euch am Vorabend um 18:00 Uhr an, welche Tonne herausgestellt werden muss. Dazu wird der Abfallkalender nach dem nächsten Termin durchsucht und da diese immer ganztäglich sind, beginnen sie somit um 0:00 Uhr. Daher ist ein Zeitversatz von -6h eingebaut, so dass die Ansage am Vorabend erfolgt. Ihr könnt die Zeit natürlich anpassen. Die Sprachausgabe erfolgt über einen media_player eurer Wahl. Zusätzlich könnt ihr euch auf dem Handy benachrichtigen lassen. Die drei Entitäten Kalender, Media_player und Handy müsst ihr natürlich mit euren ausstauschen.
  
  ```bash
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
</details>

## ‼️ Updates
#### update Jan 25--
- mit der Integration für HACS begonnen (aktuell könnt ihr das komplette Dashboard importieren)
- HA_homedashbord_theme Yaml hinzugefügt und ReadMe Datei besser struktiert, mit Beispielfotos unter Voraussetzungen
- Compass Card für Windrichtungsanzeige auf Wetterseite hinzugefügt
- Optimierungen am Layout für bessere Handynutzung

#### update Dez 24--
- Auf allen Haupt- und Unterseiten wurde ein "zurück Button" eingefügt. Der Code (zuruck-Startseite-Button.yaml) ist in allen Ordnern zu finden. 
Ihr könnt einfach bei euch auf dem Dashboard eine neue manuelle card erstellen und den Code dort hineinkopieren. Der Button wird im Anschluss fest unten eingefügt.
Beispiel Foto anbei.
- <img src="https://github.com/user-attachments/assets/6e893014-133d-4acf-a6dd-05cd45a6a266" width="400" height="250" />
- first release

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
