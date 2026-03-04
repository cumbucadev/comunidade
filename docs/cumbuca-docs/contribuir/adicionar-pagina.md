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

Antes de criar uma nova página, verifique se:

* A informação realmente precisa de uma nova página
* O conteúdo não já existe em outra parte da documentação
* Você sabe em qual seção da Docs a nova página deve ficar

## Passo 1: acessar o repositório

* Abra o repositório da comunidade: <https://github.com/cumbucadev/comunidade>.
* Dentro dele estão vários arquivos e pastas. Toda a documentação fica dentro da pasta **docs**.
* Clique na pasta **docs** para visualizar as páginas da documentação.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a página inicial do repositório `cumbucadev/comunidade`
* a lista de arquivos
* a pasta **docs** destacada

## Passo 2: navegar até a seção correta

Dentro da pasta `docs`, navegue pelas pastas até encontrar o local onde a nova página deve ficar.

Por exemplo:

```sh
docs → nucleos → nucleo-comunicacao guias/nova-pagina.md→ guias
```

Cada pasta representa uma seção da documentação. Escolha a pasta que melhor representa o tema da
nova página.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a navegação dentro da pasta `docs`
* algumas subpastas da documentação
* a pasta onde a nova página será criada

## Passo 3: criar um novo arquivo

* Depois de entrar na pasta correta, procure o botão **Add file**
* Clique em **Add file**
* Selecione **Create new file**

Isso abrirá o editor para criar um novo arquivo.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o botão **Add file**
* a opção **Create new file**

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

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o campo de nome do arquivo
* o nome terminando em `.md`

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

Se quiser visualizar como o conteúdo ficará, use a aba **Preview** no topo do editor.

Caso você queira fazer algo que não está descrito neste guia, como adicionar **imagens**, pode consultar este guia de Markdown <https://www.markdownguide.org/basic-syntax/>.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o editor do GitHub
* o conteúdo sendo escrito
* as abas **Edit** e **Preview**

## Passo 6: salvar a nova página

Depois de terminar o conteúdo da página, clique no botão **Commit changes**, que fica no topo da página.

Isso abrirá a janela para registrar a alteração.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o botão **Commit changes**
* o botão destacado

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

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a janela de commit aberta
* o campo de mensagem preenchido com `docs:`

## Passo 8: criar um branch para a alteração

* Ao registrar o commit, selecione a opção: **Create a new branch for this commit and start a pull request**
* Isso criará um **branch separado** para a nova página.
* Depois clique em **Commit changes**.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a opção **Create a new branch for this commit**
* o botão **Commit changes**

## Passo 9: abrir o Pull Request

* Depois do commit, o GitHub abrirá automaticamente a página para criar um **Pull Request**.
* Um Pull Request é uma proposta de alteração no repositório.
* Revise as mudanças e clique em **Create pull request**.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a tela de criação de Pull Request
* o botão **Create pull request**

## Passo 10: adicionar a página ao menu da documentação

Para que a nova página apareça no menu da Cumbuca Docs, é necessário adicioná-la ao arquivo `mkdocs.yml`.

Esse arquivo define a estrutura de navegação da documentação.

### 1. Abrir o arquivo mkdocs.yml

No repositório, procure o arquivo **mkdocs.yml** na raiz do projeto e clique nele para abrir.

Depois clique no **ícone de lápis** para editar o arquivo.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* o arquivo `mkdocs.yml` na raiz do repositório
* o ícone de lápis para editar

### 2. Encontrar a seção `nav`

Dentro do arquivo, procure a seção chamada `nav`.
Ela define quais páginas aparecem no menu da documentação.

Exemplo simplificado:

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

### 3. Adicionar a nova página

Adicione uma nova linha apontando para o arquivo que você criou.

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

O texto antes dos dois pontos (`:`) será o nome exibido no menu.
O caminho depois dos dois pontos é o caminho do arquivo dentro da pasta `docs`.

### 4. Salvar a alteração no mesmo Pull Request

Depois de editar o `mkdocs.yml`:

* Clique em **Commit changes**
* Use uma mensagem de commit começando com `docs:`

Exemplo:

```sh
docs: adiciona nova página ao menu da documentação
```

Muito importante: **não crie um novo branch**.

Certifique-se de que o commit está sendo feito **no mesmo branch do Pull Request que você abriu anteriormente**.

Assim, a alteração será adicionada automaticamente ao mesmo Pull Request.

[INSERIR IMAGEM AQUI]

A imagem deve mostrar:

* a tela de commit
* o branch do Pull Request selecionado
* o botão **Commit changes**

## O que acontece depois

Depois que o Pull Request é criado, alguém do núcleo responsável irá revisar a nova página.

Durante a revisão podem acontecer algumas situações:

* a página é aprovada
* são sugeridas melhorias
* são solicitados pequenos ajustes

Quando o Pull Request é aprovado, a nova página é integrada ao repositório principal. O site da
Cumbuca Docs será atualizado automaticamente após essa integração.

## Dicas para criar boas páginas

* Comece com um título claro
* Explique o objetivo da página logo no início
* Use seções para organizar o conteúdo
* Prefira textos simples e diretos
* Evite páginas muito longas

Boa documentação é clara, organizada e fácil de manter.
