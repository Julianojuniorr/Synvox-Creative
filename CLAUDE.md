# MazyOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Synvox.creative — contexto do negócio

> Bloco adicionado pelo `/instalar` (perfil: **Empresa / agência**).
> Adapta as regras de operação à realidade da Synvox.

## O que é esse workspace

Operação da **Synvox.creative** — agência de automações com I.A., sites,
planejamento de posts e videomaker para redes sociais de clientes.
Fundada e tocada por **Juliano**. Fase inicial: o foco agora é a própria
marca (Instagram, site de captação, branding) e gerar caixa.

**Estrutura de pastas:**
- `_memoria/` — quem é a Synvox, como falamos, foco atual
- `identidade/` — marca aplicada em tudo que o sistema gera (logo, paleta, personagem)
- `marketing/` — conteúdo, posts, planejamentos, campanhas
- `saidas/` — documentos pontuais (propostas, materiais avulsos)
- `dados/` — arquivos a analisar
- `templates/` — moldes de perfis e skills
- `scripts/` — utilitários do sistema

## Sobre a empresa

Synvox.creative é uma agência de tecnologia/conteúdo. Entrega automações
com I.A., sites, posts automáticos e vídeo. Atende empresas e
profissionais que querem presença digital e processos automatizados.
Hoje é **operação solo** (Juliano acumula todas as frentes).

## Frentes (hoje, tudo com o Juliano)

- **Conteúdo / Marketing:** posts e planejamento pro Instagram da Synvox e dos clientes
- **Sites:** institucional e de captação
- **Automação I.A.:** processos que tiram trabalho manual das costas
- **Vídeo (videomaker):** conteúdo para as redes dos clientes
- **Comercial:** captação e proposta

*(Quando a equipe crescer, atribuir responsáveis por frente aqui.)*

## O que mais fazemos aqui

- Planejamento e geração de posts pro Instagram
- Sites de captação
- Automações com I.A. para clientes
- Vídeos para redes sociais

## Tom de voz

Humanizado, mas eficiente — gente de verdade, não robô de agência nem
guru. Minimalista e direto, igual à marca. Detalhes em `_memoria/preferencias.md`.

Evitar: emoji em excesso (e **nenhum** em site), jargão de guru, tom corporativo frio.

## Regras do sistema

- Conteúdo e planejamentos de post → `marketing/`
- Propostas e materiais avulsos → `saidas/`
- Qualquer peça visual lê `identidade/design-guide.md` antes de criar
- Prioridade de tudo: atacar o gargalo de caixa (ver `_memoria/estrategia.md`)

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Meta Ads (Instagram)
- [ ] Google Ads

*(Marcar conforme for instalando os MCPs)*
