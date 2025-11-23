![image](https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/refs/heads/main/5%20Wetter/wetterseite_ubersicht_2.jpg)


# Wetter iframe Card (groß)

```
type: iframe
url: >-
  https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=4&overlay=temp&product=ecmwf&level=surface&lat=51.173&lon=12.806&detailLat=52.384&detailLon=14.055&marker=true&message=true
aspect_ratio: 100%
layout_options:
  grid_columns: 4
  grid_rows: 7
card_mod:
  style: |
    ha-card {    
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      border: none;
    }
```

---

# Niderschlag/Temperatur Bild Card

```
type: horizontal-stack
cards:
  - type: picture
    image: https://www.dwd.de/DWD/wetter/radar/radfilm_brd_akt.gif
    tap_action:
      action: navigate
      navigation_path: "#wetter"
    card_mod:
      style: |
        ha-card {    
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                      13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
          border: none;
        }
  - type: picture
    image: >-
      https://www.dwd.de/DE/wetter/wetterundklima_vorort/berlin-brandenburg/_functions/bildgalerie/wetter_aktuell.jpg;jsessionid=99C15221AF8EC82583F21E7DC775388A.live31081?view=nasImage&nn=561856
    hold_action:
      action: navigate
      navigation_path: ""
    tap_action:
      action: navigate
      navigation_path: "#wetter"
    card_mod:
      style: |
        ha-card {    
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                      13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
          border: none;
        }
```

---

# Wetterdetails Card

```
type: custom:vertical-stack-in-card
cards:
  - type: horizontal-stack
    cards:
      - type: horizontal-stack
        cards:
          - type: custom:mini-graph-card
            align_state: center
            name: " "
            points_per_hour: 0.25
            hours_to_show: 24
            font_size_header: 0
            font_size: 120
            align_header: center
            show:
              icon: false
            header_icon: false
            entities:
              - entity: sensor.aussentemperatur_temperatur
                name: Temperatur
                show_state: true
                color: var(--orange-color)
              - entity: sensor.aussentemperatur_luftfeuchtigkeit
                name: Luftfeuchte
                show_state: true
                color: var(--light-blue-color)
                y_axis: secondary
                animate: true
              - entity: sensor.fuerstenwalde_spree_druck
                name: Druck
                show_state: true
                color: var(--grey-color)
                y_axis: third
                animate: true
            card_mod:
              style: |
                ha-card {
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
                  .value {
                  }
                  .states .state__value {
                    font-weight: bold !important; /* Macht die Werte fett */
                  }                  
                  border: none !important;
                  border-radius: 8px 8px 0 0 !important;  
                }
  - show_current: false
    show_forecast: true
    type: weather-forecast
    entity: weather.fuerstenwalde_spree
    forecast_type: hourly
    theme: grey-icon
    card_mod:
      style: |
        ha-card {
          background-color: var(--card-background-color) !important;
          margin-bottom: -1px;
        }
  - type: custom:weather-chart-card
    entity: weather.fuerstenwalde_spree
    show_main: false
    show_temperature: true
    show_current_condition: true
    show_attributes: false
    show_time: false
    show_time_seconds: false
    show_day: false
    show_date: false
    show_humidity: false
    show_pressure: false
    show_wind_direction: false
    show_wind_speed: false
    show_sun: false
    show_feels_like: false
    show_dew_point: false
    show_wind_gust_speed: false
    show_visibility: false
    show_last_changed: false
    use_12hour_format: false
    icons_size: "40"
    animated_icons: true
    icon_style: style1
    autoscroll: false
    forecast:
      precipitation_type: rainfall
      show_probability: false
      labels_font_size: "11"
      precip_bar_size: "75"
      style: style2
      show_wind_forecast: true
      condition_icons: true
      round_temp: false
      type: daily
      number_of_forecasts: "7"
      disable_animation: false
      chart_height: "180"
    units:
      speed: ""
    current_temp_size: "35"
card_mod:
  style: |
    ha-card {
      border: none;   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      background: none !important;
    }
```

---

# Wetterbericht Card

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
            border: none !important;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                        13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
          }
      cards:
        - type: horizontal-stack
          cards:
            - type: markdown
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0px !important;
                    width: 308px;
                  }
              title: " "
              content: >
                {% set text =
                state_attr('sensor.fuerstenwalde_spree_wetterbericht', 'data')
                %} {% if text and '**Detaillierter Wetterablauf:**' in text %}
                  {% set start = text.find('**Detaillierter Wetterablauf:**') + 31 %}
                  {% set end = text.find('Am', start) if text.find('Am', start) != -1 else None %}
                  {{ text[start:end].strip() if end else text[start:].strip() }}
                {% else %}
                  Keine Wetterdaten verfügbar.
                {% endif %}            
            - type: vertical-stack
              cards:
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
                        zoom: 65%;
                        max-width: 160px;
                        margin-left: 145px;
                        margin-top: 20px;
                      }
                  language: de
                - type: markdown
                  card_mod:
                    style: |
                      ha-card {
                        background: none !important;
                        box-shadow: none !important;
                        border: none !important;
                        border-radius: 0px !important;
                        zoom: 75%;
                        max-width: 160px;
                        margin-left: 120px;
                      } 
                  content: "![Sonnenstand]({{ states('sensor.sun_position_bild') }})"
    attributes:
      label: Wetterbericht
      icon: mdi:weather-cloudy-clock
  - card:
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
            - type: entities
              entities:
                - entity: sensor.homematicip_sv_max_temperatur_heute
                  icon: mdi:temperature-celsius
                  name: Max Heute
                - entity: sensor.homematicip_sv_min_temperatur_heute
                  icon: mdi:temperature-celsius
                  name: Min Heute
                - entity: sensor.homematicip_sv_max_temperatur
                  name: Höchster Wert
                  icon: mdi:thermometer-alert
                - entity: sensor.homematicip_sv_min_temperatur
                  name: Kleinster Wert
                  icon: mdi:thermometer-minus
              theme: grey-icon
              card_mod:
                style: |
                  ha-card {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-right: 1px solid grey !important;
                    border-radius: 0px !important;
                  }
            - type: entities
              entities:
                - entity: sensor.fuerstenwalde_spree_windboen
                  name: Windböen
                - entity: sensor.fuerstenwalde_spree_windgeschwindigkeit
                  name: Windgeschwindigkeit
                - entity: sensor.fuerstenwalde_spree_windrichtung
                  name: Windrichtung
                - entity: sensor.fuerstenwalde_spree_niederschlag
                  name: Niederschlag
              theme: grey-icon
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
              entity: sensor.homematicip_sv_sonnenaufgang
              name: Sonneaufgang
              icon: mdi:weather-sunset-up
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
            - type: tile
              entity: sensor.homematicip_sv_sonnenuntergang
              name: Sonnenuntergang
              icon: mdi:weather-sunset-down
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
    attributes:
      label: Wetterinfos
      icon: mdi:history
```

---

# Wetterwarnung (Text) Card

```
type: markdown
card_mod:
  style: |
    ha-card {   
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      border: none;
    }
content: >
  **Zeitraum:**  

  {{
  as_timestamp(state_attr('binary_sensor.warning_furstenwalde_spree_stadt_oder_spree_brandenburg_1',
  'start')) | timestamp_custom('%d.%m.%Y %H:%M') if
  state_attr('binary_sensor.warning_furstenwalde_spree_stadt_oder_spree_brandenburg_1',
  'start') else 'unbekannt' }}   -   {{
  as_timestamp(state_attr('binary_sensor.warning_furstenwalde_spree_stadt_oder_spree_brandenburg_1',
  'expires')) | timestamp_custom('%d.%m.%Y %H:%M') if
  state_attr('binary_sensor.warning_furstenwalde_spree_stadt_oder_spree_brandenburg_1',
  'expires') else 'unbekannt' }}


  **{{
  state_attr('binary_sensor.warning_furstenwalde_spree_stadt_oder_spree_brandenburg_1',
  'headline') or 'Keine Headline verfügbar' }}**

  {{
  state_attr('binary_sensor.warning_furstenwalde_spree_stadt_oder_spree_brandenburg_1',
  'description') or 'Keine Beschreibung verfügbar' }}


  **Empfohlene Maßnahmen:** 

  {{
  state_attr('binary_sensor.warning_furstenwalde_spree_stadt_oder_spree_brandenburg_1',
  'recommended_actions') or 'Keine Maßnahmen empfohlen' }}
visibility:
  - condition: state
    entity: binary_sensor.warning_furstenwalde_spree_stadt_oder_spree_brandenburg_1
    state: "on"
```

---

# Wetterwarnung (Bild) Card

```
type: picture
image:
  media_content_id: https://www.dwd.de/DWD/warnungen/warnstatus/SchilderPD.jpg
layout_options:
  grid_columns: full
card_mod:
  style: |
    ha-card {    
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
                  13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
      border: none;
    }
```

---

# PopUp Niederschlag Card

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
