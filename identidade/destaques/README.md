# Capas de destaque — Instagram

Capas dos stories fixados (highlights) da @synvox.creative. Estilo: fundo navy
`#0B1B3A`, ícone de linha branco com detalhe azul `#1F5BFF`, label embutido.
Formato 1080x1080 (o Instagram corta em círculo — conteúdo já centralizado na área segura).

## Arquivos

| Arquivo | Destaque |
|---|---|
| `destaque-sobre.png` | Sobre (quem é a Synvox) |
| `destaque-servicos.png` | Serviços (visão geral das frentes) |
| `destaque-automacao.png` | Automação com I.A. |
| `destaque-sites.png` | Sites |
| `destaque-posts.png` | Posts / planejamento de conteúdo |
| `destaque-branding.png` | Branding |
| `destaque-contato.png` | Contato / orçamento |

## Como usar

1. Crie um story (pode ser simples) e fixe num destaque.
2. Ao nomear o destaque, escolha "editar capa" e suba o PNG correspondente.
3. O título do destaque no Instagram pode repetir o nome ou ficar curto (ex: "Sobre").

## Editar / re-renderizar

Edite `destaques.html` (cor, ícone, label) e rode:

```bash
cd identidade/destaques
NODE_PATH="/c/Users/bldnf/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules" node render-destaques.js
```

Quer mais um destaque (ex: "Resultados", "Depoimentos")? É só adicionar um
bloco `.cover` novo no HTML e o id na lista do `render-destaques.js`.
