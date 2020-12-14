var botui = new BotUI('TestBot')

botui.message.add({
    loading: true,
    delay: 1000,
    content: 'Welcome to my Website?'
}).then(function() {
    return botui.message.add({
        delay: 500,
        loading: true,
        content: 'What do you want to have for lunch today?'
    })
}).then(function() {
    return botui.action.button({
        action: [
            {
                text: 'Gimme some meat!',
                value: 'meat'
            },
            {
                text: 'I will go veggi!',
                value: 'veggi'
            }
        ]
    })
}).then(function(res) {
    let message

    if (res.value === 'meat') {
        message = 'Good choice! [Lets get on!](https://www.chefkoch.de/rs/s0t16/Fleisch-Rezepte.html)'
    } else if (res.value === 'veggi') {
        message = 'Are you shure? [Here are some ideas!](https://www.chefkoch.de/rs/s0t32/Vegetarisch-Rezepte.html)'
    }
    
    return botui.message.add({
        delay: 1000,
        loading: true,
        content: message
    })
})