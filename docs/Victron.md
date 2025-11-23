![image](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/refs/heads/main/7%20Unterseiten/5%20Victron/victron_ubersicht.jpg)

# Victron Card

```
type: sections
max_columns: 2
title: victron
path: flow-test
sections:
  - type: grid
    cards:
      - type: custom:venus-os-dashboard
        param:
          boxCol1: 2
          boxCol3: 2
          boxCol2: 1
        theme: dark
        devices:
          1-1:
            icon: mdi:transmission-tower
            name: Netz
            entity: sensor.total_power
            anchors: R-1
            link:
              "1":
                start: R-1
                end: 2-1_L-1
                entity: sensor.total_power
            graph: true
            footerEntity1: " "
            footerEntity2: sensor.solar_netzeinspeisung_kwh_taglich_gerundet
          1-2:
            icon: mdi:battery-charging
            name: Batterie
            entity: sensor.victron_battery_soc_3
            anchors: R-1
            link:
              "1":
                start: R-1
                end: 2-1_B-1
                entity: sensor.victron_system_battery_power
            gauge: true
            headerEntity: sensor.victron_battery_temp
            footerEntity1: sensor.victron_battery_voltage_3
            footerEntity3: sensor.victron_battery_power_3
            graph: true
            footerEntity2: sensor.batterie_vr_endladezeit
          2-1:
            icon: mdi:cellphone-charging
            name: Multiplus II
            entity: sensor.victron_system_battery_state
            anchors: L-1, B-2, R-1
            footerEntity1: sensor.victron_ess_minimum_soc
            footerEntity3: sensor.victron_ess_max_charge_current
          3-1:
            icon: mdi:home-lightning-bolt
            name: AC-Haus
            entity: sensor.total_power_kombiniert
            anchors: L-1
            link:
              "1":
                start: L-1
                end: 2-1_R-1
                entity: sensor.total_power_kombiniert
                inv: true
            footerEntity1: sensor.victron_grid_l1
            footerEntity2: sensor.victron_grid_l2
            footerEntity3: sensor.victron_grid_l3
          3-2:
            icon: mdi:weather-sunny
            name: Solar
            entity: sensor.total_solar_power_kombiniert
            anchors: L-1
            link:
              "1":
                start: L-1
                end: 2-1_B-2
                entity: sensor.total_solar_power_kombiniert
                inv: true
            graph: true
            footerEntity1: " "
            footerEntity2: sensor.erzeugzung_taglich_kombination_solaranlagen
        styles:
          header: auto
          footer: auto
        card_mod:
          style: |
            ha-card {
              box-shadow: nonoe !important;
              border: none;
              background-color: transparent;
            --box-background-color: rgb(31,42,60,0.1);
            --box-shadow-color: #38619b;
            --anchor-color: green;
            --line-color: orange;
            }
            .dashboard {
              background: none;
            }
            .boxSensor1 {
              padding-top: 5px !important;
            }
            .ball {
              r: 6 !important;
              fill: steelblue !important; 
            }
            .graph path {
              stroke: green !important;
            }
            .boxFooter {
              position: absolute;
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              bottom: 2px;
              width: 100%;
              font-size: 0.8em;
              gap: 10% !important;
              z-index: 1;
            }
            .headerEntity {
              font-size: 0.8em;
              line-height: 1.1em;
            }
        grid_options:
          columns: full
      - type: custom:vertical-stack-in-card
        cards:
          - type: horizontal-stack
            cards:
              - type: custom:button-card
                card_mod:
                  style: |
                    ha-card {
                      border: 0px !important;
                      border-radius: 0px !important;
                    } 
                entity: input_select.victron_multiplus_modus
                name: Ein
                icon: mdi:power-on
                color_type: card
                tap_action:
                  action: call-service
                  service: input_select.select_option
                  target:
                    entity_id: input_select.victron_multiplus_modus
                  data:
                    option: Ein
                state:
                  - value: Ein
                    color: green
              - type: custom:button-card
                card_mod:
                  style: |
                    ha-card {
                      border: 0px !important;
                      border-radius: 0px !important;              opacity: 0.5;
                    } 
                entity: input_select.victron_multiplus_modus
                name: Aus
                icon: mdi:power-off
                color_type: card
                tap_action:
                  action: call-service
                  service: input_select.select_option
                  target:
                    entity_id: input_select.victron_multiplus_modus
                  data:
                    option: Aus
                state:
                  - value: Aus
                    color: orange
              - type: custom:button-card
                card_mod:
                  style: |
                    ha-card {
                      border: 0px !important;
                      border-radius: 0px !important;
                    } 
                entity: input_select.victron_multiplus_modus
                name: Laden
                icon: mdi:battery-charging
                color_type: card
                tap_action:
                  action: call-service
                  service: input_select.select_option
                  target:
                    entity_id: input_select.victron_multiplus_modus
                  data:
                    option: Laden
                state:
                  - value: Laden
                    color: green
              - type: custom:button-card
                card_mod:
                  style: |
                    ha-card {
                      border: 0px !important;
                      border-radius: 0px !important;
                    } 
                entity: input_select.victron_multiplus_modus
                name: Wechselrichter
                icon: mdi:power-plug-battery-outline
                color_type: card
                tap_action:
                  action: call-service
                  service: input_select.select_option
                  target:
                    entity_id: input_select.victron_multiplus_modus
                  data:
                    option: Wechselrichter
                state:
                  - value: Wechselrichter
                    color: green
        card_mod:
          style: |
            ha-card {
              position: absolute !important;
              margin: -95px 0 0 260px !important;
              width: 100%;
              scale: 75%;
              border-radius: 0px !important;
              border: 0px;
              background-color: transparent;
              z-index: 1000;
            }        
    column_span: 2
cards: []
```
