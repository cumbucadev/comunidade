# Guia de Gerenciamento dos Emails Institucionais

Este guia apresenta os procedimentos para gerenciamento dos emails institucionais da Cumbuca Dev.

As orientações descritas aqui destinam-se às pessoas responsáveis pela administração das contas, incluindo criação, manutenção e ajustes de acesso.

## Conteúdos

* [Acesso ao painel de gerenciamento](#acesso-ao-painel-de-gerenciamento)
* [Criação de um novo email institucional](#criação-de-um-novo-email-institucional)
* [Edição de um email existente](#edição-de-um-email-existente)
* [Configuração de encaminhamento (forward)](#configuração-de-encaminhamento-forward)
  * [Como configurar](#como-configurar)
  * [Exemplo](#exemplo)
  * [Comportamento esperado](#comportamento-esperado)
* [Boas práticas de gerenciamento](#boas-práticas-de-gerenciamento)
* [Configuração de envio via Gmail](#configuração-de-envio-via-gmail)
* [Alterações e suporte](#alterações-e-suporte)

## Acesso ao painel de gerenciamento

O gerenciamento das contas é realizado por meio do ISPConfig.

As credenciais administrativas estão armazenadas no 1Password, no cofre Engenharia, sob o nome `web admin panel`:

<img width="900" height="480" alt="image" src="https://github.com/user-attachments/assets/5391cb0d-a02d-400d-a5ce-75623456e946" />

Acesse o painel em:

[https://isp.umbahost.com.br:2088/](https://isp.umbahost.com.br:2088/)

<img width="1712" height="756" alt="image" src="https://github.com/user-attachments/assets/ad8e933f-712e-4544-aa77-5b70072e6c07" />

Após a autenticação, todas as operações relacionadas aos emails institucionais poderão ser realizadas pela interface administrativa.

## Criação de um novo email institucional

A criação de novas contas deve seguir o padrão institucional adotado pela comunidade.

No [painel](https://isp.umbahost.com.br:2088/):

> Email → Contas de email → Adicionar novo email

<img width="1712" height="756" alt="image" src="https://github.com/user-attachments/assets/7630663c-16e8-42f0-ab70-01c6c8e22923" />

Preencha os campos principais:

<img width="646" height="542" alt="image" src="https://github.com/user-attachments/assets/aaf71ad4-b23f-470b-9502-3d051d61d7e4" />

### Nome

Identificação descritiva da conta.

Exemplos:

* Eventos
* Documentação

### Email

Nome do endereço institucional.

Exemplos:

* eventos
* documentacao

### Senha

Utilize o 1Password para gerar e armazenar a senha no cofre Engenharia seguindo o padrão:

`webmail <email>@`

Exemplos:

* `webmail eventos@`
* `webmail documentacao@`

### Repetir Senha

Repita a senha gerada anteriormente.

Os demais campos podem permanecer com as configurações padrão.

Após salvar, a conta será criada imediatamente.

## Edição de um email existente

As alterações em contas existentes são realizadas diretamente pela interface da conta.

No [painel](https://isp.umbahost.com.br:2088/):

> Email → Contas de email → Selecionar conta → Editar

As alterações mais comuns incluem:

* Redefinição de senha
* Alteração de quota
* Ativação ou desativação de serviços
* Configuração de encaminhamento

## Configuração de encaminhamento (forward)

O encaminhamento permite que mensagens enviadas para um email institucional sejam automaticamente redirecionadas para outros endereços.

Esse é o modelo padrão de acesso adotado pela Cumbuca Dev, pois permite que múltiplas pessoas recebam mensagens sem necessidade de
compartilhamento de credenciais.

O email institucional permanece ativo normalmente, enquanto as mensagens também são entregues aos destinatários configurados.

### Como configurar

No [painel](https://isp.umbahost.com.br:2088/):

> Email → Contas de email → Selecionar conta → Editar

Ao editar a conta, localize o campo:

**Enviar cópia para**

Adicione os endereços de destino separados por vírgula.

### Exemplo

Ao editar a conta `eventos@cumbuca.dev`:

| Campo             | Valor                                            |
| ----------------- | ------------------------------------------------ |
| Enviar cópia para | `responsavel1@gmail.com, responsavel2@gmail.com` |

### Comportamento esperado

Após salvar:

* Novas mensagens passarão a ser encaminhadas automaticamente
* O email institucional permanecerá ativo
* O endereço original não será alterado

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

Acesse:

> Contas e Importação → Enviar e-mail como → Adicionar outro endereço de e-mail

<img width="1174" height="400" alt="image" src="https://github.com/user-attachments/assets/faead73b-cb8c-4588-bbf7-e1a3fa0b248e" />

Preencha os campos:

### Nome

Identificação exibida para quem receberá os emails.

Exemplo:

`Eventos Cumbuca Dev`

### Endereço

Email institucional.

Exemplo:

`eventos@cumbuca.dev`

Em seguida:

1. Desmarque a opção `Tratar como um alias`
2. Clique em **Próxima Etapa**

<img width="1464" height="1376" alt="image" src="https://github.com/user-attachments/assets/2a4ac24e-fc20-43db-824e-4d2508426272" />

### Configuração SMTP

Na próxima tela, utilize as credenciais armazenadas no 1Password.

Padrão:

`webmail <email>@`

Preencha os campos da seguinte forma:

| Campo           | Valor                        |
| --------------- | ---------------------------- |
| Servidor SMTP   | `isp.umbahost.com.br`        |
| Porta           | `587`                        |
| Segurança       | `TLS`                        |
| Nome de usuário | Email institucional completo |
| Senha           | Senha da conta               |

<img width="1464" height="1376" alt="image" src="https://github.com/user-attachments/assets/8b7b86d1-38b4-4693-88a3-fcddf0e3fe7b" />

Os demais campos podem permanecer com as configurações padrão.

Após salvar, o Gmail enviará um email de verificação.

Após a confirmação, o endereço institucional ficará disponível no campo **“De:”** durante o envio de emails.

## Alterações e suporte

Situações que envolvam:

* Criação de novas contas
* Ajustes estruturais
* Mudanças de acesso
* Problemas de envio ou recebimento

Devem ser registradas por meio de issue direcionada ao **Núcleo Infra** em:

[https://github.com/cumbucadev/comunidade/issues](https://github.com/cumbucadev/comunidade/issues)
