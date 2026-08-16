import { test, expect } from '@playwright/test';

test.describe('Familier Landing Page E2E Tests', () => {
  test('Homepage loads successfully with status 200 and title', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Familier — AI-powered Family Assistant/);
  });

  test('Hero section contains heading and Install CTA', async ({ page }) => {
    await page.goto('/');
    
    // Familier heading (H1)
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Familier');

    // Install CTA button
    const installBtn = page.locator('#install-btn-placeholder, a:has-text("Install APK")');
    await expect(installBtn).toBeVisible();
  });

  test('Screenshot gallery renders 6 app screenshots', async ({ page }) => {
    await page.goto('/');
    
    const screenshots = page.locator('#app-preview img');
    await expect(screenshots).toHaveCount(6);
    for (let i = 0; i < 6; i++) {
      await expect(screenshots.nth(i)).toBeVisible();
    }
  });

  test('GitHub Mobile repository link is correct', async ({ page }) => {
    await page.goto('/');
    
    const mobileLink = page.locator('a[href="https://github.com/pnv-familier/mobile"]').first();
    await expect(mobileLink).toBeVisible();
  });

  test('GitHub Backend repository link is correct', async ({ page }) => {
    await page.goto('/');
    
    const backendLink = page.locator('a[href="https://github.com/pnv-familier/backend"]').first();
    await expect(backendLink).toBeVisible();
  });

  test('Release button links to official APK download link or safe placeholder', async ({ page }) => {
    await page.goto('/');
    
    const placeholderBtn = page.locator('#install-btn-placeholder');
    const releaseLink = page.locator('a:has-text("Install APK")');

    if (await placeholderBtn.isVisible()) {
      let dialogMessage = '';
      page.once('dialog', async (dialog) => {
        dialogMessage = dialog.message();
        await dialog.accept();
      });
      await placeholderBtn.click();
      expect(dialogMessage).toContain('Familier GitHub Release APK package is coming soon!');
    } else {
      await expect(releaseLink).toBeVisible();
      await expect(releaseLink).toHaveAttribute('href', 'https://github.com/pnv-familier/mobile/releases/download/official/familier-v1.apk');
    }
  });

  test('Responsive page has no horizontal overflow at 390x844 viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const hasNoHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth <= window.innerWidth;
    });

    expect(hasNoHorizontalOverflow).toBe(true);
  });
});
