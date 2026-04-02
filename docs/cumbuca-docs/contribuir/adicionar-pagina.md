# Como criar uma nova página

!!! warning "Código de Conduta"
    Antes de começar, é importante ler o nosso
    [Código de Conduta](https://github.com/cumbucadev/contributions/blob/main/CODE_OF_CONDUCT.md)
    para entender as diretrizes de comportamento e colaboração dentro da comunidade.

Este guia explica, passo a passo, como criar uma nova página na Cumbuca Docs usando apenas o navegador e o GitHub. Não é necessário saber programar ou instalar ferramentas. Todo o processo pode ser feito diretamente pela interface do GitHub.

A documentação da comunidade fica neste site:
[cumbucadev/comunidade](https://github.com/cumbucadev/comunidade), também conhecido como
`repositório da comunidade`.

Criar uma nova página significa adicionar um novo arquivo de documentação dentro da pasta `docs`.

## Antes de começar

Para editar a documentação, você precisa de:

* Uma conta no GitHub
* Estar logada na sua conta
* Acessar o [repositório da comunidade](https://github.com/cumbucadev/comunidade)
* Ter acesso de escrita no [repositório da comunidade](https://github.com/cumbucadev/comunidade)

Antes de criar uma nova página, verifique se:

* A informação realmente precisa de uma nova página
* O conteúdo não já existe em outra parte da documentação
* Você sabe em qual seção da Docs a nova página deve ficar

## Passo 1: acessar o repositório

* Abra o repositório da comunidade: <https://github.com/cumbucadev/comunidade>.
* Dentro dele estão vários arquivos e pastas. Toda a documentação fica dentro da pasta **docs**.
* Clique na pasta **docs** para visualizar as páginas da documentação.

![home comunidade](../../assets/img/cumbuca-docs/contribuir/home-comunidade.png)

## Passo 2: navegar até a seção correta

Dentro da pasta `docs`, navegue pelas pastas até encontrar o local onde a nova página deve ficar.

Por exemplo:

```txt
docs → cumbuca-docs → contribuir
```

Cada pasta representa uma seção da documentação. Escolha a pasta que melhor representa o tema da
nova página.

![pasta contribuir no branch main](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_pasta-main.png)

## Passo 3: criar um novo arquivo

* Depois de entrar na pasta correta, procure o botão **Add file**
* Clique em **Add file**
* Selecione **Create new file**

Isso abrirá o editor para criar um novo arquivo.

![create new file](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_create-new-file.png)

## Passo 4: definir o nome do arquivo

No topo do editor, você precisará definir o nome do novo arquivo.

O nome deve terminar com `.md`, que é o formato usado pela documentação.

Exemplos:

```sh
como-contribuir.md
guia-de-eventos.md
processo-de-onboarding.md
```

Algumas boas práticas para nomes de arquivos:

* usar letras minúsculas
* usar hífen `-` para separar palavras
* evitar espaços
* escolher nomes curtos e descritivos
* evitar acentos e caracteres especiais

![nome do arquivo](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nome-do-arquivo.png)

## Passo 5: escrever o conteúdo da página

Depois de definir o nome do arquivo, você pode começar a escrever o conteúdo da página.

A documentação usa **Markdown**, um formato simples para textos estruturados.

Exemplo de estrutura básica de uma página:

```sh
# Título da página

Breve introdução explicando o objetivo da página.

## Seção

Conteúdo da seção.

## Outra seção

Mais conteúdo.
```

Algumas convenções comuns:

* `#` indica o título da página
* `##` indica subtítulos
* Parágrafos são separados por uma linha em branco
* Links usam o formato `[texto](link)`

Caso você queira fazer algo que não está descrito neste guia, como adicionar **imagens**, pode consultar este guia de Markdown <https://www.markdownguide.org/basic-syntax/>.

![edição nova página](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_edicao.png)

Se quiser visualizar como o conteúdo ficará, use a aba **Preview** no topo do editor.

![preview da nova página](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_modo-preview.png)

## Passo 6: salvar a nova página

Depois de terminar o conteúdo da página, clique no botão **Commit changes**, que fica no topo da página.

Isso abrirá a janela para registrar a alteração.

![botão commit changes](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_commit-changes.png)

## Passo 7: escrever a mensagem do commit

Na Cumbuca, seguimos uma convenção simples para commits de documentação: a mensagem deve começar com `docs:`.

Isso ajuda a identificar facilmente mudanças relacionadas à documentação.

Exemplos:

```sh
docs: cria página sobre organização de eventos
docs: adiciona guia de onboarding da comunidade
docs: cria documentação sobre processos internos
```

Depois de `docs:`, escreva uma frase curta explicando o que foi criado.

![mensagem de commit](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_mensagem-de-commit.png)

## Passo 8: criar um branch para a alteração

* Ao registrar o commit, selecione a opção: **Create a new branch for this commit and start a pull request**
* Isso criará um **branch separado** para a nova página.

![commit em um novo branch](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_commit-new-branch.png)

* Depois clique em **Propose changes**.

![botão Propose changes](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_propose-changes.png)

## Passo 9: abrir o Pull Request

* Depois do commit, o GitHub abrirá automaticamente a página para criar um **Pull Request**.
* Um Pull Request é uma proposta de alteração no repositório.
* Na descrição do Pull Request, adicione `Closes #<numero-da-issue>` para indicar qual issue está sendo resolvida.

Exemplo:

```md
closes #42
```

![descrição PR](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_descricao-pr.png)

Isso faz com que a issue seja **fechada automaticamente** quando o Pull Request for aprovado e integrado ao repositório.

* Revise as mudanças e clique em **Create pull request**.

![botão Create Pull Request](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_create-pull-request.png)

* Depois de clicar em Create pull request, o Pull Request será criado no repositório da comunidade.

![PR criado](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_pr-criado.png)

* Se você descer a página do Pull Request, verá um comentário automático com um link para pré-visualizar as mudanças na documentação.

![Pré-visualização](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_pre-visualizacao.png)

_Caso esse comentário ainda não tenha aparecido ou o link retorne 404, aguarde alguns minutos e atualize a página. O deploy de preview pode levar um pequeno tempo para ser gerado._

## Passo 10: adicionar a página ao menu da documentação

Para que a nova página apareça no menu da Cumbuca Docs, é necessário adicioná-la ao arquivo `mkdocs.yml`.

Esse arquivo define a estrutura de navegação da documentação.

### 1. Trocar para o branch do Pull Request

Antes de editar qualquer arquivo, verifique se você está no **branch correto**.

No topo da página do repositório existe um **seletor de branch**.

* Clique no seletor de branch
* Escolha o **branch criado pelo seu Pull Request**

Isso garante que a alteração será adicionada ao mesmo PR.

![Seleção de branch](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-selecionar-branch.png)

### 2. Abrir o arquivo mkdocs.yml

Depois de selecionar o branch correto:

* Procure o arquivo **mkdocs.yml** na raiz do repositório

![arquivo mkdocs](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-mkdocs.png)

* Clique no arquivo para abrir

![arquivo mkdocs aberto em modo leitura](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-mkdocs-leitura.png)

* Clique no **ícone de lápis** para editar

![botão de edição no arquivo mkdocs](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-mkdocs-editar.png)

![modo edição no arquivo mkdocs](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-mkdocs-edicao-1.png)

### 3. Encontrar a seção `nav`

Dentro do arquivo, procure a seção chamada `nav`.
Ela define quais páginas aparecem no menu da documentação.

Exemplo simplificado:

```yml
nav:
  - Cumbuca Docs:
    - cumbuca-docs/intro.md
    - Como contribuir:
      - Sei programar: cumbuca-docs/contribuir/contribuir.md
      - NÃO sei programar:
        - cumbuca-docs/contribuir/editar-pagina.md
        - cumbuca-docs/contribuir/adicionar-pagina.md
        - cumbuca-docs/contribuir/remover-pagina.md
```

![modo edição no arquivo mkdocs, elemento nav](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-mkdocs-edicao-2.png)

### 4. Adicionar a nova página

Adicione uma nova linha apontando para o arquivo que você criou.

Exemplo:

```yml
nav:
  - Cumbuca Docs:
    - cumbuca-docs/intro.md
    - Como contribuir:
      - Sei programar: cumbuca-docs/contribuir/contribuir.md
      - NÃO sei programar:
        - cumbuca-docs/contribuir/editar-pagina.md
        - cumbuca-docs/contribuir/adicionar-pagina.md
        - cumbuca-docs/contribuir/remover-pagina.md
        - cumbuca-docs/contribuir/nova-pagina.md
```

O texto antes dos dois pontos (`:`) será o nome exibido no menu.
O caminho depois dos dois pontos é o caminho do arquivo dentro da pasta `docs`.

![modo edição no arquivo mkdocs, elemento nav modificado](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-mkdocs-edicao-3.png)

### 5. Salvar a alteração

Depois de editar o arquivo:

* Clique em **Commit changes**

![botão commit changes](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-commit-changes.png)

* Use uma mensagem de commit começando com `docs:`

Exemplo:

```sh
docs: adiciona nova página ao menu da documentação
```

![mensagem do commit](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-mensagem-de-commit.png)

Como você já está no branch correto, o commit será automaticamente adicionado ao **mesmo Pull Request**. Você não precisa alterar nada.

![opção selecionada de fazer o commit diretamente no branch 42](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-commit-branch.png)

* Depois clique em **Commit changes**.

![botão commit changes](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_nav-commit-changes-2.png)

## Passo 11: acompanhar o Pull Request

Depois de adicionar a página ao menu e salvar o commit, o Pull Request continuará aberto até que seja revisado.

Você pode acompanhar o status do Pull Request diretamente no GitHub.

### 1. Acessar a aba Pull requests

No repositório da comunidade, clique na aba **Pull requests** no topo da página.

![aba pull requests](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_aba-pull-requests.png)

### 2. Encontrar o Pull Request criado

Depois de abrir a aba **Pull requests**, você verá a lista de Pull Requests abertos no repositório.

Procure pelo Pull Request que você criou.

![lista de pull requests](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_pr-lista.png)

### 3. Abrir o Pull Request

Clique no título do Pull Request para abrir a página com os detalhes da alteração.

Nessa página você poderá ver:

* a descrição do Pull Request
* os commits realizados
* os arquivos modificados

![pagina do pull request](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_pr-detalhes.png)

### 4. Nova pré-visualização após atualizar o menu

Depois que você adicionar a nova página ao menu da documentação (no arquivo `mkdocs.yml`) e fizer um novo commit, uma nova pré-visualização será gerada.

Ao descer novamente a página do Pull Request, você verá **um novo comentário abaixo do primeiro**, com um link atualizado para visualizar a documentação.

Esse novo link mostrará a documentação já com **a navegação (menu) atualizada**.

![nova pre visualização](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_pr-preview-atualizado.png)

### 5. Aguardar a revisão

Depois que o Pull Request estiver pronto, alguém da comunidade irá revisar a alteração.

Durante esse processo podem acontecer algumas situações:

* a alteração é aprovada
* são sugeridas melhorias
* são solicitados ajustes

## Passo 12: integração do Pull Request

Quando todas as verificações estiverem corretas e a revisão for concluída, o Pull Request poderá ser integrado ao repositório.

Isso acontece através do botão **Squash and merge**.

![botao squash and merge](../../assets/img/cumbuca-docs/contribuir/adicionar-pagina_pr-squash-merge.png)

## Dicas para criar boas páginas

* Comece com um título claro
* Explique o objetivo da página logo no início
* Use seções para organizar o conteúdo
* Prefira textos simples e diretos
* Evite páginas muito longas

Boa documentação é clara, organizada e fácil de manter.
