![image](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/refs/heads/main/7%20Unterseiten/4%20Multimedia/multimedia_ubersicht.jpg)

# Echo Player Card

```
type: custom:vertical-stack-in-card
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
      background: url({{ state_attr('media_player.wohnzimmer', 'entity_picture') }}) no-repeat center center;
      background-size: cover;
      filter: blur(30px);
      z-index: 0;
      opacity: {% if is_state('media_player.wohnzimmer', 'playing') %} 1 {% else %} 0 {% endif %};
      transition: opacity 0.5s ease;
    }
cards:
  - type: horizontal-stack
    cards:
      - type: custom:vertical-stack-in-card
        card_mod:
          style: |
            ha-card {
              background: transparent !important;
              border: none !important;
              border-radius: none !important;
              box-shadow: none !important;
              z-index: 1 !important; /* Über dem Hintergrund */
            }
        cards:
          - type: horizontal-stack
            cards:
              - type: conditional
                conditions:
                  - entity: media_player.wohnzimmer
                    state: playing
                card:
                  type: custom:button-card
                  entity: media_player.wohnzimmer
                  show_state: false
                  show_name: false
                  show_icon: false
                  show_entity_picture: true
                  size: 120px
                  card_mod:
                    style: |
                      ha-card {
                        background: transparent !important;
                        border: 0px !important;
                        border-radius: 0px !important;
                        padding: 15px !important;
                        z-index: 1 !important; /* Über dem Hintergrund */
                      }
                      #img-cell {
                        display: flex !important;
                        align-items: flex-start !important;
                        justify-content: flex-start !important;
                        margin: 0 !important;
                      }
              - type: conditional
                conditions:
                  - entity: media_player.wohnzimmer
                    state: paused
                card:
                  type: markdown
                  content: |
                    ## Echo Gruppe Wohnzimmer
                  card_mod:
                    style: |
                      ha-card {
                        background: transparent !important;
                        border: 0px !important;
                        border-radius: none !important;
                        box-shadow: none;
                        padding: 15px;
                        font-size: 12px !important;
                        z-index: 1 !important; /* Über dem Hintergrund */
                      }
              - type: conditional
                conditions:
                  - entity: media_player.wohnzimmer
                    state: idle
                card:
                  type: markdown
                  content: |
                    ## Echo Gruppe Wohnzimmer
                  card_mod:
                    style: |
                      ha-card {
                        background: transparent !important;
                        border: none !important;
                        border-radius: none !important;
                        box-shadow: none;
                        font-size: 12px !important;
                        z-index: 1 !important; /* Über dem Hintergrund */
                      }
              - type: conditional
                conditions:
                  - entity: media_player.wohnzimmer
                    state: standby
                card:
                  type: markdown
                  content: |
                    ## Echo Gruppe Wohnzimmer
                  card_mod:
                    style: |
                      ha-card {
                        background: none;
                        border: none;
                        border-radius: none;
                        box-shadow: none;
                        padding: 20px;
                        font-size: 12px !important;
                        z-index: 1 !important; /* Über dem Hintergrund */
                      }
      - type: picture
        image: /local/bilder/echogruppe.png
        aspect_ratio: 1/1
        card_mod:
          style: |
            ha-card {
              background: none;
              border: none;
              border-radius: none;
              box-shadow: none;
              width: 150px;
              height: 150px;
              margin-left: auto;
              z-index: 1 !important; /* Über dem Hintergrund */
            }
  - type: custom:vertical-stack-in-card
    card_mod:
      style: |
        ha-card {
          border: none !important;
          z-index: 1 !important; /* Über dem Hintergrund */
        }
    cards:
      - type: custom:mushroom-media-player-card
        entity: media_player.wohnzimmer
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
        card_mod:
          style: |
            ha-card {
              background: none !important;
              border: none !important;
              box-shadow: none;
              z-index: 1 !important; /* Über dem Hintergrund */
            }
      - type: custom:mushroom-chips-card
        card_mod:
          style: |
            ha-card {
              margin-bottom: 8px !important; 
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
```

---


# Media Geräte Card

```
type: custom:vertical-stack-in-card
card_mod:
  style: |
    ha-card {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      border: none;
    }
cards:
  - type: horizontal-stack
    cards:
      - type: markdown
        content: |
          ## LG OLED Wohnzimmer
        card_mod:
          style: |
            ha-card {
              background: none;
              border: none;
              border-radius: none;
              box-shadow: none;
              padding: 20px;
            }
      - type: picture
        image: /local/bilder/lgtv.png
        aspect_ratio: 1/1
        card_mod:
          style: |
            ha-card {
              background: none;
              border: none;
              border-radius: none;
              box-shadow: none;
              width: 160px;
              height: 160px;
              margin-left: auto;
            }
  - type: custom:vertical-stack-in-card
    card_mod:
      style: |
        ha-card {
          border: none;
          border-top-right-radius: 0px !important;          
          border-top-left-radius: 0px !important;
        }
    cards:
      - type: custom:mod-card
        card_mod:
          style: |
            ha-card {
              background-color: none !important; /* Halbtransparenter Grünton */      
              padding-top: 20px;
              padding-bottom: 20px;  
              padding-right: 0px;
              padding-left: 0px; 
            }
        card:
          type: horizontal-stack
          cards:
            - type: tile
              entity: input_button.button_fernseher
              hide_state: true
              show_entity_picture: false
              vertical: false
              name: TV on
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
