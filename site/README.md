# Site — Synvox.creative

Landing page one-page de captação, com **formulário de diagnóstico** que grava os leads numa **Planilha Google**.

## Arquivos

- `index.html` — o site inteiro (HTML + CSS + JS embutido, só depende da fonte Inter)
- `google-apps-script.gs` — script que recebe o formulário e grava na planilha
- `assets/` — logo (branca/preta), ícone e personagem
- `preview-desktop.png` / `preview-mobile.png` — prévias

## Seções

Hero → faixa de destaques → Serviços (4) → Por que nós → Como funciona → Sobre → **Formulário** → Footer.
O formulário pede: nome, empresa, WhatsApp, Instagram, segmento, serviço, orçamento e desafio.

---

## ⚙️ Conectar o formulário à Planilha Google (uma vez só)

Sem isso, o formulário avisa que não está conectado. Leva ~3 minutos:

1. Crie uma planilha nova: acesse **https://sheets.new**
2. No menu da planilha: **Extensões → Apps Script**
3. Apague o código que aparecer e **cole todo o conteúdo de `google-apps-script.gs`**. Salve (Ctrl+S).
4. (Opcional) Pra receber e-mail a cada lead, preencha `SEU_EMAIL` no topo do script.
5. Clique em **Implantar → Nova implantação**:
   - Tipo: **App da Web**
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
   - Clique **Implantar** e autorize o acesso (é seguro, é seu próprio script).
6. Copie a **URL do app da Web** que aparece.
7. Abra `index.html`, ache a linha `const SCRIPT_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";`
   e cole a URL no lugar.
8. Pronto — cada formulário preenchido vira uma linha na sua planilha (e um e-mail, se ativou).

> Pra testar: abra a URL do app da Web no navegador — deve mostrar "Synvox lead endpoint ok".

---

## Publicar o site (grátis, ~2 min)

**Netlify Drop:** acesse https://app.netlify.com/drop e arraste a pasta `site/`. Sai no ar na hora.
Depois aponte um domínio próprio (ex: synvox.creative) no DNS.

> Importante: configure o `SCRIPT_URL` (passo acima) **antes** de publicar, ou o formulário não envia.

## Editar

Cores, textos e fontes ficam no `<style>` no topo do `index.html`.
Paleta da marca: azul `#1F5BFF`, navy `#0B1B3A` (ver `identidade/design-guide.md`).

## Ideias futuras

- Botão flutuante de WhatsApp
- Seção de portfólio/cases quando houver trabalhos
- Trocar o personagem ilustrado por foto real (opcional)
