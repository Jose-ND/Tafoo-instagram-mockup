module.exports = {
    future: {
        removeDeprecatedGapUtilities: true
    },
    theme: {
        fill: (theme) => ({
            red: theme('colors.red.primary')
        }),
        colors: {
            white: '#ffffff',
            blue: {
                medium: '#005c98'
            },
            indigo: {
                500: '#6366f1',
                600: '#4f46e5'
            },
            purple: {
                500: '#a855f7',
                800: '#6b21a8'
            },
            fuchsia: {
                500: '#d946ef'
            },
            pink: {
                500: '#ec4899'
            },
            black: {
                light: '#005c98',
                faded: '#00000059'
            },
            gray: {
                base: '#616161',
                // background: '#fafafa',
                background: '#f4f4f5',
                // primary: '#dbdbdb',
                primary: '#dbdbdb',
            },
            red: {
                primary: '#ed4956'
            }
        },
        // screens: {
        //     '2xl': {'max': '1535px'},
        //     // => @media (max-width: 1535px) { ... }

        //     'xl': {'max': '1279px'},
        //     // => @media (max-width: 1279px) { ... }

        //     'lg': {'max': '1023px'},
        //     // => @media (max-width: 1023px) { ... }

        //     'md': {'max': '735px'},
        //     // => @media (max-width: 767px) { ... }

        //     'sm': {'max': '639px'},
        //     // => @media (max-width: 639px) { ... }
        // }
        
    },
    variants: {
        extend: {
            display: ['group-hover']
        }
    }
};