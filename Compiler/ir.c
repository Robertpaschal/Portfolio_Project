#include "compiler.h"
IR* generate_ir(ASTNode *root);
void generate_ir_recursive(ASTNode *node, IR *ir);
/**
 * @brief Generate Intermediate Representation(IR) for the given abstract
 * syntax tree(AST)
 * generate_ir - Generates IR instructions for the provided AST recursively
 * @root - The root node of the AST
 * Return Pointer to the generated IR
*/
IR* generate_ir(ASTNode *root) {
    // Allocate memeory for the IR
    IR *ir = malloc(sizeof(IR));
    if (ir == NULL) {
        fprintf(stderr, "Memeory allocation failed\n");
        exit(EXIT_FAILURE);
    }
    ir->instructions = NULL;
    ir->instruction_count = 0;

    //Generate IR recursively
    generate_ir_recursive(root, ir);

    return ir;
}

/**
 * @brief Recursive function to generate IR for an AST node
 * generate_ir_recursive - Traverses the AST recursively and generate IR instructions for each node.
 * @node - The current node in the AST
 * @ir - Pointer to the IR structure
 * Return: nothing
*/
void generate_ir_recursive(ASTNode *node, IR *ir) {
    if (node == NULL) {
        return;
    }

    if (node->type == NODE_NUMBER) {
        // For a number node, load the constant value into a register
        ir->instruction_count++;
        ir->instructions = realloc(ir->instructions, sizeof(IRInstruction) * ir->instruction_count);
        if (ir->instructions == NULL) {
            fprintf(stderr, "Memeory allocation failed\n");
            exit(EXIT_FAILURE);
        }
        IRInstruction load_const = {IR_LOAD_CONST, atoi(node->value), -1, ir->instruction_count};
        ir->instructions[ir->instruction_count - 1] = load_const;
    }
    else if (node->type == NODE_BINARY_OPERATION) {
        // For a binary operation node, generate IR for the left and right subtrees
        generate_ir_recursive(node->left, ir);
        generate_ir_recursive(node->right, ir);

        // Determine the IR instruction type based on the operator
        IRType ir_type;
        if (node->value[0] == '+') {
            ir_type = IR_ADD;
        }
        else if (node->value[0] == '-') {
            ir_type = IR_SUBTRACT;
        }
        else if (node->value[0] == '*') {
            ir_type = IR_MULTIPLY;
        }
        else if (node->value[0] == '/') {
            ir_type = IR_DIVIDE;
        }
        else {
            fprintf(stderr, "Unsupported operator: %s\n", node->value);
            exit(EXIT_FAILURE);
        }

        // Generate IR instruction for the binary operation
        ir->instruction_count++;
        ir->instructions = realloc(ir->instructions, sizeof(IRInstruction) * ir->instruction_count);
        if (ir->instructions == NULL) {
            fprintf(stderr, "Memeory allocation failed\n");
            exit(EXIT_FAILURE);
        }
        IRInstruction binary_op = {ir_type, -1, -1, ir->instruction_count};
        ir->instructions[ir->instruction_count - 1] = binary_op;
    }
}

/**
 * free_ir - Frees the memeory allocated for the Intermediate Representation (IR)
 * @ir: The intermediate Represenation to free
 * Return: Nothing
*/
void free_ir(IR *ir) {
    if (ir != NULL) {
        if (ir->instructions != NULL) {
            free(ir->instructions);
        }
        free(ir);
    }
}
