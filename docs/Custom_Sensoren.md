## 💬 Sensoren 

Diese Sensoren nutze ich im Dahsboard. Wer z.B. den günstigen Spritpreis nachbauen möchte, findet hier die Sensoren dazu. Ich habe diese in der configuration.yaml hinterlegt, können aber auch nach Wunsch in einzelne Sensoredateien ausgelagert werden.

```yaml
template:          
#zeigt an, welches Fenster genau geöffnet ist, wird für die Sprachausgabe Echo gebraucht
- sensor:
      - name: "Geöffnete Fenster"
        state: >
          {% set offene_fenster = states.binary_sensor 
                                  | selectattr('entity_id', 'search', '^binary_sensor\.fenster_') 
                                  | selectattr('state', 'eq', 'on') 
                                  | map(attribute='name') 
                                  | list %}
          {% if offene_fenster | length > 0 %}
            {{ offene_fenster | join(', ') }}
          {% else %}
            Keine Fenster geöffnet
          {% endif %}

# Licht eingeschaltet, zeigt an, ob irgendein Licht an ist oder nicht
- sensor:
    - name: "Licht eingeschaltet"
      state: >
        {% set light_entities = states.light | selectattr('state', 'eq', 'on') | list %}
        {% if light_entities | length > 0 %}
          on
        {% else %}
          off
        {% endif %}


- sensor:
      - name: "Günstigster Benzinpreis"
        unit_of_measurement: "€"
        state: >
          {% set preise = [
            states('sensor.shell_hegelstr_21_super') | float(99),
            states('sensor.shell_august_bebel_str_71_super') | float(99),
            states('sensor.raiffeisen_lindenstr_59_super') | float(99),
            states('sensor.aral_triftstrasse_36_super') | float(99),
            states('sensor.aral_friedenstrasse_36_super') | float(99),
            states('sensor.agip_eni_langenwahler_str_19_super') | float(99)
          ] %}
          {{ preise | min }}

- sensor:
    - name: "Günstigster Benzinpreis Straße"
      state: >
        {% set preise = [
          states('sensor.shell_hegelstr_21_super') | float(99),
          states('sensor.shell_august_bebel_str_71_super') | float(99),
          states('sensor.raiffeisen_lindenstr_59_super') | float(99),
          states('sensor.aral_triftstrasse_36_super') | float(99),
          states('sensor.aral_friedenstrasse_36_super') | float(99),
          states('sensor.agip_eni_langenwahler_str_19_super') | float(99)
        ] %}
        {% set straßen = [
          "Shell Hegelstr. 21",
          "Shell August-Bebel-Str. 71",
          "Raiffeisen Lindenstr. 59",
          "Aral Triftstrasse 36",
          "Aral Friedenstrasse 36",
          "Agip Langenwahler Str. 19"
        ] %}
        {% set min_preis = preise | min %}
        {% set index = preise.index(min_preis) %}
        {{ straßen[index] }}

#virtuelle Sensoren um Temperaturwerte einzufärben
sensor:
  - platform: template
    sensors:
      temperature_color:
        friendly_name: "Außentemperatur Farbconfig"
        value_template: >
          {% set temp = states('sensor.aussentemperatur_temperatur') | float %}
          {% if temp < 10 %}
            steelblue
          {% elif temp < 15 %}
            green
          {% elif temp < 23 %}
            orange
          {% else %}
            red
          {% endif %}          

  - platform: template
    sensors:
      pooltemperature_color:
        friendly_name: "Pooltemperatur Farbconfig"
        value_template: >
          {% set temp = states('sensor.pooltemperatur_temperatur') | float %}
          {% if temp < 10 %}
            steelblue
          {% elif temp < 18 %}
            green
          {% elif temp < 23 %}
            orange
          {% else %}
            red
          {% endif %}
    
          
  - platform: template
    sensors:
      luftquality_color:
        friendly_name: "Luftqualität Farbconfig"
        value_template: >
          {% set temp = states('sensor.starkvind_luftreiniger_pm2_5') | float %}
          {% if temp < 50 %}
            green
          {% elif temp < 100 %}
            yellow
          {% elif temp < 150 %}
            orange
          {% else %}
            red
          {% endif %}

  - platform: template
    sensors:
      solar_color:
        friendly_name: "Solar Farbconfig"
        value_template: >
          {% set temp = states('sensor.homestation_solar_total_energie_heute') | float %}
          {% if temp < 3 %}
            grey
          {% elif temp < 5 %}
            darkyellow
          {% elif temp < 10 %}
            yellow    
          {% elif temp < 15 %}
            darkgreen
          {% else %}
            green
          {% endif %}
          
   # Sensor für aktuelle Uhrzeit 
  - platform: time_date
    display_options:
      - 'time'       
      
 #nspanel Setting und Firmware anzeigen
input_select:
  panel_view:
    name: Panel View
    options:
      - Firmware
      - Settings
    initial: Firmware
    
#Diagrammumschaltung raspi
  diagramm_anzeige:
    name: Diagramm Anzeige
    options:
      - Temperatur
      - RAM
    initial: Temperatur

#Diagramm Heizung ein oder ausblenden
  diagramm_heizung_anzeige:
    name: Diagramm Heizung Anzeige
    options:
      - off
      - Diagramm
    initial: off     
```
