#include "compiler.h"
char* generate_code(IR *ir);
char* generate_code_recursive(IRInstruction *instrctions, int instruction_count);
/**
 * @brief Generate target code from the Intermediate Representation (IR).
 * generate_code - Generates target code in a high-level language
 * (e.g., C) from the IR
 * @ir - The intermediate Represenation (IR) to generate code from
 * Return: Pointer to the generated target code.
*/
char* generate_code(IR *ir) {
    if (ir == NULL || ir->instructions == NULL || ir->instruction_count == 0) {
        fprintf(stderr, "Invalid IR\n");
        exit(EXIT_FAILURE);
    }

    // Generate code recursively
    return generate_code_recursive(ir->instructions, ir->instruction_count);
}

/**
 * @brief Recursive function to generate target code from the IR instructions.
 * generate_code_recursive - recursively traverses the IR instrcutions
 * and generates target code.
 * @instrcutions - pointer to the array of IR instructions
 * @instrcution_count - The number of IR instructions
 * Return: Pointer to the generated arget code.
*/
char* generate_code_recursive(IRInstruction *instructions, int instruction_count) {
    // Initailize target code string
    char *code = malloc(1024 * sizeof(char));
    int i;
    if (code == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(EXIT_FAILURE);
    }
    code[0] = '\0';

    // Generate code for ech IR instruction
    for (i = 0; i < instruction_count; i++) {
        if (instructions[i].type == IR_LOAD_CONST) {
            // Generate code for loading constant
            sprintf(code + strlen(code), "int temp%d = %d;\n", instructions[i].result, instructions[i].operand1);
        }
        else if (instructions[i].type == IR_ADD) {
            // for addition
            sprintf(code + strlen(code), "temp%d = temp%d + temp%d;\n",instructions[i].result, instructions[i].operand1, instructions[i].operand2);
        }
        else if (instructions[i].type == IR_SUBTRACT) {
            // for subtraction
            sprintf(code + strlen(code), "temp%d = temp%d - temp%d;\n", instructions[i].result, instructions[i].operand1, instructions[i].operand2);
        }
        else if (instructions[i].type == IR_MULTIPLY) {
            // for multiplication
            sprintf(code + strlen(code), "temp%d = temp%d * temp%d;\n", instructions[i].result, instructions[i].operand1, instructions[i].operand2);
        }
        else if (instructions[i].type == IR_DIVIDE) {
            // for division
            sprintf(code + strlen(code), "temp%d = temp%d / temp%d;\n", instructions[i].result, instructions[i].operand1, instructions[i].operand2);
        }
        else {
            fprintf(stderr, "Unsupported IR instruction\n");
            exit(EXIT_FAILURE);
        }
    }
    return code;
}
