import { test, expect } from '@playwright/test';

test('testing if the page is loading correctly with all main components', async ({ page }) => {
    await page.goto('https://sudoku-solver-web.vercel.app');
    await page.waitForTimeout(1000);
    // Vérifie si le titre de la page est correct
    expect(await page.title()).toBe('Sudoku Solver | Vue JS');
    // Vérifie si le titre de la page est correct
    const title = page.getByRole('heading', { name: 'Welcome to my Sudoku Solver' });
    expect(title).toBeVisible();
    // Vérifie si le lien "Solver" est présent
    const solverLink = page.getByRole('link', { name: 'Solver' });
    expect(solverLink).toBeVisible();
    await solverLink.click();
    await page.waitForTimeout(1000);
    // Vérifie si la grille est présente
    const sudokuGrid = page.locator('#sudoku-grid');
    expect(sudokuGrid).toBeVisible();
    await page.waitForTimeout(1000);

    // Vérifie si les valeurs des cellules sont correctes

    // Récupère le nombre de cellules dans la grille
    const sudokuGridCellsCount = page.locator('td').count();
    await page.waitForTimeout(1000);
    //boucle sur chaque cellule
    for (let i = 0; i < sudokuGridCellsCount; i++) {
        // Récupère le texte de la cellule
        const cellText = await page.locator('td').nth(i).textContent();
        // Vérifie si le texte est un chiffre de 1 à 9 ou vide
        expect(/^[0-9]$|^$/.test(cellText)).toBeTruthy();
    }

    
    await page.waitForTimeout(3000);
    // Vérifie si le bouton "Résoudre" est présent
    const solverButton = page.getByRole('button', { name: 'Résoudre'});
    expect(solverButton).toBeVisible();
    // Vérifie si le bouton "Actualiser la page" est présent
    const clearButton = page.getByRole('button',{name:' Actualiser la Page '});
    expect(clearButton).toBeVisible();

    const footerText = page.getByText('For Guireg Capitaine')
    expect(footerText).toBeVisible();
});

test('testing if the solver display correctly values', async ({ page }) => {
    await page.goto('https://sudoku-solver-web.vercel.app');
    await page.waitForTimeout(1000);
    const solved = [
        [3, 4, 5, 6, 9, 1, 7, 2, 8],
        [6, 1, 2, 7, 8, 3, 5, 4, 9],
        [7, 9, 8, 2, 4, 5, 1, 3, 6],
        [9, 6, 4, 1, 5, 7, 2, 8, 3],
        [5, 2, 3, 8, 6, 4, 9, 1, 7],
        [8, 7, 1, 9, 3, 2, 4, 6, 5],
        [1, 3, 9, 5, 2, 8, 6, 7, 4],
        [4, 5, 7, 3, 1, 6, 8, 9, 2],
        [2, 8, 6, 4, 7, 9, 3, 5, 1],
    ]

    const buttonSolver = page.getByRole('button', { name: 'Résoudre'});
    await buttonSolver.click();
    await page.waitForTimeout(2000);

    const sudokuGridCellsCount = await page.locator('td').count();
    let answer = [];
    let test = [];

    for (let i = 0; i < sudokuGridCellsCount; i++) {
        const cellText = await page.locator('td').nth(i).textContent();
        test.push( parseInt(cellText));
        if(test.length === 9){
            answer.push(test);
            test = [];
        }
    }
    expect(answer).toEqual(solved);

});


test('page has no errors in console', async ({ page }) => {
  await page.goto('https://sudoku-solver-web.vercel.app');

  const consoleLogs = [];
  page.on('console', (msg) => consoleLogs.push(msg));

  expect(consoleLogs).toEqual([]);
});

