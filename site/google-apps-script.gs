// Synvox.creative - recebe os leads do formulario e grava na planilha.
// Cole TODO este codigo no Apps Script (Extensoes > Apps Script), salve (Ctrl+S),
// e implante como App da Web (Executar como: Eu | Acesso: Qualquer pessoa).

var SEU_EMAIL = ""; // ex: "seuemail@gmail.com" para receber aviso por e-mail (deixe "" para nao enviar)

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data","Nome","Empresa","WhatsApp","Instagram","Segmento","Servico","Orcamento","Mensagem"]);
    }
    var p = e.parameter;
    sheet.appendRow([new Date(), p.nome||"", p.empresa||"", p.whatsapp||"", p.instagram||"", p.segmento||"", p.servico||"", p.orcamento||"", p.mensagem||""]);

    if (SEU_EMAIL) {
      MailApp.sendEmail(SEU_EMAIL, "Novo lead Synvox: " + (p.empresa||p.nome||""),
        "Nome: " + (p.nome||"") + "\nEmpresa: " + (p.empresa||"") + "\nWhatsApp: " + (p.whatsapp||"") +
        "\nInstagram: " + (p.instagram||"") + "\nSegmento: " + (p.segmento||"") + "\nServico: " + (p.servico||"") +
        "\nOrcamento: " + (p.orcamento||"") + "\nMensagem: " + (p.mensagem||""));
    }
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("erro: " + err);
  }
}

function doGet() {
  return ContentService.createTextOutput("Synvox lead endpoint ok");
}
