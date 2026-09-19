---
name: react-i18next-guidance
description: Use this skill whenever you write, modify, or refactor React components, JSX code, or any text visible to the user in the frontend. This skill enforces strict i18n best practices using react-i18next so the app is always ready for translation.
---

# React i18next Best Practices

This project uses `react-i18next` for internationalization. **NEVER** hardcode Russian (or any other language) text directly in JSX, component files, or API responses meant for the user.

When adding new text or modifying existing UI, follow these strict rules:

1. **Use `useTranslation` hook:**
   Inside React components, always import and use the hook:
   ```jsx
   import { useTranslation } from 'react-i18next';
   // ...
   const { t } = useTranslation();
   ```

2. **Add translations to `translation.json`:**
   Add new keys to `frontend/src/locales/ru/translation.json`. Group keys logically by component name or feature.
   Use descriptive, semantic keys (e.g., `"Dashboard.welcomeMessage"` or `"Settings.saveButton"`), NOT `text_1`, `text_2`.

3. **Handle Dynamic Variables (Interpolation) Correctly:**
   DO NOT concatenate strings or split templates into multiple keys.
   **Bad:** `{t('Hello')} {name}!`
   **Good:** `{t('Dashboard.greeting', { name: partnerName })}`
   In `translation.json`: `"greeting": "Привет, {{name}}!"`

4. **Use Proper Pluralization:**
   If you have counts (days, items), use i18next pluralization suffixes (`_one`, `_few`, `_many`).
   **Example in Code:** `{t('Gamification.daysCount', { count: days })}`
   **In `translation.json`:**
   ```json
   "daysCount_one": "{{count}} день",
   "daysCount_few": "{{count}} дня",
   "daysCount_many": "{{count}} дней"
   ```

5. **Hidden Attributes:**
   Don't forget attributes like `placeholder`, `alt`, or `title`. They must also use `t()`.
   ```jsx
   <input placeholder={t('Input.placeholder')} />
   ```

By following these rules, you ensure that the application remains fully translatable and scalable without requiring massive refactoring later.
