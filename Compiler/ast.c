#include "compiler.h"
/**
 * @brief Evaluates the expression represented by the AST.
 * 
 * evaluate_expression - This function recursively evalutes the expression represented
 * by the given AST node.
 * 
 * Return: The result of the expression evaluation.
*/
int evaluate_epression(ASTNode *node) {
    int left_value, right_value;

    if (node == NULL) {
        fprintf(stderr, "Invalid AST node\n");
        exit(EXIT_FAILURE);
    }

    // Base case: if the node is a number node, return its value
    if (node->type == NODE_NUMBER) {
        return atoi(node->value);
    }

    // Evaluate left and right subtree recursively
    left_value = evaluate_epression(node->left);
    right_value = evaluate_epression(node->right);

    // Perform the operation based on the node type
    if (node->type == NODE_ADD) {
        return left_value + right_value;
    }
    else if (node->type == NODE_SUBTRACT) {
        return left_value - right_value;
    }
    else if (node->type == NODE_MULTIPLY) {
        return left_value * right_value;
    }
    else if (node->type == NODE_DIVIDE) {
        if (right_value == 0) {
            fprintf(stderr, "Divison by zero\n");
            exit(EXIT_FAILURE);
        }
        return left_value / right_value;
    }
    else {
        fprintf(stderr, "Invalid AST node type\n");
        exit(EXIT_FAILURE);
    }
}
