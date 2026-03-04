# Como remover uma página

!!! warning "Código de Conduta"
    Antes de começar, é importante ler o nosso
    [Código de Conduta](https://github.com/cumbucadev/contributions/blob/main/CODE_OF_CONDUCT.md)
    para entender as diretrizes de comportamento e colaboração dentro da comunidade.

Este guia explica, passo a passo, como remover uma página da Cumbuca Docs usando apenas o navegador
e o GitHub. Não é necessário saber programar ou usar terminal. Todo o processo pode ser feito
diretamente pela interface do GitHub.

A documentação da comunidade fica neste site:
[cumbucadev/comunidade](https://github.com/cumbucadev/comunidade), também conhecido como
`repositório da comunidade`.

Remover uma página significa apagar o arquivo correspondente dentro da pasta `docs` e também
retirar a página do menu da documentação.

## Antes de começar

Antes de remover uma página, verifique se:

* A página realmente não deve mais existir
* O conteúdo não deveria apenas ser atualizado ou movido
* A informação não está sendo usada em outro lugar da documentação

Se tiver dúvida, converse com o núcleo responsável pela área da documentação antes de remover a
página.

## Passo 1: acessar o repositório

* Abra o repositório da comunidade: <https://github.com/cumbucadev/comunidade>.
* Dentro dele estão vários arquivos e pastas. Toda a documentação fica dentro da pasta **docs**.
* Clique na pasta **docs** para visualizar as páginas da documentação.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a página inicial do repositório `cumbucadev/comunidade`
* a lista de arquivos
* a pasta **docs** destacada

## Passo 2: encontrar a página que será removida

Dentro da pasta `docs`, navegue pelas pastas até encontrar o arquivo da página que será removida.

Por exemplo:

```sh
docs → nucleos → nucleo-comunicacao → guias → guia-de-eventos.md
```

Clique no arquivo para abrir a página.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o caminho do arquivo no topo da página
* o conteúdo do arquivo aberto no GitHub

## Passo 3: abrir as opções do arquivo

* No canto superior direito da página do arquivo existe um menu com opções de ação.
* Clique no **ícone de três pontos** (ou no menu de ações do arquivo).
* Entre as opções disponíveis estará **Delete file**.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o menu de ações do arquivo
* a opção **Delete file**

## Passo 4: remover o arquivo

Clique em **Delete file**.

O GitHub abrirá uma tela confirmando a remoção do arquivo.

Nesse momento o conteúdo do arquivo aparecerá marcado como removido.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a tela de remoção do arquivo
* o conteúdo aparecendo como deletado

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

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o campo de mensagem de commit
* um exemplo de commit começando com `docs:`

## Passo 6: criar um branch para a alteração

* Ao registrar o commit, selecione a opção: **Create a new branch for this commit and start a pull request**
* Isso criará um **branch separado** para a remoção da página.
* Depois clique em **Commit changes**.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a opção **Create a new branch for this commit**
* o botão **Commit changes**

## Passo 7: abrir o Pull Request

* Depois do commit, o GitHub abrirá automaticamente a página para criar um **Pull Request**.
* Um Pull Request é uma proposta de alteração no repositório.
* Revise a alteração e clique em **Create pull request**.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a tela de criação de Pull Request
* o botão **Create pull request**

## Passo 8: remover a página do menu da documentação

Mesmo depois de remover o arquivo, a página ainda pode aparecer no menu da documentação. Para
corrigir isso, é necessário editar o arquivo `mkdocs.yml`.

* Abra o arquivo **mkdocs.yml** na raiz do repositório e clique no **ícone de lápis** para editar.
* Procure a seção `nav`, onde estão listadas as páginas da documentação.

Exemplo:

```yml
nav:
  - Cumbuca Docs:
    - cumbuca-docs/intro.md
    - cumbuca-docs/contribuir.md
    ...
  - Nucleos:
    - nucleo-comunicacao:
      - guias:
        - guia-exemplo.md
        - nova-pagina.md
```

Remova a linha que aponta para a página apagada.

Exemplo após a remoção:

```yml
nav:
  - Cumbuca Docs:
    - cumbuca-docs/intro.md
    - cumbuca-docs/contribuir.md
    ...
  - Nucleos:
    - nucleo-comunicacao:
      - guias:
        - guia-exemplo.md
```

Depois de editar o `mkdocs.yml`, faça commit da alteração **no mesmo branch do Pull Request**.

Use uma mensagem de commit como:

```sh
docs: remove página do menu da documentação
```

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o arquivo `mkdocs.yml`
* a linha sendo removida do menu

## O que acontece depois

Depois que o Pull Request é criado, alguém do núcleo responsável irá revisar a remoção.

Durante a revisão podem acontecer algumas situações:

* a remoção é aprovada
* são sugeridas mudanças
* é solicitado mover o conteúdo em vez de remover

Quando o Pull Request é aprovado, a página será removida da documentação.

O site da Cumbuca Docs será atualizado automaticamente após essa integração.

## Boas práticas ao remover páginas

* Verifique se a informação não é mais necessária
* Prefira atualizar ou mover conteúdo antes de remover
* Sempre remova a página também do menu (`mkdocs.yml`)
* Explique claramente no commit por que a página foi removida

Manter a documentação organizada é tão importante quanto criar novas páginas.
