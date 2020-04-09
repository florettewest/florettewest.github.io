const gamesConfig = {
    labels: {
        click_anywhere_text: 'Click anywhere to start', // Used when on desktop
        tap_anywhere_text: 'Tap anywhere to start', // Used when on mobile

        postgame_header: 'Awesome!',
        about_header: 'About',
        settings_header: 'Settings',
        paused_header: 'Paused',

        ok_button: 'OK',
        home_button: 'HOME',
        done_button: 'DONE',
        replay_button: 'REPLAY',
        share_button: 'SHARE',
        about_button: 'ABOUT',
        continue_button: 'CONTINUE',
        audio_button: 'AUDIO: ',

        off_text: 'OFF',
        on_text: 'ON',
    },

    // The description of the hub as shown in the about page of the pause menu.
    about:
        "BankSA has been part of the fabric of South Australia since March 11, 1848, when The Savings Bank of South Australia, the forerunner of today's BankSA, began its life as a small one-person outfit.\n\nThat same day, the historic first deposit marked the Savings Bank as the 'people's bank' for generations to come.",

    // The link to where the share button in the post-game screen redirects to.
    share_link: 'https://www.banksa.com.au/',

    // The link to where the privacy button in the main menu screen redirects to.
    privacy_link: 'https://www.banksa.com.au/',

    // The link to where the terms and conditions button in the main menu screen redirects to.
    terms_link: 'https://www.banksa.com.au/',

    gameTypes: {
        SHOPPING: {
            // Whether or not the game will be loaded and displayed on the title screen.
            // At least one game must be enabled, otherwise the game will behave unexpectedly.
            enabled: true,

            // The color of the button in the title screen.
            buttonColor: 0xe91b2b,

            // The name of the game (shown in the title screen)
            name: 'Shopping List',

            // Game description (shown in game pre-loader)
            loadingString:
                'Go shopping to learn how to better manage your spending.',

            // Game controls (shown in game pre-loader)
            loadingControls:
                'Test your memory by matching the top shopping list with the shops below, ensuring you go in the right order.',

            // The messages that cycle in the post-game screen.
            messages: [
                'Use the Spend Tracker feature to help you track your categories in real- time and give you helpful insights on your spending habits.',
            ],

            tutorial_text:
                'Memorize the pattern and then tap the appropriate icons in order.',

            // The link to load with the call to action button in the post-game screen.
            // Note: If this key is deleted (or commented out), the call to action button will not show.
            link: 'https://www.banksa.com.au/',

            // The text of the call to action button in the post-game screen.
            link_string: 'Find out more',
        },
        PUPPER: {
            // Whether or not the game will be loaded and displayed on the title screen.
            // At least one game must be enabled, otherwise the game will behave unexpectedly.
            enabled: true,

            // The color of the button in the title screen.
            buttonColor: 0xe91b2b,

            // The name of the game (shown in the title screen)
            name: 'Puppy has My Wallet',

            // Game description (shown in game pre-loader)
            loadingString:
                "Just when you really need your wallet you can't get it, when you see the puppy, grab your wallet.",

            // Game controls (shown in game pre-loader)
            loadingControls: 'Tap the puppy to try and get your wallet back',

            // The messages that cycle in the post-game screen.
            messages: [
                "No wallet? No stress, use the Cardless Cash feature at an ATM to get cash out when you're in a pinch.",
            ],

            // The link to load with the call to action button in the post-game screen.
            // Note: If this key is deleted (or commented out), the call to action button will not show.
            link: 'https://www.banksa.com.au/',

            // The text of the call to action button in the post-game screen.
            link_string: 'Find out more',
        },
        UNLOCK: {
            // Whether or not the game will be loaded and displayed on the title screen.
            // At least one game must be enabled, otherwise the game will behave unexpectedly.
            enabled: true,

            // The color of the button in the title screen.
            buttonColor: 0xe91b2b,

            // The name of the game (shown in the title screen)
            name: 'Unlock',

            // Game description (shown in game pre-loader)
            loadingString: 'Learn more about locking your card using the app.',

            // Game controls (shown in game pre-loader)
            loadingControls:
                'Open the lock by tapping the up/down arrows for each letter, until you find the word that answers the clue.',

            // The messages that cycle in the post-game screen.
            messages: [
                'Temporarily lock you card for up to 15 days to gain added security while you look for it. If it turns up, you can simply unlock it, otherwise report it lost or stolen to cancel your card.',
            ],

            // Text is the description of the answer
            // Answer is the word to use (max 6 chars).
            questionSet: [
                {
                    text:
                        "If you've locked your card but have now found it, you can do this using the app.",
                    answer: 'UNLOCK',
                },
                {
                    text:
                        'If this happens to your card, you should cancel it using the app.',
                    answer: 'STOLEN',
                },
                {
                    text: 'Who can use your card once it is locked?',
                    answer: 'NOBODY',
                },
            ],

            // The link to load with the call to action button in the post-game screen.
            // Note: If this key is deleted (or commented out), the call to action button will not show.
            link: 'https://www.banksa.com.au/',

            // The text of the call to action button in the post-game screen.
            link_string: 'Find out how',
        },
    },
};
