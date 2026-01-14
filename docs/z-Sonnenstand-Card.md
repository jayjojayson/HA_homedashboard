# ☀️ Sonnenstand Custom Card

Ich habe inzwischen sogar einen Sun-Position Card erstellt die ein vielzahl an Möglichkeiten zur Gestalung der Sonnenstand Card geben. Ihr findet nachfolgend das repo dazu. Die Card ist aber auch direkt in HACS zu finden.

https://github.com/jayjojayson/Sun-Position-Card  

<img width="50%" height="auto" alt="image" src="https://github.com/user-attachments/assets/1a84fcb6-6703-463f-86f2-a42e4bf98a42" />

#### Ansonsten könnt ihr aber auch gerne hier die Card nachbauen

![Beispiel-Bild](https://github.com/user-attachments/assets/38152fe6-310c-4739-93ad-97fd67fa4f10)

Ich weiß, es gibt auch diese Zenit-Card, aber wer es kompakt und im gleichen Stil mag ist mit den Sonnestand-Card gut beraten. Die Card ist eine Kombination aus einer custom-stack-in-card und einer grid-layout-card.

### Gezeigt wird der aktuelle Stand der Sonne (Unter Horizont, Dämmerung, Morgen, Mittag, Nachmittag, Abend) Für allle Stände habe ich passende Bilder angelegt (weiter unten der Download).

---

:pushpin: Ihr braucht **zwei Sensoren** in der configuration.yaml, die in  Abhängigkeit vom Sensor sun.sun den Stand der Sonne ermitteln und als Text und Bild wiedergeben.

```yaml
  - platform: template
    sensors:
      sun_position:
        friendly_name: "Sun Position"
        value_template: >-
          {% set sun = states('sun.sun') %}
          {% if sun == 'above_horizon' %}
            {% set azimuth = state_attr('sun.sun', 'azimuth') | float(default=0) %}
            {% set elevation = state_attr('sun.sun', 'elevation') | float(default=0) %}
            {% if elevation < 0 %} 
              Unter Horizont
            {% elif elevation < 10 %} 
              Dämmerung
            {% elif azimuth < 150 %}
              Morgen
            {% elif azimuth < 200 %}
              Mittag
            {% elif azimuth < 255 %}
              Nachmittag
            {% else %}
              Abend
            {% endif %}
          {% else %}
            Unter Horizont 
          {% endif %}

  - platform: template
    sensors:
      sun_position_bild:
        friendly_name: "Sun Position Bild"
        value_template: >-
          {% set sun = states('sun.sun') %}
          {% if sun == 'above_horizon' %}
            {% set azimuth = state_attr('sun.sun', 'azimuth') | float(default=0) %}
            {% set elevation = state_attr('sun.sun', 'elevation') | float(default=0) %}
            {% if elevation < 0 %}
              /local/community/HA_homedashboard/Sonnestand-Card/unterHorizont.png
            {% elif elevation < 10 %}
              /local/community/HA_homedashboard/Sonnestand-Card/dammerung.png
            {% elif azimuth < 150 %}
              /local/community/HA_homedashboard/Sonnestand-Card/morgen.png
            {% elif azimuth < 200 %}
              /local/community/HA_homedashboard/Sonnestand-Card/mittag.png
            {% elif azimuth < 255 %}
              /local/community/HA_homedashboard/Sonnestand-Card/morgen.png
            {% else %}
              /local/community/HA_homedashboard/Sonnestand-Card/abend.png
            {% endif %}
          {% else %}
            /local/community/HA_homedashboard/Sonnestand-Card/unterHorizont.png
          {% endif %}
```	  
Ich denke die meisten haben schon Sensoren für die Uhrzeit zum Sonneauf-/untergang. Wenn nicht, müsst ihr dafür auch zwei Sensoren anlegen.

:pushpin: **Sonnenaufgang**
```yaml
template:
- sensor:
  - name: "Sonnenaufgang Uhrzeit"
    state: "{{ (as_timestamp(state_attr('sun.sun', 'next_rising')) | timestamp_custom('%H:%M')) }}"
```
:pushpin: **Sonnenuntergang**
```yaml
template:
- sensor:
  - name: "Sonnenuntergang Uhrzeit"
    state: "{{ (as_timestamp(state_attr('sun.sun', 'next_dusk')) | timestamp_custom('%H:%M')) }}"
```

---

:arrow_right: Die hier gezeigten Bilder packt ihr bitte in das Verzeichnis `www/sonne` z.B. mit dem FileExplorer in HA! Geht natürlich auch mit einem anderen Ordner, aber so klappt direkt die Verlinkung mit dem Code aus meiner Card. Die Fotos findet ihr im Ordner.

---

Jetzt könnt ihr die Card in das Dashboard einfügen und sie sollte dann wie oben gezeigt aussehen. In Abhänigkeit der Auflösung müsst ihr eventuell noch ein wenig mit den margin-Werten herumspielen. Oder fragt nach, kann bestimmt auch weiterhelfen.


:pushpin: **Sonnenstand-Card für das Dashboard**
```yaml
type: custom:stack-in-card
cards:
  - type: custom:mushroom-title-card
    title: Sonnenstand
    card_mod:
      style: |
        ha-card {
          margin-left: 10px;
          margin-bottom: -20px;
        } 
        .title {
          color: white !important;
          font-weight: bold !important;
          font-size: 25px !important;
        }
  - type: horizontal-stack
    cards:
      - type: custom:layout-card
        layout_type: custom:grid-layout
        layout:
          grid-template-columns: 20% 30% 50%
          grid-template-rows: auto
        cards:
          - type: markdown
            card_mod:
              style: |
                ha-card {
                  background: none !important;
                  box-shadow: none !important;
                  border: none !important;
                  border-radius: 0px !important;
                  width: 120% !important;
                } 
            content: "![Sonnenstand]({{ states('sensor.sun_position_bild') }})"
          - type: vertical-stack
            cards:
              - type: entity
                entity: sensor.sun_position
                name: Aktuell
                state_color: false
                icon: none
                card_mod:
                  style: |
                    ha-card {
                      width: 120%;
                      margin-left: -10px;
                      padding-top: 10px;
                      box-shadow: none !important;
                      border: none !important;
                      background: transparent !important;                  
                      border-radius: 0px !important;
                    }
                    .header {
                      display: flex;
                      padding: 8px 16px 0;
                      justify-content: space-between;
                      margin-bottom: -10px;
                    }
                    .value {
                      font-size: 16px !important;
                      font-weight: normal !important;
                      color: steelblue;  
                    }
                    .name {
                      font-size: 16px !important;
                      color: white !important; 
                    }
          - type: vertical-stack
            cards:
              - type: entities
                card_mod:
                  style: |
                    ha-card {
                      width: 130%;
                      background: none !important;
                      box-shadow: none !important;
                      border: none !important;
                      border-radius: 0px !important;
                      margin-top: 23px;
                      margin-left: -60px;
                    } 
                    :host ::slotted(.card-content) {
                      padding: 25px 0 0 0 !important;
                    }
                    #states > * {
                      margin: -20px 0px !important;
                    }
                entities:
                  - entity: sensor.sonnenaufgang_uhrzeit
                    icon: none
                    name: Sonnenaufgang
                  - entity: sensor.sonnenuntergang_uhrzeit
                    icon: none
                    name: Sonnenuntergang
```
***update: 03/25***

*Für alle bei denen bei der Markdown-Card ein Border/Rand um das Bild herum angezeigt wird, kann folgende Variante als Alternativlösung nutzen. Mushroom-Card vorausgesetzt.*


<details>
  <summary> <b>Bitte aufklappen für Alternativlösung</b></summary>   

```yaml
type: custom:stack-in-card
cards:
  - type: custom:mushroom-title-card
    title: Sonnenstand
    card_mod:
      style: |
        ha-card {
          margin-left: 10px;
          margin-bottom: -20px;
        } 
        .title {
          font-weight: normal !important;
          font-size: 25px !important;
        }
  - type: horizontal-stack
    cards:
      - type: custom:layout-card
        layout_type: custom:grid-layout
        layout:
          grid-template-columns: 20% 30% 50%
          grid-template-rows: auto
        cards:
          - type: vertical-stack
            cards:
              - type: custom:mushroom-entity-card
                entity: person.eric
                show_name: false
                show_state: false
                icon: none
                card_mod:
                  style: |
                    ha-card {
                      background-image: url('{{ states('sensor.sun_position_bild') }}');
                      background-size: cover;
                      background-position: center;
                      border: none;
                      width: 60px !important;
                      height: 60px !important;
                      margin: 15px;
                      --card-primary-color: transparent !important;
                      --card-secondary-color: transparent !important;
                    }     
                    ha-state-icon {
                      color: none !important;
                    } 
                    mushroom-shape-icon {
                      --shape-color: none !important;
                    }
          - type: vertical-stack
            cards:
              - type: entity
                entity: sensor.sun_position
                name: Aktuell
                state_color: false
                icon: none
                card_mod:
                  style: |
                    ha-card {
                      width: 120%;
                      margin-left: -20px;
                      padding-top: -12px;
                      box-shadow: none !important;    
                      border: none !important;
                                      background: none !important;   
                    }    
                    .header {
                      margin-bottom: -10px;
                      margin-top: 13px;
                      border: none !important;
                    }
                    .value {
                      font-size: 15px !important;
                      font-weight: normal !important;
                      color: #258adb;  
                    }
                    .name {
                      font-size: 15px !important;
                      color: #e4e8ed !important; 
                    }
          - type: vertical-stack
            cards:
              - type: entities
                card_mod:
                  style: |
                    ha-card {
                      width: 115%;
                      background: none !important;
                      box-shadow: none !important;
                      border: none !important;
                      border-radius: 0px !important;
                      margin-top: 25px;
                      margin-left: -50px;
                    } 
                    :host ::slotted(.card-content) {
                      padding: 25px 0 0 0 !important;
                    }
                    #states > * {
                      margin: -20px -16px !important;
                    }
                entities:
                  - entity: sensor.sonnenaufgang_uhrzeit
                    icon: none
                    name: Sonnenaufgang
                  - entity: sensor.sonnenuntergang_uhrzeit
                    icon: none
                    name: Sonnenuntergang
```

<details>
