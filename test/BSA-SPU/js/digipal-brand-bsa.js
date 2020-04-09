const hubConfig = {
    headerSize: 100, // Height of the header.

    color: {
        // The hub primary color (used for buttons with a call to action)
        primary: 0xe91b2b,

        // The dark hub color (used by some buttons and icons)
        dark: 0x002e6c,

        // The light hub color (used by some buttons and icons)
        light: 0x002e6c,

        // The light color used for text (usually in underlines)
        lightText: 0x20b6c4,

        // The background color of the game loading screen
        loadingBG: 0x002e6c,

        // The text color of the game loading screen.
        loadingText: 0xffffff,

        // The color of text when it is on a white background (about and game loading)
        textOnWhite: 0x58585b,

        // The color of text when it is on a gray background (about and game loading)
        textOnGray: 0x58585b,

        // The color of the hyperlinks in the privacy policy footer.
        privacy: 0xe71a29
    },

    // Font sizes for each of the different types of text.
    // This is dependent on the bitmap font that's being used and are not the actual pt sizes of the fonts.
    fontSize: {
        privacy: 24,
        xxsmall: 26,
        xsmall: 28,
        msmall: 32,
        postgame: 38,
        small: 36,
        medium: 48,
        large: 60,
        xlarge: 80
    }
};
