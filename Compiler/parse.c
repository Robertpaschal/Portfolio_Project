#include "compiler.h"

ASTNode* parse_expression(Token *tokens, int *index);

// strdup implementation
char *strdup(const char *s) {
    size_t len = strlen(s) + 1;
    char *dup = malloc(len);
    if (dup != NULL) {
        memcpy(dup, s, len);
    }
    return dup;
}

ASTNode* parser(Token *tokens) {
    int index = 0;
    Token token = tokens[index++]; // Get the first token
    // Ensure that the token stream is not empty
    if (token.type == TOKEN_END) {
        fprintf(stderr, "Empty token stream\n");
        exit(EXIT_FAILURE);
    }

    // Create a root node for the AST
    ASTNode *root = NULL;

    // Parse the expression recursively
    root = parse_expression(tokens, &index);

    return root;
}

ASTNode* parse_expression(Token *tokens, int *index) {
    printf("Parsing expression...\n");
    // Parse the first operand
    ASTNode *left_operand = parse_operand(tokens, index);
    printf("Left operand parsed\n");

    // Parse the remaining expression recursively
    while (tokens[*index].type != TOKEN_END && tokens[*index].type != TOKEN_CLOSE_PAREN) {
        printf("Parsing operator...\n");
        // Create an operator node
        ASTNode *operator_node = malloc(sizeof(ASTNode));
        if (operator_node == NULL) {
            fprintf(stderr, "Memory allocation failed\n");
            exit(EXIT_FAILURE);
        }

        // Determine the operator type based on the token type
        switch (tokens[*index].type) {
            case TOKEN_PLUS:
                operator_node->type = NODE_ADD;
                printf("Operator: PLUS\n");
                break;
            case TOKEN_MINUS:
                operator_node->type = NODE_SUBTRACT;
                printf("Operator: MINUS\n");
                break;
            case TOKEN_MULTIPLY:
                operator_node->type = NODE_MULTIPLY;
                printf("Operator: MULTIPLY\n");
                break;
            case TOKEN_DIVIDE:
                operator_node->type = NODE_DIVIDE;
                printf("Operator: DIVIDE\n");
                break;
            default:
                fprintf(stderr, "Unexpected token\n");
                exit(EXIT_FAILURE);
        }

        // Move to the next token
        (*index)++;
        printf("Moving to next token...\n");

        // Parse the next operand
        ASTNode *right_operand = parse_operand(tokens, index);
        printf("Right operand parsed\n");

        // Set the left and right children of the operator node
        operator_node->left = left_operand;
        operator_node->right = right_operand;

        // Update the left operand for the next iteration
        left_operand = operator_node;
    }

    return left_operand;
}

ASTNode* parse_operand(Token *tokens, int *index) {
    printf("Parsing operand...\n");
    // Parse the current operand
    if (tokens[*index].type == TOKEN_NUMBER) {
        // Create a node for the number
        ASTNode *operand_node = malloc(sizeof(ASTNode));
        if (operand_node == NULL) {
            fprintf(stderr, "Memory allocation failed\n");
            exit(EXIT_FAILURE);
        }

        operand_node->type = NODE_NUMBER;
        operand_node->value = strdup(tokens[*index].value);
        if (operand_node->value == NULL) {
            fprintf(stderr, "Memory allocation failed\n");
            exit(EXIT_FAILURE);
        }

        // Move to the next token
        (*index)++;
        printf("Number parsed\n");

        return operand_node;
    } else if (tokens[*index].type == TOKEN_OPEN_PAREN) {
        // Handle parentheses
        (*index)++;
        printf("Opening parenthesis found, parsing nested expression...\n");
        ASTNode *expression_node = parse_expression(tokens, index);
        if (tokens[*index].type != TOKEN_CLOSE_PAREN) {
            fprintf(stderr, "Mismatched parentheses\n");
            exit(EXIT_FAILURE);
        }
        (*index)++;
        printf("Closing parenthesis found\n");
        return expression_node;
    } else {
        fprintf(stderr, "Expected number or '(' in expression\n");
        exit(EXIT_FAILURE);
    }
}

// The free_ast function remains unchanged
/**
 * free_ast - Frees the meoemry allocated for the Abstract Syntax Tree(AST)
 * @node - The root node of the ASR to free
 * Return: Nothing
*/
void free_ast(ASTNode *node) {
    if (node != NULL) {
        if (node->type == NODE_BINARY_OPERATION) {
            free_ast(node->left);
            free_ast(node->right);
        }
        free(node);
    }
}
