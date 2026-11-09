# Taste

- Prefers project/framework folders laid out directly at the repo root rather than nested inside a subdirectory. Confidence: 0.6
- Wants edits followed by actual execution: after fixing code, run the test suite through the project's configured custom reporter and open the generated HTML report, rather than stopping at code changes. Confidence: 0.5
- Works in Playwright/TypeScript test-framework projects and expects the suite to run with an OpenAI-compatible LLM-backed custom reporter that degrades gracefully when no API key is set. Confidence: 0.45
- Prefers Playwright browsers run headed (headless: false) with a 1920×1080 window/viewport. Confidence: 0.5
