if (!localStorage.getItem('preferences')) {
    localStorage.setItem('preferences', JSON.stringify({ lang: 'en-US', theme: 'system' }));
}
const posX = ["top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right"];
const themeButtons = [
    {
        type: "default",
        text: "Your Alert is here!",
        time: 4,
        position: "top-left"
    },
    {
        type: "error",
        text: "Your Alert is here!",
        time: 4,
        position: "bottom-left"
    },
    {
        type: "success",
        text: "Your Alert is here!",
        time: 4,
        position: "top-center"
    },
    {
        type: "info",
        text: "Your Alert is here!",
        time: 3,
        position: "bottom-center"
    },
    {
        type: "warning",
        text: "Your Alert is here!",
        time: 1,
        position: "top-right"
    },
    {
        type: "orange",
        text: "Your Alert is here!",
        time: 2,
        position: "bottom-right"
    }
]
const content = {
    langs: [
        {
            short_name: "en-US",
            long_name: "English"
        },
        {
            short_name: "tr-TR",
            long_name: "Türkçe"
        }
    ],
    "en-US": {
        header: {
            title: "Testing... Version 1.4",
            select_language: {
                title: "Select Language",
                close: "Close",
                slogan: "modern alert library"
            }
        },
        title: "Testing... v1.4",
        copy_panel: {
            title: 'Testing copyToClipboard function',
            aria: 'Testing copy to clipboard function',
            inp_placeholder: 'Enter the text you want to copy...',
            btn_copy: 'copy to clipboard'
        },
        new_alert: {
            title: 'Testing newAlert function',
            aria: 'Testing new alert function',
            theme_title: "Themes",
            position_title: "Positions"
        },
        update_notes: {
            title: "Update Notes",
            version: {
                v1_4: {
                    title: "Version 1.4 (testing...)",
                    list: [
                        "Target attribute was added to the copyToClipboard function, it contains both the id and the element itself. The opportunity to copy content is provided by specifying.",
                        "Fixed minor errors that occurred during copying.",
                        "An animation (shake) has been added to the existence of alerts.",
                        "Alerts colors and sizes have been rearranged to give them a more modernized look.",
                        "It is now possible to change the maximum time that the alert will remain on the screen (maxTime) and the maximum number of alerts that will appear on the screen (maxCount)."
                    ]
                }
            }
            
        }
    },
    "tr-TR": {
        header: {
            title: "Test edilen versiyon: 1.4",
            select_language: {
                title: "Dil Tercihi",
                close: "Kapat",
                 slogan: "modern uyarı mesajları"
            }
        },
        title: "Test edilen sürüm 1.4",
        copy_panel: {
            title: 'copyToClipboard fonksiyon testi',
            aria: 'Panoya kopyala fonksiyonu testi',
            inp_placeholder: 'Kopyalamak istediğiniz metni girin...',
            btn_copy: 'kopyala'
        },
        new_alert: {
            title: 'newAlert fonksiyon testi',
            aria: 'yeni uyarı mesajı fonksiyonu testi',
            theme_title: "Temalar",
            position_title: "Pozisyonlar"
        },
        update_notes: {
            title: "Güncelleme Notları",
            version: {
                v1_4: {
                    title: "Versiyon 1.4 (test ediliyor...)",
                    list: [
                        "CopyToClipboard işlevine Target özelliği eklendi; hem kimliği hem de öğenin kendisini içerir. İçeriğin kopyalanma imkanı belirtilerek sağlanır.",
                        "Kopyalama sırasında oluşan küçük hatalar düzeltildi.",
                        "Uyarıların varlığına animasyon (sallama) eklendi.",
                        "Uyarıların renkleri ve boyutları, onlara daha modern bir görünüm kazandırmak için yeniden düzenlendi.",
                        "Artık uyarının ekranda kalacağı maksimum süreyi (maxTime) ve ekranda görünecek maksimum uyarı sayısını (maxCount) değiştirmek mümkün."
                    ]
                }
            }
            
        }
    }
}
const preferences = JSON.parse(localStorage.getItem('preferences'));