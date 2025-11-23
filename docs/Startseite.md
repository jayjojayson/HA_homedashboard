
![img](https://github.com/jayjojayson/HA_homedashboard/blob/main/1%20Startseite/startseite_ubersicht_opened.jpg)


# Feiertage

```
event_grouping: true
drop_todayevents_from: "18:00:00"
next_days: 14
pattern:
  - icon: mdi:calendar-check
    color: orange
    type: others
day_style: counter
day_style_format: yyyy.MM.dd
card_style: card
alignment_style: left
color_mode: background
items_per_row: 4
refresh_rate: 600
with_label: true
layout: vertical
type: custom:trash-card
entities:
  - calendar.feiertage_25
filter_events: false
use_summary: false
hide_time_range: false
full_size: false
visibility:
  - condition: state
    entity: calendar.feiertage_25
    state: "on"
card_mod:
  style: |
    ha-card {   
      opacity: 0.5 !important;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      position: relative;
      padding-top: 5px !important; /* Platz oberhalb der Icons */
      padding-bottom: 0px !important; /* Platz unterhalb der Icons */
    }
    /* Skaliert die Icons */
    .icon-container {
      opacity: 0.5 !important;
      transform: scale(1.5); /* Vergrößert nur die Icons */
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      height: 10px;
    }
    /* Begrenzt den Einfluss des Scales auf den Rest */
    .icon-container ha-tile-image {
      margin: 0 !important;
    }
    /* Text kleiner machen */
    .content {
      font-size: 12px !important; /* Anpassung der Textgröße */
      text-align: center;
    }
```

---


# Fensterstatus Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {
      background: none !imortant;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
      border: none !important;
    }
cards:
  - type: custom:auto-entities
    card:
      type: entities
      title: " "
      card_mod:
        style: |
          ha-card {
            background: none !imortant;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
            border: none !important;
            box-shadow: none !important;
            border: none !important;
          }
    filter:
      include:
        - entity_id: binary_sensor.fenster_*
      exclude:
        - state: "off"
    sort:
      method: name
    visibility:
      - condition: state
        entity: sensor.fenster_geoffnet
        state: "on"
```

---

# Haus-Hoftor-Bewegung

```
type: custom:vertical-stack-in-card
card_mod:
  style: |
    ha-card {  
      margin-bottom: -3px; 
      border: none;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
    }
cards:
  - type: horizontal-stack
    cards:
      - type: custom:mushroom-entity-card
        name: Haustür
        entity: lock.hauseingang
        vertical: false
        hide_state: true
        icon_tap_action:
          action: toggle
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border-radius: 0px !important;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              height: 100% !important;
              text-align: center !important;
            }
            .card-content {
              margin: auto !important;
            }
            ha-state-icon {
              color: {% if states('lock.hauseingang') == 'locked' %} green {% else %} red {% endif %};
            } 
            mushroom-shape-icon {
              --shape-color: {% if states('lock.hauseingang') == 'locked' %} rgba(0, 128, 0, 0.4) {% else %} rgba(255, 0, 0, 0.2) {% endif %} !important;
            }
      - type: custom:mushroom-entity-card
        entity: input_button.button_hoftor_automatik_auf_zu
        name: Hoftor
        primary_info: name
        fill_container: false
        secondary_info: none
        icon_color: grey
        icon_tap_action:
          action: toggle
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border-radius: 0px !important;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              height: 100% !important;
              text-align: center !important;
            }
            .card-content {
              margin: auto !important;
            }
      - type: custom:mushroom-entity-card
        entity: switch.licht_garage_wohnzimmer_licht_garage_ch2
        fill_container: false
        icon_color: amber
        icon: mdi:coach-lamp
        name: Garage
        secondary_info: none
        tap_action:
          action: toggle
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border-radius: 0px !important;
              border: none !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              height: 100% !important;
              text-align: center !important;
            }
            .card-content {
              margin: auto !important;
            }
  - type: horizontal-stack
    cards:
      - type: custom:auto-entities
        card:
          show_name: false
          show_icon: true
          show_state: false
          type: glance
          card_mod:
            style: |
              ha-card {
                background: none !important;
                box-shadow: none !important;
                border-radius: 0px !important;
                border: none !important;
                color: var(--primary-color);
                margin-top: -30px;
                margin-bottom: -25px;
                margin-left: 60px !important;
                margin-right: 60px !important;
                padding-top: 2px;
              }
          columns: null
        filter:
          include:
            - entity_id: binary_sensor.bewegung*
              state: "on"
        show_empty: false
        card_mod:
          style: |
            ha-card {
              background: none !important;
              box-shadow: none !important;
              border: none !important;
              border-top: 0px solid var(--secondary-text-color) !important;
              border-top: 0px solid var(--secondary-text-color) !important;     
              padding-top: 0px !important;
              padding-bottom: 0px !important;
            }
  - type: horizontal-stack
    cards:
      - type: picture-glance
        title: " "
        image: https://demo.home-assistant.io/stub_config/kitchen.png
        card_mod:
          style: |
            ha-card { 
              background: none !important;
              box-shadow: none !important;
              border: none;
              border-radius: 0 0 0px 8px !important;
              margin-top: 4px;
              margin-bottom: -4px;
            }
            .box {
              position: absolute;
              left: 0px;
              right: 0px;
              bottom: 0px;
              background-color: var(--ha-picture-card-background-color,rgba(0,0,0,.2)) !important;
              padding: 0px 0px 5px 0px !important;
              display: flex;
              justify-content: flex-center !important;
              flex-direction: row;
            }
        entities:
          - entity: select.hofkamera_ptz_voreinstellung
            tap_action:
              action: call-service
              service: select.select_option
              service_data:
                entity_id: select.hofkamera_ptz_voreinstellung
                option: Straßenansicht
            icon_tap_action:
              action: call-service
              service: select.select_option
              service_data:
                entity_id: select.hofkamera_ptz_voreinstellung
                option: Straßenansicht
          - entity: select.hofkamera_ptz_voreinstellung
            icon: mdi:car
            tap_action:
              action: call-service
              service: select.select_option
              service_data:
                entity_id: select.hofkamera_ptz_voreinstellung
                option: Pool
            icon_tap_action:
              action: call-service
              service: select.select_option
              service_data:
                entity_id: select.hofkamera_ptz_voreinstellung
                option: Pool
          - entity: select.hofkamera_ptz_voreinstellung
            icon: mdi:car-hatchback
            tap_action:
              action: navigate
              navigation_path: "#auto"
            icon_tap_action:
              action: navigate
              navigation_path: "#auto"
          - entity: select.hofkamera_ptz_voreinstellung
            icon: mdi:pool
            tap_action:
              action: navigate
              navigation_path: "#poolkamera"
            icon_tap_action:
              action: navigate
              navigation_path: "#poolkamera"
          - entity: select.hofkamera_ptz_voreinstellung
            icon: mdi:leaf
            tap_action:
              action: navigate
              navigation_path: growstation
            icon_tap_action:
              action: navigate
              navigation_path: growstation
          - entity: select.hofkamera_ptz_voreinstellung
            icon: mdi:printer-3d-nozzle
            tap_action:
              action: navigate
              navigation_path: 3d-drucker
            icon_tap_action:
              action: navigate
              navigation_path: 3d-drucker
        camera_image: camera.hofkamera_klar
      - type: picture-glance
        card_mod:
          style: |
            ha-card { 
              background: none !important;
              box-shadow: none !important;
              border: none;
              border-radius: 0 0 0px 8px !important;
              margin-top: 4px;
              margin-bottom: -4px;
            }
        fit_mode: cover
        title: " "
        image: https://demo.home-assistant.io/stub_config/kitchen.png
        entities: []
        camera_image: camera.hofkamera_2
```

---

# Heizung-Luft-Card

```
type: custom:vertical-stack-in-card
cards:
  - type: custom:mini-graph-card
    entities:
      - sensor.starkvind_luftreiniger_pm2_5
    name: Luftqualität
    color: green
    hours_to_show: 96
    points_per_hour: 0.5
    height: 70
    show:
      labels: true
      name: false
      state: false
      icon: false
    color_thresholds:
      - value: 40
        color: green
      - value: 61
        color: yellow
      - value: 99
        color: orange
      - value: 150
        color: red
    line_color: var(--line-color)
    card_mod:
      style: |
        ha-card {
          background: var(--card-background-color) !important;   
        }
  - type: custom:button-card
    tap_action:
      action: call-service
      service: fan.toggle
      service_data:
        entity_id: fan.starkvind_luftreiniger_ventilator
    styles:
      card:
        - background-color: rgba(22,22,22, 0.4)
        - text-align: center
        - border: none
        - border-radius: 0px
        - padding: 10px
        - "--primary-text-color": |
            [[[
              if (states['sensor.luftquality_color'].state === 'green') return 'green';
              if (states['sensor.luftquality_color'].state === 'yellow') return 'yellow';
              if (states['sensor.luftquality_color'].state === 'orange') return 'orange';
              return 'red';
            ]]]
    name: |
      [[[
        const quality = states['sensor.starkvind_luftreiniger_pm2_5'].state;
        const fanState = states['fan.starkvind_luftreiniger_ventilator'].state === 'on' 
          ? '<ha-icon icon="mdi:fan-auto" style="width: 20px; height: 20px; margin-left: 5px; vertical-align: top; color: var(--primary-color);"></ha-icon>' 
          : '';
        return `Luftqualität - ${quality} µg/m³ ${fanState}`;
      ]]]
  - type: entities
    entities:
      - entity: sensor.wandthermostat_jan_temperatur
        type: custom:multiple-entity-row
        name: Wandthermostat Jan
        state_color: true
        hide_unavailable: true
        entities:
          - entity: sensor.wandthermostat_jan_luftfeuchtigkeit
            name: " "
            styles:
              margin-right: 20px
              text-align: right
              color: "#676767"
              font-size: 13px
        tap_action:
          action: navigate
          navigation_path: "#heizung"
        styles:
          color: var(--primary-text-color)
          font-size: 16px
      - entity: sensor.werkstatt_thermostat_temperatur
        type: custom:multiple-entity-row
        name: Werkstatt
        state_color: true
        hide_unavailable: true
        entities:
          - entity: sensor.werkstattheizung_leistung
            name: " "
            styles:
              margin-right: 20px
              text-align: right
              color: "#676767"
              font-size: 13px
          - entity: sensor.werkstatt_thermostat_luftfeuchtigkeit
            name: " "
            styles:
              margin-right: 20px
              text-align: right
              color: "#676767"
              font-size: 13px
        styles:
          color: var(--primary-text-color)
          font-size: 16px
      - entity: sensor.wandthermostat_mutti_temperatur
        type: custom:multiple-entity-row
        name: Wandthermostat Mutti
        state_color: true
        hide_unavailable: true
        entities:
          - entity: sensor.wandthermostat_mutti_luftfeuchtigkeit
            name: " "
            styles:
              margin-right: 20px
              text-align: right
              color: "#676767"
              font-size: 13px
        tap_action:
          action: navigate
          navigation_path: "#heizungmutti"
        styles:
          color: var(--primary-text-color)
          font-size: 16px
    theme: grey-icon
card_mod:
  style: |
    ha-card {
      background: none !important;   
      border: none;
      margin-bottom: -15px;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
    }
```

---

# Lichterstatus-Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {         
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
      border: none !important;
      padding: 10px 0 10px 0;
      margin-bottom: -15px !important;  
    }
cards:
  - type: horizontal-stack
    cards:
      - type: custom:auto-entities
        card:
          type: entities
          card_mod:
            style: |
              ha-card {
                background: none !important;
                box-shadow: none !important;
                border: none !important;
                border-right: 1px solid grey !important;
                border-radius: 0px !important;
                font-size: 14px;
              }
        filter:
          include:
            - entity_id: light.*
              area: Wohnzimmer
            - entity_id: light.*
              area: Schlafzimmer
            - entity_id: light.*
              area: Flur
            - entity_id: light.*
              area: Küche
            - entity_id: light.*
              area: Bad
            - entity_id: light.*
              area: Werkstatt
            - entity_id: light.*
              area: Garten
          exclude:
            - state: "off"
            - entity_id: light.m5stack_atom_echo_a1449c_m5stack_atom_echo_a1449c
            - entity_id: light.cyd_*
            - entity_id: light.a1_03919c441800312_druckraumbeleuchtung
        sort:
          method: area
      - type: custom:auto-entities
        card:
          type: entities
          card_mod:
            style: |
              ha-card {
                background: none !important;
                border-radius: 0px !important;
                border: none !important; 
                box-shadow: none !important;
                font-size: 14px;
              }
        filter:
          include:
            - entity_id: light.*
              area: Wohnzimmer 2
            - entity_id: light.*
              area: Schlafzimmer 2
            - entity_id: light.*
              area: Flur 2
            - entity_id: light.*
              area: Bad Mutti
            - entity_id: light.*
              area: Küche 2
            - entity_id: light.*
              area: Esszimmer
            - entity_id: light.*
              area: Garage
          exclude:
            - state: "off"
            - entity_id: light.m5stack_atom_echo_a1449c_m5stack_atom_echo_a1449c
            - entity_id: light.cyd_display_backlight
            - entity_id: light.hofkamera_status_led
        sort:
          method: area
visibility:
  - condition: state
    entity: sensor.licht_eingeschaltet
    state: "on"
```

---

# Multimedia TV Card

```
type: custom:vertical-stack-in-card
cards:
  - type: horizontal-stack
    cards:
      - type: tile
        entity: input_button.button_fernseher
        name: TV on
        show_entity_picture: false
        hide_state: true
        vertical: false
        tap_action:
          action: toggle
        features_position: bottom
        card_mod:
          style: |
            ha-card {
              padding: 10px !important;
              background: none !important;
              border-radius: 0px !important;
              border-right: 1px solid grey !important;
              border-left: none !important;
              border-top: none !important;
              border-bottom: none !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              height: 100% !important;
              text-align: center !important;
            }
            .card-content {
              margin: auto !important;
            }
      - type: tile
        entity: input_button.button_fernseher_off
        hide_state: true
        show_entity_picture: false
        vertical: false
        name: TV off
        tap_action:
          action: toggle
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border-radius: 0px !important;
              border-right: 1px solid grey !important;
              border-left: none !important;
              border-top: none !important;
              border-bottom: none !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              height: 100% !important;
              text-align: center !important;
            }
            .card-content {
              margin: auto !important;
            }
      - type: tile
        entity: switch.fernseher_plug_schalter
        hide_state: true
        show_entity_picture: false
        vertical: false
        name: TV Plug
        tap_action:
          action: toggle
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border-radius: 0px !important;
              border: none !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              height: 100% !important;
              text-align: center !important;
            }
            .card-content {
              margin: auto !important;
            }
card_mod:
  style: |
    ha-card {
      border: none !important;
      padding: 5px 0 5px 0; 
      margin: -10px 0 0 0;  
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
    }
```

---

# Multimediaplayer Card

```
type: custom:vertical-stack-in-card
cards:
  - type: custom:mushroom-media-player-card
    entity: media_player.echo_show
    media_controls:
      - play_pause_stop
      - next
      - previous
    volume_controls:
      - volume_mute
      - volume_buttons
      - volume_set
    show_volume_level: true
    collapsible_controls: false
    use_media_info: true
    icon: mdi:cast-audio
  - type: custom:mushroom-chips-card
    card_mod:
      style: |
        ha-card {
          margin: 2px !important; 
          z-index: 1 !important; /* Über dem Hintergrund */
        }
    alignment: center
    chips:
      - type: entity
        entity: script.bb_radio_skript_fur_echo_wohnzimmer_gruppe
        tap_action:
          action: toggle
        content_info: name
        name: BB Radio
      - type: entity
        entity: script.radio_fritz_skript_fur_echo_wohnzimmer_gruppe
        tap_action:
          action: toggle
        content_info: name
        name: Fritz
      - type: entity
        entity: script.bb_radio_skript_fur_echo_wohnzimmer_gruppe
        tap_action:
          action: toggle
        content_info: name
        name: Radio 1
      - type: entity
        entity: script.radio_berliner_rundfunk_skript_fur_echo_wohnzimmer_gruppe
        tap_action:
          action: toggle
        content_info: name
        name: 91,4
card_mod:
  style: |
    ha-card {
      position: relative;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      border: none;
    }
    ha-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url({{ state_attr('media_player.jan_s_echo', 'entity_picture') }}) no-repeat center center;
      background-size: cover;
      filter: blur(30px);
      z-index: 0;
      opacity: {% if is_state('media_player.jan_s_echo', 'playing') or is_state('media_player.jan_s_echo', 'paused') %} 1 {% else %} 0 {% endif %};
      transition: opacity 0.3s ease;
    }
```

---

# Pakete Tracking Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {         
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
      border: none !important;
      margin-top: 20px !important;
    }
cards:
  - type: markdown
    card_mod:
      style: |
        ha-card {
          background: none !important;
          box-shadow: none !important;
          border: none !important;
          border-radius: 0px !important;
          padding: 5px !important;
          white-space: normal;
          overflow: visible;
          word-wrap: break-word;
        }
        code, pre {
          border: none !important;
          background-color: transparent !important; /* Verhindert den Hintergrund für Codeblöcke */
          border-radius: 3px; /* Optional: abgerundete Ecken */
        }
    content: |
      {% if state_attr('sensor.17track_unterwegs', 'packages') | length > 0 %}
        **Paketauskunft:**  
        {% for package in state_attr('sensor.17track_unterwegs', 'packages') %}
          🚚 Paket: {{ package['friendly_name'] if package['friendly_name'] else ' ' }}
            - Status: {{ package['status'] if package['status'] else 'Keine Angabe' }} - {{ package['timestamp'] if package['timestamp'] else 'Unbekannt' }}   
            - Ort: {{ package['location'] if package['location'] else 'Unbekannt' }}  
            - Info: {{ package['info_text'] if package['info_text'] else 'Keine Information' }}  
            - Tracking Nr.: {{ package['tracking_number'] }}  
        {% endfor %}
      {% else %}
        **Es sind keine Pakete unterwegs.**
      {% endif %}
    visibility:
      - condition: numeric_state
        entity: sensor.17track_unterwegs
        above: 0
```

---

# PopUp Heizung Card

```
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: "#heizung"
    show_header: false
    bg_color: rgb(43 53 71)
    shadow_opacity: 0
    width_desktop: 650px
    margin_top_mobile: 0px
    margin_top_desktop: 0vh
  - type: horizontal-stack
    cards:
      - type: custom:mushroom-entity-card
        entity: sensor.wandthermostat_jan_temperatur
        name: Temperatur
        fill_container: false
        layout: vertical
        icon_color: red
        primary_info: state
        secondary_info: none
        card_mod:
          style: |
            ha-card {
              padding-top: 10px;
              border: none !important;
              border-radius: 0px !important;
              background-color: transparent !important;     
            }
            :host {
              --mush-card-primary-font-size: 20px !important;
            } 
      - type: custom:mushroom-entity-card
        entity: sensor.wandthermostat_jan_luftfeuchtigkeit
        name: Luftfeuchte
        layout: vertical
        primary_info: state
        secondary_info: none
        card_mod:
          style: |
            ha-card {
              padding-top: 10px;
              border: none !important;
              border-radius: 0px !important;
              background-color: transparent !important;
            }
            :host {
              --mush-card-primary-font-size: 20px !important;
            }
      - type: custom:mushroom-entity-card
        entity: sensor.thermostat_wohnzimmer_ventil_offnungsgrad
        name: Ventil
        fill_container: false
        icon_color: primary
        layout: vertical
        primary_info: state
        secondary_info: none
        card_mod:
          style: |
            ha-card {
              padding-top: 10px;
              border: none !important;
              border-radius: 0px !important;
              background-color: transparent !important;
            }
            :host {
              --mush-card-primary-font-size: 20px !important;
            }
  - type: thermostat
    entity: climate.wandthermostat_jan_2
    show_current_as_primary: false
    features:
      - style: icons
        type: climate-hvac-modes
    name: " "
    card_mod:
      style: |
        ha-card {
          background-color: transparent;
          border: none !important;
          border-radius: 0px !important;          
          padding-left: 20px !important;          
          padding-right: 20px !important;
        }
        /* Direktes Ansprechen des Shadow-DOMs */
        :host ::part(secondary) {
          display: none !important;
        }
        hui-thermostat-card .label.secondary {
          display: none !important;
        }
  - type: vertical-stack
    cards:
      - type: custom:mushroom-template-card
        primary: Diagramm
        icon: mdi:chart-line
        tap_action:
          action: call-service
          service: input_select.select_next
          service_data:
            entity_id: input_select.diagramm_heizung_anzeige
        card_mod:
          style: |
            ha-card { 
              background-color: transparent;
              border-top: 0px;
              border-left: 0px;
              border-right: 0px;
              border-bottom: 1px;
              border-radius: 0px !important;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100%;
            }
      - type: conditional
        conditions:
          - entity: input_select.diagramm_heizung_anzeige
            state: Diagramm
        card:
          type: custom:tabbed-card
          styles:
            "--mdc-theme-primary": var(--primary-color)
            "--mdc-tab-text-label-color-default": grey
            "--mdc-typography-button-font-size": 12px
            "--mdc-typography-button-text-transform": capitalize
          tabs:
            - card:
                type: horizontal-stack
                cards:
                  - type: history-graph
                    show_names: false
                    entities:
                      - entity: climate.thermostat_wohnzimmer_2
                    hours_to_show: 24
                    refresh_interval: 10
                    logarithmic_scale: false
                    card_mod:
                      style: |
                        ha-card {
                          background-color: transparent;
                          border-radius: 0px !important;
                          border: none !important;
                          margin-left: 30px;
                          margin-right: 30px;
                          transition: opacity 0.5s ease, transform 0.5s ease;
                          opacity: {{ 1 if states('input_select.diagramm_heizung_anzeige') == 'Diagramm' else 0 }};
                          transform: {{ 'scale(1)' if states('input_select.diagramm_heizung_anzeige') == 'Diagramm' else 'scale(0.95)' }};
                        }
                        .content {
                          padding: 0px !important;
                          padding-bottom: 10px !important;
                        }
              attributes:
                label: Wohnzi.
                icon: mdi:history
            - card:
                type: horizontal-stack
                cards:
                  - type: history-graph
                    show_names: false
                    entities:
                      - entity: climate.thermostat_bad
                    hours_to_show: 24
                    refresh_interval: 10
                    logarithmic_scale: false
                    card_mod:
                      style: |
                        ha-card {
                          background-color: transparent;
                          border-radius: 0px !important;
                          border: none !important;
                          margin-left: 30px;
                          margin-right: 30px;
                          transition: opacity 0.5s ease, transform 0.5s ease;
                          opacity: {{ 1 if states('input_select.diagramm_heizung_anzeige') == 'Diagramm' else 0 }};
                          transform: {{ 'scale(1)' if states('input_select.diagramm_heizung_anzeige') == 'Diagramm' else 'scale(0.95)' }};
                        }
                        .content {
                          padding: 0px !important;
                          padding-bottom: 10px !important;
                        }
              attributes:
                label: Bad
                icon: mdi:history
            - card:
                type: horizontal-stack
                cards:
                  - type: history-graph
                    show_names: false
                    entities:
                      - entity: climate.thermostat_schlafzimmer
                    hours_to_show: 24
                    refresh_interval: 10
                    logarithmic_scale: false
                    card_mod:
                      style: |
                        ha-card {
                          background-color: transparent;
                          border-radius: 0px !important;
                          border: none !important;
                          margin-left: 30px;
                          margin-right: 30px;
                          transition: opacity 0.5s ease, transform 0.5s ease;
                          opacity: {{ 1 if states('input_select.diagramm_heizung_anzeige') == 'Diagramm' else 0 }};
                          transform: {{ 'scale(1)' if states('input_select.diagramm_heizung_anzeige') == 'Diagramm' else 'scale(0.95)' }};
                        }
                        .content {
                          padding: 0px !important;
                          padding-bottom: 10px !important;
                        }
              attributes:
                label: Schlafzi.
                icon: mdi:history
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin-left: 20px;
            margin-right: 20px;
        }  
  - type: custom:mushroom-climate-card
    entity: climate.thermostat_bad
    name: Bad
    hvac_modes:
      - auto
      - "off"
    show_temperature_control: true
    fill_container: false
    collapsible_controls: true
    layout: horizontal
    tap_action:
      action: more-info
    icon: mdi:heat-wave
    card_mod:
      style: |
        ha-card {
          height: 70px !important;
          padding-left: 10px;
          padding-top: 8px;
          padding-bottom: 0px;
          padding-right: 10px;
          border: none !important;
          border-radius: 0px !important;
          background-color: transparent !important;
        } 
        mushroom-card::after {
          content: "Ventil: {{ states('sensor.thermostat_bad_ventil_offnungsgrad') }}%";
          position: absolute;
          top: 5px;
          right: 80px;
          font-size: var(--card-secondary-font-size);
          color: var(--secondary-text-color);
        }
        ha-state-icon { 
          color: {% if state_attr('climate.thermostat_bad', 'hvac_action') == 'heating' %} orange {% else %} grey {% endif %};
        } 
        mushroom-shape-icon {
          --shape-color: {% if state_attr('climate.thermostat_bad', 'hvac_action') == 'heating' %} rgba(214, 136, 49, 0.3) {% else %} rgba(158, 158, 158, 0.1) {% endif %} !important;
  - type: custom:mushroom-climate-card
    entity: climate.thermostat_schlafzimmer
    name: Schlafzimmer
    hvac_modes:
      - auto
      - "off"
    show_temperature_control: true
    fill_container: false
    collapsible_controls: true
    layout: horizontal
    tap_action:
      action: more-info
    icon: mdi:heat-wave
    card_mod:
      style: |
        ha-card {
          height: 70px !important;
          padding-left: 10px;
          padding-top: 0px;
          padding-bottom: 0px;
          padding-right: 10px;
          border: none !important;
          border-radius: 0px !important;
          background-color: transparent !important;
        }
        mushroom-card::after {
          content: "Ventil: {{ states('sensor.thermostat_schlafzimmer_ventil_offnungsgrad') }}%";
          position: absolute;
          top: 0px;
          right: 80px;
          font-size: var(--card-secondary-font-size);
          color: var(--secondary-text-color);
        }
        ha-state-icon { 
          color: {% if state_attr('climate.thermostat_schlafzimmer', 'hvac_action') == 'heating' %} orange {% else %} grey {% endif %};
        } 
        mushroom-shape-icon {
          --shape-color: {% if state_attr('climate.thermostat_schlafzimmer', 'hvac_action') == 'heating' %} rgba(214, 136, 49, 0.3) {% else %} rgba(158, 158, 158, 0.1) {% endif %} !important;
```

---

# PopUp Kamera Card

```
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: "#poolkamera"
    show_header: false
    bg_color: rgb(43 53 71)
    shadow_opacity: 0
    width_desktop: 650px
    margin_top_desktop: 15vh
    card_mod:
      style: |
        ha-card {
          border: none;
          border-bottom-right-radius: 0px !important;          
          border-bottom-left-radius: 0px !important;
          z-index: 1 !important; /* Über dem Hintergrund */
        }
  - type: picture-glance
    camera_view: auto
    title: " "
    image: https://demo.home-assistant.io/stub_config/kitchen.png
    entities:
      - entity: select.poolkamera_ptz_voreinstellung
        icon: mdi:pool
        tap_action:
          action: call-service
          service: select.select_option
          service_data:
            entity_id: select.poolkamera_ptz_voreinstellung
            option: Poolansicht
        icon_tap_action:
          action: call-service
          service: select.select_option
          service_data:
            entity_id: select.poolkamera_ptz_voreinstellung
            option: Poolansicht
      - entity: select.poolkamera_ptz_voreinstellung
        icon: mdi:store-search
        tap_action:
          action: call-service
          service: select.select_option
          service_data:
            entity_id: select.poolkamera_ptz_voreinstellung
            option: Terrasse
        icon_tap_action:
          action: call-service
          service: select.select_option
          service_data:
            entity_id: select.poolkamera_ptz_voreinstellung
            option: Terrasse
    camera_image: camera.poolkamera_klar
    card_mod:
      style: |
        .box {
          position: absolute;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background-color: var(--ha-picture-card-background-color,rgba(0,0,0,.2)) !important;
          padding: 0px 0px 0px 0px !important;
          display: flex;
          justify-content: flex-center !important;
          flex-direction: row;
        }
  - type: tile
    entity: input_button.button_fernseher
    icon: mdi:grass
    hide_state: true
    show_entity_picture: false
    vertical: false
    name: Gartenansicht
    tap_action:
      action: navigate
      navigation_path: /dashboard-test/garten
    card_mod:
      style: |
        ha-card {
          background: none !important;
          border-radius: 0px !important;
          border-right: none !important; 
          border-left: none !important; 
          border-top: none !important; 
          border-bottom: none !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 100% !important;
          text-align: center !important;
        }
        .card-content {
          margin: auto !important;
        }
```

---

# PopUp Grid - Solar Card

```
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: "#strom"
    show_header: false
    bg_color: rgb(43 53 71)
    shadow_opacity: 0
    width_desktop: 650px
    margin_top_desktop: 0vh
  - type: custom:stack-in-card
    card_mod:
      style: |
        ha-card {
          background: none !important;
          border: none !important;
          border-radius: 0px !important;
        }
    cards:
      - type: custom:mini-graph-card
        entities:
          - entity: sensor.growatt_todaygenerateenergy
            name: Ertrag
            show_state: false
          - entity: sensor.energy_production_today_3
            name: Vorhersage
            show_state: false
            color: rgba(122,122,122,0.3)
            y_axis: secondary
        name: Ertrag Heute
        hours_to_show: 72
        points_per_hour: 0.25
        height: 80
        show:
          labels: true
          name: false
          state: false
          icon: false
        color_thresholds:
          - value: 1
            color: grey
          - value: 2
            color: orange
          - value: 3
            color: yellow
          - value: 5
            color: green
          - value: 10
            color: blue
        card_mod:
          style: |
            ha-card {
              margin-top: 1px;
              border: none !important;
              border-radius: 0px !important;
              --line-color: {{ states('sensor.solar_line_color') }};
            }
      - type: custom:button-card
        tap_action:
          action: navigate
          navigation_path: /49686a9f_evcc
        styles:
          card:
            - background-color: rgba(22,22,22, 0.4)
            - text-align: center
            - border: none
            - border-radius: 0px
            - padding: 10px
            - "--primary-text-color": |
                [[[
                  if (states['sensor.solar_color'].state === 'grey') return 'grey';
                  if (states['sensor.solar_color'].state === 'darkyellow') return 'darkyellow';
                  if (states['sensor.solar_color'].state === 'yellow') return 'yellow';
                  if (states['sensor.solar_color'].state === 'darkgreen') return 'darkgreen';
                  return 'green';
                ]]]
        name: |
          [[[
            const solarTotal = states['sensor.growatt_todaygenerateenergy'].state;
            return `Solarertrag heute: ${solarTotal} kWh`;
          ]]]
      - type: entities
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border: none !important;
              border-radius: 0px !important;
            }
        entities:
          - entity: sensor.growatt_todaygenerateenergy_euro
            type: custom:multiple-entity-row
            name: Ertrag Heute €
            state_color: true
            hide_unavailable: true
            entities:
              - entity: sensor.solcast_pv_forecast_prognose_heute
                name: " "
                styles:
                  margin-top: 2px
                  margin-right: 20px
                  text-align: right
                  color: "#676767"
                  font-size: 13px
              - entity: sensor.solcast_pv_forecast_prognose_morgen
                name: " "
                styles:
                  margin-top: 2px
                  margin-right: 20px
                  text-align: right
                  color: "#676767"
                  font-size: 13px
          - entity: sensor.growatt_totalgenerateenergy
            name: Ertrag Gesamt kWh
          - entity: sensor.growatt_totalgenerateenergy_euro
            name: Ertrag Gesamt €
            unit_of_measurement: €
            icon: mdi:counter
          - entity: sensor.solar_netzeinspeisung_kwh
            name: Solar Netzeinspeisung Gesamt
          - entity: sensor.stromverbrauch_gesamt_kwh
            name: Stromverbrauch Gesamt
        theme: grey-icon
      - type: custom:bar-card
        card_mod:
          style: |
            ha-card {
              border: none !important;
              border-radius: 0px !important;
            }               
            bar-card-backgroundbar { 
              border-radius: 3px !important;  
            }
            bar-card-currentbar {
              border-radius: 3px !important;  
            }
        name: Aktueller Strombedarf
        positions:
          name: inside
          value: inside
          indicator: "off"
          icon: "off"
        unit_of_measurement: W
        max: 2500
        height: 25px
        severity:
          - color: "#7bc13c"
            from: 0
            to: 50
          - color: "#c1bb3c"
            from: 50
            to: 340
          - color: orange
            from: 340
            to: 500
          - color: darkorange
            from: 500
            to: 1000
          - color: "#ff0000"
            from: 1000
            to: 50000
        entities:
          - entity: sensor.total_power_nur_verbrauch
      - type: custom:stack-in-card
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border: none !important;
              border-radius: 0px !important;
            }
        cards:
          - type: horizontal-stack
            cards:
              - type: custom:bar-card
                card_mod:
                  style: |
                    ha-card {
                      border: none !important;
                      border-radius: 0px !important;
                      --primary-color: #7bc13c !important;          
                    }
                    #states {
                      padding: 0 16px 0 16px !important;
                    } 
                    bar-card-currentbar {
                      border-radius: 3px !important; 
                        
                      {% if states['switch.acpowervonbatterie'].state == 'on' %}
                      background: linear-gradient(270deg, red, orange, green);
                      background-size: 300% 100%;
                      animation: gradientShiftNormal 3s linear infinite;
                      clip-path: inset(0 calc(100% - var(--bar-percent)) 0 0);

                      {% elif states['switch.acpowerzubatterie'].state == 'on' %}
                      background: linear-gradient(270deg, red, orange, green);
                      background-size: 300% 100%;
                      animation: gradientShiftReverse 3s linear infinite;
                      clip-path: inset(0 calc(100% - var(--bar-percent)) 0 0);

                      {% else %}
                      background: linear-gradient(to right, darkorange 15%, orange 25%, yellow 50%, green 100%);
                      clip-path: inset(0 calc(100% - var(--bar-percent)) 0 0);
                      {% endif %}
                    }                  
                    bar-card-backgroundbar { 
                      border-radius: 3px !important; 
                      background: linear-gradient(to right, darkorange 15%, orange 25%, yellow 50%, green 100%);
                      clip-path: inset(0 calc(100% - var(--bar-percent)) 0 0);
                    }
                    @keyframes gradientShiftNormal {
                      0% { background-position: 0% 50%; }
                      100% { background-position: 100% 50%; }
                    }
                    @keyframes gradientShiftReverse {
                      100% { background-position: 0% 50%; }
                      0% { background-position: 100% 50%; }
                    }
                name: Hausspeicher
                positions:
                  name: inside
                  value: inside
                  indicator: "off"
                  icon: "off"
                unit_of_measurement: "%"
                max: 100
                height: 20px
                severity:
                  - color: "#ff0000"
                    from: 0
                    to: 25
                  - color: darkorange
                    from: 25
                    to: 50
                  - color: orange
                    from: 50
                    to: 75
                  - color: "#7bc13c"
                    from: 75
                    to: 100
                entities:
                  - entity: sensor.batterie_ladezustand
                tap_action:
                  action: navigate
                  navigation_path: "#batterie"
      - type: custom:auto-entities
        card_mod:
          style: |
            ha-card {
              background-color: transparent !important;
              border: none !important;
              border-radius: 0px !important;
            }
        card:
          type: custom:bar-card
          card_mod:
            style: |
              ha-card {
                border: none !important;
                border-radius: 0px !important;
              }               
              bar-card-backgroundbar { 
                border-radius: 3px !important;  
              }
              bar-card-currentbar {
                border-radius: 3px !important;  
              }
          positions:
            name: inside
            value: inside
            indicator: "off"
            icon: "off"
          unit_of_measurement: W
          max: 1000
          severity:
            - color: "#7bc13c"
              from: 0
              to: 50
            - color: "#c1bb3c"
              from: 50
              to: 200
            - color: orange
              from: 200
              to: 500
            - color: darkorange
              from: 500
              to: 1400
            - color: "#ff0000"
              from: 1400
              to: 50000
          height: 20px
          decimals: 2
          style: |
            #states { padding: 0 } 
            bar-card-name, bar-card-value {
              color: #ffffff;
            }
            bar-card-value {
              font-weight: bold;
            }
            bar-card-indicator {
              transform: scaleY(-1);
            }
          stack: vertical
          direction: right
        filter:
          include:
            - entity_id: sensor.innenlufter_shellyplug_switch_0_power
            - entity_id: sensor.growlampe_leistung
            - entity_id: sensor.wasserlauf_leistung
            - entity_id: sensor.stromungspumpen_leistung
            - entity_id: sensor.hauptpumpe_shelly_plug_switch_0_power
            - entity_id: sensor.skimmerpumpe_shelly_plug_switch_0_power
            - entity_id: sensor.poollicht_leistung
            - entity_id: sensor.werkstattheizung_leistung
            - entity_id: sensor.waschmaschine_leistung_2
            - entity_id: sensor.trockner_leistung_3
            - entity_id: sensor.3d_drucker_leistung
            - entity_id: sensor.herdlicht_rechts_leistung
            - entity_id: sensor.herdlicht_links_leistung
            - entity_id: sensor.sockelleisten_leistung
            - entity_id: sensor.weihnachtslicht_leistung
            - entity_id: sensor.lavalampe_leistung
            - entity_id: sensor.computer_leistung
            - entity_id: sensor.fernseher_plug_leistung
            - entity_id: sensor.fernseher_mutti_leistung_3
            - entity_id: sensor.fernseher_plug_mutti_schlafzimmer_leistung
            - entity_id: sensor.tablet_plug_leistung
          exclude:
            - state: < 2
        sort:
          method: state
          numeric: true
          reverse: true
```

---

# PopUp Regenradar Wetter Card

```
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: "#wetter"
    show_header: false
    bg_color: rgb(43 53 71)
    shadow_opacity: 0
    width_desktop: 650px
    margin_top_desktop: 10vh
  - type: iframe
    url: >-
      https://radar.wo-cloud.com/mobile/embedded?wrx=52.367,14.067&wrm=8&wry=52.367,14.067
    aspect_ratio: 100%
```

---

# Sidebar Menu Card

```
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
            width: 300px !important;            
            height:80%;
            padding: 15px;
            margin-top: 75px;
            opacity: 1;
            z-index: 2;
            position: fixed;
            top:0;
            right:0;
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
                  icon: mdi:home-lightning-bolt-outline
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

---

# Tankstellen Card

```
type: custom:vertical-stack-in-card
cards:
  - type: entities
    entities:
      - entity: sensor.gunstigster_benzinpreis_strasse
        type: custom:multiple-entity-row
        name: " "
        icon: none
        state_color: true
        hide_unavailable: true
        styles:
          color: var(--primary-color)
          font-size: 14px
    theme: grey-icon
    card_mod:
      style: |
        ha-card {   
          background: none !important;  
          box-shadow: none !important;   
          border: none !important;
          height: 65px !important;
          padding-right: 5px
          position: absolute;
          margin-bottom: -75px !important;
        }
  - type: custom:mini-graph-card
    card_mod:
      style: |
        ha-card {   
          background: none !important;  
          box-shadow: none !important;   
          border: none !important;
          height: 65px !important;
          padding-right: 5px
        }
        .state__value {
          font-size: 2.0em !important;
          margin-right: 0.25rem;
          line-height: 1.2em;
          color: var(--primary-color);
          padding-left: 5px !important;
          margin-top: 10px !important;
        }
        .state__uom {
          margin-top: 0.75em !important;
        }
    entities:
      - sensor.gunstigster_benzinpreis
    name: Ertrag Heute
    hours_to_show: 72
    points_per_hour: 0.4
    height: 70
    show:
      labels: true
      name: false
      state: true
      icon: false
    color_thresholds:
      - value: 1.4
        color: grey
      - value: 1.67
        color: darkgreen
      - value: 1.75
        color: steelblue
      - value: 1.83
        color: yellow
      - value: 2
        color: orange
    line_color: var(--line-color)
```

---

# Uhr, Müll, Personen Card

```
type: custom:vertical-stack-in-card
card_mod:
  style: |
    ha-card {  
      margin-bottom: 2px; 
      border: none;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
    }
cards:
  - type: custom:layout-card
    layout_type: custom:grid-layout
    layout:
      grid-template-columns: 1fr auto
      grid-template-rows: auto
    cards:
      - type: custom:digital-clock
        dateFormat:
          weekday: short
          day: 2-digit
          month: short
          year: numeric
        timeFormat:
          hour: 2-digit
          minute: 2-digit
        card_mod:
          style: |
            ha-card {
              justify-self: center; /* Zentriert die Uhrzeit, wenn keine Tonne da ist */
              background-color: transparent !important;
              color: var(--primary-color) !important;
              border: none !important;
              margin-top: 5px;
            }
      - type: custom:vertical-stack-in-card
        card_mod:
          style: |
            ha-card {
              background-color: transparent !important;
              color: var(--primary-color) !important;
              border: none !important;
              border-radius: 0px !important; 
              zoom: 80%; 
            }
        cards:
          - type: custom:trash-card
            event_grouping: true
            drop_todayevents_from: "8:00:00"
            next_days: 1
            pattern:
              - icon: mdi:flower
                color: green
                type: organic
                pattern: Biotonne
                image: /local/bilder/gruen.jpg
              - icon: mdi:newspaper
                color: blue
                type: paper
                pattern: Papiertonne
                image: /local/bilder/blau.png
              - icon: mdi:recycle-variant
                color: amber
                type: recycle
                pattern: Gelber Sack
                image: /local/bilder/gelb.png
              - icon: mdi:trash-can-outline
                color: grey
                type: waste
                pattern: Restabfall
                image: /local/bilder/schwarz.png
              - icon: mdi:dump-truck
                color: purple
                type: others
            day_style: counter
            alignment_style: center
            color_mode: icon
            items_per_row: 2
            refresh_rate: 600
            with_label: false
            layout: vertical
            entities:
              - calendar.abfall
            filter_events: false
            use_summary: false
            hide_time_range: false
            full_size: false
            card_mod:
              style: |
                ha-card {
                  background-color: transparent !important;
                  color: var(--primary-color) !important;
                  border: none !important;
                  border-radius: 0px !important;
                  position: relative;
                  padding-bottom: 0px !important;
                  width: 100px;
                }
                .card-container {
                    display: block !important;
                }
                /* Skaliert die Icons */
                .icon-container {
                  transform: scale(1.5); /* Vergrößert nur die Icons */
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-top: 12px;
                }
                /* Begrenzt den Einfluss des Scales auf den Rest */
                .icon-container ha-tile-image {
                  margin: 0 !important;
                }
                /* Text kleiner machen */
                .content {
                  font-size: 12px !important; /* Anpassung der Textgröße */
                  text-align: center;
                }    
  - type: horizontal-stack
    cards:
      - type: custom:vertical-stack-in-card
        cards:
          - type: horizontal-stack
            cards:
              - type: custom:mushroom-entity-card
                entity: sensor.steps_kilometer_taglich
                name: Jan
                primary_info: state
                fill_container: false
                secondary_info: none
                icon: mdi:walk
                icon_color: grey
                tap_action:
                  action: more-info
                  entity: person.jayjojayson
                card_mod:
                  style: |
                    ha-card {
                      background: none !important;
                      border-radius: 0px !important;
                      border-right: 1px solid grey !important; 
                      border-left: none !important; 
                      border-top: none !important; 
                      border-bottom: none !important;
                      display: flex !important;
                      align-items: center !important;
                      justify-content: center !important;
                      height: 75% !important;
                      text-align: center !important;
                      zoom: 75%; 
                      padding-right: 10px; 
                    }
                    mushroom-shape-icon {
                      --shape-color: none !important;
                    }
                    ha-state-icon {
                      margin-right: -20px;
                    } 
              - type: custom:mushroom-entity-card
                entity: device_tracker.samsung_s24
                name: Jan
                primary_info: name
                fill_container: false
                secondary_info: none
                icon: m3of:person-4
                icon_color: grey
                tap_action:
                  action: more-info
                  entity: person.jayjojayson
                card_mod:
                  style: |
                    ha-card {
                      background: none !important;
                      border-radius: 0px !important;
                      border-right: 1px solid grey !important; 
                      border-left: none !important; 
                      border-top: none !important; 
                      border-bottom: none !important;
                      display: flex !important;
                      align-items: center !important;
                      justify-content: center !important;
                      height: 75% !important;
                      text-align: center !important;
                      zoom: 85%;
                      padding-right: 30px; 
                    }
                    mushroom-shape-icon {
                      --shape-color-disabled: transparent !important;
                      --shape-color: none !important;
                    }
                    ha-state-icon {
                      margin-right: -15px;
                      color: {% if states('device_tracker.samsung_s24') == 'home' %} green {% else %} grey {% endif %};
                    } 
              - type: custom:mushroom-entity-card
                entity: device_tracker.23124ra7eo
                name: Mutti
                primary_info: name
                fill_container: false
                secondary_info: none
                icon: m3of:person-3
                icon_color: grey
                tap_action:
                  action: more-info
                  entity: person.mutti
                card_mod:
                  style: |
                    ha-card {
                      background: none !important;
                      border-radius: 0px !important;
                      border-right: 1px solid grey !important; 
                      border-left: none !important; 
                      border-top: none !important; 
                      border-bottom: none !important;
                      display: flex !important;
                      align-items: center !important;
                      justify-content: center !important;
                      height: 75% !important;
                      text-align: center !important;
                      zoom: 85%;
                      padding-right: 30px; 
                    }
                    mushroom-shape-icon {
                      --shape-color-disabled: transparent !important;
                      --shape-color: none !important;
                    }
                    ha-state-icon {
                      margin-right: -15px;
                    } 
                    ha-state-icon {
                      margin-right: -15px;
                      color: {% if states('person.mutti') == 'home' %} green {% else %} grey {% endif %};
                    }
              - type: custom:mushroom-entity-card
                entity: sensor.23124ra7eo_steps_sensor
                name: Mutti
                primary_info: state
                fill_container: false
                secondary_info: none
                icon: mdi:walk
                icon_color: grey
                icon_tap_action:
                  action: toggle
                card_mod:
                  style: |
                    ha-card {
                      background: none !important;
                      border-radius: 0px !important;
                      border: none !important;
                      display: flex !important;
                      align-items: center !important;
                      justify-content: center !important;
                      height: 75% !important;
                      text-align: center !important;
                      zoom: 75%;
                      padding-right: 30px; 
                    }
                    mushroom-shape-icon {
                      --shape-color: none !important;
                    } 
                    ha-state-icon {
                      margin-right: -20px;
                    } 
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border-radius: 0px !important;
              border: none !important; 
              margin-top: -10px !important; margin-bottom: -3px; 
            }
```

---

# Wetter Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {  
      margin-bottom: -3px; 
      border: none;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;   
    }
cards:
  - type: custom:vertical-stack-in-card
    card_mod:
      style: |
        :host {
          border: none;  
          --ha-card-background: none !important;          
          --ha-card-border: none !important;
        }
        ha-card {
          border: none;  
        }
    cards:
      - type: horizontal-stack
        cards:
          - type: entity
            entity: sensor.aussentemperatur_temperatur
            name: " "
            state_color: false
            icon: none
            theme: Temps
            card_mod:
              style: |
                ha-card {
                  width: 130%;
                  box-shadow: none !important;
                  border: none !important;
                  background: transparent !important;                  
                  border-radius: 0px !important;  
                  margin-right: 30px !important; 
                  margin-top: -10px !important;
                  text-align: center;
                  font-weight: bold !important; 
                  --primary-text-color:
                      {% if is_state('sensor.temperature_color', 'steelblue') %}
                        steelblue
                      {% elif is_state('sensor.temperature_color', 'green') %}
                        green
                      {% elif is_state('sensor.temperature_color', 'orange') %}
                        orange
                      {% else %}
                        red
                      {% endif %};
                }
                .value {
                  font-size: 30px !important; /* Ändere die Schriftgröße */
                }
                .measurement {
                    font-size: 18px;
                    color: var(--primary-text-color) !important;
                }
          - type: custom:compass-card
            indicator_sensors:
              - sensor: sensor.fuerstenwalde_spree_windrichtung
                indicator:
                  image: arrow_inward
            value_sensors:
              - sensor: sensor.fuerstenwalde_spree_windgeschwindigkeit
            compass:
              east:
                show: true
              west:
                show: true
              south:
                show: true
              north:
                show: true
                offset: 150
            card_mod:
              style: |
                ha-card {
                  background: none !important;
                  box-shadow: none !important;
                  border: none !important;
                  border-radius: 0px !important;
                  zoom: 50%;
                  margin-top: 15px;
                  margin-left: 65px;
                  width: 70%;
                }
            language: de
          - type: custom:mushroom-entity-card
            entity: sensor.aussentemperatur_luftfeuchtigkeit
            tap_action:
              action: navigate
              navigation_path: "#wetter"
            name: " "
            primary_info: state
            secondary_info: none
            icon_type: none
            card_mod:
              style: |
                :host {
                  --ha-card-background: transparent !important;                                    
                  border: none !important;
                  text-align: center;
                  --ha-card-border-radius: 0px !important;     
                  margin-right: 10px !important;         
                  margin-left: 10px !important;           
                  margin-top: 30px !important;     
                  --mush-card-primary-font-size: 25px !important;
                  --mush-card-primary-color:
                      {% if is_state('sensor.temperature_color', 'steelblue') %}
                        steelblue
                      {% elif is_state('sensor.temperature_color', 'green') %}
                        green
                      {% elif is_state('sensor.temperature_color', 'orange') %}
                        orange
                      {% else %}
                        red
                      {% endif %};
                }
                ha-card {
                  box-shadow: none !important; /* Schatten und Rahmen entfernt */
                  border: none !important;     /* Explizit Rahmen entfernt */
                }
      - type: custom:weather-chart-card
        entity: weather.fuerstenwalde_spree
        show_main: false
        show_temperature: false
        show_current_condition: false
        show_attributes: false
        show_time: false
        show_time_seconds: false
        show_day: false
        show_date: false
        show_humidity: false
        show_pressure: false
        show_wind_direction: false
        show_wind_speed: false
        show_sun: true
        show_feels_like: false
        show_dew_point: false
        show_wind_gust_speed: false
        show_visibility: false
        show_last_changed: false
        use_12hour_format: false
        icons_size: "45"
        animated_icons: true
        icon_style: style1
        autoscroll: false
        forecast:
          precipitation_type: rainfall
          show_probability: false
          labels_font_size: "13"
          precip_bar_size: "0"
          style: style2
          show_wind_forecast: false
          condition_icons: true
          round_temp: false
          type: daily
          number_of_forecasts: "7"
          disable_animation: false
          chart_height: "160"
        units:
          speed: ""
        card_mod:
          style: |
            .card {
              padding-top: 0px !important;
            }        
            main {
              margin-bottom: 0px !important;
            }
            main img {
              margin: 0 auto !important;
              margin-top: -65px !important;
            }
```
