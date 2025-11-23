![image](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/refs/heads/main/7%20Unterseiten/3%20Sicherheit/sicherheitseite_ubersicht.jpg)

# Bewegungsmelder Card

```
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
      - type: tile
        entity: lock.hauseingang
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
  - type: horizontal-stack
    cards:
      - type: tile
        entity: binary_sensor.hofkamera_bewegung
        vertical: true
        hide_state: true
        name: Hofkamera
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
        entity: binary_sensor.bewegungsmelder_garage_bewegung
        vertical: true
        hide_state: true
        name: Garage
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
        entity: binary_sensor.bewegungmelde_terasse_sud_bewegung_2
        vertical: true
        hide_state: true
        name: Terrasse Süd
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
        entity: binary_sensor.poolkamera_bewegung
        vertical: true
        hide_state: true
        name: Poolkamera
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
        entity: binary_sensor.bewegungsmelder_flur_mutti_bewegung
        name: Flur Mutti
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
        entity: binary_sensor.bewegungsmelder_treppe_mutti_bewegung
        name: Treppe Mutti
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
  - type: horizontal-stack
    cards:
      - type: tile
        entity: binary_sensor.bewegungsmelder_bad_bewegung
        name: Bad
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
        entity: binary_sensor.bewegungsmelder_flur_anwesenheit
        name: Flur
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
  - type: horizontal-stack
    cards:
      - type: custom:auto-entities
        card:
          type: entities
          title: Bewegungsstatus
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
        filter:
          include:
            - entity_id: binary_sensor.bewegung*
          exclude:
            - state: "off"
        sort:
          method: name
```

---


# Fensterstatus Card

```
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
      - type: tile
        entity: binary_sensor.fenster_terasse_nord_offnung
        vertical: true
        hide_state: true
        name: Terasse Nord
        icon: mdi:window-open-variant
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
        entity: binary_sensor.fenster_terasse_sud_offnung
        vertical: true
        hide_state: true
        name: Terasse Süd
        icon: mdi:window-open-variant
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
        entity: binary_sensor.fenster_schlafzimmer_offnung
        vertical: true
        hide_state: true
        name: Schlafzimmer
        icon: mdi:window-maximize
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
        entity: binary_sensor.fenster_bad_offnung
        vertical: true
        hide_state: true
        name: Badezimmer
        icon: mdi:window-open-variant
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
        entity: binary_sensor.fenster_terrasse_offnung_2
        vertical: true
        hide_state: true
        name: Terrasse Mutti
        icon: mdi:window-open-variant
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
        entity: binary_sensor.fenster_wohnzimmer_offnung
        vertical: true
        hide_state: true
        name: Wohnzimmer
        icon: mdi:window-maximize
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
        entity: binary_sensor.fenster_terrasse_offnung_2
        vertical: true
        hide_state: true
        name: Schlafzimmer
        icon: mdi:window-maximize
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
      - type: custom:auto-entities
        card:
          type: entities
          title: Fensterstatus
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
        filter:
          include:
            - entity_id: binary_sensor.fenster*
          exclude:
            - state: "off"
        sort:
          method: name
```

---

# Alarmanlage Uhr Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      border: none;
    }
cards:
  - type: vertical-stack
    cards:
      - type: custom:digital-clock
        dateFormat:
          weekday: long
          day: 2-digit
          month: short
          year: numeric
        timeFormat:
          hour: 2-digit
          minute: 2-digit
        card_mod:
          style: |
            ha-card {
              background: none !important;
              box-shadow: none !important;
              border: none !important;
              border-radius: 0px !important;
              padding-top: 15px !important;
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
      - type: alarm-panel
        states:
          - arm_home
          - arm_away
        entity: alarm_control_panel.alarmanlage_buro
        card_mod:
          style: |
            ha-card {
              background: none !important;
              box-shadow: none !important;
              border: none !important;
              border-radius: 0px !important;
            }
```

---

# Kamera Übersicht Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      border: none;
      border-radius: 8px !important;
      padding: 10px;
    }
cards:
  - type: horizontal-stack
    cards:
      - show_state: false
        show_name: false
        camera_view: auto
        fit_mode: cover
        type: picture-entity
        entity: camera.hofkamera_fliessend
        image: https://demo.home-assistant.io/stub_config/bedroom.png
        camera_image: camera.hofkamera_fliessend
        card_mod:
          style: |
            ha-card {
              background: none !important;
              box-shadow: none !important;
              border: none !important;
              border-radius: 5px !important;
            }
      - type: picture-entity
        show_state: false
        show_name: false
        camera_view: auto
        entity: camera.hofkamera_2
        image: https://demo.home-assistant.io/stub_config/bedroom.png
        camera_image: camera.hofkamera_2
        card_mod:
          style: |
            ha-card {
              background: none !important;
              box-shadow: none !important;
              border: none !important;
              border-radius: 5px !important;
            }
      - type: picture-entity
        show_state: false
        show_name: false
        camera_view: auto
        entity: camera.poolkamera_fliessend
        image: https://demo.home-assistant.io/stub_config/bedroom.png
        camera_image: camera.poolkamera_fliessend
        card_mod:
          style: |
            ha-card {
              background: none !important;
              box-shadow: none !important;
              border: none !important;
              border-radius: 5px !important; /* Nur unten rechts */
            }
      - type: picture-entity
        show_state: false
        show_name: false
        camera_view: auto
        entity: camera.lenovo_tab_m10_3rd_gen
        image: https://demo.home-assistant.io/stub_config/bedroom.png
        camera_image: camera.lenovo_tab_m10_3rd_gen
        card_mod:
          style: |
            ha-card {
              background: none !important;
              box-shadow: none !important;
              border: none !important;
              border-radius: 5px !important;
            }
grid_options:
  columns: full
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
