// Define the countries array
const countries = [
    { name: 'Afghanistan', code: 'af', prefix: '93' },
    { name: 'Albania', code: 'al', prefix: '355' },
    { name: 'Algeria', code: 'dz', prefix: '213' },
    { name: 'American Samoa', code: 'as', prefix: '1' },
    { name: 'Andorra', code: 'ad', prefix: '376' },
    { name: 'Angola', code: 'ao', prefix: '244' },
    { name: 'Anguilla', code: 'ai', prefix: '1' },
    { name: 'Antigua and Barbuda', code: 'ag', prefix: '1' },
    { name: 'Argentina', code: 'ar', prefix: '54' },
    { name: 'Armenia', code: 'am', prefix: '374' },
    { name: 'Aruba', code: 'aw', prefix: '297' },
    { name: 'Australia', code: 'au', prefix: '61' },
    { name: 'Austria', code: 'at', prefix: '43' },
    { name: 'Azerbaijan', code: 'az', prefix: '994' },
    { name: 'Bahamas', code: 'bs', prefix: '1' },
    { name: 'Bahrain', code: 'bh', prefix: '973' },
    { name: 'Bangladesh', code: 'bd', prefix: '880' },
    { name: 'Barbados', code: 'bb', prefix: '1' },
    { name: 'Belarus', code: 'by', prefix: '375' },
    { name: 'Belgium', code: 'be', prefix: '32' },
    { name: 'Belize', code: 'bz', prefix: '501' },
    { name: 'Benin', code: 'bj', prefix: '229' },
    { name: 'Bermuda', code: 'bm', prefix: '1' },
    { name: 'Bhutan', code: 'bt', prefix: '975' },
    { name: 'Bonaire, Sint Eustatius and Saba', code: 'bq', prefix: '599' },
    { name: 'Bosnia and Herzegovina', code: 'ba', prefix: '387' },
    { name: 'Botswana', code: 'bw', prefix: '267' },
    { name: 'Brazil', code: 'br', prefix: '55' },
    { name: 'British Virgin Islands', code: 'vg', prefix: '1' },
    { name: 'Brunei Darussalam', code: 'bn', prefix: '673' },
    { name: 'Bulgaria', code: 'bg', prefix: '359' },
    { name: 'Burkina Faso', code: 'bf', prefix: '226' },
    { name: 'Burundi', code: 'bi', prefix: '257' },
    { name: 'Cambodia', code: 'kh', prefix: '855' },
    { name: 'Cameroon', code: 'cm', prefix: '237' },
    { name: 'Canada', code: 'ca', prefix: '1' },
    { name: 'Cayman Islands', code: 'ky', prefix: '1' },
    { name: 'Chad', code: 'td', prefix: '235' },
    { name: 'Chile', code: 'cl', prefix: '56' },
    { name: 'China', code: 'cn', prefix: '86' },
    { name: 'Colombia', code: 'co', prefix: '57' },
    { name: 'Comoros', code: 'km', prefix: '269' },
    { name: 'Congo', code: 'cg', prefix: '242' },
    { name: 'Cook Islands', code: 'ck', prefix: '682' },
    { name: 'Costa Rica', code: 'cr', prefix: '506' },
    { name: 'Croatia', code: 'hr', prefix: '385' },
    { name: 'Cuba', code: 'cu', prefix: '53' },
    { name: 'Curaçao', code: 'cw', prefix: '599' },
    { name: 'Cyprus', code: 'cy', prefix: '357' },
    { name: "Côte d'Ivoire", code: 'ci', prefix: '225' },
    { name: 'Denmark', code: 'dk', prefix: '45' },
    { name: 'Djibouti', code: 'dj', prefix: '253' },
    { name: 'Dominica', code: 'dm', prefix: '1' },
    { name: 'Ecuador', code: 'ec', prefix: '593' },
    { name: 'Egypt', code: 'eg', prefix: '20' },
    { name: 'El Salvador', code: 'sv', prefix: '503' },
    { name: 'Equatorial Guinea', code: 'gq', prefix: '240' },
    { name: 'Eritrea', code: 'er', prefix: '291' },
    { name: 'Estonia', code: 'ee', prefix: '372' },
    { name: 'Ethiopia', code: 'et', prefix: '251' },
    { name: 'Falkland Islands (Malvinas)', code: 'fk', prefix: '500' },
    { name: 'Faroe Islands', code: 'fo', prefix: '298' },
    { name: 'Fiji', code: 'fj', prefix: '679' },
    { name: 'Finland', code: 'fi', prefix: '358' },
    { name: 'France', code: 'fr', prefix: '33' },
    { name: 'French Guiana', code: 'gf', prefix: '594' },
    { name: 'French Polynesia', code: 'pf', prefix: '689' },
    { name: 'Gabon', code: 'ga', prefix: '241' },
    { name: 'Gambia', code: 'gm', prefix: '220' },
    { name: 'Georgia', code: 'ge', prefix: '995' },
    { name: 'Germany', code: 'de', prefix: '49' },
    { name: 'Ghana', code: 'gh', prefix: '233' },
    { name: 'Gibraltar', code: 'gi', prefix: '350' },
    { name: 'Greece', code: 'gr', prefix: '30' },
    { name: 'Greenland', code: 'gl', prefix: '299' },
    { name: 'Grenada', code: 'gd', prefix: '1' },
    { name: 'Guadeloupe', code: 'gp', prefix: '590' },
    { name: 'Guam', code: 'gu', prefix: '1' },
    { name: 'Guatemala', code: 'gt', prefix: '502' },
    { name: 'Guinea', code: 'gn', prefix: '224' },
    { name: 'Guinea-Bissau', code: 'gw', prefix: '245' },
    { name: 'Guyana', code: 'gy', prefix: '592' },
    { name: 'Haiti', code: 'ht', prefix: '509' },
    { name: 'Honduras', code: 'hn', prefix: '504' },
    { name: 'Hungary', code: 'hu', prefix: '36' },
    { name: 'Iceland', code: 'is', prefix: '354' },
    { name: 'India', code: 'in', prefix: '91' },
    { name: 'Indonesia', code: 'id', prefix: '62' },
    { name: 'Iraq', code: 'iq', prefix: '964' },
    { name: 'Ireland', code: 'ie', prefix: '353' },
    { name: 'Israel', code: 'il', prefix: '972' },
    { name: 'Italy', code: 'it', prefix: '39' },
    { name: 'Jamaica', code: 'jm', prefix: '1' },
    { name: 'Japan', code: 'jp', prefix: '81' },
    { name: 'Jordan', code: 'jo', prefix: '962' },
    { name: 'Kazakhstan', code: 'kz', prefix: '7' },
    { name: 'Kenya', code: 'ke', prefix: '254' },
    { name: 'Kiribati', code: 'ki', prefix: '686' },
    { name: 'Kuwait', code: 'kw', prefix: '965' },
    { name: 'Kyrgyzstan', code: 'kg', prefix: '996' },
    { name: 'Latvia', code: 'lv', prefix: '371' },
    { name: 'Lebanon', code: 'lb', prefix: '961' },
    { name: 'Lesotho', code: 'ls', prefix: '266' },
    { name: 'Liberia', code: 'lr', prefix: '231' },
    { name: 'Libya', code: 'ly', prefix: '218' },
    { name: 'Liechtenstein', code: 'li', prefix: '423' },
    { name: 'Lithuania', code: 'lt', prefix: '370' },
    { name: 'Luxembourg', code: 'lu', prefix: '352' },
    { name: 'Madagascar', code: 'mg', prefix: '261' },
    { name: 'Malawi', code: 'mw', prefix: '265' },
    { name: 'Malaysia', code: 'my', prefix: '60' },
    { name: 'Maldives', code: 'mv', prefix: '960' },
    { name: 'Mali', code: 'ml', prefix: '223' },
    { name: 'Malta', code: 'mt', prefix: '356' },
    { name: 'Marshall Islands', code: 'mh', prefix: '692' },
    { name: 'Martinique', code: 'mq', prefix: '596' },
    { name: 'Mauritania', code: 'mr', prefix: '222' },
    { name: 'Mauritius', code: 'mu', prefix: '230' },
    { name: 'Mexico', code: 'mx', prefix: '52' },
    { name: 'Monaco', code: 'mc', prefix: '377' },
    { name: 'Mongolia', code: 'mn', prefix: '976' },
    { name: 'Montenegro', code: 'me', prefix: '382' },
    { name: 'Montserrat', code: 'ms', prefix: '1' },
    { name: 'Morocco', code: 'ma', prefix: '212' },
    { name: 'Mozambique', code: 'mz', prefix: '258' },
    { name: 'Myanmar', code: 'mm', prefix: '95' },
    { name: 'Namibia', code: 'na', prefix: '264' },
    { name: 'Nauru', code: 'nr', prefix: '674' },
    { name: 'Nepal', code: 'np', prefix: '977' },
    { name: 'Netherlands', code: 'nl', prefix: '31' },
    { name: 'New Caledonia', code: 'nc', prefix: '687' },
    { name: 'New Zealand', code: 'nz', prefix: '64' },
    { name: 'Nicaragua', code: 'ni', prefix: '505' },
    { name: 'Niger', code: 'ne', prefix: '227' },
    { name: 'Nigeria', code: 'ng', prefix: '234' },
    { name: 'Niue', code: 'nu', prefix: '683' },
    { name: 'Norway', code: 'no', prefix: '47' },
    { name: 'Oman', code: 'om', prefix: '968' },
    { name: 'Pakistan', code: 'pk', prefix: '92' },
    { name: 'Palau', code: 'pw', prefix: '680' },
    { name: 'Panama', code: 'pa', prefix: '507' },
    { name: 'Papua New Guinea', code: 'pg', prefix: '675' },
    { name: 'Paraguay', code: 'py', prefix: '595' },
    { name: 'Peru', code: 'pe', prefix: '51' },
    { name: 'Philippines', code: 'ph', prefix: '63' },
    { name: 'Poland', code: 'pl', prefix: '48' },
    { name: 'Portugal', code: 'pt', prefix: '351' },
    { name: 'Puerto Rico', code: 'pr', prefix: '1' },
    { name: 'Qatar', code: 'qa', prefix: '974' },
    { name: 'Romania', code: 'ro', prefix: '40' },
    { name: 'Russian Federation', code: 'ru', prefix: '7' },
    { name: 'Rwanda', code: 'rw', prefix: '250' },
    { name: 'Saint Helena, Ascension and Tristan da Cunha', code: 'sh', prefix: '247' },
    { name: 'Saint Kitts and Nevis', code: 'kn', prefix: '1' },
    { name: 'Saint Lucia', code: 'lc', prefix: '1' },
    { name: 'Saint Pierre and Miquelon', code: 'pm', prefix: '508' },
    { name: 'Saint Vincent and the Grenadines', code: 'vc', prefix: '1' },
    { name: 'Samoa', code: 'ws', prefix: '685' },
    { name: 'San Marino', code: 'sm', prefix: '378' },
    { name: 'Sao Tome and Principe', code: 'st', prefix: '239' },
    { name: 'Saudi Arabia', code: 'sa', prefix: '966' },
    { name: 'Senegal', code: 'sn', prefix: '221' },
    { name: 'Serbia', code: 'rs', prefix: '381' },
    { name: 'Seychelles', code: 'sc', prefix: '248' },
    { name: 'Sierra Leone', code: 'sl', prefix: '232' },
    { name: 'Singapore', code: 'sg', prefix: '65' },
    { name: 'Sint Maarten (Dutch part)', code: 'sx', prefix: '1' },
    { name: 'Slovakia', code: 'sk', prefix: '421' },
    { name: 'Slovenia', code: 'si', prefix: '386' },
    { name: 'Solomon Islands', code: 'sb', prefix: '677' },
    { name: 'Somalia', code: 'so', prefix: '252' },
    { name: 'South Africa', code: 'za', prefix: '27' },
    { name: 'South Sudan', code: 'ss', prefix: '211' },
    { name: 'Spain', code: 'es', prefix: '34' },
    { name: 'Sri Lanka', code: 'lk', prefix: '94' },
    { name: 'Sudan', code: 'sd', prefix: '249' },
    { name: 'Suriname', code: 'sr', prefix: '597' },
    { name: 'Sweden', code: 'se', prefix: '46' },
    { name: 'Switzerland', code: 'ch', prefix: '41' },
    { name: 'Syrian Arab Republic', code: 'sy', prefix: '963' },
    { name: 'Tajikistan', code: 'tj', prefix: '992' },
    { name: 'Tanzania', code: 'tz', prefix: '255' },
    { name: 'Thailand', code: 'th', prefix: '66' },
    { name: 'Timor-Leste', code: 'tl', prefix: '670' },
    { name: 'Togo', code: 'tg', prefix: '228' },
    { name: 'Tokelau', code: 'tk', prefix: '690' },
    { name: 'Tonga', code: 'to', prefix: '676' },
    { name: 'Trinidad and Tobago', code: 'tt', prefix: '1' },
    { name: 'Tunisia', code: 'tn', prefix: '216' },
    { name: 'Turkey', code: 'tr', prefix: '90' },
    { name: 'Turkmenistan', code: 'tm', prefix: '993' },
    { name: 'Turks and Caicos Islands', code: 'tc', prefix: '1' },
    { name: 'Tuvalu', code: 'tv', prefix: '688' },
    { name: 'Uganda', code: 'ug', prefix: '256' },
    { name: 'Ukraine', code: 'ua', prefix: '380' },
    { name: 'United Arab Emirates', code: 'ae', prefix: '971' },
    { name: 'United Kingdom', code: 'gb', prefix: '44' },
    { name: 'United States', code: 'us', prefix: '1' },
    { name: 'Uruguay', code: 'uy', prefix: '598' },
    { name: 'Uzbekistan', code: 'uz', prefix: '998' },
    { name: 'Vanuatu', code: 'vu', prefix: '678' },
    { name: 'Viet Nam', code: 'vn', prefix: '84' },
    { name: 'Wallis and Futuna', code: 'wf', prefix: '681' },
    { name: 'Yemen', code: 'ye', prefix: '967' },
    { name: 'Zambia', code: 'zm', prefix: '260' },
    { name: 'Zimbabwe', code: 'zw', prefix: '263' },
];
// Add this function before the countries array
function getCountryFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}
export class FormBuilder extends HTMLElement {
    static get observedAttributes() {
        return ['schema', 'theme', 'schema-url', 'theme-style', 'theme-color', 'font-family'];
    }
    constructor() {
        super();
        this.schema = [];
        this._values = {};
        this.searchableSelects = new Map();
        this.currentTheme = { style: 'modern', color: 'ocean' };
        this.shadow = this.attachShadow({ mode: 'open' });
        this.form = document.createElement('form');
        this.setupStyles();
        this.setupForm();
    }
    getThemeVariables() {
        const { style, color, fontFamily } = this.currentTheme;
        // Modern color palettes
        const colors = {
            ocean: {
                primary: '#00BCD4',
                secondary: '#008BA3',
                accent: '#E0F7FA',
                text: '#263238',
                background: '#FFFFFF',
                border: '#B2EBF2',
                error: '#E57373',
                success: '#81C784'
            },
            sunset: {
                primary: '#FF6E40',
                secondary: '#D84315',
                accent: '#FBE9E7',
                text: '#4E342E',
                background: '#FFFFFF',
                border: '#FFCCBC',
                error: '#E53935',
                success: '#43A047'
            },
            forest: {
                primary: '#2E7D32',
                secondary: '#1B5E20',
                accent: '#E8F5E9',
                text: '#1B262C',
                background: '#FFFFFF',
                border: '#C8E6C9',
                error: '#D32F2F',
                success: '#388E3C'
            },
            cosmic: {
                primary: '#673AB7',
                secondary: '#512DA8',
                accent: '#EDE7F6',
                text: '#212121',
                background: '#FFFFFF',
                border: '#D1C4E9',
                error: '#E91E63',
                success: '#4CAF50'
            },
            solarized: {
                primary: '#268BD2',
                secondary: '#2AA198',
                accent: '#FDF6E3',
                text: '#073642',
                background: '#FFFFFF',
                border: '#EEE8D5',
                error: '#DC322F',
                success: '#859900'
            }
        };
        // Style configurations
        const styles = {
            modern: {
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                borderWidth: '2px',
                shadow: '0 2px 6px rgba(0,0,0,0.12)',
                transition: 'all 0.2s ease'
            },
            minimal: {
                borderRadius: '0',
                padding: '0.5rem 0.75rem',
                borderWidth: '1px',
                shadow: 'none',
                transition: 'all 0.1s ease'
            },
            rounded: {
                borderRadius: '24px',
                padding: '0.75rem 1.25rem',
                borderWidth: '2px',
                shadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease'
            },
            flat: {
                borderRadius: '4px',
                padding: '0.75rem 1rem',
                borderWidth: '0',
                shadow: 'none',
                transition: 'all 0.2s ease'
            },
            outlined: {
                borderRadius: '4px',
                padding: '0.75rem 1rem',
                borderWidth: '2px',
                shadow: 'none',
                transition: 'all 0.2s ease'
            }
        };
        const palette = colors[color] || colors.ocean;
        const styleConfig = styles[style] || styles.modern;
        const defaultFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif";
        return `
      :host {
        /* Colors */
        --primary-color: ${palette.primary};
        --secondary-color: ${palette.secondary};
        --accent-color: ${palette.accent};
        --text-color: ${palette.text};
        --background-color: ${palette.background};
        --border-color: ${palette.border};
        --error-color: ${palette.error};
        --success-color: ${palette.success};
        
        /* Typography */
        --font-family: ${fontFamily || defaultFont};
        --line-height: 1.6;
        --font-size-base: 16px;
        --font-size-small: 0.875rem;
        --font-size-large: 1.125rem;
        --font-weight-normal: 400;
        --font-weight-medium: 500;
        --font-weight-bold: 600;
        
        /* Border & Shadows */
        --border-radius: ${styleConfig.borderRadius};
        --input-padding: ${styleConfig.padding};
        --border-width: ${styleConfig.borderWidth};
        --box-shadow: ${styleConfig.shadow};
        --transition: ${styleConfig.transition};
        
        /* Form & Inputs */
        --form-padding: 2rem;
        --label-color: var(--text-color);
        --input-bg: var(--background-color);
        --input-hover-bg: var(--accent-color);
        --focus-color: var(--primary-color);
        --checkbox-size: 20px;
        --select-option-hover: var(--accent-color);
        --select-option-selected: var(--primary-color);
        
        /* Buttons */
        --button-bg: var(--primary-color);
        --button-hover-bg: var(--secondary-color);
        --button-color: #FFFFFF;
        --button-padding: var(--input-padding);
        --button-border-radius: var(--border-radius);
        --button-font-size: var(--font-size-base);
        --button-font-weight: var(--font-weight-medium);
        --button-transition: var(--transition);
      }

      /* Base Styles */
      :host {
        display: block;
        font-family: var(--font-family);
        font-size: var(--font-size-base);
        line-height: var(--line-height);
        color: var(--text-color);
      }

      form {
        padding: var(--form-padding);
        background: var(--background-color);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      label {
        display: block;
        color: var(--label-color);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-base);
        margin-bottom: 0.5rem;
      }

      input, select, textarea {
        width: 100%;
        padding: var(--input-padding);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: var(--font-size-base);
        font-family: var(--font-family);
        background: var(--input-bg);
        transition: var(--transition);
        color: var(--text-color);
        box-sizing: border-box;
      }

      input:hover, select:hover, textarea:hover {
        background: var(--input-hover-bg);
        border-color: var(--primary-color);
      }

      input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: var(--focus-color);
        box-shadow: 0 0 0 3px var(--accent-color);
        background: var(--input-hover-bg);
      }

      .help-text {
        font-size: var(--font-size-small);
        color: var(--text-color);
        opacity: 0.8;
        margin-top: 0.25rem;
      }

      .error {
        color: var(--error-color);
        font-size: var(--font-size-small);
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      button[type="submit"] {
        background-color: var(--button-bg);
        color: var(--button-color);
        padding: var(--button-padding);
        border: none;
        border-radius: var(--button-border-radius);
        font-size: var(--button-font-size);
        font-weight: var(--button-font-weight);
        font-family: var(--font-family);
        cursor: pointer;
        transition: var(--button-transition);
        align-self: flex-start;
        min-width: 120px;
      }

      button[type="submit"]:hover {
        background-color: var(--button-hover-bg);
        transform: translateY(-1px);
        box-shadow: var(--box-shadow);
      }

      /* Custom Select Styling */
      .select-wrapper {
        position: relative;
        width: 100%;
      }

      .select-search {
        width: 100%;
        padding: var(--input-padding);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: 1rem;
        background: var(--input-bg);
        transition: all var(--transition-speed) ease;
        cursor: pointer;
      }

      .select-options {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        right: 0;
        background: var(--background-color);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        max-height: 200px;
        overflow-y: auto;
        z-index: 1000;
        box-shadow: var(--box-shadow);
        display: none;
      }

      .select-options.show {
        display: block;
      }

      .select-option {
        padding: 0.75rem 1rem;
        cursor: pointer;
        transition: background-color var(--transition-speed) ease;
      }

      .select-option:hover {
        background-color: var(--select-option-hover);
      }

      .select-option.selected {
        background-color: var(--select-option-selected);
      }

      /* Custom Checkbox Styling */
      .checkbox-wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem;
        border-radius: var(--border-radius);
        transition: background-color var(--transition-speed) ease;
        cursor: pointer;
      }

      .checkbox-wrapper:hover {
        background-color: var(--input-bg);
      }

      .checkbox-wrapper input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }

      .checkbox-custom {
        position: relative;
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border: 2px solid var(--border-color);
        border-radius: var(--border-radius);
        transition: all var(--transition-speed) ease;
        flex-shrink: 0;
      }

      .checkbox-wrapper input[type="checkbox"]:checked + .checkbox-custom {
        background-color: var(--focus-color);
        border-color: var(--focus-color);
      }

      .checkbox-wrapper input[type="checkbox"]:checked + .checkbox-custom::after {
        content: "✓";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 14px;
      }

      /* Radio Group Styling */
      .radio-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .radio-wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem;
        border-radius: var(--border-radius);
        transition: background-color var(--transition-speed) ease;
        cursor: pointer;
      }

      .radio-wrapper:hover {
        background-color: var(--input-bg);
      }

      .radio-wrapper input[type="radio"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }

      .radio-custom {
        position: relative;
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border: 2px solid var(--border-color);
        border-radius: 50%;
        transition: all var(--transition-speed) ease;
        flex-shrink: 0;
      }

      .radio-wrapper input[type="radio"]:checked + .radio-custom {
        border-color: var(--focus-color);
      }

      .radio-wrapper input[type="radio"]:checked + .radio-custom::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: var(--focus-color);
        border-radius: 50%;
      }

      /* Telephone Input Styling */
      .telephone-wrapper {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .country-code-wrapper {
        position: relative;
        min-width: 80px;
        max-width: 100px;
      }

      .country-code-display {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: var(--input-padding);
        background: var(--input-bg);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        color: var(--text-color);
        cursor: pointer;
        transition: var(--transition);
        white-space: nowrap;
        overflow: hidden;
      }

      .country-code-display:hover {
        border-color: var(--primary-color);
        background: var(--accent-color);
      }

      .country-code-display img {
        width: 16px;
        height: 12px;
        object-fit: cover;
        border-radius: 2px;
        flex-shrink: 0;
      }

      .country-options {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        right: 0;
        background: var(--background-color);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        max-height: 300px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
        box-shadow: var(--box-shadow);
        padding: 0.5rem;
        min-width: 200px;
      }

      .country-options .select-search {
        width: 100%;
        padding: var(--input-padding);
        margin-bottom: 0.5rem;
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        background: var(--input-bg);
        color: var(--text-color);
      }

      .options-container {
        max-height: 200px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--primary-color) var(--input-bg);
      }

      .options-container::-webkit-scrollbar {
        width: 6px;
      }

      .options-container::-webkit-scrollbar-track {
        background: var(--input-bg);
        border-radius: 3px;
      }

      .options-container::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 3px;
      }

      .country-option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: background-color 0.2s;
        color: var(--text-color);
        white-space: nowrap;
      }

      .country-option:hover {
        background-color: var(--accent-color);
      }

      .country-option img {
        width: 16px;
        height: 12px;
        object-fit: cover;
        border-radius: 2px;
        flex-shrink: 0;
      }

      .country-name {
        flex: 1;
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--text-color);
      }

      .country-prefix {
        color: var(--primary-color);
        font-weight: 500;
        flex-shrink: 0;
      }

      .telephone-input {
        flex: 1;
      }

      @media (max-width: 768px) {
        .country-options {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 400px;
          max-height: 80vh;
          margin: 0;
          z-index: 1000;
          background: var(--background-color);
        }

        .options-container {
          max-height: calc(80vh - 60px);
        }

        .country-option {
          padding: 0.75rem;
        }

        .country-name {
          font-size: 1rem;
        }
      }

      /* Password Input Styling */
      .password-wrapper {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
      }

      .password-toggle {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        padding: 5px;
        cursor: pointer;
        color: var(--text-color);
        opacity: 0.7;
        transition: opacity 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .password-toggle:hover {
        opacity: 1;
      }

      .password-toggle svg {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }

      .password-wrapper input[type="password"],
      .password-wrapper input[type="text"] {
        padding-right: 40px;
      }

      /* Color Input Styling */
      .color-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      input[type="color"] {
        -webkit-appearance: none;
        width: 50px;
        height: 50px;
        padding: 0;
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        cursor: pointer;
        background: none;
      }

      input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
        border-radius: var(--border-radius);
      }

      input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: var(--border-radius);
      }

      input[type="color"]:hover {
        border-color: var(--primary-color);
      }

      .color-preview {
        font-size: 0.9rem;
        color: var(--text-color);
        opacity: 0.8;
      }

      /* File Input Styling */
      .file-wrapper {
        position: relative;
        width: 100%;
      }

      .file-input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        z-index: 2;
      }

      .file-label {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: var(--input-padding);
        border: 2px dashed var(--border-color);
        border-radius: var(--border-radius);
        background: var(--input-bg);
        transition: var(--transition);
        cursor: pointer;
      }

      .file-label:hover {
        border-color: var(--primary-color);
        background: var(--input-hover-bg);
      }

      .file-icon {
        width: 24px;
        height: 24px;
        color: var(--primary-color);
      }

      .file-text {
        color: var(--text-color);
        font-size: 0.9rem;
      }

      .file-list {
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .file-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        background: var(--input-bg);
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        color: var(--text-color);
      }

      .file-item-name {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .file-item-size {
        color: var(--text-color);
        opacity: 0.7;
        font-size: 0.8rem;
      }

      .file-item-remove {
        background: none;
        border: none;
        color: var(--error-color);
        cursor: pointer;
        padding: 0.25rem;
        opacity: 0.7;
        transition: opacity 0.2s;
      }

      .file-item-remove:hover {
        opacity: 1;
      }

      /* Time Input Styling */
      input[type="time"] {
        position: relative;
        cursor: pointer;
      }

      input[type="time"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s;
      }

      input[type="time"]::-webkit-calendar-picker-indicator:hover {
        opacity: 1;
      }

      input[type="time"]::-webkit-datetime-edit {
        padding: 0;
      }

      input[type="time"]::-webkit-datetime-edit-fields-wrapper {
        padding: 0;
      }

      input[type="time"]::-webkit-datetime-edit-text {
        padding: 0 0.2em;
      }

      input[type="time"]::-webkit-datetime-edit-hour-field,
      input[type="time"]::-webkit-datetime-edit-minute-field,
      input[type="time"]::-webkit-datetime-edit-second-field {
        padding: 0 0.2em;
      }

      /* Image Input Styling */
      .image-wrapper {
        position: relative;
        width: 100%;
      }

      .image-preview-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }

      .image-preview {
        position: relative;
        aspect-ratio: 1;
        border-radius: var(--border-radius);
        overflow: hidden;
        background: var(--input-bg);
        border: 2px solid var(--border-color);
      }

      .image-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .image-preview .remove-image {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .image-preview:hover .remove-image {
        opacity: 1;
      }

      .image-preview .remove-image:hover {
        background: rgba(0, 0, 0, 0.7);
      }

      .image-input-label {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: var(--input-padding);
        border: 2px dashed var(--border-color);
        border-radius: var(--border-radius);
        background: var(--input-bg);
        transition: var(--transition);
        cursor: pointer;
      }

      .image-input-label:hover {
        border-color: var(--primary-color);
        background: var(--input-hover-bg);
      }

      .image-icon {
        width: 24px;
        height: 24px;
        color: var(--primary-color);
      }
    `;
    }
    setupStyles() {
        const style = document.createElement('style');
        style.textContent = this.getThemeVariables() + `
      form {
        padding: var(--form-padding);
        background: var(--background-color);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .field-group {
        margin-bottom: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      label {
        display: block;
        color: var(--label-color);
        font-weight: 500;
        font-size: 0.95rem;
        transition: var(--transition);
      }

      input, select, textarea {
        width: 100%;
        padding: var(--input-padding);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: 1rem;
        background: var(--input-bg);
        transition: var(--transition);
        color: var(--text-color);
        box-sizing: border-box;
      }

      input:hover, select:hover, textarea:hover {
        background: var(--input-hover-bg);
        border-color: var(--primary-color);
      }

      input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: var(--focus-color);
        box-shadow: 0 0 0 3px var(--accent-color);
        background: var(--input-hover-bg);
      }

      /* Custom Select Styling */
      .select-wrapper {
        position: relative;
        width: 100%;
      }

      .select-search {
        width: 100%;
        padding: var(--input-padding);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: 1rem;
        background: var(--input-bg);
        transition: all var(--transition-speed) ease;
        cursor: pointer;
      }

      .select-options {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        right: 0;
        background: var(--background-color);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        max-height: 200px;
        overflow-y: auto;
        z-index: 1000;
        box-shadow: var(--box-shadow);
        display: none;
      }

      .select-options.show {
        display: block;
      }

      .select-option {
        padding: 0.75rem 1rem;
        cursor: pointer;
        transition: background-color var(--transition-speed) ease;
      }

      .select-option:hover {
        background-color: var(--select-option-hover);
      }

      .select-option.selected {
        background-color: var(--select-option-selected);
      }

      /* Custom Checkbox Styling */
      .checkbox-wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem;
        border-radius: var(--border-radius);
        transition: background-color var(--transition-speed) ease;
        cursor: pointer;
      }

      .checkbox-wrapper:hover {
        background-color: var(--input-bg);
      }

      .checkbox-wrapper input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }

      .checkbox-custom {
        position: relative;
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border: 2px solid var(--border-color);
        border-radius: var(--border-radius);
        transition: all var(--transition-speed) ease;
        flex-shrink: 0;
      }

      .checkbox-wrapper input[type="checkbox"]:checked + .checkbox-custom {
        background-color: var(--focus-color);
        border-color: var(--focus-color);
      }

      .checkbox-wrapper input[type="checkbox"]:checked + .checkbox-custom::after {
        content: "✓";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 14px;
      }

      /* Radio Group Styling */
      .radio-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .radio-wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem;
        border-radius: var(--border-radius);
        transition: background-color var(--transition-speed) ease;
        cursor: pointer;
      }

      .radio-wrapper:hover {
        background-color: var(--input-bg);
      }

      .radio-wrapper input[type="radio"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }

      .radio-custom {
        position: relative;
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border: 2px solid var(--border-color);
        border-radius: 50%;
        transition: all var(--transition-speed) ease;
        flex-shrink: 0;
      }

      .radio-wrapper input[type="radio"]:checked + .radio-custom {
        border-color: var(--focus-color);
      }

      .radio-wrapper input[type="radio"]:checked + .radio-custom::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: var(--focus-color);
        border-radius: 50%;
      }

      /* Button Styling */
      button[type="submit"] {
        background-color: var(--button-bg);
        color: var(--button-color);
        padding: var(--button-padding);
        border: none;
        border-radius: var(--button-border-radius);
        font-size: var(--button-font-size);
        font-weight: var(--button-font-weight);
        cursor: pointer;
        transition: var(--button-transition);
        align-self: flex-start;
        min-width: 120px;
      }

      button[type="submit"]:hover {
        background-color: var(--button-hover-bg);
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
      }

      button[type="submit"]:active {
        transform: translateY(0);
        box-shadow: var(--shadow-sm);
      }

      /* Help Text Styling */
      .help-text {
        font-size: 0.875rem;
        color: #666;
        margin-top: 0.25rem;
      }

      /* Error Message Styling */
      .error {
        color: var(--error-color);
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .error::before {
        content: "⚠️";
      }

      /* Dark Mode Support */
      @media (prefers-color-scheme: dark) {
        :host {
          --label-color: #ecf0f1;
          --border-color: #34495e;
          --input-bg: #2c3e50;
          --input-hover-bg: #34495e;
          --background-color: #2c3e50;
          --select-option-hover: #34495e;
          --select-option-selected: #2c3e50;
          --text-color: #ecf0f1;
        }

        input, select, textarea {
          color: var(--text-color);
        }

        .select-options {
          background: var(--background-color);
          border-color: var(--border-color);
        }

        .help-text {
          color: #bdc3c7;
        }

        /* Preserve theme style in dark mode */
        .country-code-display,
        .select-search,
        input,
        select,
        textarea {
          border-width: var(--border-width);
          border-radius: var(--border-radius);
          padding: var(--input-padding);
        }
      }

      /* Enhanced Number Input Styling */
      input[type="number"] {
        -moz-appearance: textfield;
      }

      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 2.5em;
        border-left: 1px solid var(--border-color);
        opacity: 0.5;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
        background: var(--input-bg);
      }

      input[type="number"]:hover::-webkit-outer-spin-button,
      input[type="number"]:hover::-webkit-inner-spin-button {
        opacity: 1;
      }

      input[type="number"]::-webkit-outer-spin-button::before,
      input[type="number"]::-webkit-inner-spin-button::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }

      input[type="number"]::-webkit-outer-spin-button::before {
        border-bottom: 5px solid var(--text-color);
        top: 25%;
      }

      input[type="number"]::-webkit-inner-spin-button::before {
        border-top: 5px solid var(--text-color);
        bottom: 25%;
      }

      /* Custom Scrollbar Styling */
      .select-options::-webkit-scrollbar {
        width: 8px;
      }

      .select-options::-webkit-scrollbar-track {
        background: var(--input-bg);
        border-radius: 4px;
      }

      .select-options::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 4px;
      }

      .select-options::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-color);
      }

      /* Telephone Input Styling */
      .telephone-wrapper {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .country-code-wrapper {
        position: relative;
        min-width: 80px;
        max-width: 100px;
      }

      .country-code-display {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: var(--input-padding);
        background: var(--input-bg);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        color: var(--text-color);
        cursor: pointer;
        transition: var(--transition);
        white-space: nowrap;
        overflow: hidden;
      }

      .country-code-display:hover {
        border-color: var(--primary-color);
        background: var(--accent-color);
      }

      .country-code-display img {
        width: 16px;
        height: 12px;
        object-fit: cover;
        border-radius: 2px;
        flex-shrink: 0;
      }

      .country-options {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        right: 0;
        background: var(--background-color);
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        max-height: 300px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
        box-shadow: var(--box-shadow);
        padding: 0.5rem;
        min-width: 200px;
      }

      .country-options .select-search {
        width: 100%;
        padding: var(--input-padding);
        margin-bottom: 0.5rem;
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        background: var(--input-bg);
        color: var(--text-color);
      }

      .country-options .select-search:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px var(--accent-color);
      }

      .options-container {
        max-height: 200px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--primary-color) var(--input-bg);
      }

      .options-container::-webkit-scrollbar {
        width: 6px;
      }

      .options-container::-webkit-scrollbar-track {
        background: var(--input-bg);
        border-radius: 3px;
      }

      .options-container::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 3px;
      }

      .country-option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: background-color 0.2s;
        color: var(--text-color);
        white-space: nowrap;
      }

      .country-option:hover {
        background-color: var(--accent-color);
      }

      .country-option img {
        width: 16px;
        height: 12px;
        object-fit: cover;
        border-radius: 2px;
        flex-shrink: 0;
      }

      .country-name {
        flex: 1;
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--text-color);
      }

      .country-prefix {
        color: var(--primary-color);
        font-weight: 500;
        flex-shrink: 0;
      }

      .telephone-input {
        flex: 1;
      }

      @media (max-width: 768px) {
        .country-options {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 400px;
          max-height: 80vh;
          margin: 0;
          z-index: 1000;
          background: var(--background-color);
        }

        .options-container {
          max-height: calc(80vh - 60px);
        }

        .country-option {
          padding: 0.75rem;
        }

        .country-name {
          font-size: 1rem;
        }
      }

      /* Password Input Styling */
      .password-wrapper {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
      }

      .password-toggle {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        padding: 5px;
        cursor: pointer;
        color: var(--text-color);
        opacity: 0.7;
        transition: opacity 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .password-toggle:hover {
        opacity: 1;
      }

      .password-toggle svg {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }

      .password-wrapper input[type="password"],
      .password-wrapper input[type="text"] {
        padding-right: 40px;
      }

      /* Color Input Styling */
      .color-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      input[type="color"] {
        -webkit-appearance: none;
        width: 50px;
        height: 50px;
        padding: 0;
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--border-radius);
        cursor: pointer;
        background: none;
      }

      input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
        border-radius: var(--border-radius);
      }

      input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: var(--border-radius);
      }

      input[type="color"]:hover {
        border-color: var(--primary-color);
      }

      .color-preview {
        font-size: 0.9rem;
        color: var(--text-color);
        opacity: 0.8;
      }

      /* File Input Styling */
      .file-wrapper {
        position: relative;
        width: 100%;
      }

      .file-input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        z-index: 2;
      }

      .file-label {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: var(--input-padding);
        border: 2px dashed var(--border-color);
        border-radius: var(--border-radius);
        background: var(--input-bg);
        transition: var(--transition);
        cursor: pointer;
      }

      .file-label:hover {
        border-color: var(--primary-color);
        background: var(--input-hover-bg);
      }

      .file-icon {
        width: 24px;
        height: 24px;
        color: var(--primary-color);
      }

      .file-text {
        color: var(--text-color);
        font-size: 0.9rem;
      }

      .file-list {
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .file-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        background: var(--input-bg);
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        color: var(--text-color);
      }

      .file-item-name {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .file-item-size {
        color: var(--text-color);
        opacity: 0.7;
        font-size: 0.8rem;
      }

      .file-item-remove {
        background: none;
        border: none;
        color: var(--error-color);
        cursor: pointer;
        padding: 0.25rem;
        opacity: 0.7;
        transition: opacity 0.2s;
      }

      .file-item-remove:hover {
        opacity: 1;
      }

      /* Time Input Styling */
      input[type="time"] {
        position: relative;
        cursor: pointer;
      }

      input[type="time"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s;
      }

      input[type="time"]::-webkit-calendar-picker-indicator:hover {
        opacity: 1;
      }

      input[type="time"]::-webkit-datetime-edit {
        padding: 0;
      }

      input[type="time"]::-webkit-datetime-edit-fields-wrapper {
        padding: 0;
      }

      input[type="time"]::-webkit-datetime-edit-text {
        padding: 0 0.2em;
      }

      input[type="time"]::-webkit-datetime-edit-hour-field,
      input[type="time"]::-webkit-datetime-edit-minute-field,
      input[type="time"]::-webkit-datetime-edit-second-field {
        padding: 0 0.2em;
      }

      /* Image Input Styling */
      .image-wrapper {
        position: relative;
        width: 100%;
      }

      .image-preview-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }

      .image-preview {
        position: relative;
        aspect-ratio: 1;
        border-radius: var(--border-radius);
        overflow: hidden;
        background: var(--input-bg);
        border: 2px solid var(--border-color);
      }

      .image-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .image-preview .remove-image {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .image-preview:hover .remove-image {
        opacity: 1;
      }

      .image-preview .remove-image:hover {
        background: rgba(0, 0, 0, 0.7);
      }

      .image-input-label {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: var(--input-padding);
        border: 2px dashed var(--border-color);
        border-radius: var(--border-radius);
        background: var(--input-bg);
        transition: var(--transition);
        cursor: pointer;
      }

      .image-input-label:hover {
        border-color: var(--primary-color);
        background: var(--input-hover-bg);
      }

      .image-icon {
        width: 24px;
        height: 24px;
        color: var(--primary-color);
      }
    `;
        this.shadow.appendChild(style);
    }
    setupForm() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.shadow.appendChild(this.form);
    }
    createField(field) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'field-group';
        if (field.style?.customClass) {
            fieldGroup.classList.add(field.style.customClass);
        }
        const label = document.createElement('label');
        label.textContent = field.label;
        if (field.required) {
            label.textContent += ' *';
        }
        fieldGroup.appendChild(label);
        let input;
        switch (field.type) {
            case 'textarea':
                input = document.createElement('textarea');
                if (field.rows)
                    input.setAttribute('rows', field.rows.toString());
                if (field.cols)
                    input.setAttribute('cols', field.cols.toString());
                break;
            case 'select':
                if (field.searchable) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'select-wrapper';
                    const searchInput = document.createElement('input');
                    searchInput.type = 'text';
                    searchInput.className = 'select-search';
                    searchInput.placeholder = 'Search...';
                    searchInput.readOnly = false;
                    this.searchableSelects.set(field.name, searchInput);
                    const select = document.createElement('select');
                    select.name = field.name;
                    if (field.required) {
                        select.setAttribute('required', '');
                    }
                    select.style.display = 'none'; // Hide the actual select
                    const optionsContainer = document.createElement('div');
                    optionsContainer.className = 'select-options';
                    if (field.options) {
                        field.options.forEach(option => {
                            const optionText = typeof option === 'string' ? option : option.label;
                            const optionValue = typeof option === 'string' ? option : option.value;
                            // Create the visible option div
                            const optionEl = document.createElement('div');
                            optionEl.className = 'select-option';
                            optionEl.textContent = optionText;
                            optionEl.setAttribute('data-value', optionValue);
                            optionsContainer.appendChild(optionEl);
                            // Create the actual option element
                            const selectOption = document.createElement('option');
                            selectOption.value = optionValue;
                            selectOption.textContent = optionText;
                            select.appendChild(selectOption);
                        });
                    }
                    wrapper.appendChild(searchInput);
                    wrapper.appendChild(select);
                    wrapper.appendChild(optionsContainer);
                    input = wrapper;
                    // Add search functionality
                    searchInput.addEventListener('input', (e) => {
                        const searchTerm = e.target.value.toLowerCase();
                        const options = optionsContainer.querySelectorAll('.select-option');
                        let hasVisibleOptions = false;
                        options.forEach(option => {
                            const text = option.textContent?.toLowerCase() || '';
                            const isVisible = text.includes(searchTerm);
                            option.style.display = isVisible ? 'block' : 'none';
                            if (isVisible)
                                hasVisibleOptions = true;
                        });
                        // Show/hide options container based on search
                        if (searchTerm && hasVisibleOptions) {
                            optionsContainer.classList.add('show');
                        }
                        else if (!searchTerm) {
                            optionsContainer.classList.remove('show');
                        }
                    });
                    // Add click handling
                    searchInput.addEventListener('click', (e) => {
                        e.stopPropagation();
                        optionsContainer.classList.toggle('show');
                        // Show all options when clicking
                        const options = optionsContainer.querySelectorAll('.select-option');
                        options.forEach(option => {
                            option.style.display = 'block';
                        });
                    });
                    optionsContainer.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const option = e.target.closest('.select-option');
                        if (option) {
                            const value = option.getAttribute('data-value');
                            if (value) {
                                searchInput.value = option.textContent || '';
                                select.value = value;
                                optionsContainer.classList.remove('show');
                                // Dispatch change event
                                const event = new Event('change', { bubbles: true });
                                select.dispatchEvent(event);
                            }
                        }
                    });
                    // Close dropdown when clicking outside
                    document.addEventListener('click', () => {
                        optionsContainer.classList.remove('show');
                    });
                    // Set default value if provided
                    if (field.defaultValue !== undefined) {
                        const defaultValue = field.defaultValue.toString();
                        const defaultOption = field.options?.find(opt => (typeof opt === 'string' ? opt : opt.value) === defaultValue);
                        if (defaultOption) {
                            const defaultText = typeof defaultOption === 'string' ? defaultOption : defaultOption.label;
                            searchInput.value = defaultText;
                            select.value = defaultValue;
                        }
                    }
                }
                else {
                    input = document.createElement('select');
                    if (field.multiple)
                        input.setAttribute('multiple', '');
                    if (field.options) {
                        field.options.forEach(option => {
                            const optionEl = document.createElement('option');
                            if (typeof option === 'string') {
                                optionEl.value = option;
                                optionEl.textContent = option;
                            }
                            else {
                                optionEl.value = option.value;
                                optionEl.textContent = option.label;
                            }
                            input.appendChild(optionEl);
                        });
                    }
                }
                break;
            case 'checkbox':
                const checkboxWrapper = document.createElement('label');
                checkboxWrapper.className = 'checkbox-wrapper';
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = field.name;
                const checkboxCustom = document.createElement('span');
                checkboxCustom.className = 'checkbox-custom';
                const checkboxLabel = document.createElement('span');
                checkboxLabel.textContent = field.label;
                checkboxWrapper.appendChild(checkbox);
                checkboxWrapper.appendChild(checkboxCustom);
                checkboxWrapper.appendChild(checkboxLabel);
                fieldGroup.removeChild(label); // Remove the original label
                fieldGroup.appendChild(checkboxWrapper);
                return fieldGroup;
            case 'radio':
                const radioGroup = document.createElement('div');
                radioGroup.className = 'radio-group';
                if (field.options) {
                    field.options.forEach(option => {
                        const radioWrapper = document.createElement('label');
                        radioWrapper.className = 'radio-wrapper';
                        const radio = document.createElement('input');
                        radio.type = 'radio';
                        radio.name = field.name;
                        radio.value = typeof option === 'string' ? option : option.value;
                        const radioCustom = document.createElement('span');
                        radioCustom.className = 'radio-custom';
                        const radioLabel = document.createElement('span');
                        radioLabel.textContent = typeof option === 'string' ? option : option.label;
                        radioWrapper.appendChild(radio);
                        radioWrapper.appendChild(radioCustom);
                        radioWrapper.appendChild(radioLabel);
                        radioGroup.appendChild(radioWrapper);
                    });
                }
                fieldGroup.removeChild(label); // Remove the original label
                fieldGroup.appendChild(radioGroup);
                return fieldGroup;
            case 'telephone':
                const telephoneWrapper = document.createElement('div');
                telephoneWrapper.className = 'telephone-wrapper';
                const countryCodeWrapper = document.createElement('div');
                countryCodeWrapper.className = 'country-code-wrapper';
                const countryCodeDisplay = document.createElement('div');
                countryCodeDisplay.className = 'country-code-display';
                countryCodeDisplay.tabIndex = 0;
                const flagSpan = document.createElement('span');
                flagSpan.className = 'country-flag';
                const prefixSpan = document.createElement('span');
                prefixSpan.className = 'country-prefix';
                // Find default country based on field.countryCode or use first country
                const defaultCountry = field.countryCode
                    ? countries.find(c => c.code.toLowerCase() === field.countryCode?.toLowerCase()) || countries[0]
                    : countries[0];
                flagSpan.textContent = getCountryFlagEmoji(defaultCountry.code);
                prefixSpan.textContent = `+${defaultCountry.prefix}`;
                countryCodeDisplay.appendChild(flagSpan);
                countryCodeDisplay.appendChild(prefixSpan);
                const countryOptions = document.createElement('div');
                countryOptions.className = 'country-options';
                countryOptions.style.display = 'none';
                const optionsContainer = document.createElement('div');
                optionsContainer.className = 'options-container';
                countries.forEach(country => {
                    const option = document.createElement('div');
                    option.className = 'country-option';
                    option.dataset.code = country.code;
                    option.dataset.prefix = country.prefix;
                    option.dataset.name = country.name;
                    const optionFlag = document.createElement('span');
                    optionFlag.className = 'country-flag';
                    optionFlag.textContent = getCountryFlagEmoji(country.code);
                    const optionText = document.createElement('span');
                    optionText.className = 'country-name';
                    optionText.textContent = country.name;
                    const optionPrefix = document.createElement('span');
                    optionPrefix.className = 'country-prefix';
                    optionPrefix.textContent = `+${country.prefix}`;
                    option.appendChild(optionFlag);
                    option.appendChild(optionText);
                    option.appendChild(optionPrefix);
                    optionsContainer.appendChild(option);
                });
                countryOptions.appendChild(optionsContainer);
                countryCodeWrapper.appendChild(countryCodeDisplay);
                countryCodeWrapper.appendChild(countryOptions);
                telephoneWrapper.appendChild(countryCodeWrapper);
                const telInput = document.createElement('input');
                telInput.type = 'tel';
                telInput.name = field.name;
                telInput.id = field.name;
                telInput.required = field.required ?? false;
                telInput.placeholder = field.placeholder || '';
                telInput.className = 'telephone-input';
                telephoneWrapper.appendChild(telInput);
                // Add hidden input for country code
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = `${field.name}_country_code`;
                hiddenInput.value = defaultCountry.code;
                telephoneWrapper.appendChild(hiddenInput);
                // Toggle country options on click
                countryCodeDisplay.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isVisible = countryOptions.style.display === 'block';
                    countryOptions.style.display = isVisible ? 'none' : 'block';
                    if (!isVisible) {
                        countryCodeDisplay.focus();
                    }
                });
                // Handle keyboard navigation
                countryCodeDisplay.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const isVisible = countryOptions.style.display === 'block';
                        countryOptions.style.display = isVisible ? 'none' : 'block';
                        if (!isVisible) {
                            countryCodeDisplay.focus();
                        }
                    }
                });
                // Handle country selection
                optionsContainer.addEventListener('click', (e) => {
                    const option = e.target.closest('.country-option');
                    if (option) {
                        const code = option.dataset.code;
                        const prefix = option.dataset.prefix;
                        const name = option.dataset.name;
                        if (code && prefix) {
                            flagSpan.textContent = getCountryFlagEmoji(code);
                            prefixSpan.textContent = `+${prefix}`;
                            hiddenInput.value = code;
                            countryOptions.style.display = 'none';
                            telInput.focus();
                        }
                    }
                });
                // Close dropdown when clicking outside
                document.addEventListener('click', (e) => {
                    if (!countryCodeWrapper.contains(e.target)) {
                        countryOptions.style.display = 'none';
                    }
                });
                // Handle keyboard search
                let searchTimeout;
                countryCodeDisplay.addEventListener('keydown', (e) => {
                    if (e.key.length === 1 || e.key === 'Backspace') {
                        clearTimeout(searchTimeout);
                        const searchTerm = (e.key === 'Backspace' ? '' : e.key).toLowerCase();
                        searchTimeout = window.setTimeout(() => {
                            const options = optionsContainer.querySelectorAll('.country-option');
                            options.forEach(option => {
                                const optionElement = option;
                                const name = optionElement.dataset.name?.toLowerCase() || '';
                                const code = optionElement.dataset.code?.toLowerCase() || '';
                                const prefix = optionElement.dataset.prefix || '';
                                if (name.includes(searchTerm) || code.includes(searchTerm) || prefix.includes(searchTerm)) {
                                    optionElement.style.display = '';
                                }
                                else {
                                    optionElement.style.display = 'none';
                                }
                            });
                        }, 100);
                    }
                });
                return telephoneWrapper;
            case 'password':
                const passwordWrapper = document.createElement('div');
                passwordWrapper.className = 'password-wrapper';
                const passwordInput = document.createElement('input');
                passwordInput.type = 'password';
                passwordInput.name = field.name;
                if (field.placeholder) {
                    passwordInput.setAttribute('placeholder', field.placeholder);
                }
                if (field.required) {
                    passwordInput.setAttribute('required', '');
                }
                if (field.defaultValue !== undefined) {
                    passwordInput.value = field.defaultValue.toString();
                }
                const toggleButton = document.createElement('button');
                toggleButton.type = 'button';
                toggleButton.className = 'password-toggle';
                toggleButton.innerHTML = `
          <svg viewBox="0 0 24 24">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        `;
                toggleButton.addEventListener('click', () => {
                    const type = passwordInput.type === 'password' ? 'text' : 'password';
                    passwordInput.type = type;
                    toggleButton.innerHTML = type === 'password' ? `
            <svg viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          ` : `
            <svg viewBox="0 0 24 24">
              <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
            </svg>
          `;
                });
                passwordWrapper.appendChild(passwordInput);
                passwordWrapper.appendChild(toggleButton);
                input = passwordWrapper;
                break;
            case 'color':
                const colorWrapper = document.createElement('div');
                colorWrapper.className = 'color-wrapper';
                const colorInput = document.createElement('input');
                colorInput.type = 'color';
                colorInput.name = field.name;
                if (field.defaultValue) {
                    colorInput.value = field.defaultValue.toString();
                }
                else {
                    colorInput.value = '#000000';
                }
                const colorPreview = document.createElement('span');
                colorPreview.className = 'color-preview';
                colorPreview.textContent = colorInput.value;
                colorInput.addEventListener('input', (e) => {
                    const value = e.target.value;
                    colorPreview.textContent = value;
                });
                colorWrapper.appendChild(colorInput);
                colorWrapper.appendChild(colorPreview);
                input = colorWrapper;
                break;
            case 'file':
                const fileWrapper = document.createElement('div');
                fileWrapper.className = 'file-wrapper';
                const fileLabel = document.createElement('div');
                fileLabel.className = 'file-label';
                const fileIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                fileIcon.setAttribute('viewBox', '0 0 24 24');
                fileIcon.setAttribute('class', 'file-icon');
                fileIcon.innerHTML = `
          <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12L14,14L16,12L18,14L16,16L18,18L16,20L14,18L12,20L10,18L12,16L10,14L12,12Z"/>
        `;
                const fileText = document.createElement('span');
                fileText.className = 'file-text';
                fileText.textContent = field.helpText || 'Click to select files';
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.name = field.name;
                fileInput.className = 'file-input';
                if (field.multiple) {
                    fileInput.setAttribute('multiple', '');
                }
                if (field.required) {
                    fileInput.setAttribute('required', '');
                }
                const fileList = document.createElement('div');
                fileList.className = 'file-list';
                fileInput.addEventListener('change', (e) => {
                    const files = e.target.files;
                    if (files) {
                        fileList.innerHTML = '';
                        Array.from(files).forEach(file => {
                            const fileItem = document.createElement('div');
                            fileItem.className = 'file-item';
                            const fileName = document.createElement('span');
                            fileName.className = 'file-item-name';
                            fileName.textContent = file.name;
                            const fileSize = document.createElement('span');
                            fileSize.className = 'file-item-size';
                            fileSize.textContent = this.formatFileSize(file.size);
                            const removeButton = document.createElement('button');
                            removeButton.className = 'file-item-remove';
                            removeButton.innerHTML = '×';
                            removeButton.addEventListener('click', () => {
                                fileItem.remove();
                                // Note: We can't actually remove the file from the FileList
                                // This is just for visual feedback
                            });
                            fileItem.appendChild(fileName);
                            fileItem.appendChild(fileSize);
                            fileItem.appendChild(removeButton);
                            fileList.appendChild(fileItem);
                        });
                    }
                });
                fileLabel.appendChild(fileIcon);
                fileLabel.appendChild(fileText);
                fileWrapper.appendChild(fileLabel);
                fileWrapper.appendChild(fileInput);
                fileWrapper.appendChild(fileList);
                input = fileWrapper;
                break;
            case 'image':
                const imageWrapper = document.createElement('div');
                imageWrapper.className = 'image-wrapper';
                const imageLabel = document.createElement('div');
                imageLabel.className = 'image-input-label';
                const imageIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                imageIcon.setAttribute('viewBox', '0 0 24 24');
                imageIcon.setAttribute('class', 'image-icon');
                imageIcon.innerHTML = `
          <path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"/>
        `;
                const imageText = document.createElement('span');
                imageText.className = 'file-text';
                imageText.textContent = field.helpText || 'Click to select images';
                const imageInput = document.createElement('input');
                imageInput.type = 'file';
                imageInput.name = field.name;
                imageInput.className = 'file-input';
                imageInput.accept = 'image/*';
                if (field.multiple) {
                    imageInput.setAttribute('multiple', '');
                }
                if (field.required) {
                    imageInput.setAttribute('required', '');
                }
                const imagePreviewContainer = document.createElement('div');
                imagePreviewContainer.className = 'image-preview-container';
                imageInput.addEventListener('change', (e) => {
                    const files = e.target.files;
                    if (files) {
                        Array.from(files).forEach(file => {
                            if (file.type.startsWith('image/')) {
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                    const imagePreview = document.createElement('div');
                                    imagePreview.className = 'image-preview';
                                    const img = document.createElement('img');
                                    img.src = e.target?.result;
                                    img.alt = file.name;
                                    const removeButton = document.createElement('button');
                                    removeButton.className = 'remove-image';
                                    removeButton.innerHTML = '×';
                                    removeButton.addEventListener('click', () => {
                                        imagePreview.remove();
                                        // Note: We can't actually remove the file from the FileList
                                        // This is just for visual feedback
                                    });
                                    imagePreview.appendChild(img);
                                    imagePreview.appendChild(removeButton);
                                    imagePreviewContainer.appendChild(imagePreview);
                                };
                                reader.readAsDataURL(file);
                            }
                        });
                    }
                });
                imageLabel.appendChild(imageIcon);
                imageLabel.appendChild(imageText);
                imageWrapper.appendChild(imageLabel);
                imageWrapper.appendChild(imageInput);
                imageWrapper.appendChild(imagePreviewContainer);
                input = imageWrapper;
                break;
            default:
                input = document.createElement('input');
                input.setAttribute('type', field.type);
                if (field.min !== undefined)
                    input.setAttribute('min', field.min.toString());
                if (field.max !== undefined)
                    input.setAttribute('max', field.max.toString());
                if (field.step !== undefined)
                    input.setAttribute('step', field.step.toString());
                if (field.pattern)
                    input.setAttribute('pattern', field.pattern);
                if (field.autocomplete)
                    input.setAttribute('autocomplete', field.autocomplete);
        }
        if (!['radio', 'checkbox'].includes(field.type)) {
            input.setAttribute('name', field.name);
            if (field.placeholder) {
                input.setAttribute('placeholder', field.placeholder);
            }
            if (field.required) {
                input.setAttribute('required', '');
            }
            if (field.defaultValue !== undefined) {
                if (input instanceof HTMLInputElement) {
                    // @ts-ignore
                    if (field.type === 'checkbox') {
                        input.checked = field.defaultValue;
                    }
                    else {
                        input.value = field.defaultValue.toString();
                    }
                }
                else if (input instanceof HTMLSelectElement) {
                    input.value = field.defaultValue.toString();
                }
                else if (input instanceof HTMLTextAreaElement) {
                    input.value = field.defaultValue.toString();
                }
            }
            // Apply custom styles
            if (field.style) {
                Object.entries(field.style).forEach(([key, value]) => {
                    if (key !== 'customClass' && value) {
                        const styleKey = key;
                        if (styleKey in input.style) {
                            input.style[styleKey] = value;
                        }
                    }
                });
            }
        }
        fieldGroup.appendChild(input);
        if (field.helpText) {
            const helpText = document.createElement('div');
            helpText.className = 'help-text';
            helpText.textContent = field.helpText;
            fieldGroup.appendChild(helpText);
        }
        return fieldGroup;
    }
    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(this.form);
        const values = {};
        // Handle all form fields including hidden inputs
        for (const [name, value] of formData.entries()) {
            const field = this.schema.find(f => f.name === name);
            if (field?.type === 'checkbox') {
                // @ts-ignore
                values[name] = event.target.elements[name]?.checked || false;
            }
            else if (field?.type === 'telephone') {
                // Get the country code prefix
                const countryCodeInput = formData.get(`${name}_country_code`);
                const country = countries.find(c => c.code.toLowerCase() === countryCodeInput.toLowerCase());
                if (country) {
                    // Format the telephone number with the prefix
                    const number = value.toString().replace(/\D/g, '');
                    values[name] = `+${country.prefix}${number}`;
                }
                else {
                    values[name] = value.toString();
                }
            }
            else {
                values[name] = value.toString();
            }
        }
        const errors = this.validateForm(values);
        if (Object.keys(errors).length === 0) {
            this.dispatchEvent(new CustomEvent('formSubmit', {
                detail: { values },
                bubbles: true,
                composed: true
            }));
        }
        else {
            this.displayErrors(errors);
        }
    }
    validateForm(values) {
        const errors = {};
        this.schema.forEach(field => {
            if (field.required) {
                const value = values[field.name];
                if (!value || (typeof value === 'string' && value.trim() === '')) {
                    errors[field.name] = `${field.label} is required`;
                }
            }
        });
        return errors;
    }
    displayErrors(errors) {
        // Remove existing error messages
        this.shadow.querySelectorAll('.error').forEach(el => el.remove());
        // Add new error messages
        Object.entries(errors).forEach(([name, message]) => {
            const field = this.shadow.querySelector(`[name="${name}"]`);
            if (field) {
                const error = document.createElement('div');
                error.className = 'error';
                error.textContent = message;
                field.parentElement?.appendChild(error);
            }
        });
    }
    getValues() {
        const formData = new FormData(this.form);
        const values = {};
        // First handle regular form fields
        for (const [name, value] of formData.entries()) {
            const field = this.schema.find(f => f.name === name);
            if (field?.type === 'checkbox') {
                // @ts-ignore
                values[name] = this.form.elements[name].checked;
            }
            else {
                values[name] = value.toString();
            }
        }
        // Then handle searchable selects
        this.searchableSelects.forEach((input, name) => {
            const hiddenInput = input.closest('.select-wrapper')?.querySelector(`input[name="${name}"]`);
            if (hiddenInput) {
                values[name] = hiddenInput.value;
            }
        });
        return values;
    }
    resetForm() {
        this.form.reset();
        this.shadow.querySelectorAll('.error').forEach(el => el.remove());
    }
    set values(newValues) {
        this._values = newValues;
        this.schema.forEach(field => {
            // @ts-ignore
            const input = this.form.elements[field.name];
            if (input) {
                if (field.type === 'checkbox') {
                    input.checked = newValues[field.name];
                }
                else {
                    input.value = newValues[field.name]?.toString() || '';
                }
            }
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'font-family') {
            this.currentTheme.fontFamily = newValue;
            this.updateTheme();
        }
        else if (name === 'schema') {
            try {
                // Handle both string and object inputs
                if (typeof newValue === 'string') {
                    // First try to parse as JSON
                    try {
                        this.schema = JSON.parse(newValue);
                    }
                    catch (parseError) {
                        console.log('Initial JSON parse failed, attempting to sanitize input...');
                        console.log('Input value:', newValue);
                        // If parsing fails, try to sanitize and parse
                        try {
                            // First, try to clean up the input
                            let sanitizedValue = newValue.trim();
                            // Handle common JSON formatting issues
                            sanitizedValue = sanitizedValue
                                // Fix property names (add quotes)
                                .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
                                // Fix single quotes
                                .replace(/'/g, '"')
                                // Remove trailing commas
                                .replace(/,(\s*[}\]])/g, '$1')
                                // Fix missing quotes around property values
                                .replace(/:\s*([^",\{\}\[\]\s][^",\{\}\[\]]*?)([,\}])/g, ':"$1"$2');
                            console.log('Sanitized value:', sanitizedValue);
                            // Try parsing the sanitized value
                            this.schema = JSON.parse(sanitizedValue);
                        }
                        catch (evalError) {
                            console.error('Schema parsing failed:', {
                                originalError: parseError,
                                sanitizationError: evalError,
                                input: newValue
                            });
                            return;
                        }
                    }
                }
                else {
                    this.schema = newValue;
                }
                // Validate schema structure
                if (!Array.isArray(this.schema) && !('fields' in this.schema)) {
                    console.error('Invalid schema structure. Schema must be an array or have a fields property.');
                    return;
                }
                // Normalize schema structure
                this.schema = Array.isArray(this.schema) ? this.schema : this.schema.fields;
                this.render();
            }
            catch (error) {
                console.error('Error processing schema:', error);
            }
        }
        else if (name === 'schema-url') {
            this.loadSchemaFromUrl(newValue);
        }
        else if (name === 'theme-style') {
            this.currentTheme.style = newValue;
            this.updateTheme();
        }
        else if (name === 'theme-color') {
            this.currentTheme.color = newValue;
            this.updateTheme();
        }
    }
    async loadSchemaFromUrl(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.schema = data.fields || data;
            this.render();
        }
        catch (error) {
            console.error('Error loading schema from URL:', error);
        }
    }
    render() {
        // Clear existing form content
        while (this.form.firstChild) {
            this.form.removeChild(this.form.firstChild);
        }
        // Create fields
        this.schema.forEach(field => {
            this.form.appendChild(this.createField(field));
        });
        // Add submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = this.getAttribute('submit-text') || 'Submit';
        this.form.appendChild(submitButton);
    }
    updateTheme() {
        const style = this.shadow.querySelector('style');
        if (style) {
            // Get all the CSS rules after the theme variables
            const existingRules = style.textContent?.split('form {')[1] || '';
            // Update the theme variables and append the existing rules
            style.textContent = this.getThemeVariables() + 'form {' + existingRules;
        }
    }
    formatFileSize(bytes) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}
customElements.define('form-builder', FormBuilder);
//# sourceMappingURL=form-builder.js.map