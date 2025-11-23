
![img](https://github.com/jayjojayson/HA_homedashboard/blob/main/3%20Licht/lichtseite_ubersicht.jpg)


# Wohnzimmer Licht Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {
      padding: 10px;
      border: none !important;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
    }
cards:
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: light.pc_led_pv_led
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: ""
        scrolling_effect: false
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.bildbeleuchtung_2
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:panorama-variant-outline
        scrolling_effect: false
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.lavalampe_steckdose_1
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:lava-lamp
        scrolling_effect: false
        name: Lavalampe
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 0px 20px 0px 20px;
        } 
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.licht_terrassetur_sud_deckenlicht_wohnecke_ch1
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        scrolling_effect: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:ceiling-light
        name: Wohnzimmer
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: light.esszimmerlicht
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        scrolling_effect: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:ceiling-light
        name: Esszimmer
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: input_button.button_lichtfarbe_random_andern
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:lightbulb-group
        name: Farbe random
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        scrolling_effect: false
        show_last_changed: false
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 0px 20px 5px 20px;
        }   
  - type: custom:bubble-card
    card_type: button
    button_type: slider
    entity: light.wandlicht
    name: Wandlicht
    show_state: false
    max_value: 100
    min_value: 0
    step: 5
    light_transition: true
    tap_to_slide: true
    light_transition_time: "60"
    button_action:
      tap_action:
        action: toggle
    card_layout: normal
    allow_light_slider_to_0: true
    tap_action:
      action: toggle
    sub_button:
      - entity: automation.abendlicht_lichtfarbe_random_andern
        show_name: true
        show_icon: false
        name: Autom.
      - entity: input_button.button_lichtfarbe_random_andern
        show_name: true
        show_icon: false
        name: Farbe
    hold_action:
      action: more-info
    styles: |
      * {  
        font-size: 12px !important;
      }
      ha-card {
        --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
        --bubble-icon-color: white !important;
        --bubble-accent-color: rgba(55,55,55,0.3);
        --bubble-button-border-radius: 3px;
      }
      .bubble-button-card-container {
        background: rgba(22,22,22,0) !important;
        border-radius: 10px;
      }
      .bubble-button-background {
        opacity: 0.7 !important;
        border-radius: 10px;
      }
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 05px 20px 5px 20px;
        } 
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        button_type: slider
        entity: light.couchlicht
        name: Couchlicht
        show_state: false
        max_value: 100
        min_value: 0
        step: 5
        light_transition: true
        tap_to_slide: true
        light_transition_time: "60"
        button_action:
          tap_action:
            action: toggle
        card_layout: normal
        allow_light_slider_to_0: true
        tap_action:
          action: toggle
        sub_button: []
        hold_action:
          action: more-info
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
            --bubble-button-border-radius: 3px;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
        icon: mdi:lamp-outline
      - type: custom:bubble-card
        card_type: button
        button_type: slider
        entity: light.schlafzimmerlicht
        name: ""
        show_state: false
        max_value: 100
        min_value: 0
        step: 5
        light_transition: true
        tap_to_slide: true
        light_transition_time: "60"
        button_action:
          tap_action:
            action: toggle
        card_layout: normal
        allow_light_slider_to_0: true
        tap_action:
          action: toggle
        sub_button: []
        hold_action:
          action: more-info
        icon: mdi:lightbulb-variant
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
            --bubble-button-border-radius: 3px;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            opacity: 0.7 !important;
            border-radius: 10px;
          }
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 0px 20px 5px 20px;
        } 
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.modelleisenbahn_licht_tasmota
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:railroad-light
        name: Modellbahn Licht
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        scrolling_effect: true
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.lok_einschalten_2
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:train
        name: Lok
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        scrolling_effect: true
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 5px 20px 5px 20px;
        } 
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.3d_drucker_schalter
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        scrolling_effect: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:printer-3d-nozzle
        name: Drucker
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'blue' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: fan.starkvind_luftreiniger_ventilator
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        scrolling_effect: false
        modules:
          - animated_icon
        animated_icon:
          mode: fan
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:fan
        name: Luftreiniger
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'steelblue' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              margin-bottom: 5px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: state
        entity: sensor.starkvind_luftreiniger_pm2_5
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: true
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: m3of:air
        name: PPM
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: gray !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state > '55' ? 'red' : ''} !important;
            opacity: 0.2 !important;
            border-radius: 10px;
          }
        scrolling_effect: true
```

---


# Außenlicht Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {
      padding: 5px;
      border: none !important;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
    }
cards:
  - type: custom:bubble-card
    card_type: button
    button_type: slider
    entity: light.gartenlicht_gruppe
    name: Gartenlicht
    show_state: false
    max_value: 100
    min_value: 0
    step: 5
    light_transition: true
    tap_to_slide: true
    light_transition_time: "60"
    button_action:
      tap_action:
        action: toggle
    card_layout: normal
    allow_light_slider_to_0: true
    tap_action:
      action: toggle
    sub_button:
      - entity: automation.party_lights
        show_name: true
        show_icon: false
        name: Effekt
      - entity: light.gartenlicht
        tap_action:
          action: toggle
        double_tap_action:
          action: more-info
        show_name: false
        show_icon: true
        name: Haus
        icon: mdi:coach-lamp-variant
        hold_action:
          action: more-info
      - entity: light.ledvance_gardenpole_rgbw_t
        double_tap_action:
          action: more-info
        tap_action:
          action: toggle
        name: pool
        show_name: false
        show_icon: true
        icon: mdi:lightbulb-group
        hold_action:
          action: more-info
    hold_action:
      action: more-info
    styles: |
      * {  
        font-size: 12px !important;
      }
      ha-card {
        --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
        --bubble-icon-color: white !important;
        --bubble-button-border-radius: 3px;
      }
      .bubble-button-card-container {
        background: rgba(22,22,22,0) !important;
        border-radius: 10px;
      }
      .bubble-button-background {
        opacity: 0.7 !important;
        border-radius: 10px;
      }
    card_mod:
      style: |
        ha-card {
            margin-top: 5px;
        }  
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 8px 20px 0px 20px;
        }  
  - type: custom:vertical-stack-in-card
    cards:
      - type: horizontal-stack
        cards:
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: switch.licht_garage_wohnzimmer_licht_garage_ch2
            card_layout: normal
            grid_options:
              columns: 6
              rows: 1
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:coach-lamp
            name: Garage
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
                --bubble-icon-color: white !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: switch.aussenlicht
            card_layout: normal
            grid_options:
              columns: 6
              rows: 1
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:led-strip-variant
            name: Außenlicht
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
                --bubble-icon-color: white !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: switch.poollicht_steckdose_1
            card_layout: normal
            grid_options:
              columns: 6
              rows: 1
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:light-flood-down
            name: Poollicht
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
                --bubble-icon-color: white !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
    card_mod:
      style: |
        ha-card {
          padding: 5px;
          border: none !important;   
        }  
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 0px 20px 5px 20px;
        }  
  - type: custom:vertical-stack-in-card
    card_mod:
      style: |
        ha-card {
          border: none;
        }
    cards:
      - type: horizontal-stack
        cards:
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: switch.licht_terrassetur_sud_aussenlicht_terrasse_sud_ch2
            card_layout: normal
            grid_options:
              columns: 6
              rows: 1
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:lightbulb
            name: Terr. Nord
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
                --bubble-icon-color: white !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: light.terrasse_sud_rgb_ww_cw
            card_layout: normal
            grid_options:
              columns: 6
              rows: 1
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:lightbulb
            name: Terr. Süd
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: light.terrasse_sud_rgb_ww_cw_2
            card_layout: normal
            grid_options:
              columns: 6
              rows: 1
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:lightbulb
            name: Terr. Süd
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
      - type: custom:mod-card
        card_mod:
          style: |
            ha-card {
                height: 1px;
                border-bottom: 1px;
                background-color: grey !important;
                margin: 10px 20px 10px 20px;
            }  
      - type: horizontal-stack
        cards:
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: light.terrasse_mutti_leuchte
            card_layout: normal
            grid_options:
              columns: 6
              rows: 1
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:lightbulb
            name: Terr. Mutti
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  margin-bottom: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: switch.weihnachtslicht_steckdose_1
            card_layout: normal
            grid_options:
              columns: 6
              rows: 1
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:string-lights
            name: Weihnachtslicht
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
                --bubble-icon-color: white !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
```

---

# Flurlicht Card

```
type: custom:vertical-stack-in-card
cards:
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.flurlicht
        card_layout: normal
        grid_options:
          columns: 6
          rows: 1
        show_icon: true
        show_name: true
        show_state: false
        scrolling_effect: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:ceiling-light
        name: Flurlicht
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.sockelleisten_steckdose_1
        card_layout: normal
        grid_options:
          columns: 6
          rows: 1
        show_icon: true
        show_name: true
        show_state: false
        scrolling_effect: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:led-strip-variant
        name: Sockelleisten
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: light.lampe_flur_schrank_leuchte
        card_layout: normal
        grid_options:
          columns: 6
          rows: 1
        show_icon: true
        show_name: true
        show_state: false
        scrolling_effect: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        name: Flurschrank
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
card_mod:
  style: |
    ha-card {
      padding: 5px;
      border: none !important;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
    }
```

---

# Küchenlicht Card

```
type: custom:vertical-stack-in-card
cards:
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        button_type: slider
        entity: light.kuchenlicht
        name: Küchenlicht
        show_state: false
        max_value: 100
        min_value: 0
        step: 5
        light_transition: true
        tap_to_slide: true
        light_transition_time: "60"
        button_action:
          tap_action:
            action: toggle
        card_layout: normal
        allow_light_slider_to_0: true
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            opacity: 0.7 !important;
            border-radius: 10px;
          }
        card_mod:
          style: |
            ha-card {
              padding-right: 10px;
              border-right: 1px solid grey !important; 
              border-left: none !important; 
              border-top: none !important; 
              border-bottom: none !important;
            }
      - type: custom:bubble-card
        card_type: button
        sub_button: []
        button_type: switch
        entity: switch.kuchenlicht_2
        card_layout: normal
        show_icon: true
        show_name: true
        show_state: false
        scrolling_effect: false
        tap_action:
          action: toggle
        hold_action:
          action: more-info
        button_action: {}
        icon: mdi:led-strip
        name: Unterschranklicht
        styles: |
          * {  
            font-size: 12px !important;
          }
          ha-card {
            --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
            --bubble-icon-color: white !important;
          }
          .bubble-button-card-container {
            background: rgba(22,22,22,0) !important;
            border-radius: 10px;
          }
          .bubble-button-background {
            background-color: ${state === 'on' ? 'orange' : ''} !important;
            opacity: 0.7 !important;
            border-radius: 10px;
          }
card_mod:
  style: |
    ha-card {
      padding: 5px;;
      border: none !important;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
    }
```

---

# Mutti Licht Card

```
type: custom:stack-in-card
card_mod:
  style: |
    ha-card {
      padding: 5px;
      border: none !important;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
    }
cards:
  - type: custom:bubble-card
    card_type: button
    button_type: slider
    entity: light.schlafzimmer_mutti_leuchte
    icon: mdi:ceiling-light
    name: Schlafzimmer
    show_state: false
    max_value: 100
    min_value: 0
    step: 5
    light_transition: true
    tap_to_slide: true
    light_transition_time: "60"
    button_action:
      tap_action:
        action: toggle
    card_layout: normal
    allow_light_slider_to_0: true
    tap_action:
      action: toggle
    hold_action:
      action: more-info
    styles: |
      * {  
        font-size: 12px !important;
      }
      ha-card {
        --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
        --bubble-icon-color: white !important;
        --bubble-button-border-radius: 3px;
      }
      .bubble-button-card-container {
        background: rgba(22,22,22,0) !important;
        border-radius: 10px;
      }
      .bubble-button-background {
        opacity: 0.7 !important;
        border-radius: 10px;
      }
    card_mod:
      style: |
        ha-card {
            margin-top: 5px;
        }
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 8px 20px 0px 20px;
        }    
  - type: custom:bubble-card
    card_type: button
    button_type: slider
    entity: light.esszimmerlicht_lampe_gruppe_mutti
    icon: mdi:ceiling-light-multiple
    name: Esszimmer
    show_state: false
    max_value: 100
    min_value: 0
    step: 5
    light_transition: true
    tap_to_slide: true
    light_transition_time: "60"
    button_action:
      tap_action:
        action: toggle
    card_layout: normal
    allow_light_slider_to_0: true
    tap_action:
      action: toggle
    hold_action:
      action: more-info
    styles: |
      * {  
        font-size: 12px !important;
      }
      ha-card {
        --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
        --bubble-icon-color: white !important;
        --bubble-button-border-radius: 3px;
      }
      .bubble-button-card-container {
        background: rgba(22,22,22,0) !important;
        border-radius: 10px;
      }
      .bubble-button-background {
        opacity: 0.7 !important;
        border-radius: 10px;
      }
    card_mod:
      style: |
        ha-card {
            margin-top: 5px;
        }
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 8px 20px 0px 20px;
        }    
  - type: custom:bubble-card
    card_type: button
    button_type: slider
    entity: light.leselampe_mutti
    icon: mdi:lamp-outline
    name: Leslampe
    show_state: false
    max_value: 100
    min_value: 0
    step: 5
    light_transition: true
    tap_to_slide: true
    light_transition_time: "60"
    button_action:
      tap_action:
        action: toggle
    card_layout: normal
    allow_light_slider_to_0: true
    tap_action:
      action: toggle
    hold_action:
      action: more-info
    styles: |
      * {  
        font-size: 12px !important;
      }
      ha-card {
        --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
        --bubble-icon-color: white !important;
        --bubble-button-border-radius: 3px;
      }
      .bubble-button-card-container {
        background: rgba(22,22,22,0) !important;
        border-radius: 10px;
      }
      .bubble-button-background {
        opacity: 0.7 !important;
        border-radius: 10px;
      }
    card_mod:
      style: |
        ha-card {
            margin-top: 5px;
        }
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 8px 20px 0px 20px;
        } 
  - type: custom:vertical-stack-in-card
    cards:
      - type: horizontal-stack
        cards:
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: light.steckdose_dekolicht_mutti
            card_layout: normal
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:led-strip-variant
            name: Dekolicht
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: switch.herdlicht_gruppe_mutti
            card_layout: normal
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:led-strip
            name: Herdlicht
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: switch.korridorlicht
            card_layout: normal
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:ceiling-light
            name: Flurlicht
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
    card_mod:
      style: |
        ha-card {
          padding: 5px;
          border: none !important;   
        }  
  - type: custom:mod-card
    card_mod:
      style: |
        ha-card {
            height: 1px;
            border-bottom: 1px;
            background-color: grey !important;
            margin: 0px 20px 5px 20px;
        }  
  - type: custom:vertical-stack-in-card
    card_mod:
      style: |
        ha-card {
          border: none;
        }
    cards:
      - type: horizontal-stack
        cards:
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: light.stehlampe
            card_layout: normal
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:floor-lamp
            name: Stehlampe
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'orange' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            button_type: slider
            entity: light.wohnzimmer_treppe_mutti_leuchte
            icon: mdi:lightbulb
            name: Treppe
            show_state: false
            max_value: 100
            min_value: 0
            step: 5
            light_transition: true
            tap_to_slide: true
            light_transition_time: "60"
            button_action:
              tap_action:
                action: toggle
            card_layout: normal
            allow_light_slider_to_0: true
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
                --bubble-icon-color: white !important;
                --bubble-button-border-radius: 3px;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                opacity: 0.7 !important;
                border-radius: 10px;
              }    
      - type: custom:mod-card
        card_mod:
          style: |
            ha-card {
                height: 1px;
                border-bottom: 1px;
                background-color: grey !important;
                margin: 10px 20px 10px 20px;
            }  
      - type: horizontal-stack
        cards:
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: switch
            entity: fan.starkvind_luftreiniger_mutti_ventilator
            card_layout: normal
            show_icon: true
            show_name: true
            show_state: false
            scrolling_effect: false
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: mdi:fan
            name: Luftreiniger
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
                --bubble-icon-color: white !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state === 'on' ? 'steelblue' : ''} !important;
                opacity: 0.7 !important;
                border-radius: 10px;
              }
            card_mod:
              style: |
                ha-card {
                  padding-right: 10px;
                  margin-bottom: 10px;
                  border-right: 1px solid grey !important; 
                  border-left: none !important; 
                  border-top: none !important; 
                  border-bottom: none !important;
                }
          - type: custom:bubble-card
            card_type: button
            sub_button: []
            button_type: state
            entity: sensor.starkvind_luftreiniger_mutti_pm2_5
            card_layout: normal
            show_icon: true
            show_name: true
            show_state: true
            tap_action:
              action: toggle
            hold_action:
              action: more-info
            button_action: {}
            icon: m3of:air
            name: PPM
            styles: |
              * {  
                font-size: 12px !important;
              }
              ha-card {
                --bubble-icon-background-color: rgba(55,55,55,0.2) !important;
                --bubble-icon-color: gray !important;
              }
              .bubble-button-card-container {
                background: rgba(22,22,22,0) !important;
                border-radius: 10px;
              }
              .bubble-button-background {
                background-color: ${state > '55' ? 'red' : ''} !important;
                opacity: 0.2 !important;
                border-radius: 10px;
              }
            scrolling_effect: true
```

---

# Untermenü Card (Bottom Menu)

```
type: custom:bubble-card
styles: |
  .bubble-icon {
    --mdc-icon-size: 30px !important;
    height: 35px;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    padding-right: 10px; 
    color: var(--primary-color);
  } 
  * { 
    font-size: 10px !important;
    border: none !important;
    border-radius: 0px !important;
    background: rgba(0,0,0,0) !important;
    box-shadow: none !important;
  }
card_type: horizontal-buttons-stack
auto_order: false
1_name: ""
1_icon: mdi:keyboard-backspace
1_link: /dashboard-test/home
2_link: /dashboard-test/heizung
2_icon: mdi:heating-coil
3_link: /dashboard-test/licht
3_icon: mdi:lamps
4_link: /dashboard-test/garten
4_icon: mdi:pool
5_link: /dashboard-test/wetter
5_icon: mdi:weather-partly-cloudy
6_link: /dashboard-test/solar
6_icon: mdi:home-lightning-bolt-outline
card_mod:
  style: |
    ha-card {
      border: none !important;
      border-radius: 0px !important;
      background: none !important;
      box-shadow: none !important;
      padding: 0px; 
      z-index: 2;
      position: fixed;
      margin: 0 !important;
      bottom: 0;
    }
```
