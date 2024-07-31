export const en_US = {
  lang_name: "en-US",
  title: "Version",
  long_name: "Fast Visual User Alerts Resource",
  header: {
    title: "Documentation",
    preferences: "Preferences",
    slogan: "modern alert library",
    welcome_text: "fvuarjs with its Fast, Simple and Modern Design",
    select_language: {
      title: "Select Language",
      close: "Close",
    },
    select_theme: {
      title: "Select Theme",
      themes: [
        {
          name: "system",
          value: "System",
          icon: "⚙️"
        },
        {
          name: "light",
          value: "Light",
          icon: "☀️"
        },
        {
          name: "dark",
          value: "Dark",
          icon: "🌙"
        }
      ]
    },
    menu: {
      title: "Pages",
      button: {
        test: "Testing",
        notes: "Changelog"
      }
    }
  },
  page: {
    "home": {
      meta: {
        title: "Home",
        description: "Simple, Fast and Modern Alert Library, home page"
      }
    },
    "changelog": {
      meta: {
        title: "Change Log",
        description: "You can read notes on past and future updates here, update notes page"
      }
    },
    "testing": {
      meta: {
        title: "Testing Version",
        description: "You can view the new tested version here test page"
      }
    },
    "notes": {
      meta: {
        title: "My Notes",
        description: "The notes I took about this project are located here. These notes are usually about what needs to be corrected and what needs to be added."
      }
    },
    "404": {
      meta: {
        title: "Page Not Found!",
        description: "The page URL you are trying to reach is corrupt or does not exist! 404 page"
      }
    }
  },
  alert: {
    building: "This page is still under construction...",
    showing: "Currently showing some information and guidance for the Latest version."
  },
  copy_panel: {
    title: 'Testing copyToClipboard function',
    aria: 'Testing copy to clipboard function',
    inp_placeholder: 'Enter the text you want to copy...',
    btn_copy: 'copy'
  },
  new_alert: {
    title: 'Testing newAlert function',
    aria: 'Testing new alert function',
    theme_title: "Themes",
    position_title: "Positions"
  },
  update_notes: {
    title: "Update Notes",
    ver: "Version",
    testing: "testing",
    version: [
      {
        test: true,
        v: "0.0.5",
        list: [
          "minor bugs fixed"
        ]
      },
      {
        test: false,
        v: "0.0.4",
        list: [
          "Target attribute was added to the copyToClipboard function, it contains both the id and the element itself. The opportunity to copy content is provided by specifying.",
          "Fixed minor errors that occurred during copying.",
          "An animation (shake) has been added to the existence of alerts.",
          "Alerts colors and sizes have been rearranged to give them a more modernized look.",
          "It is now possible to change the maximum time that the alert will remain on the screen (maxTime) and the maximum number of alerts that will appear on the screen (maxCount)."
        ]
      },
      {
        test: false,
        v: "0.0.3",
        list: [
          "minor bugs fixed"
        ]
      },
      {
        test: false,
        v: "0.0.2",
        list: [
          "minor bugs fixed"
        ]
      },
      {
        test: false,
        v: "0.0.1",
        list: [
          "Etkileşimli uyarı mesajları eklendi."
        ]
      }
    ]
  }
}