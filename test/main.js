$(document).ready(function () {
    
    const create = new feJS({
        maxCount: 4,
        maxTime: 4
    })
    const cl = content[preferences.lang];
    console.log(preferences);
    const storedLang = preferences.lang || "en-US";
    const box = $('.box');

    document.documentElement.lang = storedLang.split('-')[0];
    $('title').text(cl.header.title);
    
    
    function copyPanel(parent) {
        const copyPanel = $('<div class="panel copyPanel"></div>');
        parent.append(copyPanel);

        const copyTitle = $(`<h3 aria-label="${cl.copy_panel.aria}">${cl.copy_panel.title}</h3>`);
        copyPanel.append(copyTitle);

        const control = $('<div class="control"></div>');
        copyPanel.append(control);

        const testInp = $(`<input type="text" placeholder="${cl.copy_panel.inp_placeholder}" aria-label="${cl.copy_panel.inp_placeholder}"  class="inp" id="testInp">`);
        control.append(testInp);

        const btnCopy = $(`<button type="button" class="btn" id="btnCopy">${cl.copy_panel.btn_copy}</button>`);
        control.append(btnCopy);

        // copy to clipboard panel
        btnCopy.click(() => {
            create.copiedClipboard({
                target: '#testInp',
                type: "success",
                time: 4,
                position: "top-right"
            })
        })
    }

    function btnPanel(parent) {
        const btnPanel = $('<fieldset class="panel btnPanel"></fieldset>');
        parent.append(btnPanel);

        const title = $(`<legend>${cl.new_alert.theme_title}</legend>`);
        btnPanel.append(title);

        // theme buttons
        const ul = $('<ul></ul>');
        for (const button of themeButtons) {
            const li = $('<li></li>');
            const btn = $(`<button type="button" class="btn ${button.type}">${button.type}</button>`);
            btn.click(() => {
                create.newAlert({
                    type: button.type,
                    text: button.text,
                    time: button.time,
                    position: button.position
                })
            })
            li.append(btn);
            ul.append(li);
        }
        btnPanel.append(ul);
    }

    function updatePreferences({lang, theme}) {
        let pref = {
            lang: lang || preferences.lang,
            theme: theme || preferences.theme  
        };
        console.log(pref);
        localStorage.setItem('preferences', JSON.stringify(pref));
    }

    function posPanel(parent) {
        const posPanel = $(`<fieldset class="panel posPanel"></fieldset>`);
        parent.append(posPanel);

        const title = $(`<legend>${cl.new_alert.position_title}</legend>`);
        posPanel.append(title);

        // position buttons
        const posList = $('<ul></ul>');
        for (const pos of posX) {
            const li = $('<li></li>');
            const text = pos.replace('-', ' ');
            const btn = $(`<button type="button" class="btn success">${text}</button>`);
            btn.click(() => {
                create.newAlert({
                    type: "success",
                    text: text,
                    position: pos,
                    time: 4
                });
            });
            li.append(btn);
            posList.append(li);
        }
        posPanel.append(posList);
    }

    function versions(parent) {
        const version_info = $(`<legend><h3>${cl.update_notes.version.v1_4.title}</h3></legend>`);
        parent.append(version_info);


        const logs = $(`<ol></ol>`);
        parent.append(logs);

        cl.update_notes.version.v1_4.list.forEach(log => {
            const li = $(`<li>${log}</li>`);
            logs.append(li);
        });
    }

    function langDialog(parent) {
        // Dil seçim butonunu oluştur ve parent elemana ekle
        const $openLangDialog = $('<button class="openLangDialog btn">' + `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>` + cl.header.select_language.title + '</button>');
        parent.append($openLangDialog);
    
        // Dialog elemanını oluştur ve parent elemana ekle
        const $dialog = $('<dialog></dialog>');
        parent.append($dialog);

        const title = $(`<h2>${cl.header.select_language.title}</h2>`);
        $dialog.append(title);
    
        // Dil seçimini ekle
        const language = $('<select name="language" class="inp" id="language"></select>');
        $dialog.append(language);

        // Kapatma butonunu oluştur ve dialoga ekle
        const $closeLangDialog = $('<button type="button" id="closeLangDialog" class="btn close" autofocus>' + cl.header.select_language.close + '</button>');
        $dialog.append($closeLangDialog);


        language.change(() => {
            updatePreferences({
                lang: language.val()
            })
            location.reload();
        })

        const initialLang = content.langs.find(lang => lang.short_name === storedLang);

        if (initialLang) {
            const first_opt = $(`<option value=${initialLang.short_name}>${initialLang.long_name}</option>`);
            language.append(first_opt);
        }

        content.langs.forEach(lang => {
            if (lang.short_name !== storedLang) {
                const option = $(`<option value=${lang.short_name}>${lang.long_name}</option>`);
                language.append(option);
            }
        });
    
        // Dialog polyfill'i yükle
        if (!('showModal' in HTMLDialogElement.prototype)) {
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.4/dialog-polyfill.min.js', function() {
                $('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.4/dialog-polyfill.min.css">').appendTo('head');
                dialogPolyfill.registerDialog($dialog[0]);
            });
        }
    
        // Açma butonuna tıklama olayını ekle
        $openLangDialog.click(() => {
            $dialog[0].showModal();
            $dialog.css("display", "flex");
        });
    
        // Kapatma butonuna tıklama olayını ekle
        $closeLangDialog.click(() => {
            $dialog[0].close();
            $dialog.css("display", "none");
        });
    }

    function logo(parent) {
        const hgroup = $('<hgroup></hgroup>')
        parent.append(hgroup);

        const logo = $('<span class="logo">fvuarJS</span>');
        hgroup.append(logo);

        const span = $(`<span class="mini-logo">${cl.header.select_language.slogan}</span>`);
        hgroup.append(span);
    }

    function header(parent) {
        const header = $('<header class="header outbox"></header>');
        parent.append(header);

        const bar = $('<div class="bar"></div>');
        header.append(bar);

        logo(bar);

        langDialog(bar);
    }

    function testArea(parent) {
        const outbox = $('<fieldset class="outbox"></fieldset>');
        parent.append(outbox);

        const title = $(`<legend><h1>${cl.title}</h1></legend>`);
        outbox.append(title);
        
        copyPanel(outbox);

        const newAlertPanelTitle = $(`<h3>${cl.new_alert.title}</h3>`);
        outbox.append(newAlertPanelTitle);

        btnPanel(outbox);

        posPanel(outbox);
    }
    
    function updateNotes(parent) {
        const updateNotes = $(`<fieldset class="outbox"></fieldset>`);
        parent.append(updateNotes);

        const title = $(`<legend><h2>${cl.update_notes.title}</h2></legend>`);
        updateNotes.append(title);

        const panel = $(`<fieldset class="panel"></fieldset>`);
        updateNotes.append(panel);

        versions(panel);
    }

    function footer(parent) {
        const footer = $(`
<footer class="outbox">
    <div class="panel">
        &copy; 2024 ahmetcanisik
    </div>
</footer>     
`);
        parent.append(footer);
    }

    function Main(parent) {
        header(parent);

        testArea(parent);

        updateNotes(parent);

        footer(parent);
    }
    Main(box);
})