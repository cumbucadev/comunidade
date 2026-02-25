# Guia de Gerenciamento dos Emails Institucionais

Este guia apresenta os procedimentos para gerenciamento dos emails institucionais da Cumbuca Dev.

As orientações descritas aqui destinam-se às pessoas responsáveis pela administração das contas, incluindo criação, manutenção e ajustes de acesso.

## Acesso ao painel de gerenciamento

O gerenciamento das contas é realizado através do ISPConfig.

O acesso ao painel administrativo pode ser feito utilizando as credenciais disponíveis no 1Password, armazenadas no cofre Engenharia sob o nome `web admin panel`.

Acesse o painel em <https://isp.umbahost.com.br:8080>.

Após a autenticação, todas as operações relacionadas aos emails institucionais poderão ser realizadas pela interface.

## Criação de um novo email institucional

A criação de uma nova conta deve seguir o padrão institucional adotado pela comunidade.

No painel:

> Email → Contas de email → Adicionar novo email

Preencha os campos principais:

* **Nome**
Identificação descritiva da conta
Exemplo: Eventos, Documentação

* **Email**
Nome do endereço
Exemplo: eventos, documentacao

* **Senha**
Utilizar o 1Password para gerar a senha e armazenar as credenciais no cofre Engenharia seguindo o padrão:

`webmail <email>@`

Exemplos:

`webmail eventos@`
`webmail documentacao@`

* **Repetir Senha**
Repetir a senha gerada

Os demais campos podem permanecer com as configurações padrão.

Após salvar, a conta passa a existir imediatamente.

## Edição de um email existente

Alterações em contas já criadas são realizadas diretamente na mailbox.

No painel:

> Email → Contas de email → Selecionar conta → Editar

Entre os ajustes mais comuns estão:

* Redefinição de senha
* Alteração de quota
* Ativação ou desativação de serviços
* Configuração de encaminhamento

## Configuração de encaminhamento (forward)

O encaminhamento permite que mensagens enviadas para um email institucional sejam automaticamente redirecionadas para outros endereços.

Esse é o modelo padrão de acesso adotado pela Cumbuca Dev, pois possibilita que múltiplos responsáveis recebam mensagens sem a necessidade de compartilhamento de credenciais.

O email institucional permanece ativo normalmente, enquanto as mensagens também são entregues aos destinatários configurados.

### Como configurar

No painel:

> Email → Contas de email → Selecionar conta → Editar

Ao editar a conta, localize o campo:

**Enviar cópia para**

Adicione os endereços de destino, separando múltiplos destinatários com vírgulas.

### Exemplo

Ao editar a conta comunicacao@cumbuca.dev:

* **Enviar cópia para**
`responsavel1@gmail.com, responsavel2@gmail.com`

### Comportamento esperado

Após salvar:

• Novas mensagens passam a ser encaminhadas automaticamente
• O email institucional permanece ativo
• Não há impacto no endereço original

As alterações entram em vigor imediatamente.

## Boas práticas de gerenciamento

Durante a administração das contas:

* Manter nomenclatura padronizada
* Armazenar credenciais no 1Password
* Evitar compartilhamento manual de senhas
* Priorizar encaminhamentos em vez de múltiplos logins
* Registrar decisões relevantes quando aplicável

## Configuração de envio via Gmail

O Gmail pode ser utilizado como interface de envio institucional.

Essa configuração permite enviar mensagens pelo Gmail utilizando o endereço institucional como remetente.

No Gmail:

> Configurações → Ver todas as configurações

> Aba → Contas e Importação

> Seção → Enviar e-mail como → Adicionar outro endereço de e-mail

Informe:

* **Nome**
Identificação desejada
Exemplo: Eventos Cumbuca Dev

* **Endereço**
Email institucional
Exemplo: eventos@cumbuca.dev

Em seguida:

* Desmarcar a opção `Tratar como um alias`
* Clicar em **Próxima Etapa**

## Configuração SMTP

Utilize as credenciais disponíveis no 1Password.

Padrão:

`webmail <email>@`

Preencha:

* **Nome de usuário**
Email institucional completo

* **Senha**
Senha da mailbox

Manter:

Servidor SMTP → `isp.umbahost.com.br`
Porta → `587`
Segurança → `TLS`

Não alterar os demais campos.

Após salvar, o Gmail enviará um email de verificação.

Uma vez confirmado, o endereço institucional ficará disponível como opção no campo **“De:”**.

## Alterações e suporte

Situações que envolvam:

* Criação de novas contas
* Ajustes estruturais
* Mudanças de acesso
* Problemas de envio ou recebimento

Devem ser registradas por meio de issue direcionada ao **Núcleo Infra** em <https://github.com/cumbucadev/comunidade/issues>.
