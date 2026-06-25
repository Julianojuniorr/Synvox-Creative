/**
 * Synvox.creative — recebe os leads do formulário do site e grava na planilha.
 *
 * COMO USAR (uma vez só):
 * 1. Crie uma planilha nova no Google Sheets (sheets.new).
 * 2. Na primeira linha, crie os cabeçalhos (opcional — o script cria sozinho se faltar):
 *    Data | Nome | Empresa | WhatsApp | Instagram | Segmento | Serviço | Orçamento | Mensagem
 * 3. No menu da planilha: Extensões > Apps Script.
 * 4. Apague o conteúdo e cole TODO este arquivo. Salve.
 * 5. Clique em "Implantar" (Deploy) > "Nova implantação" > tipo "App da Web".
 *    - Executar como: Eu
 *    - Quem pode acessar: Qualquer pessoa
 * 6. Copie a URL do app da Web e cole no site/index.html (constante SCRIPT_URL).
 * 7. (Opcional) Ative o e-mail: troque SEU_EMAIL abaixo pra receber aviso a cada lead.
 */

var SEU_EMAIL = ""; // ex: "julianojuniorr5@gmail.com" — deixe "" pra não enviar e-mail

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // cria cabeçalho se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data','Nome','Empresa','WhatsApp','Instagram','Segmento','Serviço','Orçamento','Mensagem']);
    }

    var p = e.parameter;
    var quando = new Date();
    sheet.appendRow([
      quando, p.nome || '', p.empresa || '', p.whatsapp || '', p.instagram || '',
      p.segmento || '', p.servico || '', p.orcamento || '', p.mensagem || ''
    ]);

    if (SEU_EMAIL) {
      MailApp.sendEmail({
        to: SEU_EMAIL,
        subject: 'Novo lead Synvox: ' + (p.empresa || p.nome || 'sem nome'),
        body: 'Nome: ' + (p.nome||'') + '\nEmpresa: ' + (p.empresa||'') +
              '\nWhatsApp: ' + (p.whatsapp||'') + '\nInstagram: ' + (p.instagram||'') +
              '\nSegmento: ' + (p.segmento||'') + '\nServiço: ' + (p.servico||'') +
              '\nOrçamento: ' + (p.orcamento||'') + '\nMensagem: ' + (p.mensagem||'') +
              '\n\nRecebido em ' + quando
      });
    }

    return ContentService.createTextOutput(JSON.stringify({result:'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({result:'error', error: String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// permite testar a URL no navegador (deve mostrar "Synvox lead endpoint ok")
function doGet() {
  return ContentService.createTextOutput('Synvox lead endpoint ok');
}
