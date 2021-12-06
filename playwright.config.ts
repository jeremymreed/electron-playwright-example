import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './e2e-tests',
  maxFailures: 2,
  outputDir: './out/test-results',
}

export default config
