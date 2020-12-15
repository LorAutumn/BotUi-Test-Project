var botui = new BotUI('TestBot')


botui.message.add({
    loading: true,
    delay: 1000,
    content: 'Welcome to my Website?'
}).then(function() {
    return botui.message.add({
        laoding: true,
        delay: 500,
        content: 'Whats your name?'
    })
}).then(function() {
    return botui.action.text({
        action: {
            palceholder: 'Your name'
        }
    })
}).then(function(res) {
    this.name = res.value
    botui.message.add({
        content: `Hi ${name}`
    })
}).then(function() {
    return botui.message.add({
        delay: 500,
        loading: true,
        content: `What do you want to have for lunch today?`
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
        message = 'Good choice! [Go get some!](https://www.chefkoch.de/rs/s0t16/Fleisch-Rezepte.html)'
        return botui.message.add({
            delay: 1000,
            loading: true,
            content: message
        })
    } else if (res.value === 'veggi') {
        message = 'Are you shure?'
        return botui.message.add({
            delay: 1000,
            loading: true,
            content: message
        }).then(function () {
            return botui.action.button({
                action: [
                    {
                        text: 'Id better go with meat',
                        value: 'meat'
                    },
                    {
                        text: 'Gimme veggi!',
                        value: 'veggi'
                    }
                ]
            })
        }).then(function(res) {
            let msg

            if (res.value === 'meat') {
                msg = 'Good choice! [Go get some!](https://www.chefkoch.de/rs/s0t16/Fleisch-Rezepte.html)'
                return botui.message.add({
                    delay: 1000,
                    loading: true,
                    content: msg
                })
            } else if (res.value === 'veggi') {
                msg = 'Ok! [Here you go!](https://www.chefkoch.de/rs/s0t32/Vegetarisch-Rezepte.html)'
                return botui.message.add({
                    delay: 1000,
                    loading: true,
                    content: msg
                })
            }
        })
    }
})