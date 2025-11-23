# 🌅 Solar-Paneel-Modul-Card

Wenn man sich den Solar Optimizer anschaut, der einfach nur alle Paneel anzeigt, könnte man mit der Bildelemente Card direkt aus HA was schöneres basteln. Ich habe mal versucht eine Card zu erstellen. So sieht das Ergebnis für 4 Paneel aus. Kann entsprechend einfach vervielfältigt werden.

### Solarpaneel ausgeschaltet
![image, 50%](https://github.com/user-attachments/assets/08720a9e-1885-4dae-a351-06d8e58a307a)


### Solarpaneel bei Leistung eingeschaltet
![image, 50%](https://github.com/user-attachments/assets/d7b7a951-cbab-47c0-b3bf-8e4fc3eb2761)


Meine Vorstellung war jetzt, wenn kein Output von den Paneels kommt, dann sind sie sozusagen ausgeschaltet und werden damit schwarz angezeigt. Steigt der Output über 5 Watt (kann frei angepasst werden), werden die Paneels blau und zeigen die aktuelle Leistung an. Jedes Paneel zeigt dann neben Leistung unten noch ein Label. So hat man die Optik ähnlich wie im Optimizer. Beim Label kann man aber auch eine andere Entität hinterlegen, z.B. Paneltemperatur, Amper usw. 

Das finde ich optisch auf jeden Fall ansprechender, hoffe es gefällt. :) Die aktuelle Leistung des jeweiligen Paneels kann man zusätzlich mit templates je nach aktueller Leistung einfärben. So sieht man schnell ob alle Paneel gut laufen oder z.B. eins rumzickt. Aber das kann ich gerade schlecht zeigen, weil keine Leistung zur Zeit anliegt. Einfach mal tagsüber draufschauen, dann sollte sich die Werte entsprechend einfärben.

📌 Die Bilder findet ihr wieder hier im Ordner, herunterladen und in den www Ordner in einen gewünschten Unterordner kopieren.

***Bildpfade und Entitäten müssen natürlich entsprechend ausgetauscht werden. Hatte die Bilder zum Test mal schnell in meinen "sonne" Ordner gepackt.***

```yaml
type: picture-elements
elements:
  - type: state-badge
    entity: sensor.power_1
    style:
      top: 40%
      left: 12%
    card_mod:
      style: |
        :host {
          color: transparent !important;
          font-weight: 0 !important;
          font-size: 20px;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform,uppercase);
          --label-badge-red: steelblue !important;
          --label-badge-background-color: transparent !important;
          --label-badge-text-color: 
            {% set watt = states('sensor.power_1') | float(0) %}
            {% if watt < 10 %}
              grey
            {% elif watt < 40 %}
              steelblue
            {% elif watt < 150 %}
              yellow
            {% elif watt < 250 %}
              orange
            {% elif watt < 380 %}
              green
            {% else %}
              white
            {% endif %};
        }
  - type: state-label
    entity: sensor.power_1
    style:
      left: 12%
      top: 90%
    attribute: friendly_name
  - type: conditional
    conditions:
      - condition: numeric_state
        entity: sensor.power_1
        below: 5
    elements:
      - type: image
        image: /local/sonne/solaroff1.png
        state_image: {}
        style:
          left: 13%
          top: 50%
          width: 25%
  - type: state-badge
    entity: sensor.power_2
    style:
      top: 40%
      left: 37%
    card_mod:
      style: |
        :host {
          color: transparent !important;
          font-weight: 0 !important;
          font-size: 20px;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform,uppercase);
          --label-badge-red: steelblue !important;
          --label-badge-background-color: transparent !important;
          --label-badge-text-color: 
            {% set watt = states('sensor.power_2') | float(0) %}
            {% if watt < 10 %}
              grey
            {% elif watt < 40 %}
              steelblue
            {% elif watt < 150 %}
              yellow
            {% elif watt < 250 %}
              orange
            {% elif watt < 380 %}
              green
            {% else %}
              white
            {% endif %};
        }
  - type: state-label
    entity: sensor.power_2
    style:
      left: 37%
      top: 90%
    attribute: friendly_name
  - type: conditional
    conditions:
      - condition: numeric_state
        entity: sensor.power_2
        below: 5
    elements:
      - type: image
        image: /local/sonne/solaroff1.png
        state_image: {}
        style:
          left: 38%
          top: 50%
          width: 25%
  - type: state-badge
    entity: sensor.power_3
    style:
      top: 40%
      left: 62%
    card_mod:
      style: |
        :host {
          color: transparent !important;
          font-weight: 0 !important;
          font-size: 20px;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform,uppercase);
          --label-badge-red: steelblue !important;
          --label-badge-background-color: transparent !important;
          --label-badge-text-color: 
            {% set watt = states('sensor.power_3') | float(0) %}
            {% if watt < 10 %}
              grey
            {% elif watt < 40 %}
              steelblue
            {% elif watt < 150 %}
              yellow
            {% elif watt < 250 %}
              orange
            {% elif watt < 380 %}
              green
            {% else %}
              white
            {% endif %};
        }
  - type: state-label
    entity: sensor.power_3
    style:
      left: 62%
      top: 90%
    attribute: friendly_name
  - type: conditional
    conditions:
      - condition: numeric_state
        entity: sensor.power_3
        below: 5
    elements:
      - type: image
        image: local/sonne/solaroff1.png
        state_image: {}
        style:
          left: 63%
          top: 50%
          width: 25%
  - type: state-badge
    entity: sensor.power_4
    style:
      top: 40%
      left: 87%
    card_mod:
      style: |
        :host {
          color: transparent !important;
          font-weight: 0 !important;
          font-size: 20px;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform,uppercase);
          --label-badge-red: steelblue !important;
          --label-badge-background-color: transparent !important;
          --label-badge-text-color: 
            {% set watt = states('sensor.power_4') | float(0) %}
            {% if watt < 10 %}
              grey
            {% elif watt < 40 %}
              steelblue
            {% elif watt < 150 %}
              yellow
            {% elif watt < 250 %}
              orange
            {% elif watt < 380 %}
              green
            {% else %}
              white
            {% endif %};
        }
  - type: state-label
    entity: sensor.power_4
    style:
      left: 87%
      top: 90%
    attribute: friendly_name
  - type: conditional
    conditions:
      - condition: numeric_state
        entity: sensor.power_4
        below: 5
    elements:
      - type: image
        image: local/sonne/solaroff1.png
        state_image: {}
        style:
          left: 88%
          top: 50%
          width: 25%
image: /local/sonne/solaron2.png

```
