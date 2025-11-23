![image](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/refs/heads/main/7%20Unterseiten/2%20Roboter/roboterseite_ubersicht.jpg)

# Dreame Card

```
type: custom:tabbed-card
styles:
  "--mdc-theme-primary": var(--primary-color)
  "--mdc-tab-text-label-color-default": grey
  "--mdc-typography-button-font-size": 14px
  "--mdc-typography-button-text-transform": capitalize
tabs:
  - card:
      type: custom:stack-in-card
      card_mod:
        style: |
          ha-card {
            padding: 10px;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
            border: none;
          }
      cards:
        - type: horizontal-stack
          cards:
            - type: picture-entity
              card_mod:
                style: |
                  ha-card {
                    border-radius: 5px !important;
                  }
              show_state: false
              show_name: false
              aspect_ratio: 30%
              entity: sensor.dreamebot_l10s_ultra_cleaning_history
              image: /api/image/serve/8a6224a7414dcefb3f793aae2f528d5a/512x512
        - type: horizontal-stack
          cards:
            - type: tile
              entity: input_button.button_dreame_bad_saugen
              hide_state: true
              vertical: true
              name: Bad saugen
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: input_button.button_dreame_kuche_saugen
              hide_state: true
              vertical: true
              name: Küche saugen
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: input_button.button_dreame_eingangsbereich
              hide_state: true
              vertical: true
              name: Eingangsbereich saugen
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
        - type: custom:mod-card
          card: null
          card_mod:
            style: |
              ha-card {
                height: 1px;
                border-bottom: 1px;
                background-color: grey !important;
                margin-left: 20px;
                margin-right: 20px;
              } 
        - type: horizontal-stack
          cards:
            - type: tile
              entity: vacuum.dreamebot_l10s_ultra
              name: On-/Off
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;                  
                  }
            - type: tile
              entity: sensor.dreamebot_l10s_ultra_battery_level
              name: Battery Level
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;                  
                  }
        - type: horizontal-stack
          cards:
            - type: tile
              entity: select.dreamebot_l10s_ultra_cleaning_mode
              name: Cleaning Mode
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;                  
                  }
            - type: tile
              entity: button.dreamebot_l10s_ultra_start_auto_empty
              name: Leerung starten
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;
                  }
        - type: horizontal-stack
          cards:
            - type: tile
              entity: button.dreamebot_l10s_ultra_start_drying
              name: Trocknung on/off
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;
                  }
            - type: tile
              entity: button.dreamebot_l10s_ultra_self_clean
              name: Mop Reinigung
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;
                  }
        - type: custom:mod-card
          card: null
          card_mod:
            style: |
              ha-card {
                height: 1px;
                border-bottom: 1px;
                background-color: grey !important;
                margin-left: 20px;
                margin-right: 20px;
              }
        - type: custom:tabbed-card
          styles:
            "--mdc-theme-primary": var(--primary-color)
            "--mdc-tab-text-label-color-default": grey
            "--mdc-typography-button-font-size": 14px
            "--mdc-typography-button-text-transform": capitalize
          tabs:
            - card:
                type: horizontal-stack
                cards:
                  - type: entities
                    card_mod:
                      style: |
                        ha-card {
                          background: none !important;
                          box-shadow: none !important;
                          border: none !important;
                          border-radius: 0px !important;
                        }
                    entities:
                      - entity: switch.dreamebot_l10s_ultra_ai_furniture_detection
                        name: Möbel Erkennung
                        secondary_info: none
                      - entity: switch.dreamebot_l10s_ultra_ai_obstacle_detection
                        name: AI Objekterkennung
                      - entity: switch.dreamebot_l10s_ultra_auto_drying
                        name: automat. Trocknung
                      - entity: switch.dreamebot_l10s_ultra_auto_dust_collecting
                        name: automat. Absaugung
                      - entity: switch.dreamebot_l10s_ultra_dnd
                        name: Nicht Stören Modus
              attributes:
                icon: mdi:cog
            - card:
                type: entities
                card_mod:
                  style: |
                    ha-card {
                      background: none !important;
                      box-shadow: none !important;
                      border: none !important;
                      border-radius: 0px !important;
                    }
                entities:
                  - entity: switch.dreamebot_l10s_ultra_carpet_boost
                    name: Teppich Boost
                  - entity: switch.dreamebot_l10s_ultra_carpet_recognition
                    name: Teppich Erkennung
                  - entity: switch.dreamebot_l10s_ultra_collision_avoidance
                    name: Kollisionsvermeidung
                  - entity: switch.dreamebot_l10s_ultra_obstacle_avoidance
                    name: Hindernisvermeidung
                  - entity: number.dreamebot_l10s_ultra_volume
                    name: Lautstärke
              attributes:
                icon: mdi:cog
    attributes:
      label: Steuerung
      icon: mdi:robot-vacuum
  - card:
      type: custom:stack-in-card
      card_mod:
        style: |
          ha-card {
            padding: 10px;
          }
      cards:
        - type: horizontal-stack
          cards:
            - type: picture-entity
              card_mod:
                style: |
                  ha-card {
                    border-radius: 5px !important;
                  }
              show_state: false
              show_name: true
              aspect_ratio: 30%
              camera_view: auto
              entity: camera.dreamebot_l10s_ultra_map
              image: https://demo.home-assistant.io/stub_config/bedroom.png
              name: letzte Reinigungskarte
              camera_image: camera.dreamebot_l10s_ultra_map
        - type: horizontal-stack
          cards:
            - type: tile
              entity: sensor.dreamebot_l10s_ultra_cleaning_time
              name: Zeit
              vertical: true
              tap_action:
                action: none
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: sensor.dreamebot_l10s_ultra_cleaned_area
              name: Fläche
              vertical: true
              tap_action:
                action: none
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: sensor.dreamebot_l10s_ultra_cleaning_count
              name: Anzahl
              vertical: true
              tap_action:
                action: none
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: sensor.dreamebot_l10s_ultra_cleaning_history
              name: letzte
              vertical: true
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }        
        - type: custom:mod-card
          card: null
          card_mod:
            style: |
              ha-card {
                height: 1px;
                border-bottom: 1px;
                background-color: grey !important;
                margin-left: 20px;
                margin-right: 20px;
              }         
        - type: vertical-stack
          cards:
            - type: history-graph
              entities:
                - entity: sensor.dreamebot_l10s_ultra_cleaning_history
                  name: " "
              logarithmic_scale: false
              hours_to_show: 24
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
            - type: heading
              icon: ""
              heading_style: subtitle
              heading: Reset drücken, wenn entspr. Button eingeblendet wird
            - type: tile
              entity: button.dreamebot_l10s_ultra_reset_filter
              name: Reset Filter
              hide_state: true
              tap_action:
                action: toggle
              show_entity_picture: false
              visibility:
                - condition: numeric_state
                  entity: sensor.dreamebot_l10s_ultra_filter_time_left
                  below: 30
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: button.dreamebot_l10s_ultra_reset_sensor
              tap_action:
                action: toggle
              name: Reset Sensor
              hide_state: true
              visibility:
                - condition: numeric_state
                  entity: sensor.dreamebot_l10s_ultra_sensor_dirty_time_left
                  below: 10
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: button.dreamebot_l10s_ultra_reset_main_brush
              name: Reset Hauptbürste
              tap_action:
                action: toggle
              hide_state: true
              visibility:
                - condition: numeric_state
                  entity: sensor.dreamebot_l10s_ultra_main_brush_time_left
                  below: 30
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: button.dreamebot_l10s_ultra_reset_side_brush
              name: Reset Seitenbürste
              tap_action:
                action: toggle
              hide_state: true
              visibility:
                - condition: numeric_state
                  entity: sensor.dreamebot_l10s_ultra_side_brush_time_left
                  below: 30
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: button.dreamebot_l10s_ultra_reset_mop_pad
              tap_action:
                action: toggle
              name: Reset Mop Pad
              hide_state: true
              visibility:
                - condition: numeric_state
                  entity: sensor.dreamebot_l10s_ultra_mop_pad_time_left
                  below: 30
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: button.dreamebot_l10s_ultra_reset_silver_ion
              tap_action:
                action: toggle
              name: Reset Silver-ion
              hide_state: true
              visibility:
                - condition: numeric_state
                  entity: sensor.dreamebot_l10s_ultra_silver_ion_time_left
                  below: 30
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: button.dreamebot_l10s_ultra_reset_detergent
              name: Reset Waschmittel
              tap_action:
                action: toggle
              hide_state: true
              visibility:
                - condition: numeric_state
                  entity: sensor.dreamebot_l10s_ultra_detergent_time_left
                  below: 30
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
    attributes:
      label: History & Reset
      icon: mdi:history
  - card:
      type: custom:xiaomi-vacuum-map-card
      map_source:
        camera: camera.dreamebot_l10s_ultra_map
      calibration_source:
        camera: true
      entity: vacuum.dreamebot_l10s_ultra
      vacuum_platform: Tasshack/dreame-vacuum
      map_modes:
        - template: vacuum_clean_zone
        - template: vacuum_clean_point
        - template: vacuum_clean_segment
          predefined_selections:
            - id: "1"
              icon:
                name: mdi:toilet
                x: 1950
                "y": 2850
              label:
                text: Bathroom
                x: 1950
                "y": 2850
                offset_y: 35
              outline:
                - - 250
                  - 1350
                - - 3500
                  - 1350
                - - 3500
                  - 3600
                - - 250
                  - 3600
            - id: "2"
              icon:
                name: mdi:sofa-outline
                x: 3300
                "y": -2050
              label:
                text: Living Room
                x: 3300
                "y": -2050
                offset_y: 35
              outline:
                - - -700
                  - -3500
                - - 6750
                  - -3500
                - - 6750
                  - 1100
                - - -700
                  - 1100
            - id: "3"
              icon:
                name: mdi:bed-king-outline
                x: -2650
                "y": -250
              label:
                text: Primary Bedroom
                x: -2650
                "y": -250
                offset_y: 35
              outline:
                - - -3950
                  - -3300
                - - -900
                  - -3300
                - - -900
                  - 1250
                - - -3950
                  - 1250
            - id: "4"
              icon:
                name: mdi:foot-print
                x: -2000
                "y": 1900
              label:
                text: Corridor
                x: -2000
                "y": 1900
                offset_y: 35
              outline:
                - - -4150
                  - 450
                - - 250
                  - 450
                - - 250
                  - 3100
                - - -4150
                  - 3100
            - id: "5"
              icon:
                name: mdi:flower-outline
                x: 7250
                "y": -2100
              label:
                text: Balcony
                x: 7250
                "y": -2100
                offset_y: 35
              outline:
                - - 5750
                  - -3300
                - - 7450
                  - -3300
                - - 7450
                  - -50
                - - 5750
                  - -50
        - template: vacuum_clean_segment
          predefined_selections:
            - id: "1"
              icon:
                name: mdi:toilet
                x: 1950
                "y": 2850
              label:
                text: Bathroom
                x: 1950
                "y": 2850
                offset_y: 35
              outline:
                - - 250
                  - 1350
                - - 3500
                  - 1350
                - - 3500
                  - 3600
                - - 250
                  - 3600
            - id: "2"
              icon:
                name: mdi:sofa-outline
                x: 3300
                "y": -2050
              label:
                text: Living Room
                x: 3300
                "y": -2050
                offset_y: 35
              outline:
                - - -700
                  - -3500
                - - 6750
                  - -3500
                - - 6750
                  - 1100
                - - -700
                  - 1100
            - id: "3"
              icon:
                name: mdi:bed-king-outline
                x: -2650
                "y": -250
              label:
                text: Primary Bedroom
                x: -2650
                "y": -250
                offset_y: 35
              outline:
                - - -3950
                  - -3300
                - - -900
                  - -3300
                - - -900
                  - 1250
                - - -3950
                  - 1250
            - id: "4"
              icon:
                name: mdi:foot-print
                x: -2000
                "y": 1900
              label:
                text: Corridor
                x: -2000
                "y": 1900
                offset_y: 35
              outline:
                - - -4150
                  - 450
                - - 250
                  - 450
                - - 250
                  - 3100
                - - -4150
                  - 3100
            - id: "5"
              icon:
                name: mdi:flower-outline
                x: 7250
                "y": -2100
              label:
                text: Balcony
                x: 7250
                "y": -2100
                offset_y: 35
              outline:
                - - 5750
                  - -3300
                - - 7450
                  - -3300
                - - 7450
                  - -50
                - - 5750
                  - -50
        - template: vacuum_clean_segment
          predefined_selections:
            - id: "1"
              icon:
                name: mdi:toilet
                x: 1950
                "y": 2850
              label:
                text: Bathroom
                x: 1950
                "y": 2850
                offset_y: 35
              outline:
                - - 250
                  - 1350
                - - 3500
                  - 1350
                - - 3500
                  - 3600
                - - 250
                  - 3600
            - id: "2"
              icon:
                name: mdi:sofa-outline
                x: 3300
                "y": -2050
              label:
                text: Living Room
                x: 3300
                "y": -2050
                offset_y: 35
              outline:
                - - -700
                  - -3500
                - - 6750
                  - -3500
                - - 6750
                  - 1100
                - - -700
                  - 1100
            - id: "3"
              icon:
                name: mdi:bed-king-outline
                x: -2650
                "y": -250
              label:
                text: Primary Bedroom
                x: -2650
                "y": -250
                offset_y: 35
              outline:
                - - -3950
                  - -3300
                - - -900
                  - -3300
                - - -900
                  - 1250
                - - -3950
                  - 1250
            - id: "4"
              icon:
                name: mdi:foot-print
                x: -2000
                "y": 1900
              label:
                text: Corridor
                x: -2000
                "y": 1900
                offset_y: 35
              outline:
                - - -4150
                  - 450
                - - 250
                  - 450
                - - 250
                  - 3100
                - - -4150
                  - 3100
            - id: "5"
              icon:
                name: mdi:flower-outline
                x: 7250
                "y": -2100
              label:
                text: Balcony
                x: 7250
                "y": -2100
                offset_y: 35
              outline:
                - - 5750
                  - -3300
                - - 7450
                  - -3300
                - - 7450
                  - -50
                - - 5750
                  - -50
      card_mod:
        style: |
          ha-card {
            background: rgba(22, 22, 22, 0.3);         
            zoom: 80%;
          }
          .dropdown-menu-button-button {
            background: "#181e2a" !important;
          }
          .map-zoom-icons-main {
            background: "#181e2a" !important;
          }
          #map-image {
            width: 80% !important;
          }
    attributes:
      label: Karte
      icon: mdi:map-check
```

---


# worx Card

```
type: custom:tabbed-card
styles:
  "--mdc-theme-primary": var(--primary-color)
  "--mdc-tab-text-label-color-default": grey
  "--mdc-typography-button-font-size": 14px
  "--mdc-typography-button-text-transform": capitalize
tabs:
  - card:
      type: custom:stack-in-card
      card_mod:
        style: |
          ha-card {
            padding: 10px;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
            border: none;
          }
      cards:
        - type: horizontal-stack
          cards:
            - type: picture-glance
              card_mod:
                style: |
                  ha-card {
                    border-radius: 5px !important;
                  }
              camera_view: auto
              title: Rasen mähen
              image: /local/bilder/worxm700.png
              entities:
                - entity: button.worxm700_start_cutting_edge
                  icon: mdi:grass
              aspect_ratio: 30%
              tap_action:
                action: toggle
              entity: button.worxm700_start_cutting_edge
        - type: horizontal-stack
          cards:
            - type: picture-glance
              card_mod:
                style: |
                  ha-card {
                    border-radius: 5px !important;
                  }
              camera_view: auto
              title: Kantenschnitt
              image: /api/image/serve/c9128086150fd877bea1176560463948/512x512
              entities:
                - entity: button.worxm700_start_cutting_edge
              aspect_ratio: 30%
              tap_action:
                action: toggle
              entity: button.worxm700_start_cutting_edge
        - type: horizontal-stack
          cards:
            - type: tile
              entity: lawn_mower.worxm700
              name: On-/Off
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: sensor.worxm700_battery
              name: Battery Level
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
        - type: horizontal-stack
          cards:
            - type: tile
              entity: sensor.worxm700_battery_temperature
              name: Battery Temp
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: sensor.worxm700_battery_voltage
              name: Battery Volt
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
        - type: horizontal-stack
          cards:
            - type: tile
              entity: binary_sensor.worxm700_rainsensor_triggered
              name: Regen erkannt
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: sensor.worxm700_next_scheduled_start
              name: Nächster Start
              tap_action:
                action: toggle
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
    attributes:
      label: Steuerung
      icon: mdi:robot-vacuum
  - card:
      type: custom:stack-in-card
      card_mod:
        style: |
          ha-card {
            padding: 10px;
          }
      cards:
        - type: horizontal-stack
          cards:
            - type: tile
              entity: sensor.worxm700_total_worktime
              name: Zeit
              vertical: true
              tap_action:
                action: none
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: sensor.worxm700_distance_driven
              name: Distance
              vertical: true
              tap_action:
                action: none
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: tile
              entity: sensor.worxm700_blades_current_on_time
              name: Klingenzeit
              vertical: true
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }        
        - type: custom:mod-card
          card: null
          card_mod:
            style: |
              ha-card {
                height: 1px;
                border-bottom: 1px;
                background-color: grey !important;
                margin-left: 20px;
                margin-right: 20px;
              } 
        - type: horizontal-stack
          cards:
            - type: tile
              entity: sensor.worxm700_blades_total_on_time
              name: Total Klingenzeit
              vertical: false
              tap_action:
                action: none
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;
                  }    
        - type: custom:mod-card
          card: null
          card_mod:
            style: |
              ha-card {
                height: 1px;
                border-bottom: 1px;
                background-color: grey !important;
                margin-left: 20px;
                margin-right: 20px;
              }
        - type: vertical-stack
          cards:
            - type: history-graph
              entities:
                - entity: sensor.worxm700_last_update
                  name: " "
              logarithmic_scale: false
              hours_to_show: 24
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
            - type: heading
              icon: ""
              heading_style: subtitle
              heading: Reset drücken, wenn entspr. Button eingeblendet wird
            - type: tile
              entity: sensor.worxm700_blades_reset_at_hours
              name: Klingen ersetzen
              hide_state: true
              tap_action:
                action: toggle
              show_entity_picture: false
              visibility:
                - condition: numeric_state
                  entity: sensor.worxm700_blades_reset_at_hours
                  above: 220
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                  }
    attributes:
      label: History & Reset
      icon: mdi:history
```

---

# Pool Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      border: none;
      margin-top: -15px;
    }
cards:
  - type: horizontal-stack
    cards:
      - type: picture-entity
        card_mod:
          style: |
            ha-card {
              border-radius: 5px !important;
              background: white !important;
            }
        camera_view: auto
        image: /local/bilder/aiper.png
        show_state: false
        show_name: false
        entity: switch.pool_roboter_smart_plug
        aspect_ratio: 25%
  - type: horizontal-stack
    cards:
      - type: entities
        card_mod:
          style: |
            ha-card {
              background: none !important;
              box-shadow: none !important;
              border: none !important;
              border-radius: 0px !important;
            }
        entities:
          - entity: switch.pool_roboter_smart_plug
            name: Steckdose
            secondary_info: none
```

---

# Untermenü Card (Bottom Menu)

```
type: custom:vertical-stack-in-card
cards:
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
          background-color: none !important; 
          padding: 15px;   
        }
    card:
      type: horizontal-stack
      cards:
        - type: custom:layout-card
          layout_type: custom:grid-layout
          layout:
            grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%
            grid-template-rows: auto
            mediaquery:
              "(max-width: 1000px)":
                grid-template-columns: 100%
                grid-template-rows: auto
          cards:
            - type: tile
              entity: input_button.button_fernseher
              icon: mdi:cog
              hide_state: true
              show_entity_picture: false
              vertical: false
              name: Einstellungen
              tap_action:
                action: navigate
                navigation_path: "#einstellungen"
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
              entity: input_button.button_fernseher
              icon: mdi:home-automation
              hide_state: true
              show_entity_picture: false
              vertical: false
              name: Automatisierungen
              tap_action:
                action: navigate
                navigation_path: "#automatisierungen"
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
              entity: input_button.button_fernseher
              icon: mdi:integrated-circuit-chip
              hide_state: true
              show_entity_picture: false
              vertical: false
              name: Integrationen
              tap_action:
                action: navigate
                navigation_path: "#integrationen"
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
                      }  
            - type: tile
              entity: input_button.button_fernseher
              icon: mdi:view-list
              hide_state: true
              show_entity_picture: false
              vertical: false
              name: Entitäten
              tap_action:
                action: navigate
                navigation_path: "#entities"
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
              entity: input_boolean.kioskmode
              icon: mdi:menu
              hide_state: true
              show_entity_picture: false
              vertical: false
              name: Topmenü
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
              entity: input_boolean.button_background_dashboard
              icon: mdi:menu
              hide_state: true
              show_entity_picture: false
              vertical: false
              name: Particle Backgr.
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
      background-color: transparent !important;  
      border: none;
    }
```
