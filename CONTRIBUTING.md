# Contributing to ShopNext

Thank you for your interest in contributing to ShopNext! This document provides guidelines and instructions for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Suggesting Features

We welcome feature suggestions! Please create an issue with:
- A clear description of the feature
- Use cases and benefits
- Any mockups or examples (if available)

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/Suryanshu-Nabheet/ShopNext.git
   cd ShopNext
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write clear, descriptive commit messages
   - Add comments for complex logic
   - Ensure your code is responsive

4. **Test your changes**
   ```bash
   npm run lint
   npm run dev
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear title and description
   - Reference any related issues
   - Add screenshots for UI changes

## 📝 Code Standards

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces for props and data structures
- Avoid `any` types when possible

### React
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design patterns
- Ensure responsive design (mobile-first)

### Code Style
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Commit Messages
Use clear, descriptive commit messages:
- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for improvements
- `Refactor:` for code refactoring
- `Docs:` for documentation changes

## 🧪 Testing

Before submitting a PR, please:
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Ensure no console errors
- Run `npm run lint` and fix any issues

## 📋 Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated (if needed)
- [ ] No new warnings or errors
- [ ] Tested on multiple browsers
- [ ] Responsive design verified

## 🎯 Project Structure

- `src/components/` - React components
- `src/context/` - React Context providers
- `src/` - Main application files
- Configuration files in root directory

## 💡 Getting Help

If you need help:
- Check existing issues and discussions
- Create a new issue with your question
- Reach out to the maintainer

## 🙏 Thank You

Your contributions make this project better for everyone. Thank you for taking the time to contribute!

