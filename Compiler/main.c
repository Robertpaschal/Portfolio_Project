#include "compiler.h"

/**
 * @brief The main function of the compiler
 * 
 * main - This function serves as the entry point for the compiler. It performs the following steps:
 *  1. Toknizes the input source code
 * 2. Parses the tokens into an Abstract Syntax Tree (AST)
 * 3. Performs semantic  analysis on the AST
 * 4. Generates Intermediate Representation (IR) from the AST
 * 5. Generates target code from the IR
 * 
 * Return: 0 on success, 1 on failure
*/
int main() {
    // Input source code
    const char *input = "1 + 2 * 3";

    // Toknization
    Token *tokens = lexer(input);
    if (tokens == NULL) {
        fprintf(stderr, "Lexer error\n");
        return 1;
    }

    // Print out the tokens
    printf("Tokens:\n");
    for (int i = 0; tokens[i].type != TOKEN_END; i++) {
        printf("Token: type=%d, value='%s'\n", tokens[i].type, tokens[i].value);
    }

    // Parsing
    ASTNode *root = parser(tokens);
    if (root == NULL) {
        fprintf(stderr, "Parser error\n");
        return 1;
    }

    //Semantic Analysis
    perform_semantic_analysis(root);

    //Intermediate Represntation (IR) Generation
    IR *ir = generate_ir(root);
    if (ir == NULL) {
        fprintf(stderr, "IR generation error\n");
        return 1;
    }

    //Code Generation
    char *code = generate_code(ir);
    if (code == NULL) {
        fprintf(stderr, "Code generation error\n");
        return 1;
    }

    // Print the generated code
    printf("Generated code:\n%s\n", code);

    // Clean up: free allocated memeory
    free(code);
    free_ir(ir);
    free_ast(root);
    free(tokens);

    return 0;
}
