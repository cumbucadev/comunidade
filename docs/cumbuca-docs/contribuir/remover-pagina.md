# Como remover uma página

!!! warning "Código de Conduta"
    Antes de começar, é importante ler o nosso
    [Código de Conduta](https://github.com/cumbucadev/contributions/blob/main/CODE_OF_CONDUCT.md)
    para entender as diretrizes de comportamento e colaboração dentro da comunidade.

Este guia explica, passo a passo, como remover uma página da Cumbuca Docs usando apenas o navegador e o GitHub. Não é necessário saber programar ou usar terminal. Todo o processo pode ser feito diretamente pela interface do GitHub.

A documentação da comunidade fica neste site:
[cumbucadev/comunidade](https://github.com/cumbucadev/comunidade), também conhecido como
`repositório da comunidade`.

Remover uma página significa apagar o arquivo correspondente dentro da pasta `docs` e também retirar a página do menu da documentação.

## Antes de começar

Para editar a documentação, você precisa de:

* Uma conta no GitHub
* Estar logada na sua conta
* Acessar o [repositório da comunidade](https://github.com/cumbucadev/comunidade)
* Ter acesso de escrita no [repositório da comunidade](https://github.com/cumbucadev/comunidade)

Antes de remover uma página, verifique se:

* A página realmente não deve mais existir
* O conteúdo não deveria apenas ser atualizado ou movido
* A informação não está sendo usada em outro lugar da documentação

Se tiver dúvida, converse com o núcleo responsável pela área da documentação antes de remover a página.

## Passo 1: acessar o repositório

* Abra o repositório da comunidade: <https://github.com/cumbucadev/comunidade>.
* Dentro dele estão vários arquivos e pastas. Toda a documentação fica dentro da pasta **docs**.
* Clique na pasta **docs** para visualizar as páginas da documentação.

![home comunidade](../../assets/img/cumbuca-docs/contribuir/home-comunidade.png)

## Passo 2: encontrar a página que será removida

Dentro da pasta `docs`, navegue pelas pastas até encontrar o arquivo da página que será removida.

Por exemplo:

```txt
docs → cumbuca-docs → contribuir
```

Clique no arquivo para abrir a página.

![arquivo da página](../../assets/img/cumbuca-docs/contribuir/remover-pagina_arquivo.png)

## Passo 3: abrir as opções do arquivo

No canto superior direito da página do arquivo existe um menu com opções de ação.

* Clique no **ícone de três pontos**
* Entre as opções disponíveis estará **Delete file**

![menu delete file](../../assets/img/cumbuca-docs/contribuir/remover-pagina_menu-delete.png)

## Passo 4: remover o arquivo

* Clique em **Delete file**.

* O GitHub abrirá uma tela confirmando a remoção do arquivo. Nesse momento o conteúdo do arquivo
aparecerá marcado como removido.

![arquivo removido](../../assets/img/cumbuca-docs/contribuir/remover-pagina_confirmacao-delete.png)

* Clique em **Commit changes...** para confirmar a remoção.

![botão commit changes...](../../assets/img/cumbuca-docs/contribuir/remover-pagina_commit-changes.png)

## Passo 5: escrever a mensagem do commit

Para confirmar a remoção, é necessário registrar um commit.

Na Cumbuca, seguimos uma convenção simples para commits de documentação: a mensagem deve começar com `docs:`.

Exemplos:

```sh
docs: remove página antiga sobre eventos
docs: remove documentação desatualizada de onboarding
docs: remove guia duplicado
```

Depois de `docs:`, escreva uma frase curta explicando por que a página foi removida.

![mensagem commit remoção](../../assets/img/cumbuca-docs/contribuir/remover-pagina_commit-mensagem.png)

## Passo 6: criar um branch para a alteração

* Ao registrar o commit, selecione a opção **Create a new branch for this commit and start a pull request**
* Isso criará um **branch separado** para a remoção da página

![novo branch](../../assets/img/cumbuca-docs/contribuir/remover-pagina_commit-branch.png)

* Depois clique em **Propose changes**

![propose changes](../../assets/img/cumbuca-docs/contribuir/remover-pagina_propose-changes.png)

## Passo 7: abrir o Pull Request

Depois do commit, o GitHub abrirá automaticamente a página para criar um **Pull Request**.

Um Pull Request é uma proposta de alteração no repositório.

Na descrição do Pull Request, adicione:

```md
closes #<numero-da-issue>
```

Exemplo:

```md
closes #42
```

Isso faz com que a issue seja **fechada automaticamente** quando o Pull Request for aprovado e integrado ao repositório.

![descrição pr remoção](../../assets/img/cumbuca-docs/contribuir/remover-pagina_descricao-pr.png)

* Revise as mudanças e clique em **Create pull request**

![create pull request](../../assets/img/cumbuca-docs/contribuir/remover-pagina_create-pr.png)

Depois de clicar em **Create pull request**, o Pull Request será criado no repositório da comunidade.

![pr criado](../../assets/img/cumbuca-docs/contribuir/remover-pagina_pr-criado.png)

Se você descer a página do Pull Request, verá um comentário automático com um link para **pré-visualizar as mudanças na documentação**.

![preview docs](../../assets/img/cumbuca-docs/contribuir/remover-pagina_preview.png)

Caso esse comentário ainda não tenha aparecido ou o link retorne **404**, aguarde alguns minutos e atualize a página.

## Passo 8: remover a página do menu da documentação

Mesmo depois de remover o arquivo, a página ainda pode aparecer no menu da documentação.

Para corrigir isso, é necessário editar o arquivo `mkdocs.yml`.

### 1. Trocar para o branch do Pull Request

Antes de editar qualquer arquivo, verifique se você está no **branch correto**.

No topo da página do repositório existe um **seletor de branch**.

* Clique no seletor de branch
* Escolha o **branch criado pelo seu Pull Request**

![selecionar branch](../../assets/img/cumbuca-docs/contribuir/remover-pagina_select-branch.png)

### 2. Abrir o arquivo mkdocs.yml

Depois de selecionar o branch correto:

* Procure o arquivo **mkdocs.yml** na raiz do repositório

![arquivo mkdocs](../../assets/img/cumbuca-docs/contribuir/remover-pagina_nav-mkdocs.png)

* Clique no arquivo para abrir
* Clique no **ícone de lápis** para editar

![editar mkdocs](../../assets/img/cumbuca-docs/contribuir/remover-pagina_editar-mkdocs.png)

### 3. Encontrar a seção `nav`

Dentro do arquivo, procure a seção chamada `nav`.

Ela define quais páginas aparecem no menu da documentação.

![nav mkdocs](../../assets/img/cumbuca-docs/contribuir/remover-pagina_nav.png)

### 4. Remover a página do menu

Remova a linha que aponta para a página apagada.

Exemplo:

```yml
- cumbuca-docs/contribuir/pagina-antiga.md
```

![linha removida nav](../../assets/img/cumbuca-docs/contribuir/remover-pagina_nav-removido.png)

### 5. Salvar a alteração

Depois de editar o arquivo:

* Clique em **Commit changes**

![commit changes mkdocs](../../assets/img/cumbuca-docs/contribuir/remover-pagina_commit-mkdocs.png)

Use uma mensagem de commit como:

```sh
docs: remove página do menu da documentação
```

![mensagem commit mkdocs](../../assets/img/cumbuca-docs/contribuir/remover-pagina_commit-msg-mkdocs.png)

Como você já está no branch correto, o commit será automaticamente adicionado ao **mesmo Pull Request**. Você não precisa alterar nada.

![opção selecionada de fazer o commit diretamente no branch 42](../../assets/img/cumbuca-docs/contribuir/remover-pagina_nav-commit-branch.png)

* Depois clique em **Commit changes**.

![botão commit changes](../../assets/img/cumbuca-docs/contribuir/remover-pagina_nav-commit-changes-2.png)

## Passo 11: acompanhar o Pull Request

Depois de adicionar a página ao menu e salvar o commit, o Pull Request continuará aberto até que seja revisado.

Você pode acompanhar o status do Pull Request diretamente no GitHub.

### 1. Acessar a aba Pull requests

No repositório da comunidade, clique na aba **Pull requests** no topo da página.

![aba pull requests](../../assets/img/cumbuca-docs/contribuir/remover-pagina_aba-pull-requests.png)

### 2. Encontrar o Pull Request criado

Depois de abrir a aba **Pull requests**, você verá a lista de Pull Requests abertos no repositório.

Procure pelo Pull Request que você criou.

![lista de pull requests](../../assets/img/cumbuca-docs/contribuir/remover-pagina_pr-lista.png)

### 3. Abrir o Pull Request

Clique no título do Pull Request para abrir a página com os detalhes da alteração.

Nessa página você poderá ver:

* a descrição do Pull Request
* os commits realizados
* os arquivos modificados

![pagina do pull request](../../assets/img/cumbuca-docs/contribuir/remover-pagina_pr-detalhes.png)

### 4. Nova pré-visualização após atualizar o menu

Depois que você adicionar a nova página ao menu da documentação (no arquivo `mkdocs.yml`) e fizer um novo commit, uma nova pré-visualização será gerada.

Ao descer novamente a página do Pull Request, você verá **um novo comentário abaixo do primeiro**, com um link atualizado para visualizar a documentação.

Esse novo link mostrará a documentação já com **a navegação (menu) atualizada**.

![nova pre visualização](../../assets/img/cumbuca-docs/contribuir/remover-pagina_pr-preview-atualizado.png)

### 5. Aguardar a revisão

Depois que o Pull Request estiver pronto, alguém da comunidade irá revisar a alteração.

Durante esse processo podem acontecer algumas situações:

* a alteração é aprovada
* são sugeridas melhorias
* são solicitados ajustes

## Passo 12: integração do Pull Request

Quando todas as verificações estiverem corretas e a revisão for concluída, o Pull Request poderá ser integrado ao repositório.

Isso acontece através do botão **Squash and merge**.

![botao squash and merge](../../assets/img/cumbuca-docs/contribuir/remover-pagina_pr-squash-merge.png)

## Boas práticas ao remover páginas

* Verifique se a informação não é mais necessária
* Prefira atualizar ou mover conteúdo antes de remover
* Sempre remova a página também do menu (`mkdocs.yml`)
* Explique claramente no commit por que a página foi removida

Manter a documentação organizada é tão importante quanto criar novas páginas.
