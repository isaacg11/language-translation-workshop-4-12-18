function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

$(document).ready(() => {
    let myDictionary = {
        "hola": "hello",
        "hallo": "hello"
    }
      
    $.i18n.load(myDictionary);

    let btn = $('#btn');
    btn.click(() => {
        let trans = $.i18n._($('#userGreeting').val());
        console.log(trans);
    })

    
})

