# Como contribuir

!!! warning "Código de Conduta"
    Antes de começar, é importante ler o nosso
    [Código de Conduta](https://github.com/cumbucadev/contributions/blob/main/CODE_OF_CONDUCT.md)
    para entender as diretrizes de comportamento e colaboração dentro da comunidade.

Este guia explica como contribuir com a Cumbuca Docs utilizando o fluxo de desenvolvimento padrão
com Git e GitHub. Diferente dos outros guias desta seção, este é voltado para pessoas que já têm
familiaridade com desenvolvimento, linha de comando e ferramentas de versionamento.

A documentação da comunidade está no repositório <https://github.com/cumbucadev/comunidade>

As páginas da documentação ficam dentro da pasta `docs` e o site é gerado usando MkDocs.

## Pré-requisitos

Antes de começar, é necessário que você tenha:

* Git instalado
* Python instalado
* Poetry instalado
* pre-commit instalado
* Familiaridade com Git e GitHub
* Conta no GitHub

Também é importante saber utilizar terminal e editar arquivos Markdown.

## Fluxo de contribuição

1. [Abrir uma Issue](#passo-1-abrir-uma-issue)
2. [Fazer um Fork do Projeto](#passo-2-fazer-um-fork-do-repositorio)
3. [Configurar o Repositório Upstream](#passo-3-configurar-o-repositorio-upstream)
4. [Instalar Dependências](#passo-4-instalar-dependencias)
5. [Rodar a Documentação Localmente](#passo-5-rodar-a-documentacao-localmente)
6. [Criar um Branch](#passo-6-criar-um-branch)
7. [Fazer as Alterações](#passo-7-fazer-as-alteracoes)
8. [Validar a Documentação](#passo-8-validar-a-documentacao)
9. [Fazer Commit](#passo-9-fazer-commit-das-alteracoes)
10. [Enviar para o GitHub](#passo-10-enviar-para-o-github)
11. [Abrir um Pull Request](#passo-11-abrir-um-pull-request)
12. [Sincronizar seu Fork](#sincronizando-seu-fork)

## Passo 1: abrir uma issue {#passo-1-abrir-uma-issue}

Antes de começar a trabalhar em uma alteração, crie uma **issue** no repositório da comunidade.

A issue serve para:

* explicar o problema ou melhoria
* discutir a mudança antes de implementá-la
* registrar o trabalho que será feito

O número da issue será usado como nome do branch.

## Passo 2: fazer um fork do repositório {#passo-2-fazer-um-fork-do-repositorio}

* Acesse o repositório: <https://github.com/cumbucadev/comunidade>.
* Clique em **Fork** para criar uma cópia do repositório na sua conta do GitHub.
* Depois clone o fork para sua máquina:

```sh
git clone https://github.com/SEU-USUARIO/comunidade.git
````

Entre no diretório do projeto:

```sh
cd comunidade
```

## Passo 3: configurar o repositório upstream {#passo-3-configurar-o-repositorio-upstream}

Adicione o repositório original como upstream:

```sh
git remote add upstream https://github.com/cumbucadev/comunidade.git
```

Isso permitirá sincronizar seu fork com o repositório principal.

## Passo 4: instalar dependências {#passo-4-instalar-dependencias}

O projeto utiliza Poetry para gerenciamento de dependências.

Instale as dependências e configure o pre-commit:

```sh
poetry install && pre-commit install
```

## Passo 5: rodar a documentação localmente {#passo-5-rodar-a-documentacao-localmente}

Para visualizar a documentação durante o desenvolvimento, execute:

```sh
poetry run mkdocs serve
```

O site ficará disponível em [http://127.0.0.1:8000](http://127.0.0.1:8000).

Se você fizer alterações na documentação e elas não aparecerem no navegador, pode ser necessário **reiniciar o servidor**.

Para isso:

* Pare o servidor pressionando `Ctrl + C` no terminal
* Execute novamente `poetry run mkdocs serve`

## Passo 6: criar um branch {#passo-6-criar-um-branch}

Crie um branch usando **o número da issue**.

```sh
git switch -c <numero-da-issue>
```

Exemplo para a issue `42`:

```sh
git switch -c 42
```

Isso facilita rastrear qual alteração está relacionada a qual issue.

## Passo 7: fazer as alterações {#passo-7-fazer-as-alteracoes}

As páginas da documentação ficam na pasta `docs/`. Cada arquivo `.md` representa uma página.

Você pode:

* editar páginas existentes
* criar novas páginas
* reorganizar conteúdo
* corrigir erros
* atualizar informações

Se você:

* criar novas páginas
* mover páginas
* remover páginas

lembre-se também de atualizar o menu no arquivo **`mkdocs.yml`**, na seção `nav`.

## Passo 8: validar a documentação {#passo-8-validar-a-documentacao}

Antes de enviar suas alterações, verifique se:

* o site compila corretamente
* os links funcionam
* o menu está correto
* não há erros de Markdown
* a navegação funciona como esperado

Use o servidor local para validar as mudanças.

## Passo 9: fazer commit das alterações {#passo-9-fazer-commit-das-alteracoes}

Na Cumbuca, commits relacionados à documentação devem começar com `docs:`.

Exemplos:

```sh
docs: corrige links quebrados no núcleo de comunicação
docs: adiciona guia de onboarding
docs: melhora explicação sobre infraestrutura de email
docs: reorganiza seção de contribuição
```

Faça commit normalmente:

```sh
git add arquivo1.md arquivo2.md
git commit -m "docs: descrição da alteração"
```

## Passo 10: enviar para o GitHub {#passo-10-enviar-para-o-github}

Envie seu branch para o seu fork:

```sh
git push origin <numero-da-issue>
```

Exemplo:

```sh
git push origin 42
```

## Passo 11: abrir um Pull Request {#passo-11-abrir-um-pull-request}

* Depois do push, vá até seu fork no GitHub.
* O GitHub mostrará a opção para abrir um **Pull Request**.
* Clique em **Compare & pull request**.

Na descrição do Pull Request:

* explique o que foi alterado
* explique o motivo da mudança
* referencie a issue relacionada

Depois clique em **Create pull request**.

## Revisão

Após abrir o Pull Request, alguém da comunidade irá revisar a alteração.

Durante a revisão podem acontecer algumas situações:

* a alteração é aprovada
* são sugeridas melhorias
* são solicitados ajustes

Caso ajustes sejam solicitados, faça as alterações no mesmo branch e faça novos commits.
O Pull Request será atualizado automaticamente.

## Sincronizando seu fork

Caso o repositório principal receba atualizações enquanto você trabalha, sincronize seu fork:

```sh
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

## Boas práticas

* Faça alterações pequenas e focadas
* Use mensagens de commit claras
* Teste localmente antes de abrir o Pull Request
* Evite alterar muitas áreas da documentação em um único PR
* Prefira PRs menores e mais fáceis de revisar

## Resumo do fluxo

O fluxo de contribuição geralmente segue este processo:

1. Abrir uma issue
2. Fazer fork do repositório
3. Clonar localmente
4. Criar branch usando o número da issue
5. Fazer alterações
6. Rodar a documentação localmente
7. Commit
8. Push
9. Pull Request


teste comentário workflow