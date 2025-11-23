## ⚡ Energiefluss-Visualisierung mit SVG + Floorplan-Card (Home Assistant)

Wenn Ihr das Dashobard über Hacs installiert habt, findet die eine fertig und gebrauchsfähige Kopie der Card im Ordner `www/community/HA_homedashboard/`.

Dieses Projekt zeigt, wie man mit einer SVG-Grafik und der `floorplan-card` Energieflüsse wie Solar, Batterie, Netz und Hausverbrauch visuell und dynamisch darstellt. Letztendlich müsst ihr im Beispielcode zur Card nur eure Entitäten/Sensoren austauschen und die Card sollte funktionieren. :) 

Für ausführliche Erklärungen, wie man die SVG erstellt und verknüpft schaut euch bitte die Pool-Flow-Card an. Dort habe ich alles genau erklärt.

![Screenshot 2025-05-20 072604](https://github.com/user-attachments/assets/09229cec-0606-4b4d-8465-c369b5a508e0)

![Screenshot 2025-05-24 162351](https://github.com/user-attachments/assets/a6c1436b-34d6-4209-959b-38cd0eca0c66)

![image](https://github.com/user-attachments/assets/a8033160-32fd-49a1-8ed4-d1380a388d57)

![image](https://github.com/user-attachments/assets/dc7ec224-3f8f-470c-a12f-0eb7dc276670)

### 🔧 Voraussetzungen

* HACS installiert
* `floorplan-card` Custom Card installiert
* Sensoren mit täglichen Energie-Werten
* CSS-Datei (energy-flow-card.css) zur dynamischen Gestaltung

---

### Aufbau der Card im Detail

Ihr müsst einfach in der Card eure Entitäten eintragen und könnt im Anschluss die Card nutzen. Alle Animationen und Grenzwerte habe ich soweit eingestellt. Ihr könnt sie natürlich anpassen, aber die Card sollte auf Anhieb funktionieren. Im www Ordner legt ihr bitte noch einen Unterordner an z.B. Energy_Power-Flow-Card und darin speichert/kopiert ihr die css-Datei und das SVG(Bild). Die Card wird im Dashboard erstellt und der Code sieht wie folgt aus. In den ersten müsst ihr das Bild und die CSS entsprechend eurem erstelltem Ordner verlinken.

```yaml
type: custom:floorplan-card
grid_options:
  columns: full
config:
  console_log_level: info
  defaults:
    hover_action: hover-info
    tap_action: more-info
  image: /local/energy-flow-card/energy-flow-card-small.svg
  stylesheet: /local/energy-flow-card/energy-flow-card.css
  rules:
    - element: soc
      entity: sensor.batterie_ladezustand
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " %" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: batterie100
      entity: sensor.batterie_ladezustand
      state_action:
        action: call-service
        service: floorplan.style_set
        service_data: |
          ${parseFloat(entity.state) > 97 ? 'display:block' : 'display:none'}
    - element: batterie80
      entity: sensor.batterie_ladezustand
      state_action:
        action: call-service
        service: floorplan.style_set
        service_data: |
          ${parseFloat(entity.state) > 80 ? 'display:block' : 'display:none'}
    - element: batterie60
      entity: sensor.batterie_ladezustand
      state_action:
        action: call-service
        service: floorplan.style_set
        service_data: |
          ${parseFloat(entity.state) > 60 ? 'display:block' : 'display:none'}
    - element: batterie40
      entity: sensor.batterie_ladezustand
      state_action:
        action: call-service
        service: floorplan.style_set
        service_data: |
          ${parseFloat(entity.state) > 40 ? 'display:block' : 'display:none'}
    - element: batterie20
      entity: sensor.batterie_ladezustand
      state_action:
        action: call-service
        service: floorplan.style_set
        service_data: |
          ${parseFloat(entity.state) > 1 ? 'display:block' : 'display:none'}
    - element: dreieckbatteriein
      entity: sensor.acpowerzubatterie_energy_power
      state_action:
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 30) ?
            'display:block' : 'display:none'}
    - element: dreieckbatterieout
      entity: sensor.acpowervonbatterie_energy_power
      state_action:
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0.1) ?
            'opacity:1' : 'opacity:0'}
    - element: batteriein
      entity: sensor.acpowerzubatterie_energy_power
      state_action:
        - service: floorplan.class_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 30) ?
            "batteriein" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 30) ?
            "display:block" : "display:none"}
    - element: batterieoutani
      entity: sensor.acpowervonbatterie_energy_power
      state_action:
        - service: floorplan.class_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 10) ?
            "hausin" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 10) ?
            "display:block" : "display:none"}
    - element: solaroutani
      entities:
        - sensor.total_solar_power_kombiniert
        - sensor.total_power_kombiniert
      state_action:
        - service: floorplan.class_set
          service_data: |-
            ${(
              states['sensor.total_solar_power_kombiniert'].state !== undefined &&
              states['sensor.total_power_kombiniert'].state !== undefined &&
              parseFloat(states['sensor.total_solar_power_kombiniert'].state) >= parseFloat(states['sensor.total_power_kombiniert'].state)
            ) ? "hausin" : ""}
        - service: floorplan.style_set
          service_data: |-
            ${(
              states['sensor.total_solar_power_kombiniert'].state !== undefined &&
              states['sensor.total_power_kombiniert'].state !== undefined &&
              parseFloat(states['sensor.total_solar_power_kombiniert'].state) >= parseFloat(states['sensor.total_power_kombiniert'].state)
            ) ? "display:block" : "display:none"}
    - element: hausin
      entities:
        - sensor.total_solar_power_kombiniert
        - sensor.total_power_kombiniert
      state_action:
        - service: floorplan.class_set
          service_data: |-
            ${(
              states['sensor.total_power_kombiniert'] &&
              states['sensor.total_solar_power_kombiniert'] &&
              parseFloat(states['sensor.total_power_kombiniert'].state) >= parseFloat(states['sensor.total_solar_power_kombiniert'].state)
            ) ? "hausin" : ""}
        - service: floorplan.style_set
          service_data: |-
            ${(
              states['sensor.total_power_kombiniert'] &&
              states['sensor.total_solar_power_kombiniert'] &&
              parseFloat(states['sensor.total_power_kombiniert'].state) >= parseFloat(states['sensor.total_solar_power_kombiniert'].state)
            ) ? "display:block" : "display:none"}
    - element: solarin
      entity: sensor.total_solar_power_kombiniert
      state_action:
        - service: floorplan.class_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 10) ?
            "solarin" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 10) ?
            "display:block" : "display:none"}
    - element: netzin
      entity: sensor.total_power
      state_action:
        - service: floorplan.class_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 10) ?
            "netzin" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 10) ?
            "display:block" : "display:none"}
    - element: netzout
      entity: sensor.total_power
      state_action:
        - service: floorplan.class_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) < 0) ?
            "netzout" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) < 0) ?
            "display:block" : "display:none"}
    - element: hausin
      entity: sensor.acpowervonbatterie_energy_power
      state_action:
        action: call-service
        service: floorplan.class_set
        service_data: >-
          ${(parseFloat(entity.state) > 0) ? 'hausin batteriebetrieb' :
          'hausin'}    
    - element: solarleistung
      entity: sensor.erzeugzung_taglich_kombination_solaranlagen
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " kWh" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: solarleistungwatt
      entity: sensor.total_solar_power_kombiniert
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " W" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: batterie
      entity: sensor.acpowerzubatterie_energy_today
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0.1) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " kWh" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: batterieinwatt
      entity: sensor.acpowerzubatterie_energy_power
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 30) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " W" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 30) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: batterieout
      entity: sensor.acpowervonbatterie_energy_today
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0.1) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " kWh" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: batterieoutwatt
      entity: sensor.acpowervonbatterie_energy_power
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " W" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: hausverbrauchwatt
      entity: sensor.total_power_kombiniert
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " W" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: hausverbrauch
      entity: sensor.verbrauch_taglich_nach_abzug
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " kWh" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: netzbezug
      entity: sensor.stromverbrauch_taglich
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " kWh" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: netztbezugwatt
      entity: sensor.total_power
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " W" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
    - element: netzeinspeisung
      entity: sensor.solar_netzeinspeisung_kwh_taglich
      state_action:
        - service: floorplan.text_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0.1) ?
            (Math.round(entity.state * 10) / 10).toString().replace(".", ",") +
            " kWh" : ""}
        - service: floorplan.style_set
          service_data: >-
            ${(entity.state !== undefined && parseFloat(entity.state) > 0) ?
            'display:block' : 'display:none'}
        - service: floorplan.class_set
          service_data:
            class: static-value
card_mod:
  style: |
    ha-card {
      background: none !important;   
      box-shadow: none !important;
      border: none;
    }
```

---

### Layout & Design

Hier gehe ich nochmal etwas näher auf die einzelnen Funktionen ein. Wie die floorplan-card generell funktioniert habe ich bereits zur Custom Pool-Flow-Card erklärt. Dort erfahrt ihr auch, wie man die ID mit Inkscape setzt.

#### 🧩 1. Floorplan-Card Konfiguration (`energy-flow.yaml`)

Die SVG-Grafik wird mit CSS verknüpft, um je nach Entity-Zustand Animationen oder Farben zu steuern.

```yaml
- type: 'custom:floorplan-card'
  config:
    image: /local/energy-flow-small.svg
    stylesheet: /local/energy-flow-card.css
    defaults:
      tap_action:
        action: more-info
```

---

#### 🎨 2. CSS-Stylesheet (`energy-flow-card.css`)

Die CSS-Datei steuert Animationen und Sichtbarkeit innerhalb der SVG.

##### 🔁 Beispiel 1: Animation für Batterie-Ladevorgang

```css
.batteriein {
  animation: batteryFlow 4s infinite;
  transform-box: fill-box;
  transform-origin: center;
}
@keyframes batteryFlow {
  0%   { transform: translate(0, 0); }
  100% { transform: translate(-41px, 5.5px); }
}
```

#### 👻 Beispiel 2: Elemente bei bestimmten Zuständen ausblenden

```css
.entitystate-off {
  display: none !important;
}
```

---

#### 📁 Dateien im Projekt

- `energy-flow.yaml` → Konfiguration für die Floorplan-Card
- `energy-flow-card.css` → Animationen & Styles
- `energy-flow.svg` → Die eigentliche Grafik mit IDs/Klassen für Zuordnung

---
