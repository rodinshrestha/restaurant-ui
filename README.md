# Restaurant UI Components

A comprehensive UI component library for restaurant websites, built with React, TypeScript, and Styled Components. This package is under devloping

## 🚀 Features

- **Modern UI Components**: Pre-built components specifically designed for restaurant websites
- **TypeScript Support**: Fully typed components for better development experience
- **Theme Support**: Customizable theming system
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Accessibility**: WCAG compliant components
- **Storybook Documentation**: Interactive documentation and component playground

## 📦 Installation

```bash
npm install restaurant-ui
# or
yarn add restaurant-ui
```

## 🔧 Peer Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "styled-components": "^5.3.0",
  "framer-motion": "^12.6.3"
}
```

## 🎨 Available Components

### Layout Components

- `Container` - Responsive container with fluid option
- `Row` - Flexbox-based row component
- `Col` - Responsive column component with breakpoints
- `Typography` - Text components with various styles

### UI Components

- `Button` - Customizable button with variants
- `InputField` - Form input field with validation
- `InputTextArea` - Multi-line text input
- `Link` - Styled link component

### Restaurant-Specific Components

- `OpeningHours` - Display restaurant operating hours
- `SectionBgImage` - Section with background image and overlay
- `OurStory` - Story section with rich text support
- `ImageGallery` - Lightbox-enabled image gallery
- `ContactForm` - Contact information and form
- `Map` - Google Maps integration

### Utility Components

- `Overlay` - Semi-transparent overlay
- `ImageWithFallBack` - Image component with fallback support

## 🛠 Usage

### Basic Setup

```tsx
import { Button, Container, Row, Col } from "restaurant-ui/components";

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Row>
          <Col>
            <Button>Order Now</Button>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}
```

## 📚 Documentation

Visit our [Storybook documentation](https://restaurant-components.netlify.app/) for:

- Interactive component playground
- Props documentation
- Usage examples
- Theme customization guide

## 🧪 Testing

```bash
# Run tests
npm test
# or
yarn test
```

## 🏗 Development

```bash
# Install dependencies
yarn install

# Start Storybook
yarn storybook

# Build package
yarn build

# Run tests
yarn test
```

## 📝 License

MIT

## 👥 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## 🔗 Links

- [Storybook Documentation](https://restaurant-components.netlify.app/)
- [GitHub Repository](https://github.com/rodinshrestha/restaurant-ui)
- [npm Package](https://www.npmjs.com/package/restaurant-ui)
