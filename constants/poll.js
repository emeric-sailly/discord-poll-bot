const now = new Date() 
const day = now.getDay();

export const PRESENCE_POLL = {
    "question": {
        "text": `Qui sera sur site ${day === 5 ? "lundi" : "demain"} ?`
    },
    "answers": [
        {
            "poll_media": {
                "text": "Moi !",
                "emoji": {
                    "name": "✅"
                }
            }
        },
        {
            "poll_media": {
                "text": "Nop",
                "emoji": {
                    "name": "❌"
                }
            }
        }
    ],
    "allow_multiselect": false,
    "duration": 8,
    "layout_type": 1
}

export const WEBTALK_POLL = {
    "question": {
        "text": `Qui veut partager quelque chose au Webtalk ?`
    },
    "answers": [
        {
            "poll_media": {
                "text": "Moi !",
                "emoji": {
                    "name": "✅"
                }
            }
        },
        {
            "poll_media": {
                "text": "Nop",
                "emoji": {
                    "name": "❌"
                }
            }
        }
    ],
    "allow_multiselect": false,
    "duration": 8,
    "layout_type": 1
}

export const BOARDGAME_POLL = {
    "question": {
        "text": `Disponibilité pour faire des jeux ?`
    },
    "answers": [
        {
            "poll_media": {
                "text": "Lundi"
            }
        },
        {
            "poll_media": {
                "text": "Mardi"
            }
        },
        {
            "poll_media": {
                "text": "Mercredi"
            }
        },
        {
            "poll_media": {
                "text": "Jeudi"
            }
        },
        {
            "poll_media": {
                "text": "Vendredi"
            }
        }
    ],
    "allow_multiselect": true,
    "duration": 8,
    "layout_type": 1
}