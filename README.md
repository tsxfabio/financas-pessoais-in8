# Aplicativo de Finanças Pessoais - IN8
## Desafio Proposto

**Título do projeto:** Aplicativo de Gerenciamento de Finanças Pessoais.  
 
**Descrição do projeto:** O objetivo deste projeto é desenvolver um aplicativo de gerenciamento de finanças pessoais que ajude os usuários a controlarem suas despesas e receitas. O aplicativo permitirá que os usuários cadastrem suas transações financeiras, categorizem-nas e acompanhem seus gastos ao longo do tempo. Os usuários poderão visualizar gráficos e relatórios sobre seus gastos por categoria, monitorar seus saldos e definir metas financeiras.  

**Obs:** Não é obrigatório implementar os requisitos apresentados acima na totalidade, pode fazer o que for possível, mas seja criativo.  

**Tecnologias sugeridas:**
- Frameworks de frontend  como React/NextJS ou Flutter.  
- Gerenciador de estado.
- Bibliotecas de UI, como Bootstrap ou Material-UI, ou qualquer outro.  
- Armazenamento local, utilizando o localStorage ou qualquer outra alternativa.  

O desafio deve ser enviado [AQUI](https://docs.google.com/forms/d/e/1FAIpQLSdZA8faSnKPGfW8UH-1XNyluV6VPcGTEdnyP4XmqjlSM1J-Gg/viewform)

## Solução  
- Referência de Estilo:  
    - [Webpage da IN8](https://in8.com.br/)

### Especificações Técnicas:  
- Tecnologias Utilizadas:
    - ReactJS
    - NextJS 13
    - [Stitches](https://stitches.dev/)
    - [RadixUI](https://www.radix-ui.com/)
    - JSON Server
### Requisitos Funcionais:  
- Página Principal:
    - [ ] Deve possuir um botão para cadastrar novas transações.
    - [ ] Deve possuir um dashboard com 3 categorias: Entradas, Saídas e Saldo.
    - [ ] Deve apresentar um input para busca.
    - [ ] Deve apresentar uma lista de transações de acordo com o input de busca. Caso o imput esteja vazio, deve apresentar todas as transações.
    - [ ] Deve possuir um rodapé com informações do desenvolvedor e finalidade da aplicação.
- Modal de Transações:
    - [ ] O sistema deve possuir um modal para adicionar transações.
    - [ ] O modal deve permitir que usuários consigam aidicionar novas transações, contendo 'Descrição', 'Preço', 'Categoria' e 'Tipo'.
    - [ ] O modal deve permitir que usuários consigam cadastrar novas categorias de transações.
    - [ ] O modal deve possuir um botão com a funcionalidade de submeter a transação.
