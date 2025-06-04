/**
 * Recebe um nome de página (page) e retorna os dados da aba correspondente.
 * Aceita "normas" e "normas-compiladas", ambos apontam para a aba "NORMAS".
 */
function getSheetData(page) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Permitir ambas as rotas
  if (page === 'normas' || page === 'normas-compiladas') {
    const sh = ss.getSheetByName('NORMAS');
    if (!sh) {
      Logger.log('Aba "NORMAS" não encontrada.');
      return JSON.stringify([]);
    }

    const [headers, ...data] = sh.getDataRange().getValues();
    const rows = data.map(r =>
      headers.reduce((o, h, i) => {
        o[h] = r[i];
        return o;
      }, {})
    );

    return JSON.stringify(rows);
  }

  // Página não reconhecida
  return JSON.stringify([]);
}

function doGet(e) {
  const p = e?.parameter;

  // Se for uma chamada para dados JSON da planilha
  if (p?.exec === 'json' && p?.page) {
    const payload = getSheetData(p.page);
    return ContentService
      .createTextOutput(payload)
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Senão, serve o frontend React do GAS
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate()
    .setTitle('Percentual de Atualização das Normas Internas | Diretoria Jurídica | DPEMT')
    .setFaviconUrl('https://i.imgur.com/e5XSyZu.png')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Inclui conteúdo de arquivos .html como css.html ou js.html
 */
function includes(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
