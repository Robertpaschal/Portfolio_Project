#ifndef COMPILER_H
#define COMPILER_H

//defining neccessary includes
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

//defining token structure for the lexer
typedef enum {
    TOKEN_IDENTIFIER,
    TOKEN_KEYWORD,
    TOKEN_LITERAL,
    TOKEN_OPERATOR,
    TOKEN_NUMBER,
    TOKEN_PLUS,
    TOKEN_MINUS,
    TOKEN_MULTIPLY,
    TOKEN_DIVIDE,
    TOKEN_END,
    TOKEN_OPEN_PAREN,
    TOKEN_CLOSE_PAREN,
    TOKEN_UNKNOWN
} TokenType;

typedef struct {
    TokenType type;
    char *value;
} Token;

//Define AST node types
typedef enum {
    NODE_NUMBER,
    NODE_ADD,
    NODE_SUBTRACT,
    NODE_MULTIPLY,
    NODE_DIVIDE,
    NODE_BINARY_OPERATION,
} NodeType;

typedef struct ASTNode {
    NodeType type;
    char *value;
    struct ASTNode *left;
    struct ASTNode *right;
} ASTNode;

// Intermediate Representation (IR) Instruction types
typedef enum {
    IR_LOAD_CONST,
    IR_ADD,
    IR_SUBTRACT,
    IR_MULTIPLY,
    IR_DIVIDE,
} IRType;

typedef struct IRInstruction {
    IRType type;
    int operand1;
    int operand2;
    int result;
} IRInstruction;

typedef struct IR {
    IRInstruction *instructions;
    int instruction_count;
} IR;

//lexer function prototypes
Token* lexer(const char *input);

//Parser function prototypes
ASTNode* parse(Token *tokens);
ASTNode* parser(Token *tokens);
ASTNode* parse_expression(Token *tokens, int *index);
ASTNode* parse_operand(Token *tokens, int *index);
void free_ast(ASTNode *node);

//AST function prototypes
int evaluate_epression(ASTNode *node);

//Semantic Analysis prototypes
void perform_semantic_analysis(ASTNode *root);

// IR Generation prototypes
IR* generate_ir(ASTNode *root);
void free_ir(IR *ir);

//Code Generation prototypes
char* generate_code(IR *ir);

#endif /* COMPILER_H */