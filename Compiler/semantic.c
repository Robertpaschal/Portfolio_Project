#include "compiler.h"
/**
 * @brief Performs semantic analysis on the abstract syntax tree (AST).
 * perform_semantic_analysis - This function traverses the AST and performs
 * semantic analysis, ensuring that the operands of the binary arithmetic  operations are numbers
 * Return: Nothing
 * @warning If semantic erros are detected, the function prints an error message
 * and exists the program.
*/
void perform_semantic_analysis(ASTNode *root) {
    if (root == NULL) {
        return;
    }
    // Perform semantic analysis for the current node
    if (root->type == NODE_BINARY_OPERATION) {
        if (root->left->type != NODE_NUMBER || root->right->type != NODE_NUMBER) {
            fprintf(stderr, "Semantic Error: Operands of arithmetic operations must be numbers\n");
            exit(EXIT_FAILURE);
        }
    }
    //Recursively perform semantic analysis on child nodes
    perform_semantic_analysis(root->left);
    perform_semantic_analysis(root->right);
}
