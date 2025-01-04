# ✨ HA_homedashboard ✨ 
Homedashboard Cards and Layout Code for Home Assistant

Hier möchte ich euch mein Dashboard vorstellen und im Detail für euch bereitstellen. Inzwischen ist die Struktur sehr gewachsen, wechselhalb so eine Übersicht auch für mich gut ist, um den Überblick zu behalten.
Das Dashboard ist für die Tabletansicht angepasst. Es sollte nach Möglichkeit nicht gescrollt werden müssen, aber an manchen Stellen lässt es sich einfach nicht vermeiden. Zudem werden die größeren Cards auf dem Handy im Layout gebrochen und daher ebenfalls ganz gut dargestellt. Die Entwicklung geht weiter und ich werde hier versuchen den aktullen Stand vom Dashboard zu pflegen.

![start](https://github.com/user-attachments/assets/5ab05e5a-79a1-45b5-8700-a83049f8a74b)

## 📂 Ordnerstruktur
Alles übersichtlich strukturiert, so dass ihr die gewünschten Elemente einfach kopieren könnt. Es sind alle YAML-Dateien pro Karte aufgeführt und den entsprechenden Seiten oder Unterseiten zugeordnet. 
Schaut am besten den jeweiligen Screenshot der Seite im Ordner/Unterordner an und ihr könnt schnell die enstprechende Card zuordnen bzw. in der Ordnerstruktur finden. Ihr findet dort auch die yaml der kompletten Seiten.

## 📖 Features

- #### 📣 HA-Topmenü/Header ausblenden (Button-Action) (optional)
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

#### für Staubsauger und Müll Card notwendig
- dreame vacuum map card
- trash card
- ics calendar 

#### für Wetter Card notwendig
- deutscher wetterdienst
- NINA Wetterwarnungen
- compass card (neu für Windrichtung)

#### für Stromübersicht Card notwendig
- power flow card plus
- sankey chart card
- energy overview card

#### für Paketeüberischt Card notwendig
- 17track Integration

#### für Raspi-Status Card notwendig
- System Monitor Integration

(optional - Topmenu verstecken)
- kiosk mode

(optional - Swipen für vor und zurück auf Tablet oder Handy)
- home assistant swipe navigation

#### Sensoren
Es müssen ein paar Sensoren in der configuration.yaml angelegt werden. Das ist notwendig, um Temperatur-, Luft-, und Solarwerte nach Zustand einzufärben.
Ihr findet die Sensoren unter sensoren.yaml. Dort den entsprechenden Sensor herauskopieren, bei euch in die config.yaml eintragen und HA (schnell) neu laden.

## 📥 Installation
1. Wähle den YAML-Code aus einer Vorlage aus den Ordnern aus und kopiere den Code.
2. Gehe zu deinem Dashboard und füge den kopierten Code in eine neue Card oder direkt in eine neue Seite ein.
3. Passe die Entitäten an deine an, ersetze dazu IDs und Sensoren durch die aus deinem Setup.
4. Schaue das Ergebnis an. 

## 💬 Topmenü Hack

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
Auf allen Haupt- und Unterseiten wurde ein "zurück Button" eingefügt. Der Code (zuruck-Startseite-Button.yaml) ist in allen Ordnern zu finden. 
Ihr könnt einfach bei euch auf dem Dashboard eine neue manuelle card erstellen und den Code dort hineinkopieren. Der Button wird im Anschluss fest unten eingefügt.
Beispiel Foto anbei.

<img src="https://github.com/user-attachments/assets/6e893014-133d-4acf-a6dd-05cd45a6a266" width="400" height="250" />

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
