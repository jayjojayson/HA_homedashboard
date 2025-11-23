# ✨ HA_homedashboard ✨

Homedashboard Cards and Layout Code for Home Assistant

Here I would like to introduce you my dashboard and provide you with a detailed overview. The dashboard is based on the new tile design in HA. The structure of the dashboard has grown a lot since then and an overview is good for me, too. The dashboard is adapted for tablet view. If possible, you shouldn't have to scroll, but in some places it just can't be avoided. In addition, the larger cards are broken up in the layout on the mobile phone and are therefore also displayed quite well. Development is continuing and I will try to maintain the current status of the dashboard at github. I will record current updates [here](https://github.com/jayjojayson/HA_homedashboard#%EF%B8%8F-updates).

If you like the Dashboard, I would appreciate a Star rating ⭐ from you. 🤗 

![start](https://github.com/user-attachments/assets/5ab05e5a-79a1-45b5-8700-a83049f8a74b)


## 📂 Folder Structure

Everything is clearly structured so that you can easily copy the elements you want. All YAML files are listed for each card and assigned to the corresponding pages or subpages. It's best to look at the respective screenshot of the page in the folder/subfolder and you can quickly assign the corresponding card or find it in the folder structure. You will also find the YAML for all the pages there. It is all in German, but the folder structure and pictures should be enough to find everything.

# 📖 Features

* #### 📣 Hide HA top menu/header (switch action - optional)
* #### 📣 Hide particles Background (switch-Action - optional)
* #### ⭐ Home page with popups for heating, weather, camera and electricity
* #### ⭐ Home page with dynamic content for (garbage, windows, light, multimedia, packages, holidays)
* #### 📣 Back button (to the start-page) permanently integrated at the bottom
* #### ⭐ Main pages for heating, light, garden, weather and electricity plus start-page
* #### ⭐ Subpages for settings, robots, 📹 security and multimedia
* #### ☔ detailed weather map (dwd weather service required)
* #### ⚡ detailed electricity overview - current consumption values ​​for devices and total (watt/kWh) 📈 History
* #### ☀️ Solar input also included in electricity overview map & home page
* #### 💻 adapted for Lenovo M10 3rd Gen tablet (but also other tablets with 10 or 11")
* #### 📱 mostly mobile phone compatible (tested with s24)
* #### many tabbed and popup cards

...coming soon

#### Mainpages

![hauptseiten](https://github.com/user-attachments/assets/ad3d7eb4-b574-4f21-8a9d-24eb0fcc9d55)

#### Subpages
![unterseiten](https://github.com/user-attachments/assets/7d6ffdfd-b7af-4478-a4b5-611d8ddefdb2)

#
## ✔️ Requirements
The following cards must be installed via HACS so that your copied code will work afterwards. You can also see which HACS card you ultimately need in the cards I created.

### for all Pages and Cards
- mushroom
- card-mod
- stack in card
- tabbed card
- bubble card
- mini graph card
- layout card
- auto entities card
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/1%20Startseite/startseite_ubersicht.jpg)  
  </details>

### for vacuum and trash card
- dreame vacuum map card
- trash card
- ics calendar 
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/Unterseiten/2%20Roboter/roboterseite_ubersicht.jpg)  
  </details>

### for weather card
- deutscher wetterdienst
- NINA Wetterwarnungen
- compass card (neu für Windrichtung)
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/5%20Wetter/wetterseite_ubersicht.jpg)  
  </details>

### for electricity cards notwendig
- power flow card plus
- sankey chart card
- energy overview card
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/6%20Strom/stromseite_ubersicht.jpg)  
  </details>

### for package Card
- 17track Integration

### for raspi-stats Card
- System Monitor Integration
  <details>
    <summary> <b>Beispielbild</b></summary>  
    
    ![start](https://github.com/jayjojayson/HA_homedashboard/blob/main/Unterseiten/1%20Einstellungen/einstellungenseite_ubersicht.jpg)  
  </details>

(optional - hide Topmenu)
- kiosk mode

(optional - Swipe for Tablet or Mobile)
- home assistant swipe navigation

#### Sensors
A few sensors need to be created in the configuration.yaml. This is necessary to color temperature, air and solar values ​​according to condition.
You can find the sensors at sensors.yaml. Copy the corresponding sensor there, enter it in your config.yaml and (quickly) reload HA.

#
# 📥 Installation

#### Installation via HACS
- Go to Hacs and add the repository there. To do this, or use this Link.
- [![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=jayjojayson&repository=HA_homedashboard&category=integration)
- After importing, you can install the dashboard via HACS. The dashboard and theme is stored at `www/community/HA_homedashboard/`. You can navigate there using the file manager in the menu. Copy the content and go to Settings > Dashboard > create new dashboard and then click on the three dots in the top right, select raw configuration editor and paste the copied code there. You can then open the dashboard and add your entities and design it as you wish.

Link for HACS
```yaml
https://github.com/jayjojayson/HA_homedashboard
```
For the Theme: add this to configuration.yaml for the theme (examplelink, must be adjusted)
```yaml
  frontend:
    themes: !include www/community/HA_homedashboard/HA_homedashboard_theme.yaml
```

#### Manual installation
1. Select the YAML code from a template from the folders and copy the code.
2. Go to your dashboard and paste the copied code into a new card or directly into a new page.
3. Customize the entities to yours, replacing IDs and sensors with those from your setup.
4. Look at the result.

<details>
  <summary> 💬 - <b>Topheader Hack</b> ---</summary>

  ## 💬 Topheader Hack 
  
  To hide the top menu on tablets and cell phones, I use the Kiosk Mode from HACS.
  Simply install via HACS and then insert the following code first in the raw configuration editor.
  The editor can be accessed via the three dots in the top right when you are in editing mode for the dashboard.
  
  ```yaml
    kiosk_mode:
      mobile_settings:
        hide_header: true
        ignore_entity_settings: true
        custom_width: 1280
  ```
  It works even better if you create a helper with the type switch and name kioskmode under Devices & Services 
  Paste the following code as follows. This means you can easily show or hide the top menu using a switch. I have saved the switch in the Settings subpage.
  
  ```yaml
  kiosk_mode:
    non_admin_settings:
      hide_header: true
      hide_menubutton: true
      ignore_entity_settings: true
    entity_settings:
      - entity:
          input_boolean.kioskmode: 'on'
        hide_header: true
      - entity:
          input_boolean.kioskmode: 'off'
        hide_header: false
  ```
</details>

<details>
  <summary> 💬 - <b>particles background</b> ---</summary>

  ## 💬 particles background
  
  Two things are necessary for the Particles Background. First you have to create a helper under Devices & Services with the type Switch and the name Button Background Dashboard, then you can insert the following code as follows. This means you can then easily show or hide the particle background using a switch. I have saved the switch in the Settings subpage.

The second is to create the files. To do this, simply copy all the files from my  github from the "z-particles background" folder and paste them under www/particles/. You have to create the “particles” folder in advance.

Depending on which page you ultimately want to use the background, a conditional card must be inserted. The code for this looks like this. The card remains empty for now and Card Mod puts it in the right place. The positioning of the card within the dashboard should be done at the end. The colors can be edited in the css and in the app.js (don't forget to clear the cache afterwards).
  
  ```yaml
  type: conditional
  conditions:
    - condition: state
      entity: input_boolean.button_background_dashboard
      state: "on"
  card:
    type: iframe
    url: /local/particles/background/index.html
    aspect_ratio: 50%
    card_mod:
      style: |
        ha-card {
          border: none !important;
          border-radius: 0px !important;
          background: none !important;
          box-shadow: none !important;
          z-index: -1;
          position: fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          opacity:0.3;
        }
  ```
  ![Aufzeichnung 2025-01-17 174641 (2)](https://github.com/user-attachments/assets/8a822d2b-757b-411f-b239-982fd412243c)
    
</details>

<details>
  <summary> 💬 - <b>HA_Homedashboard Theme File</b> ---</summary>

  ## 💬 HA_Homedashboard Theme Datei 
  
  If you want to have exactly the color design as shown in the preview images, you can use HACS for the installation or you can add the HA_Homedashboard Theme Yaml to your HA 
  impotate. To do this, download the file and then go to the FileEditor in Home Assistant. There you add the file to the config folder or to the local folder.
  The storage location doesn't actually matter. The theme file is automatically recognized by HA. 

  The theme is divided into three pieces, the main theme, gray-icon and temps. I sometimes use Gray-icon to set the icon to gray and Temps to color standard temperature values.

  After inserting the theme, you can select the theme under user settings as usual. It is then automatically adopted and saved. 
  If you would also like to use the background photo, you can find it in the images folder. You then have to store/upload this manually on each page.

  In order for the theme to work, you have to add the following line to the configuration.yaml right at the beginning (example, change the path to your storage)
  ```yaml
  frontend:
    themes: !include www/community/HA_homedashboard/HA_homedashboard_theme.yaml
  ```
</details>

<details>
  <summary> 💬 - <b>Automation Trash Evening</b> ---</summary>

  ## 💬 Automation Trash Evening (Voice + Notify Mobile)

The automation will tell you the evening before at 6:00 p.m. which bin needs to be put out. To do this, the waste calendar is searched for the next appointment and since these are always all day long, they start at midnight. Therefore, a time offset of -6 hours is built in so that the announcement is made the evening before. Of course you can adjust the time. The voice output is done via a media_player of your choice. You can also receive notifications on your cell phone. Of course you have to replace the three entities calendar, media_player and cell phone with yours.
  
  ```yaml
alias: Ansage Abfallkalender
description: Notification auf dem Handy und über Echo Dot
triggers:
  - entity_id: calendar.abfall
    event: start
    offset: "-6:0:0"
    trigger: calendar
conditions: []
actions:
  - data:
      message: >
        Heute muss die {{ state_attr('calendar.abfall', 'message') }}
        herausgestellt werden.
      title: |
        {{ state_attr('calendar.abfall', 'message') }}
    action: notify.mobile_app_samsung_s24
  - data:
      message: >
        Es ist wieder Zeit, die {{ state_attr('calendar.abfall', 'message') }}
        auf die Straße zu stellen.
      title: Nächste Ziehung steht an!
    action: notify.alexa_media_jan_s_echo
mode: single

  ```
</details>

