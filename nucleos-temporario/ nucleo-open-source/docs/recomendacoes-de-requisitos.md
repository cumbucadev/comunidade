# Guia de Recomendações Requisitos de Projetos

Este guia reúne **boas práticas de organização, governança leve e colaboração** para projetos da organização Cumbuca. Ele foi pensado para projetos de todos os tamanhos, com um princípio em comum:

> Todo projeto da Cumbuca deve estar preparado para mais de uma pessoa colaborar.

Este não é um checklist obrigatório. É um guia de maturidade, para ajudar cada projeto a evoluir no seu ritmo, evitando caos, retrabalho e desgaste de mantenedores.

## Como usar este guia

* Leia como um guia prático de recomendações, não como regra rígida
* Comece pelo nível que faz sentido para o seu projeto hoje
* Volte aqui sempre que o projeto crescer, mudar de fase ou reduzir escopo

## O que este guia não é

* Não é um checklist obrigatório
* Não é usado para bloquear PRs ou contribuições
* Não define níveis de "qualidade" entre projetos
* Não exige que todo projeto chegue ao nível mais alto
* Não substitui bom senso nem contexto

> Este guia existe para ajudar, não para fiscalizar.

## Comunicação como princípio

A Cumbuca prioriza **comunicação assíncrona, pública e registrada**.

Sempre que possível:

* Decisões importantes devem deixar rastro
* Discussões relevantes devem acontecer em canais públicos
* Contexto deve ser documentado para quem chega depois

> Isso reduz dependência de conversas privadas e protege a comunidade no longo prazo.

---

## Requisitos por Nível de Projeto

Antes de aplicar os requisitos, **identifique o nível de maturidade do seu projeto** usando o [Modelo de Maturidade de Projetos](modelo-de-maturidade.md).

### Nível 1 🌱

#### Responsabilidade mínima

* Pelo menos uma pessoa responde issues e perguntas

#### Recomendações

##### README.md

Deve responder rapidamente:

* o que é o projeto
* para quem ele é
* como usar ou testar
* onde pedir ajuda
* templates:
  * https://github.com/cumbucadev/generic-template/blob/main/README.md
  * https://github.com/cumbucadev/generic-template/blob/main/README_EN.md

##### LICENSE.md

* Defina explicitamente a licença
* Sem licença = ninguém pode usar legalmente

##### VISION.md

Arquivo curto que define:

* o problema que o projeto resolve
* para quem é (e para quem não é)
* o que o projeto é / não é
* princípios que guiam decisões
* templates:
  * https://github.com/cumbucadev/generic-template/blob/main/VISION.md
  * https://github.com/cumbucadev/generic-template/blob/main/VISION_EN.md

> Este arquivo é mais para mantenedores do que para usuários.

##### Issues e Discussions habilitados

* **Issues**: trabalho acionável (bugs, tarefas)
* **Discussions**: ideias, dúvidas, alinhamentos

Documente claramente quando usar cada um (no README, por exemplo).

### Nível 2 🌿

#### Responsabilidade mínima

* Alguém facilita decisões e dá encaminhamento

#### Recomendações

##### CONTRIBUTING.md

Deixe explícito:

* como rodar o projeto localmente
* como abrir issues
* como abrir PRs
* diferença entre Issue e Discussion
* exemplo:
  * https://github.com/brazilian-utils/python/blob/main/CONTRIBUTING.md
  * https://github.com/brazilian-utils/python/blob/main/CONTRIBUTING_EN.md

##### Templates de PRs e Issues

* Crie **templates de PRs** para padronizar descrições e checklist de revisões
* Crie **templates de Issues** para bugs, features e dúvidas
* Exemplos de referência:
  * https://github.com/brazilian-utils/python/tree/main/.github/ISSUE_TEMPLATE
  * https://github.com/brazilian-utils/python/tree/main/.github/pull_request_template.md

##### Categoria de Discussions: RFC & ADR

**Nome recomendado:**

> Propostas (RFC) & Decisões (ADR)

**Descrição:**

> Propostas (RFC) e decisões (ADR) para novos recursos, mudanças de API e arquitetura.

**Uso prático:**

* RFC: proposta antes de implementar algo relevante
* ADR: registro da decisão tomada

* Exemplo:
  * https://github.com/brazilian-utils/python/discussions/categories/propostas-rfc-decis%C3%B5es-adr

> Se afeta usuários, API ou arquitetura, passa por aqui.

##### Definição de sprints

* Defina a duração (ex: 1 ou 2 semanas)
* Documente onde o planejamento acontece

Não precisa ser rígido — o importante é previsibilidade.

##### Quadro de Projeto (GitHub Projects)

**Nome recomendado:**

> Quadro de Tarefas

**Base sugerida:**
[https://github.com/orgs/cumbucadev/projects/5/views/2](https://github.com/orgs/cumbucadev/projects/5/views/2)

**Boas práticas:**

* documentar o significado de cada coluna
* explicar quando mover um card
* usar automações sempre que possível

##### Milestones iniciais

Recomendado começar com:

* **Próxima versão** (ex: v2.0.1)
* **Sprint atual** (se aplicável)

Milestones servem para expectativa, não para promessas rígidas.

### Nível 3 🌳

#### Responsabilidade mínima

* Decisões relevantes são registradas

##### CHANGELOG.md

* Registre mudanças relevantes
* Destaque breaking changes

##### MAINTAINERS.md

Defina claramente:

* quem mantém o projeto
* responsabilidades
* quem pode aprovar PRs
* como escalar decisões

##### SECURITY.md

Explique:

* como reportar vulnerabilidades
* canal privado
* política de disclosure
* exemplo:
  * https://github.com/scanapi/scanapi/blob/main/SECURITY.md

##### Milestones de médio e longo prazo

Sugestão:

* **Médio prazo** (próximos 3 meses)
* **Longo prazo** (6+ meses)

Use para direção, não para detalhamento excessivo.

##### Registro público de decisões

* ADRs nas Discussions
* ou pasta `docs/adr/`

Ajuda a evitar reabrir decisões antigas.

### Nível 4 🌲

#### Responsabilidade mínima

* Responsabilidades e governança explícitas

##### GOVERNANCE.md

Defina:

* como decisões são tomadas
* modelo de governança
* como novos maintainers entram

##### Office Hours

* Defina frequência (ex: mensal)
* Documente no README
* Crie uma Discussion fixa para anúncios

##### Notas públicas de reuniões

* Discussion fixa para anotações
* Use um template simples
* Inclua decisões e próximos passos

## Checklist Resumido de Visualização Rápida

| Nível           | Requisitos principais                                                             |
| --------------- | --------------------------------------------------------------------------------- |
| 🌱 Nascente     | README, LICENSE, VISION, Issues/Discussions habilitados                           |
| 🌿 Colaborativo | CONTRIBUTING.md, Templates de PRs/Issues, RFC/ADR, Sprint definida, Quadro de tarefas, Milestones iniciais |
| 🌳 Crescimento  | CHANGELOG.md, MAINTAINERS.md, SECURITY.md, Milestones médio/longo prazo, ADRs     |
| 🌲 Maduro       | GOVERNANCE.md, Office Hours, Notas públicas de reuniões                           |

## Considerações finais

* O guia deve servir ao projeto — nunca o contrário.
* Nem todo projeto precisa atender a todos os pontos.
* Clareza é mais importante que completude
* Documentação reduz desgaste humano
* Bons projetos são aqueles que sobrevivem às pessoas

> Um projeto saudável é aquele em que pessoas novas conseguem contribuir sem pedir permissão o tempo todo.

Este guia é um **guia prático de recomendações** e deve evoluir junto com a comunidade da Cumbuca.
