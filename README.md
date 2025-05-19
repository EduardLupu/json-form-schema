# Form Builder Web Component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/json-schema-form)

A powerful, customizable, and themeable form builder built as a Web Component. This component leverages modern Web Components technologies to provide a reusable, encapsulated form building solution that can be used in any web application.

## Web Components Implementation

This component is built using the following Web Components technologies:

### Custom Elements
- Extends `HTMLElement` to create a custom `<form-builder>` element
- Implements lifecycle methods (`constructor`, `attributeChangedCallback`)
- Uses observed attributes for reactivity
- Provides a clean public API

### Shadow DOM
- Uses Shadow DOM for style encapsulation
- Prevents style leakage and conflicts
- Maintains component isolation
- Enables scoped styling

### Component Structure
```typescript
class FormBuilder extends HTMLElement {
  private shadow: ShadowRoot;
  private form: HTMLFormElement;
  
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    // ... initialization
  }
  
  static get observedAttributes() {
    return ['schema', 'theme', 'schema-url', 'theme-style', 'theme-color', 'font-family'];
  }
  
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // ... handle attribute changes
  }
}

customElements.define('form-builder', FormBuilder);
```

### Usage as Web Component
```html
<!-- Basic usage -->
<form-builder></form-builder>

<!-- With attributes -->
<form-builder
  schema='[...]'
  theme-style="modern"
  theme-color="ocean"
></form-builder>

<!-- With event handling -->
<script>
  const formBuilder = document.querySelector('form-builder');
  formBuilder.addEventListener('formSubmit', (event) => {
    console.log(event.detail.values);
  });
</script>
```

## Features

- 🎨 Multiple theme styles and color schemes
- 📱 Responsive design
- 🔍 Searchable select fields
- 🎯 Form validation
- 📝 Multiple field types support
- 🎭 Custom styling options
- 🌙 Dark mode support
- 🔒 Password field with toggle
- 📞 Telephone field with country selection
- 🎨 Color picker
- 📁 File upload with preview
- 🖼️ Image upload with preview
- ⏰ Time input
- 📅 Date input
- 📋 Textarea support
- ✅ Checkbox and radio groups
- 🔍 Search functionality
- 🎯 Custom validation
- 🎨 Custom CSS classes
- 🌐 Internationalization support

## Installation

```bash
npm install form-builder
```

## Basic Usage

```html
<form-builder
  schema='[
    {
      "type": "text",
      "name": "username",
      "label": "Username",
      "required": true
    }
  ]'
></form-builder>
```

## Field Types

The component supports the following field types:

- `text` - Text input
- `email` - Email input
- `password` - Password input with toggle
- `number` - Number input
- `textarea` - Text area
- `select` - Select dropdown
- `checkbox` - Checkbox input
- `radio` - Radio input group
- `hidden` - Hidden input
- `telephone` - Telephone input with country selection
- `date` - Date input
- `color` - Color picker
- `file` - File upload
- `time` - Time input
- `image` - Image upload

## Field Configuration

Each field can be configured with the following options:

```typescript
interface FormField {
  type: FieldType;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: FieldOption[];
  defaultValue?: string | boolean | number;
  helpText?: string;
  style?: {
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    borderRadius?: string;
    padding?: string;
    margin?: string;
    fontSize?: string;
    fontWeight?: string;
    customClass?: string;
  };
  searchable?: boolean;
  multiple?: boolean;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  rows?: number;
  cols?: number;
  autocomplete?: string;
  countryCode?: string;
}
```

## Themes

The component supports multiple theme styles and color schemes:

### Theme Styles
- `modern` - Modern design with subtle shadows
- `minimal` - Clean and minimal design
- `rounded` - Rounded corners and soft edges
- `flat` - Flat design without shadows
- `outlined` - Outlined design with borders

### Color Schemes
- `ocean` - Blue-based color scheme
- `sunset` - Orange-based color scheme
- `forest` - Green-based color scheme
- `cosmic` - Purple-based color scheme
- `solarized` - Solarized color scheme

## Customization

### Theme Customization

```html
<form-builder
  theme-style="modern"
  theme-color="ocean"
  font-family="'Roboto', sans-serif"
></form-builder>
```

### Field Styling

```javascript
{
  type: "text",
  name: "custom",
  label: "Custom Styled Field",
  style: {
    width: "100%",
    height: "40px",
    backgroundColor: "#f5f5f5",
    color: "#333",
    borderColor: "#ddd",
    borderRadius: "4px",
    padding: "8px",
    margin: "10px 0",
    fontSize: "16px",
    fontWeight: "400",
    customClass: "my-custom-class"
  }
}
```

## Special Features

### Telephone Field

The telephone field includes:
- Country selection with emoji flags
- Country code prefix
- Searchable country list
- Keyboard navigation
- Mobile-responsive design

### File Upload

Features:
- Drag and drop support
- File size display
- Multiple file upload
- File preview
- Remove file option

### Image Upload

Features:
- Image preview
- Multiple image upload
- Remove image option
- Grid layout for previews
- Drag and drop support

### Select Field

Features:
- Searchable options
- Multiple selection
- Custom styling
- Keyboard navigation
- Mobile-responsive design

## Events

The component dispatches the following events:

- `formSubmit` - Dispatched when the form is submitted
  ```javascript
  {
    detail: {
      values: {
        [fieldName]: fieldValue
      }
    }
  }
  ```

## Methods

### getValues()
Returns the current form values.

```javascript
const formBuilder = document.querySelector('form-builder');
const values = formBuilder.getValues();
```

### resetForm()
Resets the form to its initial state.

```javascript
const formBuilder = document.querySelector('form-builder');
formBuilder.resetForm();
```

## CSS Customization

The component uses CSS custom properties for theming:

```css
:host {
  --primary-color: #00BCD4;
  --secondary-color: #008BA3;
  --accent-color: #E0F7FA;
  --text-color: #263238;
  --background-color: #FFFFFF;
  --border-color: #B2EBF2;
  --error-color: #E57373;
  --success-color: #81C784;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --border-radius: 8px;
  --input-padding: 0.75rem 1rem;
  --border-width: 2px;
  --box-shadow: 0 2px 6px rgba(0,0,0,0.12);
  --transition: all 0.2s ease;
}
```

## Dark Mode

The component automatically supports dark mode using the `prefers-color-scheme` media query:

```css
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
}
```

## Browser Support

The component uses modern web standards and is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- No external dependencies required
- Uses native Web Components
- Uses native CSS custom properties
- Uses native JavaScript features

## Performance

- Lazy loading of components
- Efficient event handling
- Minimal DOM operations
- Optimized rendering
- No external dependencies
- Small bundle size

## Accessibility

- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support
- High contrast support
- Color contrast compliance

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License 