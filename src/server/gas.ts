import type { NormaRow } from "../types";

// Declara o objeto `google` do ambiente do GAS (evita erro de TypeScript)
declare const google: any;

/**
 * Busca os dados da aba "NORMAS" via Google Apps Script,
 * usando a página identificada como "normas-compiladas".
 *
 * Certifique-se de que `getSheetData("normas-compiladas")` está implementado no seu backend GAS.
 */
export function getNormas(): Promise<NormaRow[]> {
  return new Promise((resolve, reject) => {
    google.script
      .run
      .withSuccessHandler((raw: string) => {
        try {
          resolve(JSON.parse(raw) as NormaRow[]);
        } catch (e) {
          reject(e);
        }
      })
      .withFailureHandler(reject)
      .getSheetData('normas-compiladas'); // <- ou 'normas-compiladas', conforme seu `api.js`
  });
}

