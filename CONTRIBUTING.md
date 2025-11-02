# Contributing to RecruitAI

Thank you for your interest in contributing to RecruitAI! This document provides guidelines for contributing to the project.

## Code Quality Standards

### 1. Code Structure and Organization

- **Component Structure**: Each component should be in its own file
- **File Naming**: Use PascalCase for component files (e.g., `AnalyticsChart.jsx`)
- **Directory Structure**: Organize files logically in appropriate directories
- **Separation of Concerns**: Separate business logic from presentation

### 2. Documentation Requirements

- **Component Documentation**: Each component must have JSDoc comments
  ```javascript
  /**
   * Component Name
   * 
   * Description of what the component does
   * 
   * @component
   * @param {Object} props - Component props
   * @returns {JSX.Element} Component element
   */
  ```

- **Function Documentation**: Document all functions with parameters and return types
- **Inline Comments**: Add comments for complex logic

### 3. Code Style

- **ESLint**: Follow ESLint rules and fix all warnings
- **Prettier**: Use consistent formatting
- **Imports**: Organize imports (external, internal, relative)
- **Constants**: Extract magic numbers and strings to constants file

### 4. Functionality

- **Error Handling**: Always handle errors gracefully
- **Loading States**: Show loading indicators for async operations
- **Accessibility**: Include ARIA labels and keyboard navigation
- **Responsive Design**: Ensure components work on all screen sizes

### 5. Testing

- **Component Tests**: Test component rendering and interactions
- **Edge Cases**: Handle edge cases and error scenarios
- **User Experience**: Test from a user's perspective

## Design Consistency

- **Figma Design**: Match Figma design exactly (colors, spacing, typography)
- **Color Palette**: Use colors from constants file
- **Responsive Breakpoints**: Use defined breakpoints (sm: 640px, lg: 1024px)
- **Spacing**: Use consistent spacing scale

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the guidelines above
3. Ensure all linting passes
4. Test thoroughly on multiple devices/browsers
5. Update documentation if needed
6. Submit pull request with clear description

## Questions?

Feel free to open an issue for any questions or clarifications.

